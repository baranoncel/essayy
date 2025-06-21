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
    url: requestUrl.toString(),
    origin: requestUrl.origin,
    host: requestUrl.host
  })

  // Get the correct base URL for redirects
  const getBaseUrl = () => {
    console.log('Environment check:', {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      requestOrigin: requestUrl.origin
    })

    // Check if we have a custom app URL set
    if (process.env.NEXT_PUBLIC_APP_URL) {
      console.log('Using NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL)
      return process.env.NEXT_PUBLIC_APP_URL
    }
    
    // For production, use the Vercel URL or request origin
    if (process.env.NODE_ENV === 'production') {
      // Try to get from Vercel environment variables
      if (process.env.VERCEL_URL) {
        const vercelUrl = `https://${process.env.VERCEL_URL}`
        console.log('Using VERCEL_URL:', vercelUrl)
        return vercelUrl
      }
      // Fallback to request origin but ensure it's not localhost
      const origin = requestUrl.origin
      if (!origin.includes('localhost') && !origin.includes('127.0.0.1')) {
        console.log('Using request origin:', origin)
        return origin
      }
      // Final fallback for production
      console.log('Using final fallback: https://essayy.com')
      return 'https://essayy.com'
    }
    
    // For development, use localhost
    console.log('Using development localhost')
    return 'http://localhost:3000'
  }

  const baseUrl = getBaseUrl()
  console.log('Final baseUrl for redirects:', baseUrl)

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, errorDescription)
    const redirectUrl = new URL('/', baseUrl)
    redirectUrl.searchParams.set('error', error)
    if (errorDescription) {
      redirectUrl.searchParams.set('error_description', errorDescription)
    }
    console.log('Redirecting to error URL:', redirectUrl.toString())
    return NextResponse.redirect(redirectUrl)
  }

  if (code) {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase not configured, redirecting to home')
      const homeUrl = new URL('/', baseUrl)
      console.log('Redirecting to home (no Supabase):', homeUrl.toString())
      return NextResponse.redirect(homeUrl)
    }

    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
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
        const redirectUrl = new URL('/', baseUrl)
        redirectUrl.searchParams.set('auth_error', 'token_exchange_failed')
        console.log('Redirecting to error URL (token exchange):', redirectUrl.toString())
        return NextResponse.redirect(redirectUrl)
      }

      console.log('OAuth success:', {
        userId: data.user?.id,
        email: data.user?.email,
        provider: data.user?.app_metadata?.provider
      })

      // Create response with redirect to app dashboard
      const appUrl = new URL('/app', baseUrl)
      console.log('Redirecting to app dashboard:', appUrl.toString())
      const response = NextResponse.redirect(appUrl)
      
      return response

    } catch (error) {
      console.error('OAuth callback error:', error)
      const redirectUrl = new URL('/', baseUrl)
      redirectUrl.searchParams.set('auth_error', 'callback_failed')
      console.log('Redirecting to error URL (callback failed):', redirectUrl.toString())
      return NextResponse.redirect(redirectUrl)
    }
  }

  console.log('No code provided, redirecting to home')
  const homeUrl = new URL('/', baseUrl)
  console.log('Final redirect URL:', homeUrl.toString())
  return NextResponse.redirect(homeUrl)
} 