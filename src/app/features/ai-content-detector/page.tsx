import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Eye, Target, Zap, Brain } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Content Detector | 99% Accurate AI Text Detection Tool - Essayy',
  description: 'Detect AI-generated content with 99% accuracy. Free AI detector for educators and students to ensure academic integrity. Identify GPT, ChatGPT, and other AI-written text instantly.',
  keywords: 'AI content detector, AI text detector, detect AI writing, AI plagiarism checker, ChatGPT detector, GPT detector, AI-generated content detection, academic integrity, AI detection tool, artificial intelligence detector',
  openGraph: {
    title: 'AI Content Detector | 99% Accurate AI Text Detection Tool - Essayy',
    description: 'Detect AI-generated content with 99% accuracy. Free AI detector for educators and students to ensure academic integrity.',
    url: 'https://essayy.com/features/ai-content-detector',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-ai-detector.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Content Detector - Detect AI Writing',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Detector | 99% Accurate AI Text Detection Tool',
    description: 'Detect AI-generated content with 99% accuracy. Free AI detector for educators and students.',
    images: ['/og-ai-detector.jpg'],
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
    canonical: 'https://essayy.com/features/ai-content-detector',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Essayy AI Content Detector',
  description: 'Detect AI-generated content with 99% accuracy using advanced machine learning technology',
  url: 'https://essayy.com/features/ai-content-detector',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    '99% Detection Accuracy',
    'Instant Analysis',
    'Detailed Reports',
    'Academic Integrity Focus',
    'Free to Use'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1247',
  },
  creator: {
    '@type': 'Organization',
    name: 'Essayy',
    url: 'https://essayy.com',
  },
}

export default function AIContentDetectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8 mx-auto">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Detector</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Detect AI-generated content with 99% accuracy. Essential tool for educators and students to ensure academic integrity and originality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                  Try AI Detector Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our AI Content Detector?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI detection technology for academic integrity and content verification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">99% Accuracy</h3>
              <p className="text-gray-600">
                Our advanced AI detection model provides industry-leading accuracy in identifying AI-generated content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Analysis</h3>
              <p className="text-gray-600">
                Get comprehensive reports with confidence scores, sentence-level analysis, and detailed explanations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600">
                Get immediate detection results with real-time analysis of your content for AI-generated text.
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
                Detect AI content in 3 simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Paste Your Text</h3>
                <p className="text-gray-600">
                  Simply paste the content you want to analyze into our detector.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI model analyzes the text for patterns and characteristics.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Results</h3>
                <p className="text-gray-600">
                  Receive detailed analysis with confidence scores and explanations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tool for various educational and professional use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educators & Teachers</h3>
              <p className="text-gray-600 mb-4">
                Verify student submissions and maintain academic integrity in your classroom.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Grade assignments confidently</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Detect plagiarism attempts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Maintain academic standards</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Students & Researchers</h3>
              <p className="text-gray-600 mb-4">
                Ensure your work meets originality requirements and academic standards.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Verify content originality</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Check research papers</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Avoid unintentional issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Detecting AI Content Today</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Ensure academic integrity and content authenticity with our advanced AI detection technology.
            </p>
            <AuthDialog>
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                Try AI Detector Free
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