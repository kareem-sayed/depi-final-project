import { Types } from 'mongoose';
import { Achievement, AchievementType, IAchievement } from './achievement.model.js';
import { QuizResult } from '../quizresult/quizResult.model.js';
import { Bookmark } from '../bookmarks/bookmark.model.js';
import Progress from '../progress/progress.mode.js';

// ─── Achievement Definitions ──────────────────────────────────────────────────

interface AchievementDefinition {
  type: AchievementType;
  title: string;
  description: string;
  icon: string;
}

const ACHIEVEMENT_DEFINITIONS: Record<AchievementType, AchievementDefinition> = {
  first_story:      { type: 'first_story',      title: 'First Steps',        description: 'Completed your first story',              icon: '📖' },
  story_streak_5:   { type: 'story_streak_5',   title: 'Avid Reader',        description: 'Completed 5 stories',                     icon: '📚' },
  story_streak_10:  { type: 'story_streak_10',  title: 'Scholar',            description: 'Completed 10 stories',                    icon: '🎓' },
  quiz_passed:      { type: 'quiz_passed',       title: 'Quiz Taker',         description: 'Passed your first quiz',                  icon: '✅' },
  quiz_perfect:     { type: 'quiz_perfect',      title: 'Perfectionist',      description: 'Scored 100% on a quiz',                   icon: '🌟' },
  quiz_streak_5:    { type: 'quiz_streak_5',     title: 'Quiz Champion',      description: 'Passed 5 quizzes',                        icon: '🏆' },
  first_bookmark:   { type: 'first_bookmark',    title: 'Bookworm',           description: 'Saved your first bookmark',               icon: '🔖' },
  prophet_complete: { type: 'prophet_complete',  title: 'Deep Dive',          description: 'Completed all stories for a prophet',     icon: '⭐' },
};

// ─── Core Award Function (idempotent) ─────────────────────────────────────────

const awardIfNotEarned = async (
  userId: Types.ObjectId,
  type: AchievementType
): Promise<IAchievement | null> => {
  const def = ACHIEVEMENT_DEFINITIONS[type];
  try {
    // insertOne with unique index — silently skips duplicates
    const achievement = await Achievement.create({
      userId,
      ...def,
      earnedAt: new Date(),
    });
    return achievement;
  } catch (err: any) {
    // Duplicate key error (code 11000) means already earned — that's fine
    if (err.code === 11000) return null;
    throw err;
  }
};

// ─── Check & Award All Applicable Achievements ───────────────────────────────

export const checkAndAwardAchievements = async (
  userId: string
): Promise<IAchievement[]> => {
  const userObjId = new Types.ObjectId(userId);
  const awarded: IAchievement[] = [];

  const [
    completedStories,
    passedQuizzes,
    perfectQuizzes,
    bookmarkCount,
  ] = await Promise.all([
    Progress.countDocuments({ userId: userObjId, completed: true }),
    QuizResult.countDocuments({ userId: userObjId, passed: true }),
    QuizResult.countDocuments({ userId: userObjId, score: 100 }),
    Bookmark.countDocuments({ userId: userObjId }),
  ]);

  const checks: Array<{ condition: boolean; type: AchievementType }> = [
    { condition: completedStories >= 1,  type: 'first_story' },
    { condition: completedStories >= 5,  type: 'story_streak_5' },
    { condition: completedStories >= 10, type: 'story_streak_10' },
    { condition: passedQuizzes >= 1,     type: 'quiz_passed' },
    { condition: perfectQuizzes >= 1,    type: 'quiz_perfect' },
    { condition: passedQuizzes >= 5,     type: 'quiz_streak_5' },
    { condition: bookmarkCount >= 1,     type: 'first_bookmark' },
  ];

  for (const { condition, type } of checks) {
    if (condition) {
      const result = await awardIfNotEarned(userObjId, type);
      if (result) awarded.push(result);
    }
  }

  return awarded;
};

// ─── Get All Achievements for a User ─────────────────────────────────────────

export const getUserAchievements = async (
  userId: string
): Promise<IAchievement[]> => {
  return Achievement.find({ userId: new Types.ObjectId(userId) })
    .sort({ earnedAt: -1 })
    .lean() as unknown as IAchievement[];
};

// ─── Get Achievement Summary ──────────────────────────────────────────────────

export const getAchievementSummary = async (
  userId: string
): Promise<{ earned: number; total: number; achievements: IAchievement[] }> => {
  const achievements = await getUserAchievements(userId);
  return {
    earned: achievements.length,
    total: Object.keys(ACHIEVEMENT_DEFINITIONS).length,
    achievements,
  };
};
