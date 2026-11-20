import { z } from 'zod';

export const registerSchema = z
  .object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.email('Please enter a valid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .regex(/[A-Z]/, 'At least one uppercase character (A-Z)')
      .regex(/[a-z]/, 'At least one lowercase character (a-z)')
      .regex(/[0-9]/, 'At least one number (0-9)')
      .regex(/[^A-Za-z0-9]/, 'At least one special character (@, #, $, etc.)'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'At least one uppercase character (A-Z)')
    .regex(/[a-z]/, 'At least one lowercase character (a-z)')
    .regex(/[0-9]/, 'At least one number (0-9)')
    .regex(/[^A-Za-z0-9]/, 'At least one special character (@, #, $, etc.)'),
    rememberMe: z.boolean(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
