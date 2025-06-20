import Link from 'next/link'
import { ArrowRight, PenTool, BookOpen, CheckCircle, Info, Lightbulb, FileText } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expository Essay Writer | AI Explanatory Essay Generator - Essayy',
  description: 'Generate clear expository essays that explain, inform, and educate. Our AI expository essay writer creates well-structured explanatory content with facts and evidence.',
  keywords: 'expository essay writer, explanatory essay generator, informative writing AI, expository writing, educational essays, factual writing',
  openGraph: {
    title: 'Expository Essay Writer | AI Explanatory Essay Generator - Essayy',
    description: 'Generate clear expository essays that explain, inform, and educate with facts and evidence.',
    url: 'https://essayy.com/use-cases/expository-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/expository-essays',
  },
}

export default function ExpositoryEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Essayy</span>
          </Link>
          <AuthDialog>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Start Explaining
            </button>
          </AuthDialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Info className="h-16 w-16 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expository{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate clear, informative expository essays that explain complex topics with precision and clarity. 
            Our AI expository essay writer creates well-structured explanatory content using facts, evidence, and logical organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Expository Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Clear Explanations
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Factual Content
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Logical Structure
            </div>
          </div>
        </div>
      </section>

      {/* Types of Expository Essays */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Expository Essays
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master different expository writing formats for various explanatory purposes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Definition Essays</h3>
              <p className="text-gray-600 mb-6">
                Explain what something is, providing clear definitions, characteristics, 
                and examples to help readers understand complex concepts.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Concept definitions</li>
                <li>• Term explanations</li>
                <li>• Characteristic descriptions</li>
                <li>• Example illustrations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Essays</h3>
              <p className="text-gray-600 mb-6">
                Explain how something works or how to do something, providing step-by-step 
                instructions or descriptions of processes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• How-to instructions</li>
                <li>• Process explanations</li>
                <li>• Step-by-step guides</li>
                <li>• Procedure descriptions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classification Essays</h3>
              <p className="text-gray-600 mb-6">
                Organize and categorize information into groups, explaining the criteria 
                for classification and characteristics of each category.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Category organization</li>
                <li>• Classification criteria</li>
                <li>• Group characteristics</li>
                <li>• Systematic arrangement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <Info className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem-Solution Essays</h3>
              <p className="text-gray-600 mb-6">
                Identify and explain problems, then present and evaluate potential solutions 
                with supporting evidence and reasoning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Problem identification</li>
                <li>• Solution proposals</li>
                <li>• Evidence evaluation</li>
                <li>• Implementation strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <BookOpen className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informational Essays</h3>
              <p className="text-gray-600 mb-6">
                Present factual information about topics, events, or phenomena in an 
                organized, objective manner without personal opinions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Factual presentation</li>
                <li>• Objective information</li>
                <li>• Topic exploration</li>
                <li>• Educational content</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <Lightbulb className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Descriptive Essays</h3>
              <p className="text-gray-600 mb-6">
                Provide detailed descriptions of places, objects, people, or events 
                using factual information and objective observations.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Detailed descriptions</li>
                <li>• Objective observations</li>
                <li>• Factual details</li>
                <li>• Comprehensive coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Expository Essay Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore informative topics across various fields and subjects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Science & Technology</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• How photosynthesis works</li>
              <li>• The process of evolution</li>
              <li>• Renewable energy sources</li>
              <li>• Artificial intelligence basics</li>
              <li>• Climate change mechanisms</li>
              <li>• Space exploration history</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Health & Medicine</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• How vaccines work</li>
              <li>• Types of mental health disorders</li>
              <li>• Nutrition and metabolism</li>
              <li>• Exercise benefits explained</li>
              <li>• Disease prevention methods</li>
              <li>• Medical technology advances</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">History & Culture</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Ancient civilization structures</li>
              <li>• Cultural traditions explained</li>
              <li>• Historical event causes</li>
              <li>• Art movement characteristics</li>
              <li>• Language evolution</li>
              <li>• Religious practices</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Education & Learning</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Learning styles explained</li>
              <li>• Educational system types</li>
              <li>• Study techniques</li>
              <li>• Memory formation process</li>
              <li>• Critical thinking skills</li>
              <li>• Assessment methods</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Business & Economics</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• How markets function</li>
              <li>• Types of business structures</li>
              <li>• Economic indicators</li>
              <li>• Supply and demand</li>
              <li>• Investment strategies</li>
              <li>• Entrepreneurship process</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Social Issues</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Types of government systems</li>
              <li>• Social media impact</li>
              <li>• Community organization</li>
              <li>• Volunteer opportunities</li>
              <li>• Civic responsibility</li>
              <li>• Cultural diversity benefits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Structure */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expository Essay Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this clear structure to create effective explanatory essays
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction with Clear Thesis</h3>
              <p className="text-gray-600 mb-4">
                Introduce your topic and present a clear thesis statement that identifies what you will explain. 
                Provide a roadmap of the main points you'll cover.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">Example Thesis:</p>
                <p className="text-amber-700 italic">"Photosynthesis is a complex biological process that converts sunlight, carbon dioxide, and water into glucose and oxygen through two main stages: light-dependent reactions and the Calvin cycle."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Background Information</h3>
              <p className="text-gray-600 mb-4">
                Provide necessary context and background information that readers need to understand 
                your explanation. Define key terms and concepts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Main Body Paragraphs</h3>
              <p className="text-gray-600 mb-4">
                Present your explanation in logical order. Each paragraph should focus on one main point 
                or aspect, supported by facts, examples, and evidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Supporting Evidence</h3>
              <p className="text-gray-600 mb-4">
                Use credible sources, statistics, expert opinions, and concrete examples to support 
                your explanations. Maintain objectivity throughout.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Conclusion and Summary</h3>
              <p className="text-gray-600 mb-4">
                Summarize the key points of your explanation and reinforce the main concept. 
                Consider the broader significance or applications of what you've explained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expository Writing Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the art of clear, informative writing with these expert strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Use Clear, Simple Language</h3>
            <p className="text-gray-600 mb-4">
              Write in clear, straightforward language that your audience can easily understand. 
              Avoid jargon unless you define it clearly.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Simple sentence structure</li>
              <li>• Define technical terms</li>
              <li>• Use active voice</li>
              <li>• Avoid unnecessary complexity</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Organize Information Logically</h3>
            <p className="text-gray-600 mb-4">
              Present information in a logical sequence that helps readers follow your explanation. 
              Use transitions to connect ideas smoothly.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Chronological order</li>
              <li>• Order of importance</li>
              <li>• Spatial organization</li>
              <li>• Clear transitions</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Provide Concrete Examples</h3>
            <p className="text-gray-600 mb-4">
              Use specific examples, analogies, and illustrations to make abstract concepts 
              more concrete and understandable for readers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-world examples</li>
              <li>• Helpful analogies</li>
              <li>• Visual descriptions</li>
              <li>• Case studies</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintain Objectivity</h3>
            <p className="text-gray-600 mb-4">
              Present information objectively without personal opinions or bias. 
              Focus on facts and let readers draw their own conclusions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Factual presentation</li>
              <li>• Neutral tone</li>
              <li>• Credible sources</li>
              <li>• Balanced coverage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explain and Inform?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Create clear, informative expository essays that educate and enlighten readers. 
            Master explanatory writing with our AI-powered assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Expository Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 