import Link from 'next/link'
import { ArrowRight, Star, CheckCircle, GraduationCap, Target, Lightbulb, BookOpen, PenTool } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'College Application Essay Writer | AI College Essay Generator - Essayy',
  description: 'Generate compelling college application essays with our AI writer. Stand out from thousands of applicants with personalized, authentic college essays. Free to use.',
  keywords: 'college essay writer, college application essays, AI college essay generator, university application essays, admission essays, personal statement writer',
  openGraph: {
    title: 'College Application Essay Writer | AI College Essay Generator - Essayy',
    description: 'Generate compelling college application essays with our AI writer. Stand out from thousands of applicants with personalized, authentic college essays.',
    url: 'https://essayy.com/use-cases/college-essays',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-college-essays.jpg',
        width: 1200,
        height: 630,
        alt: 'College Essay Writer - Essayy',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/college-essays',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'College Application Essay Writer | AI College Essay Generator',
  description: 'Generate compelling college application essays with our AI writer. Stand out from thousands of applicants with personalized, authentic college essays.',
  author: {
    '@type': 'Organization',
    name: 'Essayy',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Essayy',
    logo: {
      '@type': 'ImageObject',
      url: 'https://essayy.com/logo.png',
    },
  },
  datePublished: '2024-01-01',
  dateModified: '2024-01-01',
}

export default function CollegeEssaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              College Application{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Essay Writer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stand out from thousands of applicants with compelling, authentic college application essays. 
              Our AI writer helps you craft personal statements that showcase your unique story and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AuthDialog>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                  Generate College Essay Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
              <Link href="/use-cases/personal-statements" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Personal Statements
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Admission-Focused Content
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Personal Story Integration
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                University-Specific Prompts
              </div>
            </div>
          </div>
        </section>

        {/* College Essay Types */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Types of College Essays We Help With
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From Common App essays to university-specific prompts, we cover all college application essay types
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Statements</h3>
                <p className="text-gray-600 mb-6">
                  Tell your unique story and showcase what makes you different from other applicants. 
                  Perfect for Common Application and university-specific prompts.
                </p>
                <Link href="/use-cases/personal-statements" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why This College Essays</h3>
                <p className="text-gray-600 mb-6">
                  Demonstrate your genuine interest and fit with specific universities. 
                  Show admissions officers why you belong at their institution.
                </p>
                <Link href="/use-cases/why-college-essays" className="text-purple-600 hover:text-purple-700 font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Extracurricular Essays</h3>
                <p className="text-gray-600 mb-6">
                  Highlight your leadership, passion, and impact through meaningful activities. 
                  Turn your experiences into compelling narratives.
                </p>
                <Link href="/use-cases/extracurricular-essays" className="text-green-600 hover:text-green-700 font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity Essays</h3>
                <p className="text-gray-600 mb-6">
                  Share your unique background, perspective, or experiences that contribute 
                  to campus diversity and community building.
                </p>
                <Link href="/use-cases/diversity-essays" className="text-yellow-600 hover:text-yellow-700 font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scholarship Essays</h3>
                <p className="text-gray-600 mb-6">
                  Craft compelling essays for merit-based and need-based scholarships. 
                  Maximize your chances of financial aid and recognition.
                </p>
                <Link href="/use-cases/scholarship-essays" className="text-red-600 hover:text-red-700 font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Graduate School Essays</h3>
                <p className="text-gray-600 mb-6">
                  Professional statements of purpose for master's and doctoral programs. 
                  Showcase your research interests and academic goals.
                </p>
                <Link href="/use-cases/graduate-school-essays" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works for College Essays */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Write Winning College Essays
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered process helps you create authentic, compelling college application essays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Story</h3>
              <p className="text-gray-600">
                Input your experiences, achievements, goals, and the specific college prompt. 
                Our AI analyzes what makes you unique and memorable.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Crafts Your Narrative</h3>
              <p className="text-gray-600">
                Advanced AI creates a compelling narrative that highlights your strengths, 
                addresses the prompt, and maintains your authentic voice.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Refine & Submit</h3>
              <p className="text-gray-600">
                Review, personalize, and polish your essay. Use our humanizer to ensure 
                it sounds natural and reflects your genuine personality.
              </p>
            </div>
          </div>
        </section>

        {/* College Essay Tips */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                College Essay Writing Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert advice to make your college application essays stand out
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Start with a Compelling Hook</h3>
                <p className="text-gray-600 mb-4">
                  Begin your essay with an engaging opening that immediately captures the reader's attention. 
                  Use a vivid scene, thought-provoking question, or surprising statement.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">Example:</p>
                  <p className="text-blue-700 italic">"The smell of burnt toast at 3 AM became my motivation to pursue engineering."</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Show, Don't Tell</h3>
                <p className="text-gray-600 mb-4">
                  Instead of simply stating your qualities, demonstrate them through specific examples and stories. 
                  Let your actions and experiences speak for themselves.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium">Instead of:</p>
                  <p className="text-green-700">"I am a natural leader."</p>
                  <p className="text-green-800 font-medium mt-2">Write:</p>
                  <p className="text-green-700">"When our debate team captain graduated, I organized weekly practice sessions and helped our team win regionals."</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Be Authentic and Personal</h3>
                <p className="text-gray-600 mb-4">
                  Admissions officers read thousands of essays. What makes yours memorable is your unique perspective, 
                  voice, and genuine experiences. Don't try to write what you think they want to hear.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Address the Prompt Directly</h3>
                <p className="text-gray-600 mb-4">
                  Make sure your essay clearly answers the question asked. While creativity is important, 
                  staying on topic and addressing all parts of the prompt is crucial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common App Prompts */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              2024-2025 Common Application Essay Prompts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from these seven prompts for your Common App personal statement
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 1: Background & Identity</h3>
              <p className="text-gray-600">Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 2: Learning from Obstacles</h3>
              <p className="text-gray-600">The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 3: Challenging a Belief</h3>
              <p className="text-gray-600">Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 4: Solving a Problem</h3>
              <p className="text-gray-600">Reflect on something that someone has done for you that has made you happy or thankful in a surprising way.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 5: Personal Growth</h3>
              <p className="text-gray-600">Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 6: Engaging Topic</h3>
              <p className="text-gray-600">Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
              <h3 className="font-semibold text-gray-900 mb-2">Prompt 7: Free Choice</h3>
              <p className="text-gray-600">Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Write Your College Essay?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully gained admission to their dream colleges 
              with compelling, authentic essays generated by our AI.
            </p>
            <AuthDialog>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                Start Your College Essay Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <PenTool className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Essayy</span>
                </div>
                <p className="text-gray-400">
                  AI-powered college essay writing platform for students worldwide.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">College Essays</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/use-cases/personal-statements" className="hover:text-white transition-colors">Personal Statements</Link></li>
                  <li><Link href="/use-cases/why-college-essays" className="hover:text-white transition-colors">Why This College</Link></li>
                  <li><Link href="/use-cases/scholarship-essays" className="hover:text-white transition-colors">Scholarship Essays</Link></li>
                  <li><Link href="/use-cases/diversity-essays" className="hover:text-white transition-colors">Diversity Essays</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog/college-essay-tips" className="hover:text-white transition-colors">Essay Writing Tips</Link></li>
                  <li><Link href="/blog/common-app-guide" className="hover:text-white transition-colors">Common App Guide</Link></li>
                  <li><Link href="/blog/college-admissions" className="hover:text-white transition-colors">Admissions Advice</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Essayy. All rights reserved. College Application Essay Writer.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 