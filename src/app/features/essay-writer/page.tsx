import Link from 'next/link'
import { ArrowRight, PenTool, CheckCircle, Zap, BookOpen, Target, Clock, Star, Users, Shield } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Essay Writer | Free Essay Generator Tool - Essayy',
  description: 'Advanced AI essay writer powered by GPT-4. Generate high-quality essays, research papers, and academic content instantly. Supports all essay types and citation styles.',
  keywords: 'AI essay writer, essay generator, GPT-4 essay writer, academic writing AI, automatic essay generator, AI writing assistant, essay writing tool',
  openGraph: {
    title: 'AI Essay Writer | Free Essay Generator Tool - Essayy',
    description: 'Advanced AI essay writer powered by GPT-4. Generate high-quality essays, research papers, and academic content instantly.',
    url: 'https://essayy.com/features/essay-writer',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/features/essay-writer',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Essayy AI Essay Writer',
  description: 'Advanced AI essay writer powered by GPT-4 for generating high-quality academic content',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '15420',
  },
}

export default function EssayWriterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <PenTool className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Essay Writer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Powered by GPT-4
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate high-quality essays, research papers, and academic content instantly with our advanced AI essay writer. 
              Supports all essay types, citation styles, and academic levels - from high school to PhD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                  Start Writing Essays Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
              <Link href="/features/ai-humanizer" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Try AI Humanizer
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                GPT-4 Powered
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                All Essay Types
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Plagiarism-Free
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Instant Generation
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100K+</div>
                <div className="text-gray-600">Essays Generated</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">&lt;30s</div>
                <div className="text-gray-600">Average Time</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600">User Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Essay Writing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create outstanding academic content with artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Essay Generation</h3>
              <p className="text-gray-600">
                Generate complete essays in under 30 seconds. Our GPT-4 powered AI analyzes your topic 
                and creates well-structured, original content with proper introduction, body, and conclusion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All Essay Types Supported</h3>
              <p className="text-gray-600">
                From argumentative and persuasive to analytical and narrative essays. Our AI understands 
                the unique requirements of each essay type and adapts its writing style accordingly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Requirements</h3>
              <p className="text-gray-600">
                Specify word count, academic level, citation style (APA, MLA, Chicago), and special 
                requirements. Our AI tailors the content to meet your exact specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plagiarism-Free Content</h3>
              <p className="text-gray-600">
                Every essay is generated from scratch using advanced AI algorithms. Built-in plagiarism 
                detection ensures 100% original content that passes all academic integrity checks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Quality</h3>
              <p className="text-gray-600">
                Professional-grade writing that meets academic standards. Proper grammar, vocabulary, 
                and structure suitable for high school, college, and graduate-level assignments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <PenTool className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Editing & Export</h3>
              <p className="text-gray-600">
                Built-in editor for customization and refinement. Export your essays in multiple formats 
                including PDF, Word, and plain text for easy submission.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Our AI Essay Writer Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple 4-step process to generate professional essays in minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Topic</h3>
                <p className="text-gray-600">
                  Input your essay topic, thesis statement, or research question. Be as specific as possible for best results.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Parameters</h3>
                <p className="text-gray-600">
                  Choose essay type, word count, academic level, citation style, and any special requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Generates</h3>
                <p className="text-gray-600">
                  Our GPT-4 AI analyzes your requirements and generates a complete, well-structured essay in seconds.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Edit & Export</h3>
                <p className="text-gray-600">
                  Review, edit, and customize your essay. Export in your preferred format and submit with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essay Types Supported */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Supported Essay Types & Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI essay writer handles all academic writing formats and styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Academic Essays</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Argumentative Essays</li>
                <li>• Persuasive Essays</li>
                <li>• Analytical Essays</li>
                <li>• Compare & Contrast</li>
                <li>• Cause & Effect</li>
                <li>• Expository Essays</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Creative Writing</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Narrative Essays</li>
                <li>• Descriptive Essays</li>
                <li>• Personal Statements</li>
                <li>• Reflective Essays</li>
                <li>• Creative Non-fiction</li>
                <li>• Memoir Writing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Research Papers</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Literature Reviews</li>
                <li>• Case Studies</li>
                <li>• Research Proposals</li>
                <li>• Thesis Papers</li>
                <li>• Dissertation Chapters</li>
                <li>• Scientific Reports</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Application Essays</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• College Applications</li>
                <li>• Scholarship Essays</li>
                <li>• Graduate School</li>
                <li>• MBA Applications</li>
                <li>• Medical School</li>
                <li>• Law School</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Citation Styles</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• APA Style</li>
                <li>• MLA Format</li>
                <li>• Chicago Style</li>
                <li>• Harvard Referencing</li>
                <li>• IEEE Format</li>
                <li>• Vancouver Style</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">Academic Levels</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• High School</li>
                <li>• Undergraduate</li>
                <li>• Graduate</li>
                <li>• Master's Level</li>
                <li>• Doctoral (PhD)</li>
                <li>• Professional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Essay Writer?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced features that make essay writing faster, easier, and more effective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Save Time & Effort</h3>
                <p className="text-gray-600 mb-4">
                  Generate complete essays in minutes instead of hours. Perfect for tight deadlines, 
                  writer's block, or when you need inspiration to get started.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 10x faster than manual writing</li>
                  <li>• Overcome writer's block instantly</li>
                  <li>• Meet tight deadlines easily</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Improve Your Grades</h3>
                <p className="text-gray-600 mb-4">
                  Professional-quality writing that meets academic standards. Learn from AI-generated 
                  examples to improve your own writing skills.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Academic-grade quality</li>
                  <li>• Proper structure & flow</li>
                  <li>• Learn writing techniques</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Research Assistance</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered research helps you find relevant points, arguments, and evidence for your topic. 
                  Get comprehensive coverage of complex subjects.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Comprehensive topic coverage</li>
                  <li>• Multiple perspectives</li>
                  <li>• Evidence-based arguments</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 mb-4">
                  Access our AI essay writer anytime, anywhere. No scheduling, no waiting - 
                  get help exactly when you need it most.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Available 24/7/365</li>
                  <li>• Instant response time</li>
                  <li>• No appointment needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Essay Writing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join over 100,000 students who use our AI essay writer to create outstanding academic content. 
              Start generating professional essays in seconds.
            </p>
            <AuthDialog>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                Start Writing Essays Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <PenTool className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Essayy</span>
                </div>
                <p className="text-gray-400">
                  Advanced AI essay writer powered by GPT-4 for students worldwide.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Essay Types</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/use-cases/argumentative-essays" className="hover:text-white transition-colors">Argumentative</Link></li>
                  <li><Link href="/use-cases/persuasive-essays" className="hover:text-white transition-colors">Persuasive</Link></li>
                  <li><Link href="/use-cases/analytical-essays" className="hover:text-white transition-colors">Analytical</Link></li>
                  <li><Link href="/use-cases/research-papers" className="hover:text-white transition-colors">Research Papers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/features/ai-humanizer" className="hover:text-white transition-colors">AI Humanizer</Link></li>
                  <li><Link href="/features/plagiarism-checker" className="hover:text-white transition-colors">Plagiarism Checker</Link></li>
                  <li><Link href="/features/citation-generator" className="hover:text-white transition-colors">Citation Generator</Link></li>
                  <li><Link href="/features/grammar-checker" className="hover:text-white transition-colors">Grammar Checker</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Essayy. All rights reserved. AI Essay Writer & Generator Tool.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 