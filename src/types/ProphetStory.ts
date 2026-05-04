import type { LangText } from "../types/LangText";
import type { StorySection } from "./StorySection";

export type ProphetStory = {
  name: LangText;
  title: LangText;
  era: LangText;
  location: LangText;
  hero: LangText;
  sections: StorySection[];
};