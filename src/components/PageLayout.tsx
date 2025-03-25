
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
      <main className={cn("flex-1 pt-16", className)}>
        {children}
      </main>
      <Footer />

      {/* Global CSS Classes */}
      <style jsx global>{`
        .section-standard {
          @apply py-16 md:py-24;
        }
        
        .section-alt {
          @apply py-16 md:py-24 bg-brand-backgroundAlt;
        }
        
        .section-gradient {
          @apply py-16 md:py-24 bg-gradient-to-br from-brand-background to-brand-backgroundAlt;
        }
        
        .section-container {
          @apply container mx-auto px-4 md:px-6;
        }
        
        .section-title {
          @apply text-2xl md:text-3xl font-bold mb-4 text-center;
        }
        
        .section-subtitle {
          @apply text-lg md:text-xl text-brand-text/80 mb-12 max-w-3xl mx-auto text-center;
        }
        
        .card-layout {
          @apply rounded-xl border border-brand-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden;
        }
        
        .icon-background {
          @apply flex items-center justify-center h-10 w-10 rounded-full bg-brand-primary/10 shrink-0;
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
