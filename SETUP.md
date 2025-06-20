# Essayy Platform Setup Guide

This guide will help you set up the Essayy AI-powered essay platform with all the necessary integrations and configurations.

## Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- Stripe account for payment processing
- OpenAI API access
- RapidAPI account for AI services
- Resend account for email notifications

## 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd essayy
npm install
```

## 2. Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Azure OpenAI Configuration
AZURE_OPENAI_ENDPOINT=your_azure_openai_endpoint
AZURE_OPENAI_KEY=your_azure_openai_key
AZURE_OPENAI_DEPLOYMENT=your_azure_deployment_name

# RapidAPI Keys
AI_DETECTOR_KEY=your_rapidapi_ai_detector_key
AI_HUMANIZER_KEY=your_rapidapi_ai_humanizer_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Google Analytics
GA_MEASUREMENT_ID=your_ga_measurement_id
GA_API_SECRET=your_ga_api_secret

# Resend Email
RESEND_API_KEY=your_resend_api_key

# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV=development
```

## 3. Supabase Setup

### 3.1 Create Supabase Project
1. Go to [Supabase](https://supabase.com) and create a new project
2. Get your project URL and anon key from the settings
3. Get your service role key from the API settings

### 3.2 Run Database Migration
```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Initialize Supabase (if not already done)
supabase init

# Link to your project
supabase link --project-ref your-project-id

# Run the migration
supabase db reset
```

### 3.3 Set up Authentication
1. In Supabase dashboard, go to Authentication > Settings
2. Enable Email authentication
3. Configure your site URL and redirect URLs:
   - Site URL: `http://localhost:3000`
   - Redirect URLs: `http://localhost:3000/auth/callback`

## 4. Stripe Setup

### 4.1 Create Stripe Account
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable and secret keys from the dashboard

### 4.2 Create Products and Prices
Create the following products in Stripe:
- **Free Plan**: `price_free` (free tier)
- **Pro Plan**: `price_pro_monthly` ($19.99/month)
- **Premium Plan**: `price_premium_monthly` ($49.99/month)

### 4.3 Set up Webhooks
1. In Stripe dashboard, go to Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Listen for these events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

## 5. Azure OpenAI Setup

1. Create an Azure account at [azure.microsoft.com](https://azure.microsoft.com)
2. Create an Azure OpenAI resource
3. Deploy a GPT-4 model (recommended) or GPT-3.5-turbo
4. Get your configuration:
   - **Endpoint**: `https://your-resource-name.openai.azure.com`
   - **API Key**: From the resource's Keys and Endpoint section
   - **Deployment Name**: The name you gave your deployed model

## 6. RapidAPI Setup

### 6.1 AI Content Detector
1. Go to [RapidAPI](https://rapidapi.com)
2. Subscribe to "AI Content Detector" API
3. Get your API key

### 6.2 AI Text Humanizer
1. Subscribe to "AI Text Humanizer" API on RapidAPI
2. Get your API key

## 7. Resend Setup

1. Create an account at [resend.com](https://resend.com)
2. Get your API key
3. Verify your sending domain

## 8. Development Setup

### 8.1 Start Development Server
```bash
npm run dev
```

### 8.2 Test Stripe Webhooks Locally
```bash
# Install Stripe CLI
# Download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward events to your local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## 9. Production Deployment

### 9.1 Environment Variables
Set all environment variables in your production environment:
- Update `NEXT_PUBLIC_BASE_URL` to your production URL
- Update Stripe webhook endpoint URL
- Set `NODE_ENV=production`

### 9.2 Supabase Production Setup
1. Update RLS policies if needed
2. Ensure proper indexing for performance
3. Set up backups

### 9.3 Stripe Production Setup
1. Switch to live mode
2. Update webhook endpoints
3. Test payment flows

## 10. Features Overview

### 10.1 Available Features
✅ **User Authentication** - Sign up/login with Supabase Auth
✅ **Essay Generation** - AI-powered essay writing with OpenAI
✅ **AI Detection** - Detect AI-generated content
✅ **Text Humanization** - Make AI text sound more natural
✅ **Essay Management** - Save, edit, and organize essays
✅ **Billing Integration** - Stripe-powered subscriptions
✅ **Usage Tracking** - Monitor API usage and quotas
✅ **Rich Text Editor** - Full-featured essay editor

### 10.2 User Flow
1. User signs up/logs in
2. User creates essay with topic and parameters
3. AI generates essay content
4. User can edit, save, and manage essays
5. User can detect AI content and humanize text
6. Billing and subscription management

## 11. API Endpoints

- `POST /api/essays` - Create new essay
- `GET /api/essays` - Get user's essays
- `GET /api/essays/[id]` - Get specific essay
- `PUT /api/essays/[id]` - Update essay
- `DELETE /api/essays/[id]` - Delete essay
- `POST /api/detect` - AI content detection
- `POST /api/humanize` - Text humanization
- `POST /api/billing/create-checkout` - Create Stripe checkout
- `POST /api/webhooks/stripe` - Stripe webhook handler

## 12. Database Schema

The database includes these main tables:
- `users` - User profiles and subscription info
- `essays` - User essays and metadata
- `plans` - Subscription plans and quotas
- `usage_logs` - API usage tracking

## 13. Troubleshooting

### Common Issues
1. **Authentication not working**: Check Supabase URL and keys
2. **API calls failing**: Verify environment variables
3. **Stripe webhooks not working**: Check webhook URL and secret
4. **Database errors**: Ensure migration ran successfully

### Debug Steps
1. Check browser console for frontend errors
2. Check server logs for API errors
3. Verify environment variables are set
4. Test API endpoints individually

## 14. Next Steps

1. Test all functionality locally
2. Deploy to production
3. Set up monitoring and analytics
4. Add additional features as needed

## Support

If you encounter issues:
1. Check the logs for specific error messages
2. Verify all environment variables are correct
3. Ensure all third-party services are properly configured
4. Test each integration individually

---

🎉 **Your Essayy platform should now be fully functional!** 