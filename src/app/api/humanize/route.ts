import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { HumanizationResult } from '@/types'

async function createSupabaseClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

// POST /api/humanize - Humanize AI-generated text
export async function POST(request: NextRequest) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      )
    }

    // Check user's quota
    const hasQuota = await checkHumanizerQuota(user.id, text.length)
    if (!hasQuota) {
      return NextResponse.json(
        { error: 'Humanizer character quota exceeded. Please upgrade your plan.' },
        { status: 403 }
      )
    }

    // Call RapidAPI AI Text Humanizer
    const startTime = Date.now()
    const humanizationResult = await humanizeText(text)
    const processingTime = Date.now() - startTime

    const result: HumanizationResult = {
      originalText: text,
      humanizedText: humanizationResult,
      processingTime,
      charactersProcessed: text.length
    }

    // Log usage
    await logUsage(user.id, 'humanization', text.length)

    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    console.error('Error humanizing text:', error)
    return NextResponse.json(
      { error: 'Failed to humanize text' },
      { status: 500 }
    )
  }
}

async function humanizeText(text: string): Promise<string> {
  const rapidApiKey = process.env.AI_HUMANIZER_KEY
  
  if (!rapidApiKey) {
    throw new Error('AI Humanizer API key not configured')
  }

  const response = await fetch('https://ai-text-humanizer-multilingual-undetectable.p.rapidapi.com/humanize', {
    method: 'POST',
    headers: {
      'x-rapidapi-key': rapidApiKey,
      'x-rapidapi-host': 'ai-text-humanizer-multilingual-undetectable.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: text,
      language: 'en'
    }),
  })

  if (!response.ok) {
    throw new Error(`AI Humanizer API error: ${response.statusText}`)
  }

  const data = await response.json()
  return data.humanized_text || data.result || text // Fallback to original if no result
}

async function checkHumanizerQuota(userId: string, charactersNeeded: number): Promise<boolean> {
  try {
    const supabase = await createSupabaseClient()
    
    // Get user's plan
    const { data: user } = await supabase
      .from('users')
      .select('plan_id')
      .eq('id', userId)
      .single()

    if (!user?.plan_id) {
      return false // No plan
    }

    const { data: plan } = await supabase
      .from('plans')
      .select('humanizer_chars')
      .eq('id', user.plan_id)
      .single()

    if (!plan) {
      return false
    }

    // Check usage this month
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setHours(0, 0, 0, 0)

    const { data: usage } = await supabase
      .from('usage_logs')
      .select('resource_used')
      .eq('user_id', userId)
      .eq('action', 'humanization')
      .gte('created_at', startOfMonth.toISOString())

    const totalUsage = usage?.reduce((sum, log) => sum + log.resource_used, 0) || 0
    
    return (totalUsage + charactersNeeded) <= plan.humanizer_chars
  } catch (error) {
    console.error('Error checking quota:', error)
    return false
  }
}

async function logUsage(userId: string, action: string, resourceUsed: number) {
  try {
    const supabase = await createSupabaseClient()
    await supabase.from('usage_logs').insert({
      user_id: userId,
      action,
      resource_used: resourceUsed,
      created_at: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error logging usage:', error)
  }
} 