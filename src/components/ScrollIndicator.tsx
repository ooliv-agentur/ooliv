
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
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
        <span className="text-white text-xs mb-2 opacity-80">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-white opacity-80" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
