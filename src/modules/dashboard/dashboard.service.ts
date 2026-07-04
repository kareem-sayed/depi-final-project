import { Types } from 'mongoose';
import Progress from '../progress/progress.mode.js';
import { QuizResult } from '../quizresult/quizResult.model.js';
import { Bookmark } from '../bookmarks/bookmark.model.js';
import { Achievement } from '../achievements/achievement.model.js';

// ─── Dashboard Data Shape ─────────────────────────────────────────────────────

export interface DashboardData {
  progress: {
    totalStarted: number;
    totalCompleted: number;
    completionRate: number; // percentage
    recentActivity: object[];
  };
  quizzes: {
    totalAttempted: number;
    totalPassed: number;
    averageScore: number;
    passRate: number; // percentage
  };
  bookmarks: {
    total: number;
    recent: object[];
  };
  achievements: {
    earned: number;
    total: number;
    recent: object[];
  };
}

const ACHIEVEMENT_TOTAL = 8; // must stay in sync with achievement.model.ts enum

// ─── Get Dashboard Stats ──────────────────────────────────────────────────────

export const getDashboardStats = async (userId: string): Promise<DashboardData> => {
  const userObjId = new Types.ObjectId(userId);

  const [
    progressStats,
    recentProgress,
    quizStats,
    bookmarkCount,
    recentBookmarks,
    achievementCount,
    recentAchievements,
  ] = await Promise.all([
    // Aggregate progress stats
    Progress.aggregate([
      { $match: { userId: userObjId } },
      {
        $group: {
          _id: null,
          totalStarted:   { $sum: 1 },
          totalCompleted: { $sum: { $cond: ['$completed', 1, 0] } },
        },
      },
    ]),

    // 5 most recently read
    Progress.find({ userId: userObjId })
      .sort({ lastReadAt: -1 })
      .limit(5)
      .select('prophetSlug currentChapter completed lastReadAt')
      .lean(),

    // Aggregate quiz stats
    QuizResult.aggregate([
      { $match: { userId: userObjId } },
      {
        $group: {
          _id: null,
          totalAttempted: { $sum: 1 },
          totalPassed:    { $sum: { $cond: ['$passed', 1, 0] } },
          averageScore:   { $avg: '$score' },
        },
      },
    ]),

    Bookmark.countDocuments({ userId: userObjId }),

    // 5 most recent bookmarks
    Bookmark.find({ userId: userObjId })
      .populate({ path: 'storyId', select: 'title summary coverImage' })
      .sort({ createdAt: -1 })
      .limit(5)
      .lean(),

    Achievement.countDocuments({ userId: userObjId }),

    // 3 most recently earned
    Achievement.find({ userId: userObjId })
      .sort({ earnedAt: -1 })
      .limit(3)
      .lean(),
  ]);

  const ps = progressStats[0] ?? { totalStarted: 0, totalCompleted: 0 };
  const qs = quizStats[0]    ?? { totalAttempted: 0, totalPassed: 0, averageScore: 0 };

  const completionRate = ps.totalStarted > 0
    ? Math.round((ps.totalCompleted / ps.totalStarted) * 100)
    : 0;

  const passRate = qs.totalAttempted > 0
    ? Math.round((qs.totalPassed / qs.totalAttempted) * 100)
    : 0;

  return {
    progress: {
      totalStarted:   ps.totalStarted,
      totalCompleted: ps.totalCompleted,
      completionRate,
      recentActivity: recentProgress,
    },
    quizzes: {
      totalAttempted: qs.totalAttempted,
      totalPassed:    qs.totalPassed,
      averageScore:   Math.round(qs.averageScore ?? 0),
      passRate,
    },
    bookmarks: {
      total:  bookmarkCount,
      recent: recentBookmarks,
    },
    achievements: {
      earned: achievementCount,
      total:  ACHIEVEMENT_TOTAL,
      recent: recentAchievements,
    },
  };
};
