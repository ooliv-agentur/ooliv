
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const location = useLocation();
  const canonicalPath = location.pathname === '/' ? '' : location.pathname;
  const canonicalUrl = `https://ooliv.de${canonicalPath}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
