
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  speed?: number;
  opacity?: number;
  disableAnimation?: boolean;
  testMode?: boolean; // New prop to enable test mode
}

const BackgroundAnimation = ({
  speed = 1,
  opacity = 0.8,
  disableAnimation = false,
  testMode = false // Default to false
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
  const actualDuration = testMode ? 10 : baseDuration / speed; // Force 10s in test mode
  
  // Skip animation if disabled or if user prefers reduced motion
  const shouldAnimate = !disableAnimation && !prefersReducedMotion;
  
  // Use test pattern in test mode, otherwise use subtle gradients
  const backgroundStyle = testMode 
    ? {
        background: "linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 255, 0.1) 100%)",
        opacity: 0.5, // More visible for testing
      }
    : {
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
      
      {/* Second layer with opposite rotation - only visible in regular mode */}
      {!testMode && (
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
      )}
      
      {/* Test indicator - only visible in test mode */}
      {testMode && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20 rounded-full border-4 border-dashed border-red-400 flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-red-500">
            TEST MODE
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BackgroundAnimation;
