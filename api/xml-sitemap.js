// Vercel API Route for XML Sitemap
module.exports = async function handler(req, res) {
  console.log('XML Sitemap API: Request received');
  console.log('XML Sitemap API: Method:', req.method);
  console.log('XML Sitemap API: URL:', req.url);

  // Only GET requests
  if (req.method !== 'GET') {
    console.log('XML Sitemap API: Invalid method');
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.status(405).send('<?xml version="1.0" encoding="UTF-8"?><error>Method not allowed</error>');
    return;
  }

  try {
    console.log('XML Sitemap API: Starting sitemap generation request');
    
    // Set timeout for the request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    try {
      // Direct fetch to Supabase Edge Function with timeout
      const response = await fetch('https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
          'Accept': 'application/xml',
          'User-Agent': 'Vercel-API-Route/1.0'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log('XML Sitemap API: Edge function response status:', response.status);
      console.log('XML Sitemap API: Edge function response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.log('XML Sitemap API: Edge function error response:', errorText);
        throw new Error(`Edge function returned ${response.status}: ${errorText}`);
      }

      // Get response as text
      const xmlText = await response.text();
      console.log('XML Sitemap API: Received XML length:', xmlText.length);
      console.log('XML Sitemap API: XML preview:', xmlText.substring(0, 200) + '...');
      
      // Enhanced validation
      if (!xmlText || xmlText.trim().length === 0) {
        throw new Error('Empty XML response from Edge function');
      }
      
      if (!xmlText.trim().startsWith('<?xml')) {
        console.log('XML Sitemap API: Invalid XML format, content:', xmlText.substring(0, 500));
        throw new Error('Invalid XML response - does not start with XML declaration');
      }
      
      // Basic URL count check
      const urlCount = (xmlText.match(/<url>/g) || []).length;
      console.log('XML Sitemap API: Found URLs in sitemap:', urlCount);
      
      if (urlCount === 0) {
        throw new Error('No URLs found in sitemap');
      }
      
      // Set response headers
      res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Robots-Tag', 'index, follow');
      
      console.log('XML Sitemap API: Sending successful response with', urlCount, 'URLs');
      res.status(200).send(xmlText);

    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Edge function request timed out after 30 seconds');
      }
      throw fetchError;
    }

  } catch (error) {
    console.error('XML Sitemap API: Error occurred:', error);
    console.error('XML Sitemap API: Error stack:', error.stack);
    
    // XML error response with more details
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <message>Sitemap generation failed</message>
  <details>${error.message}</details>
  <timestamp>${new Date().toISOString()}</timestamp>
</error>`;
    
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(500).send(errorXml);
  }
};