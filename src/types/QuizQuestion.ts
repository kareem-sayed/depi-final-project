import type { LangText } from "./LangText";

export type QuizQuestion = {
  q: LangText;
  options: LangText[];
  answer: number; // index
  explanation: LangText;
};