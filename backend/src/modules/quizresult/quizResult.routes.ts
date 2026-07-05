import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validateRequest } from '../../middleware/validate.middleware.js';
import { submitQuizSchema } from '../../shared/schemas/admin.schema.js';
import * as QuizResultController from './quizResult.controller.js';

const router = Router();

// All routes require authentication
router.use(protect);

/**
 * @route   POST /api/quiz-results
 * @desc    Submit a quiz attempt — server grades it
 * @access  Private
 */
router.post(
  '/',
  validateRequest(submitQuizSchema),
  asyncHandler(QuizResultController.submitQuiz)
);

/**
 * @route   GET /api/quiz-results
 * @desc    Get all quiz results for the authenticated user (paginated)
 * @access  Private
 * @query   page (default: 1), limit (default: 10, max: 50)
 */
router.get('/', asyncHandler(QuizResultController.getMyResults));

/**
 * @route   GET /api/quiz-results/best/:quizId
 * @desc    Get the user's best score for a specific quiz
 * @access  Private
 */
router.get('/best/:quizId', asyncHandler(QuizResultController.getBestScore));

/**
 * @route   GET /api/quiz-results/:resultId
 * @desc    Get a single quiz result by ID
 * @access  Private
 */
router.get('/:resultId', asyncHandler(QuizResultController.getResultById));

export default router;
