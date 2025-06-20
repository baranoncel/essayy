'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { TopicInput } from '@/components/TopicInput'
import { LengthSlider } from '@/components/LengthSlider'
import { EssayTypeSelect } from '@/components/EssayTypeSelect'
import { StylePicker } from '@/components/StylePicker'
import { CitationSelect } from '@/components/CitationSelect'
import { EssayEditor } from '@/components/EssayEditor'
import { PenTool, Sparkles, Download, Save, BookOpen } from 'lucide-react'
import Link from 'next/link'
import type { EssayType, WritingStyle, CitationStyle } from '@/types'

function NewEssayPageContent() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [essayData, setEssayData] = useState({
    topic: '',
    requirements: '',
    length: 1000,
    type: '' as EssayType | '',
    style: '' as WritingStyle | '',
    citation: '' as CitationStyle | '',
    sources: '',
    content: ''
  })

  // Handle topic from URL parameters
  useEffect(() => {
    const topicFromUrl = searchParams.get('topic')
    if (topicFromUrl) {
      setEssayData(prev => ({ ...prev, topic: decodeURIComponent(topicFromUrl) }))
    }
  }, [searchParams])

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [generateError, setGenerateError] = useState('')
  const [savedEssayId, setSavedEssayId] = useState<string | null>(null)

  const handleNext = () => {
    if (step < 6) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleGenerate = async () => {
    if (!essayData.topic || !essayData.type || !essayData.style || !essayData.citation) {
      setGenerateError('Please fill in all required fields before generating.')
      return
    }

    setIsGenerating(true)
    setGenerateError('')

    try {
      const response = await fetch('/api/essays/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: essayData.topic,
          requirements: essayData.requirements,
          length: essayData.length,
          type: essayData.type,
          style: essayData.style,
          citation: essayData.citation,
          sources: essayData.sources
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate essay')
      }

      if (result.success) {
        setEssayData(prev => ({ ...prev, content: result.data.content }))
        setSavedEssayId(result.data.id)
        setStep(6) // Move to final step
      } else {
        throw new Error(result.error || 'Failed to generate essay')
      }
    } catch (error) {
      console.error('Generation error:', error)
      setGenerateError(error instanceof Error ? error.message : 'Failed to generate essay')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = async () => {
    try {
      const response = await fetch('/api/essays', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: essayData.topic.slice(0, 100),
          content: essayData.content,
          type: essayData.type,
          style: essayData.style,
          citation: essayData.citation,
          length: essayData.length,
          requirements: essayData.requirements,
          sources: essayData.sources
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSavedEssayId(result.data.id)
      }
    } catch (error) {
      console.error('Save error:', error)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PenTool className="h-5 w-5 mr-2" />
                Essay Topic & Requirements
              </CardTitle>
              <CardDescription>
                Tell us what your essay should be about and any specific requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Essay Topic <span className="text-red-500">*</span>
                </label>
                <TopicInput
                  value={essayData.topic}
                  onChange={(value) => setEssayData(prev => ({ ...prev, topic: value }))}
                  placeholder="e.g., The impact of social media on mental health..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements (Optional)
                </label>
                <Textarea
                  value={essayData.requirements}
                  onChange={(e) => setEssayData(prev => ({ ...prev, requirements: e.target.value }))}
                  placeholder="Any specific instructions, focus areas, or guidelines for your essay..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Essay Length</CardTitle>
              <CardDescription>
                Choose how long you want your essay to be.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LengthSlider
                value={essayData.length}
                onChange={(value) => setEssayData(prev => ({ ...prev, length: value }))}
              />
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Essay Type</CardTitle>
              <CardDescription>
                Select the type of essay you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EssayTypeSelect
                value={essayData.type}
                onChange={(value) => setEssayData(prev => ({ ...prev, type: value }))}
              />
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Writing Style</CardTitle>
              <CardDescription>
                Choose the writing style that best fits your needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
                             <StylePicker
                 value={essayData.style as WritingStyle}
                 onChange={(value) => setEssayData(prev => ({ ...prev, style: value }))}
               />
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Citation Style & Sources</CardTitle>
              <CardDescription>
                Choose your citation format and add any sources you want to include.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Citation Style <span className="text-red-500">*</span>
                </label>
                                 <CitationSelect
                   value={essayData.citation as CitationStyle}
                   onChange={(value) => setEssayData(prev => ({ ...prev, citation: value }))}
                 />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sources (Optional)
                </label>
                <Textarea
                  value={essayData.sources}
                  onChange={(e) => setEssayData(prev => ({ ...prev, sources: e.target.value }))}
                  placeholder="List any specific sources you want to include (URLs, book titles, etc.)"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 6:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Your Essay
              </CardTitle>
              <CardDescription>
                Review and edit your generated essay.
              </CardDescription>
            </CardHeader>
            <CardContent>
                             <EssayEditor
                 content={essayData.content}
                 onChange={(content) => setEssayData(prev => ({ ...prev, content }))}
               />

              <div className="flex justify-between mt-6">
                <div className="flex space-x-3">
                  <Button variant="outline" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Essay
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                {savedEssayId && (
                  <Link href={`/app/essay/${savedEssayId}`}>
                    <Button>
                      View Essay
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Essay</h1>
          <p className="text-gray-600">
            Follow the steps below to generate your perfect essay.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNumber === step
                      ? 'bg-gray-600 text-white'
                      : stepNumber < step
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 6 && (
                  <div
                    className={`w-full h-1 mx-2 ${
                      stepNumber < step ? 'bg-gray-200' : 'bg-gray-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Topic</span>
            <span>Length</span>
            <span>Type</span>
            <span>Style</span>
            <span>Citation</span>
            <span>Generate</span>
          </div>
        </div>

        {/* Current Step */}
        {renderStep()}

        {/* Error Display */}
        {generateError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{generateError}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </Button>

          {step < 5 ? (
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && !essayData.topic) ||
                (step === 3 && !essayData.type) ||
                (step === 4 && !essayData.style) ||
                (step === 5 && !essayData.citation)
              }
            >
              Next
            </Button>
          ) : step === 5 ? (
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !essayData.topic || !essayData.type || !essayData.style || !essayData.citation}
            >
              {isGenerating ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Essay
                </>
              )}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function NewEssayPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <PenTool className="h-8 w-8 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading essay creator...</p>
        </div>
      </div>
    }>
      <NewEssayPageContent />
    </Suspense>
  )
} 