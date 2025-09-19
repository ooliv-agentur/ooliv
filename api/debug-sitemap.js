export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const baseUrl = 'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap';
    const forceRegenerate = req.query.revalidate === 'true';
    const url = forceRegenerate ? `${baseUrl}?revalidate=true` : baseUrl;

    console.log('Debug: Fetching sitemap from:', url);

    // Fetch from Supabase Edge Function
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4`,
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'Content-Type': 'application/json'
      }
    });

    const sitemapXml = await response.text();
    
    // Parse XML to count URLs
    const urlMatches = sitemapXml.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    
    // Extract article URLs specifically
    const articleUrls = [];
    const articleMatches = sitemapXml.match(/<loc>https:\/\/ooliv\.de\/artikel\/([^<]+)<\/loc>/g);
    if (articleMatches) {
      articleUrls.push(...articleMatches.map(match => 
        match.replace('<loc>https://ooliv.de/artikel/', '').replace('</loc>', '')
      ));
    }

    const debugInfo = {
      timestamp: new Date().toISOString(),
      supabaseResponse: {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      },
      sitemap: {
        totalUrlCount: urlCount,
        articleCount: articleUrls.length,
        sitemapSize: sitemapXml.length,
        isValidXml: sitemapXml.includes('<?xml') && sitemapXml.includes('</urlset>'),
        cacheStatus: response.headers.get('X-Cache-Status') || 'UNKNOWN',
        generatedAt: response.headers.get('X-Generated-At') || 'UNKNOWN'
      },
      articleSlugs: articleUrls.slice(0, 10), // First 10 for debugging
      sitemapPreview: sitemapXml.substring(0, 500) + (sitemapXml.length > 500 ? '...' : ''),
      environment: {
        forceRegenerate,
        requestUrl: url,
        userAgent: req.headers['user-agent'] || 'Unknown'
      }
    };

    console.log('Debug info generated:', {
      urlCount: debugInfo.sitemap.totalUrlCount,
      articleCount: debugInfo.sitemap.articleCount,
      cacheStatus: debugInfo.sitemap.cacheStatus
    });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.json(debugInfo);

  } catch (error) {
    console.error('Debug sitemap error:', error);
    res.status(500).json({
      error: 'Failed to debug sitemap',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}