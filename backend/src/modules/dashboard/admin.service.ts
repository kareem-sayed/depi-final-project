import { Types } from 'mongoose';
import User, { UserRole } from '../users/User.model.js';
import { QuizResult } from '../quizresult/quizResult.model.js';
import { Achievement } from '../achievements/achievement.model.js';
import { Bookmark } from '../bookmarks/bookmark.model.js';
import Progress from '../progress/progress.mode.js';


export const getAllUsers = async (
  page: number,
  limit: number,
  role?: UserRole
): Promise<{ users: object[]; total: number; page: number; pages: number }> => {
  const filter = role ? { role } : {};
  const skip = (page - 1) * limit;

  const [users, total] = await Promise.all([
    User.find(filter)
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    User.countDocuments(filter),
  ]);

  return { users, total, page, pages: Math.ceil(total / limit) };
};


export const getUserById = async (userId: string): Promise<object> => {
  const user = await User.findById(userId).select('-password').lean();
  if (!user) {
    const error = new Error('User not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }
  return user;
};


export const updateUserRole = async (
  userId: string,
  role: UserRole
): Promise<object> => {
  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) {
    const error = new Error('User not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }

  return user;
};


export const deleteUser = async (
  targetUserId: string,
  requestingUserId: string
): Promise<void> => {
  if (targetUserId === requestingUserId) {
    const error = new Error('Admin cannot delete their own account') as Error & { statusCode: number };
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findByIdAndDelete(targetUserId);
  if (!user) {
    const error = new Error('User not found') as Error & { statusCode: number };
    error.statusCode = 404;
    throw error;
  }

  // Delete all associated data for the user
  const objId = new Types.ObjectId(targetUserId);
  await Promise.all([
    Progress.deleteMany({ userId: objId }),
    QuizResult.deleteMany({ userId: objId }),
    Bookmark.deleteMany({ userId: objId }),
    Achievement.deleteMany({ userId: objId }),
  ]);
};

// ─── Platform Overview Stats ──────────────────────────────────────────────────

export const getPlatformStats = async (): Promise<object> => {
  const [
    totalUsers,
    totalAdmins,
    totalQuizAttempts,
    totalBookmarks,
    totalAchievements,
    totalCompletedStories,
  ] = await Promise.all([
    User.countDocuments({ role: 'user' }),
    User.countDocuments({ role: 'admin' }),
    QuizResult.countDocuments(),
    Bookmark.countDocuments(),
    Achievement.countDocuments(),
    Progress.countDocuments({ completed: true }),
  ]);

  const avgScoreAgg = await QuizResult.aggregate([
    { $group: { _id: null, avg: { $avg: '$score' } } },
  ]);

  return {
    users:           { total: totalUsers, admins: totalAdmins },
    quizzes:         { totalAttempts: totalQuizAttempts, averageScore: Math.round(avgScoreAgg[0]?.avg ?? 0) },
    bookmarks:       { total: totalBookmarks },
    achievements:    { total: totalAchievements },
    storiesCompleted: totalCompletedStories,
  };
};
