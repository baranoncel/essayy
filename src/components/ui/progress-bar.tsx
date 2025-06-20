'use client'

import { useEffect, useState } from 'react'

interface ProgressBarProps {
  isLoading: boolean
  className?: string
}

export function ProgressBar({ isLoading, className = '' }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true)
      setProgress(0)
      
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 200)

      return () => clearInterval(timer)
    } else {
      setProgress(100)
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 300)
      
      return () => clearTimeout(hideTimer)
    }
  }, [isLoading])

  if (!isVisible) return null

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 ${className}`}>
      <div 
        className="h-full bg-gray-900 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
} 