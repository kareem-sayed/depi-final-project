import { Types } from 'mongoose';
import { Bookmark, IBookmark } from './bookmark.model';

// ─── Add Bookmark ────────────────────────────────────────────────────────────

export const addBookmark = async (
  userId: string,
  storyId: string
): Promise<IBookmark> => {
  const userObjId = new Types.ObjectId(userId);
  const storyObjId = new Types.ObjectId(storyId);

  // Check for existing bookmark before inserting to give a clean error message
  const existing = await Bookmark.findOne({ userId: userObjId, storyId: storyObjId });
  if (existing) {
    const error = new Error('Story is already bookmarked') as Error & { statusCode: number };
    error.statusCode = 409;
    throw error;
  }

  const bookmark = await Bookmark.create({ userId: userObjId, storyId: storyObjId });
  return bookmark;
};

// ─── Remove Bookmark ─────────────────────────────────────────────────────────

export const removeBookmark = async (
  userId: string,
  storyId: string
): Promise<void> => {
  const result = await Bookmark.findOneAndDelete({
    userId: new Types.ObjectId(userId),
    storyId: new Types.ObjectId(storyId),
  });

  if (!result) {
    const error = new Error('Bookmark not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }
};

// ─── Get All Bookmarks for a User ─────────────────────────────────────────────

export const getUserBookmarks = async (
  userId: string,
  page: number,
  limit: number
): Promise<{ bookmarks: IBookmark[]; total: number; page: number; pages: number }> => {
  const skip = (page - 1) * limit;

  const [bookmarks, total] = await Promise.all([
    Bookmark.find({ userId: new Types.ObjectId(userId) })
      .populate({
        path: 'storyId',
        select: 'title summary prophet coverImage readTime',
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Bookmark.countDocuments({ userId: new Types.ObjectId(userId) }),
  ]);

  return {
    bookmarks: bookmarks as unknown as IBookmark[],
    total,
    page,
    pages: Math.ceil(total / limit),
  };
};

// ─── Check if a Story is Bookmarked ──────────────────────────────────────────

export const isBookmarked = async (
  userId: string,
  storyId: string
): Promise<boolean> => {
  const bookmark = await Bookmark.exists({
    userId: new Types.ObjectId(userId),
    storyId: new Types.ObjectId(storyId),
  });

  return !!bookmark;
};
