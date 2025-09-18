// Local Sitemap Generator - Direct Database Access
// This function generates the sitemap locally without external API calls
const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
  console.log('Local Sitemap API: Starting local sitemap generation');
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    console.log('Local Sitemap API: Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Initialize Supabase client with service role key for direct database access
    const supabase = createClient(
      'https://ycloufmcjjfvjxhmslbm.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzE1ODQyOCwiZXhwIjoyMDU4NzM0NDI4fQ.lrs32bCmWEUQnNKqRUIFrMRdGcMJYTSFD3b2VhxKCng'
    );

    console.log('Local Sitemap API: Fetching articles from database');
    
    // Fetch articles from the database
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Local Sitemap API: Database error:', error);
      throw new Error(`Database fetch failed: ${error.message}`);
    }

    console.log('Local Sitemap API: Found', articles?.length || 0, 'articles');

    // Static pages configuration
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

    // Add article pages (if any)
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

    // Count URLs for validation
    const urlCount = (sitemapXML.match(/<url>/g) || []).length;
    const expectedCount = staticPages.length + (articles?.length || 0);
    
    console.log('Local Sitemap API: Generated sitemap with', urlCount, 'URLs');
    console.log('Local Sitemap API: Expected', expectedCount, 'URLs');

    if (urlCount !== expectedCount) {
      console.warn(`Local Sitemap API: URL count mismatch. Generated: ${urlCount}, Expected: ${expectedCount}`);
    }

    // Set proper headers (no conflicts with vercel.json now)
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=1800'); // 30 minutes
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Robots-Tag', 'index, follow');

    console.log('Local Sitemap API: Sitemap generation successful');
    return res.status(200).send(sitemapXML);

  } catch (error) {
    console.error('Local Sitemap API: Error:', error);
    console.error('Local Sitemap API: Error stack:', error.stack);

    // Return a minimal fallback sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ooliv.de/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ooliv.de/artikel</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Fallback sitemap due to error: ${error.message} -->
</urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300'); // 5 minutes for error cache
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Robots-Tag', 'index, follow');

    console.log('Local Sitemap API: Returning fallback sitemap');
    return res.status(200).send(fallbackSitemap);
  }
};