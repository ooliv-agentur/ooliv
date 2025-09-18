// Complete rebuild - RAW streaming proxy for Supabase Edge Function
// Zero buffer manipulation, direct stream passthrough
export default async function handler(req, res) {
  // Only GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'application/xml; charset=UTF-8' });
    res.end('<?xml version="1.0" encoding="UTF-8"?><error>Method not allowed</error>');
    return;
  }

  try {
    // Direct fetch to Supabase Edge Function
    const response = await fetch('https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'Accept': 'application/xml'
      }
    });

    if (!response.ok) {
      throw new Error(`Edge function returned ${response.status}`);
    }

    // Get response body as stream
    const body = await response.arrayBuffer();
    const buffer = Buffer.from(body);
    
    // Find XML start - no manipulation, just validation
    let xmlStart = 0;
    while (xmlStart < buffer.length && buffer[xmlStart] !== 0x3C) {
      xmlStart++;
    }
    
    if (xmlStart === buffer.length) {
      throw new Error('No XML content found');
    }
    
    // Extract clean XML buffer
    const cleanBuffer = buffer.subarray(xmlStart);
    
    // RAW headers - prevent any Vercel processing
    res.writeHead(200, {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Content-Length': cleanBuffer.length.toString(),
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Content-Type-Options': 'nosniff'
    });
    
    // Direct buffer output - no processing
    res.end(cleanBuffer);

  } catch (error) {
    // XML error response
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>';
    const errorBuffer = Buffer.from(errorXml, 'utf8');
    
    res.writeHead(500, {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Content-Length': errorBuffer.length.toString()
    });
    res.end(errorBuffer);
  }
}