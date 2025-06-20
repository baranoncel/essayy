'use client'

import { useState, useEffect, use } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Save, Download, Share, RefreshCw, Shield, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface DetectionResult {
  id: string
  title: string
  content: string
  aiProbability: number
  humanProbability: number
  confidence: number
  analysis: string[]
  created_at: string
  updated_at: string
}

export default function DetectionResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isReanalyzing, setIsReanalyzing] = useState(false)

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(`/api/detect/${id}`)
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch detection result')
        }
        
        if (data.success) {
          setResult(data.data)
        } else {
          throw new Error(data.error || 'Failed to fetch detection result')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch detection result')
      } finally {
        setLoading(false)
      }
    }

    fetchResult()
  }, [id])

  const handleReanalyze = async () => {
    if (!result) return
    
    setIsReanalyzing(true)
    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: result.content,
          title: result.title
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to reanalyze content')
      }
      
      if (data.success) {
        setResult({ ...result, ...data.data })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reanalyze content')
    } finally {
      setIsReanalyzing(false)
    }
  }

  const getResultColor = (aiProb: number) => {
    if (aiProb < 30) return 'text-green-600'
    if (aiProb < 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getResultIcon = (aiProb: number) => {
    if (aiProb < 30) return <CheckCircle className="h-6 w-6 text-green-600" />
    if (aiProb < 70) return <AlertTriangle className="h-6 w-6 text-yellow-600" />
    return <Shield className="h-6 w-6 text-red-600" />
  }

  const getResultMessage = (aiProb: number) => {
    if (aiProb < 30) return 'Likely human-written'
    if (aiProb < 70) return 'Mixed or uncertain origin'
    return 'Likely AI-generated'
  }

  const handleExport = () => {
    const data = {
      title: result?.title,
      content: result?.content,
      aiProbability: result?.aiProbability,
      humanProbability: result?.humanProbability,
      confidence: result?.confidence,
      analysis: result?.analysis,
      createdAt: result?.created_at
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `detection-result-${id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-8 w-8 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading detection result...</p>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Detection Result Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The detection result you are looking for does not exist.'}</p>
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
              <Button variant="outline" onClick={handleReanalyze} disabled={isReanalyzing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isReanalyzing ? 'animate-spin' : ''}`} />
                {isReanalyzing ? 'Reanalyzing...' : 'Reanalyze'}
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
            <p className="text-gray-600">
              Detection performed on {new Date(result.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Original Content */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Analyzed Content</CardTitle>
              <CardDescription>The text that was analyzed for AI detection</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={result.content}
                readOnly
                className="min-h-[400px] resize-none bg-gray-50"
              />
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>{result.content.length} characters</span>
                <span>{result.content.trim().split(/\s+/).filter(word => word.length > 0).length} words</span>
              </div>
            </CardContent>
          </Card>

          {/* Detection Results */}
          <div className="space-y-6">
            {/* Main Result */}
            <Card>
              <CardHeader>
                <CardTitle>Detection Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-3">
                    {getResultIcon(result.aiProbability)}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${getResultColor(result.aiProbability)}`}>
                    {getResultMessage(result.aiProbability)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Confidence: {result.confidence}%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Probability Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Probability Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-red-600">AI Generated</span>
                    <span className="text-sm font-medium">{result.aiProbability}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${result.aiProbability}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-600">Human Written</span>
                    <span className="text-sm font-medium">{result.humanProbability}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${result.humanProbability}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Details */}
            <Card>
              <CardHeader>
                <CardTitle>Analysis Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  {result.analysis.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 