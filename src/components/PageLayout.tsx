
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={cn("flex-1 pt-20", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
