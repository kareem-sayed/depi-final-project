import mongoose from "mongoose";
export interface IProgress {
  userId: mongoose.Schema.Types.ObjectId;
  prophetSlug: string;
  currentChapter: number;
  completed: boolean;
  lastReadAt: Date;
}

const progressSchema = new mongoose.Schema<IProgress>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    prophetSlug: {
      type: String,
      required: true,
    },
    currentChapter: {
      type: Number,
     default: 1,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lastReadAt: {
        type: Date,
        default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);  

export const Progress = mongoose.model<IProgress>("Progress", progressSchema);  
export default Progress

  