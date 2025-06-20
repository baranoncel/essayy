import Link from 'next/link'
import { PenTool } from 'lucide-react'
import { AuthStatus } from '@/components/auth/AuthStatus'

export function GlobalNavigation() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PenTool className="h-8 w-8 text-gray-600" />
          <span className="text-2xl font-bold text-gray-900">Essayy</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              Use Cases
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link href="/use-cases/college-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">College Application Essays</Link>
                <Link href="/use-cases/research-papers" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Research Papers</Link>
                <Link href="/use-cases/argumentative-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Argumentative Essays</Link>
                <Link href="/use-cases/persuasive-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Persuasive Essays</Link>
                <Link href="/use-cases/analytical-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Analytical Essays</Link>
                <Link href="/use-cases/narrative-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Narrative Essays</Link>
                <Link href="/use-cases/descriptive-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Descriptive Essays</Link>
                <Link href="/use-cases/compare-contrast" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Compare & Contrast</Link>
                <Link href="/use-cases/cause-effect" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Cause & Effect Essays</Link>
                <Link href="/use-cases/expository-essays" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Expository Essays</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              Features
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link href="/features/essay-writer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">AI Essay Writer</Link>
                <Link href="/features/ai-humanizer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">AI Humanizer</Link>
                <Link href="/features/ai-content-detector" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">AI Content Detector</Link>
                <Link href="/features/plagiarism-checker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Plagiarism Checker</Link>
                <Link href="/features/citation-generator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Citation Generator</Link>
                <Link href="/features/grammar-checker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Grammar Checker</Link>
              </div>
            </div>
          </div>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </nav>
        <AuthStatus />
      </div>
    </header>
  )
} 