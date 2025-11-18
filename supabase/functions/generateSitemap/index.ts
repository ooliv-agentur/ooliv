import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Cache configuration
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes
const STALE_WHILE_REVALIDATE = 60 * 60 * 1000; // 1 hour

// Rate limiter configuration
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10; // Increased since we have better caching

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitStore.get(ip) || [];
  const validRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  return true;
}

// Static pages configuration - defined once outside request handler
const STATIC_PAGES = [
  { url: 'https://ooliv.de/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://ooliv.de/werbeagentur-frankfurt', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/werbeagentur-wiesbaden', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/webentwicklung', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/webdesign', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/seo-optimierung', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/google-ads', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/content-erstellung', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/ki-technologien', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/strategie', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/klickbetrug', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ooliv.de/referenzen', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ooliv.de/ueber-uns', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ooliv.de/kontakt', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ooliv.de/artikel', priority: '0.7', changefreq: 'daily' },
  { url: 'https://ooliv.de/impressum', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://ooliv.de/datenschutz', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://ooliv.de/cookie-richtlinie', priority: '0.3', changefreq: 'yearly' }
] as const;

// Generate ETag from content
function generateETag(content: string): string {
  // Simple hash function for ETag generation
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `"${Math.abs(hash).toString(36)}"`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for sitemap generation from IP: ${ip}`);
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><error>Rate limit exceeded</error>`,
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/xml; charset=UTF-8',
            'Retry-After': '60'
          }
        }
      );
    }
    
    const url = new URL(req.url);
    const forceRegenerate = url.searchParams.get('revalidate') === 'true';
    const timestamp = Date.now();
    
    console.log('Edge Function: Starting sitemap generation', { forceRegenerate, timestamp });
    
    // Initialize Supabase client with service role for unrestricted access
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Edge Function: Missing required environment variables');
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><error>Server configuration error</error>`,
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/xml; charset=UTF-8' }
        }
      );
    }
    
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
        
        // Serve from cache if within TTL
        if (cacheAge < CACHE_TTL) {
          console.log('Edge Function: Returning fresh cached sitemap', { 
            urlCount: cachedSitemap.url_count, 
            cacheAgeMinutes: Math.round(cacheAge / 60000) 
          });
          
          const etag = generateETag(cachedSitemap.sitemap_xml);
          const ifNoneMatch = req.headers.get('if-none-match');
          
          // Return 304 if ETag matches
          if (ifNoneMatch === etag) {
            return new Response(null, {
              status: 304,
              headers: {
                'ETag': etag,
                'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600',
                ...corsHeaders
              }
            });
          }
          
          const sitemapSize = new TextEncoder().encode(cachedSitemap.sitemap_xml).length;
          
          return new Response(cachedSitemap.sitemap_xml, {
            headers: {
              'Content-Type': 'application/xml; charset=UTF-8',
              'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600',
              'X-Cache-Status': 'HIT',
              'X-Cache-Age': Math.round(cacheAge / 1000).toString(),
              'X-Generated-At': cachedSitemap.generated_at,
              'X-URL-Count': cachedSitemap.url_count.toString(),
              'Content-Length': sitemapSize.toString(),
              'ETag': etag,
              'Vary': 'Accept-Encoding',
              ...corsHeaders
            },
          });
        }
        
        // Serve stale cache - regeneration moved to manual trigger
        if (cacheAge < CACHE_TTL + STALE_WHILE_REVALIDATE) {
          console.log('Edge Function: Serving stale cache');
          
          const etag = generateETag(cachedSitemap.sitemap_xml);
          const sitemapSize = new TextEncoder().encode(cachedSitemap.sitemap_xml).length;
          
          return new Response(cachedSitemap.sitemap_xml, {
            headers: {
              'Content-Type': 'application/xml; charset=UTF-8',
              'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600',
              'X-Cache-Status': 'STALE',
              'X-Cache-Age': Math.round(cacheAge / 1000).toString(),
              'X-Generated-At': cachedSitemap.generated_at,
              'X-URL-Count': cachedSitemap.url_count.toString(),
              'Content-Length': sitemapSize.toString(),
              'ETag': etag,
              'Vary': 'Accept-Encoding',
              ...corsHeaders
            },
          });
        }
      }
    }

    console.log('Edge Function: Generating fresh sitemap');
    const sitemap = await generateSitemapXML(supabase);
    
    return new Response(sitemap.xml, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600',
        'X-Cache-Status': 'MISS',
        'X-Generated-At': sitemap.generatedAt,
        'X-URL-Count': sitemap.urlCount.toString(),
        'X-Sitemap-Size': sitemap.size.toString(),
        'Content-Length': sitemap.size.toString(),
        'ETag': generateETag(sitemap.xml),
        'Vary': 'Accept-Encoding',
        ...corsHeaders
      },
    });

  } catch (error) {
    console.error('Edge Function: Critical error occurred:', {
      error: error?.message,
      stack: error?.stack,
      type: typeof error,
      timestamp: new Date().toISOString()
    });
    
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>`, 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/xml; charset=UTF-8',
          ...corsHeaders
        }
      }
    );
  }
});

// Background regeneration function
async function regenerateSitemap(supabase: any) {
  try {
    console.log('Background: Starting sitemap regeneration');
    await generateSitemapXML(supabase);
    console.log('Background: Sitemap regeneration completed');
  } catch (error) {
    console.error('Background: Regeneration failed:', error);
  }
}

// Core sitemap generation logic
async function generateSitemapXML(supabase: any) {
  // Fetch only necessary fields for better performance
  const { data: articles, error } = await supabase
    .from('content_posts')
    .select('slug, created_at')
    .not('slug', 'is', null)
    .neq('slug', '')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Database error:', JSON.stringify(error));
    throw new Error(`Database query failed: ${error.message}`);
  }

  console.log('Fetched', articles?.length || 0, 'articles for sitemap');

  // Optimized XML generation using array
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Pre-allocate array with estimated size for better performance
  const urlElements: string[] = new Array(STATIC_PAGES.length + (articles?.length || 0));
  let index = 0;
  
  // Generate static page URLs
  for (const page of STATIC_PAGES) {
    urlElements[index++] = `<url><loc>${page.url}</loc><lastmod>${currentDate}</lastmod><priority>${page.priority}</priority><changefreq>${page.changefreq}</changefreq></url>`;
  }
  
  // Generate article URLs
  if (articles && articles.length > 0) {
    for (const article of articles) {
      const articleDate = new Date(article.created_at).toISOString().split('T')[0];
      urlElements[index++] = `<url><loc>https://ooliv.de/artikel/${article.slug}</loc><lastmod>${articleDate}</lastmod><priority>0.8</priority><changefreq>weekly</changefreq></url>`;
    }
  }
  
  // Build complete sitemap with optimized string concatenation
  const cleanSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements.join('')}</urlset>`;
  
  // Validate XML structure
  if (!cleanSitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>') || 
      !cleanSitemap.includes('<urlset') || 
      !cleanSitemap.includes('</urlset>')) {
    throw new Error('XML structure validation failed');
  }

  const totalUrls = index;
  const sitemapSize = new TextEncoder().encode(cleanSitemap).length;
  const generatedAt = new Date().toISOString();
  
  console.log('Sitemap generated:', { 
    totalUrls, 
    sitemapSize,
    staticPages: STATIC_PAGES.length,
    articlePages: articles?.length || 0
  });

  // Store in persistent cache with background cleanup
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
      console.error('Failed to cache sitemap:', cacheError);
    } else {
      console.log('Sitemap cached successfully');
      // Note: Automatic cache cleanup removed due to deployment constraints
    }
  } catch (cacheError) {
    console.error('Cache operation failed:', cacheError);
  }

  return {
    xml: cleanSitemap,
    urlCount: totalUrls,
    size: sitemapSize,
    generatedAt
  };
}