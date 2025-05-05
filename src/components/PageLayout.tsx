import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import CustomCursor from './CustomCursor';
import { useLanguage } from '@/contexts/LanguageContext';

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

const PageLayout = ({ children, className = '', seoText }: PageLayoutProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Get the canonical path (current path)
  const currentPath = location.pathname;
  
  // Use non-www version for all URLs
  const baseUrl = 'https://ooliv.de';
  const canonicalUrl = `${baseUrl}${currentPath}`;
  
  // Get the alternate language URL
  const alternateLanguagePath = pathMappings[currentPath];
  const alternateLanguageUrl = alternateLanguagePath ? `${baseUrl}${alternateLanguagePath}` : null;

  // Handle www to non-www redirect at the client level
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.startsWith('www.')) {
        const nonWwwUrl = window.location.href.replace('www.', '');
        console.log('Redirecting from www to non-www:', nonWwwUrl);
        window.location.replace(nonWwwUrl);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Self-referencing canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang tags for language alternates */}
        <link rel="alternate" hrefLang={language} href={canonicalUrl} />
        {alternateLanguageUrl && (
          <link 
            rel="alternate" 
            hrefLang={language === 'de' ? 'en' : 'de'} 
            href={alternateLanguageUrl}
          />
        )}
        
        {/* Explicitly tell search engines to index and follow */}
        <meta name="robots" content="index, follow" />
        
        {/* Add preconnect for fonts to improve loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add preconnect for www domain to improve performance during redirect */}
        <link rel="preconnect" href="https://www.ooliv.de" />
        {/* Preconnect to analytics domains to improve performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <style>{`
          /* Ensure custom cursor works everywhere */
          html, body, #root { cursor: none !important; }
          * { cursor: inherit; }
        `}</style>
      </Helmet>
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
    </>
  );
};

export default PageLayout;
