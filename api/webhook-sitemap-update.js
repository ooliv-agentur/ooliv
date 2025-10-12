// Supabase Database Webhook Handler - Regenerate Sitemap on Content Changes
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
const { checkRateLimit } = require('./rate-limiter');

module.exports = async function handler(req, res) {
  console.log('🔔 Webhook Sitemap Update: Received request');
  console.log('Method:', req.method);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting by IP address
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || 
                   req.headers['x-real-ip'] || 
                   req.socket.remoteAddress || 
                   'unknown';
  
  const rateLimitResult = checkRateLimit(clientIp);
  
  if (!rateLimitResult.allowed) {
    console.log(`⚠️ Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({ 
      error: 'Too many requests',
      retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
    });
  }
  
  console.log(`✅ Rate limit check passed. Remaining: ${rateLimitResult.remaining}`);
  
  // Set rate limit headers
  res.setHeader('X-RateLimit-Limit', '10');
  res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
  res.setHeader('X-RateLimit-Reset', Math.ceil(rateLimitResult.resetAt / 1000).toString());

  try {
    // Webhook signature verification for security
    const signature = req.headers['x-webhook-signature'] || req.headers['authorization'];
    const webhookSecret = process.env.WEBHOOK_SECRET || 'fallback-secret-key';
    
    if (signature) {
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(JSON.stringify(req.body))
        .digest('hex');
      
      const providedSignature = signature.replace('Bearer ', '').replace('sha256=', '');
      
      if (expectedSignature !== providedSignature) {
        console.log('❌ Invalid webhook signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
      
      console.log('✅ Webhook signature verified');
    } else {
      console.log('⚠️ No signature provided - allowing for testing');
    }

    // Parse webhook payload
    const { type, table, record, old_record } = req.body;
    console.log('📝 Webhook event:', { type, table, record_id: record?.id });

    // Only process content_posts table changes
    if (table !== 'content_posts') {
      console.log('ℹ️ Ignoring webhook for table:', table);
      return res.status(200).json({ message: 'Table not relevant for sitemap' });
    }

    console.log('🔄 Triggering sitemap regeneration via Supabase Edge Function...');
    console.log('📝 Content change detected:', { type, recordId: record?.id || old_record?.id });

    // Trigger sitemap regeneration via Supabase Edge Function with force revalidate
    const sitemapUrl = 'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap?revalidate=true';
    
    console.log('🚀 Calling Supabase Edge Function:', sitemapUrl);
    
    const sitemapResponse = await fetch(sitemapUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4`,
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4',
        'Content-Type': 'application/json'
      }
    });

    const sitemapText = await sitemapResponse.text();
    const urlCount = (sitemapText.match(/<url>/g) || []).length;
    const isValidXml = sitemapText.includes('<?xml') && sitemapText.includes('</urlset>');

    console.log('📊 Edge Function response:', {
      status: sitemapResponse.status,
      urlCount,
      isValidXml,
      cacheStatus: sitemapResponse.headers.get('X-Cache-Status'),
      generatedAt: sitemapResponse.headers.get('X-Generated-At'),
      sitemapSize: sitemapText.length
    });

    if (!sitemapResponse.ok) {
      throw new Error(`Sitemap generation failed: ${sitemapResponse.status} ${sitemapResponse.statusText}`);
    }

    if (!isValidXml) {
      throw new Error('Generated sitemap is not valid XML');
    }

    if (urlCount === 0) {
      throw new Error('Generated sitemap contains no URLs');
    }

    console.log('✅ Sitemap regenerated successfully via Edge Function');
    
    // Return success response with detailed stats
    return res.status(200).json({
      success: true,
      message: 'Sitemap regenerated successfully via Supabase Edge Function',
      timestamp: new Date().toISOString(),
      stats: {
        totalUrls: urlCount,
        sitemapSize: sitemapText.length,
        cacheStatus: sitemapResponse.headers.get('X-Cache-Status') || 'UNKNOWN',
        regeneratedAt: sitemapResponse.headers.get('X-Generated-At') || new Date().toISOString()
      },
      trigger: {
        event: type,
        table: table,
        recordId: record?.id || old_record?.id,
        slug: record?.slug || old_record?.slug
      },
      edgeFunction: {
        url: sitemapUrl,
        status: sitemapResponse.status,
        responseHeaders: {
          cacheStatus: sitemapResponse.headers.get('X-Cache-Status'),
          generatedAt: sitemapResponse.headers.get('X-Generated-At'),
          urlCount: sitemapResponse.headers.get('X-URL-Count')
        }
      }
    });

  } catch (error) {
    console.error('❌ Webhook Sitemap Update Error:', error);
    console.error('Stack:', error.stack);
    
    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};