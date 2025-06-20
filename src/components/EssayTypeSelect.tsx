'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { BookOpen, Scale, Heart, Book, MessageSquare, ArrowLeftRight, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { EssayType } from '@/types'

interface EssayTypeSelectProps {
  value: EssayType | ''
  onChange: (value: EssayType) => void
  disabled?: boolean
  className?: string
}

const ESSAY_TYPES = [
  {
    value: 'classic' as EssayType,
    label: 'Classic Essay',
    description: 'Traditional five-paragraph structure with introduction, body, and conclusion',
    icon: BookOpen,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 border-gray-300 shadow-sm',
    examples: ['Analytical essays', 'Informative essays', 'General academic writing']
  },
  {
    value: 'persuasive' as EssayType,
    label: 'Persuasive Essay',
    description: 'Argumentative writing to convince readers of a particular viewpoint',
    icon: Scale,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    examples: ['Opinion pieces', 'Debate arguments', 'Policy recommendations']
  },
  {
    value: 'personal-statement' as EssayType,
    label: 'Personal Statement',
    description: 'Narrative writing about personal experiences and achievements',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 border-pink-200',
    examples: ['College applications', 'Scholarship essays', 'Career statements']
  },
  {
    value: 'book-report' as EssayType,
    label: 'Book Report',
    description: 'Summary and analysis of literature with critical evaluation',
    icon: Book,
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    examples: ['Literature reviews', 'Novel analysis', 'Reading assignments']
  },
  {
    value: 'critique' as EssayType,
    label: 'Critique',
    description: 'Critical analysis and evaluation of works, ideas, or arguments',
    icon: MessageSquare,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200',
    examples: ['Film reviews', 'Art criticism', 'Academic critiques']
  },
  {
    value: 'compare-contrast' as EssayType,
    label: 'Compare & Contrast',
    description: 'Examining similarities and differences between two or more subjects',
    icon: ArrowLeftRight,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 border-teal-200',
    examples: ['Historical comparisons', 'Product analysis', 'Theory evaluation']
  }
] as const

export function EssayTypeSelect({
  value,
  onChange,
  disabled = false,
  className
}: EssayTypeSelectProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const selectedType = ESSAY_TYPES.find(type => type.value === value)

  const handleSelect = (newValue: string) => {
    onChange(newValue as EssayType)
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FileText className="h-4 w-4 text-gray-600" />
          Essay Type
        </label>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'Simple View' : 'Detailed View'}
        </Button>
      </div>

      {/* Compact Select View */}
      {!isExpanded && (
        <Select value={value} onValueChange={handleSelect} disabled={disabled}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose an essay type...">
              {selectedType && (
                <div className="flex items-center gap-3">
                  <selectedType.icon className={cn("h-5 w-5", selectedType.color)} />
                  <div className="text-left">
                    <div className="font-medium">{selectedType.label}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {selectedType.description}
                    </div>
                  </div>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {ESSAY_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                <div className="flex items-center gap-3 py-1">
                  <type.icon className={cn("h-4 w-4", type.color)} />
                  <div>
                    <div className="font-medium">{type.label}</div>
                    <div className="text-xs text-gray-500">
                      {type.description}
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* Expanded Card View */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ESSAY_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => handleSelect(type.value)}
              disabled={disabled}
              className={cn(
                "p-4 rounded-lg border-2 text-left transition-all hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                value === type.value
                  ? cn(type.bgColor, "border-current shadow-sm")
                  : "bg-white border-gray-200 hover:border-gray-300"
              )}
            >
              <div className="flex items-start gap-3">
                <type.icon 
                  className={cn(
                    "h-6 w-6 mt-0.5",
                    value === type.value ? type.color : "text-gray-400"
                  )} 
                />
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "font-medium text-sm mb-1",
                    value === type.value ? type.color : "text-gray-900"
                  )}>
                    {type.label}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500">Examples:</p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {type.examples.slice(0, 2).map((example, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Selected Type Preview */}
      {selectedType && !isExpanded && (
        <div className={cn(
          "p-3 rounded-lg border",
          selectedType.bgColor
        )}>
          <div className="flex items-start gap-3">
            <selectedType.icon className={cn("h-5 w-5 mt-0.5", selectedType.color)} />
            <div className="flex-1 min-w-0">
              <h4 className={cn("font-medium text-sm mb-1", selectedType.color)}>
                {selectedType.label}
              </h4>
              <p className="text-xs text-gray-600 mb-2">
                {selectedType.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {selectedType.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-white/70 text-gray-600"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 