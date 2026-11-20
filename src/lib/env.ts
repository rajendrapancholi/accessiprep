import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const ENV = createEnv({
  // Server-side environment variables
  server: {
    DATABASE_URL: z.url(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    NEXTAUTH_SECRET: z.string().min(1),
  },

  // Client-side environment variables
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.url(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.url(),
  },

  // All variables must be manually mapped here for Next.js bundling.
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },

  // Used to skip validation during the build process (e.g., in Docker builds).
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
