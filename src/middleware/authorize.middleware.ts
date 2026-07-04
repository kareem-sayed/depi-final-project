import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../modules/users/User.model.js';

/**
 * Role-based access control middleware.
 * Must be used AFTER the `protect` middleware (req.user must be set).
 *
 * Usage:
 *   router.delete('/users/:id', protect, authorize('admin'), controller)
 */
export const authorize = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      const error = new Error('Unauthorized') as Error & { statusCode: number };
      error.statusCode = 401;
      return next(error);
    }

    if (!roles.includes(req.user.role as UserRole)) {
      const error = new Error('Forbidden: insufficient permissions') as Error & { statusCode: number };
      error.statusCode = 403;
      return next(error);
    }

    next();
  };
};
