import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../modules/users/User.model.js';


const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      const error = new Error('Unauthorized');
      (error as any).statusCode = 401;
      return next(error);
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      role: string;
    };

    const user = await User.findById(decoded.userId);

    if (!user) {
      const error = new Error('User not found');
      (error as any).statusCode = 401;
      return next(error);
    }

    req.user = user;

    next();
  } catch {
    const error = new Error('Invalid token');
    (error as any).statusCode = 401;
    return next(error);
  }
};