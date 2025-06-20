import Link from 'next/link'
import { ArrowRight, Zap, Shield, CheckCircle, Brain, Eye, Target } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Humanizer | Make AI Content Undetectable & Human-Like - Essayy',
  description: 'Transform AI-generated content into natural, human-like writing that bypasses AI detection tools. Free AI humanizer that maintains quality while making content undetectable.',
  keywords: 'AI humanizer, AI content humanizer, bypass AI detection, undetectable AI content, AI text humanizer, GPT humanizer, make AI content human, AI detector bypass, humanize AI text, AI writing humanizer',
  openGraph: {
    title: 'AI Humanizer | Make AI Content Undetectable & Human-Like - Essayy',
    description: 'Transform AI-generated content into natural, human-like writing that bypasses AI detection tools. Free AI humanizer for students and professionals.',
    url: 'https://essayy.com/features/ai-humanizer',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-ai-humanizer.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Humanizer - Make AI Content Human-Like',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Humanizer | Make AI Content Undetectable & Human-Like',
    description: 'Transform AI-generated content into natural, human-like writing that bypasses AI detection tools.',
    images: ['/og-ai-humanizer.jpg'],
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
  alternates: {
    canonical: 'https://essayy.com/features/ai-humanizer',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Essayy AI Humanizer',
  description: 'Transform AI-generated content into natural, human-like writing that bypasses AI detection tools',
  url: 'https://essayy.com/features/ai-humanizer',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Bypass AI Detection Tools',
    'Maintain Content Quality',
    'Multiple Humanization Modes',
    'Instant Processing',
    'Free to Use'
  ],
  creator: {
    '@type': 'Organization',
    name: 'Essayy',
    url: 'https://essayy.com',
  },
}

export default function AIHumanizerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-8 mx-auto">
              <Zap className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Humanizer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform AI-generated content into natural, human-like writing that bypasses AI detection tools while maintaining quality and coherence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                  Try AI Humanizer Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Humanizer?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology to make your AI content undetectable and naturally human
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bypass AI Detection</h3>
              <p className="text-gray-600">
                Successfully bypass popular AI detection tools like GPTZero, Turnitin, and others with our advanced humanization technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintain Quality</h3>
              <p className="text-gray-600">
                Preserve the original meaning, structure, and quality of your content while making it sound naturally human-written.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Modes</h3>
              <p className="text-gray-600">
                Choose from Conservative, Balanced, Aggressive, or Creative modes to match your specific needs and requirements.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your AI content in 3 simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Paste Your Content</h3>
                <p className="text-gray-600">
                  Simply paste your AI-generated text into our humanizer tool.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Mode</h3>
                <p className="text-gray-600">
                  Select the humanization mode that best fits your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Human Text</h3>
                <p className="text-gray-600">
                  Receive naturally humanized content that bypasses AI detection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Humanizing Your Content Today</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Make your AI-generated content undetectable and naturally human with our advanced humanizer.
            </p>
            <AuthDialog>
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                Try AI Humanizer Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
} 