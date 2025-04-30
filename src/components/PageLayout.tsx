
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
      console.log('📋 PageLayout - Lead form open event received');
      setLeadFormOpen(true);
      console.log('📋 PageLayout - leadFormOpen state set to:', true);
    };

    console.log('📋 PageLayout - Adding event listener for open-lead-form');
    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      console.log('📋 PageLayout - Removing event listener for open-lead-form');
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
      <LeadGenerationOverlay 
        open={leadFormOpen} 
        onOpenChange={(open) => {
          console.log('📋 PageLayout - LeadGenerationOverlay onOpenChange called with:', open);
          setLeadFormOpen(open);
        }} 
      />
    </div>
  );
};

export default PageLayout;
