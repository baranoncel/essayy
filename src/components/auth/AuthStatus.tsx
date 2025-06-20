'use client'

import { useAuth } from './AuthProvider'
import { Button } from '@/components/ui/button'
import { AuthDialog } from './AuthDialog'

export function AuthStatus() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500">Loading...</div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700">
          Welcome, {user.email}
        </span>
        <Button 
          variant="default" 
          size="sm"
          onClick={() => window.location.href = '/app'}
          className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white shadow-lg hover:shadow-xl"
        >
          Go to App
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={signOut}
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <AuthDialog>
                  <Button className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Started
        </Button>
      </AuthDialog>
    </div>
  )
} 