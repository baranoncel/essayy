import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { AuthDialog } from '@/components/auth/AuthDialog'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans | AI Essay Writer & Generator - Essayy',
  description: 'Choose the perfect plan for your essay writing needs. Free AI essay generator with premium features available. Affordable pricing for students, educators, and professionals.',
  keywords: 'essay writer pricing, AI writing plans, student discounts, academic writing subscription, essay generator cost, writing tool pricing',
  openGraph: {
    title: 'Pricing Plans | AI Essay Writer & Generator - Essayy',
    description: 'Choose the perfect plan for your essay writing needs. Free AI essay generator with premium features available.',
    url: 'https://essayy.com/pricing',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans | AI Essay Writer & Generator - Essayy',
    description: 'Choose the perfect plan for your essay writing needs. Free AI essay generator with premium features available.',
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
    canonical: 'https://essayy.com/pricing',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Essayy Pricing Plans',
  description: 'Pricing plans for AI essay writing and academic content generation services',
  url: 'https://essayy.com/pricing',
  mainEntity: {
    '@type': 'Product',
    name: 'Essayy AI Essay Writer',
    description: 'AI-powered essay writing platform for students and educators',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Plan',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '9.99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'RecurringCharge',
          price: '9.99',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Premium Plan',
        price: '19.99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'RecurringCharge',
          price: '19.99',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
        },
        availability: 'https://schema.org/InStock',
      },
    ],
  },
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <GlobalNavigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your essay writing needs. Start free and upgrade as you grow. 
              All plans include our core AI essay writing features with no hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Cancel Anytime
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Student Discounts Available
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $0
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">5 essays per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Basic essay types</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Up to 1,000 words</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AI content detector</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Basic grammar check</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              
              <AuthDialog>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Get Started Free
                </button>
              </AuthDialog>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $9.99
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For serious students</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">50 essays per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">All essay types</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Up to 5,000 words</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AI humanizer</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Plagiarism checker</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Citation generator</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced grammar check</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              
              <AuthDialog>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Start Pro Trial
                </button>
              </AuthDialog>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $19.99
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For professionals & teams</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited essays</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">All essay types & formats</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited word count</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced AI humanizer</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Premium plagiarism checker</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">All citation styles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Research assistant</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 priority support</span>
                </li>
              </ul>
              
              <AuthDialog>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Start Premium Trial
                </button>
              </AuthDialog>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Compare All Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See what's included in each plan to choose the best option for your needs
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center p-6 font-semibold text-gray-900">Free</th>
                    <th className="text-center p-6 font-semibold text-blue-600">Pro</th>
                    <th className="text-center p-6 font-semibold text-purple-600">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">Essays per month</td>
                    <td className="p-6 text-center text-gray-600">5</td>
                    <td className="p-6 text-center text-gray-600">50</td>
                    <td className="p-6 text-center text-gray-600">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">Maximum word count</td>
                    <td className="p-6 text-center text-gray-600">1,000</td>
                    <td className="p-6 text-center text-gray-600">5,000</td>
                    <td className="p-6 text-center text-gray-600">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">AI Essay Writer</td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">AI Humanizer</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">Plagiarism Checker</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">Citation Generator</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-700">Research Assistant</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-700">Support</td>
                    <td className="p-6 text-center text-gray-600">Email</td>
                    <td className="p-6 text-center text-gray-600">Priority</td>
                    <td className="p-6 text-center text-gray-600">24/7 Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and features
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Is there a free trial for paid plans?</h3>
              <p className="text-gray-600">
                Yes! We offer a 7-day free trial for both Pro and Premium plans. You can cancel anytime during the trial period without being charged.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">
                Absolutely! You can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you offer student discounts?</h3>
              <p className="text-gray-600">
                Yes! Students with a valid .edu email address can get 50% off any paid plan. Contact our support team to verify your student status and apply the discount.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Is my content secure and private?</h3>
              <p className="text-gray-600">
                Yes! We use enterprise-grade encryption to protect your data. Your essays and personal information are never shared with third parties, and you can delete your content at any time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Writing Better Essays?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who trust Essayy for their academic writing needs. 
              Start with our free plan and upgrade when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AuthDialog>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </AuthDialog>
              <Link href="/features/essay-writer" className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
                View Features
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
} 