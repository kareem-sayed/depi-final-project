import type { LangText } from "../types/LangText";

export type StorySection = {
  title: LangText;
  body: LangText;
  ayah?: { text: string; ref: LangText }; // Quoted verse is only in arabic, reference is in both languages
  ayahAudioUrl?: string; // Optional URL for the audio of the quoted verse
};
