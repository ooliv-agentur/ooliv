// Internal API to store/cache the generated sitemap
const fs = require('fs').promises;
const path = require('path');

let cachedSitemap = null;
let cacheTimestamp = null;

module.exports = async function handler(req, res) {
  console.log('💾 Store Sitemap API: Received request');
  
  // Handle both GET (retrieve) and POST (store) requests
  if (req.method === 'GET') {
    // Return cached sitemap
    if (cachedSitemap && cacheTimestamp) {
      res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
      res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=1800');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Robots-Tag', 'index, follow');
      res.setHeader('X-Sitemap-Generated', cacheTimestamp);
      
      console.log('✅ Serving cached sitemap');
      return res.status(200).send(cachedSitemap);
    } else {
      console.log('❌ No cached sitemap available');
      return res.status(404).json({ error: 'No sitemap available' });
    }
  }
  
  if (req.method === 'POST') {
    // Store sitemap in cache
    try {
      // Verify internal request
      if (req.headers['x-internal-request'] !== 'true') {
        console.log('❌ Unauthorized external request');
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      // Get the XML content from request body
      let sitemapContent = '';
      
      if (typeof req.body === 'string') {
        sitemapContent = req.body;
      } else if (req.body && typeof req.body === 'object') {
        sitemapContent = JSON.stringify(req.body);
      } else {
        // Handle raw body
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        await new Promise(resolve => req.on('end', resolve));
        sitemapContent = Buffer.concat(chunks).toString();
      }
      
      if (!sitemapContent || sitemapContent.length < 100) {
        throw new Error('Invalid sitemap content received');
      }
      
      // Validate XML structure
      if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('</urlset>')) {
        throw new Error('Invalid XML sitemap structure');
      }
      
      // Cache the sitemap
      cachedSitemap = sitemapContent;
      cacheTimestamp = new Date().toISOString();
      
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      
      console.log(`✅ Sitemap cached successfully: ${urlCount} URLs`);
      
      return res.status(200).json({
        success: true,
        message: 'Sitemap stored successfully',
        timestamp: cacheTimestamp,
        urlCount: urlCount
      });
      
    } catch (error) {
      console.error('❌ Store Sitemap Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
};