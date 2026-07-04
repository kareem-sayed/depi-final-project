import Progress from "./progress.mode.js";

export const getProgressByUser = async (userId: string) => {
  return await Progress.find({ userId }).sort({ updatedAt: -1 });
};
export const saveProgress = async (
  userId: string,
  prophetSlug: string,
  currentChapter: number,
  completed = false,
) => {
  return await Progress.findOneAndUpdate(
    {
      userId,
      prophetSlug,
    },
    { currentChapter, completed, lastReadAt: new Date() },
    { new: true, upsert: true },
  );
};
