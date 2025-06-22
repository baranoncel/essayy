'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

interface AuthContextType {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if supabase is available
    if (!supabase) {
      console.warn('Supabase not configured, skipping auth')
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        if (!supabase) return
        
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
        }
        
        console.log('Initial session check:', {
          hasSession: !!session,
          userId: session?.user?.id,
          email: session?.user?.email,
          provider: session?.user?.app_metadata?.provider
        })
        
        setUser(session?.user ?? null)
        setLoading(false)

        // Track initial session state
        if (session?.user) {
          trackEvent('user_session_restored', {
            user_id: session.user.id,
            user_email: session.user.email,
            provider: session.user.app_metadata?.provider
          })
        }
      } catch (error) {
        console.error('Failed to get initial session:', error)
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log('Auth state change:', {
            event,
            hasSession: !!session,
            userId: session?.user?.id,
            email: session?.user?.email,
            provider: session?.user?.app_metadata?.provider
          })
          
          setUser(session?.user ?? null)
          setLoading(false)
          
          if (event === 'SIGNED_IN' && session?.user) {
            console.log('User signed in, redirecting to /app')
            
            // Track successful login
            trackEvent('user_login_success', {
              user_id: session.user.id,
              user_email: session.user.email,
              provider: session.user.app_metadata?.provider,
              is_new_user: session.user.created_at === session.user.last_sign_in_at
            })
            
            // Redirect to app after successful sign in
            router.push('/app')
            router.refresh()
          } else if (event === 'SIGNED_OUT') {
            console.log('User signed out, redirecting to /')
            
            // Track logout
            trackEvent('user_logout', {
              user_id: user?.id || 'unknown'
            })
            
            // Redirect to home after sign out
            router.push('/')
            router.refresh()
          }
        }
      )

      return () => subscription.unsubscribe()
    }
  }, [router, user?.id])

  const signOut = async () => {
    if (!supabase) {
      console.warn('Supabase not configured')
      return
    }

    // Track logout attempt
    trackEvent('user_logout_attempted', {
      user_id: user?.id || 'unknown'
    })
    
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
} 