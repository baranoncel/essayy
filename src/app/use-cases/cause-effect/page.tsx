import Link from 'next/link'
import { ArrowRight, PenTool, Zap, CheckCircle, TrendingUp, Target, GitBranch } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cause and Effect Essay Writer | AI Causal Analysis Generator - Essayy',
  description: 'Generate comprehensive cause and effect essays that analyze relationships between events. Our AI causal analysis writer explores causes, effects, and consequences.',
  keywords: 'cause and effect essay writer, causal analysis generator, cause effect relationships, consequence analysis AI, causal reasoning essays',
  openGraph: {
    title: 'Cause and Effect Essay Writer | AI Causal Analysis Generator - Essayy',
    description: 'Generate comprehensive cause and effect essays that analyze relationships between events and consequences.',
    url: 'https://essayy.com/use-cases/cause-effect',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/cause-effect',
  },
}

export default function CauseEffectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Essayy</span>
          </Link>
          <AuthDialog>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Analyze Causes
            </button>
          </AuthDialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-16 w-16 text-emerald-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cause & Effect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate comprehensive cause and effect essays that analyze complex relationships between events, actions, and consequences. 
            Our AI causal analysis writer explores root causes, immediate effects, and long-term implications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Cause & Effect Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Causal Relationships
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Logical Connections
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Evidence-Based Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Essay Types */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Cause and Effect Essays
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the most appropriate structure based on your topic and analysis goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Cause, Multiple Effects</h3>
              <p className="text-gray-600 mb-6">
                Analyze one primary cause and explore its various consequences and impacts 
                across different areas or time periods.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Example:</p>
                <p className="text-blue-700 text-sm">Social media addiction → decreased face-to-face communication, reduced attention span, increased anxiety</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <GitBranch className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Causes, Single Effect</h3>
              <p className="text-gray-600 mb-6">
                Examine various contributing factors that lead to one significant outcome 
                or phenomenon.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">Example:</p>
                <p className="text-green-700 text-sm">Poor diet + lack of exercise + stress + genetics → obesity</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Causal Chain</h3>
              <p className="text-gray-600 mb-6">
                Trace a sequence where one event causes another, which causes another, 
                creating a chain of cause-and-effect relationships.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium">Example:</p>
                <p className="text-purple-700 text-sm">Economic recession → job losses → reduced spending → business closures → more unemployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Cause and Effect Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore causal relationships across various fields and current issues
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Environmental Issues</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Climate change effects</li>
              <li>• Deforestation consequences</li>
              <li>• Pollution impacts</li>
              <li>• Species extinction causes</li>
              <li>• Ocean acidification</li>
              <li>• Renewable energy adoption</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Technology & Society</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Social media effects</li>
              <li>• Remote work consequences</li>
              <li>• AI automation impacts</li>
              <li>• Digital divide causes</li>
              <li>• Cybersecurity breaches</li>
              <li>• Online learning effects</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Health & Lifestyle</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Obesity causes and effects</li>
              <li>• Stress-related illnesses</li>
              <li>• Exercise benefits</li>
              <li>• Sleep deprivation impacts</li>
              <li>• Mental health factors</li>
              <li>• Nutrition consequences</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Education & Learning</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Dropout rate causes</li>
              <li>• Technology in education</li>
              <li>• Teacher shortage effects</li>
              <li>• Standardized testing impacts</li>
              <li>• Early childhood education</li>
              <li>• Student debt consequences</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Economic Factors</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Inflation causes</li>
              <li>• Unemployment effects</li>
              <li>• Market crash consequences</li>
              <li>• Globalization impacts</li>
              <li>• Income inequality</li>
              <li>• Consumer behavior changes</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Social Issues</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Crime rate factors</li>
              <li>• Immigration effects</li>
              <li>• Urbanization consequences</li>
              <li>• Family structure changes</li>
              <li>• Cultural shifts</li>
              <li>• Generation gap causes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Structure */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cause and Effect Essay Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this systematic approach to create clear and logical causal analysis
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction with Clear Thesis</h3>
              <p className="text-gray-600 mb-4">
                Introduce your topic and present a clear thesis statement that identifies the causal relationship 
                you'll be analyzing. Specify whether you're focusing on causes, effects, or both.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-emerald-800 font-medium">Example Thesis:</p>
                <p className="text-emerald-700 italic">"The widespread adoption of remote work during the pandemic has led to increased productivity, improved work-life balance, but also greater social isolation and communication challenges."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Background and Context</h3>
              <p className="text-gray-600 mb-4">
                Provide necessary background information to help readers understand the situation, 
                event, or phenomenon you're analyzing. Set the stage for your causal analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Detailed Causal Analysis</h3>
              <p className="text-gray-600 mb-4">
                Present your causes and/or effects in logical order. Use evidence, examples, and expert opinions 
                to support each causal relationship. Explain how and why these connections exist.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Address Alternative Explanations</h3>
              <p className="text-gray-600 mb-4">
                Acknowledge other possible causes or contributing factors. Explain why your analysis 
                is the most convincing or comprehensive explanation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Conclusion with Implications</h3>
              <p className="text-gray-600 mb-4">
                Summarize your causal analysis and discuss the broader implications. Consider future consequences 
                or potential solutions based on your findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Techniques */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Causal Analysis Techniques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master sophisticated methods for identifying and analyzing cause-effect relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Distinguish Correlation vs. Causation</h3>
            <p className="text-gray-600 mb-4">
              Ensure you're identifying true causal relationships, not just correlations. 
              Look for evidence of direct influence and temporal sequence.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Temporal precedence</li>
              <li>• Mechanism explanation</li>
              <li>• Rule out confounding factors</li>
              <li>• Consider alternative explanations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Identify Immediate vs. Long-term Effects</h3>
            <p className="text-gray-600 mb-4">
              Distinguish between immediate consequences and long-term impacts. 
              Consider both short-term and extended timeframes in your analysis.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Short-term consequences</li>
              <li>• Long-term implications</li>
              <li>• Delayed effects</li>
              <li>• Cumulative impacts</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consider Multiple Contributing Factors</h3>
            <p className="text-gray-600 mb-4">
              Recognize that most effects result from multiple causes working together. 
              Analyze the relative importance of different contributing factors.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Primary vs. secondary causes</li>
              <li>• Direct vs. indirect influences</li>
              <li>• Necessary vs. sufficient conditions</li>
              <li>• Interacting factors</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Use Evidence and Examples</h3>
            <p className="text-gray-600 mb-4">
              Support your causal claims with concrete evidence: statistics, research studies, 
              expert testimony, and real-world examples.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Statistical evidence</li>
              <li>• Research findings</li>
              <li>• Case studies</li>
              <li>• Expert opinions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Analyze Cause and Effect?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Create insightful cause and effect essays that reveal important relationships and consequences. 
            Master causal analysis with our AI-powered writing assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Cause & Effect Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 