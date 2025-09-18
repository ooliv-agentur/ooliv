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
    
    console.log(`Raw sitemap from Edge Function: ${sitemapContent.length} bytes, starts with: "${sitemapContent.substring(0, 50).replace(/\n/g, '\\n')}"`);
    
    // Multi-layer content cleaning for bulletproof XML output
    sitemapContent = sitemapContent
      .trim() // Remove leading/trailing whitespace
      .replace(/^[\s\n\r]*(?=<\?xml)/g, '') // Remove any whitespace before XML declaration
      .replace(/^[^\<]*(?=<\?xml)/g, '') // Remove any non-XML characters before declaration
      .replace(/^\n+/, '') // Remove leading newlines specifically
      .replace(/^[\x00-\x1F\x7F-\x9F]*(?=<\?xml)/g, ''); // Remove any control characters
    
    // Byte-level validation: ensure clean start
    const sitemapBytes = new TextEncoder().encode(sitemapContent);
    if (sitemapBytes[0] !== 60) { // 60 is '<' in ASCII
      console.error('Sitemap does not start with < character, first byte:', sitemapBytes[0]);
      // Find first < character and slice from there
      for (let i = 0; i < sitemapBytes.length; i++) {
        if (sitemapBytes[i] === 60) {
          sitemapContent = new TextDecoder().decode(sitemapBytes.slice(i));
          break;
        }
      }
    }
    
    // Final validation: ensure it starts with XML declaration
    if (!sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      const xmlStart = sitemapContent.indexOf('<?xml');
      if (xmlStart > 0) {
        sitemapContent = sitemapContent.substring(xmlStart);
        console.log(`Corrected sitemap start by removing ${xmlStart} characters`);
      } else {
        console.error('No valid XML declaration found in sitemap content');
        throw new Error('Invalid XML content received from Edge Function - no XML declaration found');
      }
    }

    // Additional content validation
    if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('</urlset>')) {
      console.error('Sitemap missing required XML structure');
      throw new Error('Invalid sitemap structure - missing urlset elements');
    }

    console.log(`Clean sitemap ready: ${sitemapContent.length} bytes, starts correctly with XML declaration`);

    // Set proper headers for XML sitemap with explicit Content-Length
    const contentLength = new TextEncoder().encode(sitemapContent).length;
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=300, must-revalidate');
    res.setHeader('Content-Length', contentLength.toString());
    res.status(200);
    res.end(sitemapContent);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}