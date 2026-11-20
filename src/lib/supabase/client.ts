import { createBrowserClient } from "@supabase/ssr";
import { ENV } from '../env';

export const createClient = () =>
  createBrowserClient(
    ENV.NEXT_PUBLIC_SUPABASE_URL,
    ENV.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );