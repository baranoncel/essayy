import type { Metadata } from 'next'
import Link from 'next/link'
import { PenTool, FileText, Shield, Zap, Home, BookOpen } from 'lucide-react'
import { UserAvatar } from '@/components/auth/UserAvatar'

export const metadata: Metadata = {
  title: 'Essayy App',
  description: 'AI-powered essay writing platform',
}

const navigation = [
  { name: 'Dashboard', href: '/app', icon: Home },
  { name: 'New Essay', href: '/app/essay/new', icon: PenTool },
  { name: 'Length Guide', href: '/app/essay/length-guide', icon: BookOpen },
  { name: 'AI Detector', href: '/app/detector', icon: Shield },
  { name: 'AI Humanizer', href: '/app/humanizer', icon: Zap },
  { name: 'History', href: '/app/history', icon: FileText },
]

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg flex flex-col">
        <div className="flex h-16 items-center px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-gray-600" />
            <span className="text-xl font-bold text-gray-900">Essayy</span>
          </Link>
        </div>
        
        <nav className="mt-6 px-3 flex-1">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Avatar at bottom */}
        <div className="border-t border-gray-200 p-3">
          <UserAvatar />
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
} 