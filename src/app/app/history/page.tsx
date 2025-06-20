'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGlobalUI } from '@/hooks/useGlobalUI'
import { 
  FileText, 
  Search, 
  Filter, 
  Calendar, 
  Eye, 
  Edit, 
  Download, 
  Trash2,
  PenTool,
  Shield,
  Zap,
  MoreHorizontal,
  Clock,
  TrendingUp,
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'

// Types for history items
type EssayHistoryItem = {
  id: string
  type: 'essay'
  title: string
  essayType: string
  wordCount: number
  createdAt: string
  updatedAt: string
  status: 'completed' | 'draft'
  citationStyle: string
  grade: number | null
}

type HumanizerHistoryItem = {
  id: string
  type: 'humanizer'
  title: string
  originalWordCount: number
  humanizedWordCount: number
  createdAt: string
  mode: string
  status: 'completed' | 'draft'
  aiScore: number
}

type DetectorHistoryItem = {
  id: string
  type: 'detector'
  title: string
  wordCount: number
  createdAt: string
  aiProbability: number
  humanProbability: number
  confidence: number
  status: 'completed' | 'draft'
}

type HistoryItem = EssayHistoryItem | HumanizerHistoryItem | DetectorHistoryItem

// Mock data for different types of activities
const mockHistory: HistoryItem[] = [
  {
    id: '1',
    type: 'essay',
    title: 'The Impact of AI on Modern Education',
    essayType: 'Argumentative',
    wordCount: 2500,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T11:45:00Z',
    status: 'completed',
    citationStyle: 'APA',
    grade: null
  },
  {
    id: '2',
    type: 'humanizer',
    title: 'Climate Change Research Paper - Humanized',
    originalWordCount: 1800,
    humanizedWordCount: 1850,
    createdAt: '2024-01-14T14:20:00Z',
    mode: 'balanced',
    status: 'completed',
    aiScore: 15
  },
  {
    id: '3',
    type: 'detector',
    title: 'Student Essay Analysis',
    wordCount: 1200,
    createdAt: '2024-01-14T09:15:00Z',
    aiProbability: 85,
    humanProbability: 15,
    confidence: 92,
    status: 'completed'
  },
  {
    id: '4',
    type: 'essay',
    title: 'Shakespeare\'s Influence on Modern Literature',
    essayType: 'Literary Analysis',
    wordCount: 3200,
    createdAt: '2024-01-13T16:45:00Z',
    updatedAt: '2024-01-13T18:20:00Z',
    status: 'completed',
    citationStyle: 'MLA',
    grade: null
  },
  {
    id: '5',
    type: 'humanizer',
    title: 'Marketing Strategy Report - Humanized',
    originalWordCount: 2200,
    humanizedWordCount: 2180,
    createdAt: '2024-01-12T11:30:00Z',
    mode: 'aggressive',
    status: 'completed',
    aiScore: 8
  },
  {
    id: '6',
    type: 'detector',
    title: 'Research Paper Authenticity Check',
    wordCount: 4500,
    createdAt: '2024-01-11T13:25:00Z',
    aiProbability: 25,
    humanProbability: 75,
    confidence: 88,
    status: 'completed'
  },
  {
    id: '7',
    type: 'essay',
    title: 'The Future of Renewable Energy',
    essayType: 'Research Paper',
    wordCount: 0,
    createdAt: '2024-01-10T12:00:00Z',
    updatedAt: '2024-01-10T12:00:00Z',
    status: 'draft',
    citationStyle: 'IEEE',
    grade: null
  }
]

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  
  const { showLoading, hideLoading, toast } = useGlobalUI()

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true)
        showLoading()
        
        // Fetch essays
        const essaysResponse = await fetch('/api/essays')
        const essaysResult = await essaysResponse.json()
        
        // Fetch detections (if API exists)
        let detectionsResult = { success: false, data: [] }
        try {
          const detectionsResponse = await fetch('/api/detect')
          detectionsResult = await detectionsResponse.json()
        } catch (e) {
          console.log('Detections API not available')
        }
        
        // Fetch humanizations (if API exists)
        let humanizationsResult = { success: false, data: [] }
        try {
          const humanizationsResponse = await fetch('/api/humanize')
          humanizationsResult = await humanizationsResponse.json()
        } catch (e) {
          console.log('Humanizations API not available')
        }

        const allHistory: HistoryItem[] = []

        // Add essays
        if (essaysResult.success && essaysResult.data) {
          const essayItems: EssayHistoryItem[] = essaysResult.data.map((essay: any) => ({
            id: essay.id,
            type: 'essay' as const,
            title: essay.title,
            essayType: essay.essay_type,
            wordCount: essay.word_count || 0,
            createdAt: essay.created_at,
            updatedAt: essay.updated_at,
            status: 'completed' as const,
            citationStyle: essay.citation_style || 'APA',
            grade: null
          }))
          allHistory.push(...essayItems)
        }

        // Add detections
        if (detectionsResult.success && detectionsResult.data) {
          const detectionItems: DetectorHistoryItem[] = detectionsResult.data.map((detection: any) => ({
            id: detection.id,
            type: 'detector' as const,
            title: detection.title || 'AI Detection Analysis',
            wordCount: detection.word_count || 0,
            createdAt: detection.created_at,
            aiProbability: detection.ai_probability || 0,
            humanProbability: detection.human_probability || 0,
            confidence: detection.confidence || 0,
            status: 'completed' as const
          }))
          allHistory.push(...detectionItems)
        }

        // Add humanizations
        if (humanizationsResult.success && humanizationsResult.data) {
          const humanizationItems: HumanizerHistoryItem[] = humanizationsResult.data.map((humanization: any) => ({
            id: humanization.id,
            type: 'humanizer' as const,
            title: humanization.title || 'Content Humanization',
            originalWordCount: humanization.original_word_count || 0,
            humanizedWordCount: humanization.humanized_word_count || 0,
            createdAt: humanization.created_at,
            mode: humanization.mode || 'balanced',
            status: 'completed' as const,
            aiScore: humanization.ai_score || 0
          }))
          allHistory.push(...humanizationItems)
        }

        setHistory(allHistory)
        setError(null)
        toast.success('History loaded successfully', `Found ${allHistory.length} items`)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch history')
        toast.error('Failed to load history', 'Please try again later')
      } finally {
        setLoading(false)
        hideLoading()
      }
    }

    fetchHistory()
  }, [])

  const filteredHistory = history
    .filter(item => {
      if (filterType !== 'all' && item.type !== filterType) return false
      if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
                 case 'wordCount':
           const aWords = a.type === 'essay' ? a.wordCount : 
                         a.type === 'humanizer' ? a.humanizedWordCount : 
                         a.wordCount
           const bWords = b.type === 'essay' ? b.wordCount : 
                         b.type === 'humanizer' ? b.humanizedWordCount : 
                         b.wordCount
           return bWords - aWords
        default:
          return 0
      }
    })

  // Pagination calculations
  const totalItems = filteredHistory.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredHistory.slice(startIndex, endIndex)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, filterType, sortBy])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'essay':
        return <PenTool className="h-4 w-4 text-gray-600" />
      case 'humanizer':
        return <Zap className="h-4 w-4 text-purple-600" />
      case 'detector':
        return <Shield className="h-4 w-4 text-orange-600" />
      default:
        return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'essay':
        return 'Essay Generated'
      case 'humanizer':
        return 'Content Humanized'
      case 'detector':
        return 'AI Detection'
      default:
        return 'Unknown'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

     const stats = {
    totalEssays: history.filter(item => item.type === 'essay').length,
    totalDetections: history.filter(item => item.type === 'detector').length,
    totalHumanizations: history.filter(item => item.type === 'humanizer').length,
    totalWords: history.reduce((acc, item) => {
       if (item.type === 'essay') return acc + (item as EssayHistoryItem).wordCount
       if (item.type === 'humanizer') return acc + (item as HumanizerHistoryItem).humanizedWordCount
       if (item.type === 'detector') return acc + (item as DetectorHistoryItem).wordCount
       return acc
     }, 0)
   }

  const getItemLink = (item: HistoryItem) => {
    switch (item.type) {
      case 'essay':
        return `/app/essay/${item.id}`
      case 'detector':
        return `/app/detection/${item.id}`
      case 'humanizer':
        return `/app/humanization/${item.id}`
      default:
        return '#'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Activity History</h1>
          <p className="text-gray-600">
            Track all your essays, humanizations, and AI detections in one place.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <PenTool className="h-8 w-8 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Essays Generated</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalEssays}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">AI Detections</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalDetections}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Humanizations</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalHumanizations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Words</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalWords.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[160px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="essay">Essays</SelectItem>
                    <SelectItem value="humanizer">Humanizations</SelectItem>
                    <SelectItem value="detector">AI Detections</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="title">Title A-Z</SelectItem>
                    <SelectItem value="wordCount">Word Count</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <div>
                {filteredHistory.length !== history.length ? (
                  <>Showing {filteredHistory.length} of {history.length} items</>
                ) : (
                  <>Total: {history.length} items</>
                )}
              </div>
              <div>
                {totalPages > 1 && (
                  <>Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}</>
            )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History List */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading history...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center p-8">
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : currentItems.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-gray-500">No items found for the current page.</p>
            </div>
          ) : (
            currentItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getTypeIcon(item.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Link href={getItemLink(item)}>
                          <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 cursor-pointer transition-all duration-300">
                          {item.title}
                        </h3>
                        </Link>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          {getTypeIcon(item.type)}
                          {getTypeLabel(item.type)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(item.createdAt)}
                        </span>
                      </div>

                      {/* Type-specific details */}
                      <div className="flex flex-wrap gap-4 text-sm">
                                                 {item.type === 'essay' && (() => {
                           const essay = item as EssayHistoryItem
                           return (
                             <>
                               <span className="text-gray-600">
                                 <strong>Type:</strong> {essay.essayType}
                               </span>
                               <span className="text-gray-600">
                                 <strong>Words:</strong> {essay.wordCount.toLocaleString()}
                               </span>
                               <span className="text-gray-600">
                                 <strong>Citation:</strong> {essay.citationStyle}
                               </span>
                             </>
                           )
                         })()}
                         
                         {item.type === 'humanizer' && (() => {
                           const humanizer = item as HumanizerHistoryItem
                           return (
                             <>
                               <span className="text-gray-600">
                                 <strong>Mode:</strong> {humanizer.mode}
                               </span>
                               <span className="text-gray-600">
                                 <strong>Words:</strong> {humanizer.originalWordCount} → {humanizer.humanizedWordCount}
                               </span>
                               <span className={`font-medium ${
                                 humanizer.aiScore < 30 ? 'text-green-600' : 
                                 humanizer.aiScore < 70 ? 'text-yellow-600' : 'text-red-600'
                               }`}>
                                 <strong>AI Score:</strong> {humanizer.aiScore}%
                               </span>
                             </>
                           )
                         })()}
                         
                         {item.type === 'detector' && (() => {
                           const detector = item as DetectorHistoryItem
                           return (
                             <>
                               <span className="text-gray-600">
                                 <strong>Words:</strong> {detector.wordCount.toLocaleString()}
                               </span>
                               <span className={`font-medium ${
                                 detector.aiProbability < 30 ? 'text-green-600' : 
                                 detector.aiProbability < 70 ? 'text-yellow-600' : 'text-red-600'
                               }`}>
                                 <strong>AI:</strong> {detector.aiProbability}%
                               </span>
                               <span className="text-gray-600">
                                 <strong>Confidence:</strong> {detector.confidence}%
                               </span>
                             </>
                           )
                         })()}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    {item.type === 'essay' && (
                      <>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/app/essay/${item.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/app/essay/${item.id}`}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Link>
                        </Button>
                      </>
                    )}
                    
                    {item.type === 'humanizer' && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/app/humanization/${item.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Results
                        </Link>
                      </Button>
                    )}
                    
                    {item.type === 'detector' && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/app/detection/${item.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View Results
                        </Link>
                      </Button>
                    )}
                    
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                    
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && !loading && currentItems.length > 0 && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} results
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNumber
                  if (totalPages <= 5) {
                    pageNumber = i + 1
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i
                  } else {
                    pageNumber = currentPage - 2 + i
                  }
                  
                  return (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNumber)}
                      className="w-10"
                    >
                      {pageNumber}
                    </Button>
                  )
                })}
                
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="text-gray-400">...</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(totalPages)}
                      className="w-10"
                    >
                      {totalPages}
                    </Button>
                  </>
                )}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {filteredHistory.length === 0 && !loading && (
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No history found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || filterType !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Start creating essays to see your history here'
                }
              </p>
              {(!searchQuery && filterType === 'all') && (
                <Button asChild>
                  <Link href="/app/essay/new">
                    <PenTool className="h-4 w-4 mr-2" />
                    Create Your First Essay
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 