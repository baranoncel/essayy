'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, User, AlertCircle, CheckCircle } from 'lucide-react'

export default function AuthDebugPage() {
  const { user, loading } = useAuth()
  const [session, setSession] = useState<any>(null)
  const [sessionLoading, setSessionLoading] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 19)])
  }

  const refreshSession = async () => {
    setSessionLoading(true)
    addLog('Manually refreshing session...')
    
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        addLog(`Session error: ${error.message}`)
      } else {
        setSession(data.session)
        addLog(`Session refreshed: ${data.session ? 'Found' : 'None'}`)
      }
    } catch (error) {
      addLog(`Session refresh failed: ${error}`)
    } finally {
      setSessionLoading(false)
    }
  }

  const testGoogleLogin = async () => {
    addLog('Testing Google OAuth...')
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
      
      if (error) {
        addLog(`Google OAuth error: ${error.message}`)
      } else {
        addLog('Redirecting to Google...')
      }
    } catch (error) {
      addLog(`Google OAuth failed: ${error}`)
    }
  }

  const signOut = async () => {
    addLog('Signing out...')
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        addLog(`Sign out error: ${error.message}`)
      } else {
        addLog('Signed out successfully')
      }
    } catch (error) {
      addLog(`Sign out failed: ${error}`)
    }
  }

  useEffect(() => {
    addLog('Auth debug page loaded')
    refreshSession()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      addLog(`Auth state change: ${event}`)
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Authentication Debug Console</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Auth Provider Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Auth Provider Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={loading ? "secondary" : user ? "default" : "destructive"}>
                {loading ? "Loading" : user ? "Authenticated" : "Not Authenticated"}
              </Badge>
              {loading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : user ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
            </div>
            
            {user && (
              <div className="bg-gray-50 p-3 rounded">
                <pre className="text-xs overflow-auto">
                  {JSON.stringify({
                    id: user.id,
                    email: user.email,
                    provider: user.app_metadata?.provider,
                    full_name: user.user_metadata?.full_name,
                    avatar_url: user.user_metadata?.avatar_url,
                    created_at: user.created_at,
                    last_sign_in: user.last_sign_in_at
                  }, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Direct Session Check */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Direct Session Check
              <Button 
                size="sm" 
                variant="outline" 
                onClick={refreshSession}
                disabled={sessionLoading}
              >
                {sessionLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'Refresh'}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={session ? "default" : "destructive"}>
                {session ? "Session Found" : "No Session"}
              </Badge>
              {session ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
            </div>
            
            {session && (
              <div className="bg-gray-50 p-3 rounded">
                <pre className="text-xs overflow-auto">
                  {JSON.stringify({
                    access_token: session.access_token ? 'present' : 'missing',
                    refresh_token: session.refresh_token ? 'present' : 'missing',
                    expires_at: session.expires_at,
                    expires_in: session.expires_in,
                    user_id: session.user?.id,
                    user_email: session.user?.email
                  }, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Debug Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Debug Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={testGoogleLogin} className="w-full" variant="outline">
              Test Google OAuth
            </Button>
            <Button onClick={refreshSession} className="w-full" variant="outline">
              Refresh Session
            </Button>
            {user && (
              <Button onClick={signOut} className="w-full" variant="destructive">
                Sign Out
              </Button>
            )}
            <Button 
              onClick={() => window.location.href = '/auth-test'} 
              className="w-full" 
              variant="secondary"
            >
              Go to Auth Test Page
            </Button>
          </CardContent>
        </Card>

        {/* Real-time Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Real-time Logs
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setLogs([])}
              >
                Clear
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-xs h-64 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500">No logs yet...</div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Environment Info */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Environment Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-3 rounded">
            <pre className="text-xs">
              {JSON.stringify({
                supabase_url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'configured' : 'missing',
                supabase_anon_key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'configured' : 'missing',
                current_url: typeof window !== 'undefined' ? window.location.href : 'server-side',
                user_agent: typeof window !== 'undefined' ? navigator.userAgent : 'server-side'
              }, null, 2)}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 