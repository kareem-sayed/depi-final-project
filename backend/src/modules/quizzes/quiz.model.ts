import mongoose, { type Types } from "mongoose";
import { langTextSchema } from "../../shared/schemas/index.js";
import type { LangText } from "../../shared/types/index.js";

export interface IQuizQuestion {
  question: LangText;
  options: LangText[];
  correctAnswer: number;
  explanation: LangText;
}

export interface IQuiz {
  prophetId: Types.ObjectId;
  slug: string;
  questions: IQuizQuestion[];
}

const quizQuestionSchema = new mongoose.Schema<IQuizQuestion>(
  {
    question: {
      type: langTextSchema,
      required: [true, "Question is required"],
    },
    options: {
      type: [langTextSchema],
      required: [true, "Options are required"],
      validate: {
        validator(options: LangText[]) {
          return options.length >= 2;
        },
        message: "A quiz question must have at least two options",
      },
    },
    correctAnswer: {
      type: Number,
      required: [true, "Correct answer is required"],
      min: 0,
      validate: {
        validator(this: IQuizQuestion, correctAnswer: number) {
          return Number.isInteger(correctAnswer) && correctAnswer < this.options.length;
        },
        message: "Correct answer must be a valid option index",
      },
    },
    explanation: {
      type: langTextSchema,
      required: [true, "Explanation is required"],
    },
  },
  { _id: false }
);

const quizSchema = new mongoose.Schema<IQuiz>(
  {
    prophetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prophet",
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    questions: {
      type: [quizQuestionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model<IQuiz>("Quiz", quizSchema);
export default Quiz;
