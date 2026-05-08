import type { LangText } from "./LangText";
import type { StorySection } from "./StorySection";

export type StoryChapters = {
  title: LangText;
  sections: StorySection[];
};