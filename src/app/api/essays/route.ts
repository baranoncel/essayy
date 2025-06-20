import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Essay, EssayGenerationRequest } from '@/types'

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

// GET /api/essays - Get user's essays
export async function GET(request: NextRequest) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: essays, error } = await supabase
      .from('essays')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true, data: essays })
  } catch (error) {
    console.error('Error fetching essays:', error)
    return NextResponse.json(
      { error: 'Failed to fetch essays' },
      { status: 500 }
    )
  }
}

// POST /api/essays - Create new essay
export async function POST(request: NextRequest) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: EssayGenerationRequest = await request.json()

    // Generate essay using OpenAI
    const generatedContent = await generateEssayContent(body)

    // Calculate word and character counts
    const wordCount = generatedContent.split(/\s+/).length
    const characterCount = generatedContent.length

    const essayData = {
      user_id: user.id,
      title: `${body.topic.substring(0, 100)}...`,
      content: generatedContent,
      topic: body.topic,
      length: body.length,
      essay_type: body.essayType,
      writing_style: body.writingStyle,
      citation_style: body.citationStyle,
      word_count: wordCount,
      character_count: characterCount,
      is_humanized: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data: essay, error } = await supabase
      .from('essays')
      .insert(essayData)
      .select()
      .single()

    if (error) {
      throw error
    }

    // Log usage
    await logUsage(user.id, 'essay_generation', 1)

    return NextResponse.json({ success: true, data: essay })
  } catch (error) {
    console.error('Error creating essay:', error)
    return NextResponse.json(
      { error: 'Failed to create essay' },
      { status: 500 }
    )
  }
}

async function generateEssayContent(request: EssayGenerationRequest): Promise<string> {
  const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT
  const azureKey = process.env.AZURE_OPENAI_KEY
  const azureDeployment = process.env.AZURE_OPENAI_DEPLOYMENT
  
  if (!azureEndpoint || !azureKey || !azureDeployment) {
    throw new Error('Azure OpenAI configuration not complete. Please set AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY, and AZURE_OPENAI_DEPLOYMENT')
  }

  // Create a sophisticated prompt designed to evade AI detection
  const systemPrompt = `You are a highly skilled human academic writer with years of experience in ${request.writingStyle} writing. You have extensive knowledge of ${request.topic} and write with natural human imperfections, authentic voice, and personal insights.

CRITICAL INSTRUCTIONS TO AVOID AI DETECTION:
1. Write with natural human flow and occasional minor imperfections
2. Use varied sentence structures (mix of short, medium, and long sentences)
3. Include subtle personal observations and authentic insights
4. Vary paragraph lengths naturally
5. Use transitional phrases that feel organic, not formulaic
6. Include subtle tangential thoughts that humans naturally have
7. Write with genuine curiosity and personal perspective
8. Use active voice predominantly but mix in passive voice naturally
9. Include occasional minor grammatical variations that humans make
10. Write with emotional authenticity and personal investment in the topic

HUMAN WRITING CHARACTERISTICS TO EMULATE:
- Natural hesitations and qualifications ("it seems," "perhaps," "one might argue")
- Personal observations and connections
- Subtle biases and perspectives that humans naturally have
- Varied vocabulary without being overly sophisticated
- Natural flow between ideas with organic transitions
- Genuine curiosity and engagement with the topic
- Subtle inconsistencies in tone that make writing feel human`

  const userPrompt = `Write a ${request.length}-word ${request.essayType} essay about "${request.topic}".

ESSAY SPECIFICATIONS:
- Citation style: ${request.citationStyle}
- Writing style: ${request.writingStyle}
- Word count: Approximately ${request.length} words
${request.requirements ? `- Additional requirements: ${request.requirements}` : ''}
${request.sources ? `- Required sources to incorporate: ${request.sources}` : ''}
${request.customStyleSample ? `- Style reference: ${request.customStyleSample}` : ''}

ESSENTIAL REQUIREMENTS FOR HUMAN-LIKE WRITING:
1. Write as if you personally researched and thought deeply about this topic
2. Include your own analytical insights and connections
3. Vary sentence lengths and structures throughout
4. Use natural, conversational academic tone (not robotic or formulaic)
5. Include subtle personal perspective and engagement with the topic
6. Make organic transitions between ideas
7. Use active voice primarily but mix naturally with passive voice
8. Include authentic examples and real-world connections
9. Write with genuine intellectual curiosity
10. Structure ideas with natural human logic flow

AVOID:
- Formulaic AI patterns like "In conclusion" or "It is important to note"
- Overly perfect structure or mechanical transitions
- Repetitive sentence patterns or length
- Generic phrases commonly used by AI
- Robotic or overly formal academic jargon
- Perfect grammar throughout (include natural human variations)

Write the essay with the passion and authenticity of a human scholar who genuinely cares about this topic. Make it engaging, insightful, and naturally imperfect in the way that distinguishes excellent human writing from AI-generated content.`

  // Azure OpenAI endpoint format: https://{resource-name}.openai.azure.com/openai/deployments/{deployment-name}/chat/completions?api-version=2025-01-01-preview
  const azureUrl = `${azureEndpoint}/openai/deployments/${azureDeployment}/chat/completions?api-version=2025-01-01-preview`

  const response = await fetch(azureUrl, {
    method: 'POST',
    headers: {
      'api-key': azureKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: userPrompt
        }
      ],
      max_tokens: Math.min(request.length * 2.5, 8000), // Increased token limit for better essays
      temperature: 0.8, // Increased temperature for more human-like variations
      top_p: 0.95, // Add top_p for more natural language patterns
      frequency_penalty: 0.3, // Reduce repetitive patterns
      presence_penalty: 0.2, // Encourage topic diversity
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Azure OpenAI API error: ${response.statusText} - ${errorText}`)
  }

  const data = await response.json()
  return data.choices[0]?.message?.content || 'Failed to generate essay content'
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