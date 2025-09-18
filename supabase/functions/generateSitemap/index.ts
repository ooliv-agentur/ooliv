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

    // Fetch all articles with slugs
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .not('slug', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }

    // Static pages from the current sitemap
    const staticPages = [
      { url: 'https://ooliv.de/', lastmod: '2025-01-15T10:00:00+00:00', priority: '1.0', changefreq: 'daily' },
      { url: 'https://ooliv.de/werbeagentur-frankfurt', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.9', changefreq: 'weekly' },
      { url: 'https://ooliv.de/werbeagentur-wiesbaden', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.9', changefreq: 'weekly' },
      { url: 'https://ooliv.de/webentwicklung', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/webdesign', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/seo-optimierung', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/google-ads', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/content-erstellung', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/ki-technologien', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/strategie', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://ooliv.de/klickbetrug', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.7', changefreq: 'weekly' },
      { url: 'https://ooliv.de/referenzen', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.7', changefreq: 'weekly' },
      { url: 'https://ooliv.de/ueber-uns', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.7', changefreq: 'weekly' },
      { url: 'https://ooliv.de/kontakt', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.6', changefreq: 'monthly' },
      { url: 'https://ooliv.de/artikel', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.8', changefreq: 'daily' },
      { url: 'https://ooliv.de/impressum', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/datenschutz', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.3', changefreq: 'yearly' },
      { url: 'https://ooliv.de/cookie-richtlinie', lastmod: '2025-01-15T10:00:00+00:00', priority: '0.3', changefreq: 'yearly' }
    ];

    // Generate sitemap XML - no whitespace before XML declaration
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`;
    });

    // Add dynamic article pages
    if (articles && articles.length > 0) {
      articles.forEach(article => {
        const lastmod = new Date(article.created_at).toISOString();
        sitemap += `
  <url>
    <loc>https://ooliv.de/artikel/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>`;
      });
    }

    sitemap += `</urlset>`;

    console.log(`Generated sitemap with ${staticPages.length} static pages and ${articles?.length || 0} articles`);

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
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