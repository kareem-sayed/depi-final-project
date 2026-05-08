import type { LangText } from "../types/LangText";
import type { StoryChapters } from "./StoryChapters";

export type ProphetStory = {
  name: LangText;
  title: LangText;
  era: LangText;
  location: LangText;
  hero: LangText;
  chapters: StoryChapters[];
};