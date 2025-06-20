import Link from 'next/link'
import { ArrowRight, PenTool, Scale, CheckCircle, BarChart, TrendingUp, GitCompare } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare and Contrast Essay Writer | AI Comparison Essay Generator - Essayy',
  description: 'Generate comprehensive compare and contrast essays that analyze similarities and differences. Our AI comparison essay writer creates balanced, insightful comparisons.',
  keywords: 'compare and contrast essay writer, comparison essay generator, similarities differences analysis, comparative writing AI, analytical comparison',
  openGraph: {
    title: 'Compare and Contrast Essay Writer | AI Comparison Essay Generator - Essayy',
    description: 'Generate comprehensive compare and contrast essays that analyze similarities and differences with balanced insights.',
    url: 'https://essayy.com/use-cases/compare-contrast',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/compare-contrast',
  },
}

export default function CompareContrastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Essayy</span>
          </Link>
          <AuthDialog>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Start Comparing
            </button>
          </AuthDialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Compare & Contrast{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate comprehensive compare and contrast essays that analyze similarities and differences with precision. 
            Our AI comparison essay writer creates balanced, insightful analyses across any subjects or topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Comparison Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Balanced Analysis
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Clear Structure
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Insightful Conclusions
            </div>
          </div>
        </div>
      </section>

      {/* Essay Structures */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare and Contrast Essay Structures
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the most effective organizational pattern for your comparison essay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Block Method</h3>
              <p className="text-gray-600 mb-6">
                Discuss all aspects of Subject A first, then all aspects of Subject B. 
                Best for shorter essays or when subjects are very different.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Structure:</p>
                <ul className="text-blue-700 space-y-1 mt-2">
                  <li>• Introduction</li>
                  <li>• Subject A (all points)</li>
                  <li>• Subject B (all points)</li>
                  <li>• Conclusion</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <GitCompare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Point-by-Point Method</h3>
              <p className="text-gray-600 mb-6">
                Compare subjects point by point throughout the essay. 
                Best for longer essays or when subjects have many similarities.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">Structure:</p>
                <ul className="text-green-700 space-y-1 mt-2">
                  <li>• Introduction</li>
                  <li>• Point 1: A vs B</li>
                  <li>• Point 2: A vs B</li>
                  <li>• Point 3: A vs B</li>
                  <li>• Conclusion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Comparison Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate compare and contrast essays across various subjects and disciplines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Literature & Arts</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Two novels or authors</li>
              <li>• Poetry styles or periods</li>
              <li>• Art movements</li>
              <li>• Film vs. book adaptations</li>
              <li>• Music genres</li>
              <li>• Theater vs. cinema</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">History & Politics</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Historical periods</li>
              <li>• Political systems</li>
              <li>• World leaders</li>
              <li>• Wars and conflicts</li>
              <li>• Ancient civilizations</li>
              <li>• Government policies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Science & Technology</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Scientific theories</li>
              <li>• Technology platforms</li>
              <li>• Research methods</li>
              <li>• Energy sources</li>
              <li>• Medical treatments</li>
              <li>• Environmental solutions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Education & Learning</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Online vs. traditional learning</li>
              <li>• Teaching methods</li>
              <li>• Educational systems</li>
              <li>• Learning styles</li>
              <li>• Assessment methods</li>
              <li>• School types</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Lifestyle & Culture</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Urban vs. rural living</li>
              <li>• Cultural traditions</li>
              <li>• Generational differences</li>
              <li>• Lifestyle choices</li>
              <li>• Social media platforms</li>
              <li>• Travel destinations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Business & Economics</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Business models</li>
              <li>• Economic systems</li>
              <li>• Marketing strategies</li>
              <li>• Company cultures</li>
              <li>• Investment options</li>
              <li>• Market approaches</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Process */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Write Effective Comparisons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this systematic approach to create insightful compare and contrast essays
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Choose Comparable Subjects</h3>
              <p className="text-gray-600 mb-4">
                Select subjects that have enough similarities and differences to make meaningful comparisons. 
                They should belong to the same category or serve similar purposes.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-800 font-medium">Good Example:</p>
                <p className="text-indigo-700">Comparing iPhone vs. Android phones (both smartphones)</p>
                <p className="text-indigo-800 font-medium mt-2">Poor Example:</p>
                <p className="text-indigo-700">Comparing a smartphone vs. a bicycle (too different)</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Identify Key Points of Comparison</h3>
              <p className="text-gray-600 mb-4">
                Brainstorm the main aspects you'll compare: features, benefits, costs, effectiveness, 
                historical significance, or other relevant criteria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Research and Gather Evidence</h3>
              <p className="text-gray-600 mb-4">
                Collect specific facts, statistics, examples, and expert opinions to support your comparisons. 
                Ensure you have balanced information about both subjects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Create a Clear Thesis</h3>
              <p className="text-gray-600 mb-4">
                Develop a thesis that states your main conclusion about the comparison. 
                Indicate whether the similarities or differences are more significant.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Use Transition Words</h3>
              <p className="text-gray-600 mb-4">
                Employ comparison and contrast transition words to guide readers through your analysis: 
                "similarly," "however," "in contrast," "on the other hand," "likewise."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Techniques */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Comparison Techniques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master sophisticated analytical methods for deeper insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Weighted Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Assign different importance levels to various comparison points based on their significance 
              to your overall argument or the reader's needs.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Prioritize key differences</li>
              <li>• Weight important similarities</li>
              <li>• Consider audience relevance</li>
              <li>• Focus on decisive factors</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Balanced Perspective</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Present both subjects fairly, acknowledging strengths and weaknesses of each. 
              Avoid bias while still reaching a reasoned conclusion.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Equal treatment of subjects</li>
              <li>• Acknowledge limitations</li>
              <li>• Present multiple viewpoints</li>
              <li>• Support with evidence</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <BarChart className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Contextual Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Consider the broader context in which your subjects exist. Historical, cultural, 
              or situational factors can significantly impact comparisons.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Historical context</li>
              <li>• Cultural factors</li>
              <li>• Environmental conditions</li>
              <li>• Temporal considerations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <GitCompare className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Synthesis and Evaluation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Go beyond simple comparison to synthesize findings and evaluate the broader implications 
              of similarities and differences you've identified.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Pattern identification</li>
              <li>• Implication analysis</li>
              <li>• Future predictions</li>
              <li>• Recommendation development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Compare and Analyze?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Create insightful compare and contrast essays that reveal meaningful patterns and relationships. 
            Master analytical comparison with our AI-powered writing assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Comparison Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 