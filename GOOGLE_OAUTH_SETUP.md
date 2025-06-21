# Google OAuth Setup with Supabase

This guide will help you set up Google OAuth authentication for your Essayy application using Supabase.

## Prerequisites

- A Supabase project (already configured)
- A Google Cloud Platform account
- Your application deployed or running on a known domain

## Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API or People API

## Step 2: Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** user type
3. Fill in required fields:
   - App name: "Essayy"
   - User support email: your email
   - Developer contact information: your email
4. Add scopes: `email`, `profile`, `openid`
5. Add test users if needed

## Step 3: Create OAuth 2.0 Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth 2.0 Client IDs**
3. Application type: **Web application**
4. Name: "Essayy Web Client"

### 🚨 CRITICAL: Authorized JavaScript Origins
Add these URLs in **exact order** (order can matter for some OAuth providers):

```
https://essayy.com
https://essayy.vercel.app
https://essayy-1e575sjwc-baranoncels-projects.vercel.app
http://localhost:3000
```

### 🚨 CRITICAL: Authorized Redirect URIs
Add these URLs in **exact order**:

```
https://essayy.com/api/auth/callback
https://essayy.vercel.app/api/auth/callback  
https://essayy-1e575sjwc-baranoncels-projects.vercel.app/api/auth/callback
http://localhost:3000/api/auth/callback
```

## Step 4: Get Client Credentials
1. Copy **Client ID** and **Client Secret**
2. Add them to your Supabase Auth settings

## Step 5: Configure Supabase
1. Go to Supabase Dashboard → Authentication → Providers
2. Enable Google provider
3. Add your Google **Client ID** and **Client Secret**
4. Set redirect URL to: `https://[your-supabase-ref].supabase.co/auth/v1/callback`

## 🔧 Troubleshooting OAuth Redirect Issues

### Issue: Still Redirecting to Localhost

**Most Common Causes:**

1. **Environment Variable Not Set Properly**
   ```bash
   # Check if NEXT_PUBLIC_APP_URL is set in Vercel
   vercel env ls
   
   # Set for all environments
   vercel env add NEXT_PUBLIC_APP_URL
   # Value: https://essayy.com
   # Environments: Production, Preview, Development
   ```

2. **Google Cloud Console URLs Missing**
   - Ensure **all** production URLs are added to both sections
   - URLs must match **exactly** (no trailing slashes)
   - Order can matter - put production URLs first

3. **Caching Issues**
   ```bash
   # Clear browser cache and cookies
   # Or test in incognito mode
   
   # Redeploy after changes
   vercel --prod
   ```

4. **Supabase Configuration**
   - Check if Google provider is enabled in Supabase
   - Verify Client ID/Secret are correct
   - Ensure Supabase redirect URL is configured

### Debug Steps:

1. **Check Vercel Logs**
   ```bash
   vercel logs --follow
   ```
   Look for console.log messages from the callback route

2. **Test Environment Variables**
   ```bash
   # In your local environment
   echo $NEXT_PUBLIC_APP_URL
   
   # Should output: https://essayy.com
   ```

3. **Verify Google Cloud Console**
   - Double-check all URLs are added
   - No typos in domain names
   - Both HTTP and HTTPS versions if needed

4. **Browser Network Tab**
   - Watch the OAuth flow in browser dev tools
   - Check what redirect URLs are being used
   - Look for any error responses

### Common URL Patterns That Work:

✅ **Correct Format:**
```
https://essayy.com
https://essayy.com/api/auth/callback
```

❌ **Incorrect Format:**
```
https://essayy.com/           (trailing slash)
http://essayy.com             (wrong protocol)
https://www.essayy.com        (www subdomain if not used)
```

### Environment Variable Priority:
The callback route checks in this order:
1. `NEXT_PUBLIC_APP_URL` (highest priority)
2. `VERCEL_URL` (for Vercel deployments)
3. Request origin (if not localhost)
4. Fallback to `https://essayy.com`

### Testing Checklist:
- [ ] Environment variable set in Vercel
- [ ] All URLs added to Google Cloud Console
- [ ] Application redeployed after changes
- [ ] Browser cache cleared
- [ ] Tested in incognito mode
- [ ] Checked Vercel function logs
- [ ] Verified Supabase Google provider is enabled

---

**If still having issues after following this guide, check the Vercel function logs for the OAuth callback route - it now includes detailed debugging information about which URLs are being used.**

## Step 6: Environment Variables

Make sure your `.env.local` file has the required Supabase variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 7: Testing

### 7.1 Test Locally
1. Start your development server: `npm run dev`
2. Navigate to your login page
3. Click "Continue with Google"
4. You should be redirected to Google's OAuth consent screen
5. After approval, you should be redirected back to your app and logged in

### 7.2 Verify User Data
After successful login, check that the user object contains:
- `user.email`
- `user.user_metadata.full_name`
- `user.user_metadata.avatar_url`
- `user.user_metadata.picture`

## Step 8: Production Deployment

### 8.1 Update Google Cloud Console
1. Add your production domain to **Authorized JavaScript origins**
2. Add your production callback URL to **Authorized redirect URIs**
3. Update your OAuth consent screen with production domain

### 8.2 Update Environment Variables
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