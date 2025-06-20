export type EssayType = 
  | 'classic'
  | 'persuasive'
  | 'personal-statement'
  | 'book-report'
  | 'critique'
  | 'compare-contrast'

export type CitationStyle = 
  | 'none'
  | 'apa-7'
  | 'mla-9'
  | 'harvard'
  | 'ieee'
  | 'chicago'

export type WritingStyle = 'standard' | 'custom'

export interface CustomStyleSample {
  id: string
  content: string
  fileName?: string
  uploadedAt: Date
}

export interface EssayGenerationRequest {
  topic: string
  requirements?: string
  sources?: string
  length: number
  essayType: EssayType
  writingStyle: WritingStyle
  customStyleSample?: string
  citationStyle: CitationStyle
  userId: string
}

export interface Essay {
  id: string
  userId: string
  title: string
  content: string
  originalContent?: string
  topic: string
  length: number
  essayType: EssayType
  writingStyle: WritingStyle
  citationStyle: CitationStyle
  aiDetectionScore?: number
  humanizedScore?: number
  isHumanized: boolean
  characterCount: number
  wordCount: number
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name?: string
  planId?: string
  stripeCustomerId?: string
  subscriptionStatus?: 'active' | 'inactive' | 'cancelled' | 'past_due'
  createdAt: Date
  updatedAt: Date
}

export interface Plan {
  id: string
  name: string
  stripePriceId: string
  essayQuota: number
  detectorQuota: number
  humanizerChars: number
  interval: 'monthly' | 'yearly'
  price: number
  features: string[]
  isActive: boolean
}

export interface UsageLog {
  id: string
  userId: string
  action: 'essay_generation' | 'ai_detection' | 'humanization'
  resourceUsed: number
  metadata?: Record<string, any>
  createdAt: Date
}

export interface AIDetectionResult {
  score: number
  isAiGenerated: boolean
  confidence: number
  details?: {
    sentences?: Array<{
      text: string
      score: number
    }>
  }
}

export interface HumanizationResult {
  originalText: string
  humanizedText: string
  processingTime: number
  charactersProcessed: number
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface EssayExportOptions {
  format: 'pdf' | 'docx'
  includeMetadata: boolean
  fontSize?: number
  fontFamily?: string
  margins?: {
    top: number
    bottom: number
    left: number
    right: number
  }
} 