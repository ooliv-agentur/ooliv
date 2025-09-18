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

    // ULTRA-HARDENED XML GENERATION - Build sitemap XML with absolutely clean start
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `\n  <url>\n    <loc>${page.url}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <priority>${page.priority}</priority>\n    <changefreq>${page.changefreq}</changefreq>\n  </url>`;
    });

    // Add dynamic article pages
    if (articles && articles.length > 0) {
      articles.forEach(article => {
        const lastmod = new Date(article.created_at).toISOString().split('T')[0];
        sitemap += `\n  <url>\n    <loc>https://ooliv.de/artikel/${article.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>0.6</priority>\n    <changefreq>daily</changefreq>\n  </url>`;
      });
    }

    sitemap += '\n</urlset>';

    // ULTRA-HARDENED CLEANING - Multi-layered byte-level sanitization
    const originalLength = sitemap.length;
    console.log(`Pre-cleaning sitemap: ${originalLength} chars, hex start: ${Array.from(new TextEncoder().encode(sitemap.substring(0, 10))).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

    // 1. Remove BOM (Byte Order Mark) if present - U+FEFF
    sitemap = sitemap.replace(/^\uFEFF/, '');
    
    // 2. Remove ALL Unicode whitespace characters (including hidden ones)
    sitemap = sitemap.replace(/^[\u0009-\u000D\u0020\u0085\u00A0\u1680\u2000-\u200F\u2028\u2029\u202F\u205F\u3000]*(?=<\?xml)/g, '');
    
    // 3. Remove control characters (NULL, etc.) before XML
    sitemap = sitemap.replace(/^[\x00-\x1F\x7F-\x9F]*(?=<\?xml)/g, '');
    
    // 4. Basic cleanup
    sitemap = sitemap
      .trim() // Remove all leading/trailing whitespace
      .replace(/^[\s\n\r]*(?=<\?xml)/g, '') // Remove any whitespace before XML declaration
      .replace(/^[^\<]*(?=<\?xml)/g, '') // Remove any non-XML characters before declaration
      .replace(/^\n+/, '') // Remove any remaining leading newlines
      .replace(/(<\?xml[^>]*\?>)\s*(<urlset)/g, '$1$2'); // Remove whitespace between XML declaration and urlset
    
    // 5. Aggressive byte-level validation and correction
    const sitemapBytes = new TextEncoder().encode(sitemap);
    if (sitemapBytes[0] !== 0x3C) { // 0x3C is '<' in hex
      console.error(`CRITICAL: First byte is not '<', found: 0x${sitemapBytes[0].toString(16)}`);
      // Find first '<' and slice from there
      for (let i = 0; i < sitemapBytes.length; i++) {
        if (sitemapBytes[i] === 0x3C) {
          sitemap = new TextDecoder().decode(sitemapBytes.slice(i));
          console.log(`Corrected by removing ${i} leading bytes`);
          break;
        }
      }
    }

    console.log(`Post-cleaning: ${sitemap.length} chars (removed ${originalLength - sitemap.length}), hex start: ${Array.from(new TextEncoder().encode(sitemap.substring(0, 20))).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

    // Final content validation
    if (!sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.error('Invalid sitemap format detected:', sitemap.substring(0, 50));
      throw new Error('Generated sitemap does not start with proper XML declaration');
    }

    // Validate sitemap contains expected content
    if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) {
      console.error('Invalid sitemap structure detected');
      throw new Error('Generated sitemap missing required XML structure');
    }

    console.log(`Sitemap generated successfully, ${sitemap.length} bytes, starts with: "${sitemap.substring(0, 50)}"`);

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
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});