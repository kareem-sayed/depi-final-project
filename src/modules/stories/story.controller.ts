import type { Request, Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { sendSuccess } from '../../shared/utils/apiResponse.js';
import * as storyService from './story.service.js';

export const getStory = asyncHandler(async (req: Request, res: Response, next) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const story = await storyService.getStoryByProphetSlug(slug);

  if (!story) {
    const error = new Error(`Story for prophet with slug '${slug}' not found`);
    (error as any).statusCode = 404;
    return next(error);
  }

  return sendSuccess(res, story, 'Story retrieved successfully');
});

export const getStoryChapter = asyncHandler(async (req: Request, res: Response, next) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const { chapterNumber } = req.params;
  const chapter = await storyService.getStoryChapter(slug, Number(chapterNumber));

  if (!chapter) {
    const error = new Error(`Chapter ${chapterNumber} for story '${slug}' not found`);
    (error as any).statusCode = 404;
    return next(error);
  }

  return sendSuccess(res, chapter, 'Chapter retrieved successfully');
});
