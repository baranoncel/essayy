import Link from 'next/link'
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Essayy | Get Help with AI Essay Writing Tools - Support',
  description: 'Contact Essayy for support with our AI essay writer, plagiarism detector, and citation generator. 24/7 customer support, FAQs, and live chat available.',
  keywords: 'contact essayy, customer support, AI essay writer help, technical support, live chat, FAQ, help center, essayy support, essay writing assistance',
  openGraph: {
    title: 'Contact Essayy | Get Help with AI Essay Writing Tools',
    description: 'Contact Essayy for support with our AI essay writer, plagiarism detector, and citation generator. 24/7 customer support available.',
    url: 'https://essayy.com/contact',
    siteName: 'Essayy',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Essayy - Customer Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Essayy | Get Help with AI Essay Writing Tools',
    description: 'Contact Essayy for support with our AI essay writer, plagiarism detector, and citation generator.',
    images: ['/og-contact.jpg'],
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
    canonical: 'https://essayy.com/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Essayy',
  description: 'Contact information and support for Essayy AI essay writing platform',
  url: 'https://essayy.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Essayy',
    url: 'https://essayy.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@essayy.com',
      contactType: 'Customer Support',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
      hoursAvailable: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday', 
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: '00:00',
          closes: '23:59'
        }
      ]
    }
  }
}

export default function ContactPage() {
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
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have questions about our platform, need support, or want to share feedback? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">support@essayy.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                        <p className="text-gray-600">Available 24/7</p>
                        <p className="text-sm text-gray-500">Get instant help with our chat widget</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                        <p className="text-gray-600">Within 24 hours</p>
                        <p className="text-sm text-gray-500">Usually much faster during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
                  <div className="space-y-4">
                    <Link href="/faq" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <h3 className="font-medium text-gray-900 mb-1">Frequently Asked Questions</h3>
                      <p className="text-sm text-gray-600">Find answers to common questions</p>
                    </Link>
                    
                    <Link href="/help" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <h3 className="font-medium text-gray-900 mb-1">Help Center</h3>
                      <p className="text-sm text-gray-600">Browse our comprehensive guides</p>
                    </Link>
                    
                    <Link href="/tutorials" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <h3 className="font-medium text-gray-900 mb-1">Video Tutorials</h3>
                      <p className="text-sm text-gray-600">Watch step-by-step guides</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Forum</h3>
                <p className="text-gray-600 mb-6">
                  Join our community of writers and get help from other users.
                </p>
                <Link href="/community" className="text-blue-600 hover:text-blue-700 font-medium">
                  Visit Forum →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to get updates and tips delivered to your inbox.
                </p>
                <Link href="/newsletter" className="text-green-600 hover:text-green-700 font-medium">
                  Subscribe →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Follow us for updates, tips, and community highlights.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-purple-600 hover:text-purple-700">Twitter</a>
                  <a href="#" className="text-purple-600 hover:text-purple-700">Facebook</a>
                  <a href="#" className="text-purple-600 hover:text-purple-700">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We're a global team dedicated to making quality education accessible to everyone. 
                    Our AI-powered writing tools help students worldwide achieve their academic goals.
                  </p>
                  <p className="text-gray-600">
                    Based in the heart of the tech industry, we combine cutting-edge AI technology 
                    with educational expertise to create tools that truly make a difference in students' lives.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Presence</h3>
                  <p className="text-gray-600">
                    Serving students in over 150 countries worldwide with 24/7 support and multilingual assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
} 