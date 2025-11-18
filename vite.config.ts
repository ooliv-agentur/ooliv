import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    ],
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