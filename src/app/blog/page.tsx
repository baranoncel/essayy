import Link from 'next/link'
import { Calendar, User, ArrowRight, BookOpen, PenTool, Lightbulb } from 'lucide-react'
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation'
import { Footer } from '@/components/navigation/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Writing Blog | Tips, Guides & AI Writing Resources 2025 | Essayy',
  description: 'Expert essay writing tips, AI writing guides, citation help, and academic resources. Learn argumentative essay writing, APA/MLA formatting, and ethical AI use for students.',
  keywords: 'essay writing blog, writing tips, AI writing guide, citation styles, argumentative essay, academic writing, essay help, writing resources, student blog, education content',
  openGraph: {
    title: 'Essay Writing Blog | Tips, Guides & AI Writing Resources 2025',
    description: 'Expert essay writing tips, AI writing guides, and academic resources for students.',
    url: 'https://essayy.com/blog',
    siteName: 'Essayy',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://essayy.com/blog',
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Write a Perfect Argumentative Essay in 2025",
      excerpt: "Learn the essential structure, techniques, and strategies for crafting compelling argumentative essays that persuade and engage your readers.",
      date: "Jun 20, 2025",
      author: "Essayy Expert Team",
      category: "Writing Tips",
      readTime: "12 min read",
      image: "🎯",
      slug: "how-to-write-perfect-argumentative-essay-2025"
    },
    {
      id: 2,
      title: "Citation Styles Guide 2025: APA vs MLA vs Chicago",
      excerpt: "Master the differences between major citation styles and learn when to use each one for maximum academic impact with 2025 updates.",
      date: "Jun 20, 2025",
      author: "Prof. Academic Expert",
      category: "Academic Writing",
      readTime: "10 min read",
      image: "📚",
      slug: "citation-styles-guide-apa-mla-chicago"
    },
    {
      id: 3,
      title: "AI Essay Writing Guide 2025: Ethical Use & Best Practices",
      excerpt: "Discover how to use AI writing assistance ethically while developing your own writing skills and maintaining academic honesty in 2025.",
      date: "Jun 20, 2025",
      author: "Dr. Sarah Chen",
      category: "AI & Education",
      readTime: "15 min read",
      image: "🤖",
      slug: "ai-essay-writing-guide-2025"
    },
    {
      id: 4,
      title: "10 Common Grammar Mistakes That Make You Look Unprofessional",
      excerpt: "Avoid these frequent grammar errors that can undermine your credibility in academic and professional writing.",
      date: "Dec 8, 2024",
      author: "Emily Rodriguez",
      category: "Grammar & Style",
      readTime: "4 min read",
      image: "✏️"
    },
    {
      id: 5,
      title: "Research Paper Writing: From Topic Selection to Final Draft",
      excerpt: "A comprehensive guide to writing research papers that covers everything from choosing a topic to polishing your final draft.",
      date: "Dec 5, 2024",
      author: "Dr. James Wilson",
      category: "Research",
      readTime: "12 min read",
      image: "🔬"
    },
    {
      id: 6,
      title: "The Art of Persuasive Writing: Techniques That Actually Work",
      excerpt: "Learn proven persuasion techniques used by top writers to influence, convince, and inspire their readers.",
      date: "Dec 3, 2024",
      author: "Lisa Thompson",
      category: "Writing Tips",
      readTime: "7 min read",
      image: "💡"
    }
  ]

  const categories = [
    "All Posts",
    "Writing Tips",
    "Academic Writing", 
    "AI & Education",
    "Grammar & Style",
    "Research"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Essayy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, writing tips, and educational resources to help you master the art of academic writing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <Link href={`/blog/${blogPosts[0]?.slug}`} className="block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">Featured</span>
                    <span>{blogPosts[0]?.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {blogPosts[0]?.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0]?.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0]?.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0]?.date}
                    </div>
                    <span>{blogPosts[0]?.readTime}</span>
                  </div>
                  <div className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl p-12">
                  {blogPosts[0]?.image}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                {post.slug ? (
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-4xl">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <span className="text-blue-600 hover:text-blue-700 font-medium">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-4xl">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <span className="text-gray-400 font-medium">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss a Writing Tip
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get our latest writing guides, tips, and educational content delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Writing Topics</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most popular writing guides and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/blog/category/essay-writing" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <PenTool className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Essay Writing
            </h3>
            <p className="text-gray-600 text-sm">
              Complete guides for all types of academic essays
            </p>
          </Link>

          <Link href="/blog/category/grammar" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Grammar & Style
            </h3>
            <p className="text-gray-600 text-sm">
              Master proper grammar and writing style
            </p>
          </Link>

          <Link href="/blog/category/research" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <Lightbulb className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              Research Methods
            </h3>
            <p className="text-gray-600 text-sm">
              Learn effective research and citation techniques
            </p>
          </Link>

          <Link href="/blog/category/ai-writing" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
              <User className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
              AI Writing Ethics
            </h3>
            <p className="text-gray-600 text-sm">
              Use AI tools responsibly in academic writing
            </p>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 