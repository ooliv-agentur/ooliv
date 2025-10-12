// Simple in-memory rate limiter for webhook endpoints
// Tracks requests per IP address with sliding window

const requestLog = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // Max requests per window

/**
 * Check if a request should be rate limited
 * @param {string} identifier - IP address or other identifier
 * @returns {Object} - { allowed: boolean, remaining: number, resetAt: number }
 */
function checkRateLimit(identifier) {
  const now = Date.now();
  
  // Get or create request history for this identifier
  if (!requestLog.has(identifier)) {
    requestLog.set(identifier, []);
  }
  
  const requests = requestLog.get(identifier);
  
  // Remove old requests outside the window
  const validRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  // Check if limit exceeded
  if (validRequests.length >= MAX_REQUESTS) {
    const oldestRequest = Math.min(...validRequests);
    const resetAt = oldestRequest + RATE_LIMIT_WINDOW;
    
    return {
      allowed: false,
      remaining: 0,
      resetAt
    };
  }
  
  // Add current request and update
  validRequests.push(now);
  requestLog.set(identifier, validRequests);
  
  return {
    allowed: true,
    remaining: MAX_REQUESTS - validRequests.length,
    resetAt: now + RATE_LIMIT_WINDOW
  };
}

/**
 * Clean up old entries periodically to prevent memory leaks
 */
function cleanup() {
  const now = Date.now();
  for (const [identifier, requests] of requestLog.entries()) {
    const validRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
    if (validRequests.length === 0) {
      requestLog.delete(identifier);
    } else {
      requestLog.set(identifier, validRequests);
    }
  }
}

// Run cleanup every 5 minutes
setInterval(cleanup, 5 * 60 * 1000);

module.exports = { checkRateLimit };
