
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ScrollIndicator = () => {
  const { language } = useLanguage();
  
  const scrollToNextSection = () => {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    
    // Scroll down by the height of the viewport
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={scrollToNextSection}>
      <div className="flex flex-col items-center">
        <ChevronDown className="h-6 w-6 text-white opacity-80" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
