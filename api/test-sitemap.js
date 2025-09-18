// Test API Route to verify routing works
module.exports = async function handler(req, res) {
  console.log('Test API Route: Called successfully');
  console.log('Test API Route: Method:', req.method);
  console.log('Test API Route: URL:', req.url);
  
  try {
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    
    const response = { 
      message: 'API Route is working! (Fresh deployment)',
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      status: 'success',
      deployment: 'v2.0'
    };
    
    console.log('Test API Route: Sending response:', response);
    res.status(200).json(response);
  } catch (error) {
    console.error('Test API Route: Error:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};