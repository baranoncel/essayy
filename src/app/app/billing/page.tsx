'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CreditCard, 
  Download, 
  Check, 
  Star, 
  Calendar,
  DollarSign,
  FileText,
  Users,
  Zap,
  Shield,
  Crown,
  ArrowUpRight,
  ExternalLink,
  Settings,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react'

// Mock data for current subscription
const currentSubscription = {
  plan: 'Pro',
  status: 'active',
  amount: 29.99,
  currency: 'USD',
  billingCycle: 'monthly',
  nextBillDate: '2024-02-15',
  cancelAtPeriodEnd: false,
  trialEnd: null
}

// Usage data
const usageData = {
  essays: { used: 47, limit: 100, percentage: 47 },
  aiDetections: { used: 23, limit: 50, percentage: 46 },
  humanizations: { used: 31, limit: 75, percentage: 41 },
  words: { used: 125000, limit: 500000, percentage: 25 }
}

// Available plans
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for students and occasional writers',
    price: 9.99,
    currency: 'USD',
    interval: 'month',
    features: [
      '25 essays per month',
      '15 AI detections',
      '20 humanizations',
      '100,000 words',
      'Basic support',
      'Export to PDF/Word'
    ],
    popular: false,
    current: false
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal for regular writers and professionals',
    price: 29.99,
    currency: 'USD',
    interval: 'month',
    features: [
      '100 essays per month',
      '50 AI detections',
      '75 humanizations',
      '500,000 words',
      'Priority support',
      'Advanced formatting',
      'Plagiarism checker',
      'Citation generator'
    ],
    popular: true,
    current: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For teams and heavy users',
    price: 99.99,
    currency: 'USD',
    interval: 'month',
    features: [
      'Unlimited essays',
      'Unlimited AI detections',
      'Unlimited humanizations',
      'Unlimited words',
      '24/7 priority support',
      'Team collaboration',
      'Custom integrations',
      'Advanced analytics',
      'White-label option'
    ],
    popular: false,
    current: false
  }
]

// Invoice history
const invoices = [
  {
    id: 'inv_001',
    date: '2024-01-15',
    amount: 29.99,
    currency: 'USD',
    status: 'paid',
    description: 'Pro Plan - Monthly',
    downloadUrl: '#'
  },
  {
    id: 'inv_002',
    date: '2023-12-15',
    amount: 29.99,
    currency: 'USD',
    status: 'paid',
    description: 'Pro Plan - Monthly',
    downloadUrl: '#'
  },
  {
    id: 'inv_003',
    date: '2023-11-15',
    amount: 29.99,
    currency: 'USD',
    status: 'paid',
    description: 'Pro Plan - Monthly',
    downloadUrl: '#'
  },
  {
    id: 'inv_004',
    date: '2023-10-15',
    amount: 9.99,
    currency: 'USD',
    status: 'paid',
    description: 'Starter Plan - Monthly',
    downloadUrl: '#'
  },
  {
    id: 'inv_005',
    date: '2023-09-15',
    amount: 9.99,
    currency: 'USD',
    status: 'failed',
    description: 'Starter Plan - Monthly',
    downloadUrl: '#'
  }
]

// Payment methods
const paymentMethods = [
  {
    id: 'pm_001',
    type: 'card',
    brand: 'visa',
    last4: '4242',
    expMonth: 12,
    expYear: 2025,
    isDefault: true
  },
  {
    id: 'pm_002',
    type: 'card',
    brand: 'mastercard',
    last4: '5555',
    expMonth: 8,
    expYear: 2026,
    isDefault: false
  }
]

export default function BillingPage() {
  const [selectedInterval, setSelectedInterval] = useState<'month' | 'year'>('month')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500'
    if (percentage >= 75) return 'bg-yellow-500'
          return 'bg-gradient-to-r from-gray-400 to-gray-500'
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
          <p className="text-gray-600">
            Manage your subscription, view usage, and access billing history.
          </p>
        </div>

        {/* Current Subscription Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    Current Subscription
                  </CardTitle>
                  <CardDescription>Your active plan and billing details</CardDescription>
                </div>
                {getStatusBadge(currentSubscription.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{currentSubscription.plan} Plan</p>
                    <p className="text-gray-600">
                      ${currentSubscription.amount}/{currentSubscription.billingCycle}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Next billing date</p>
                    <p className="font-semibold">{formatDate(currentSubscription.nextBillDate)}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Plan
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Customer Portal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-gray-600" />
                Usage This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Essays</span>
                    <span>{usageData.essays.used}/{usageData.essays.limit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getUsageColor(usageData.essays.percentage)}`}
                      style={{ width: `${usageData.essays.percentage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Detections</span>
                    <span>{usageData.aiDetections.used}/{usageData.aiDetections.limit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getUsageColor(usageData.aiDetections.percentage)}`}
                      style={{ width: `${usageData.aiDetections.percentage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Humanizations</span>
                    <span>{usageData.humanizations.used}/{usageData.humanizations.limit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getUsageColor(usageData.humanizations.percentage)}`}
                      style={{ width: `${usageData.humanizations.percentage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Words</span>
                    <span>{usageData.words.used.toLocaleString()}/{usageData.words.limit.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getUsageColor(usageData.words.percentage)}`}
                      style={{ width: `${usageData.words.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Plans */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>Choose the plan that best fits your needs</CardDescription>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setSelectedInterval('month')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    selectedInterval === 'month'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedInterval('year')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    selectedInterval === 'year'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Yearly
                  <span className="ml-1 text-xs text-green-600">Save 20%</span>
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-lg border-2 p-6 ${
                    plan.current
                      ? 'border-gray-500 bg-gray-50 shadow-lg'
                      : plan.popular
                      ? 'border-purple-500'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && !plan.current && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {plan.current && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 py-1 text-xs font-medium rounded-full shadow-md">
                        Current Plan
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900">
                        ${selectedInterval === 'year' ? (plan.price * 12 * 0.8).toFixed(2) : plan.price}
                      </span>
                      <span className="text-gray-600">/{selectedInterval}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.current
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : plan.popular
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : ''
                    }`}
                    disabled={plan.current}
                  >
                    {plan.current ? 'Current Plan' : `Upgrade to ${plan.name}`}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Billing History & Payment Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Invoice History */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Invoice History
              </CardTitle>
              <CardDescription>Your billing history and downloadable invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{invoice.description}</p>
                        <p className="text-sm text-gray-600">{formatDate(invoice.date)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${invoice.amount} {invoice.currency}
                        </p>
                        {getStatusBadge(invoice.status)}
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gray-600" />
                Payment Methods
              </CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">
                          •••• •••• •••• {method.last4}
                        </p>
                        <p className="text-sm text-gray-600">
                          {method.brand.toUpperCase()} • Expires {method.expMonth}/{method.expYear}
                        </p>
                        {method.isDefault && (
                          <Badge variant="secondary" className="text-xs">Default</Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 