import type { LangText } from "../types/LangText";
import type { StoryChapters } from "./StoryChapters";

export type ProphetStory = {
  slug: string;
  name: LangText;
  title: LangText;
  hero: LangText;
  era: LangText;
  location: LangText;
  NumOfChapters: Number;
  chapters: StoryChapters[];
};
