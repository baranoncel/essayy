'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from './AuthProvider'
import { CreditCard, Settings, LogOut, ChevronUp } from 'lucide-react'

export function UserAvatar() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  // Get user name and email
  const email = user.email || ''
  const fullName = user.user_metadata?.full_name || user.user_metadata?.name || ''
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture

  // Generate initials from name or email
  const getInitials = () => {
    if (fullName) {
      return fullName
        .split(' ')
        .map((name: string) => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    if (email) {
      return email[0]?.toUpperCase() || 'U'
    }
    return 'U'
  }

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center flex-1 min-w-0">
          {/* Avatar */}
          <div className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-blue-600 text-white text-sm font-medium">
                {getInitials()}
              </div>
            )}
          </div>
          
          {/* User info */}
          <div className="ml-3 flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {fullName || email.split('@')[0]}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {email}
            </p>
          </div>
        </div>
        
        <ChevronUp 
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            <Link
              href="/app/billing"
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard className="mr-3 h-4 w-4 text-gray-400" />
              Billing
            </Link>
            
            <Link
              href="/app/settings"
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="mr-3 h-4 w-4 text-gray-400" />
              Settings
            </Link>
            
            <hr className="my-1 border-gray-200" />
            
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <LogOut className="mr-3 h-4 w-4 text-gray-400" />
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  )
} 