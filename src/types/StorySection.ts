import type { LangText } from "../types/LangText";

export type StorySection = {
  text: LangText;
  ayah?: {
    text: string;
    ref: LangText;
    audioUrl?: string;
  };
};
