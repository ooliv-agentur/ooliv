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
    
    const originalLength = sitemapContent.length;
    console.log(`Raw sitemap from Edge Function: ${originalLength} bytes, starts with: "${sitemapContent.substring(0, 50).replace(/\n/g, '\\n')}"`);
    console.log(`Raw hex start: ${Array.from(new TextEncoder().encode(sitemapContent.substring(0, 10))).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
    // ULTRA-HARDENED API ROUTE CLEANING - Maximum security against all whitespace variants
    
    // 1. Remove BOM (Byte Order Mark) - U+FEFF, UTF-8 BOM (EF BB BF)
    sitemapContent = sitemapContent.replace(/^\uFEFF/, ''); // Unicode BOM
    const bomBytes = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8 BOM bytes
    const contentBytes = new TextEncoder().encode(sitemapContent);
    if (contentBytes.length >= 3 && 
        contentBytes[0] === bomBytes[0] && 
        contentBytes[1] === bomBytes[1] && 
        contentBytes[2] === bomBytes[2]) {
      sitemapContent = new TextDecoder().decode(contentBytes.slice(3));
      console.log('Removed UTF-8 BOM from content');
    }
    
    // 2. Remove ALL Unicode whitespace variants (including invisible ones)
    sitemapContent = sitemapContent.replace(/^[\u0009-\u000D\u0020\u0085\u00A0\u1680\u2000-\u200F\u2028\u2029\u202F\u205F\u3000]*(?=<\?xml)/g, '');
    
    // 3. Multi-layer content cleaning for bulletproof XML output
    sitemapContent = sitemapContent
      .trim() // Remove leading/trailing whitespace
      .replace(/^[\s\n\r]*(?=<\?xml)/g, '') // Remove any whitespace before XML declaration
      .replace(/^[^\<]*(?=<\?xml)/g, '') // Remove any non-XML characters before declaration
      .replace(/^\n+/, '') // Remove leading newlines specifically
      .replace(/(<\?xml[^>]*\?>)\s*(<urlset)/g, '$1$2') // Remove whitespace between XML declaration and urlset
      .replace(/^[\x00-\x1F\x7F-\x9F]*(?=<\?xml)/g, ''); // Remove any control characters

    // 4. Enhanced byte-level validation with hex analysis
    const sitemapBytes = new TextEncoder().encode(sitemapContent);
    console.log(`Cleaned content: ${sitemapContent.length} chars (removed ${originalLength - sitemapContent.length}), hex start: ${Array.from(sitemapBytes.slice(0, 10)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
    if (sitemapBytes[0] !== 0x3C) { // 0x3C is '<' in hex
      console.error(`CRITICAL: Sitemap does not start with < character, first byte: 0x${sitemapBytes[0].toString(16)} (decimal: ${sitemapBytes[0]})`);
      console.error(`First 20 bytes in hex: ${Array.from(sitemapBytes.slice(0, 20)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
      
      // Find first < character and slice from there
      for (let i = 0; i < sitemapBytes.length; i++) {
        if (sitemapBytes[i] === 0x3C) {
          sitemapContent = new TextDecoder().decode(sitemapBytes.slice(i));
          console.log(`Emergency correction: Removed ${i} leading bytes to reach first '<'`);
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