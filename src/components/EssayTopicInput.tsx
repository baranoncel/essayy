'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PenTool, ArrowRight, Sparkles } from 'lucide-react'
import { AuthDialog } from './auth/AuthDialog'
import { useAuth } from './auth/AuthProvider'
import { trackEvent } from '@/lib/analytics'

interface EssayTopicInputProps {
  className?: string
}

export function EssayTopicInput({ className = '' }: EssayTopicInputProps) {
  const [topic, setTopic] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Debug effect
  useEffect(() => {
    console.log('EssayTopicInput mounted. User:', user ? 'logged in' : 'not logged in')
  }, [])

  useEffect(() => {
    console.log('Topic changed:', topic, 'Length:', topic.length, 'Trimmed:', topic.trim())
  }, [topic])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) return

    setIsLoading(true)
    
    // Track essay topic submission from homepage
    trackEvent('essay_topic_selected', {
      essay_topic: topic.trim(),
      source: 'homepage_input',
      topic_length: topic.trim().length
    })

    // Track demo start
    trackEvent('demo_started', {
      demo_type: 'essay_generation',
      topic: topic.trim()
    })

    try {
      // Navigate to essay creation with the topic
      const encodedTopic = encodeURIComponent(topic.trim())
      router.push(`/app/essay/new?topic=${encodedTopic}`)
    } catch (error) {
      console.error('Navigation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAuthSuccess = () => {
    // Called after successful login/register from AuthDialog
    if (topic.trim()) {
      const encodedTopic = encodeURIComponent(topic.trim())
      router.push(`/app/essay/new?topic=${encodedTopic}`)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    console.log('Input change event:', value)
    setTopic(value)
  }

  const handleSuggestionClick = (suggestion: string) => {
    console.log('Suggestion clicked:', suggestion)
    setTopic(suggestion)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const isDisabled = !topic.trim()

  const handleInputFocus = () => {
    // Track when user starts engaging with the input
    trackEvent('homepage_input_focused', {
      input_type: 'essay_topic'
    })
  }

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div 
        className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 border ${
          isFocused 
            ? 'shadow-2xl ring-2 ring-gray-300 ring-opacity-50 border-gray-300' 
            : isHovered 
            ? 'shadow-xl border-gray-200' 
            : 'shadow-lg border-gray-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Input Container */}
        <div className="flex items-start p-4 space-x-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-lg flex items-center justify-center shadow-md">
              <PenTool className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Input Area */}
          <div className="flex-1 min-h-0">
            <textarea
              ref={textareaRef}
              value={topic}
              onChange={handleInputChange}
              onFocus={() => {
                console.log('Textarea focused')
                setIsFocused(true)
              }}
              onBlur={() => {
                console.log('Textarea blurred')
                setIsFocused(false)
              }}
              placeholder="What essay would you like me to write? Be specific about your topic, requirements, and any particular focus..."
              className="w-full min-h-[60px] max-h-[200px] resize-none border-0 outline-none text-gray-900 placeholder-gray-500 text-lg leading-relaxed bg-transparent focus:ring-0 focus:outline-none"
              style={{
                fontFamily: 'inherit',
                lineHeight: '1.5'
              }}
              rows={3}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
            />
            
            {/* Character count and hints */}
            <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
              <div className="flex items-center space-x-4">
                <span>{topic.length} characters</span>
                {topic.length > 0 && (
                  <span className="flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI will enhance your topic
                  </span>
                )}
              </div>
              <div className="text-gray-400">
                {!isDisabled && (
                  <span className="hidden sm:inline">Press ⌘+Enter to generate</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end p-4 pt-2">
          {user ? (
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isDisabled || isLoading}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                isDisabled || isLoading
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                  Starting...
                </>
              ) : (
                <>
                  <PenTool className="w-4 h-4 mr-2" />
                  Generate Essay
                </>
              )}
            </button>
          ) : (
            <AuthDialog onAuthSuccess={handleAuthSuccess}>
              <button
                type="submit"
                disabled={isDisabled || isLoading}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDisabled || isLoading
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    Starting...
                  </>
                ) : (
                  <>
                    <PenTool className="w-4 h-4 mr-2" />
                    Generate Essay
                  </>
                )}
              </button>
            </AuthDialog>
          )}
        </div>

        {/* Bottom hint */}
        <div className="px-4 pb-4">
          <div className="text-xs text-gray-400 text-center">
            Our AI will help you create well-structured, original essays with proper citations
          </div>
        </div>
      </div>

      {/* Quick topic suggestions */}
      <div className="mt-6">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">Popular essay topics:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'Climate change impact on society',
            'Social media effects on mental health',
            'Benefits of renewable energy',
            'Artificial intelligence in education',
            'Importance of biodiversity conservation'
          ].map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 border border-gray-200 hover:border-gray-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 