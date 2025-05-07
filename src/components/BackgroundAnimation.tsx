
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  speed?: number;
  opacity?: number;
  disableAnimation?: boolean;
}

const BackgroundAnimation = ({
  speed = 1,
  opacity = 0.8,
  disableAnimation = false
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
      {/* Top right blob */}
      <motion.div 
        className="absolute top-[-10%] right-[-10%] w-[70%] h-[80%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(240,244,248,0.7) 0%, rgba(229,233,236,0) 70%)`,
          opacity: opacity,
        }}
        initial={{ rotate: 0, y: 0 }}
        animate={shouldAnimate ? {
          rotate: [0, 5, 0, -5, 0],
          y: [0, -10, -5, -15, 0],
        } : {}}
        transition={{
          duration: actualDuration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />
      
      {/* Bottom left blob */}
      <motion.div
        className="absolute bottom-0 left-[-5%] w-[60%] h-[70%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(233,236,239,0.7) 0%, rgba(225,228,232,0) 70%)`,
          opacity: opacity,
        }}
        initial={{ rotate: 0, y: 0 }}
        animate={shouldAnimate ? {
          rotate: [0, -4, 0, 4, 0],
          y: [0, 10, 5, 15, 0],
        } : {}}
        transition={{
          duration: actualDuration * 1.1, // Slightly different timing for visual interest
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.33, 0.5, 0.66, 1]
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
