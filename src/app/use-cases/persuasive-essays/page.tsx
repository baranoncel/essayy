import Link from 'next/link'
import { ArrowRight, Lightbulb, CheckCircle, Target, Heart, Users } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Persuasive Essay Writer | AI Persuasive Essay Generator - Essayy',
  description: 'Generate compelling persuasive essays that influence and convince readers. Our AI persuasive essay writer uses emotional appeals, logical reasoning, and credible evidence.',
  keywords: 'persuasive essay writer, persuasive essay generator, persuasive writing AI, convince readers, influence writing, rhetorical essays',
  openGraph: {
    title: 'Persuasive Essay Writer | AI Persuasive Essay Generator - Essayy',
    description: 'Generate compelling persuasive essays that influence and convince readers using emotional appeals and logical reasoning.',
    url: 'https://essayy.com/use-cases/persuasive-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/persuasive-essays',
  },
}

export default function PersuasiveEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
              <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Persuasive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create compelling persuasive essays that influence minds and change opinions. Our AI persuasive essay writer 
            combines emotional appeals, logical reasoning, and credible evidence to convince any audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Persuasive Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Emotional Appeals
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Logical Reasoning
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Credible Evidence
            </div>
          </div>
        </div>
      </section>

      {/* Rhetorical Appeals */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master the Art of Persuasion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI uses the three pillars of persuasive writing to create compelling arguments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Logos (Logic)</h3>
              <p className="text-gray-600 mb-6">
                Build rational arguments using facts, statistics, expert opinions, and logical reasoning. 
                Present clear cause-and-effect relationships that support your position.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Statistical evidence</li>
                <li>• Expert testimonials</li>
                <li>• Logical progression</li>
                <li>• Cause-effect analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pathos (Emotion)</h3>
              <p className="text-gray-600 mb-6">
                Connect with readers emotionally through vivid imagery, personal stories, and appeals 
                to values, fears, hopes, and desires that motivate action.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emotional stories</li>
                <li>• Vivid imagery</li>
                <li>• Value appeals</li>
                <li>• Personal anecdotes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethos (Credibility)</h3>
              <p className="text-gray-600 mb-6">
                Establish trust and authority through credible sources, professional tone, 
                balanced perspective, and demonstration of expertise on the topic.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Credible sources</li>
                <li>• Professional tone</li>
                <li>• Balanced viewpoint</li>
                <li>• Expert knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Persuasive Essay Structure */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Winning Persuasive Essay Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow this proven structure to maximize your persuasive impact
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Attention-Grabbing Hook</h3>
            <p className="text-gray-600 mb-4">
              Start with a compelling statistic, thought-provoking question, or emotional story 
              that immediately engages your audience and introduces your topic.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 font-medium">Example Hook:</p>
              <p className="text-purple-700 italic">"Every 40 seconds, someone in the United States dies by suicide - a tragedy that could be prevented with better mental health support in schools."</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Clear Position Statement</h3>
            <p className="text-gray-600 mb-4">
              Present your thesis clearly and confidently. State exactly what you want your audience 
              to believe, do, or change after reading your essay.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Supporting Arguments</h3>
            <p className="text-gray-600 mb-4">
              Present 2-3 strong arguments that support your position. Use a combination of logical evidence, 
              emotional appeals, and credible sources to build a compelling case.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Address Counterarguments</h3>
            <p className="text-gray-600 mb-4">
              Acknowledge opposing viewpoints and explain why your position is still stronger. 
              This shows fairness and strengthens your credibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Powerful Call to Action</h3>
            <p className="text-gray-600 mb-4">
              End with a strong call to action that tells readers exactly what they should do. 
              Make it specific, achievable, and emotionally compelling.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Persuasive Topics */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Persuasive Essay Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from trending topics or let our AI help you develop persuasive arguments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Education Reform</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• School uniforms</li>
                <li>• Homework policies</li>
                <li>• Technology in classrooms</li>
                <li>• Arts education funding</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Environmental Action</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plastic bag bans</li>
                <li>• Renewable energy</li>
                <li>• Electric vehicles</li>
                <li>• Conservation efforts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Health & Wellness</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mental health awareness</li>
                <li>• Healthy school lunches</li>
                <li>• Exercise requirements</li>
                <li>• Screen time limits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Social Issues</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Volunteer requirements</li>
                <li>• Community service</li>
                <li>• Youth programs</li>
                <li>• Digital citizenship</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Technology Ethics</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social media regulation</li>
                <li>• Privacy protection</li>
                <li>• AI in education</li>
                <li>• Digital rights</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Lifestyle Choices</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vegetarian diets</li>
                <li>• Sustainable living</li>
                <li>• Work-life balance</li>
                <li>• Minimalism benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Persuade and Influence?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Create compelling persuasive essays that change minds and inspire action. 
            Master the art of persuasion with our AI-powered writing assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Persuasive Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 