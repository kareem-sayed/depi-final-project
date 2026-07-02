import mongoose from "mongoose";
export interface IQuizResult {
  userId: mongoose.Schema.Types.ObjectId;
  prophetSlug: string;
  score: number;
  totalQuestions: number;
  submittedAt: Date;
}

const quizResultSchema = new mongoose.Schema<IQuizResult>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    prophetSlug: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const QuizResult = mongoose.model<IQuizResult>("QuizResult", quizResultSchema);

export default QuizResult;