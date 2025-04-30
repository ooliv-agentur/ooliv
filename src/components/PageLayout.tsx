
import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const location = useLocation();
  const canonicalPath = location.pathname === '/' ? '' : location.pathname;
  // Explicitly use non-www version for canonical URLs
  const canonicalUrl = `https://ooliv.de${canonicalPath}`;
  const { language } = useLanguage();

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
        <link rel="canonical" href={canonicalUrl} />
        {/* Add language attribute based on current language context */}
        <html lang={language} />
        {/* Add preconnect for www domain to improve performance during redirect */}
        <link rel="preconnect" href="https://www.ooliv.de" />
      </Helmet>
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </>
  );
};

export default PageLayout;
