import mongoose, { type Types } from "mongoose";
import { langTextSchema } from "../../shared/schemas/index.js";
import type { LangText } from "../../shared/types/index.js";

export interface IStoryAyah {
  text: string;
  ref: LangText;
  audioUrl?: string;
}

export interface IStorySection {
  text: LangText;
  ayah?: IStoryAyah;
}

export interface IStoryChapter {
  title: LangText;
  sections: IStorySection[];
}

export interface IStory {
  prophetId: Types.ObjectId;
  slug: string;
  name: LangText;
  title: LangText;
  hero: LangText;
  era: LangText;
  location: LangText;
  NumOfChapters: number;
  chapters: IStoryChapter[];
}

const ayahSchema = new mongoose.Schema<IStoryAyah>(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    ref: {
      type: langTextSchema,
      required: true,
    },
    audioUrl: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const storySectionSchema = new mongoose.Schema<IStorySection>(
  {
    text: {
      type: langTextSchema,
      required: true,
    },
    ayah: {
      type: ayahSchema,
    },
  },
  { _id: false }
);

const storyChapterSchema = new mongoose.Schema<IStoryChapter>(
  {
    title: {
      type: langTextSchema,
      required: true,
    },
    sections: {
      type: [storySectionSchema],
      default: [],
    },
  },
  { _id: false }
);

const storySchema = new mongoose.Schema<IStory>(
  {
    prophetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prophet",
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    name: {
      type: langTextSchema,
      required: [true, "Name is required"],
    },
    title: {
      type: langTextSchema,
      required: [true, "Title is required"],
    },
    hero: {
      type: langTextSchema,
      required: [true, "Hero text is required"],
    },
    era: {
      type: langTextSchema,
      required: [true, "Era is required"],
    },
    location: {
      type: langTextSchema,
      required: [true, "Location is required"],
    },
    NumOfChapters: {
      type: Number,
      required: [true, "Number of chapters is required"],
      min: 0,
    },
    chapters: {
      type: [storyChapterSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

storySchema.pre("validate", function syncChapterCount(next) {
  this.NumOfChapters = this.chapters.length;
  next();
});

const Story = mongoose.model<IStory>("Story", storySchema);
export default Story;
