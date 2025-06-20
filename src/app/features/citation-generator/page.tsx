import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle, FileText, Quote, Bookmark, BookMarked } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Citation Generator | APA, MLA, Chicago & Harvard Citations - Essayy',
  description: 'Generate perfect citations in APA, MLA, Chicago, and Harvard styles. Free citation generator for books, websites, journals, and more. Create bibliographies automatically.',
  keywords: 'citation generator, APA citation generator, MLA citation, Chicago citation, Harvard citation, bibliography generator, reference generator, cite sources, academic citations, free citation tool',
  openGraph: {
    title: 'Citation Generator | APA, MLA, Chicago & Harvard Citations - Essayy',
    description: 'Generate perfect citations in APA, MLA, Chicago, and Harvard styles. Free citation generator for all source types.',
    url: 'https://essayy.com/features/citation-generator',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-citation-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Citation Generator - Create Perfect Citations',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citation Generator | APA, MLA, Chicago & Harvard Citations',
    description: 'Generate perfect citations in APA, MLA, Chicago, and Harvard styles. Free citation generator for all source types.',
    images: ['/og-citation-generator.jpg'],
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
    canonical: 'https://essayy.com/features/citation-generator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Essayy Citation Generator',
  description: 'Generate perfect citations in APA, MLA, Chicago, and Harvard styles for academic papers',
  url: 'https://essayy.com/features/citation-generator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'APA Style Citations',
    'MLA Style Citations',
    'Chicago Style Citations',
    'Harvard Style Citations',
    'Bibliography Generation',
    'In-text Citations',
    'Multiple Source Types'
  ],
  creator: {
    '@type': 'Organization',
    name: 'Essayy',
    url: 'https://essayy.com',
  },
}

export default function CitationGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-8 mx-auto">
              <BookOpen className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Citation <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">Generator</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate perfect citations in APA, MLA, Chicago, and Harvard styles. Automatically format your bibliography and in-text citations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                  Generate Citations Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Citation Generator?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accurate, automatic citations in all major academic styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Styles</h3>
              <p className="text-gray-600">
                Support for APA, MLA, Chicago, Harvard, and 8,000+ other citation styles with automatic formatting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-6">
                <Quote className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In-Text Citations</h3>
              <p className="text-gray-600">
                Generate proper in-text citations and parenthetical references for seamless integration into your writing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
                <Bookmark className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bibliography Builder</h3>
              <p className="text-gray-600">
                Automatically generate properly formatted bibliographies, reference lists, and works cited pages.
              </p>
            </div>
          </div>
        </section>

        {/* Citation Styles */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Citation Styles</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                All major academic citation styles with proper formatting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  <BookMarked className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">APA Style</h3>
                <p className="text-gray-600">American Psychological Association format for psychology, education, and social sciences.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <BookMarked className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">MLA Style</h3>
                <p className="text-gray-600">Modern Language Association format for literature, arts, and humanities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                  <BookMarked className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chicago Style</h3>
                <p className="text-gray-600">Chicago Manual of Style for history, literature, and the arts.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 mx-auto">
                  <BookMarked className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Harvard Style</h3>
                <p className="text-gray-600">Harvard referencing system widely used in UK universities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create perfect citations in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Source Info</h3>
              <p className="text-gray-600">
                Add details about your source - URL, book title, author, or ISBN.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Style</h3>
              <p className="text-gray-600">
                Select your preferred citation style (APA, MLA, Chicago, Harvard).
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Citation</h3>
              <p className="text-gray-600">
                Copy your perfectly formatted citation and bibliography entry.
              </p>
            </div>
          </div>
        </section>

        {/* Source Types */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cite Any Source Type</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Generate citations for websites, books, journals, and more
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {[
                'Websites', 'Books', 'Journal Articles', 
                'Newspapers', 'Videos', 'Podcasts',
                'Dissertations', 'Reports', 'Conference Papers',
                'Social Media', 'Images', 'Government Documents'
              ].map((source, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-sm font-medium text-gray-900">{source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Students Love Our Tool</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save time and ensure accuracy with automated citation generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Hours of Work</h3>
              <p className="text-gray-600 mb-4">
                No more manual formatting or style guide lookups. Generate perfect citations instantly.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Instant citation generation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No manual formatting needed</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Built-in bibliography builder</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ensure Accuracy</h3>
              <p className="text-gray-600 mb-4">
                Eliminate citation errors and follow style guidelines perfectly every time.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />100% style compliance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Error-free formatting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Updated style guidelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Generating Perfect Citations Today</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Save time and ensure accuracy with our automated citation generator for all academic styles.
            </p>
            <AuthDialog>
              <button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                Generate Citations Free
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