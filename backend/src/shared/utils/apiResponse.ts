import type { Response } from 'express';

export const sendSuccess = <T>(
  res: Response,
  data: T | null = null,
  message = 'Success',
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const sendCreated = <T>(res: Response, data: T | null = null, message = 'Created') => {
  return sendSuccess(res, data, message, 201);
};
