import  mongoose from 'mongoose';
export interface IAchievement {
  userId: mongoose.Schema.Types.ObjectId;
  badges: string[];
  totalPoints: number;
}
const achievementSchema = new mongoose.Schema<IAchievement>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    badges: [
      {
        type: String,
      },
    ],
    totalPoints: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Achievement = mongoose.model<IAchievement>(
  "Achievement",
  achievementSchema
);

export default Achievement;