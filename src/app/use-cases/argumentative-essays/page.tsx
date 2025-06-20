import Link from 'next/link'
import { ArrowRight, PenTool, Target, CheckCircle, Shield, BookOpen, Lightbulb } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Argumentative Essay Writer | AI Argumentative Essay Generator - Essayy',
  description: 'Generate powerful argumentative essays with evidence-based arguments. Our AI writer helps you build compelling cases with proper structure, citations, and counterarguments.',
  keywords: 'argumentative essay writer, argumentative essay generator, persuasive writing, debate essays, thesis arguments, evidence-based writing, academic arguments',
  openGraph: {
    title: 'Argumentative Essay Writer | AI Argumentative Essay Generator - Essayy',
    description: 'Generate powerful argumentative essays with evidence-based arguments. Build compelling cases with proper structure and citations.',
    url: 'https://essayy.com/use-cases/argumentative-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/argumentative-essays',
  },
}

export default function ArgumentativeEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Essayy</span>
          </Link>
          <AuthDialog>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Start Writing
            </button>
          </AuthDialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Argumentative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build powerful, evidence-based arguments that persuade and convince. Our AI argumentative essay writer 
            helps you structure compelling cases with proper citations, counterarguments, and logical flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Argumentative Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Evidence-Based Arguments
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Proper Citation Format
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Counterargument Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Argumentative Essay Structure */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect Argumentative Essay Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI follows the proven 5-paragraph structure that wins debates and convinces readers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction with Strong Thesis</h3>
              <p className="text-gray-600 mb-4">
                Hook your readers with a compelling opening, provide background context, and present a clear, 
                debatable thesis statement that takes a definitive stance on the issue.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Example Thesis:</p>
                <p className="text-blue-700 italic">"Social media platforms should be held legally responsible for misinformation because they profit from engagement, have the technology to detect false content, and bear moral obligation to protect democratic discourse."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Body Paragraph 1: Strongest Argument</h3>
              <p className="text-gray-600 mb-4">
                Present your most compelling evidence first. Include statistics, expert opinions, case studies, 
                and logical reasoning to support your main claim.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Body Paragraph 2: Supporting Evidence</h3>
              <p className="text-gray-600 mb-4">
                Build on your first argument with additional evidence, examples, and analysis. 
                Connect this point back to your thesis statement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Body Paragraph 3: Address Counterarguments</h3>
              <p className="text-gray-600 mb-4">
                Acknowledge opposing viewpoints and refute them with evidence and logic. 
                This shows you understand the complexity of the issue and strengthens your position.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Conclusion: Call to Action</h3>
              <p className="text-gray-600 mb-4">
                Restate your thesis, summarize key points, and end with a powerful call to action 
                or thought-provoking statement that leaves a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Argumentative Essay Topics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Argumentative Essay Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from trending topics or let our AI help you develop arguments for any subject
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Technology & Society</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Social media regulation</li>
              <li>• AI in education</li>
              <li>• Privacy vs. security</li>
              <li>• Digital divide</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Environment & Climate</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Climate change action</li>
              <li>• Renewable energy</li>
              <li>• Plastic pollution</li>
              <li>• Conservation policies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Education & Learning</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Standardized testing</li>
              <li>• Online vs. traditional learning</li>
              <li>• College affordability</li>
              <li>• School choice policies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Health & Medicine</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Universal healthcare</li>
              <li>• Mental health awareness</li>
              <li>• Vaccine mandates</li>
              <li>• Medical ethics</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Social Justice</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Income inequality</li>
              <li>• Criminal justice reform</li>
              <li>• Gender equality</li>
              <li>• Immigration policy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Ethics & Philosophy</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Animal rights</li>
              <li>• Genetic engineering</li>
              <li>• Artificial intelligence ethics</li>
              <li>• Freedom of speech</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Argumentative Essay Writing Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master the art of persuasive writing with these expert strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Use Credible Sources</h3>
              </div>
              <p className="text-gray-600">
                Support your arguments with peer-reviewed studies, expert opinions, and reputable publications. 
                Avoid biased sources and always fact-check your evidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Stay Focused on Your Thesis</h3>
              </div>
              <p className="text-gray-600">
                Every paragraph should directly support your main argument. Avoid tangents and ensure 
                each piece of evidence clearly connects to your thesis statement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Use Logical Transitions</h3>
              </div>
              <p className="text-gray-600">
                Connect your ideas with clear transitions like "furthermore," "however," and "in contrast." 
                This helps readers follow your logical progression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Address Counterarguments</h3>
              </div>
              <p className="text-gray-600">
                Acknowledge opposing views and explain why your position is stronger. This demonstrates 
                critical thinking and makes your argument more persuasive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Winning Arguments?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Create compelling argumentative essays that persuade readers and earn top grades. 
            Start with our AI-powered essay generator today.
          </p>
          <AuthDialog>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Your Argumentative Essay
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 