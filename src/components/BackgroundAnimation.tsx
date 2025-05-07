
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  speed?: number;
  opacity?: number;
  disableAnimation?: boolean;
  testMode?: boolean;
}

const BackgroundAnimation = ({
  speed = 1,
  opacity = 0.8,
  disableAnimation = false,
  testMode = false
}: BackgroundAnimationProps) => {
  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  // Calculate actual animation duration based on speed prop
  const baseDuration = 60; // seconds 
  const actualDuration = baseDuration / speed;
  
  // Skip animation if disabled or if user prefers reduced motion
  const shouldAnimate = !disableAnimation && !prefersReducedMotion;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main rotating background - soft radial gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 80%)`,
          opacity: opacity,
        }}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: 360 } : {}}
        transition={{
          duration: actualDuration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Second layer with opposite rotation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)`,
          opacity: opacity * 0.9,
        }}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: -360 } : {}}
        transition={{
          duration: actualDuration * 1.3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
