export default async function handler(req, res) {
  try {
    // Fetch clean XML from Supabase Edge Function - Cache bust v2
    const response = await fetch('https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4'
      }
    });

    if (!response.ok) {
      throw new Error(`Edge function returned ${response.status}`);
    }

    let sitemapContent = await response.text();
    
    // Aggressive cleaning - remove ALL leading whitespace including newlines
    sitemapContent = sitemapContent.replace(/^\uFEFF/, '').replace(/^[\s\n\r]+/, '');
    
    // Find XML declaration start and slice from there
    const xmlStart = sitemapContent.indexOf('<?xml');
    if (xmlStart > 0) {
      sitemapContent = sitemapContent.substring(xmlStart);
    } else if (xmlStart === -1) {
      throw new Error('No XML declaration found in response');
    }
    
    // Final safety: ensure no leading whitespace remains
    sitemapContent = sitemapContent.replace(/^[\s\n\r]+/, '');

    // Validate XML structure
    if (!sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>') ||
        !sitemapContent.includes('<urlset') || 
        !sitemapContent.includes('</urlset>')) {
      throw new Error('Invalid XML structure in response');
    }

    // Set proper XML headers and send clean response with explicit write
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=300, must-revalidate');
    res.setHeader('Content-Disposition', 'inline; filename="sitemap.xml"');
    res.setHeader('Content-Length', Buffer.byteLength(sitemapContent, 'utf8').toString());
    res.status(200);
    res.write(sitemapContent);
    res.end();

  } catch (error) {
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}