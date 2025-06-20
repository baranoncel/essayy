# Vercel Environment Variables Setup

This guide explains how to configure environment variables in Vercel to ensure proper OAuth redirects and functionality.

## Required Environment Variables

### 1. App URL Configuration
```
NEXT_PUBLIC_APP_URL=https://essayy.vercel.app
```
**Purpose:** Ensures OAuth callbacks redirect to the correct production domain instead of localhost.

### 2. Supabase Configuration (Optional)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```
**Purpose:** Enables authentication, database, and user management features.

### 3. AI Services (Optional)
```
OPENAI_API_KEY=your_openai_api_key
AZURE_OPENAI_ENDPOINT=your_azure_endpoint
AZURE_OPENAI_KEY=your_azure_key
AZURE_OPENAI_DEPLOYMENT=your_deployment_name
AI_DETECTOR_KEY=your_rapidapi_detector_key
AI_HUMANIZER_KEY=your_rapidapi_humanizer_key
```
**Purpose:** Powers AI essay generation, detection, and humanization features.

### 4. Payment Processing (Optional)
```
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```
**Purpose:** Enables billing and subscription management.

## How to Set Environment Variables in Vercel

### Method 1: Vercel Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `essayy` project
3. Go to **Settings** tab
4. Click **Environment Variables** in the sidebar
5. Add each environment variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_APP_URL`)
   - **Value**: Variable value (e.g., `https://essayy.vercel.app`)
   - **Environments**: Select **Production**, **Preview**, and **Development**
6. Click **Save**
7. **Redeploy** your application for changes to take effect

### Method 2: Vercel CLI
```bash
# Set production environment variable
vercel env add NEXT_PUBLIC_APP_URL production
# Enter value when prompted: https://essayy.vercel.app

# Set for all environments
vercel env add NEXT_PUBLIC_APP_URL
# Choose: Production, Preview, Development
```

### Method 3: Environment File Upload
1. Create a `.env.production` file with your production variables
2. In Vercel Dashboard, go to **Settings** > **Environment Variables**
3. Click **Import** and upload your `.env.production` file

## Critical Fix for OAuth Redirect Issue

**The most important variable to set immediately:**
```
NEXT_PUBLIC_APP_URL=https://essayy.vercel.app
```

**Steps to fix Google OAuth redirect:**
1. Set `NEXT_PUBLIC_APP_URL` in Vercel (as shown above)
2. Redeploy the application
3. Update Google Cloud Console OAuth settings:
   - Add `https://essayy.vercel.app` to **Authorized JavaScript origins**
   - Add `https://essayy.vercel.app/api/auth/callback` to **Authorized redirect URIs**

## Verification

After setting environment variables:
1. Redeploy your application
2. Test OAuth login on production
3. Verify redirects go to production domain, not localhost
4. Check Vercel Function logs for any environment variable warnings

## Security Best Practices

1. **Never commit** `.env.local` or `.env.production` files to Git
2. **Use different keys** for development and production
3. **Rotate secrets** regularly
4. **Limit API key permissions** to minimum required scope
5. **Monitor usage** of API keys and webhooks

## Troubleshooting

### OAuth Still Redirecting to Localhost
- Verify `NEXT_PUBLIC_APP_URL` is set in Vercel
- Confirm you've redeployed after setting the variable
- Check that Google OAuth is configured with production URLs

### Environment Variables Not Working
- Ensure variable names match exactly (case-sensitive)
- Verify the variable is set for the correct environment (Production)
- Check Vercel Function logs for missing variable warnings
- Redeploy after making changes

### Build Failures
- Check that required environment variables are set
- Verify API keys are valid and have proper permissions
- Review build logs for specific error messages

---

✅ **After setting these environment variables and redeploying, your OAuth redirects should work correctly on the production domain!** 