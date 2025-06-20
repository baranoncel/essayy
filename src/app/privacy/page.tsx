import Link from 'next/link'
import { Shield, Eye, Lock, UserCheck, Database, Globe } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 mx-auto">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500">Last updated: December 15, 2024</p>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Encryption</h3>
              <p className="text-gray-600">
                All your data is encrypted in transit and at rest using industry-standard encryption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Selling Data</h3>
              <p className="text-gray-600">
                We never sell your personal information to third parties. Your data stays private.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Transparency</h3>
              <p className="text-gray-600">
                Clear information about what data we collect and how we use it for our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information You Provide</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Account information (email address, name) when you create an account</li>
                <li>• Essay content and writing preferences you submit to our platform</li>
                <li>• Communication data when you contact our support team</li>
                <li>• Feedback and survey responses you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• Usage data about how you interact with our platform</li>
                <li>• Device information (browser type, operating system)</li>
                <li>• IP address and approximate location for security purposes</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Generate essays and content</li>
                    <li>• Provide AI detection services</li>
                    <li>• Check for plagiarism</li>
                    <li>• Generate citations</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Improvement</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Analyze usage patterns</li>
                    <li>• Improve AI algorithms</li>
                    <li>• Fix bugs and issues</li>
                    <li>• Develop new features</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
              
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
              </p>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• <strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (hosting, analytics, customer support)</li>
                <li>• <strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li>• <strong>Safety and Security:</strong> To protect our users, platform, or others from fraud or harmful activities</li>
                <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with advance notice)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Encryption:</strong> All data is encrypted in transit (HTTPS) and at rest</li>
                  <li>• <strong>Access Controls:</strong> Strict access controls and authentication requirements</li>
                  <li>• <strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
                  <li>• <strong>Monitoring:</strong> 24/7 monitoring for suspicious activities</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Control</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• View your personal data</li>
                    <li>• Update account information</li>
                    <li>• Download your data</li>
                    <li>• Delete your account</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Preferences</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Manage cookie preferences</li>
                    <li>• Opt out of marketing emails</li>
                    <li>• Control data processing</li>
                    <li>• Request data correction</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• <strong>Essential Cookies:</strong> Required for platform functionality and security</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li>• <strong>Marketing Cookies:</strong> Used to show relevant content (opt-out available)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              
              <p className="text-gray-600 mb-8">
                We retain your personal information only as long as necessary to provide our services and fulfill legal obligations. 
                Essay content is typically stored for 30 days to allow you to access your work, after which it may be anonymized or deleted. 
                Account information is retained until you choose to delete your account.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              
              <p className="text-gray-600 mb-8">
                Our services are provided globally, and your data may be processed in countries other than your own. 
                We ensure appropriate safeguards are in place for international data transfers, including standard contractual clauses 
                and adequacy decisions where applicable.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              
              <p className="text-gray-600 mb-8">
                Our platform is designed for users 13 years and older. We do not knowingly collect personal information from children under 13. 
                If we become aware that we have collected such information, we will take steps to delete it promptly. 
                Users between 13-17 should have parental guidance when using our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-8">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes by email or through our platform. Your continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Email:</strong> privacy@essayy.com</li>
                  <li>• <strong>Support:</strong> Visit our <Link href="/contact" className="text-blue-600 hover:text-blue-700">contact page</Link></li>
                  <li>• <strong>Mail:</strong> Privacy Officer, Essayy Inc.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to protecting your privacy and being transparent about our practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR Compliant</h3>
              <p className="text-gray-600">
                We comply with GDPR and other international privacy regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Standards</h3>
              <p className="text-gray-600">
                We follow international best practices for data protection and privacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Audits</h3>
              <p className="text-gray-600">
                Our privacy practices are regularly reviewed and audited by third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 