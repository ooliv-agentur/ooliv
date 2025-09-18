import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all articles with their canonical slugs from BabyloveGrowth webhook
    // CRITICAL: Use slugs exactly as provided by webhook - do not generate or modify
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .not('slug', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }

    // Get current date in ISO format (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Static pages with correct priorities and change frequencies
    const staticPages = [
      { url: 'https://ooliv.de/', lastmod: currentDate, priority: '1.0', changefreq: 'daily' },
      { url: 'https://ooliv.de/werbeagentur-frankfurt', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/werbeagentur-wiesbaden', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/webentwicklung', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/webdesign', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/seo-optimierung', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/google-ads', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/content-erstellung', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/ki-technologien', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/strategie', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/klickbetrug', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: 'https://ooliv.de/referenzen', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: 'https://ooliv.de/ueber-uns', lastmod: currentDate, priority: '0.8', changefreq: 'monthly' },
      { url: 'https://ooliv.de/kontakt', lastmod: currentDate, priority: '0.8', changefreq: 'monthly' },
      { url: 'https://ooliv.de/artikel', lastmod: currentDate, priority: '0.7', changefreq: 'daily' },
      { url: 'https://ooliv.de/impressum', lastmod: currentDate, priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/datenschutz', lastmod: currentDate, priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/cookie-richtlinie', lastmod: currentDate, priority: '0.3', changefreq: 'yearly' }
    ];

    console.log(`Generating sitemap with ${articles?.length || 0} articles`);

    // NUCLEAR-LEVEL XML GENERATION - Build completely clean XML from scratch
    const xmlParts = ['<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

    // Add static pages
    staticPages.forEach(page => {
      xmlParts.push(`\n  <url>\n    <loc>${page.url}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <priority>${page.priority}</priority>\n    <changefreq>${page.changefreq}</changefreq>\n  </url>`);
    });

    // Add dynamic article pages
    if (articles && articles.length > 0) {
      articles.forEach(article => {
        const lastmod = new Date(article.created_at).toISOString().split('T')[0];
        xmlParts.push(`\n  <url>\n    <loc>https://ooliv.de/artikel/${article.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>0.6</priority>\n    <changefreq>daily</changefreq>\n  </url>`);
      });
    }

    xmlParts.push('\n</urlset>');
    let sitemap = xmlParts.join('');

    // NUCLEAR-LEVEL BYTE CONTROL - Use TextEncoder for absolute precision
    const originalLength = sitemap.length;
    const sitemapBytes = new TextEncoder().encode(sitemap);
    const deploymentTimestamp = new Date().toISOString();
    console.log(`DEPLOYMENT ${deploymentTimestamp}: Pre-cleaning raw bytes (length: ${originalLength}): ${Array.from(sitemapBytes.slice(0, 30)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
    // Find the exact start of XML declaration at byte level
    let xmlStartIndex = -1;
    const xmlDeclarationBytes = new TextEncoder().encode('<?xml');
    
    for (let i = 0; i <= sitemapBytes.length - xmlDeclarationBytes.length; i++) {
      let match = true;
      for (let j = 0; j < xmlDeclarationBytes.length; j++) {
        if (sitemapBytes[i + j] !== xmlDeclarationBytes[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        xmlStartIndex = i;
        break;
      }
    }
    
    if (xmlStartIndex === -1) {
      console.error(`DEPLOYMENT FAILURE ${deploymentTimestamp}: No XML declaration found in sitemap content`);
      throw new Error('No XML declaration found in sitemap content');
    }
    
    if (xmlStartIndex > 0) {
      console.log(`EMERGENCY BYTE CORRECTION ${deploymentTimestamp}: Removing ${xmlStartIndex} leading bytes before XML declaration`);
      const cleanBytes = sitemapBytes.slice(xmlStartIndex);
      sitemap = new TextDecoder().decode(cleanBytes);
    }
    
    // FINAL BYTE VALIDATION - Absolute guarantee with deployment timestamp
    const finalBytes = new TextEncoder().encode(sitemap);
    console.log(`FINAL VALIDATION ${deploymentTimestamp}: ${sitemap.length} chars, first 30 bytes: ${Array.from(finalBytes.slice(0, 30)).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')}`);
    
    if (finalBytes[0] !== 0x3C) { // 0x3C is '<'
      console.error(`CRITICAL DEPLOYMENT FAILURE ${deploymentTimestamp}: Sitemap STILL doesn't start with '<' - first byte: 0x${finalBytes[0].toString(16)}`);
      throw new Error(`CRITICAL DEPLOYMENT FAILURE: Sitemap validation failed - first byte is 0x${finalBytes[0].toString(16)} not 0x3C (<)`);
    }
    
    console.log(`SUCCESS ${deploymentTimestamp}: Nuclear-level cleaning complete - ${sitemap.length} chars (removed ${originalLength - sitemap.length}), validated clean start`);

    // Final content validation
    if (!sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.error(`VALIDATION ERROR ${deploymentTimestamp}: Invalid sitemap format:`, sitemap.substring(0, 50));
      throw new Error('Generated sitemap does not start with proper XML declaration');
    }

    // Validate sitemap contains expected content
    if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) {
      console.error(`STRUCTURE ERROR ${deploymentTimestamp}: Invalid sitemap structure detected`);
      throw new Error('Generated sitemap missing required XML structure');
    }

    console.log(`SITEMAP SUCCESS ${deploymentTimestamp}: Generated ${sitemap.length} bytes, starts with: "${sitemap.substring(0, 50)}"`);

    // Build and return clean XML response with explicit Content-Length
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'content-type': 'application/xml; charset=UTF-8',  // Explicit lowercase override
        'Cache-Control': 'public, max-age=300, must-revalidate',
        'Content-Length': new TextEncoder().encode(sitemap).length.toString(),
        ...corsHeaders
      },
    });

  } catch (error) {
    const errorTimestamp = new Date().toISOString();
    console.error(`ERROR ${errorTimestamp}: Sitemap generation failed:`, error);
    return new Response('Error generating sitemap', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});