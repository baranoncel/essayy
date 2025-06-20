import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { LoadingProvider } from '@/components/ui/loading-context'
import { ToastProvider } from '@/components/ui/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Essayy - AI-Powered Essay Writing Platform | Free Essay Generator 2025',
    template: '%s | Essayy'
  },
  description: 'Generate, humanize, and detect essays with advanced AI technology. Free essay writer, plagiarism checker, citation generator, and AI humanizer. Perfect for students and educators in 2025.',
  keywords: ['essay writing', 'AI essay generator', 'academic writing', 'AI humanizer', 'content detector', 'plagiarism checker', 'citation generator', 'argumentative essay', 'persuasive essay', 'research paper', 'free essay writer', 'GPT essay writer', 'AI writing assistant', 'academic integrity', 'student essays', 'college papers'],
  authors: [{ name: 'Essayy Team', url: 'https://essayy.vercel.app' }],
  creator: 'Essayy',
  publisher: 'Essayy',
  metadataBase: new URL('https://essayy.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://essayy.vercel.app',
    title: 'Essayy - AI-Powered Essay Writing Platform | Free Essay Generator 2025',
    description: 'Generate, humanize, and detect essays with advanced AI technology. Free essay writer, plagiarism checker, and citation generator.',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Essayy - AI Essay Writing Platform',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essayy - AI-Powered Essay Writing Platform',
    description: 'Generate, humanize, and detect essays with advanced AI technology. Free essay writer and citation generator.',
    creator: '@essayy_ai',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://essayy.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <LoadingProvider>
          <ToastProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ToastProvider>
        </LoadingProvider>
      </body>
    </html>
  )
} 