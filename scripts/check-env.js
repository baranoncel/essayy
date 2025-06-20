#!/usr/bin/env node

// Environment variables checker for Essayy platform
const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY', 
  'SUPABASE_SERVICE_ROLE_KEY',
  'AZURE_OPENAI_ENDPOINT',
  'AZURE_OPENAI_KEY',
  'AZURE_OPENAI_DEPLOYMENT',
  'AI_DETECTOR_KEY',
  'AI_HUMANIZER_KEY',
  'STRIPE_SECRET_KEY',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'STRIPE_WEBHOOK_SECRET'
]

const optionalVars = [
  'GA_MEASUREMENT_ID',
  'GA_API_SECRET', 
  'RESEND_API_KEY',
  'OPENAI_API_KEY'
]

console.log('🔍 Checking Essayy Environment Variables...\n')

let allRequired = true

// Check required variables
console.log('✅ Required Variables:')
requiredVars.forEach(varName => {
  const value = process.env[varName]
  const status = value ? '✅' : '❌'
  const display = value ? `${value.substring(0, 10)}...` : 'NOT SET'
  console.log(`${status} ${varName}: ${display}`)
  
  if (!value) allRequired = false
})

console.log('\n📋 Optional Variables:')
optionalVars.forEach(varName => {
  const value = process.env[varName]
  const status = value ? '✅' : '⚪'
  const display = value ? `${value.substring(0, 10)}...` : 'Not set'
  console.log(`${status} ${varName}: ${display}`)
})

console.log('\n' + '='.repeat(50))

if (allRequired) {
  console.log('🎉 All required environment variables are set!')
  console.log('✅ Your Essayy platform should work correctly.')
} else {
  console.log('❌ Some required environment variables are missing.')
  console.log('⚠️  Please check your .env.local file.')
}

console.log('\n💡 Tip: Make sure to restart your dev server after updating .env.local')
console.log('�� Run: npm run dev') 