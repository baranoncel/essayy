'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useGlobalUI } from '@/hooks/useGlobalUI'
import { AlertCircle, X } from 'lucide-react'

export function AuthErrorHandler() {
  const searchParams = useSearchParams()
  const { toast } = useGlobalUI()
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const error = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')
    const authError = searchParams.get('auth_error')

    if (error || authError) {
      let message = ''
      
      if (error === 'access_denied') {
        message = 'Google sign-in was cancelled. Please try again.'
      } else if (authError === 'token_exchange_failed') {
        message = 'Authentication failed during token exchange. Please try again.'
      } else if (authError === 'callback_failed') {
        message = 'Authentication callback failed. Please try again.'
      } else if (error) {
        message = errorDescription || `Authentication error: ${error}`
      } else {
        message = 'An authentication error occurred. Please try again.'
      }

      setErrorMessage(message)
      setShowError(true)
      toast.error('Authentication Failed', message)

      // Clear URL parameters after showing error
      const url = new URL(window.location.href)
      url.searchParams.delete('error')
      url.searchParams.delete('error_description')
      url.searchParams.delete('auth_error')
      window.history.replaceState({}, '', url.toString())
    }
  }, [searchParams, toast])

  if (!showError) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-red-800">Authentication Error</h3>
            <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
          </div>
          <button
            onClick={() => setShowError(false)}
            className="ml-3 flex-shrink-0 text-red-400 hover:text-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
} 