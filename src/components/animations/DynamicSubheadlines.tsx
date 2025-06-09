
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    if (subheadlines.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === subheadlines.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [subheadlines.length, interval]);

  const variants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  return (
    <div className={`relative ${className}`} style={{ minHeight: '68px' }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-bold text-center absolute inset-0 flex items-center justify-center"
          style={{ 
            fontSize: '52px', 
            lineHeight: '68px', 
            color: '#32b1ab' 
          }}
        >
          {subheadlines[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default DynamicSubheadlines;
