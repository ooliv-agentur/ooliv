/**
 * Security helper utilities for input validation and sanitization
 */

/**
 * Validate UUID format
 * @param uuid - String to validate
 * @returns boolean indicating if string is a valid UUID
 */
export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

/**
 * Sanitize string for logging (remove sensitive data)
 * @param str - String to sanitize
 * @returns Sanitized string
 */
export function sanitizeForLogging(str: string): string {
  // Remove potential tokens, emails, and sensitive patterns
  return str
    .replace(/Bearer\s+[A-Za-z0-9\-._~+/]+=*/gi, 'Bearer [REDACTED]')
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL_REDACTED]')
    .replace(/\d{3,}/g, '[NUMBER_REDACTED]');
}

/**
 * Validate URL format
 * @param url - URL to validate
 * @returns boolean indicating if URL is valid
 */
export function isValidURL(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Rate limiting helper for client-side
 * @param key - Unique key for rate limiting
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns boolean indicating if request is allowed
 */
export function checkClientRateLimit(key: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const storageKey = `rateLimit_${key}`;
  
  try {
    const stored = localStorage.getItem(storageKey);
    const requests = stored ? JSON.parse(stored) : [];
    
    // Remove old requests
    const validRequests = requests.filter((timestamp: number) => now - timestamp < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    localStorage.setItem(storageKey, JSON.stringify(validRequests));
    
    return true;
  } catch {
    // If localStorage fails, allow the request
    return true;
  }
}
