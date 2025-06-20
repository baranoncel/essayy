'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Zap, Copy, Download, RefreshCw, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HumanizerPage() {
  const [originalText, setOriginalText] = useState('')
  const [humanizedText, setHumanizedText] = useState('')
  const [isHumanizing, setIsHumanizing] = useState(false)
  const [humanizationMode, setHumanizationMode] = useState('balanced')
  
  const modes = [
    { value: 'conservative', label: 'Conservative', description: 'Minimal changes, preserve original meaning' },
    { value: 'balanced', label: 'Balanced', description: 'Good balance between human-like and original content' },
    { value: 'aggressive', label: 'Aggressive', description: 'Maximum humanization, more natural language' },
    { value: 'creative', label: 'Creative', description: 'Creative rewriting with varied sentence structures' }
  ]

  const handleHumanize = async () => {
    if (!originalText.trim()) return

    setIsHumanizing(true)
    
    // Simulate API call
    setTimeout(() => {
      // Mock humanized text based on mode
      let humanized = originalText
      
      if (humanizationMode === 'conservative') {
        humanized = originalText
          .replace(/Additionally,/g, 'Also,')
          .replace(/Furthermore,/g, 'What\'s more,')
          .replace(/In conclusion,/g, 'To sum up,')
      } else if (humanizationMode === 'balanced') {
        humanized = originalText
          .replace(/It is important to note that/g, 'It\'s worth mentioning that')
          .replace(/Therefore,/g, 'So,')
          .replace(/However,/g, 'But')
          .replace(/In addition,/g, 'Plus,')
      } else if (humanizationMode === 'aggressive') {
        humanized = originalText
          .replace(/artificial intelligence/gi, 'AI')
          .replace(/significant/g, 'huge')
          .replace(/demonstrate/g, 'show')
          .replace(/facilitate/g, 'help')
          .replace(/utilize/g, 'use')
      } else {
        humanized = originalText
          .replace(/The research shows/g, 'Studies have found')
          .replace(/It can be concluded that/g, 'What we\'ve learned is that')
          .replace(/Based on the analysis/g, 'Looking at the data')
      }

      setHumanizedText(humanized)
      setIsHumanizing(false)
    }, 3000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(humanizedText)
  }

  const handleReset = () => {
    setOriginalText('')
    setHumanizedText('')
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Content Humanizer</h1>
          <p className="text-gray-600">
            Transform AI-generated text into natural, human-like content that bypasses AI detection.
          </p>
        </div>

        {/* Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Humanization Settings</CardTitle>
            <CardDescription>
              Choose how aggressively you want to humanize your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {modes.map((mode) => (
                <div
                  key={mode.value}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    humanizationMode === mode.value
                      ? 'border-gray-500 bg-gray-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setHumanizationMode(mode.value)}
                >
                  <h3 className="font-medium mb-1">{mode.label}</h3>
                  <p className="text-sm text-gray-600">{mode.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Text */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Original Text
              </CardTitle>
              <CardDescription>
                Paste your AI-generated content here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your AI-generated text here..."
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
                className="min-h-[400px] resize-none"
              />
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{originalText.length} characters</span>
                <span>{originalText.trim().split(/\s+/).filter(word => word.length > 0).length} words</span>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleHumanize}
                  disabled={!originalText.trim() || isHumanizing}
                  className="flex-1"
                >
                  {isHumanizing ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Humanizing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Humanize Text
                    </>
                  )}
                </Button>
                
                <Button variant="outline" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Humanized Text */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Humanized Text
              </CardTitle>
              <CardDescription>
                Your humanized, detection-resistant content
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!humanizedText ? (
                <div className="flex items-center justify-center h-[400px] text-gray-500">
                  <div className="text-center">
                    <ArrowRight className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Humanized text will appear here</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    value={humanizedText}
                    onChange={(e) => setHumanizedText(e.target.value)}
                    className="min-h-[400px] resize-none"
                  />
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{humanizedText.length} characters</span>
                    <span>{humanizedText.trim().split(/\s+/).filter(word => word.length > 0).length} words</span>
                  </div>

                  <div className="flex space-x-3">
                    <Button onClick={handleCopy} className="flex-1">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Text
                    </Button>
                    
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips and Additional Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Humanization Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use contractions (it's, don't, can't)</li>
                <li>• Add personal touches and opinions</li>
                <li>• Vary sentence structure and length</li>
                <li>• Include casual language and transitions</li>
                <li>• Remove overly formal or repetitive phrases</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Check for AI Detection</h3>
                  <p className="text-sm text-gray-600">
                    Verify that your humanized content passes AI detection tests.
                  </p>
                </div>
                <Link href="/app/detector">
                  <Button variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Test Content
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 