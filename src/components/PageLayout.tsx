
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import FloatingActionButtons from './FloatingActionButtons';
import LeadGenerationOverlay from './LeadGenerationOverlay';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  
  // Add event listener for the lead form
  useEffect(() => {
    const handleOpenLeadForm = () => {
      console.log('Lead form open event received in PageLayout');
      setLeadFormOpen(true);
    };

    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      <Footer />
      <FloatingActionButtons />
      <LeadGenerationOverlay open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </div>
  );
};

export default PageLayout;
