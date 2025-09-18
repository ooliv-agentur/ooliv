export default async function handler(req, res) {
  try {
    // Call the Supabase Edge Function directly - NO LOGGING BEFORE RESPONSE
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

    // NUCLEAR BYTE-LEVEL CLEANING - NO CONSOLE OUTPUT before res.end()
    let sitemapContent = await response.text();
    
    // 1. Remove BOM (Byte Order Mark) - U+FEFF, UTF-8 BOM (EF BB BF)
    sitemapContent = sitemapContent.replace(/^\uFEFF/, ''); // Unicode BOM
    const bomBytes = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8 BOM bytes
    const contentBytes = new TextEncoder().encode(sitemapContent);
    if (contentBytes.length >= 3 && 
        contentBytes[0] === bomBytes[0] && 
        contentBytes[1] === bomBytes[1] && 
        contentBytes[2] === bomBytes[2]) {
      sitemapContent = new TextDecoder().decode(contentBytes.slice(3));
    }
    
    // 2. NUCLEAR BYTE-LEVEL SEARCH for XML start - NO LOGGING
    const xmlStartBytes = new TextEncoder().encode('<?xml');
    const currentBytes = new TextEncoder().encode(sitemapContent);
    let xmlStartIndex = -1;
    
    for (let i = 0; i <= currentBytes.length - xmlStartBytes.length; i++) {
      let match = true;
      for (let j = 0; j < xmlStartBytes.length; j++) {
        if (currentBytes[i + j] !== xmlStartBytes[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        xmlStartIndex = i;
        break;
      }
    }
    
    if (xmlStartIndex === -1) {
      throw new Error('No XML declaration found in Edge Function response');
    }
    
    if (xmlStartIndex > 0) {
      sitemapContent = new TextDecoder().decode(currentBytes.slice(xmlStartIndex));
    }

    // 3. FINAL BYTE VALIDATION - NO LOGGING
    const finalBytes = new TextEncoder().encode(sitemapContent);
    
    if (finalBytes[0] !== 0x3C) { // 0x3C is '<' in hex
      throw new Error(`API validation failed: First byte is 0x${finalBytes[0].toString(16)} not 0x3C (<)`);
    }

    // Final validation: ensure it starts with XML declaration
    if (!sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      const xmlStart = sitemapContent.indexOf('<?xml');
      if (xmlStart > 0) {
        sitemapContent = sitemapContent.substring(xmlStart);
      } else {
        throw new Error('Invalid XML content received from Edge Function - no XML declaration found');
      }
    }

    // Additional content validation
    if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('</urlset>')) {
      throw new Error('Invalid sitemap structure - missing urlset elements');
    }

    // CRITICAL: Set headers and send response - NO LOGGING AFTER THIS POINT
    const contentLength = new TextEncoder().encode(sitemapContent).length;
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Content-Length', contentLength.toString());
    res.status(200);
    res.end(sitemapContent);

  } catch (error) {
    // CRITICAL: No console.log here - could interfere with response
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}