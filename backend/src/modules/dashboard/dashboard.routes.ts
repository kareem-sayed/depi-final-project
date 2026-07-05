import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import * as DashboardController from './dashboard.controller.js';

const router = Router();

router.use(protect);

/**
 * @route   GET /api/dashboard
 * @desc    Get aggregated stats: progress, quizzes, bookmarks, achievements
 * @access  Private
 */
router.get('/', asyncHandler(DashboardController.getDashboard));

export default router;
