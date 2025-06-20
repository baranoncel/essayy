'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlignLeft, Edit3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LengthSliderProps {
  value: number
  onChange: (value: number) => void
  maxLength?: number
  disabled?: boolean
  className?: string
}

const LENGTH_PRESETS = [
  { label: 'Short', value: 500, description: '~100 words' },
  { label: 'Medium', value: 1500, description: '~300 words' },
  { label: 'Long', value: 3000, description: '~600 words' },
  { label: 'Very Long', value: 5000, description: '~1000 words' },
]

export function LengthSlider({
  value,
  onChange,
  maxLength = 20000,
  disabled = false,
  className
}: LengthSliderProps) {
  const [isManualInput, setIsManualInput] = useState(false)
  const [manualValue, setManualValue] = useState(value.toString())

  const handleSliderChange = (newValue: number[]) => {
    if (newValue[0] !== undefined) {
      onChange(newValue[0])
    }
  }

  const handlePresetClick = (presetValue: number) => {
    onChange(presetValue)
  }

  const handleManualSubmit = () => {
    const numValue = parseInt(manualValue, 10)
    if (!isNaN(numValue) && numValue >= 100 && numValue <= maxLength) {
      onChange(numValue)
    } else {
      setManualValue(value.toString())
    }
    setIsManualInput(false)
  }

  const handleManualKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleManualSubmit()
    } else if (e.key === 'Escape') {
      setManualValue(value.toString())
      setIsManualInput(false)
    }
  }

  const getEstimatedWords = (chars: number) => {
    return Math.round(chars / 5) // Average 5 characters per word
  }

  const getLengthDescription = (chars: number) => {
    if (chars < 500) return 'Very short essay'
    if (chars < 1500) return 'Short essay'
    if (chars < 3000) return 'Medium essay'
    if (chars < 5000) return 'Long essay'
    if (chars < 10000) return 'Very long essay'
    return 'Extensive essay'
  }

  const getProgressColor = (chars: number) => {
    const percentage = (chars / maxLength) * 100
    if (percentage < 25) return 'bg-gradient-to-r from-gray-400 to-gray-500'
    if (percentage < 50) return 'bg-green-500'
    if (percentage < 75) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <AlignLeft className="h-4 w-4 text-gray-600" />
          Essay Length
        </label>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsManualInput(!isManualInput)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Edit3 className="h-3 w-3 mr-1" />
          {isManualInput ? 'Use Slider' : 'Type Value'}
        </Button>
      </div>

      {/* Current value display */}
      <div className="text-center space-y-2">
        {isManualInput ? (
          <div className="flex items-center justify-center gap-2">
            <Input
              type="number"
              value={manualValue}
              onChange={(e) => setManualValue(e.target.value)}
              onBlur={handleManualSubmit}
              onKeyDown={handleManualKeyDown}
              min={100}
              max={maxLength}
              className="w-24 text-center"
              disabled={disabled}
              autoFocus
            />
            <span className="text-sm text-gray-500">characters</span>
          </div>
        ) : (
          <div className="text-2xl font-bold text-gray-900">
            {value.toLocaleString()} characters
          </div>
        )}
        
        <div className="text-sm text-gray-600">
          ~{getEstimatedWords(value)} words • {getLengthDescription(value)}
        </div>
      </div>

      {/* Slider */}
      {!isManualInput && (
        <div className="space-y-4">
          <Slider
            value={[value]}
            onValueChange={handleSliderChange}
            max={maxLength}
            min={100}
            step={50}
            disabled={disabled}
            className="w-full"
          />
          
          {/* Progress bar visual indicator */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                getProgressColor(value)
              )}
              style={{ width: `${(value / maxLength) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Preset buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {LENGTH_PRESETS.map((preset) => (
          <Button
            key={preset.value}
            variant={value === preset.value ? "default" : "outline"}
            size="sm"
            onClick={() => handlePresetClick(preset.value)}
            disabled={disabled}
            className="flex flex-col h-auto py-3"
          >
            <span className="font-medium">{preset.label}</span>
            <span className="text-xs opacity-75">{preset.description}</span>
          </Button>
        ))}
      </div>

      {/* Range indicator */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>100 chars</span>
        <span>{maxLength.toLocaleString()} chars</span>
      </div>
    </div>
  )
} 