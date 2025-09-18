// Vercel API Route for XML Sitemap
module.exports = async function handler(req, res) {
  // Only GET requests
  if (req.method !== 'GET') {
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.status(405).send('<?xml version="1.0" encoding="UTF-8"?><error>Method not allowed</error>');
    return;
  }

  try {
    console.log('API Route: Starting sitemap generation request');
    console.log('API Route: Request method:', req.method);
    console.log('API Route: Request URL:', req.url);
    
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
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    res.status(200).send(xmlText);

  } catch (error) {
    console.log('API Route: Error occurred:', error);
    // XML error response
    const errorXml = '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>';
    
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.status(500).send(errorXml);
  }
};