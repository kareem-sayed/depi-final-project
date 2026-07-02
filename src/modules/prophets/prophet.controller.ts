import type { Request, Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { notFound } from '../../middleware/notFound.js';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as prophetService from './prophet.service.js';

export const getProphets = asyncHandler(async (req: Request, res: Response) => {
  
    const prophets = await prophetService.getAllProphets();
  return sendSuccess(res, prophets, 'Prophets retrieved successfully');
});
export const getProphet = asyncHandler(async (req: Request, res: Response, next) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const prophet = await prophetService.getProphetBySlug(slug);
  if (!prophet) {
    const error = new Error(`Prophet with slug '${slug}' not found`);
    (error as any).statusCode = 404;
    return next(error);
  }
  return sendSuccess(res, prophet, 'Prophet retrieved successfully');
});
