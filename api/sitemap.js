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

    // NUCLEAR-LEVEL BYTE ANALYSIS & SECURITY - Maximum protection against all encoding issues
    let sitemapContent = await response.text();
    
    const originalLength = sitemapContent.length;
    const deploymentTimestamp = new Date().toISOString();
    const originalBytes = new TextEncoder().encode(sitemapContent);
    console.log(`DEPLOYMENT ${deploymentTimestamp}: Raw sitemap from Edge Function: ${originalLength} bytes`);
    console.log(`DEPLOYMENT ${deploymentTimestamp}: First 40 raw bytes: ${Array.from(originalBytes.slice(0, 40)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
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
      console.log(`BOM REMOVAL ${deploymentTimestamp}: UTF-8 BOM detected and removed`);
    }
    
    // 2. NUCLEAR BYTE-LEVEL SEARCH for XML start
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
      console.error(`XML SEARCH FAILURE ${deploymentTimestamp}: No XML declaration found`);
      throw new Error('No XML declaration found in Edge Function response');
    }
    
    if (xmlStartIndex > 0) {
      console.log(`BYTE CORRECTION ${deploymentTimestamp}: Removing ${xmlStartIndex} leading bytes before XML`);
      sitemapContent = new TextDecoder().decode(currentBytes.slice(xmlStartIndex));
    }

    // 3. Enhanced byte-level validation with hex analysis
    const finalBytes = new TextEncoder().encode(sitemapContent);
    console.log(`FINAL CHECK ${deploymentTimestamp}: ${sitemapContent.length} chars (removed ${originalLength - sitemapContent.length})`);
    console.log(`FINAL CHECK ${deploymentTimestamp}: First 30 bytes: ${Array.from(finalBytes.slice(0, 30)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
    if (finalBytes[0] !== 0x3C) { // 0x3C is '<' in hex
      console.error(`API FAILURE ${deploymentTimestamp}: Sitemap does not start with < character, first byte: 0x${finalBytes[0].toString(16)} (decimal: ${finalBytes[0]})`);
      console.error(`API FAILURE ${deploymentTimestamp}: First 20 bytes: ${Array.from(finalBytes.slice(0, 20)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
      throw new Error(`API validation failed: First byte is 0x${finalBytes[0].toString(16)} not 0x3C (<)`);
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