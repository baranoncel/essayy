'use client'

import { useAuth } from '@/components/auth/AuthProvider'
import { Button } from '@/components/ui/button'
import { GoogleLoginTest } from '@/components/auth/GoogleLoginTest'

export default function AuthTestPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="p-8">Loading authentication state...</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Authentication Test</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Google OAuth Test */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Google OAuth Test</h2>
          <GoogleLoginTest />
        </div>

        {/* Current Auth State */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Current Authentication State</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">
              {JSON.stringify({ 
                isAuthenticated: !!user, 
                userEmail: user?.email,
                userId: user?.id,
                userMetadata: user?.user_metadata 
              }, null, 2)}
            </pre>
          </div>

          {user ? (
            <div className="space-y-4">
              <p className="text-green-600">✅ You are authenticated!</p>
              <Button>
                <a href="/app">Go to Dashboard</a>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-red-600">❌ You are not authenticated</p>
              <Button>
                <a href="/">Go to Home Page to Sign In</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 