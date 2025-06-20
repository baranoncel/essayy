import Link from 'next/link'
import { ArrowRight, Search, CheckCircle, Shield, Eye, Target, Globe } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'

export default function PlagiarismCheckerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8 mx-auto">
            <Search className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Plagiarism <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Checker</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ensure your content is 100% original with our advanced plagiarism detection system that scans billions of web pages and academic papers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Check Plagiarism Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Plagiarism Checker?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive plagiarism detection to ensure originality and academic integrity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
              <Globe className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Billion+ Sources</h3>
            <p className="text-gray-600">
              Our database includes billions of web pages, academic papers, books, and publications for comprehensive checking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
              <Eye className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Reports</h3>
            <p className="text-gray-600">
              Get comprehensive reports with highlighted matches, similarity percentages, and source citations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
              <Target className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">High Accuracy</h3>
            <p className="text-gray-600">
              Advanced algorithms ensure precise detection of both exact matches and paraphrased content.
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
              Check for plagiarism in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Text</h3>
              <p className="text-gray-600">
                Paste your content or upload a document to check for plagiarism.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Scan</h3>
              <p className="text-gray-600">
                Our system scans billions of sources to identify potential matches.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Report</h3>
              <p className="text-gray-600">
                Receive a detailed report with highlighted matches and originality score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Essential tool for maintaining academic and professional integrity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Students & Academics</h3>
            <p className="text-gray-600 mb-4">
              Ensure your research papers, essays, and assignments are completely original.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Avoid accidental plagiarism</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Check thesis and dissertations</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Verify proper citations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Educators & Publishers</h3>
            <p className="text-gray-600 mb-4">
              Verify the originality of submissions and maintain publication standards.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Grade with confidence</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Maintain academic integrity</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Verify content authenticity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Millions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our plagiarism checker is used by students and educators worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">10B+</div>
              <div className="text-gray-600">Sources Indexed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5M+</div>
              <div className="text-gray-600">Documents Checked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Check Your Content for Plagiarism Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Ensure 100% originality with our comprehensive plagiarism detection system.
          </p>
          <AuthDialog>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Check Plagiarism Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 