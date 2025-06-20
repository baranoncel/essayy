import Link from 'next/link'
import { ArrowRight, Search, CheckCircle, Microscope, BarChart, Brain } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytical Essay Writer | AI Analytical Essay Generator - Essayy',
  description: 'Generate in-depth analytical essays that examine, interpret, and evaluate complex topics. Our AI analytical essay writer provides critical analysis and evidence-based insights.',
  keywords: 'analytical essay writer, analytical essay generator, critical analysis AI, literary analysis, text analysis, academic analysis',
  openGraph: {
    title: 'Analytical Essay Writer | AI Analytical Essay Generator - Essayy',
    description: 'Generate in-depth analytical essays that examine, interpret, and evaluate complex topics with critical analysis.',
    url: 'https://essayy.com/use-cases/analytical-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/analytical-essays',
  },
}

export default function AnalyticalEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
              <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Search className="h-16 w-16 text-teal-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Analytical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate in-depth analytical essays that examine, interpret, and evaluate complex topics. 
            Our AI analytical essay writer provides critical analysis, evidence-based insights, and scholarly interpretation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Analytical Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Critical Analysis
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Evidence-Based
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Scholarly Interpretation
            </div>
          </div>
        </div>
      </section>

      {/* Types of Analysis */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Analytical Essays
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI handles all forms of analytical writing across different disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Literary Analysis</h3>
              <p className="text-gray-600 mb-6">
                Examine themes, characters, symbolism, and literary devices in novels, poems, 
                and plays. Analyze author's techniques and their impact on meaning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Character analysis</li>
                <li>• Theme exploration</li>
                <li>• Symbolism interpretation</li>
                <li>• Style analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analysis</h3>
              <p className="text-gray-600 mb-6">
                Interpret statistical data, research findings, and empirical evidence. 
                Analyze trends, patterns, and relationships in quantitative information.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Statistical interpretation</li>
                <li>• Trend analysis</li>
                <li>• Pattern recognition</li>
                <li>• Research evaluation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Microscope className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scientific Analysis</h3>
              <p className="text-gray-600 mb-6">
                Analyze scientific phenomena, experimental results, and theoretical concepts. 
                Examine cause-effect relationships and scientific methodologies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Experimental analysis</li>
                <li>• Hypothesis evaluation</li>
                <li>• Method critique</li>
                <li>• Result interpretation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <Search className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Historical Analysis</h3>
              <p className="text-gray-600 mb-6">
                Examine historical events, documents, and sources. Analyze causes, 
                consequences, and significance of historical developments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Event analysis</li>
                <li>• Source evaluation</li>
                <li>• Causation study</li>
                <li>• Impact assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Brain className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rhetorical Analysis</h3>
              <p className="text-gray-600 mb-6">
                Analyze speeches, advertisements, and persuasive texts. Examine rhetorical 
                strategies, audience appeal, and effectiveness of communication.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Rhetorical strategies</li>
                <li>• Audience analysis</li>
                <li>• Persuasive techniques</li>
                <li>• Effectiveness evaluation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <BarChart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Analysis</h3>
              <p className="text-gray-600 mb-6">
                Evaluate government policies, social programs, and institutional decisions. 
                Analyze effectiveness, implementation, and societal impact.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Policy evaluation</li>
                <li>• Implementation analysis</li>
                <li>• Impact assessment</li>
                <li>• Recommendation development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Essay Structure */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analytical Essay Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow this systematic approach to create thorough and insightful analysis
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction & Thesis</h3>
            <p className="text-gray-600 mb-4">
              Introduce the subject of analysis and present a clear analytical thesis that states 
              your main interpretation or evaluation of the topic.
            </p>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-teal-800 font-medium">Example Thesis:</p>
              <p className="text-teal-700 italic">"Through its use of symbolism, character development, and narrative structure, Harper Lee's 'To Kill a Mockingbird' reveals the destructive nature of prejudice in 1930s Alabama society."</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Context & Background</h3>
            <p className="text-gray-600 mb-4">
              Provide necessary background information and context that readers need to understand 
              your analysis. Establish the framework for your examination.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Detailed Analysis</h3>
            <p className="text-gray-600 mb-4">
              Break down the subject into components and examine each element systematically. 
              Use evidence, examples, and close reading to support your interpretations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Critical Evaluation</h3>
            <p className="text-gray-600 mb-4">
              Evaluate the significance, effectiveness, or implications of your findings. 
              Consider multiple perspectives and acknowledge complexity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Synthesis & Conclusion</h3>
            <p className="text-gray-600 mb-4">
              Synthesize your analysis into broader insights and conclusions. 
              Discuss the larger significance and implications of your findings.
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Techniques */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Analysis Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master sophisticated analytical methods for deeper insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Close Reading</h3>
              <p className="text-gray-600 mb-4">
                Examine texts word-by-word, analyzing language choices, literary devices, 
                and subtle meanings to uncover deeper significance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Word choice analysis</li>
                <li>• Literary device identification</li>
                <li>• Tone and mood examination</li>
                <li>• Structural analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comparative Analysis</h3>
              <p className="text-gray-600 mb-4">
                Compare and contrast different texts, theories, or phenomena to identify 
                patterns, differences, and relationships.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Similarity identification</li>
                <li>• Difference highlighting</li>
                <li>• Pattern recognition</li>
                <li>• Relationship mapping</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contextual Analysis</h3>
              <p className="text-gray-600 mb-4">
                Examine subjects within their historical, cultural, social, or political contexts 
                to understand their full significance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Historical context</li>
                <li>• Cultural background</li>
                <li>• Social influences</li>
                <li>• Political factors</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Critical Framework</h3>
              <p className="text-gray-600 mb-4">
                Apply theoretical frameworks and critical lenses to analyze subjects from 
                specific perspectives and methodological approaches.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Theoretical application</li>
                <li>• Methodological approach</li>
                <li>• Perspective analysis</li>
                <li>• Framework evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Analyze Like an Expert?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Create sophisticated analytical essays that demonstrate critical thinking and scholarly insight. 
            Master the art of analysis with our AI-powered writing assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Analytical Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 