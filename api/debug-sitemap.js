// Debug Sitemap - Check what's actually being served
module.exports = async function handler(req, res) {
  console.log('Debug Sitemap API: Starting debug check');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Test all sitemap endpoints
    const endpoints = [
      'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap',
      'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap?direct=true',
    ];

    const results = {};

    for (const endpoint of endpoints) {
      try {
        console.log('Testing endpoint:', endpoint);
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
            'Content-Type': 'application/json'
          },
          signal: AbortSignal.timeout(10000)
        });

        const content = await response.text();
        
        results[endpoint] = {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          contentLength: content.length,
          contentPreview: content.substring(0, 500),
          isXML: content.includes('<?xml') && content.includes('<urlset'),
          urlCount: (content.match(/<url>/g) || []).length
        };
        
      } catch (error) {
        results[endpoint] = {
          error: error.message,
          stack: error.stack
        };
      }
    }

    // Also test the Supabase client method
    try {
      const { createClient } = require('@supabase/supabase-js');
      const supabase = createClient(
        'https://ycloufmcjjfvjxhmslbm.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4'
      );

      const { data: articles, error: dbError } = await supabase
        .from('content_posts')
        .select('slug, created_at')
        .limit(5);

      results['database_test'] = {
        error: dbError?.message || null,
        articleCount: articles?.length || 0,
        sampleSlugs: articles?.map(a => a.slug).slice(0, 3) || []
      };

    } catch (dbErr) {
      results['database_test'] = {
        error: dbErr.message
      };
    }

    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache');
    
    return res.status(200).json({
      timestamp: new Date().toISOString(),
      results: results,
      summary: {
        endpointsTested: endpoints.length,
        workingEndpoints: Object.keys(results).filter(k => !results[k].error).length
      }
    });

  } catch (error) {
    console.error('Debug Sitemap API Error:', error);
    return res.status(500).json({
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  }
};