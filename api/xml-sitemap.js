// Completely independent XML sitemap handler - no HTML fallbacks, no string processing
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Method not allowed</error>';
    const errorBuffer = Buffer.from(errorXml, 'utf8');
    res.writeHead(405, {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Content-Length': errorBuffer.length.toString()
    });
    res.end(errorBuffer);
    return;
  }

  try {
    // Fetch raw bytes from Supabase Edge Function
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

    // Get raw bytes directly - no string manipulation
    const arrayBuffer = await response.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);

    // CRITICAL: Remove any leading bytes that are not XML (< = 0x3C)
    // This ensures absolutely clean XML output in RAW mode
    while (buffer.length > 0 && buffer[0] !== 0x3C) {
      buffer = buffer.subarray(1);
    }

    // Emergency validation - buffer must start with XML
    if (buffer.length === 0 || buffer[0] !== 0x3C) {
      throw new Error('Invalid XML buffer after cleaning');
    }

    // Set headers explicitly with writeHead using cleaned buffer length
    const headers = {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=300, must-revalidate',
      'Content-Disposition': 'inline; filename="sitemap.xml"',
      'Content-Length': buffer.length.toString()
    };

    // Stream cleaned raw bytes directly - no Next.js string processing
    res.writeHead(200, headers);
    res.end(buffer);

  } catch (error) {
    // Return XML error response
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>';
    const errorBuffer = Buffer.from(errorXml, 'utf8');
    
    res.writeHead(500, {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Content-Length': errorBuffer.length.toString()
    });
    res.end(errorBuffer);
  }
}