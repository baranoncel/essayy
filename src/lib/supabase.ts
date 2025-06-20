import { createBrowserClient, createServerClient } from '@supabase/ssr'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// For client-side operations (browser)
export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)

// For server-side operations with service role
export const createServerSupabaseClient = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createServerClient<Database>(supabaseUrl, supabaseServiceKey, {
    cookies: {},
  })
} 