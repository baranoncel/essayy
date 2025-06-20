'use client'

import Link from 'next/link'
import { Mail, Twitter, Facebook, Linkedin, Github, Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-800 font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold">Essayy</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              AI-powered writing tools that help students succeed academically while maintaining academic integrity.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/essayy" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-300 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/essayy" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-300 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/essayy" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-300 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/essayy" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-300 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features/essay-writer" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Essay Writer
                </Link>
              </li>
              <li>
                <Link href="/features/ai-content-detector" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  AI Content Detector
                </Link>
              </li>
              <li>
                <Link href="/features/ai-humanizer" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  AI Humanizer
                </Link>
              </li>
              <li>
                <Link href="/features/plagiarism-checker" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Plagiarism Checker
                </Link>
              </li>
              <li>
                <Link href="/features/citation-generator" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Citation Generator
                </Link>
              </li>
              <li>
                <Link href="/features/grammar-checker" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Grammar Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Use Cases</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/use-cases/argumentative-essays" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Argumentative Essays
                </Link>
              </li>
              <li>
                <Link href="/use-cases/research-papers" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/use-cases/college-essays" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  College Essays
                </Link>
              </li>
              <li>
                <Link href="/use-cases/analytical-essays" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Analytical Essays
                </Link>
              </li>
              <li>
                <Link href="/use-cases/persuasive-essays" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Persuasive Essays
                </Link>
              </li>
              <li>
                <Link href="/use-cases/narrative-essays" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Narrative Essays
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-6 mt-8">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300">
                  Tutorials
                </Link>
              </li>
              <li>
                <a href="mailto:support@essayy.com" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-200 hover:to-white transition-all duration-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-tight">
                <span className="font-medium">Free AI Essay Writer & Generator:</span> Essayy is the leading free AI essay writer and generator using GPT-4 technology. Create argumentative essays, research papers, persuasive essays, narrative essays, descriptive essays, analytical essays, compare and contrast essays, cause and effect essays, expository essays, and critical analysis papers for college, university, and high school students. 
                <span className="font-medium">AI Content Detection & Humanization:</span> Advanced AI content detector with 99% accuracy, AI humanizer for natural writing, bypass AI detection tools like Turnitin, GPTZero, and Originality.ai. Plagiarism checker and citation generator included. 
                <span className="font-medium">Academic Writing Tools:</span> APA citation generator, MLA format guide, Chicago style references, Harvard citation maker, grammar checker, paraphrasing tool, research assistant for thesis writing, dissertation help, and scholarly research papers. 
                <span className="font-medium">Essay Types & Services:</span> College admission essays, scholarship essays, homework help, essay writing assistance, academic support tools for English literature, history, science, business, psychology, sociology, and all academic disciplines. Professional AI writing assistant for academic success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Essayy. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 transition-all duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 transition-all duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 transition-all duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for students
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-300 hover:to-gray-500 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 