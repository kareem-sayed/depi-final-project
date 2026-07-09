import { Request, Response, NextFunction } from 'express';
import { sendSuccess, sendCreated } from '../../shared/utils/apiResponse.js';
import * as QuizResultService from './quizResult.service.js';

// ─── POST /quiz-results ───────────────────────────────────────────────────────

export const submitQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const result = await QuizResultService.submitQuiz(userId, req.body);
    sendCreated(res, result, 'Quiz submitted successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /quiz-results ────────────────────────────────────────────────────────

export const getMyResults = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const page  = Math.max(1, parseInt(req.query.page  as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 10));

    const data = await QuizResultService.getMyResults(userId, page, limit);
    sendSuccess(res, data, 'Quiz results retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /quiz-results/:resultId ──────────────────────────────────────────────

export const getResultById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { resultId } = req.params;

    // Validate resultId is a string
    if (Array.isArray(resultId)) {
      const error = new Error('Invalid resultId parameter') as Error & { statusCode: number };
      error.statusCode = 400;
      throw error;
    }

    const result = await QuizResultService.getResultById(resultId, userId);
    sendSuccess(res, result, 'Quiz result retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /quiz-results/best/:quizId ──────────────────────────────────────────

export const getBestScore = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { quizId } = req.params;

    // Validate quizId is a string
    if (Array.isArray(quizId)) {
      const error = new Error('Invalid quizId parameter') as Error & { statusCode: number };
      error.statusCode = 400;
      throw error;
    }

    const data = await QuizResultService.getBestScore(userId, quizId);
    sendSuccess(res, data, 'Best score retrieved successfully');
  } catch (error) {
    next(error);
  }
};
