// Supabase Database Webhook Handler - Regenerate Sitemap on Content Changes
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

module.exports = async function handler(req, res) {
  console.log('🔔 Webhook Sitemap Update: Received request');
  console.log('Method:', req.method);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Webhook signature verification for security
    const signature = req.headers['x-webhook-signature'] || req.headers['authorization'];
    const webhookSecret = process.env.WEBHOOK_SECRET || 'fallback-secret-key';
    
    if (signature) {
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(JSON.stringify(req.body))
        .digest('hex');
      
      const providedSignature = signature.replace('Bearer ', '').replace('sha256=', '');
      
      if (expectedSignature !== providedSignature) {
        console.log('❌ Invalid webhook signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
      
      console.log('✅ Webhook signature verified');
    } else {
      console.log('⚠️ No signature provided - allowing for testing');
    }

    // Parse webhook payload
    const { type, table, record, old_record } = req.body;
    console.log('📝 Webhook event:', { type, table, record_id: record?.id });

    // Only process content_posts table changes
    if (table !== 'content_posts') {
      console.log('ℹ️ Ignoring webhook for table:', table);
      return res.status(200).json({ message: 'Table not relevant for sitemap' });
    }

    // Initialize Supabase client
    const supabase = createClient(
      'https://ycloufmcjjfvjxhmslbm.supabase.co',
      process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4'
    );

    console.log('🔄 Fetching all articles for sitemap regeneration...');

    // Fetch all published articles
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Database error:', error);
      throw new Error(`Database fetch failed: ${error.message}`);
    }

    console.log(`📊 Found ${articles?.length || 0} articles`);

    // Define static pages
    const staticPages = [
      { url: 'https://ooliv.de/', priority: '1.0', changefreq: 'daily' },
      { url: 'https://ooliv.de/ueber-uns', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://ooliv.de/kontakt', priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/referenzen', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/webdesign', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/webentwicklung', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/seo-optimierung', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/google-ads', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/ki-technologien', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/content-erstellung', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/strategie', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://ooliv.de/klickbetrug', priority: '0.6', changefreq: 'monthly' },
      { url: 'https://ooliv.de/werbeagentur-frankfurt', priority: '0.6', changefreq: 'monthly' },
      { url: 'https://ooliv.de/werbeagentur-wiesbaden', priority: '0.6', changefreq: 'monthly' },
      { url: 'https://ooliv.de/artikel', priority: '0.8', changefreq: 'daily' },
      { url: 'https://ooliv.de/danke', priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/en/thank-you', priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/impressum', priority: '0.3', changefreq: 'yearly' }
    ];

    // Generate sitemap XML
    const currentDate = new Date().toISOString();
    
    let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemapXML += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add article pages
    if (articles && articles.length > 0) {
      articles.forEach(article => {
        if (article.slug) {
          const articleDate = new Date(article.created_at).toISOString();
          sitemapXML += `
  <url>
    <loc>https://ooliv.de/artikel/${article.slug}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        }
      });
    }

    sitemapXML += `
</urlset>`;

    // Validate XML structure
    if (!sitemapXML.includes('<urlset') || !sitemapXML.includes('</urlset>')) {
      throw new Error('Generated XML structure validation failed');
    }

    const urlCount = (sitemapXML.match(/<url>/g) || []).length;
    const expectedCount = staticPages.length + (articles?.length || 0);
    
    console.log(`📈 Generated sitemap: ${urlCount} URLs (${articles?.length || 0} articles + ${staticPages.length} static pages)`);

    // Store the updated sitemap (for now, we'll use Supabase storage or return it)
    // In production, you might want to store this in Vercel's file system or external storage
    
    // For immediate response, we'll also call the generate-sitemap endpoint to update the cached version
    try {
      const sitemapUpdateResponse = await fetch(`${req.headers.host ? `https://${req.headers.host}` : 'http://localhost:8080'}/api/store-sitemap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
          'X-Internal-Request': 'true'
        },
        body: sitemapXML
      });
      
      if (sitemapUpdateResponse.ok) {
        console.log('✅ Sitemap cache updated successfully');
      } else {
        console.log('⚠️ Failed to update sitemap cache');
      }
    } catch (updateError) {
      console.log('⚠️ Could not update sitemap cache:', updateError.message);
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Sitemap regenerated successfully',
      timestamp: currentDate,
      stats: {
        totalUrls: urlCount,
        articleUrls: articles?.length || 0,
        staticUrls: staticPages.length,
        triggeredBy: {
          event: type,
          table: table,
          recordId: record?.id,
          slug: record?.slug
        }
      }
    });

  } catch (error) {
    console.error('❌ Webhook Sitemap Update Error:', error);
    console.error('Stack:', error.stack);
    
    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};