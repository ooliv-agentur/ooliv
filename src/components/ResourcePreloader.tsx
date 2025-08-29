import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Intelligent resource preloader - preloads next likely pages and critical assets
 */
const ResourcePreloader = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait for initial page load to complete before preloading
    const preloadTimer = setTimeout(() => {
      const currentPath = location.pathname;
      
      // Preload likely next pages based on current location
      const preloadRules: Record<string, string[]> = {
        '/': ['/kontakt', '/webdesign', '/referenzen'], // From homepage
        '/webdesign': ['/kontakt', '/webentwicklung', '/referenzen'],
        '/webentwicklung': ['/kontakt', '/webdesign', '/referenzen'],
        '/seo-optimierung': ['/kontakt', '/content-erstellung', '/referenzen'],
        '/content-erstellung': ['/kontakt', '/seo-optimierung', '/referenzen'],
        '/google-ads': ['/kontakt', '/seo-optimierung', '/referenzen'],
        '/ki-technologien': ['/kontakt', '/referenzen'],
        '/referenzen': ['/kontakt', '/ueber-uns'],
        '/ueber-uns': ['/kontakt', '/referenzen']
      };

      const pagesToPreload = preloadRules[currentPath] || ['/kontakt'];
      
      // Preload page chunks
      pagesToPreload.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = `${path}`;
        document.head.appendChild(link);
      });

      // Preload critical resources for common pages
      const criticalResources = [
        '/fonts/Satoshi-Medium.otf',
        '/fonts/Satoshi-Bold.otf'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.otf') ? 'font' : 'image';
        if (resource.endsWith('.otf')) {
          link.crossOrigin = 'anonymous';
        }
        link.fetchPriority = 'low';
        document.head.appendChild(link);
      });

    }, 2000); // Wait 2s after page load

    return () => clearTimeout(preloadTimer);
  }, [location.pathname]);

  return null;
};

export default ResourcePreloader;