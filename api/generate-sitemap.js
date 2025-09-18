// Comprehensive Sitemap Generator - Vercel API Route
// This function internally calls the Supabase Edge Function to generate the sitemap
module.exports = async function handler(req, res) {
  console.log('Generate Sitemap API: Starting sitemap generation');
  console.log('Generate Sitemap API: Method:', req.method);
  console.log('Generate Sitemap API: URL:', req.url);
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    console.log('Generate Sitemap API: Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Set response headers first
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Robots-Tag', 'index, follow');
    
    console.log('Generate Sitemap API: Fetching from Supabase Edge Function');
    
    // Fetch from Supabase Edge Function with timeout and retry logic
    const maxRetries = 3;
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Generate Sitemap API: Attempt ${attempt}/${maxRetries}`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
        
        const response = await fetch(
          'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap?direct=true&v=9&cb=' + Date.now(),
          {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
              'Content-Type': 'application/json',
              'User-Agent': 'OOLIV-Sitemap-Generator/1.0'
            },
            signal: controller.signal
          }
        );
        
        clearTimeout(timeoutId);
        
        console.log('Generate Sitemap API: Response status:', response.status);
        console.log('Generate Sitemap API: Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const sitemapContent = await response.text();
        console.log('Generate Sitemap API: Content length:', sitemapContent.length);
        
        // Validate the sitemap content
        if (!sitemapContent || sitemapContent.length < 100) {
          throw new Error('Empty or invalid sitemap content received');
        }
        
        if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('</urlset>')) {
          throw new Error('Invalid XML sitemap structure');
        }
        
        // Count URLs in sitemap for validation
        const urlCount = (sitemapContent.match(/<url>/g) || []).length;
        console.log('Generate Sitemap API: URL count in sitemap:', urlCount);
        
        if (urlCount < 130) { // Expecting ~133 URLs (115 articles + 18 static pages)
          console.warn(`Generate Sitemap API: Low URL count: ${urlCount}, expected ~133`);
        }
        
        console.log('Generate Sitemap API: Sitemap generation successful');
        return res.status(200).send(sitemapContent);
        
      } catch (error) {
        lastError = error;
        console.error(`Generate Sitemap API: Attempt ${attempt} failed:`, error.message);
        
        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log(`Generate Sitemap API: Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    // All retries failed
    throw lastError;
    
  } catch (error) {
    console.error('Generate Sitemap API: Final error:', error);
    console.error('Generate Sitemap API: Error stack:', error.stack);
    
    // Return a basic sitemap with static pages as fallback
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ooliv.de/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ooliv.de/ueber-uns</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/kontakt</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/referenzen</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/webdesign</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/webentwicklung</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/seo-optimierung</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/google-ads</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/ki-technologien</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/content-erstellung</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/strategie</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/klickbetrug</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ooliv.de/werbeagentur-frankfurt</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ooliv.de/werbeagentur-wiesbaden</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ooliv.de/artikel</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Fallback sitemap due to error: ${error.message} -->
</urlset>`;
    
    console.log('Generate Sitemap API: Returning fallback sitemap');
    return res.status(200).send(fallbackSitemap);
  }
};