import Story from './story.model.js';

export const getStoryByProphetSlug = async (slug: string) => {
  return await Story.findOne({ slug });
};

export const getStoryChapter = async (slug: string, chapterNumber: number) => {
  const story = await Story.findOne({ slug });
  if (!story) return null;
  
  // Assuming chapterNumber is 1-indexed
  const chapterIndex = chapterNumber - 1;
  
  if (chapterIndex < 0 || chapterIndex >= story.chapters.length) {
    return null;
  }
  
  return {
    prophetId: story.prophetId,
    slug: story.slug,
    name: story.name,
    chapter: story.chapters[chapterIndex],
    totalChapters: story.NumOfChapters,
    currentChapterNumber: chapterNumber
  };
};
