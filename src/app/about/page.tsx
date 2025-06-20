import Link from 'next/link'
import { Users, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Essayy | AI Essay Writing Platform Mission & Story - Essayy',
  description: 'Learn about Essayy\'s mission to democratize education through free AI writing tools. Discover our story, values, and commitment to helping 50,000+ students succeed academically.',
  keywords: 'about essayy, AI writing platform, educational technology, student writing assistance, academic writing tools, essay writing help, AI education platform, free writing tools, student success, academic integrity',
  openGraph: {
    title: 'About Essayy | AI Essay Writing Platform Mission & Story',
    description: 'Learn about Essayy\'s mission to democratize education through free AI writing tools. 50,000+ students helped with 250,000+ essays generated.',
    url: 'https://essayy.com/about',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Essayy - AI Essay Writing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Essayy | AI Essay Writing Platform Mission & Story',
    description: 'Learn about Essayy\'s mission to democratize education through free AI writing tools.',
    images: ['/og-about.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://essayy.com/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Essayy',
  description: 'Learn about Essayy\'s mission to democratize education through free AI writing tools',
  url: 'https://essayy.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Essayy',
    url: 'https://essayy.com',
    logo: 'https://essayy.com/logo.png',
    description: 'AI-powered essay writing platform providing free educational tools for students worldwide',
    foundingDate: '2024',
    mission: 'To democratize quality education by providing free, AI-powered writing tools that help students succeed academically',
    numberOfEmployees: '10-50',
    industry: 'Educational Technology',
    sameAs: [
      'https://twitter.com/essayy_ai',
      'https://linkedin.com/company/essayy'
    ]
  }
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Essayy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize quality education by providing free, AI-powered writing tools that help students succeed academically.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Essayy, we believe that every student deserves access to high-quality writing assistance, regardless of their background or financial situation. Our AI-powered platform provides free tools that help students improve their writing, learn academic standards, and achieve their educational goals.
                </p>
                <p className="text-lg text-gray-600">
                  We're committed to maintaining academic integrity while providing valuable learning resources that enhance students' understanding of effective writing techniques and academic conventions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                    <div className="text-gray-600">Students Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">250,000+</div>
                    <div className="text-gray-600">Essays Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Free to Use</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                    <div className="text-gray-600">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Making quality education tools available to all students, regardless of their financial situation.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Promoting academic honesty while providing tools that enhance learning and understanding.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our AI technology to provide better, more helpful writing assistance.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Student-First</h3>
                <p className="text-gray-600">
                  Everything we build is designed with students' educational success and growth in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                How we started and where we're going
              </p>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Essayy was founded in 2024 by a team of educators and technologists who recognized the growing need for accessible, high-quality writing assistance in education. We saw students struggling with writing assignments, not because they lacked ideas or intelligence, but because they needed guidance on structure, style, and academic conventions.
              </p>
              
              <p>
                Traditional writing assistance was either too expensive for many students or provided generic feedback that didn't help them learn. We decided to change that by creating AI-powered tools that not only help students complete their assignments but also teach them valuable writing skills in the process.
              </p>
              
              <p>
                Today, Essayy serves over 50,000 students worldwide, providing free access to essay generation, AI detection, plagiarism checking, and citation tools. Our platform has helped generate over 250,000 essays while maintaining a commitment to academic integrity and educational value.
              </p>
              
              <p>
                We're just getting started. Our vision is to become the world's leading platform for AI-assisted education, helping millions of students achieve their academic goals while learning essential skills for their future careers.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Essayy?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What makes us different from other writing platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Always Free</h3>
                <p className="text-gray-600 mb-4">
                  Our core tools will always be free. We believe education should be accessible to everyone.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No hidden fees</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No credit card required</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited usage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Focus</h3>
                <p className="text-gray-600 mb-4">
                  We're educators first, technologists second. Everything is designed to help you learn.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Learning-oriented design</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Academic standards</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Skill development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Technology</h3>
                <p className="text-gray-600 mb-4">
                  Powered by the latest AI models to provide the most accurate and helpful assistance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />GPT-4 powered</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Constantly updated</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High accuracy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our mission or want to learn more? We'd love to hear from you.
            </p>
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Contact Us
            </Link>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
} 