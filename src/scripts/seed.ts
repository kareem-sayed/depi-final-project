import dotenv from "dotenv";
import mongoose, { type Types } from "mongoose";
import { pathToFileURL } from "node:url";

dotenv.config();

type LangText = {
  ar: string;
  en: string;
};

type FrontendProphet = {
  slug: string;
  name: LangText;
  shortDesc: LangText;
  longDesc: LangText;
  order: number;
  ululAzm: boolean;
};

type StoryAyah = {
  text: string;
  ref: LangText;
  audioUrl?: string;
};

type StorySection = {
  text: LangText;
  ayah?: StoryAyah;
};

type StoryChapter = {
  title: LangText;
  sections: StorySection[];
};

type FrontendQuizQuestion = {
  question: LangText;
  options: LangText[];
  correctAnswer: number;
  explanation: LangText;
};

type FrontendStory = {
  slug: string;
  name: LangText;
  title: LangText;
  hero: LangText;
  era: LangText;
  location: LangText;
  NumOfChapters: number;
  chapters: StoryChapter[];
};

type FrontendData = {
  prophets: FrontendProphet[];
  prophetStories: Record<string, FrontendStory>;
  prophetQuizes: Record<string, FrontendQuizQuestion[]>;
};

const frontendDataUrl = (fileName: string): string => {
  return pathToFileURL(`${process.cwd()}/../FrontEnd/depi-final-project/src/data/${fileName}`).href;
};

const loadFrontendData = async (): Promise<FrontendData> => {
  const [{ prophets }] = await Promise.all([
    import(frontendDataUrl("prophetsList.ts")) as Promise<{ prophets: FrontendProphet[] }>,
  ]);

  const storyEntries = await Promise.all(
    prophets.map(async (prophet) => {
      const storyModule = await import(
        frontendDataUrl(`prophets/${prophet.slug}/${prophet.slug}Story.ts`)
      );
      const story = Object.values(storyModule).find((value): value is FrontendStory => {
        return Boolean(
          value &&
            typeof value === "object" &&
            "chapters" in value &&
            "hero" in value &&
            "location" in value
        );
      });

      if (!story) {
        throw new Error(`No story export found for prophet "${prophet.slug}"`);
      }

      return [prophet.slug, story] as const;
    })
  );

  const quizEntries = await Promise.all(
    prophets.map(async (prophet) => {
      const quizModule = await import(frontendDataUrl(`prophets/${prophet.slug}/${prophet.slug}Quiz.ts`));
      const quiz = Object.values(quizModule).find((value): value is FrontendQuizQuestion[] => {
        return Array.isArray(value);
      });

      if (!quiz) {
        throw new Error(`No quiz export found for prophet "${prophet.slug}"`);
      }

      return [prophet.slug, quiz] as const;
    })
  );

  const prophetStories = Object.fromEntries(storyEntries);
  const prophetQuizes = Object.fromEntries(quizEntries);

  return { prophets, prophetStories, prophetQuizes };
};

const normalizeSlug = (slug: string): string => slug.trim().toLowerCase();

const createProphetIdMap = (prophets: Array<FrontendProphet & { _id: Types.ObjectId }>) => {
  return new Map(prophets.map((prophet) => [normalizeSlug(prophet.slug), prophet._id]));
};

const getProphetId = (prophetIdsBySlug: Map<string, Types.ObjectId>, slug: string): Types.ObjectId => {
  const prophetId = prophetIdsBySlug.get(normalizeSlug(slug));

  if (!prophetId) {
    throw new Error(`No prophet found for slug "${slug}"`);
  }

  return prophetId;
};

const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/depi_project";

  mongoose.set("strictQuery", true);
  const connection = await mongoose.connect(mongoUri);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

const validateQuizQuestions = (slug: string, questions: FrontendQuizQuestion[]): void => {
  questions.forEach((question, index) => {
    if (question.options.length < 2) {
      throw new Error(`Quiz "${slug}" question ${index + 1} must have at least two options`);
    }

    if (!Number.isInteger(question.correctAnswer) || question.correctAnswer >= question.options.length) {
      throw new Error(`Quiz "${slug}" question ${index + 1} has an invalid correctAnswer index`);
    }
  });
};

const seedDatabase = async (): Promise<void> => {
  try {
    const { prophets, prophetStories, prophetQuizes } = await loadFrontendData();

    await connectDatabase();

    console.log("Clearing old data...");

    const db = mongoose.connection.db;

    if (!db) {
      throw new Error("MongoDB connection is not ready");
    }

    const prophetsCollection = db.collection("prophets");
    const storiesCollection = db.collection("stories");
    const quizzesCollection = db.collection("quizzes");

    await Promise.all([
      prophetsCollection.deleteMany({}),
      storiesCollection.deleteMany({}),
      quizzesCollection.deleteMany({}),
    ]);

    console.log("Seeding prophets...");

    const now = new Date();
    const prophetsToInsert = prophets.map((prophet) => ({
      ...prophet,
      slug: normalizeSlug(prophet.slug),
      _id: new mongoose.Types.ObjectId(),
      createdAt: now,
      updatedAt: now,
    }));

    await prophetsCollection.insertMany(prophetsToInsert, { ordered: true });
    const prophetIdsBySlug = createProphetIdMap(prophetsToInsert);

    console.log("Seeding stories...");

    const stories = Object.entries(prophetStories).map(([slug, story]) => ({
      prophetId: getProphetId(prophetIdsBySlug, slug),
      slug: normalizeSlug(slug),
      name: story.name,
      title: story.title,
      hero: story.hero,
      era: story.era,
      location: story.location,
      NumOfChapters: story.chapters.length,
      chapters: story.chapters,
      createdAt: now,
      updatedAt: now,
    }));

    await storiesCollection.insertMany(stories, { ordered: true });

    console.log("Seeding quizzes...");

    const quizzes = Object.entries(prophetQuizes).map(([slug, questions]) => {
      validateQuizQuestions(slug, questions);

      return {
        prophetId: getProphetId(prophetIdsBySlug, slug),
        slug: normalizeSlug(slug),
        questions,
        createdAt: now,
        updatedAt: now,
      };
    });

    await quizzesCollection.insertMany(quizzes, { ordered: true });

    console.log(
      `Database seeded successfully: ${prophetsToInsert.length} prophets, ${stories.length} stories, ${quizzes.length} quizzes`
    );
  } catch (error) {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

void seedDatabase();
