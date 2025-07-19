
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add a small delay before starting the animation to prevent initial flicker
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (subheadlines.length <= 1 || !isReady) return;

    const timer = setInterval(() => {
      // Start fade out with faster transition
      setIsVisible(false);
      
      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === subheadlines.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300); // Reduced from 800ms to 300ms for snappier transitions
    }, interval);

    return () => clearInterval(timer);
  }, [subheadlines.length, interval, isReady]);

  return (
    <span 
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        opacity: isReady && isVisible ? 1 : 0,
        transform: isReady && isVisible ? 'translateY(0)' : 'translateY(3px)'
      }}
    >
      {subheadlines[currentIndex]}
    </span>
  );
};

export default DynamicSubheadlines;
