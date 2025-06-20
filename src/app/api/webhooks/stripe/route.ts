import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { createServerSupabaseClient } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(req: NextRequest) {
  try {
    // Check if required environment variables are available
    if (!process.env.STRIPE_SECRET_KEY || !endpointSecret) {
      console.warn('Stripe environment variables not configured')
      return new NextResponse('Webhook not configured', { status: 503 })
    }

    const body = await req.text()
    const headersList = await headers()
    const sig = headersList.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return new NextResponse('Webhook signature verification failed', { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    
    // Check if Supabase client is available
    if (!supabase) {
      console.warn('Supabase not configured, skipping webhook processing')
      return new NextResponse('Service not configured', { status: 503 })
    }

    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionChange(supabase, subscription)
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCancellation(supabase, deletedSubscription)
        break

      case 'invoice.payment_succeeded':
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSuccess(supabase, invoice)
        break

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object as Stripe.Invoice
        await handlePaymentFailure(supabase, failedInvoice)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new NextResponse('Success', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new NextResponse('Webhook error', { status: 500 })
  }
}

async function handleSubscriptionChange(supabase: any, subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string
  const priceId = subscription.items.data[0]?.price.id

  // Update user subscription status
  await supabase
    .from('users')
    .update({
      subscription_status: subscription.status,
      updated_at: new Date().toISOString()
    })
    .eq('stripe_customer_id', customerId)

  // Find and update plan
  const { data: plan } = await supabase
    .from('plans')
    .select('id')
    .eq('stripe_price_id', priceId)
    .single()

  if (plan) {
    await supabase
      .from('users')
      .update({
        plan_id: plan.id,
        updated_at: new Date().toISOString()
      })
      .eq('stripe_customer_id', customerId)
  }
}

async function handleSubscriptionCancellation(supabase: any, subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string

  await supabase
    .from('users')
    .update({
      subscription_status: 'cancelled',
      plan_id: null,
      updated_at: new Date().toISOString()
    })
    .eq('stripe_customer_id', customerId)
}

async function handlePaymentSuccess(supabase: any, invoice: Stripe.Invoice) {
  // Log successful payment
  console.log(`Payment succeeded for invoice: ${invoice.id}`)
  
  // You could add additional logic here like sending confirmation emails
}

async function handlePaymentFailure(supabase: any, invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string

  // Update subscription status to past_due
  await supabase
    .from('users')
    .update({
      subscription_status: 'past_due',
      updated_at: new Date().toISOString()
    })
    .eq('stripe_customer_id', customerId)

  // You could add additional logic here like sending failure notifications
} 