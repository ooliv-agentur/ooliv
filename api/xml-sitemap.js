export default async function handler(req, res) {
  // Only GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'application/xml; charset=UTF-8' });
    res.end('<?xml version="1.0" encoding="UTF-8"?><error>Method not allowed</error>');
    return;
  }

  try {
    console.log('API Route: Starting sitemap generation request');
    
    // Direct fetch to Supabase Edge Function
    const response = await fetch('https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'Accept': 'application/xml'
      }
    });

    console.log('API Route: Edge function response status:', response.status);

    if (!response.ok) {
      throw new Error(`Edge function returned ${response.status}`);
    }

    // Get response as text and send directly - no buffer manipulation
    const xmlText = await response.text();
    
    // Simple validation - ensure it starts with <?xml
    if (!xmlText.startsWith('<?xml')) {
      throw new Error('Invalid XML response');
    }
    
    // Send headers and response directly
    res.writeHead(200, {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    
    res.end(xmlText);

  } catch (error) {
    // XML error response
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>';
    
    res.writeHead(500, {
      'Content-Type': 'application/xml; charset=UTF-8'
    });
    res.end(errorXml);
  }
}