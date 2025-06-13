
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PrefetchRule {
  path: string;
  resources: Array<{
    type: 'script' | 'style' | 'image' | 'fetch';
    url: string;
    priority?: 'high' | 'low';
  }>;
}

const prefetchRules: PrefetchRule[] = [
  {
    path: '/',
    resources: [
      { type: 'script', url: '/src/pages/de/Webdesign.tsx', priority: 'high' },
      { type: 'script', url: '/src/pages/de/Webentwicklung.tsx', priority: 'high' },
      { type: 'script', url: '/src/pages/de/Kontakt.tsx', priority: 'low' },
      { type: 'image', url: '/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png', priority: 'low' }
    ]
  },
  {
    path: '/webdesign',
    resources: [
      { type: 'script', url: '/src/pages/de/Webentwicklung.tsx', priority: 'high' },
      { type: 'script', url: '/src/pages/de/Kontakt.tsx', priority: 'high' },
      { type: 'image', url: '/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png', priority: 'low' }
    ]
  },
  {
    path: '/webentwicklung',
    resources: [
      { type: 'script', url: '/src/pages/de/Webdesign.tsx', priority: 'high' },
      { type: 'script', url: '/src/pages/de/Kontakt.tsx', priority: 'high' }
    ]
  }
];

export const useIntelligentPrefetch = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace(/\/$/, '') || '/';
    const rule = prefetchRules.find(r => r.path === currentPath);
    
    if (!rule) return;

    // Delay prefetching to not interfere with critical loading
    const prefetchTimer = setTimeout(() => {
      rule.resources.forEach(resource => {
        const link = document.createElement('link');
        
        if (resource.type === 'script') {
          link.rel = 'modulepreload';
          link.href = resource.url;
        } else if (resource.type === 'style') {
          link.rel = 'prefetch';
          link.href = resource.url;
          link.as = 'style';
        } else if (resource.type === 'image') {
          link.rel = 'prefetch';
          link.href = resource.url;
          link.as = 'image';
        } else if (resource.type === 'fetch') {
          link.rel = 'prefetch';
          link.href = resource.url;
        }
        
        if (resource.priority) {
          link.fetchPriority = resource.priority;
        }
        
        // Check if already exists
        const existing = document.querySelector(`link[href="${resource.url}"]`);
        if (!existing) {
          document.head.appendChild(link);
        }
      });
    }, 2000); // Prefetch after 2 seconds

    return () => clearTimeout(prefetchTimer);
  }, [location.pathname]);
};
