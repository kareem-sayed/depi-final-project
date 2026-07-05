import mongoose, { Schema, Document, Types } from 'mongoose';

export type AchievementType =
  | 'first_story'        // completed first story
  | 'story_streak_5'     // completed 5 stories
  | 'story_streak_10'    // completed 10 stories
  | 'quiz_passed'        // passed first quiz
  | 'quiz_perfect'       // scored 100% on a quiz
  | 'quiz_streak_5'      // passed 5 quizzes
  | 'first_bookmark'     // added first bookmark
  | 'prophet_complete';  // completed all stories for a prophet

export interface IAchievement extends Document {
  userId: Types.ObjectId;
  type: AchievementType;
  title: string;
  description: string;
  icon: string;          // emoji or icon key for the frontend
  earnedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const achievementSchema = new Schema<IAchievement>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: [
        'first_story',
        'story_streak_5',
        'story_streak_10',
        'quiz_passed',
        'quiz_perfect',
        'quiz_streak_5',
        'first_bookmark',
        'prophet_complete',
      ],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    earnedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// A user can only earn each achievement type once
achievementSchema.index({ userId: 1, type: 1 }, { unique: true });

export const Achievement = mongoose.model<IAchievement>('Achievement', achievementSchema);
