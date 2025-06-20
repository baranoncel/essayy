import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle, Heart, Camera, Feather } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Narrative Essay Writer | AI Personal Story Generator - Essayy',
  description: 'Generate compelling narrative essays and personal stories. Our AI narrative essay writer creates engaging stories with vivid details, character development, and meaningful themes.',
  keywords: 'narrative essay writer, personal story generator, storytelling AI, narrative writing, creative writing, personal narrative',
  openGraph: {
    title: 'Narrative Essay Writer | AI Personal Story Generator - Essayy',
    description: 'Generate compelling narrative essays and personal stories with vivid details and meaningful themes.',
    url: 'https://essayy.com/use-cases/narrative-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/narrative-essays',
  },
}

export default function NarrativeEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
              <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 text-orange-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Narrative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create compelling personal stories and narrative essays that captivate readers. Our AI narrative essay writer 
            helps you craft engaging stories with vivid details, character development, and meaningful themes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Narrative Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Vivid Storytelling
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Character Development
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Meaningful Themes
            </div>
          </div>
        </div>
      </section>

      {/* Story Elements */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Essential Elements of Great Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI incorporates all key storytelling elements to create engaging narratives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vivid Setting</h3>
              <p className="text-gray-600 mb-6">
                Create immersive environments that transport readers to specific times and places. 
                Use sensory details to make settings come alive.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Time and place description</li>
                <li>• Sensory details</li>
                <li>• Atmospheric elements</li>
                <li>• Environmental context</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Character Development</h3>
              <p className="text-gray-600 mb-6">
                Develop relatable characters with distinct personalities, motivations, and growth arcs. 
                Show character through actions and dialogue.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Character traits</li>
                <li>• Motivations and goals</li>
                <li>• Character growth</li>
                <li>• Realistic dialogue</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Feather className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engaging Plot</h3>
              <p className="text-gray-600 mb-6">
                Structure your story with clear beginning, middle, and end. Include conflict, 
                rising action, climax, and resolution to maintain reader interest.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Story arc structure</li>
                <li>• Conflict development</li>
                <li>• Pacing and tension</li>
                <li>• Satisfying resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Point of View</h3>
              <p className="text-gray-600 mb-6">
                Choose the most effective narrative perspective (first person, third person) 
                to tell your story and maintain consistency throughout.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• First person narrative</li>
                <li>• Third person perspective</li>
                <li>• Consistent voice</li>
                <li>• Narrative reliability</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme & Meaning</h3>
              <p className="text-gray-600 mb-6">
                Weave meaningful themes throughout your narrative that resonate with readers 
                and provide deeper significance to your story.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Central themes</li>
                <li>• Life lessons</li>
                <li>• Universal truths</li>
                <li>• Emotional resonance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <Camera className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Descriptive Language</h3>
              <p className="text-gray-600 mb-6">
                Use rich, descriptive language that appeals to all five senses. 
                Create vivid imagery that helps readers visualize and experience your story.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Sensory descriptions</li>
                <li>• Figurative language</li>
                <li>• Vivid imagery</li>
                <li>• Emotional language</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Essay Types */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Types of Narrative Essays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate different types of narrative essays for various purposes and audiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Experience Essays</h3>
            <p className="text-gray-600 mb-4">
              Share meaningful personal experiences that shaped your perspective, taught valuable lessons, 
              or marked important moments in your life.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 font-medium">Example Topics:</p>
              <p className="text-orange-700">• A moment that changed your perspective • Overcoming a fear • Learning from failure • A meaningful friendship</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Coming-of-Age Stories</h3>
            <p className="text-gray-600 mb-4">
              Explore moments of growth, transition, and self-discovery. These stories often focus on 
              the journey from childhood to adulthood or significant life transitions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Family and Relationship Stories</h3>
            <p className="text-gray-600 mb-4">
              Tell stories about family dynamics, relationships, and the people who have influenced your life. 
              Focus on connections, conflicts, and emotional bonds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievement and Challenge Stories</h3>
            <p className="text-gray-600 mb-4">
              Narrate stories of accomplishment, perseverance, and overcoming obstacles. 
              Show the journey, struggles, and ultimate success or learning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cultural and Identity Stories</h3>
            <p className="text-gray-600 mb-4">
              Explore themes of cultural identity, heritage, and belonging. Share experiences that 
              highlight your background, traditions, or cultural discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Techniques */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Narrative Writing Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master advanced storytelling techniques to create compelling narratives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Show, Don't Tell</h3>
              <p className="text-gray-600 mb-4">
                Use specific actions, dialogue, and sensory details to show what happened 
                rather than simply stating facts or emotions.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 font-medium">Instead of: "I was nervous."</p>
                <p className="text-gray-700">Write: "My hands trembled as I reached for the doorknob, and my heart pounded so loudly I was sure everyone could hear it."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dialogue and Voice</h3>
              <p className="text-gray-600 mb-4">
                Use realistic dialogue to reveal character personalities and advance the story. 
                Maintain a consistent narrative voice throughout.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Natural conversation flow</li>
                <li>• Character-specific speech patterns</li>
                <li>• Dialogue tags and action</li>
                <li>• Consistent narrative voice</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pacing and Structure</h3>
              <p className="text-gray-600 mb-4">
                Control the rhythm of your story through sentence length, paragraph structure, 
                and the balance between action and reflection.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Varied sentence structure</li>
                <li>• Strategic paragraph breaks</li>
                <li>• Action vs. reflection balance</li>
                <li>• Tension building</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reflection and Insight</h3>
              <p className="text-gray-600 mb-4">
                Include moments of reflection that reveal the significance of events and 
                show how experiences changed or influenced you.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Meaningful insights</li>
                <li>• Personal growth moments</li>
                <li>• Lessons learned</li>
                <li>• Universal connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Tell Your Story?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Create compelling narrative essays that captivate readers and share meaningful experiences. 
            Bring your stories to life with our AI-powered narrative writing assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Narrative Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 