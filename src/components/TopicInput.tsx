'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { PenTool, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TopicInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  className?: string
}

const TOPIC_SUGGESTIONS = [
  "The impact of artificial intelligence on modern education",
  "Climate change solutions for sustainable development",
  "The role of social media in shaping public opinion",
  "Mental health awareness in academic environments",
  "The future of renewable energy technologies",
  "Digital privacy in the age of big data",
  "The importance of cultural diversity in workplaces",
  "Remote work vs traditional office environments"
]

export function TopicInput({
  value,
  onChange,
  placeholder = "What would you like to write about?",
  maxLength = 500,
  disabled = false,
  className
}: TopicInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion)
    setShowSuggestions(false)
    setIsExpanded(false)
  }

  const handleFocus = () => {
    if (!value) {
      setShowSuggestions(true)
    }
  }

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setShowSuggestions(false)
  }

  const characterCount = value.length
  const isNearLimit = characterCount > maxLength * 0.8

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <PenTool className="h-4 w-4 text-gray-600" />
          Essay Topic
        </label>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggleExpanded}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'Simple' : 'Detailed'}
        </Button>
      </div>

      <div className="relative">
        {isExpanded ? (
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            onFocus={handleFocus}
            className="min-h-[120px] resize-none"
          />
        ) : (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            onFocus={handleFocus}
            className="h-12 text-base"
          />
        )}

        {/* Character counter */}
        <div className="flex justify-between items-center mt-2 text-xs">
          <div className="flex items-center gap-2">
            {!value && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="h-6 px-2 text-gray-500 hover:text-gray-700"
              >
                <Lightbulb className="h-3 w-3 mr-1" />
                Get suggestions
              </Button>
            )}
          </div>
          <span className={cn(
            "text-gray-500",
            isNearLimit && "text-orange-500",
            characterCount >= maxLength && "text-red-500"
          )}>
            {characterCount}/{maxLength}
          </span>
        </div>

        {/* Topic suggestions dropdown */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                Topic Suggestions
              </div>
            </div>
            <div className="p-2">
              {TOPIC_SUGGESTIONS.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  disabled={disabled}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close suggestions when clicking outside */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  )
} 