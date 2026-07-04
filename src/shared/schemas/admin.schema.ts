import { z } from 'zod';

const objectIdRegex = /^[a-f\d]{24}$/i;

export const submitQuizSchema = z.object({
  body: z.object({
    quizId: z
      .string({ error: 'Quiz ID is required' })
      .regex(objectIdRegex, 'Quiz ID must be a valid MongoDB ObjectId'),
    answers: z
      .array(z.number().int().min(0))
      .min(1, 'At least one answer is required'),
  }),
});

export const updateUserRoleSchema = z.object({
  body: z.object({
    role: z.enum(['admin', 'user'], { error: 'Role must be admin or user' }),
  }),
});
