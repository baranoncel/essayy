import { createBrowserClient, createServerClient } from '@supabase/ssr'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// For client-side operations (browser)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
  : null

// For server-side operations with service role
export const createServerSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not configured')
    return null
  }
  
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  if (!supabaseServiceKey) {
    console.warn('Supabase service role key not configured')
    return null
  }
  
  return createServerClient<Database>(supabaseUrl, supabaseServiceKey, {
    cookies: {},
  })
} 