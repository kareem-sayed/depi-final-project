import { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as AdminService from './admin.service.js';
import { UserRole } from '../users/User.model.js';

type AuthenticatedRequest = Request & {
  user: {
    id: string;
  };
};

const getParam = (value: string | string[] | undefined, name: string): string => {
  if (typeof value === 'string') {
    return value;
  }

  const error = new Error(`Missing route parameter: ${name}`) as Error & { statusCode: number };
  error.statusCode = 400;
  throw error;
};

// ─── GET /admin/users ─────────────────────────────────────────────────────────

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page  = Math.max(1, parseInt(req.query.page  as string) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20));
    const roleParam = req.query.role;
    const role: UserRole | undefined =
      roleParam === 'admin' || roleParam === 'user' ? roleParam : undefined;

    const data = await AdminService.getAllUsers(page, limit, role);
    sendSuccess(res, data, 'Users retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /admin/users/:userId ─────────────────────────────────────────────────

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = getParam(req.params.userId, 'userId');
    const user = await AdminService.getUserById(userId);
    sendSuccess(res, user, 'User retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── PATCH /admin/users/:userId/role ─────────────────────────────────────────

export const updateUserRole = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { role } = req.body as { role: UserRole };
    const userId = getParam(req.params.userId, 'userId');
    const user = await AdminService.updateUserRole(userId, role);
    sendSuccess(res, user, 'User role updated successfully');
  } catch (error) {
    next(error);
  }
};

// ─── DELETE /admin/users/:userId ──────────────────────────────────────────────

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = getParam(req.params.userId, 'userId');
    const requestingUserId = (req as AuthenticatedRequest).user.id;
    await AdminService.deleteUser(userId, requestingUserId);
    sendSuccess(res, null, 'User deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /admin/stats ─────────────────────────────────────────────────────────

export const getPlatformStats = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const stats = await AdminService.getPlatformStats();
    sendSuccess(res, stats, 'Platform stats retrieved successfully');
  } catch (error) {
    next(error);
  }
};
