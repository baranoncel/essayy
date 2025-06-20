'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Clock, 
  Target, 
  FileText, 
  Users, 
  GraduationCap,
  Briefcase,
  Star,
  ArrowLeft,
  Info,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Calendar,
  PenTool
} from 'lucide-react'
import Link from 'next/link'

// Essay length guidelines
const essayLengths = [
  {
    type: 'Short Essay',
    wordCount: '250-500 words',
    pages: '1-2 pages',
    timeToRead: '2-3 minutes',
    timeToWrite: '30-60 minutes',
    description: 'Ideal for quick responses, personal statements, and brief analyses',
    useCases: [
      'Application essays',
      'Discussion posts',
      'Journal entries',
      'Short response questions'
    ],
    tips: [
      'Focus on one main idea',
      'Be concise and direct',
      'Strong opening and conclusion',
      'Every sentence should count'
    ],
    icon: <FileText className="h-6 w-6 text-gray-600" />,
    color: 'blue'
  },
  {
    type: 'Standard Essay',
    wordCount: '500-1000 words',
    pages: '2-4 pages',
    timeToRead: '3-6 minutes',
    timeToWrite: '1-2 hours',
    description: 'Most common academic essay length for assignments and coursework',
    useCases: [
      'High school essays',
      'College assignments',
      'Research summaries',
      'Comparative analyses'
    ],
    tips: [
      'Develop 2-3 main points',
      'Include supporting evidence',
      'Clear paragraph structure',
      'Balanced introduction and conclusion'
    ],
    icon: <BookOpen className="h-6 w-6 text-green-500" />,
    color: 'green'
  },
  {
    type: 'Extended Essay',
    wordCount: '1000-2000 words',
    pages: '4-8 pages',
    timeToRead: '6-12 minutes',
    timeToWrite: '2-4 hours',
    description: 'In-depth analysis with comprehensive research and argumentation',
    useCases: [
      'Research papers',
      'Literary analysis',
      'Argumentative essays',
      'Case studies'
    ],
    tips: [
      'Multiple supporting arguments',
      'Extensive research required',
      'Detailed analysis and examples',
      'Strong thesis development'
    ],
    icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
    color: 'purple'
  },
  {
    type: 'Long Essay',
    wordCount: '2000-5000 words',
    pages: '8-20 pages',
    timeToRead: '12-30 minutes',
    timeToWrite: '4-8 hours',
    description: 'Comprehensive research papers and dissertations',
    useCases: [
      'Term papers',
      'Thesis chapters',
      'Research articles',
      'Professional reports'
    ],
    tips: [
      'Multiple sections/chapters',
      'Extensive bibliography',
      'Complex argumentation',
      'Professional formatting'
    ],
    icon: <Briefcase className="h-6 w-6 text-orange-500" />,
    color: 'orange'
  }
]

// Writing styles and their characteristics
const writingStyles = [
  {
    name: 'Academic',
    description: 'Formal, objective, and evidence-based writing',
    characteristics: [
      'Third-person perspective',
      'Formal vocabulary',
      'Citations and references',
      'Logical structure',
      'Objective tone'
    ],
    bestFor: [
      'Research papers',
      'Essays',
      'Thesis writing',
      'Scientific papers'
    ],
    tone: 'Formal and objective',
    example: 'Studies have demonstrated that...',
          color: 'bg-gray-50 border-gray-300 shadow-sm'
  },
  {
    name: 'Persuasive',
    description: 'Convincing and argumentative writing style',
    characteristics: [
      'Strong thesis statement',
      'Compelling evidence',
      'Logical reasoning',
      'Counter-argument consideration',
      'Call to action'
    ],
    bestFor: [
      'Argumentative essays',
      'Opinion pieces',
      'Debate preparations',
      'Policy papers'
    ],
    tone: 'Confident and convincing',
    example: 'It is imperative that we consider...',
    color: 'bg-red-50 border-red-200'
  },
  {
    name: 'Analytical',
    description: 'Breaking down complex topics into components',
    characteristics: [
      'Critical examination',
      'Detailed analysis',
      'Evidence evaluation',
      'Pattern identification',
      'Logical conclusions'
    ],
    bestFor: [
      'Literary analysis',
      'Case studies',
      'Data interpretation',
      'Critical reviews'
    ],
    tone: 'Thoughtful and methodical',
    example: 'Upon closer examination, it becomes evident that...',
    color: 'bg-green-50 border-green-200'
  },
  {
    name: 'Narrative',
    description: 'Story-telling approach with personal elements',
    characteristics: [
      'Personal experiences',
      'Chronological structure',
      'Descriptive language',
      'Character development',
      'Engaging storytelling'
    ],
    bestFor: [
      'Personal statements',
      'Reflective essays',
      'Creative writing',
      'Memoir pieces'
    ],
    tone: 'Personal and engaging',
    example: 'As I reflect on this experience...',
    color: 'bg-purple-50 border-purple-200'
  }
]

// Academic levels and their requirements
const academicLevels = [
  {
    level: 'High School',
    typical: '300-500 words',
    requirements: [
      'Basic thesis statement',
      '3-5 paragraph structure',
      'Simple citations (MLA)',
      'Clear topic sentences'
    ],
          icon: <Users className="h-5 w-5 text-gray-600" />
  },
  {
    level: 'Undergraduate',
    typical: '750-1500 words',
    requirements: [
      'Strong thesis development',
      'Multiple sources required',
      'Proper citation format',
      'Critical analysis expected'
    ],
    icon: <GraduationCap className="h-5 w-5 text-green-500" />
  },
  {
    level: 'Graduate',
    typical: '2000-5000 words',
    requirements: [
      'Original research',
      'Extensive literature review',
      'Advanced methodology',
      'Peer-reviewed sources'
    ],
    icon: <Star className="h-5 w-5 text-purple-500" />
  },
  {
    level: 'Professional',
    typical: '1000-3000 words',
    requirements: [
      'Industry relevance',
      'Practical applications',
      'Executive summary',
      'Data-driven insights'
    ],
    icon: <Briefcase className="h-5 w-5 text-orange-500" />
  }
]

export default function LengthGuidePage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/app/essay/new">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Essay Creation
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Essay Length & Style Guide</h1>
          <p className="text-gray-600">
            Understanding the right length and style for your essay ensures better results and meets academic expectations.
          </p>
        </div>

        {/* Quick Reference Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Average Reading Speed</p>
                  <p className="text-2xl font-bold text-gray-900">200 WPM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <PenTool className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Words per Page</p>
                  <p className="text-2xl font-bold text-gray-900">~250</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Ideal Paragraph</p>
                  <p className="text-2xl font-bold text-gray-900">100-150</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Most Common</p>
                  <p className="text-2xl font-bold text-gray-900">500-1000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Essay Length Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-gray-600" />
              Essay Length Guidelines
            </CardTitle>
            <CardDescription>
              Choose the right length based on your assignment requirements and purpose
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {essayLengths.map((length, index) => (
                <Card key={index} className="border-l-4 border-l-gray-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {length.icon}
                        <div>
                          <CardTitle className="text-lg">{length.type}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="secondary">{length.wordCount}</Badge>
                            <Badge variant="outline">{length.pages}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{length.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">Reading Time</p>
                        <p className="text-gray-600">{length.timeToRead}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Writing Time</p>
                        <p className="text-gray-600">{length.timeToWrite}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium text-gray-700 mb-2">Best Used For:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {length.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-gray-700 mb-2">Key Tips:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {length.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Info className="h-3 w-3 text-blue-500 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Writing Styles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenTool className="h-6 w-6 text-purple-600" />
              Writing Styles & Approaches
            </CardTitle>
            <CardDescription>
              Different writing styles for different purposes and audiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {writingStyles.map((style, index) => (
                <Card key={index} className={`border-2 ${style.color}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{style.name}</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-700 mb-2">Characteristics:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {style.characteristics.map((char, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium text-gray-700 mb-2">Best For:</p>
                        <div className="flex flex-wrap gap-1">
                          {style.bestFor.map((use, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-700">Example Opening:</p>
                        <p className="text-sm text-gray-600 italic">"{style.example}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Level Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-green-600" />
              Academic Level Requirements
            </CardTitle>
            <CardDescription>
              Expected standards and requirements for different academic levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicLevels.map((level, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                      {level.icon}
                      <CardTitle className="text-lg">{level.level}</CardTitle>
                      <Badge variant="outline">{level.typical}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {level.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Professional Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Plan Your Structure</h4>
                    <p className="text-sm text-gray-600">Outline your main points before writing. A good structure makes length management easier.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quality Over Quantity</h4>
                    <p className="text-sm text-gray-600">Focus on strong arguments and evidence rather than padding to reach word count.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Use Active Voice</h4>
                    <p className="text-sm text-gray-600">Active voice is more concise and engaging than passive voice.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Edit Ruthlessly</h4>
                    <p className="text-sm text-gray-600">Remove unnecessary words, redundant phrases, and weak arguments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Check Requirements</h4>
                    <p className="text-sm text-gray-600">Always verify the specific requirements for your assignment or publication.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Consider Your Audience</h4>
                    <p className="text-sm text-gray-600">Adjust your style and length based on who will be reading your essay.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Essay?</h3>
            <p className="text-gray-600 mb-6">
              Use this guide to inform your choices and create a well-structured, appropriately-sized essay.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/app/essay/new">
                  <PenTool className="h-5 w-5 mr-2" />
                  Start Writing Your Essay
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/app">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 