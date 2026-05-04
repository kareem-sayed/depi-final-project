import type { QuizQuestion } from "../types/QuizQuestion";

export const prophetQuizzes: Record<string, QuizQuestion[]> = {
  adam: [
    {
      q: { ar: "من ماذا خلق الله آدم؟", en: "From what was Adam created?" },
      options: [{ ar: "من طين", en: "From clay" }, { ar: "من نار", en: "From fire" }, { ar: "من ماء", en: "From water" }, { ar: "من هواء", en: "From air" }],
      answer: 0,
      explanation: { ar: "خلق الله آدم من طين ونفخ فيه من روحه.", en: "Allah created Adam from clay and breathed into him from His spirit." },
    },
    {
      q: { ar: "ماذا أمر الله الملائكة عند خلق آدم؟", en: "What did Allah command the angels to do when creating Adam?" },
      options: [{ ar: "بالسجود له", en: "To prostrate before him" }, { ar: "بالابتعاد عنه", en: "To stay away from him" }, { ar: "بتعليمه", en: "To teach him" }, { ar: "بمحاربته", en: "To fight him" }],
      answer: 0,
      explanation: { ar: "أمر الله الملائكة بالسجود لآدم تكريمًا له فسجدوا إلا إبليس.", en: "Allah commanded the angels to prostrate before Adam in honor of him, so they all did except Iblis." },
    },
    {
      q: { ar: "ما الشجرة التي نُهي عنها آدم؟", en: "What tree was Adam forbidden from approaching?" },
      options: [{ ar: "شجرة التين", en: "The fig tree" }, { ar: "شجرة الزيتون", en: "The olive tree" }, { ar: "شجرة معينة في الجنة", en: "A specific tree in Paradise" }, { ar: "شجرة الرمان", en: "The pomegranate tree" } ],
      answer: 2,
      explanation: { ar: "نهى الله آدم وحواء عن الاقتراب من شجرة معينة في الجنة.", en: "Allah forbade Adam and Hawwa from approaching a specific tree in Paradise." },
    },
  ],
};