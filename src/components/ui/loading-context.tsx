'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ProgressBar } from './progress-bar'

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
  showLoading: () => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false)

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  const showLoading = () => {
    setIsLoading(true)
  }

  const hideLoading = () => {
    setIsLoading(false)
  }

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setLoading, 
      showLoading, 
      hideLoading 
    }}>
      <ProgressBar isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  )
} 