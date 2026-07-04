import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import * as BookmarkController from './bookmark.controller.js';

const router = Router();

// All bookmark routes require authentication
router.use(protect);

/**
 * @route   GET /api/bookmarks
 * @desc    Get all bookmarks for the authenticated user (paginated)
 * @access  Private
 * @query   page (default: 1), limit (default: 10, max: 50)
 */
router.get('/', asyncHandler(BookmarkController.getUserBookmarks));

/**
 * @route   POST /api/bookmarks/:storyId
 * @desc    Bookmark a story
 * @access  Private
 */
router.post('/:storyId', asyncHandler(BookmarkController.addBookmark));

/**
 * @route   GET /api/bookmarks/:storyId/check
 * @desc    Check if the authenticated user has bookmarked a story
 * @access  Private
 */
router.get('/:storyId/check', asyncHandler(BookmarkController.checkBookmark));

/**
 * @route   DELETE /api/bookmarks/:storyId
 * @desc    Remove a bookmark
 * @access  Private
 */
router.delete('/:storyId', asyncHandler(BookmarkController.removeBookmark));

export default router;
