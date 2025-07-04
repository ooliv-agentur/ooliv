
import React, { useState, useEffect } from 'react';

interface DynamicSubheadlinesProps {
  subheadlines: string[];
  interval?: number;
  className?: string;
}

const DynamicSubheadlines = ({ 
  subheadlines, 
  interval = 4000, 
  className = "" 
}: DynamicSubheadlinesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (subheadlines.length <= 1) return;

    const timer = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === subheadlines.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 800); // Even longer fade out duration for ultra-smooth transition
    }, interval);

    return () => clearInterval(timer);
  }, [subheadlines.length, interval]);

  return (
    <span 
      className={`transition-all duration-[800ms] ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(3px)'
      }}
    >
      {subheadlines[currentIndex]}
    </span>
  );
};

export default DynamicSubheadlines;
