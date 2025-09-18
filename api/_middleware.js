// Middleware to ensure API routes are properly handled
module.exports = async function middleware(req, res, next) {
  console.log('API Middleware: Processing request:', req.url);
  
  // Add CORS headers for all API routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Continue to next handler
  next();
};