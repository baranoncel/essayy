# Google OAuth Setup with Supabase

This guide will help you set up Google OAuth authentication for your Essayy application using Supabase.

## Prerequisites

- A Supabase project (already configured)
- A Google Cloud Platform account
- Your application deployed or running on a known domain

## Step 1: Configure Google Cloud Console

### 1.1 Create or Select a Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one

### 1.2 Enable Google+ API
1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google+ API" or "Google Identity"
3. Click on "Google+ API" and click **Enable**

### 1.3 Configure OAuth Consent Screen
1. Go to **APIs & Services** > **OAuth consent screen**
2. Choose **External** user type (unless you're using Google Workspace)
3. Fill in the required information:
   - **App name**: Essayy
   - **User support email**: Your email
   - **App logo**: Upload your app logo (optional)
   - **App domain**: Your domain (e.g., https://yourdomain.com)
   - **Developer contact information**: Your email
4. Add scopes (optional):
   - `email`
   - `profile`
   - `openid`
5. Add test users if needed
6. Save and continue

### 1.4 Create OAuth Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. Choose **Web application**
4. Set the name: "Essayy Web Client"
5. Add **Authorized JavaScript origins**:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Add **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback` (for development)
   - `https://yourdomain.com/api/auth/callback` (for production)
   - Your Supabase callback URL (see Step 2)
7. Click **Create**
8. **Save the Client ID and Client Secret** - you'll need these for Supabase

## Step 2: Configure Supabase

### 2.1 Get Supabase Callback URL
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** > **Providers**
4. Find **Google** provider
5. Note the callback URL format: `https://[your-project].supabase.co/auth/v1/callback`

### 2.2 Add Callback URL to Google
1. Go back to Google Cloud Console > **Credentials**
2. Edit your OAuth client
3. Add the Supabase callback URL to **Authorized redirect URIs**:
   - `https://[your-project].supabase.co/auth/v1/callback`
4. Save the changes

### 2.3 Configure Google Provider in Supabase
1. In Supabase Dashboard, go to **Authentication** > **Providers**
2. Find **Google** and click to expand
3. Toggle **Enable Google provider** to ON
4. Enter your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Click **Save**

## Step 3: Environment Variables

Make sure your `.env.local` file has the required Supabase variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 4: Testing

### 4.1 Test Locally
1. Start your development server: `npm run dev`
2. Navigate to your login page
3. Click "Continue with Google"
4. You should be redirected to Google's OAuth consent screen
5. After approval, you should be redirected back to your app and logged in

### 4.2 Verify User Data
After successful login, check that the user object contains:
- `user.email`
- `user.user_metadata.full_name`
- `user.user_metadata.avatar_url`
- `user.user_metadata.picture`

## Step 5: Production Deployment

### 5.1 Update Google Cloud Console
1. Add your production domain to **Authorized JavaScript origins**
2. Add your production callback URL to **Authorized redirect URIs**
3. Update your OAuth consent screen with production domain

### 5.2 Update Environment Variables
Make sure your production environment has the correct Supabase variables.

## Troubleshooting

### Common Issues

1. **"redirect_uri_mismatch" error**
   - Check that all callback URLs are correctly configured in Google Cloud Console
   - Ensure URLs match exactly (including https/http and trailing slashes)

2. **"unauthorized_client" error**
   - Verify that the Client ID is correct in Supabase
   - Check that the OAuth consent screen is properly configured

3. **"access_blocked" error**
   - Make sure your OAuth consent screen is not in "Testing" mode for production
   - Add your domain to the authorized domains list

4. **User not redirected after login**
   - Check your callback route implementation
   - Verify the redirect URL in your OAuth configuration

### Debug Mode

To debug OAuth issues, check the browser's developer console and network tab for error messages.

## Security Notes

1. **Never expose your Client Secret** in client-side code
2. **Use HTTPS** in production
3. **Regularly rotate** your OAuth credentials
4. **Monitor** authentication logs in both Google Cloud Console and Supabase

## Support

If you encounter issues:
1. Check Supabase authentication logs
2. Review Google Cloud Console OAuth logs
3. Consult [Supabase Auth documentation](https://supabase.com/docs/guides/auth)
4. Check [Google OAuth documentation](https://developers.google.com/identity/protocols/oauth2)

---

✅ **Your Google OAuth setup is now complete!** Users can sign in with their Google accounts and enjoy a seamless authentication experience. 