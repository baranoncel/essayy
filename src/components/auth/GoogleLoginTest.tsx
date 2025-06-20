'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useAuth } from './AuthProvider'
import { useGlobalUI } from '@/hooks/useGlobalUI'
import { User, LogOut, Loader2 } from 'lucide-react'

export function GoogleLoginTest() {
  const [isLoading, setIsLoading] = useState(false)
  const { user, signOut } = useAuth()
  const { toast } = useGlobalUI()

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      })

      if (error) throw error
      toast.info('Redirecting to Google...')
    } catch (error: any) {
      toast.error('Google login failed', error.message)
      setIsLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    toast.success('Signed out successfully')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Google OAuth Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {user ? (
          // User is logged in
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                {user.user_metadata?.avatar_url || user.user_metadata?.picture ? (
                  <img
                    src={user.user_metadata.avatar_url || user.user_metadata.picture}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white text-xl font-medium">
                    {user.user_metadata?.full_name?.[0] || user.email?.[0] || 'U'}
                  </div>
                )}
              </div>
              <h3 className="font-medium text-gray-900">
                {user.user_metadata?.full_name || user.user_metadata?.name || 'No name'}
              </h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">User Metadata:</h4>
              <pre className="text-xs text-gray-600 overflow-auto">
                {JSON.stringify(user.user_metadata, null, 2)}
              </pre>
            </div>

            <Button 
              onClick={handleSignOut} 
              variant="outline" 
              className="w-full"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        ) : (
          // User is not logged in
          <div className="space-y-4">
            <div className="text-center text-gray-600">
              <User className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Not logged in</p>
            </div>

            <Button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting to Google...
                </>
              ) : (
                <>
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Test Google Login
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 