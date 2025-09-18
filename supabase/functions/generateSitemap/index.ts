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

    // Build sitemap XML as array for clean generation
    const sitemapParts = ['<?xml version="1.0" encoding="UTF-8"?>'];
    sitemapParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

    // Add static pages
    staticPages.forEach(page => {
      sitemapParts.push('  <url>');
      sitemapParts.push(`    <loc>${page.url}</loc>`);
      sitemapParts.push(`    <lastmod>${page.lastmod}</lastmod>`);
      sitemapParts.push(`    <priority>${page.priority}</priority>`);
      sitemapParts.push(`    <changefreq>${page.changefreq}</changefreq>`);
      sitemapParts.push('  </url>');
    });

    // Add dynamic article pages
    if (articles && articles.length > 0) {
      articles.forEach(article => {
        const lastmod = new Date(article.created_at).toISOString().split('T')[0];
        sitemapParts.push('  <url>');
        sitemapParts.push(`    <loc>https://ooliv.de/artikel/${article.slug}</loc>`);
        sitemapParts.push(`    <lastmod>${lastmod}</lastmod>`);
        sitemapParts.push(`    <priority>0.6</priority>`);
        sitemapParts.push(`    <changefreq>daily</changefreq>`);
        sitemapParts.push('  </url>');
      });
    }

    sitemapParts.push('</urlset>');

    // Join parts with newlines
    let sitemap = sitemapParts.join('\n');

    // 🔥 Finaler Fix: ALLES vor dem ersten "<" entfernen
    sitemap = sitemap.replace(/^[^<]*/, '');

    // Build and return clean XML response
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'content-type': 'application/xml; charset=UTF-8',  // Explicit lowercase override
        'Cache-Control': 'public, max-age=300, must-revalidate',
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