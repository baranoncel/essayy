'use client'

import { useState, useEffect } from 'react'
import type { Essay, EssayGenerationRequest, ApiResponse } from '@/types'

export function useEssays() {
  const [essays, setEssays] = useState<Essay[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEssays = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/essays')
      const data: ApiResponse<Essay[]> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch essays')
      }
      
      setEssays(data.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch essays')
    } finally {
      setLoading(false)
    }
  }

  const createEssay = async (request: EssayGenerationRequest): Promise<Essay | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/essays', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })
      
      const data: ApiResponse<Essay> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to create essay')
      }
      
      const newEssay = data.data!
      setEssays(prev => [newEssay, ...prev])
      return newEssay
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create essay')
      return null
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEssays()
  }, [])

  return {
    essays,
    loading,
    error,
    fetchEssays,
    createEssay,
  }
}

export function useEssay(id: string) {
  const [essay, setEssay] = useState<Essay | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEssay = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/essays/${id}`)
      const data: ApiResponse<Essay> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch essay')
      }
      
      setEssay(data.data!)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch essay')
    } finally {
      setLoading(false)
    }
  }

  const updateEssay = async (updates: Partial<Essay>): Promise<boolean> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/essays/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })
      
      const data: ApiResponse<Essay> = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to update essay')
      }
      
      setEssay(data.data!)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update essay')
      return false
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchEssay()
    }
  }, [id])

  return {
    essay,
    loading,
    error,
    fetchEssay,
    updateEssay,
  }
} 