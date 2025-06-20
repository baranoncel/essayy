import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Target, CheckCircle } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How to Write a Perfect Argumentative Essay in 2025: Complete Guide | Essayy',
  description: 'Master argumentative essay writing with our comprehensive 2025 guide. Learn structure, techniques, examples, and pro tips to craft compelling arguments that persuade readers.',
  keywords: 'argumentative essay, how to write argumentative essay, argumentative essay structure, argumentative essay examples, persuasive writing, academic writing, essay writing tips, 2025 essay guide',
  openGraph: {
    title: 'How to Write a Perfect Argumentative Essay in 2025: Complete Guide',
    description: 'Master argumentative essay writing with our comprehensive 2025 guide. Learn structure, techniques, examples, and pro tips.',
    url: 'https://essayy.com/blog/how-to-write-perfect-argumentative-essay-2025',
    siteName: 'Essayy',
    images: [
      {
        url: '/blog-argumentative-essay.svg',
        width: 400,
        height: 300,
        alt: 'Argumentative Essay Writing Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-06-20T00:00:00.000Z',
    authors: ['Essayy Expert Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a Perfect Argumentative Essay in 2025',
    description: 'Master argumentative essay writing with our comprehensive guide. Structure, techniques, and examples included.',
    images: ['/blog-argumentative-essay.svg'],
  },
  alternates: {
    canonical: 'https://essayy.com/blog/how-to-write-perfect-argumentative-essay-2025',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Write a Perfect Argumentative Essay in 2025: Complete Guide',
  description: 'Master argumentative essay writing with our comprehensive 2025 guide. Learn structure, techniques, examples, and pro tips to craft compelling arguments that persuade readers.',
  image: 'https://essayy.com/blog-argumentative-essay.svg',
  author: {
    '@type': 'Organization',
    name: 'Essayy Expert Team',
    url: 'https://essayy.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Essayy',
    logo: {
      '@type': 'ImageObject',
      url: 'https://essayy.com/logo.svg',
    },
  },
  datePublished: '2025-06-20',
  dateModified: '2025-06-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://essayy.com/blog/how-to-write-perfect-argumentative-essay-2025',
  },
}

export default function ArgumentativeEssayGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <GlobalNavigation />

        {/* Article Header */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </nav>

            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex justify-center">
              <Image
                src="/blog-argumentative-essay.svg"
                alt="Argumentative Essay Writing Guide"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Essayy Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>June 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How to Write a Perfect Argumentative Essay in 2025: Complete Guide
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Master the art of persuasive writing with our comprehensive guide to argumentative essays. 
                Learn proven structures, techniques, and strategies that will make your arguments irresistible.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Table of Contents
              </h2>
              <ul className="space-y-2">
                <li><a href="#what-is-argumentative-essay" className="text-blue-600 hover:text-blue-700">1. What is an Argumentative Essay?</a></li>
                <li><a href="#essay-structure" className="text-blue-600 hover:text-blue-700">2. Perfect Argumentative Essay Structure</a></li>
                <li><a href="#choosing-topic" className="text-blue-600 hover:text-blue-700">3. Choosing a Strong Topic</a></li>
                <li><a href="#writing-introduction" className="text-blue-600 hover:text-blue-700">4. Writing a Compelling Introduction</a></li>
                <li><a href="#body-paragraphs" className="text-blue-600 hover:text-blue-700">5. Crafting Powerful Body Paragraphs</a></li>
                <li><a href="#counterarguments" className="text-blue-600 hover:text-blue-700">6. Addressing Counterarguments</a></li>
                <li><a href="#conclusion" className="text-blue-600 hover:text-blue-700">7. Writing a Strong Conclusion</a></li>
                <li><a href="#examples" className="text-blue-600 hover:text-blue-700">8. Examples and Templates</a></li>
                <li><a href="#common-mistakes" className="text-blue-600 hover:text-blue-700">9. Common Mistakes to Avoid</a></li>
                <li><a href="#tips-2025" className="text-blue-600 hover:text-blue-700">10. Pro Tips for 2025</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              <section id="what-is-argumentative-essay" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Argumentative Essay?</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  An argumentative essay is a type of academic writing that requires you to investigate a topic, collect and evaluate evidence, 
                  and establish a position on the topic in a concise manner. Unlike other essay types, argumentative essays demand you to 
                  take a clear stance and defend it with logical reasoning and credible evidence.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Characteristics:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Takes a clear, debatable position on an issue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Supports claims with credible evidence and logical reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Acknowledges and refutes opposing viewpoints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Uses formal, academic tone and structure</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="essay-structure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect Argumentative Essay Structure</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A well-structured argumentative essay follows a specific format that maximizes persuasive impact. 
                  Here's the proven structure that top students use:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Introduction</h3>
                    <p className="text-gray-600 text-sm">Hook, background, thesis statement</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Body Paragraphs</h3>
                    <p className="text-gray-600 text-sm">3-4 paragraphs with evidence and analysis</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-purple-600">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h3>
                    <p className="text-gray-600 text-sm">Restate thesis, summarize, call to action</p>
                  </div>
                </div>
              </section>

              <section id="choosing-topic" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing a Strong Topic</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The foundation of a great argumentative essay is a compelling, debatable topic. Your topic should be:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Argumentative Essay Topics for 2025:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Climate change and environmental policy</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Social media impact on mental health</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Artificial intelligence in education</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Universal basic income</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Renewable energy transition</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Online privacy rights</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Healthcare accessibility</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">Space exploration funding</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="writing-introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Writing a Compelling Introduction</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your introduction sets the tone for your entire essay. A strong introduction should grab attention, 
                  provide context, and present your thesis clearly.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Introduction Template:</h3>
                  <ol className="space-y-2 text-yellow-800">
                    <li><strong>1. Hook:</strong> Start with a compelling statistic, question, or anecdote</li>
                    <li><strong>2. Background:</strong> Provide necessary context and define key terms</li>
                    <li><strong>3. Thesis Statement:</strong> Present your clear, arguable position</li>
                  </ol>
                </div>
              </section>

              {/* Continue with more sections... */}
              <section id="tips-2025" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for 2025</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Use AI Tools Ethically</h3>
                    <p className="text-blue-800">Leverage AI for research and brainstorming, but ensure original thinking and proper attribution.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Fact-Check Everything</h3>
                    <p className="text-green-800">In the age of misinformation, verify all sources and statistics before including them.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Write Your Perfect Argumentative Essay?</h2>
              <p className="text-blue-100 mb-6">Use our AI essay writer to get started with a professional structure and compelling arguments.</p>
              <Link href="/features/essay-writer" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Start Writing Now
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
} 