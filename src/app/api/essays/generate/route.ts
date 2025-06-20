import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { EssayGenerationRequest } from '@/types'

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

// POST /api/essays/generate - Generate essay content
export async function POST(request: NextRequest) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: Omit<EssayGenerationRequest, 'userId'> = await request.json()

    // Validate required fields
    if (!body.topic || !body.essayType || !body.writingStyle || !body.citationStyle) {
      return NextResponse.json({ 
        error: 'Missing required fields: topic, essayType, writingStyle, and citationStyle are required' 
      }, { status: 400 })
    }

    // Generate essay using Azure OpenAI with anti-detection prompts
    const generatedContent = await generateEssayContent({
      ...body,
      userId: user.id
    })

    // Calculate word and character counts
    const wordCount = generatedContent.split(/\s+/).filter(word => word.length > 0).length
    const characterCount = generatedContent.length

    // Save the essay to Supabase
    const essayData = {
      user_id: user.id,
      title: body.topic.length > 100 ? body.topic.substring(0, 100) + '...' : body.topic,
      content: generatedContent,
      topic: body.topic,
      requirements: body.requirements || null,
      sources: body.sources || null,
      length: body.length,
      essay_type: body.essayType,
      writing_style: body.writingStyle,
      citation_style: body.citationStyle,
      word_count: wordCount,
      character_count: characterCount,
      is_humanized: false,
      custom_emoji: null, // Start with auto-generated emoji
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data: essay, error: saveError } = await supabase
      .from('essays')
      .insert(essayData)
      .select()
      .single()

    if (saveError) {
      console.error('Error saving essay to database:', saveError)
      // Still return the generated content even if saving fails
      return NextResponse.json({ 
        success: true, 
        data: {
          content: generatedContent,
          wordCount,
          characterCount,
          topic: body.topic,
          essayType: body.essayType,
          writingStyle: body.writingStyle,
          citationStyle: body.citationStyle,
          saveError: 'Essay generated but not saved to database'
        }
      })
    }

    // Return the generated content with essay ID for navigation
    return NextResponse.json({ 
      success: true, 
      data: {
        content: generatedContent,
        wordCount,
        characterCount,
        topic: body.topic,
        essayType: body.essayType,
        writingStyle: body.writingStyle,
        citationStyle: body.citationStyle,
        essayId: essay.id,
        saved: true
      }
    })

  } catch (error) {
    console.error('Error generating essay:', error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Azure OpenAI configuration')) {
        return NextResponse.json(
          { error: 'Essay generation service is not configured properly. Please contact support.' },
          { status: 500 }
        )
      }
      if (error.message.includes('Azure OpenAI API error')) {
        return NextResponse.json(
          { error: 'Essay generation service is temporarily unavailable. Please try again later.' },
          { status: 503 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to generate essay. Please try again.' },
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

  // Advanced anti-detection system prompt
  const systemPrompt = `You are writing this essay as a thoughtful student who has genuinely researched and engaged with the topic. Write in your natural voice, the way you would explain ideas to a friend who's intelligent but doesn't know the subject well.

Let your personality show through your writing. Include moments of genuine curiosity, occasional uncertainty where it's natural, and authentic insights that feel like they come from real engagement with the material. Mix up your sentence structures naturally. Some thoughts need short sentences. Others require longer, more winding explanations that capture the complexity of what you're thinking.

Write conversationally but intelligently. Use the language that feels right for each idea rather than trying to sound overly academic. Include real examples and connections that make sense to you. Show your thought process as you work through ideas.

Avoid formulaic essay language and mechanical transitions. Instead, let one thought lead naturally to the next, the way it happens when you're really thinking through a problem. Be confident where you feel sure about something, but also show the natural hesitation that comes when dealing with complex topics.

CRITICAL PUNCTUATION RULES:
- NEVER use em dashes (—) or en dashes (–) anywhere in your writing
- Use regular hyphens (-) only when absolutely necessary for compound words
- Use commas, periods, and semicolons for natural pauses instead of dashes
- Avoid ellipses (...) as they look artificial
- Use parentheses sparingly and naturally
- Write with normal punctuation that a real student would use

Your goal is to sound like a real person who has spent time thinking about this topic and wants to share what they've learned in an engaging, authentic way.`

  const userPrompt = `Write a well-structured ${request.length} word ${request.essayType} essay about "${request.topic}" using ${request.writingStyle} style and ${request.citationStyle} format.${request.requirements ? ` Keep in mind: ${request.requirements}` : ''}${request.sources ? ` Reference these sources: ${request.sources}` : ''}

Return your response as a JSON object with this exact structure:
{
  "title": "Engaging essay title",
  "introduction": "Complete introduction paragraph that hooks the reader and presents your thesis",
  "body_paragraphs": [
    {
      "heading": "Section heading (optional)",
      "content": "Full paragraph content with detailed explanation and examples"
    },
    {
      "heading": "Another section heading (optional)", 
      "content": "Another full paragraph with supporting arguments and evidence"
    }
  ],
  "conclusion": "Complete conclusion paragraph that ties everything together",
  "word_count": 1000
}

Write like a student who has genuinely researched this topic. Let your personality show through authentic insights and natural language. Use varied sentence structures and include real examples. Show genuine engagement with the material through thoughtful analysis and occasional uncertainty where complex topics warrant it.

IMPORTANT: Use natural punctuation only. Never use em dashes (—), en dashes (–), or ellipses (...). Use commas, periods, and regular punctuation that sounds natural and human. Avoid any punctuation patterns that might flag as AI-generated.

Create ${Math.ceil(request.length / 250)} to ${Math.ceil(request.length / 200)} body paragraphs for proper essay structure.`

  // Azure OpenAI endpoint
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
      max_tokens: Math.min(request.length * 3, 12000), // Generous token limit
      temperature: 0.9, // Higher temperature for more human-like variation
      top_p: 0.88, // More focused natural language patterns
      frequency_penalty: 0.6, // Strongly reduce repetitive patterns
      presence_penalty: 0.4, // Encourage more topic diversity
      response_format: { type: "json_object" }, // Enable JSON mode
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Azure OpenAI Error:', errorText)
    throw new Error(`Azure OpenAI API error: ${response.statusText} - ${errorText}`)
  }

  const data = await response.json()
  let content = data.choices[0]?.message?.content
  
  if (!content) {
    throw new Error('No content generated from Azure OpenAI')
  }
  
  // Parse the JSON response and format as a beautiful essay
  try {
    console.log('Raw content from Azure OpenAI:', content.substring(0, 200) + '...')
    
    // Clean the content before parsing
    let cleanContent = content.trim()
    
    // Try to find JSON object boundaries if there's extra text
    const jsonStart = cleanContent.indexOf('{')
    const jsonEnd = cleanContent.lastIndexOf('}')
    
    if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
      cleanContent = cleanContent.substring(jsonStart, jsonEnd + 1)
    }
    
    console.log('Cleaned content for parsing:', cleanContent.substring(0, 200) + '...')
    
    // Try parsing with multiple strategies
    let essayData;
    try {
      essayData = JSON.parse(cleanContent);
    } catch (firstError) {
      console.log('First JSON parse failed, trying to clean quotes:', firstError instanceof Error ? firstError.message : String(firstError));
      
      // Try to fix common JSON issues
      let fixedContent = cleanContent
        .replace(/\\\"/g, '"')  // Fix escaped quotes
        .replace(/\"\"/g, '"')  // Fix double quotes
        .replace(/\n/g, ' ')    // Replace newlines with spaces
        .replace(/\r/g, ' ')    // Replace carriage returns
        .replace(/\t/g, ' ')    // Replace tabs
        .replace(/\s+/g, ' ');  // Replace multiple spaces with single space
      
      console.log('Attempting to parse cleaned content...');
      essayData = JSON.parse(fixedContent);
    }
    console.log('Parsed essay data successfully:', essayData.title)
    console.log('Essay data keys:', Object.keys(essayData))
    
    const formattedEssay = formatEssayFromJSON(essayData)
    console.log('Formatted essay length:', formattedEssay.length)
    console.log('Formatted essay preview:', formattedEssay.substring(0, 200) + '...')
    
    return formattedEssay
  } catch (error) {
    // Fallback: if JSON parsing fails, return content as-is
    console.error('Failed to parse JSON response:', error)
    console.error('Error details:', error instanceof Error ? error.message : String(error))
    console.log('Content that failed to parse (first 500 chars):', content.substring(0, 500))
    console.log('Content length:', content.length)
    
    // As a last resort, if the content looks like our expected JSON structure, 
    // try to format it anyway
    if (content.includes('"title"') && content.includes('"introduction"') && content.includes('"body_paragraphs"')) {
      console.log('Content appears to be JSON, attempting manual format...')
      
      // Try to create a basic HTML structure from the visible content
      try {
        // Extract title (basic regex)
        const titleMatch = content.match(/"title":\s*"([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : 'Generated Essay';
        
        // Return a formatted version with the raw JSON for debugging
        return `<h1>${title}</h1>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: monospace; white-space: pre-wrap; font-size: 14px;">
          <strong>DEBUG: Raw JSON Response (formatting failed)</strong>
          ${content}
        </div>
        <p><em>The essay was generated but couldn't be formatted properly. Please check the console logs for debugging information.</em></p>`;
      } catch (e) {
        return `<div style="white-space: pre-wrap; font-family: monospace;">${content}</div>`;
      }
    }
    
    return content
  }
}

interface EssayStructure {
  title: string
  introduction: string
  body_paragraphs: Array<{
    heading?: string
    content: string
  }>
  conclusion: string
  word_count?: number
}

function formatEssayFromJSON(essayData: any): string {
  console.log('Formatting essay data:', Object.keys(essayData))
  
  const title = essayData.title
  const introduction = essayData.introduction
  const bodyParagraphs = essayData.body_paragraphs || essayData.bodyParagraphs || essayData.body || []
  const conclusion = essayData.conclusion
  
  let formattedEssay = ''
  
  // Add title as H1
  if (title) {
    formattedEssay += `<h1>${title}</h1>\n\n`
    console.log('Added title:', title)
  }
  
  // Add introduction
  if (introduction) {
    formattedEssay += `<p>${introduction}</p>\n\n`
    console.log('Added introduction (length):', introduction.length)
  }
  
  // Add body paragraphs
  if (bodyParagraphs && Array.isArray(bodyParagraphs)) {
    console.log('Processing body paragraphs:', bodyParagraphs.length)
    bodyParagraphs.forEach((paragraph, index) => {
      // Add heading as H2 if provided
      if (paragraph.heading) {
        formattedEssay += `<h2>${paragraph.heading}</h2>\n\n`
        console.log(`Added heading ${index + 1}:`, paragraph.heading)
      }
      
      // Add paragraph content
      if (paragraph.content) {
        formattedEssay += `<p>${paragraph.content}</p>\n\n`
        console.log(`Added paragraph ${index + 1} content (length):`, paragraph.content.length)
      }
    })
  } else {
    console.log('No valid body paragraphs found')
  }
  
  // Add conclusion
  if (conclusion) {
    formattedEssay += `<p>${conclusion}</p>\n\n`
    console.log('Added conclusion (length):', conclusion.length)
  }
  
  console.log('Final formatted essay length:', formattedEssay.length)
  return formattedEssay.trim()
} 