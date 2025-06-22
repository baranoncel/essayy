#!/usr/bin/env node

/**
 * Script to submit sitemap to search engines
 * Run with: node scripts/submit-sitemap.js
 */

const https = require('https');
const { URL } = require('url');

const SITE_URL = 'https://www.essayy.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Function to ping search engines
async function pingSearchEngine(url, engineName) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Essayy Sitemap Submitter 1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ ${engineName}: Successfully submitted sitemap (Status: ${res.statusCode})`);
          resolve({ engine: engineName, success: true, status: res.statusCode });
        } else {
          console.log(`❌ ${engineName}: Failed to submit sitemap (Status: ${res.statusCode})`);
          resolve({ engine: engineName, success: false, status: res.statusCode });
        }
      });
    });

    req.on('error', (err) => {
      console.log(`❌ ${engineName}: Error submitting sitemap - ${err.message}`);
      resolve({ engine: engineName, success: false, error: err.message });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      console.log(`❌ ${engineName}: Request timeout`);
      resolve({ engine: engineName, success: false, error: 'Timeout' });
    });

    req.end();
  });
}

async function submitSitemap() {
  console.log('🚀 Starting sitemap submission...\n');
  console.log(`📍 Site URL: ${SITE_URL}`);
  console.log(`🗺️  Sitemap URL: ${SITEMAP_URL}\n`);

  const submissions = [
    {
      name: 'Google',
      url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    },
    {
      name: 'Bing',
      url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    }
  ];

  const results = [];

  for (const submission of submissions) {
    console.log(`📤 Submitting to ${submission.name}...`);
    const result = await pingSearchEngine(submission.url, submission.name);
    results.push(result);
  }

  console.log('\n📊 Submission Summary:');
  console.log('========================');
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\n⚠️  Failed submissions:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.engine}: ${r.error || `Status ${r.status}`}`);
    });
  }

  console.log('\n📝 Next Steps:');
  console.log('1. Set up Google Search Console: https://search.google.com/search-console/');
  console.log('2. Set up Bing Webmaster Tools: https://www.bing.com/webmasters/');
  console.log('3. Submit sitemap manually in both consoles');
  console.log('4. Request indexing for key pages');
  
  return results;
}

// Manual URL submission function
function getManualSubmissionURLs() {
  console.log('\n🔗 Manual URL Submission Links:');
  console.log('================================');
  
  const keyPages = [
    '',
    '/features/essay-writer',
    '/features/ai-humanizer',
    '/features/ai-content-detector',
    '/blog',
    '/pricing'
  ];

  console.log('\n📌 Google URL Inspection:');
  console.log('1. Go to: https://search.google.com/search-console/');
  console.log('2. Use "URL Inspection" tool for these URLs:');
  keyPages.forEach(page => {
    console.log(`   - ${SITE_URL}${page}`);
  });

  console.log('\n📌 Bing URL Submission:');
  console.log('1. Go to: https://www.bing.com/webmasters/url-submission');
  console.log('2. Submit these URLs:');
  keyPages.forEach(page => {
    console.log(`   - ${SITE_URL}${page}`);
  });
}

// Check if sitemap is accessible
async function checkSitemap() {
  console.log('🔍 Checking sitemap accessibility...');
  
  return new Promise((resolve) => {
    const urlObj = new URL(SITEMAP_URL);
    
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'HEAD',
      headers: {
        'User-Agent': 'Essayy Sitemap Checker 1.0'
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Sitemap is accessible');
        resolve(true);
      } else {
        console.log(`❌ Sitemap not accessible (Status: ${res.statusCode})`);
        resolve(false);
      }
    });

    req.on('error', (err) => {
      console.log(`❌ Error checking sitemap: ${err.message}`);
      resolve(false);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      console.log('❌ Timeout checking sitemap');
      resolve(false);
    });

    req.end();
  });
}

// Main execution
async function main() {
  console.log('🎯 Essayy.com SEO Sitemap Submission Tool');
  console.log('==========================================\n');

  // Check sitemap first
  const sitemapAccessible = await checkSitemap();
  
  if (!sitemapAccessible) {
    console.log('\n❌ Cannot proceed: Sitemap is not accessible');
    console.log('Please ensure your site is deployed and sitemap.xml is available');
    return;
  }

  // Submit sitemap
  await submitSitemap();
  
  // Show manual submission URLs
  getManualSubmissionURLs();
  
  console.log('\n🎉 Done! Monitor your search console for indexing progress.');
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  submitSitemap,
  checkSitemap,
  getManualSubmissionURLs
}; 