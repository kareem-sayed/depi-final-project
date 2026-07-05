import { z } from 'zod';

const nameRegex = /^[A-Za-z\s]{3,30}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Name is required' })
      .regex(nameRegex, 'Name must be 3-30 characters and contain letters only'),
    email: z
      .string({ error: 'Email is required' })
      .email('Invalid email format')
      .regex(emailRegex, 'Invalid email format'),
    password: z
      .string({ error: 'Password is required' })
      .regex(passwordRegex, 'Password must be 6-20 chars with uppercase, lowercase and number'),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string({ error: 'Email is required' }).email('Invalid email format'),
    password: z.string({ error: 'Password is required' }),
  }),
});
