import { Types } from 'mongoose';
import Quiz from '../quizzes/quiz.model.js';
import { QuizResult, IQuizResult } from './quizResult.model.js';

const PASS_THRESHOLD = 60; // percent

// ─── Submit Quiz ──────────────────────────────────────────────────────────────

export interface SubmitQuizPayload {
  quizId: string;
  answers: number[]; // array of selected option indices, one per question
}

export const submitQuiz = async (
  userId: string,
  payload: SubmitQuizPayload
): Promise<IQuizResult> => {
  const quiz = await Quiz.findById(payload.quizId);
  if (!quiz) {
    const error = new Error('Quiz not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }

  const { questions } = quiz;

  if (payload.answers.length !== questions.length) {
    const error = new Error(
      `Expected ${questions.length} answers, received ${payload.answers.length}`
    ) as Error & { statusCode: number };
    error.statusCode = 400;
    throw error;
  }

  // Grade each answer
  let correctAnswers = 0;
  const answerDetails = questions.map((q, i) => {
    const isCorrect = payload.answers[i] === q.correctAnswer;
    if (isCorrect) correctAnswers++;
    return {
      questionIndex: i,
      selectedAnswer: payload.answers[i],
      correctAnswer: q.correctAnswer,
      isCorrect,
    };
  });

  const score = Math.round((correctAnswers / questions.length) * 100);
  const passed = score >= PASS_THRESHOLD;

  const result = await QuizResult.create({
    userId: new Types.ObjectId(userId),
    quizId: new Types.ObjectId(payload.quizId),
    score,
    totalQuestions: questions.length,
    correctAnswers,
    passed,
    answers: answerDetails,
  });

  return result;
};

// ─── Get My Results (paginated) ───────────────────────────────────────────────

export const getMyResults = async (
  userId: string,
  page: number,
  limit: number
): Promise<{ results: IQuizResult[]; total: number; page: number; pages: number }> => {
  const skip = (page - 1) * limit;

  const [results, total] = await Promise.all([
    QuizResult.find({ userId: new Types.ObjectId(userId) })
      .populate({ path: 'quizId', select: 'slug prophetId' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    QuizResult.countDocuments({ userId: new Types.ObjectId(userId) }),
  ]);

  return {
    results: results as unknown as IQuizResult[],
    total,
    page,
    pages: Math.ceil(total / limit),
  };
};

// ─── Get Single Result ────────────────────────────────────────────────────────

export const getResultById = async (
  resultId: string,
  userId: string
): Promise<IQuizResult> => {
  const result = await QuizResult.findById(resultId)
    .populate({ path: 'quizId', select: 'slug prophetId questions' })
    .lean();

  if (!result) {
    const error = new Error('Quiz result not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }

  // Users can only view their own results
  if (result.userId.toString() !== userId) {
    const error = new Error('Forbidden') as Error & { statusCode: number };
    error.statusCode = 403;
    throw error;
  }

  return result as unknown as IQuizResult;
};

// ─── Get Best Score for a Quiz ────────────────────────────────────────────────

export const getBestScore = async (
  userId: string,
  quizId: string
): Promise<{ bestScore: number | null; passed: boolean }> => {
  const best = await QuizResult.findOne({
    userId: new Types.ObjectId(userId),
    quizId: new Types.ObjectId(quizId),
  })
    .sort({ score: -1 })
    .select('score passed')
    .lean();

  return {
    bestScore: best ? best.score : null,
    passed: best ? best.passed : false,
  };
};
