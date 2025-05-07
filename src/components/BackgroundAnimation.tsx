
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  speed?: number;
  opacity?: number;
  disableAnimation?: boolean;
  testMode?: boolean; // Keeping this prop but will set to false
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
  const actualDuration = baseDuration / speed; // Production speed
  
  // Skip animation if disabled or if user prefers reduced motion
  const shouldAnimate = !disableAnimation && !prefersReducedMotion;
  
  // Use subtle gradients for production
  const backgroundStyle = {
    background: `radial-gradient(circle at 30% 30%, rgba(240,244,248,0.7) 0%, rgba(229,233,236,0) 70%)`,
    opacity: opacity,
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main rotating background */}
      <motion.div 
        className="absolute inset-0"
        style={backgroundStyle}
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
          background: `radial-gradient(circle at 70% 70%, rgba(233,236,239,0.7) 0%, rgba(225,228,232,0) 70%)`,
          opacity: opacity * 0.8,
        }}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: -360 } : {}}
        transition={{
          duration: actualDuration * 1.2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
