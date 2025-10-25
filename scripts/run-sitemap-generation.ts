#!/usr/bin/env tsx
// Runner script to generate static sitemap
// Run with: npx tsx scripts/run-sitemap-generation.ts

import { generateDynamicSitemap } from './generate-sitemap-data';

console.log('🚀 Starting static sitemap generation...\n');

generateDynamicSitemap()
  .then(() => {
    console.log('\n✅ Static sitemap generation complete!');
    console.log('📍 Sitemap available at: /sitemap.xml');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Sitemap generation failed:', error);
    process.exit(1);
  });
