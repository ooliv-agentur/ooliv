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
    // Static routes
    const staticRoutes: SitemapRoute[] = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/ueber-uns', changefreq: 'monthly', priority: 0.8 },
      { url: '/kontakt', changefreq: 'monthly', priority: 0.9 },
      { url: '/referenzen', changefreq: 'weekly', priority: 0.8 },
      { url: '/webdesign', changefreq: 'monthly', priority: 0.7 },
      { url: '/webentwicklung', changefreq: 'monthly', priority: 0.7 },
      { url: '/seo-optimierung', changefreq: 'monthly', priority: 0.7 },
      { url: '/google-ads', changefreq: 'monthly', priority: 0.7 },
      { url: '/ki-technologien', changefreq: 'monthly', priority: 0.7 },
      { url: '/content-erstellung', changefreq: 'monthly', priority: 0.7 },
      { url: '/strategie', changefreq: 'monthly', priority: 0.7 },
      { url: '/klickbetrug', changefreq: 'monthly', priority: 0.6 },
      { url: '/werbeagentur-frankfurt', changefreq: 'monthly', priority: 0.6 },
      { url: '/werbeagentur-wiesbaden', changefreq: 'monthly', priority: 0.6 },
      { url: '/artikel', changefreq: 'daily', priority: 0.8 },
      { url: '/danke', changefreq: 'yearly', priority: 0.3 },
      { url: '/en/thank-you', changefreq: 'yearly', priority: 0.3 },
      { url: '/impressum', changefreq: 'yearly', priority: 0.3 }
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

    // Write to dist folder
    const distPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
    writeFileSync(distPath, sitemapXML, 'utf-8');
    
    console.log(`✅ Generated complete sitemap with ${allRoutes.length} URLs`);
    console.log(`📁 Sitemap saved to: ${distPath}`);

  } catch (error) {
    console.error('❌ Failed to generate dynamic sitemap:', error);
  }
}