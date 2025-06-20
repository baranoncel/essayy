import Link from 'next/link'
import { ArrowRight, CheckCircle, Type, Zap, Brain, FileText, Lightbulb } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'

export default function GrammarCheckerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-8 mx-auto">
            <Type className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Grammar <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Checker</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fix grammar, spelling, and punctuation errors instantly. Improve your writing style with advanced suggestions and readability analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Check Grammar Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Grammar Checker?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered grammar and style checking for perfect writing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Grammar Check</h3>
            <p className="text-gray-600">
              Detect and fix complex grammar errors, including subject-verb agreement, tense consistency, and sentence structure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
              <Type className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spelling & Punctuation</h3>
            <p className="text-gray-600">
              Catch spelling mistakes, typos, and punctuation errors with intelligent context-aware suggestions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Style Improvement</h3>
            <p className="text-gray-600">
              Get suggestions to improve clarity, conciseness, and overall writing style for better readability.
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
              Perfect your writing in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Paste Your Text</h3>
              <p className="text-gray-600">
                Copy and paste your text or upload a document for checking.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your text for grammar, spelling, and style issues.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Suggestions</h3>
              <p className="text-gray-600">
                Review and apply intelligent suggestions to improve your writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Error Types */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Check</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive error detection and writing improvement suggestions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Grammar Errors</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Subject-verb agreement</li>
              <li>• Verb tense consistency</li>
              <li>• Pronoun agreement</li>
              <li>• Sentence fragments</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Spelling & Typos</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Misspelled words</li>
              <li>• Commonly confused words</li>
              <li>• Typos and fat-finger errors</li>
              <li>• Capitalization issues</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Punctuation</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Missing commas</li>
              <li>• Apostrophe usage</li>
              <li>• Quotation marks</li>
              <li>• Semicolon placement</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Style & Clarity</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Wordiness reduction</li>
              <li>• Passive voice detection</li>
              <li>• Repetitive phrasing</li>
              <li>• Sentence variety</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Readability</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Reading level analysis</li>
              <li>• Sentence length</li>
              <li>• Vocabulary complexity</li>
              <li>• Flow improvements</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Formatting</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Consistent spacing</li>
              <li>• Proper capitalization</li>
              <li>• Number formatting</li>
              <li>• Date and time formats</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tool for writers, students, and professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Students & Academics</h3>
              <p className="text-gray-600 mb-4">
                Perfect your essays, research papers, and academic writing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Error-free essays</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Academic writing style</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Clear communication</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professionals & Writers</h3>
              <p className="text-gray-600 mb-4">
                Enhance business communication and creative writing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Professional emails</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Business documents</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Creative content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Writers Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join millions who improve their writing with our grammar checker
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Error Types Detected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
            <div className="text-gray-600">Documents Checked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Perfect Your Writing Today</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Fix grammar errors, improve style, and enhance readability with our advanced AI grammar checker.
          </p>
          <AuthDialog>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Check Grammar Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 