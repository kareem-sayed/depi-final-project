import { z } from 'zod';

const nameRegex = /^[\p{L}\s]{3,30}$/u;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?[1-9]\d{1,14})$/;

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

export const updateProfileSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .trim()
      .optional(),
    phone: z
      .string()
      .regex(phoneRegex, 'Invalid phone number format')
      .optional(),
    avatar: z
      .string()
      .url('Avatar must be a valid URL')
      .optional(),
  }).strict(),
});
