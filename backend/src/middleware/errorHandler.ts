import type { ErrorRequestHandler } from 'express';

type AppError = Error & {
  statusCode?: number;
  errors?: unknown;
};

export const errorHandler: ErrorRequestHandler = (error: AppError, _req, res, _next) => {
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: error.message || 'Server error',
    errors: error.errors || undefined
  });
};
