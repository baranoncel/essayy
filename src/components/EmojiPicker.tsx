'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { getEssayIcon } from '@/lib/essay-icons'

interface EmojiPickerProps {
  currentEmoji?: string
  essay: {
    topic?: string
    essay_type?: string
    custom_emoji?: string
  }
  onEmojiSelect: (emoji: string) => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const popularEmojis = [
  '📝', '📚', '📖', '📰', '📋', '📄', '📑', '📜', 
  '🎓', '🏫', '👨‍🎓', '👩‍🎓', '🧠', '💡',
  '🔬', '⚗️', '🧬', '🔍', '📊', '📈',
  '💻', '🤖', '📱', '🌐', '⚛️', '💾',
  '🌍', '🌿', '🌊', '🌲', '♻️', '🌡️',
  '⚔️', '🎯', '🏆', '⚖️', '🤔', '💭',
  '🎨', '🎵', '🎭', '🎬', '📗', '✍️',
  '💼', '💰', '📢', '🤝', '📈', '💹',
  '⚽', '💪', '❤️', '🧘‍♀️', '🥗', '🌸'
]

// Get topic-based suggestions
const getTopicBasedEmojis = (essay: { topic?: string; essay_type?: string }) => {
  const topic = (essay.topic || '').toLowerCase()
  const essayType = (essay.essay_type || '').toLowerCase()
  
  const suggestions: string[] = []
  
  // Essay type suggestions
  if (essayType.includes('argumentative')) suggestions.push('⚔️')
  if (essayType.includes('analytical')) suggestions.push('🔍')
  if (essayType.includes('research')) suggestions.push('🔬')
  if (essayType.includes('persuasive')) suggestions.push('🎯')
  
  // Topic suggestions
  if (topic.includes('ai') || topic.includes('artificial intelligence')) suggestions.push('🤖')
  if (topic.includes('education') || topic.includes('school')) suggestions.push('🎓')
  if (topic.includes('technology') || topic.includes('computer')) suggestions.push('💻')
  if (topic.includes('environment') || topic.includes('climate')) suggestions.push('🌍')
  if (topic.includes('business') || topic.includes('economics')) suggestions.push('💼')
  if (topic.includes('health') || topic.includes('medicine')) suggestions.push('❤️')
  if (topic.includes('science') || topic.includes('research')) suggestions.push('🔬')
  
  return [...new Set(suggestions)].slice(0, 6) // Remove duplicates and limit to 6
}

export function EmojiPicker({ 
  currentEmoji, 
  essay, 
  onEmojiSelect, 
  size = 'md',
  disabled = false 
}: EmojiPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [customEmoji, setCustomEmoji] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get the display emoji (custom or auto-generated)
  const displayEmoji = essay.custom_emoji || currentEmoji || getEssayIcon(essay)

  // Get suggested emojis based on essay content
  const suggestions = getTopicBasedEmojis(essay)

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl', 
    lg: 'text-4xl'
  }

  const buttonSizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }

  const handleEmojiSelect = (emoji: string) => {
    onEmojiSelect(emoji)
    setIsOpen(false)
  }

  const handleCustomEmojiSubmit = () => {
    if (customEmoji.trim()) {
      // Extract the first emoji character from the input
      const emojiMatch = customEmoji.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u)
      if (emojiMatch) {
        handleEmojiSelect(emojiMatch[0])
        setCustomEmoji('')
      }
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleCustomEmojiSubmit()
    }
  }

  const handleAutoGenerate = () => {
    const autoEmoji = getEssayIcon(essay)
    handleEmojiSelect('')  // Clear custom emoji to use auto-generated
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus the input when popover opens
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        size="sm"
        className={`${buttonSizeClasses[size]} hover:bg-gray-100 rounded-lg transition-colors ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        disabled={disabled}
        onClick={handleToggle}
      >
        <span className={sizeClasses[size]} role="img" aria-label="Essay emoji">
          {displayEmoji}
        </span>
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-2">Choose an emoji for your essay</h4>
              <p className="text-xs text-gray-500">Click an emoji or use the text input below</p>
            </div>

            {/* Suggested emojis based on essay content */}
            {suggestions.length > 0 && (
              <div>
                <h5 className="text-xs font-medium text-gray-700 mb-2">Suggested for your essay</h5>
                <div className="flex flex-wrap gap-1">
                  {suggestions.map((emoji: string, index: number) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-blue-50"
                      onClick={() => handleEmojiSelect(emoji)}
                    >
                      <span className="text-lg">{emoji}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular emojis */}
            <div>
              <h5 className="text-xs font-medium text-gray-700 mb-2">Popular choices</h5>
              <div className="grid grid-cols-8 gap-1">
                {popularEmojis.map((emoji: string, index: number) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-50"
                    onClick={() => handleEmojiSelect(emoji)}
                  >
                    <span className="text-lg">{emoji}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom emoji input */}
            <div className="space-y-2">
              <h5 className="text-xs font-medium text-gray-700">Or paste any emoji</h5>
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={customEmoji}
                  onChange={(e) => setCustomEmoji(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Paste emoji here..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={10}
                />
                <Button
                  size="sm"
                  onClick={handleCustomEmojiSubmit}
                  disabled={!customEmoji.trim()}
                >
                  Set
                </Button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-between pt-2 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={handleAutoGenerate}
              >
                Auto-generate
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 