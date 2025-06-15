
export default function handler(req, res) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ooliv.de/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ooliv.de/webdesign</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/webentwicklung</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/content-erstellung</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/seo-optimierung</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/google-ads</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/ki-technologien</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/referenzen</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ooliv.de/ueber-uns</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/kontakt</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/strategie</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/klickbetrug</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/werbeagentur-wiesbaden</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/werbeagentur-frankfurt</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ooliv.de/neuester-artikel</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ooliv.de/danke</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ooliv.de/impressum</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ooliv.de/datenschutz</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ooliv.de/cookie-richtlinie</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.status(200).send(sitemapXml);
}
