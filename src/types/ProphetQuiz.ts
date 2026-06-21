import type { LangText } from "./LangText";

export type ProphetQuiz = {
  question: LangText;
  options: LangText[];
  correctAnswer: number; // index
  explanation: LangText;
};
