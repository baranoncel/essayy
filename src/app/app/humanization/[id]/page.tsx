'use client'

import { useState, useEffect, use } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Download, Share, RefreshCw, Zap, Copy, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface HumanizationResult {
  id: string
  title: string
  originalContent: string
  humanizedContent: string
  mode: string
  originalWordCount: number
  humanizedWordCount: number
  aiScore: number
  improvements: string[]
  created_at: string
  updated_at: string
}

export default function HumanizationResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [result, setResult] = useState<HumanizationResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRehumanizing, setIsRehumanizing] = useState(false)
  const [viewMode, setViewMode] = useState<'split' | 'original' | 'humanized'>('split')

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(`/api/humanize/${id}`)
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch humanization result')
        }
        
        if (data.success) {
          setResult(data.data)
        } else {
          throw new Error(data.error || 'Failed to fetch humanization result')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch humanization result')
      } finally {
        setLoading(false)
      }
    }

    fetchResult()
  }, [id])

  const handleRehumanize = async () => {
    if (!result) return
    
    setIsRehumanizing(true)
    try {
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: result.originalContent,
          mode: result.mode,
          title: result.title
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to rehumanize content')
      }
      
      if (data.success) {
        setResult({ ...result, ...data.data })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to rehumanize content')
    } finally {
      setIsRehumanizing(false)
    }
  }

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  const handleExport = () => {
    const data = {
      title: result?.title,
      originalContent: result?.originalContent,
      humanizedContent: result?.humanizedContent,
      mode: result?.mode,
      aiScore: result?.aiScore,
      improvements: result?.improvements,
      createdAt: result?.created_at
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `humanization-result-${id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'conservative': return 'bg-gray-100 text-gray-800'
      case 'balanced': return 'bg-green-100 text-green-800'
      case 'aggressive': return 'bg-orange-100 text-orange-800'
      case 'creative': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Zap className="h-8 w-8 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading humanization result...</p>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Humanization Result Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The humanization result you are looking for does not exist.'}</p>
            <Link href="/app">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/app/history" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to History
            </Link>
            
            <div className="flex space-x-3">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('split')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    viewMode === 'split'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Split
                </button>
                <button
                  onClick={() => setViewMode('original')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    viewMode === 'original'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Original
                </button>
                <button
                  onClick={() => setViewMode('humanized')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    viewMode === 'humanized'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Humanized
                </button>
              </div>
              
              <Button variant="outline" onClick={handleRehumanize} disabled={isRehumanizing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isRehumanizing ? 'animate-spin' : ''}`} />
                {isRehumanizing ? 'Rehumanizing...' : 'Rehumanize'}
              </Button>
              <Button variant="outline" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{result.title}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>Humanized on {new Date(result.created_at).toLocaleDateString()}</span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getModeColor(result.mode)}`}>
                {result.mode} mode
              </span>
            </div>
          </div>
        </div>

        {/* Content Display */}
        {viewMode === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Original Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Original Content</CardTitle>
                    <CardDescription>The original AI-generated text</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(result.originalContent)}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={result.originalContent}
                  readOnly
                  className="min-h-[400px] resize-none bg-gray-50"
                />
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span>{result.originalContent.length} characters</span>
                  <span>{result.originalWordCount} words</span>
                </div>
              </CardContent>
            </Card>

            {/* Humanized Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Humanized Content</CardTitle>
                    <CardDescription>The human-like version</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(result.humanizedContent)}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={result.humanizedContent}
                  readOnly
                  className="min-h-[400px] resize-none bg-green-50"
                />
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span>{result.humanizedContent.length} characters</span>
                  <span>{result.humanizedWordCount} words</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    {viewMode === 'original' ? 'Original Content' : 'Humanized Content'}
                  </CardTitle>
                  <CardDescription>
                    {viewMode === 'original' 
                      ? 'The original AI-generated text' 
                      : 'The human-like version'
                    }
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopy(
                    viewMode === 'original' ? result.originalContent : result.humanizedContent
                  )}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                value={viewMode === 'original' ? result.originalContent : result.humanizedContent}
                readOnly
                className={`min-h-[500px] resize-none ${
                  viewMode === 'original' ? 'bg-gray-50' : 'bg-green-50'
                }`}
              />
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>
                  {viewMode === 'original' 
                    ? result.originalContent.length 
                    : result.humanizedContent.length
                  } characters
                </span>
                <span>
                  {viewMode === 'original' 
                    ? result.originalWordCount 
                    : result.humanizedWordCount
                  } words
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* AI Score */}
          <Card>
            <CardHeader>
              <CardTitle>AI Detection Score</CardTitle>
              <CardDescription>Lower is better for human-like content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {result.aiScore}%
                </div>
                <p className="text-gray-600 text-sm">
                  {result.aiScore < 20 ? 'Excellent' : 
                   result.aiScore < 40 ? 'Good' : 
                   result.aiScore < 60 ? 'Fair' : 'Needs improvement'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Word Count Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Word Count Change</CardTitle>
              <CardDescription>Comparison of content length</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-lg font-semibold mb-2">
                  <span>{result.originalWordCount}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className={
                    result.humanizedWordCount > result.originalWordCount 
                      ? 'text-gray-600' 
                      : result.humanizedWordCount < result.originalWordCount
                      ? 'text-orange-600'
                      : 'text-gray-600'
                  }>
                    {result.humanizedWordCount}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {result.humanizedWordCount === result.originalWordCount 
                    ? 'No change'
                    : result.humanizedWordCount > result.originalWordCount
                    ? `+${result.humanizedWordCount - result.originalWordCount} words`
                    : `${result.humanizedWordCount - result.originalWordCount} words`
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mode Used */}
          <Card>
            <CardHeader>
              <CardTitle>Humanization Mode</CardTitle>
              <CardDescription>Level of transformation applied</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getModeColor(result.mode)}`}>
                  {result.mode}
                </div>
                <p className="text-gray-600 text-sm">
                  {result.mode === 'conservative' && 'Minimal changes, preserve meaning'}
                  {result.mode === 'balanced' && 'Good balance of human-like and original'}
                  {result.mode === 'aggressive' && 'Maximum humanization'}
                  {result.mode === 'creative' && 'Creative rewriting with varied structures'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Improvements */}
        {result.improvements && result.improvements.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Improvements Made</CardTitle>
              <CardDescription>Changes applied to make the content more human-like</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                {result.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center">
                    <Zap className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 