// Build-time script to fetch dynamic routes and generate complete sitemap
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const supabase = createClient(
  'https://ycloufmcjjfvjxhmslbm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4'
);

export interface SitemapRoute {
  url: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

export async function generateDynamicRoutes(): Promise<SitemapRoute[]> {
  console.log('🔄 Fetching dynamic routes for sitemap...');
  
  try {
    // Fetch all articles
    const { data: articles, error } = await supabase
      .from('content_posts')
      .select('slug, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching articles:', error);
      return [];
    }

    // Generate article routes
    const articleRoutes: SitemapRoute[] = articles
      .filter(article => article.slug)
      .map(article => ({
        url: `/artikel/${article.slug}`,
        lastmod: new Date(article.created_at).toISOString(),
        changefreq: 'monthly',
        priority: 0.6
      }));

    console.log(`✅ Found ${articleRoutes.length} article routes`);
    return articleRoutes;

  } catch (error) {
    console.error('❌ Error generating dynamic routes:', error);
    return [];
  }
}

export async function generateDynamicSitemap(): Promise<void> {
  console.log('🚀 Generating complete sitemap with dynamic content...');
  
  try {
    // Static routes - match exactly with App.tsx routes
    // PRIORITY STRUCTURE:
    // 1.0 = Homepage (highest)
    // 0.95 = Contact (critical conversion page)
    // 0.9 = Core services (webdesign, seo, google-ads, content)
    // 0.85 = Important pages (referenzen, ueber-uns)
    // 0.8 = Location pages
    // 0.7 = Blog index
    // 0.6 = Article pages (dynamic), secondary services
    // 0.1 = Legal pages (lowest - should not rank prominently)
    const staticRoutes: SitemapRoute[] = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/kontakt', changefreq: 'monthly', priority: 0.95 },
      { url: '/webdesign', changefreq: 'monthly', priority: 0.9 },
      { url: '/webentwicklung', changefreq: 'monthly', priority: 0.9 },
      { url: '/seo-optimierung', changefreq: 'monthly', priority: 0.9 },
      { url: '/google-ads', changefreq: 'monthly', priority: 0.9 },
      { url: '/content-erstellung', changefreq: 'monthly', priority: 0.9 },
      { url: '/referenzen', changefreq: 'weekly', priority: 0.85 },
      { url: '/ueber-uns', changefreq: 'monthly', priority: 0.85 },
      { url: '/werbeagentur-wiesbaden', changefreq: 'monthly', priority: 0.8 },
      { url: '/werbeagentur-frankfurt', changefreq: 'monthly', priority: 0.8 },
      { url: '/artikel', changefreq: 'daily', priority: 0.7 },
      { url: '/strategie', changefreq: 'monthly', priority: 0.7 },
      { url: '/automatisierte-content-marketing', changefreq: 'monthly', priority: 0.6 },
      { url: '/klickbetrug', changefreq: 'monthly', priority: 0.6 },
      { url: '/impressum', changefreq: 'yearly', priority: 0.1 },
      { url: '/datenschutz', changefreq: 'yearly', priority: 0.1 },
      { url: '/cookie-richtlinie', changefreq: 'yearly', priority: 0.1 },
      { url: '/danke', changefreq: 'yearly', priority: 0.1 }
    ];

    // Get dynamic routes
    const dynamicRoutes = await generateDynamicRoutes();
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    
    // Generate XML
    const currentDate = new Date().toISOString();
    
    let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    allRoutes.forEach(route => {
      sitemapXML += `
  <url>
    <loc>https://ooliv.de${route.url}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || 0.5}</priority>
  </url>`;
    });

    sitemapXML += `
</urlset>`;

    // Write to public folder for static serving
    const publicPath = resolve(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(publicPath, sitemapXML, 'utf-8');
    
    console.log(`✅ Generated complete sitemap with ${allRoutes.length} URLs`);
    console.log(`📁 Sitemap saved to: ${publicPath}`);

  } catch (error) {
    console.error('❌ Failed to generate dynamic sitemap:', error);
  }
}