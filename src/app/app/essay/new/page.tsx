'use client'

import { useState, useEffect } from 'react'
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

export default function NewEssayPage() {
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
    setIsGenerating(true)
    setGenerateError('')
    
    try {
      // Map the form data to the API request format
      const requestData = {
        topic: essayData.topic,
        requirements: essayData.requirements,
        sources: essayData.sources,
        length: essayData.length,
        essayType: essayData.type,
        writingStyle: essayData.style,
        citationStyle: essayData.citation,
      }

      const response = await fetch('/api/essays/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || `Server error: ${response.status}`)
      }
      
      if (result.success && result.data) {
        setGeneratedContent(result.data.content)
        setEssayData({ ...essayData, content: result.data.content })
        setSavedEssayId(result.data.essayId || null)
        setStep(6)
        
        // Show success message if essay was saved
        if (result.data.saved) {
          console.log('Essay successfully saved with ID:', result.data.essayId)
        } else if (result.data.saveError) {
          console.warn('Essay generated but not saved:', result.data.saveError)
        }
      } else {
        throw new Error(result.error || 'Failed to generate essay')
      }
    } catch (error) {
      console.error('Error generating essay:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate essay. Please try again.'
      setGenerateError(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

    const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's your essay topic?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us what you'd like to write about and any specific requirements you have.
              </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-8">
              <TopicInput
                value={essayData.topic}
                onChange={(topic) => setEssayData({ ...essayData, topic })}
              />
              
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-900">
                  Additional Requirements (Optional)
                </label>
                <Textarea
                  placeholder="Describe any specific requirements, guidelines, or instructions for your essay..."
                  value={essayData.requirements}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEssayData({ ...essayData, requirements: e.target.value })}
                  className="min-h-[120px] text-base"
                />
                <p className="text-sm text-gray-500">
                  Include things like specific sources to use, formatting requirements, or particular angles to explore.
                </p>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose your essay type</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the type of essay that best fits your assignment.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <EssayTypeSelect
                value={essayData.type}
                onChange={(type) => setEssayData({ ...essayData, type })}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Set length & style</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose how long your essay should be and what writing style to use.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/app/essay/length-guide">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Length & Style Guide
                  </Link>
                </Button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-10">
              <LengthSlider
                value={essayData.length}
                onChange={(length) => setEssayData({ ...essayData, length })}
              />
              
              <StylePicker
                value={essayData.style as WritingStyle}
                onChange={(style) => setEssayData({ ...essayData, style })}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Citations & Sources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your citation format and specify any required sources.
              </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-10">
              <CitationSelect
                value={essayData.citation as CitationStyle}
                onChange={(citation) => setEssayData({ ...essayData, citation })}
              />
              
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-900">
                  Required Sources (Optional)
                </label>
                <Textarea
                  placeholder="List specific sources, books, articles, or websites that must be cited in your essay..."
                  value={essayData.sources}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEssayData({ ...essayData, sources: e.target.value })}
                  className="min-h-[120px] text-base"
                />
                <p className="text-sm text-gray-500">
                  Enter specific sources you need to cite, one per line. The AI will incorporate these into your essay.
                </p>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Review & Generate</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Review your essay configuration and generate your content.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Essay Configuration Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700">Topic:</span>
                      <p className="text-gray-900 mt-1">{essayData.topic || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Essay Type:</span>
                      <p className="text-gray-900 mt-1">{essayData.type || 'Not selected'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Length:</span>
                      <p className="text-gray-900 mt-1">~{essayData.length} words</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700">Writing Style:</span>
                      <p className="text-gray-900 mt-1">{essayData.style || 'Not selected'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Citation Format:</span>
                      <p className="text-gray-900 mt-1">{essayData.citation || 'Not selected'}</p>
                    </div>
                  </div>
                </div>
                {essayData.requirements && (
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <span className="font-medium text-gray-700">Requirements:</span>
                    <p className="text-gray-900 mt-1">{essayData.requirements}</p>
                  </div>
                )}
                {essayData.sources && (
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <span className="font-medium text-gray-700">Required Sources:</span>
                    <p className="text-gray-900 mt-1">{essayData.sources}</p>
                  </div>
                )}
              </div>
              
              {generateError && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-red-800">
                        Essay Generation Failed
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{generateError}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Essay Generated Successfully!</h2>
                <p className="text-lg text-gray-600">
                  Your essay has been generated and saved. You can now edit it or navigate to your dashboard.
                </p>
                {savedEssayId && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      ✅ Essay saved successfully! You can find it in your dashboard.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3">
                {savedEssayId && (
                  <Button asChild>
                    <Link href={`/app/essay/${savedEssayId}`}>
                      <PenTool className="h-4 w-4 mr-2" />
                      Edit in Full Editor
                    </Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href="/app">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Go to Dashboard
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <EssayEditor
              content={essayData.content}
              onChange={(content) => setEssayData({ ...essayData, content })}
            />
            
            <div className="flex justify-center space-x-4 pt-8">
              <Button 
                variant="outline" 
                onClick={() => {
                  setStep(1)
                  setEssayData({
                    topic: '',
                    requirements: '',
                    length: 1000,
                    type: '' as EssayType | '',
                    style: '' as WritingStyle | '',
                    citation: '' as CitationStyle | '',
                    sources: '',
                    content: ''
                  })
                  setGeneratedContent('')
                  setSavedEssayId(null)
                  setGenerateError('')
                }}
              >
                Create Another Essay
              </Button>
              {savedEssayId && (
                <Button asChild>
                  <Link href={`/app/essay/${savedEssayId}`}>
                    Continue Editing
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <PenTool className="h-10 w-10 text-gray-600" />
              <h1 className="text-4xl font-bold text-gray-900">Create New Essay</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our step-by-step process to create your perfect essay with AI assistance.
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-2">
            {[
              { step: 1, label: 'Topic' },
              { step: 2, label: 'Type' },
              { step: 3, label: 'Style' },
              { step: 4, label: 'Citations' },
              { step: 5, label: 'Review' },
              { step: 6, label: 'Edit' },
            ].map((stepInfo, index) => (
              <div key={stepInfo.step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-medium transition-colors ${
                      step >= stepInfo.step
                        ? 'bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 border-gray-500 text-white shadow-lg'
                        : 'border-gray-300 text-gray-500'
                    }`}
                  >
                    {stepInfo.step}
                  </div>
                  <span className={`text-xs mt-2 ${
                    step >= stepInfo.step ? 'text-gray-600 font-medium' : 'text-gray-500'
                  }`}>
                    {stepInfo.label}
                  </span>
                </div>
                {index < 5 && (
                  <div
                    className={`h-0.5 w-8 mx-3 transition-colors ${
                      step > stepInfo.step ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-xl border-0">
          <CardContent className="p-12">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            size="lg"
          >
            Previous
          </Button>

          <div className="flex space-x-4">
            {step === 1 && (
              <Button
                onClick={handleNext}
                disabled={!essayData.topic}
                size="lg"
              >
                Next: Choose Type
              </Button>
            )}
            
            {step === 2 && (
              <Button
                onClick={handleNext}
                disabled={!essayData.type}
                size="lg"
              >
                Next: Set Style
              </Button>
            )}

            {step === 3 && (
              <Button
                onClick={handleNext}
                disabled={!essayData.style}
                size="lg"
              >
                Next: Citations
              </Button>
            )}

            {step === 4 && (
              <Button
                onClick={handleNext}
                disabled={!essayData.citation}
                size="lg"
              >
                Next: Review
              </Button>
            )}
            
            {step === 5 && (
              <Button
                onClick={handleGenerate}
                disabled={!essayData.style || !essayData.citation || isGenerating}
                className="min-w-[160px]"
                size="lg"
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
            )}

            {step === 6 && (
              <div className="flex space-x-3">
                <Button variant="outline" size="lg">
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Export Essay
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 