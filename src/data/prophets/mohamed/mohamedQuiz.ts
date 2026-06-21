import type { ProphetQuiz } from "../../../types/ProphetQuiz";

export const mohamedQuiz: ProphetQuiz[] = [
  {
    question: {
      ar: "ما هو اسم والد النبي محمد؟",
      en: "What was the name of Prophet Muhammad’s father?",
    },
    options: [
      { ar: "عبد الله", en: "Abdullah" },
      { ar: "أبو بكر", en: "Abu Bakr" },
      { ar: "علي", en: "Ali" },
      { ar: "عثمان", en: "Uthman" },
    ],
    correctAnswer: 0,
    explanation: {
      ar: "النبي محمد هو ابن عبد الله بن عبد المطلب.",
      en: "Prophet Muhammad is the son of Abdullah ibn Abdul Muttalib.",
    },
  },
];
