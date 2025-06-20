'use client'

import { useState } from 'react'
import type { AIDetectionResult, HumanizationResult, ApiResponse } from '@/types'

export function useAIDetection() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const detectAI = async (text: string): Promise<AIDetectionResult | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })
      
      const data: ApiResponse<AIDetectionResult> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to detect AI content')
      }
      
      return data.data!
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to detect AI content')
      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    detectAI,
    loading,
    error,
  }
}

export function useHumanizer() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const humanizeText = async (text: string): Promise<HumanizationResult | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })
      
      const data: ApiResponse<HumanizationResult> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to humanize text')
      }
      
      return data.data!
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to humanize text')
      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    humanizeText,
    loading,
    error,
  }
} 