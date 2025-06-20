import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

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

// GET /api/essays/[id] - Get essay by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: essay, error } = await supabase
      .from('essays')
      .select('*')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Essay not found' }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json({ success: true, data: essay })
  } catch (error) {
    console.error('Error fetching essay:', error)
    return NextResponse.json(
      { error: 'Failed to fetch essay' },
      { status: 500 }
    )
  }
}

// PUT /api/essays/[id] - Update essay
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, content, custom_emoji } = body

    if (!content) {
      return NextResponse.json({ 
        error: 'Content is required' 
      }, { status: 400 })
    }

    // Calculate updated word and character counts
    const wordCount = content.split(/\s+/).filter((word: string) => word.length > 0).length
    const characterCount = content.length

    const updateData: any = {
      content,
      word_count: wordCount,
      character_count: characterCount,
      updated_at: new Date().toISOString()
    }

    // Add optional fields if provided
    if (title !== undefined) updateData.title = title
    if (custom_emoji !== undefined) updateData.custom_emoji = custom_emoji

    const { data: essay, error } = await supabase
      .from('essays')
      .update(updateData)
      .eq('id', params.id)
      .eq('user_id', user.id)
      .select()
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Essay not found' }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json({ success: true, data: essay })
  } catch (error) {
    console.error('Error updating essay:', error)
    return NextResponse.json(
      { error: 'Failed to update essay' },
      { status: 500 }
    )
  }
}

// DELETE /api/essays/[id] - Delete essay
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { error } = await supabase
      .from('essays')
      .delete()
      .eq('id', params.id)
      .eq('user_id', user.id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting essay:', error)
    return NextResponse.json(
      { error: 'Failed to delete essay' },
      { status: 500 }
    )
  }
} 