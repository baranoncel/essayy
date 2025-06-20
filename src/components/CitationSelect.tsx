'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Quote, BookOpen, GraduationCap, Building2, Zap, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CitationStyle } from '@/types'

interface CitationSelectProps {
  value: CitationStyle
  onChange: (value: CitationStyle) => void
  disabled?: boolean
  className?: string
}

const CITATION_STYLES = [
  {
    value: 'none' as CitationStyle,
    label: 'No Citations',
    description: 'Generate essay without formal citations',
    icon: Quote,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 border-gray-200',
    example: 'This topic has been widely discussed in recent literature.',
    usage: 'Informal essays, personal writing, creative pieces',
    fields: ['Creative Writing', 'Personal Essays', 'Opinion Pieces']
  },
  {
    value: 'apa-7' as CitationStyle,
    label: 'APA 7th Edition',
    description: 'American Psychological Association style',
    icon: GraduationCap,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 border-gray-300 shadow-sm',
    example: 'According to Smith (2023), this phenomenon demonstrates...',
    usage: 'Psychology, Education, Social Sciences',
    fields: ['Psychology', 'Education', 'Social Sciences', 'Nursing']
  },
  {
    value: 'mla-9' as CitationStyle,
    label: 'MLA 9th Edition',
    description: 'Modern Language Association style',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    example: 'The author argues that "this concept is fundamental" (Johnson 45).',
    usage: 'Literature, Language Arts, Humanities',
    fields: ['Literature', 'English', 'Foreign Languages', 'Arts']
  },
  {
    value: 'harvard' as CitationStyle,
    label: 'Harvard',
    description: 'Harvard referencing system',
    icon: Building2,
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    example: 'Research shows significant results (Brown et al., 2023).',
    usage: 'Business, Economics, General Academic',
    fields: ['Business', 'Economics', 'Management', 'General Academic']
  },
  {
    value: 'ieee' as CitationStyle,
    label: 'IEEE',
    description: 'Institute of Electrical and Electronics Engineers',
    icon: Zap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200',
    example: 'This methodology has been proven effective [1].',
    usage: 'Engineering, Technology, Computer Science',
    fields: ['Engineering', 'Computer Science', 'Technology', 'Mathematics']
  },
  {
    value: 'chicago' as CitationStyle,
    label: 'Chicago/Turabian',
    description: 'Chicago Manual of Style',
    icon: Calendar,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 border-teal-200',
    example: 'Historical evidence supports this theory.¹',
    usage: 'History, Literature, Arts',
    fields: ['History', 'Philosophy', 'Religion', 'Art History']
  }
] as const

export function CitationSelect({
  value,
  onChange,
  disabled = false,
  className
}: CitationSelectProps) {
  const selectedStyle = CITATION_STYLES.find(style => style.value === value)

  const handleSelect = (newValue: string) => {
    onChange(newValue as CitationStyle)
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Quote className="h-4 w-4 text-gray-600" />
          Citation Style
        </label>
      </div>

      {/* Citation Style Selector */}
      <Select value={value} onValueChange={handleSelect} disabled={disabled}>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Choose a citation style...">
            {selectedStyle && (
              <div className="flex items-center gap-3">
                <selectedStyle.icon className={cn("h-5 w-5", selectedStyle.color)} />
                <div className="text-left">
                  <div className="font-medium">{selectedStyle.label}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {selectedStyle.description}
                  </div>
                </div>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {CITATION_STYLES.map((style) => (
            <SelectItem key={style.value} value={style.value}>
              <div className="flex items-center gap-3 py-2">
                <style.icon className={cn("h-4 w-4", style.color)} />
                <div>
                  <div className="font-medium">{style.label}</div>
                  <div className="text-xs text-gray-500">
                    {style.description}
                  </div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Selected Style Details */}
      {selectedStyle && (
        <div className={cn(
          "p-4 rounded-lg border",
          selectedStyle.bgColor
        )}>
          <div className="flex items-start gap-3">
            <selectedStyle.icon className={cn("h-6 w-6 mt-0.5", selectedStyle.color)} />
            <div className="flex-1 min-w-0">
              <h3 className={cn("font-medium text-sm mb-1", selectedStyle.color)}>
                {selectedStyle.label}
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                {selectedStyle.description}
              </p>

              {/* Example */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-700 mb-1">Example:</p>
                <div className="text-xs text-gray-600 bg-white/70 p-2 rounded border italic">
                  "{selectedStyle.example}"
                </div>
              </div>

              {/* Usage */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-700 mb-1">Common Usage:</p>
                <p className="text-xs text-gray-600">{selectedStyle.usage}</p>
              </div>

              {/* Academic Fields */}
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">Academic Fields:</p>
                <div className="flex flex-wrap gap-1">
                  {selectedStyle.fields.map((field, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-white/70 text-gray-600"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference for Selected Style */}
      {selectedStyle && selectedStyle.value !== 'none' && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="text-xs font-medium text-gray-700 mb-2">Quick Reference:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {selectedStyle.value === 'apa-7' && (
              <>
                <div>
                  <span className="font-medium">In-text:</span> (Author, Year)
                </div>
                <div>
                  <span className="font-medium">Reference:</span> Author, A. A. (Year). Title. Publisher.
                </div>
              </>
            )}
            {selectedStyle.value === 'mla-9' && (
              <>
                <div>
                  <span className="font-medium">In-text:</span> (Author Page#)
                </div>
                <div>
                  <span className="font-medium">Works Cited:</span> Author. "Title." Source, Date.
                </div>
              </>
            )}
            {selectedStyle.value === 'harvard' && (
              <>
                <div>
                  <span className="font-medium">In-text:</span> (Author Year)
                </div>
                <div>
                  <span className="font-medium">Reference:</span> Author, A. Year. Title. Publisher.
                </div>
              </>
            )}
            {selectedStyle.value === 'ieee' && (
              <>
                <div>
                  <span className="font-medium">In-text:</span> [1]
                </div>
                <div>
                  <span className="font-medium">Reference:</span> [1] A. Author, "Title," Journal, vol. 1, 2023.
                </div>
              </>
            )}
            {selectedStyle.value === 'chicago' && (
              <>
                <div>
                  <span className="font-medium">Footnote:</span> ¹Author, Title (Publisher, Year), page.
                </div>
                <div>
                  <span className="font-medium">Bibliography:</span> Author. Title. Publisher, Year.
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <Quote className="h-4 w-4 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-1">Citation Guidelines:</p>
            <ul className="text-xs space-y-0.5 text-blue-600">
              <li>• Citations will be automatically formatted in your chosen style</li>
              <li>• The AI will include relevant sources based on your topic</li>
              <li>• Always verify citations and add real sources when submitting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 