import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import CustomCursor from './CustomCursor';
import { useLanguage } from '@/contexts/LanguageContext';
import { MotionConfig } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  seoText?: ReactNode;
}

// Map paths between languages
const pathMappings: Record<string, string> = {
  // German to English
  '/': '/en',
  '/webdesign': '/en/webdesign',
  '/webentwicklung': '/en/webdevelopment',
  '/content-erstellung': '/en/content-creation',
  '/seo-optimierung': '/en/seo',
  '/google-ads': '/en/google-ads',
  '/ki-technologien': '/en/ai-technologies',
  '/case-studies': '/en/case-studies',
  '/ueber-ooliv': '/en/about-us',
  '/kontakt': '/en/contact',
  '/impressum': '/en/legal-notice',
  '/datenschutz': '/en/privacy-policy',
  '/danke': '/en/thank-you',
  '/werbeagentur-wiesbaden': '/en',
  
  // English to German
  '/en': '/',
  '/en/webdesign': '/webdesign',
  '/en/webdevelopment': '/webentwicklung',
  '/en/content-creation': '/content-erstellung',
  '/en/seo': '/seo-optimierung',
  '/en/google-ads': '/google-ads',
  '/en/ai-technologies': '/ki-technologien',
  '/en/case-studies': '/case-studies',
  '/en/about-us': '/ueber-ooliv',
  '/en/contact': '/kontakt',
  '/en/legal-notice': '/impressum',
  '/en/privacy-policy': '/datenschutz',
  '/en/thank-you': '/danke',
};

// Define page-specific preload resources
const pagePreloadResources: Record<string, Array<{type: string, href: string, as?: string}>> = {
  '/': [
    { type: 'image', href: '/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png', as: 'image' },
    { type: 'video', href: '/lovable-uploads/Startpage-german-english.mp4', as: 'video' }
  ],
  '/webdesign': [
    { type: 'image', href: '/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png', as: 'image' },
    { type: 'image', href: '/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png', as: 'image' }
  ],
  '/webentwicklung': [
    { type: 'image', href: '/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png', as: 'image' }
  ],
  '/ueber-ooliv': [
    { type: 'image', href: '/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png', as: 'image' }
  ]
};

const PageLayout = ({ children, className = '', seoText }: PageLayoutProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Use the scroll to top hook
  useScrollToTop();
  
  // Get the canonical path (current path) - ensure no trailing slash
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  
  // Always use non-www version for all URLs
  const baseUrl = 'https://ooliv.de';
  const canonicalUrl = `${baseUrl}${currentPath}`;
  
  // Get the alternate language URL
  const alternateLanguagePath = pathMappings[currentPath];
  const alternateLanguageUrl = alternateLanguagePath ? `${baseUrl}${alternateLanguagePath}` : null;

  // Removed redundant www redirect - handled by .htaccess
  // Removed /de/ path redirect - handled by .htaccess  
  // Removed .php path redirect - handled by .htaccess
  // Removed trailing slash redirect - handled by .htaccess

  // Keep only essential client-side redirects as backup safety measures
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only handle edge cases that might not be caught by server redirects
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      
      // Emergency fallback for www redirect (should rarely trigger)
      if (hostname.startsWith('www.') && !window.location.search.includes('debug')) {
        console.log('Emergency client-side www redirect');
        window.location.replace(window.location.href.replace(/^https?:\/\/www\./, 'https://'));
      }
    }
  }, []);

  // Intelligent resource preloading based on current page
  useEffect(() => {
    const resources = pagePreloadResources[currentPath] || [];
    
    resources.forEach(resource => {
      const existingLink = document.querySelector(`link[href="${resource.href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        if (resource.as) {
          link.as = resource.as;
        }
        
        // Set fetchpriority for critical resources
        if (resource.type === 'image' || resource.type === 'video') {
          link.fetchPriority = 'high';
        }
        
        document.head.appendChild(link);
      }
    });
  }, [currentPath]);

  // Console log for debugging canonical and hreflang
  useEffect(() => {
    console.log('Current canonical URL:', canonicalUrl);
    if (alternateLanguageUrl) {
      console.log('Alternate language URL:', alternateLanguageUrl);
    }
  }, [canonicalUrl, alternateLanguageUrl]);

  return (
    <>
      <Helmet>
        {/* Self-referencing canonical URL - always the non-www version */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* CRITICAL: Only index,follow - no noindex anywhere */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Hreflang tags for language alternates - always non-www */}
        <link rel="alternate" hrefLang={language} href={canonicalUrl} />
        {alternateLanguageUrl && (
          <link 
            rel="alternate" 
            hrefLang={language === 'de' ? 'en' : 'de'} 
            href={alternateLanguageUrl}
          />
        )}
        
        {/* x-default hreflang pointing to German version as default */}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${language === 'de' ? currentPath : pathMappings[currentPath] || '/'}`} />
        
        {/* Add meta tag to indicate preferred domain variant */}
        <meta name="google" content="notranslate" />
        
        {/* Enhanced preconnect for fonts to improve loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect for analytics domains to improve performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        
        {/* Additional performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Resource hints for improved performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Helmet>
      <MotionConfig reducedMotion="user">
        <div className={`min-h-screen flex flex-col ${className}`}>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingActionButtons />
        </div>
        {/* SEO Text section - placed after Footer */}
        {seoText}
      </MotionConfig>
    </>
  );
};

export default PageLayout;
