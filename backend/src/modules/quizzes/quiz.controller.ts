import type { Request, Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as quizService from './quiz.service.js';

export const getQuiz = asyncHandler(async (req: Request, res: Response, next) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const quiz = await quizService.getQuizByProphetSlug(slug);

  if (!quiz) {
    const error = new Error(`Quiz for prophet with slug '${slug}' not found`);
    (error as any).statusCode = 404;
    return next(error);
  }

  // Hide the correctAnswer from the response so users can't cheat
  const sanitizedQuiz = {
    ...quiz.toObject(),
    questions: quiz.questions.map(q => ({
      question: q.question,
      options: q.options,
    }))
  };

  return sendSuccess(res, sanitizedQuiz, 'Quiz retrieved successfully');
});
export const submitQuiz = asyncHandler(async (req: Request, res: Response, next) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const answers = req.body.answers;

  if (!Array.isArray(answers) || !answers.every(Number.isInteger)) {
    const error = new Error('Answers must be an array of option indexes');
    (error as any).statusCode = 400;
    return next(error);
  }

  const result = await quizService.submitQuiz(slug, answers);

  return sendSuccess(res, result, 'Quiz submitted successfully');
});
