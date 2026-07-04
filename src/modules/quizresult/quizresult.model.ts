import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IAnswerDetail {
  questionIndex: number;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

export interface IQuizResult extends Document {
  userId: Types.ObjectId;
  quizId: Types.ObjectId;
  score: number;          // percentage 0–100
  totalQuestions: number;
  correctAnswers: number;
  passed: boolean;
  answers: IAnswerDetail[];
  createdAt: Date;
  updatedAt: Date;
}

const answerDetailSchema = new Schema<IAnswerDetail>(
  {
    questionIndex: { type: Number, required: true },
    selectedAnswer: { type: Number, required: true },
    correctAnswer:  { type: Number, required: true },
    isCorrect:      { type: Boolean, required: true },
  },
  { _id: false }
);

const quizResultSchema = new Schema<IQuizResult>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
      index: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    totalQuestions: {
      type: Number,
      required: true,
      min: 1,
    },
    correctAnswers: {
      type: Number,
      required: true,
      min: 0,
    },
    passed: {
      type: Boolean,
      required: true,
    },
    answers: {
      type: [answerDetailSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const QuizResult = mongoose.model<IQuizResult>('QuizResult', quizResultSchema);