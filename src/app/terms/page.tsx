import Link from 'next/link'
import { FileText, AlertTriangle, Shield, Users, CheckCircle, XCircle } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 mx-auto">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Service</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully. They govern your use of our platform and services.
          </p>
          <p className="text-sm text-gray-500">Last updated: December 15, 2024</p>
        </div>
      </section>

      {/* Key Points */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">What You Can Do</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Use our AI tools for educational purposes</li>
                <li>• Generate essays and academic content</li>
                <li>• Access plagiarism and AI detection features</li>
                <li>• Create citations and bibliographies</li>
                <li>• Share feedback and suggestions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">What You Cannot Do</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Submit generated content without disclosure</li>
                <li>• Use our service for illegal activities</li>
                <li>• Attempt to reverse engineer our AI models</li>
                <li>• Violate academic integrity policies</li>
                <li>• Share your account with others</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-gray-600 mb-8">
                By accessing or using Essayy ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of these terms, then you may not access the Service. These Terms apply to all visitors, 
                users, and others who access or use the Service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              
              <p className="text-gray-600 mb-4">
                Essayy is an AI-powered educational platform that provides:
              </p>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• AI essay generation tools</li>
                <li>• AI content detection services</li>
                <li>• Plagiarism checking capabilities</li>
                <li>• Citation and bibliography generators</li>
                <li>• Grammar and style checking tools</li>
                <li>• Educational resources and writing guides</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Requirements</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• You must be at least 13 years old to use our service</li>
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for safeguarding your account credentials</li>
                  <li>• You must notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Academic Integrity and Responsible Use</h2>
              
              <div className="bg-yellow-50 p-6 rounded-xl mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice</h3>
                    <p className="text-gray-600 mb-4">
                      Our tools are designed to assist with learning and writing. Users are responsible for ensuring their use 
                      complies with their institution's academic integrity policies.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Always check your institution's AI usage policies</li>
                      <li>• Disclose AI assistance when required</li>
                      <li>• Use our tools as learning aids, not replacements for your own work</li>
                      <li>• Properly cite all sources and references</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Acceptable Use Policy</h2>
              
              <p className="text-gray-600 mb-4">You agree not to use our service to:</p>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• Generate content for illegal, harmful, or fraudulent purposes</li>
                <li>• Create misleading, false, or defamatory content</li>
                <li>• Violate any applicable laws or regulations</li>
                <li>• Infringe on intellectual property rights</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Interfere with or disrupt our service</li>
                <li>• Use our service for commercial purposes without permission</li>
                <li>• Create multiple accounts to circumvent usage limits</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Content and Intellectual Property</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Content</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• You retain ownership of content you create</li>
                    <li>• You grant us license to process your content</li>
                    <li>• You're responsible for content legality</li>
                    <li>• We may remove inappropriate content</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Content</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• We own our platform and technology</li>
                    <li>• Our content is protected by copyright</li>
                    <li>• Limited license granted for personal use</li>
                    <li>• No reverse engineering allowed</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy and Data Protection</h2>
              
              <p className="text-gray-600 mb-8">
                Your privacy is important to us. Our <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link> explains 
                how we collect, use, and protect your information. By using our service, you consent to our data practices as described in our Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Service Availability and Modifications</h2>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service</li>
                <li>• We may temporarily suspend service for maintenance or updates</li>
                <li>• We reserve the right to modify or discontinue features with notice</li>
                <li>• We may impose usage limits to ensure fair access for all users</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Disclaimers and Limitations</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Disclaimer</h3>
                <p className="text-gray-600 mb-4">
                  Our service is provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Accuracy or quality of AI-generated content</li>
                  <li>• Detection of all plagiarism or AI content</li>
                  <li>• Compliance with specific academic standards</li>
                  <li>• Uninterrupted or error-free operation</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>
              
              <p className="text-gray-600 mb-8">
                To the maximum extent permitted by law, Essayy shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, data, or academic standing, 
                arising from your use of our service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Termination</h2>
              
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>• You may terminate your account at any time</li>
                <li>• We may terminate or suspend your account for violations of these Terms</li>
                <li>• Upon termination, your right to use the service ceases immediately</li>
                <li>• Data retention is governed by our Privacy Policy</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Governing Law and Disputes</h2>
              
              <p className="text-gray-600 mb-8">
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                without regard to its conflict of law principles. Any disputes arising from these Terms or your use of our service 
                shall be resolved through binding arbitration or in the courts of [Jurisdiction].
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>
              
              <p className="text-gray-600 mb-8">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via email 
                or through our platform. Your continued use of the service after such modifications constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact Information</h2>
              
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Email:</strong> legal@essayy.com</li>
                  <li>• <strong>Support:</strong> Visit our <Link href="/contact" className="text-blue-600 hover:text-blue-700">contact page</Link></li>
                  <li>• <strong>Mail:</strong> Legal Department, Essayy Inc.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most important points to remember about using our service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Responsibly</h3>
              <p className="text-gray-600">
                Our tools are designed to assist with learning. Always follow your institution's academic integrity policies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Compliant</h3>
              <p className="text-gray-600">
                Check your school's AI usage policies and always disclose AI assistance when required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn and Grow</h3>
              <p className="text-gray-600">
                Use our platform as a learning tool to improve your writing skills and academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 