import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from '@prerenderer/rollup-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      // 🚫 TEMPORARILY DISABLED - Testing if prerendering causes build failure
      // Prerendering plugin for static HTML generation with correct canonical tags
      // mode === 'production' && prerender({
      //   routes: [
      //     '/',
      //     '/webdesign',
      //     '/webentwicklung',
      //     '/seo-optimierung',
      //     '/content-erstellung',
      //     '/google-ads',
      //     '/ki-technologien',
      //     '/kontakt',
      //     '/referenzen',
      //     '/ueber-uns',
      //     '/werbeagentur-mainz',
      //     '/werbeagentur-wiesbaden',
      //     '/werbeagentur-frankfurt',
      //     '/werbeagentur-darmstadt',
      //     '/digitalagentur-schweiz',
      //     '/website-relaunch',
      //     '/landingpage-optimierung',
      //     '/website-konzept',
      //     '/klickbetrug',
      //     '/strategie',
      //     '/automatisierte-content-marketing',
      //     '/artikel',
      //     '/impressum',
      //     '/datenschutz',
      //     '/cookie-richtlinie'
      //   ],
      //   renderer: '@prerenderer/renderer-puppeteer',
      //   rendererOptions: {
      //     // Wait for react-helmet-async to update tags
      //     renderAfterTime: 1000,
      //     headless: true,
      //     // Ensure all meta tags are rendered
      //     renderAfterDocumentEvent: 'render-event'
      //   },
      //   postProcess(renderedRoute) {
      //     // Log prerendered routes for verification
      //     console.log(`✅ Prerendered: ${renderedRoute.route}`);
      //   }
      // }),
      // 🚫 TEMPORARILY DISABLED - Testing if sitemap generation causes build failure
      // Custom plugin to generate complete sitemap with dynamic content
      // {
      //   name: 'generate-complete-sitemap',
      //   closeBundle: async () => {
      //     if (mode === 'production') {
      //       try {
      //         console.log('🚀 Generating sitemap during build...');
      //         const { generateDynamicSitemap } = await import('./scripts/generate-sitemap-data.ts');
      //         await generateDynamicSitemap();
      //       } catch (error) {
      //         console.error('❌ Failed to generate sitemap:', error);
      //       }
      //     }
      //   }
      // }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom"],
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks for better caching
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
            'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-accordion', 'framer-motion'],
            'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
            'query-vendor': ['@tanstack/react-query'],
            'helmet-vendor': ['react-helmet-async'],
            // Split large pages into separate chunks
            'pages-main': [
              './src/pages/Index.tsx',
              './src/pages/Webdesign.tsx',
              './src/pages/Webentwicklung.tsx'
            ],
            'pages-services': [
              './src/pages/SEOOptimierung.tsx',
              './src/pages/ContentErstellung.tsx',
              './src/pages/GoogleAds.tsx',
              './src/pages/KiTechnologien.tsx'
            ],
            'pages-info': [
              './src/pages/Referenzen.tsx',
              './src/pages/UeberUns.tsx',
              './src/pages/Kontakt.tsx'
            ]
          },
          // Optimize chunk file names for better caching
          chunkFileNames: (chunkInfo: any) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
              : 'chunk';
            return `assets/${facadeModuleId}-[hash].js`;
          }
        }
      },
      // Enable gzip compression
      reportCompressedSize: true,
      // Optimize chunk size warnings
      chunkSizeWarningLimit: 1000
    },
    // Enable CSS code splitting for better performance
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase'
      }
    }
  };
});