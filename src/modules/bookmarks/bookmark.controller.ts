import { Request, Response, NextFunction } from 'express';
import { sendSuccess, sendCreated } from '../../shared/utils/apiResponse.js';
import * as BookmarkService from './bookmark.service.js';

// ─── POST /bookmarks/:storyId ─────────────────────────────────────────────────

export const addBookmark = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { storyId } = req.params;

    const bookmark = await BookmarkService.addBookmark(userId, storyId);

    sendCreated(res, bookmark, 'Story bookmarked successfully');
  } catch (error) {
    next(error);
  }
};

// ─── DELETE /bookmarks/:storyId ───────────────────────────────────────────────

export const removeBookmark = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { storyId } = req.params;

    await BookmarkService.removeBookmark(userId, storyId);

    sendSuccess(res, null, 'Bookmark removed successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /bookmarks ───────────────────────────────────────────────────────────

export const getUserBookmarks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 10));

    const result = await BookmarkService.getUserBookmarks(userId, page, limit);

    sendSuccess(res, result, 'Bookmarks retrieved successfully');
  } catch (error) {
    next(error);
  }
};

// ─── GET /bookmarks/:storyId/check ────────────────────────────────────────────

export const checkBookmark = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { storyId } = req.params;

    const bookmarked = await BookmarkService.isBookmarked(userId, storyId);

    sendSuccess(res, { bookmarked }, 'Bookmark status retrieved');
  } catch (error) {
    next(error);
  }
};
