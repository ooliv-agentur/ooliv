import React, { useState, useEffect, useCallback } from 'react';

interface DynamicSubheadlinesProps {
  subheadlines: string[];
  interval?: number;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const DynamicSubheadlines = ({ 
  subheadlines, 
  interval = 4000, 
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
}: DynamicSubheadlinesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add a small delay before starting the animation
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 300);

    return () => clearTimeout(readyTimer);
  }, []);

  const typeText = useCallback(() => {
    const targetText = subheadlines[currentIndex];
    
    if (displayText.length < targetText.length) {
      setDisplayText(targetText.slice(0, displayText.length + 1));
    } else {
      setIsTyping(false);
      setIsPaused(true);
      
      // Pause before starting to delete
      setTimeout(() => {
        setIsPaused(false);
      }, pauseTime);
    }
  }, [displayText, currentIndex, subheadlines, pauseTime]);

  const deleteText = useCallback(() => {
    if (displayText.length > 0) {
      setDisplayText(displayText.slice(0, -1));
    } else {
      setIsTyping(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === subheadlines.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [displayText, subheadlines.length]);

  useEffect(() => {
    if (!isReady || subheadlines.length <= 1) return;

    let timer: NodeJS.Timeout;

    if (isPaused) {
      return; // Don't set timer during pause
    }

    if (isTyping) {
      timer = setTimeout(typeText, typingSpeed);
    } else {
      timer = setTimeout(deleteText, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, isPaused, isReady, typeText, deleteText, typingSpeed, deletingSpeed, subheadlines.length]);

  // Initialize with first character when ready
  useEffect(() => {
    if (isReady && displayText === '' && subheadlines.length > 0) {
      setDisplayText('');
    }
  }, [isReady, subheadlines]);

  if (!isReady || subheadlines.length === 0) {
    return <span className={className}></span>;
  }

  return (
    <span className={`${className} inline-flex items-center`}>
      <span>{displayText}</span>
      <span 
        className="ml-0.5 w-0.5 h-5 bg-current"
        style={{
          animation: 'blink 1s infinite'
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `
      }} />
    </span>
  );
};

export default DynamicSubheadlines;