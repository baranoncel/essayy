'use client'

import { useState, useEffect, use } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EssayEditor } from '@/components/EssayEditor'
import { ArrowLeft, Save, Download, Share, Trash2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getEssayIcon } from '@/lib/essay-icons'
import { EmojiPicker } from '@/components/EmojiPicker'

interface Essay {
  id: string
  title: string
  content: string
  topic: string
  essay_type: string
  writing_style: string
  citation_style: string
  word_count: number
  character_count: number
  created_at: string
  updated_at: string
  custom_emoji?: string
}

export default function EssayEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [essay, setEssay] = useState<Essay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isUpdatingEmoji, setIsUpdatingEmoji] = useState(false)
  
  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const response = await fetch(`/api/essays/${id}`)
        const result = await response.json()
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to fetch essay')
        }
        
        if (result.success) {
          setEssay(result.data)
        } else {
          throw new Error(result.error || 'Failed to fetch essay')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch essay')
      } finally {
        setLoading(false)
      }
    }

    fetchEssay()
  }, [id])

  const handleEmojiUpdate = async (emoji: string) => {
    if (!essay) return
    
    setIsUpdatingEmoji(true)
    try {
      const response = await fetch(`/api/essays/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: essay.content,
          title: essay.title,
          custom_emoji: emoji || null
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update emoji')
      }
      
      if (result.success) {
        setEssay(result.data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update emoji')
    } finally {
      setIsUpdatingEmoji(false)
    }
  }

  const handleSave = async () => {
    if (!essay) return
    
    setIsSaving(true)
    try {
      const response = await fetch(`/api/essays/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: essay.content,
          title: essay.title
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to save essay')
      }
      
      if (result.success) {
        setEssay(result.data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save essay')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!essay) return
    
    const confirmed = confirm('Are you sure you want to delete this essay? This action cannot be undone.')
    if (!confirmed) return

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/essays/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete essay')
      }
      
      router.push('/app')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete essay')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleExport = (format: 'pdf' | 'docx') => {
    // TODO: Implement export functionality
    console.log(`Exporting essay as ${format}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading essay...</p>
        </div>
      </div>
    )
  }

  if (error || !essay) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Essay Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The essay you are looking for does not exist.'}</p>
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
            <Link href="/app" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport('pdf')}>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport('docx')}>
                <Download className="h-4 w-4 mr-2" />
                Export Word
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4 mr-2" />
                )}
                Delete
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <EmojiPicker
                essay={essay}
                onEmojiSelect={handleEmojiUpdate}
                size="lg"
                disabled={isUpdatingEmoji}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{essay.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{essay.essay_type}</span>
                <span>•</span>
                <span>{essay.word_count} words</span>
                <span>•</span>
                <span>Created {new Date(essay.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <span>Updated {new Date(essay.updated_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editor */}
        <Card>
          <CardContent className="p-8">
            <EssayEditor
              content={essay.content}
              onChange={(content) => setEssay({ ...essay, content })}
              onSave={handleSave}
              onExport={handleExport}
            />
          </CardContent>
        </Card>

        {/* Auto-save status */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            {isSaving ? 'Saving...' : 'Changes saved automatically'}
          </p>
        </div>
      </div>
    </div>
  )
} 