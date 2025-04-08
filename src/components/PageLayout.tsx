
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import FloatingActionButtons from './FloatingActionButtons';
import ChatbaseWidget from './ChatbaseWidget';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      <Footer />
      <FloatingActionButtons />
      <ChatbaseWidget />
    </div>
  );
};

export default PageLayout;
