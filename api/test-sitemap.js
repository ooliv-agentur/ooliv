// Test API Route to verify routing works
module.exports = async function handler(req, res) {
  console.log('Test API Route: Called successfully');
  console.log('Test API Route: Method:', req.method);
  console.log('Test API Route: URL:', req.url);
  console.log('Test API Route: Headers:', JSON.stringify(req.headers, null, 2));
  
  try {
    // Set headers first
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Robots-Tag', 'noindex');
    
    const response = { 
      message: 'API Route is working! (Fresh deployment v3.0)',
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      status: 'success',
      deployment: 'v3.0',
      vercel_region: process.env.VERCEL_REGION || 'unknown',
      node_version: process.version
    };
    
    console.log('Test API Route: Sending response:', response);
    
    // Send response
    res.status(200).json(response);
  } catch (error) {
    console.error('Test API Route: Error:', error);
    console.error('Test API Route: Error stack:', error.stack);
    
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
};