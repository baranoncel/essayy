import Link from 'next/link'
import { ArrowRight, PenTool, Eye, CheckCircle, Palette, Camera, Sparkles } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descriptive Essay Writer | AI Descriptive Writing Generator - Essayy',
  description: 'Generate vivid descriptive essays that paint pictures with words. Our AI descriptive essay writer creates rich sensory details and immersive descriptions.',
  keywords: 'descriptive essay writer, descriptive writing generator, sensory writing AI, vivid descriptions, imagery writing, creative descriptions',
  openGraph: {
    title: 'Descriptive Essay Writer | AI Descriptive Writing Generator - Essayy',
    description: 'Generate vivid descriptive essays that paint pictures with words using rich sensory details.',
    url: 'https://essayy.com/use-cases/descriptive-essays',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://essayy.com/use-cases/descriptive-essays',
  },
}

export default function DescriptiveEssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Essayy</span>
          </Link>
          <AuthDialog>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Start Describing
            </button>
          </AuthDialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Eye className="h-16 w-16 text-pink-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Descriptive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Essay Writer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Paint vivid pictures with words using our AI descriptive essay writer. Create immersive descriptions 
            that engage all five senses and transport readers to any place, time, or experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <AuthDialog>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Generate Descriptive Essay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </AuthDialog>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Sensory Details
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Vivid Imagery
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Immersive Experience
            </div>
          </div>
        </div>
      </section>

      {/* Five Senses */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Engage All Five Senses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI creates rich sensory descriptions that make readers feel like they're experiencing your subject firsthand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual (Sight)</h3>
              <p className="text-gray-600 mb-6">
                Create vivid visual imagery using colors, shapes, sizes, and spatial relationships. 
                Help readers see exactly what you're describing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Colors and lighting</li>
                <li>• Shapes and forms</li>
                <li>• Size and scale</li>
                <li>• Movement and action</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auditory (Sound)</h3>
              <p className="text-gray-600 mb-6">
                Incorporate sounds, music, voices, and ambient noise to create an audio landscape 
                that complements your visual descriptions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Natural sounds</li>
                <li>• Human voices</li>
                <li>• Musical elements</li>
                <li>• Ambient noise</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tactile (Touch)</h3>
              <p className="text-gray-600 mb-6">
                Describe textures, temperatures, and physical sensations to make your descriptions 
                more tangible and relatable.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Textures and surfaces</li>
                <li>• Temperature variations</li>
                <li>• Physical sensations</li>
                <li>• Material properties</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-6">
                <Palette className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Olfactory (Smell)</h3>
              <p className="text-gray-600 mb-6">
                Include scents and aromas that trigger memories and emotions, adding depth 
                to your descriptive writing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Natural aromas</li>
                <li>• Food scents</li>
                <li>• Environmental odors</li>
                <li>• Memory-triggering smells</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                <Sparkles className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gustatory (Taste)</h3>
              <p className="text-gray-600 mb-6">
                Describe flavors and taste sensations to create a complete sensory experience, 
                especially when writing about food or cultural experiences.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Flavor profiles</li>
                <li>• Taste combinations</li>
                <li>• Food textures</li>
                <li>• Cultural cuisines</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <Eye className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Resonance</h3>
              <p className="text-gray-600 mb-6">
                Connect sensory details to emotions and memories, creating descriptions that 
                resonate on a deeper level with readers.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emotional connections</li>
                <li>• Memory associations</li>
                <li>• Mood creation</li>
                <li>• Atmospheric feelings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Descriptive Essay Types */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Types of Descriptive Essays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate descriptive essays for various subjects and purposes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Place Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Describe locations, landscapes, buildings, or rooms in vivid detail. Transport readers 
              to specific places through rich sensory descriptions.
            </p>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="text-pink-800 font-medium">Example Topics:</p>
              <p className="text-pink-700">• Your childhood home • A favorite vacation spot • A bustling marketplace • A peaceful garden</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Person Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Create detailed portraits of people, focusing on physical appearance, personality traits, 
              mannerisms, and the impression they make on others.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Object Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Describe objects in detail, exploring their physical properties, significance, 
              and the emotions or memories they evoke.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Describe events, activities, or experiences using sensory details to help readers 
              feel like they're participating in the moment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Seasonal & Weather Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Capture the essence of seasons, weather patterns, and natural phenomena through 
              detailed sensory observations and atmospheric descriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Techniques */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Descriptive Writing Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master advanced techniques to create compelling descriptive essays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Figurative Language</h3>
              <p className="text-gray-600 mb-4">
                Use metaphors, similes, personification, and other literary devices to create 
                vivid and memorable descriptions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Metaphors and similes</li>
                <li>• Personification</li>
                <li>• Hyperbole for emphasis</li>
                <li>• Symbolism and imagery</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spatial Organization</h3>
              <p className="text-gray-600 mb-4">
                Organize your descriptions logically using spatial patterns like top to bottom, 
                left to right, or near to far.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Top to bottom progression</li>
                <li>• Left to right movement</li>
                <li>• Near to far perspective</li>
                <li>• Inside to outside flow</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specific Details</h3>
              <p className="text-gray-600 mb-4">
                Use concrete, specific details rather than vague generalizations to create 
                clear and memorable images in readers' minds.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 font-medium">Instead of: "The flower was beautiful."</p>
                <p className="text-gray-700">Write: "The crimson rose petals felt like velvet against my fingertips, releasing a sweet, intoxicating fragrance."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mood and Atmosphere</h3>
              <p className="text-gray-600 mb-4">
                Create specific moods and atmospheres through careful word choice, 
                sensory details, and descriptive language.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Word choice for mood</li>
                <li>• Atmospheric details</li>
                <li>• Emotional undertones</li>
                <li>• Consistent tone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Paint with Words?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Create vivid descriptive essays that transport readers to new worlds through rich sensory details. 
            Master the art of descriptive writing with our AI-powered assistant.
          </p>
          <AuthDialog>
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Generate Descriptive Essay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </section>
    </div>
  )
} 