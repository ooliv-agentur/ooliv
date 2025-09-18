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
    console.log('Edge Function: Starting sitemap generation');
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Edge Function: Supabase client initialized');

    // Fetch all articles
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .not('slug', 'is', null)
      .order('created_at', { ascending: false });

    console.log('Edge Function: Articles fetched', articles?.length || 0, 'articles');

    if (error) {
      console.log('Edge Function: Database error:', error);
      throw error;
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

    // Return completely clean XML response
    console.log('Edge Function: Returning sitemap with', new TextEncoder().encode(cleanSitemap).length, 'bytes');
    return new Response(cleanSitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Content-Length': new TextEncoder().encode(cleanSitemap).length.toString(),
        ...corsHeaders
      },
    });

  } catch (error) {
    console.log('Edge Function: Error occurred:', error);
    // Error response without logging details
    return new Response('<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>', { 
      status: 500,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        ...corsHeaders
      }
    });
  }
});