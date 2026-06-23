import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

const isConfigured =
  supabaseUrl.startsWith("http") && supabaseAnonKey.length > 20;

const nullClient = {
  from: () => ({
    select: () => ({
      eq: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: null }),
          order: () => Promise.resolve({ data: [], error: null }),
          then: (fn: any) => Promise.resolve({ data: null }).then(fn),
        }),
        order: () => ({
          then: (fn: any) => Promise.resolve({ data: [] }).then(fn),
        }),
        single: () => Promise.resolve({ data: null, error: null }),
        then: (fn: any) => Promise.resolve({ data: [] }).then(fn),
      }),
      order: () => ({
        then: (fn: any) => Promise.resolve({ data: [] }).then(fn),
      }),
      then: (fn: any) => Promise.resolve({ data: [] }).then(fn),
    }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => ({
      eq: () => Promise.resolve({ data: null, error: null }),
    }),
    delete: () => ({
      eq: () => Promise.resolve({ data: null, error: null }),
    }),
  }),
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
    signInWithPassword: () =>
      Promise.resolve({
        data: { user: null, session: null },
        error: { message: "Supabase not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local" },
      }),
    signOut: () => Promise.resolve({ error: null }),
  },
} as unknown as SupabaseClient;

export const supabase: SupabaseClient = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : nullClient;
