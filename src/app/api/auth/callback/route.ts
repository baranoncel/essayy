import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')
  const errorDescription = requestUrl.searchParams.get('error_description')

  console.log('OAuth callback received:', {
    code: code ? 'present' : 'missing',
    error,
    errorDescription,
    url: requestUrl.toString()
  })

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, errorDescription)
    const redirectUrl = new URL('/', request.url)
    redirectUrl.searchParams.set('error', error)
    if (errorDescription) {
      redirectUrl.searchParams.set('error_description', errorDescription)
    }
    return NextResponse.redirect(redirectUrl)
  }

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )

    try {
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
      
      if (exchangeError) {
        console.error('Token exchange error:', exchangeError)
        const redirectUrl = new URL('/', request.url)
        redirectUrl.searchParams.set('auth_error', 'token_exchange_failed')
        return NextResponse.redirect(redirectUrl)
      }

      console.log('OAuth success:', {
        userId: data.user?.id,
        email: data.user?.email,
        provider: data.user?.app_metadata?.provider
      })

      // Create response with redirect
      const response = NextResponse.redirect(new URL('/app', request.url))
      
      return response

    } catch (error) {
      console.error('OAuth callback error:', error)
      const redirectUrl = new URL('/', request.url)
      redirectUrl.searchParams.set('auth_error', 'callback_failed')
      return NextResponse.redirect(redirectUrl)
    }
  }

  console.log('No code provided, redirecting to home')
  return NextResponse.redirect(new URL('/', request.url))
} 