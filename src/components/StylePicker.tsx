'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Palette, Upload, FileText, X, Check, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { WritingStyle } from '@/types'

interface StylePickerProps {
  value: WritingStyle
  customSample?: string
  onChange: (style: WritingStyle, customSample?: string) => void
  disabled?: boolean
  className?: string
}

const STANDARD_STYLES = [
  {
    id: 'academic',
    label: 'Academic',
    description: 'Formal, scholarly tone with precise language',
    example: 'The research methodology employed in this study demonstrates...',
    characteristics: ['Formal tone', 'Complex sentences', 'Third person', 'Evidence-based']
  },
  {
    id: 'conversational',
    label: 'Conversational',
    description: 'Natural, engaging tone like speaking to a friend',
    example: 'You might be wondering why this topic matters so much...',
    characteristics: ['Casual tone', 'Direct address', 'Simple language', 'Engaging']
  },
  {
    id: 'professional',
    label: 'Professional',
    description: 'Business-appropriate with clear, concise language',
    example: 'This analysis provides valuable insights into market trends...',
    characteristics: ['Clear structure', 'Action-oriented', 'Confident tone', 'Results-focused']
  },
  {
    id: 'creative',
    label: 'Creative',
    description: 'Expressive and imaginative with vivid descriptions',
    example: 'The concept bloomed like a flower in springtime, revealing...',
    characteristics: ['Vivid imagery', 'Metaphors', 'Emotional language', 'Descriptive']
  }
] as const

export function StylePicker({
  value,
  customSample = '',
  onChange,
  disabled = false,
  className
}: StylePickerProps) {
  const [customText, setCustomText] = useState(customSample)
  const [fileName, setFileName] = useState<string>()
  const [isTextMode, setIsTextMode] = useState(false)
  const [uploadError, setUploadError] = useState<string>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploadError(undefined)

    if (file.size > 100000) { // 100KB limit
      setUploadError('File too large. Please select a file under 100KB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      if (text) {
        if (text.length > 5000) {
          setUploadError('Text too long. Please keep sample under 5000 characters.')
          return
        }
        setCustomText(text)
        setFileName(file.name)
        onChange('custom', text)
      }
    }
    reader.readAsText(file)
  }, [onChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled
  })

  const handleStandardStyleSelect = (styleId: string) => {
    onChange('standard')
    setCustomText('')
    setFileName(undefined)
    setUploadError(undefined)
  }

  const handleCustomTextSubmit = () => {
    if (customText.trim()) {
      onChange('custom', customText.trim())
      setIsTextMode(false)
    }
  }

  const clearCustomSample = () => {
    setCustomText('')
    setFileName(undefined)
    setUploadError(undefined)
    onChange('standard')
  }

  const toggleTextMode = () => {
    setIsTextMode(!isTextMode)
    setUploadError(undefined)
  }

  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Palette className="h-4 w-4 text-blue-600" />
          Writing Style
        </label>
      </div>

      {/* Style Selection */}
      <div className="space-y-4">
        {/* Standard Styles */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              id="standard-style"
              checked={value === 'standard'}
              onChange={() => handleStandardStyleSelect('standard')}
              disabled={disabled}
              className="w-4 h-4 text-blue-600"
            />
            <label htmlFor="standard-style" className="text-sm font-medium text-gray-900">
              Standard Styles
            </label>
          </div>

          {value === 'standard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
              {STANDARD_STYLES.map((style) => (
                <div
                  key={style.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <h3 className="font-medium text-sm text-gray-900 mb-1">
                    {style.label}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {style.description}
                  </p>
                  <div className="text-xs italic text-gray-500 mb-2 bg-gray-50 p-2 rounded">
                    "{style.example}"
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {style.characteristics.map((char, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Custom Style */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              id="custom-style"
              checked={value === 'custom'}
              onChange={() => onChange('custom', customText)}
              disabled={disabled}
              className="w-4 h-4 text-blue-600"
            />
            <label htmlFor="custom-style" className="text-sm font-medium text-gray-900">
              Custom Style
            </label>
            <span className="text-xs text-gray-500">
              (Upload a sample or paste text to match your writing style)
            </span>
          </div>

          {value === 'custom' && (
            <div className="ml-6 space-y-4">
              {/* Toggle between upload and text input */}
              <div className="flex gap-2">
                <Button
                  variant={!isTextMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsTextMode(false)}
                  disabled={disabled}
                >
                  <Upload className="h-3 w-3 mr-1" />
                  Upload File
                </Button>
                <Button
                  variant={isTextMode ? "default" : "outline"}
                  size="sm"
                  onClick={toggleTextMode}
                  disabled={disabled}
                >
                  <FileText className="h-3 w-3 mr-1" />
                  Paste Text
                </Button>
              </div>

              {/* File Upload Area */}
              {!isTextMode && (
                <div
                  {...getRootProps()}
                  className={cn(
                    "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
                    isDragActive
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400",
                    disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-2">
                    {isDragActive
                      ? "Drop your file here..."
                      : "Drag & drop a text file here, or click to browse"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Supports .txt, .doc, .docx files (max 100KB)
                  </p>
                </div>
              )}

              {/* Text Input Area */}
              {isTextMode && (
                <div className="space-y-3">
                  <Textarea
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Paste a sample of your writing style here... (e.g., a paragraph from a previous essay)"
                    className="min-h-[120px] resize-none"
                    maxLength={5000}
                    disabled={disabled}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {customText.length}/5000 characters
                    </span>
                    <Button
                      size="sm"
                      onClick={handleCustomTextSubmit}
                      disabled={!customText.trim() || disabled}
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Use This Sample
                    </Button>
                  </div>
                </div>
              )}

              {/* Error Display */}
              {uploadError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-red-700">{uploadError}</span>
                </div>
              )}

              {/* Current Sample Display */}
              {customText && !isTextMode && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">
                        {fileName || 'Custom Sample'}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({customText.length} characters)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCustomSample}
                      disabled={disabled}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-700 bg-white p-3 rounded border max-h-32 overflow-y-auto">
                    {customText.length > 200
                      ? `${customText.substring(0, 200)}...`
                      : customText}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-1">Style Matching Tips:</p>
            <ul className="text-xs space-y-0.5 text-blue-600">
              <li>• Upload a paragraph from your previous work for best results</li>
              <li>• Include 2-3 sentences minimum for accurate style analysis</li>
              <li>• The AI will match your sentence structure, vocabulary, and tone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 