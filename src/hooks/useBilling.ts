'use client'

import { useState } from 'react'
import type { ApiResponse } from '@/types'

interface CheckoutSession {
  sessionId: string
  url: string
}

export function useBilling() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createCheckoutSession = async (priceId: string): Promise<CheckoutSession | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/billing/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })
      
      const data: ApiResponse<CheckoutSession> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to create checkout session')
      }
      
      return data.data!
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create checkout session')
      return null
    } finally {
      setLoading(false)
    }
  }

  const redirectToCheckout = async (priceId: string): Promise<void> => {
    const session = await createCheckoutSession(priceId)
    
    if (session?.url) {
      window.location.href = session.url
    }
  }

  return {
    createCheckoutSession,
    redirectToCheckout,
    loading,
    error,
  }
} 