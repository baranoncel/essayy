'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PenTool, FileText, Shield, Zap, Plus, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { getEssayIcon } from '@/lib/essay-icons'
import { EmojiPicker } from '@/components/EmojiPicker'

interface Essay {
  id: string
  title: string
  topic: string
  essay_type: string
  word_count: number
  created_at: string
  custom_emoji?: string
}

export default function AppDashboard() {
  const [essays, setEssays] = useState<Essay[]>([])
  const [loading, setLoading] = useState(true)
  const [updatingEmoji, setUpdatingEmoji] = useState<string | null>(null)
  const [stats, setStats] = useState([
    { name: 'Essays Written', value: '0', icon: FileText, color: 'text-gray-600' },
    { name: 'Content Scanned', value: '0', icon: Shield, color: 'text-green-600' },
    { name: 'Text Humanized', value: '0', icon: Zap, color: 'text-purple-600' },
    { name: 'Words Generated', value: '0', icon: PenTool, color: 'text-orange-600' },
  ])

  const handleEmojiUpdate = async (essayId: string, emoji: string) => {
    setUpdatingEmoji(essayId)
    try {
      const response = await fetch(`/api/essays/${essayId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          custom_emoji: emoji || null  // Clear emoji if empty string
        })
      })

      if (response.ok) {
        // Update the essay in local state
        setEssays(prevEssays => 
          prevEssays.map(essay => {
            if (essay.id === essayId) {
              const updatedEssay: Essay = { ...essay }
              if (emoji) {
                updatedEssay.custom_emoji = emoji
              } else {
                delete updatedEssay.custom_emoji
              }
              return updatedEssay
            }
            return essay
          })
        )
      } else {
        console.error('Failed to update emoji')
      }
    } catch (error) {
      console.error('Error updating emoji:', error)
    } finally {
      setUpdatingEmoji(null)
    }
  }

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const response = await fetch('/api/essays')
        const result = await response.json()
        
        if (result.success && result.data) {
          const essayData: Essay[] = result.data
          setEssays(essayData)
          
          // Calculate stats
          const totalWords = essayData.reduce((sum: number, essay: Essay) => sum + (essay.word_count || 0), 0)
          setStats([
            { name: 'Essays Written', value: essayData.length.toString(), icon: FileText, color: 'text-gray-600' },
            { name: 'Content Scanned', value: '0', icon: Shield, color: 'text-green-600' },
            { name: 'Text Humanized', value: '0', icon: Zap, color: 'text-purple-600' },
            { name: 'Words Generated', value: totalWords.toLocaleString(), icon: PenTool, color: 'text-orange-600' },
          ])
        }
      } catch (error) {
        console.error('Error fetching essays:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEssays()
  }, [])

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your writing overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PenTool className="h-5 w-5 mr-2" />
              Write New Essay
            </CardTitle>
            <CardDescription>
              Generate a new essay with AI assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/app/essay/new">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Start Writing
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Detect AI Content
            </CardTitle>
            <CardDescription>
              Check if text was generated by AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/app/detector">
              <Button variant="outline" className="w-full">
                Scan Text
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Humanize Content
            </CardTitle>
            <CardDescription>
              Make AI text sound more natural
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/app/humanizer">
              <Button variant="outline" className="w-full">
                Humanize Text
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Essays */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Essays</CardTitle>
          <CardDescription>Your latest writing projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loading ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="ml-2">Loading essays...</span>
              </div>
            ) : essays.length === 0 ? (
              <div className="text-center p-8">
                <p className="text-gray-500">No essays yet. Create your first essay!</p>
                <Link href="/app/essay/new">
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Essay
                  </Button>
                </Link>
              </div>
            ) : (
                            essays.slice(0, 5).map((essay: Essay) => (
                <div key={essay.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <EmojiPicker
                        essay={essay}
                        onEmojiSelect={(emoji) => handleEmojiUpdate(essay.id, emoji)}
                        size="md"
                        disabled={updatingEmoji === essay.id}
                      />
                    </div>
                    <div className="flex-1">
                      <Link href={`/app/essay/${essay.id}`}>
                        <h3 className="font-medium text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 cursor-pointer transition-all duration-300">{essay.title}</h3>
                      </Link>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{essay.essay_type}</span>
                        <span>•</span>
                        <span>{essay.word_count} words</span>
                        <span>•</span>
                        <span>{new Date(essay.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/app/essay/${essay.id}`}>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
} 