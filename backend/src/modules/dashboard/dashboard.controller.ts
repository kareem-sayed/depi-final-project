import { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as DashboardService from './dashboard.service.js';

// ─── GET /dashboard ───────────────────────────────────────────────────────────

export const getDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const data = await DashboardService.getDashboardStats(userId);
    sendSuccess(res, data, 'Dashboard loaded successfully');
  } catch (error) {
    next(error);
  }
};
