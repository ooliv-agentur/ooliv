export default async function handler(req, res) {
  try {
    // Call the Supabase Edge Function directly
    const response = await fetch('https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4'
      }
    });

    if (!response.ok) {
      throw new Error(`Supabase function returned ${response.status}`);
    }

    let sitemapContent = await response.text();
    
    // Multi-layer content cleaning for robust XML output
    sitemapContent = sitemapContent
      .trim() // Remove leading/trailing whitespace
      .replace(/^[\s\n\r]*(?=<\?xml)/g, '') // Remove any whitespace before XML declaration
      .replace(/^\n+/, ''); // Remove leading newlines specifically
    
    // Final validation: ensure it starts with XML declaration
    if (!sitemapContent.startsWith('<?xml')) {
      const xmlStart = sitemapContent.indexOf('<?xml');
      if (xmlStart > 0) {
        sitemapContent = sitemapContent.substring(xmlStart);
      } else {
        throw new Error('Invalid XML content received from Edge Function');
      }
    }

    // Set proper headers for XML sitemap - use res.end() for direct control
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=300, must-revalidate');
    res.status(200);
    res.end(sitemapContent);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}