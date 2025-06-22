import Link from 'next/link'
import { ArrowRight, PenTool, Shield, Zap, Star, Users, Clock, CheckCircle, BookOpen, GraduationCap, FileText, Search, Lightbulb, Target } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { AuthErrorHandler } from '@/components/auth/AuthErrorHandler'
import { Footer } from '@/components/navigation/Footer'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { EssayTopicInput } from '@/components/EssayTopicInput'
import LandingFAQ from '@/components/LandingFAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Essay Writer & Generator | Free Essay Writing Tool - Essayy.com',
  description: 'Generate high-quality essays instantly with our advanced AI essay writer. Free essay generator, AI humanizer, plagiarism detector, and citation generator. Perfect for students, researchers, and academics in 2025.',
  keywords: 'AI essay writer, essay generator, free essay writing tool, AI humanizer, plagiarism detector, academic writing, student essays, research papers, argumentative essay, persuasive essay, APA citation, MLA citation, Chicago citation, GPT essay writer, automated essay writing, AI writing assistant, essay help, academic integrity, college essays, university papers',
  openGraph: {
    title: 'AI Essay Writer & Generator | Free Essay Writing Tool - Essayy.com',
    description: 'Generate high-quality essays instantly with our AI essay writer. Free essay generator, AI humanizer, and plagiarism detector.',
    url: 'https://essayy.com',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Essayy - AI Essay Writer & Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Essay Writer & Generator | Free Essay Writing Tool - Essayy.com',
    description: 'Generate high-quality essays instantly with our AI essay writer. Free essay generator, AI humanizer, and plagiarism detector.',
    images: ['/og-image.jpg'],
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
    canonical: 'https://essayy.com',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Essayy',
    description: 'AI-powered essay writing platform for students and educators',
    url: 'https://essayy.com',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2547',
    },
    creator: {
      '@type': 'Organization',
      name: 'Essayy',
      url: 'https://essayy.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the AI essay writer really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our basic AI essay writer is completely free to use. You can generate essays, use our AI humanizer, and access plagiarism detection without any cost. Premium features are available for advanced functionality.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the AI essay generator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our AI uses advanced GPT-4 technology to analyze your topic and requirements, then generates well-structured, original essays with proper introduction, body paragraphs, and conclusion. It supports all major essay types and citation styles.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is the content plagiarism-free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our AI generates original content from scratch for every request. We also include built-in plagiarism detection to ensure 100% unique content that passes all academic integrity checks.'
        }
      },
      {
        '@type': 'Question',
        name: 'What citation styles are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support all major citation styles including APA, MLA, Chicago, Harvard, and more. Our citation generator automatically formats references according to the latest style guidelines.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use this for academic assignments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our tool is designed to assist with learning and provide guidance. Always check your institution\'s policies on AI assistance and use our platform ethically as a learning aid while developing your own critical thinking skills.'
        }
      }
    ]
  }
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <AuthErrorHandler />
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Free AI Essay Writer &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600">
                Generator Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate high-quality essays, research papers, and academic content instantly with our advanced AI essay writer. 
              Includes AI humanizer, plagiarism detection, and citation generator - all free to use.
            </p>
            {/* Essay Topic Input */}
            <div className="mb-12">
              <EssayTopicInput />
            </div>

            {/* Alternative Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium text-base transition-colors inline-flex items-center justify-center">
                  Try AI Detector Free
                </button>
              </AuthDialog>
              <Link href="/features/ai-humanizer" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium text-base transition-colors inline-flex items-center justify-center">
                Try AI Humanizer Free
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                100% Free to Use
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No Registration Required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Plagiarism-Free Content
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Multiple Citation Styles
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-gray-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <PenTool className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">250,000+</div>
              <div className="text-gray-600">Essays Generated</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt;30s</div>
              <div className="text-gray-600">Average Generation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Our AI Essay Writer Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Generate professional essays in 3 simple steps with our advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-6 mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-gray-700">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Topic</h3>
                <p className="text-gray-600">
                  Simply enter your essay topic, select the type (argumentative, persuasive, analytical, etc.), 
                  and specify your requirements like word count and citation style.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Generates Content</h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes your requirements and generates a well-structured, 
                  original essay with proper introduction, body paragraphs, and conclusion.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Edit & Download</h3>
                <p className="text-gray-600">
                  Review, edit, and customize your essay. Use our AI humanizer to make it sound more natural, 
                  then download in your preferred format (PDF, Word, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete AI Writing Suite for Students
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for academic success - from essay generation to plagiarism detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-6 shadow-md">
                <PenTool className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Essay Generator</h3>
              <p className="text-gray-600 mb-6">
                Generate high-quality essays for any topic with GPT-4 technology. Supports all essay types 
                including argumentative, persuasive, analytical, and narrative essays.
              </p>
              <Link href="/features/essay-writer" className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 font-medium transition-all duration-300">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Humanizer</h3>
              <p className="text-gray-600 mb-6">
                Transform AI-generated content into natural, human-like writing that bypasses 
                AI detection tools while maintaining quality and coherence.
              </p>
              <Link href="/features/ai-humanizer" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Content Detector</h3>
              <p className="text-gray-600 mb-6">
                Detect AI-generated content with 99% accuracy. Essential tool for educators 
                and students to ensure academic integrity and originality.
              </p>
              <Link href="/features/ai-content-detector" className="text-green-600 hover:text-green-700 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Search className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plagiarism Checker</h3>
              <p className="text-gray-600 mb-6">
                Ensure your content is 100% original with our advanced plagiarism detection 
                system that scans billions of web pages and academic papers.
              </p>
              <Link href="/features/plagiarism-checker" className="text-red-600 hover:text-red-700 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Citation Generator</h3>
              <p className="text-gray-600 mb-6">
                Generate perfect citations in APA, MLA, Chicago, and Harvard styles. 
                Automatically format your bibliography and in-text citations.
              </p>
              <Link href="/features/citation-generator" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grammar Checker</h3>
              <p className="text-gray-600 mb-6">
                Fix grammar, spelling, and punctuation errors instantly. Improve your writing 
                style with advanced suggestions and readability analysis.
              </p>
              <Link href="/features/grammar-checker" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        {/* Essay Types Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Generate Any Type of Essay
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI essay writer supports all academic essay types and formats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/use-cases/argumentative-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 shadow-md">
                  <Target className="h-5 w-5 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">Argumentative Essays</h3>
                <p className="text-sm text-gray-600">Present and defend your position with evidence</p>
              </Link>

              <Link href="/use-cases/persuasive-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mb-4">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Persuasive Essays</h3>
                <p className="text-sm text-gray-600">Convince readers to adopt your viewpoint</p>
              </Link>

              <Link href="/use-cases/analytical-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
                  <Search className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Analytical Essays</h3>
                <p className="text-sm text-gray-600">Break down and examine complex topics</p>
              </Link>

              <Link href="/use-cases/narrative-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg mb-4">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">Narrative Essays</h3>
                <p className="text-sm text-gray-600">Tell compelling stories with purpose</p>
              </Link>

              <Link href="/use-cases/descriptive-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg mb-4">
                  <FileText className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Descriptive Essays</h3>
                <p className="text-sm text-gray-600">Paint vivid pictures with words</p>
              </Link>

              <Link href="/use-cases/compare-contrast" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg mb-4">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Compare & Contrast</h3>
                <p className="text-sm text-gray-600">Analyze similarities and differences</p>
              </Link>

              <Link href="/use-cases/research-papers" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-lg mb-4">
                  <GraduationCap className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">Research Papers</h3>
                <p className="text-sm text-gray-600">In-depth academic research and analysis</p>
              </Link>

              <Link href="/use-cases/college-essays" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg mb-4">
                  <Star className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">College Essays</h3>
                <p className="text-sm text-gray-600">Stand out in your applications</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Writing Better Essays Today</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join over 50,000 students who trust Essayy for their academic writing needs. 
              Generate your first essay in under 30 seconds - completely free.
            </p>
            <AuthDialog>
              <button className="bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                Generate Your First Essay Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </section>

        {/* FAQ Section */}
        <LandingFAQ />

        <Footer />
      </div>
    </>
  )
} 