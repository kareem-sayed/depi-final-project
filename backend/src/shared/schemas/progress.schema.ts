import { z } from 'zod';

export const saveProgressSchema = z.object({
  body: z.object({
    prophetSlug: z.string({ error: 'Prophet slug is required' }).min(1, 'Prophet slug is required'),
    currentChapter: z
      .number({ error: 'Current chapter must be a number' })
      .int('Current chapter must be an integer')
      .min(1, 'Current chapter must be at least 1'),
    completed: z.boolean().optional(),
  }),
});
