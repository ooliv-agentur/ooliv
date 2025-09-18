export default async function handler(req, res) {
  try {
    // Fetch clean XML from Supabase Edge Function
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
    
    // Ultra-aggressive cleaning: Remove BOM, all leading whitespace and invisible characters
    sitemapContent = sitemapContent
      .replace(/^\uFEFF/, '') // Remove BOM
      .replace(/^[\s\n\r\t\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]+/, '') // Remove all types of whitespace
      .replace(/^[^\<]*/, ''); // Remove everything before first <
    
    // Find XML declaration and ensure it starts the content
    const xmlStart = sitemapContent.indexOf('<?xml');
    if (xmlStart > 0) {
      sitemapContent = sitemapContent.substring(xmlStart);
    } else if (xmlStart === -1) {
      throw new Error('No XML declaration found in response');
    }
    
    // Final cleaning pass
    sitemapContent = sitemapContent.replace(/^[\s\n\r\t]+/, '');

    // Validate XML structure
    if (!sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>') ||
        !sitemapContent.includes('<urlset') || 
        !sitemapContent.includes('</urlset>')) {
      throw new Error('Invalid XML structure in response');
    }

    // Set proper XML headers - no HTML fallbacks
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=300, must-revalidate');
    res.setHeader('Content-Disposition', 'inline; filename="sitemap.xml"');
    res.setHeader('Content-Length', Buffer.byteLength(sitemapContent, 'utf8').toString());
    
    // Send only XML content
    res.status(200).end(sitemapContent);

  } catch (error) {
    // Return XML error response, no HTML
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>';
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.status(500).end(errorXml);
  }
}