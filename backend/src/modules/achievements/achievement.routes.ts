import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import * as AchievementController from './achievement.controller.js';

const router = Router();

router.use(protect);

/**
 * @route   GET /api/achievements
 * @desc    Get all earned achievements + summary for the authenticated user
 * @access  Private
 */
router.get('/', asyncHandler(AchievementController.getMyAchievements));

/**
 * @route   POST /api/achievements/check
 * @desc    Re-evaluate and award any newly unlocked achievements
 * @access  Private
 * @note    Call this after completing a story, passing a quiz, or adding a bookmark
 */
router.post('/check', asyncHandler(AchievementController.checkAchievements));

export default router;
