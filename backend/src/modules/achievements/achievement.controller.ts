import { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as AchievementService from './achievement.service.js';

// ─── GET /achievements ────────────────────────────────────────────────────────

export const getMyAchievements = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const summary = await AchievementService.getAchievementSummary(userId);
    sendSuccess(res, summary, 'Achievements retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── POST /achievements/check ─────────────────────────────────────────────────

export const checkAchievements = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const newlyAwarded = await AchievementService.checkAndAwardAchievements(userId);
    sendSuccess(
      res,
      { newlyAwarded, count: newlyAwarded.length },
      newlyAwarded.length > 0
        ? `You earned ${newlyAwarded.length} new achievement(s)!`
        : 'No new achievements'
    );
  } catch (error) {
    next(error);
  }
};
