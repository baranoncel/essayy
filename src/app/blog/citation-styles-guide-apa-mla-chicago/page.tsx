import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, BookOpen, Target } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Citation Styles Guide 2025: APA vs MLA vs Chicago - Complete Comparison | Essayy',
  description: 'Master APA, MLA, and Chicago citation styles with our comprehensive 2025 guide. Examples, templates, and expert tips for perfect academic citations.',
  keywords: 'APA citation, MLA citation, Chicago citation, citation styles, academic writing, bibliography, references, citation guide, formatting styles',
  openGraph: {
    title: 'Citation Styles Guide 2025: APA vs MLA vs Chicago - Complete Comparison',
    description: 'Master APA, MLA, and Chicago citation styles with our comprehensive guide. Examples and templates included.',
    url: 'https://essayy.com/blog/citation-styles-guide-apa-mla-chicago',
    siteName: 'Essayy',
    images: [{ url: '/blog-citation-styles.svg', width: 400, height: 300, alt: 'Citation Styles Guide' }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-06-20T00:00:00.000Z',
  },
  alternates: {
    canonical: 'https://essayy.com/blog/citation-styles-guide-apa-mla-chicago',
  },
}

export default function CitationStylesGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <GlobalNavigation />
      
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </nav>

          <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 p-8 flex justify-center">
            <Image src="/blog-citation-styles.svg" alt="Citation Styles Guide" width={400} height={300} className="rounded-lg" />
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Prof. Academic Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Citation Styles Guide 2025: APA vs MLA vs Chicago
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Master the three most important citation styles with our comprehensive comparison guide. 
              Learn when to use each style, formatting rules, and see practical examples.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Quick Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                <h3 className="font-bold text-green-800 mb-2">APA Style</h3>
                <p className="text-sm text-green-700 mb-2">American Psychological Association</p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Psychology, Education, Sciences</li>
                  <li>• Author-date citations</li>
                  <li>• References page</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-red-200">
                <h3 className="font-bold text-red-800 mb-2">MLA Style</h3>
                <p className="text-sm text-red-700 mb-2">Modern Language Association</p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• Literature, Arts, Humanities</li>
                  <li>• Author-page citations</li>
                  <li>• Works Cited page</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">Chicago Style</h3>
                <p className="text-sm text-blue-700 mb-2">Chicago Manual of Style</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• History, Literature, Arts</li>
                  <li>• Footnotes or author-date</li>
                  <li>• Bibliography</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Each Style</h2>
            
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-900 mb-3">APA Style (American Psychological Association)</h3>
                <p className="text-green-800 mb-4">Primarily used in social sciences, psychology, education, and scientific research.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Best for:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Psychology papers</li>
                      <li>• Education research</li>
                      <li>• Social science studies</li>
                      <li>• Scientific reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Key Features:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Emphasizes publication dates</li>
                      <li>• Author-date format</li>
                      <li>• Running head on every page</li>
                      <li>• Double-spaced throughout</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-900 mb-3">MLA Style (Modern Language Association)</h3>
                <p className="text-red-800 mb-4">Standard for literature, language studies, and humanities research.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Best for:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Literature analysis</li>
                      <li>• Language studies</li>
                      <li>• Cultural studies</li>
                      <li>• Media studies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Key Features:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Author-page number format</li>
                      <li>• No cover page required</li>
                      <li>• Works Cited page</li>
                      <li>• Double-spaced</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Chicago Style (Chicago Manual of Style)</h3>
                <p className="text-blue-800 mb-4">Flexible style used in history, literature, and the arts with two systems: Notes-Bibliography and Author-Date.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Best for:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• History papers</li>
                      <li>• Art history</li>
                      <li>• Philosophy</li>
                      <li>• Religious studies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Footnotes or endnotes</li>
                      <li>• Bibliography page</li>
                      <li>• Flexible formatting</li>
                      <li>• Two citation systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Examples</h2>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Citation Examples</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">APA Format:</h4>
                  <p className="font-mono text-sm text-green-700 bg-green-50 p-2 rounded">
                    Smith, J. (2025). Academic writing guide. University Press.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">MLA Format:</h4>
                  <p className="font-mono text-sm text-red-700 bg-red-50 p-2 rounded">
                    Smith, John. Academic Writing Guide. University Press, 2025.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Chicago Format:</h4>
                  <p className="font-mono text-sm text-blue-700 bg-blue-50 p-2 rounded">
                    Smith, John. Academic Writing Guide. University Press, 2025.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">Need Help with Citations?</h2>
            <p className="text-green-100 mb-6">Our AI citation generator creates perfect citations in any style automatically.</p>
            <Link href="/features/citation-generator" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Try Citation Generator
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
} 