
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const location = useLocation();
  const canonicalPath = location.pathname === '/' ? '' : location.pathname;
  // Explicitly use non-www version for canonical URLs
  const canonicalUrl = `https://ooliv.de${canonicalPath}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
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
