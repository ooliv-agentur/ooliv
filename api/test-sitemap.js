// Test API Route to verify routing works
export default async function handler(req, res) {
  console.log('Test API Route: Called successfully');
  
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  
  res.end(JSON.stringify({ 
    message: 'API Route is working!',
    timestamp: new Date().toISOString(),
    method: req.method 
  }));
}