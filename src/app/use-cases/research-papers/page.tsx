import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle, Search, Target, Users, Clock } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Paper Writer | AI Research Paper Generator - Essayy',
  description: 'Generate comprehensive research papers with proper citations, methodology, and analysis. Our AI research paper writer helps with literature reviews, data analysis, and academic formatting.',
  keywords: 'research paper writer, research paper generator, academic research AI, literature review generator, thesis paper writer, scientific paper generator',
  openGraph: {
    title: 'Research Paper Writer | AI Research Paper Generator - Essayy',
    description: 'Generate comprehensive research papers with proper citations, methodology, and analysis.',
    url: 'https://essayy.com/use-cases/research-papers',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/research-papers',
  },
}

export default function ResearchPapersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
              <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Research Paper{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Generator
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate comprehensive research papers with proper methodology, literature reviews, and citations. 
            Our AI research paper writer helps you create academic papers that meet scholarly standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Research Paper
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Proper Citations
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Literature Reviews
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Academic Format
            </div>
          </div>
        </div>
      </section>

      {/* Research Paper Components */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Research Paper Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI generates all essential components of a professional research paper
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Abstract & Keywords</h3>
              <p className="text-gray-600">
                Concise summary of your research including objectives, methodology, key findings, 
                and conclusions. Includes relevant keywords for academic indexing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Literature Review</h3>
              <p className="text-gray-600">
                Comprehensive review of existing research, identifying gaps in knowledge, 
                and positioning your study within the broader academic context.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Methodology</h3>
              <p className="text-gray-600">
                Detailed description of research methods, data collection procedures, 
                sample selection, and analytical approaches used in your study.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results & Analysis</h3>
              <p className="text-gray-600">
                Presentation of findings with appropriate statistical analysis, 
                data visualization, and interpretation of results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Discussion & Conclusion</h3>
              <p className="text-gray-600">
                Analysis of implications, limitations, recommendations for future research, 
                and conclusions drawn from your findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Fields */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Fields We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate research papers across all academic disciplines and fields of study
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">STEM Fields</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Computer Science</li>
              <li>• Engineering</li>
              <li>• Mathematics</li>
              <li>• Physics & Chemistry</li>
              <li>• Biology & Medicine</li>
              <li>• Environmental Science</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Social Sciences</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Psychology</li>
              <li>• Sociology</li>
              <li>• Political Science</li>
              <li>• Economics</li>
              <li>• Anthropology</li>
              <li>• International Relations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Humanities</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Literature</li>
              <li>• History</li>
              <li>• Philosophy</li>
              <li>• Art History</li>
              <li>• Religious Studies</li>
              <li>• Cultural Studies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Business & Management</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Business Administration</li>
              <li>• Marketing</li>
              <li>• Finance</li>
              <li>• Human Resources</li>
              <li>• Operations Management</li>
              <li>• Entrepreneurship</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Health Sciences</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Public Health</li>
              <li>• Nursing</li>
              <li>• Medical Research</li>
              <li>• Health Policy</li>
              <li>• Epidemiology</li>
              <li>• Healthcare Management</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Educational Psychology</li>
              <li>• Curriculum Development</li>
              <li>• Special Education</li>
              <li>• Educational Technology</li>
              <li>• Higher Education</li>
              <li>• Language Learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Paper Types */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Research Papers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate different types of research papers based on your academic needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Empirical Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Original research based on observation, experimentation, or data collection. 
                Includes quantitative and qualitative studies with statistical analysis.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Experimental studies</li>
                <li>• Survey research</li>
                <li>• Case studies</li>
                <li>• Field research</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Literature Reviews</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of existing research on a specific topic. 
                Synthesizes findings and identifies gaps in current knowledge.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Systematic reviews</li>
                <li>• Meta-analyses</li>
                <li>• Narrative reviews</li>
                <li>• Scoping reviews</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Theoretical Papers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Development or analysis of theories, models, or frameworks. 
                Conceptual papers that advance theoretical understanding.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Theory development</li>
                <li>• Conceptual frameworks</li>
                <li>• Model building</li>
                <li>• Theoretical analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Applied Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Research focused on solving practical problems or improving existing practices. 
                Bridges theory and real-world applications.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Action research</li>
                <li>• Policy analysis</li>
                <li>• Program evaluation</li>
                <li>• Implementation studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Research?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Generate comprehensive research papers with proper methodology, citations, and analysis. 
            Perfect for academic assignments and scholarly publications.
          </p>
          <AuthDialog>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Research Paper Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 