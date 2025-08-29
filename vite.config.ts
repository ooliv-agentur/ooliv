
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
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
        manualChunks: (id) => {
          // Critical: Keep homepage with main bundle for instant loading
          if (id.includes('pages/de/Index')) {
            return 'main';
          }
          
          // Vendor chunks for optimal caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router-vendor';
            }
            if (id.includes('@radix-ui') || id.includes('framer-motion')) {
              return 'ui-vendor';
            }
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'form-vendor';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'query-vendor';
            }
            if (id.includes('react-helmet-async')) {
              return 'helmet-vendor';
            }
            return 'vendor';
          }
          
          // Individual page chunks for lazy loading
          if (id.includes('pages/de/')) {
            const match = id.match(/pages\/de\/([^/]+)/);
            if (match) {
              return `page-${match[1].toLowerCase()}`;
            }
          }
          
          // Component chunks
          if (id.includes('components/')) {
            if (id.includes('ui/')) {
              return 'ui-components';
            }
            if (id.includes('email-capture/') || id.includes('lead-form/')) {
              return 'forms';
            }
            return 'components';
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: (chunkInfo) => {
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
}));
