import type { RequestHandler } from 'express';

type NotFoundError = Error & {
  statusCode?: number;
};

export const notFound: RequestHandler = (req, _res, next) => {
  const error: NotFoundError = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
