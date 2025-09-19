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
    const url = new URL(req.url);
    const forceRegenerate = url.searchParams.get('revalidate') === 'true';
    const timestamp = Date.now();
    
    console.log('Edge Function: Starting sitemap generation', { forceRegenerate, timestamp });
    
    // Initialize Supabase client with service role for unrestricted access
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://ycloufmcjjfvjxhmslbm.supabase.co';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4';
    
    console.log('Edge Function: Environment check', { 
      hasServiceKey: !!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
      supabaseUrl: supabaseUrl.substring(0, 30) + '...'
    });
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false }
    });
    // Check for cached sitemap first (unless force regenerate)
    if (!forceRegenerate) {
      console.log('Edge Function: Checking for cached sitemap');
      const { data: cachedSitemap, error: cacheError } = await supabase
        .from('sitemap_cache')
        .select('sitemap_xml, url_count, generated_at')
        .eq('cache_key', 'main_sitemap')
        .order('generated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!cacheError && cachedSitemap) {
        const cacheAge = Date.now() - new Date(cachedSitemap.generated_at).getTime();
        const maxCacheAge = 15 * 60 * 1000; // 15 minutes
        
        if (cacheAge < maxCacheAge) {
          console.log('Edge Function: Returning cached sitemap', { 
            urlCount: cachedSitemap.url_count, 
            cacheAgeMinutes: Math.round(cacheAge / 60000) 
          });
          
          return new Response(cachedSitemap.sitemap_xml, {
            headers: {
              'Content-Type': 'application/xml; charset=UTF-8',
              'Cache-Control': 'public, max-age=900, s-maxage=900', // 15 minutes
              'X-Cache-Status': 'HIT',
              'X-Generated-At': cachedSitemap.generated_at,
              'X-URL-Count': cachedSitemap.url_count.toString(),
              ...corsHeaders
            },
          });
        }
      }
    }

    console.log('Edge Function: Generating fresh sitemap');
    
    // Fetch all articles with detailed error handling
    console.log('Edge Function: Starting database query to content_posts table');
    
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at, title')
      .not('slug', 'is', null)
      .neq('slug', '')
      .order('created_at', { ascending: false });

    console.log('Edge Function: Query completed');
    console.log('Edge Function: Articles data sample:', articles?.slice(0, 3));
    console.log('Edge Function: Articles count:', articles?.length || 0);
    console.log('Edge Function: Query error:', error);

    if (error) {
      console.error('Edge Function: Database error details:', JSON.stringify(error));
      throw new Error(`Database query failed: ${error.message} (Code: ${error.code})`);
    }

    if (!articles) {
      console.log('Edge Function: No articles returned (null/undefined)');
    }

    // Log article details for debugging
    if (articles && articles.length > 0) {
      console.log('Edge Function: Sample articles:', articles.slice(0, 5).map(a => ({
        slug: a.slug,
        title: a.title?.substring(0, 50) + '...',
        created_at: a.created_at
      })));
    }

    console.log('Edge Function: Building sitemap with', articles?.length || 0, 'articles');

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

    // Generate URLs for static pages
    let urlElements = staticPages.map(page => 
      `<url><loc>${page.url}</loc><lastmod>${page.lastmod}</lastmod><priority>${page.priority}</priority><changefreq>${page.changefreq}</changefreq></url>`
    );

    // Add blog articles if available
    if (articles && articles.length > 0) {
      const articleUrls = articles.map(article => {
        const articleDate = new Date(article.created_at).toISOString().split('T')[0];
        return `<url><loc>https://ooliv.de/artikel/${article.slug}</loc><lastmod>${articleDate}</lastmod><priority>0.8</priority><changefreq>weekly</changefreq></url>`;
      });
      urlElements = urlElements.concat(articleUrls);
    }

    // Build complete sitemap - no leading whitespace
    const cleanSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements.join('')}</urlset>`;
    
    // Validate XML structure
    if (!cleanSitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>') || 
        !cleanSitemap.includes('<urlset') || 
        !cleanSitemap.includes('</urlset>')) {
      throw new Error('XML structure validation failed');
    }

    const totalUrls = urlElements.length;
    const sitemapSize = new TextEncoder().encode(cleanSitemap).length;
    const generatedAt = new Date().toISOString();
    
    console.log('Edge Function: Sitemap generated successfully', { 
      totalUrls, 
      sitemapSize, 
      staticPages: staticPages.length,
      articlePages: articles?.length || 0
    });

    // Store in persistent cache
    try {
      const { error: cacheError } = await supabase
        .from('sitemap_cache')
        .insert({
          sitemap_xml: cleanSitemap,
          url_count: totalUrls,
          cache_key: 'main_sitemap',
          generated_at: generatedAt
        });

      if (cacheError) {
        console.error('Edge Function: Failed to cache sitemap:', cacheError);
      } else {
        console.log('Edge Function: Sitemap cached successfully');
        
        // Clean up old cache entries (async, don't wait)
        supabase.rpc('cleanup_old_sitemap_cache').then(({ data, error }) => {
          if (error) {
            console.error('Edge Function: Cache cleanup failed:', error);
          } else {
            console.log('Edge Function: Cleaned up', data, 'old cache entries');
          }
        });
      }
    } catch (cacheError) {
      console.error('Edge Function: Cache operation failed:', cacheError);
    }

    // Return sitemap with appropriate cache headers
    return new Response(cleanSitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600', // 15min cache, 1hr stale
        'X-Cache-Status': 'MISS',
        'X-Generated-At': generatedAt,
        'X-URL-Count': totalUrls.toString(),
        'X-Sitemap-Size': sitemapSize.toString(),
        'Content-Length': sitemapSize.toString(),
        ...corsHeaders
      },
    });

  } catch (error) {
    console.error('Edge Function: Critical error occurred:', error);
    console.error('Edge Function: Error type:', typeof error);
    console.error('Edge Function: Error message:', error?.message);
    console.error('Edge Function: Error stack:', error?.stack);
    
    const errorMessage = error?.message || 'Unknown error occurred';
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed: ${errorMessage}</error>`, { 
      status: 500,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        ...corsHeaders
      }
    });
  }
});