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

  const baseDuration = 60; // seconds
  const actualDuration = baseDuration / speed;

  const shouldAnimate = !disableAnimation && !prefersReducedMotion;

  // Updated background style: stronger, centered, more visible
  const backgroundStyle = {
    background: `radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 80%)`,
    opacity: opacity,
  };

  const secondLayerStyle = {
    background: `radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 80%)`,
    opacity: opacity * 0.8,
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main rotating background */}
      <motion.div 
        className="absolute inset-0"
        style={backgroundStyle}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: 360, scale: [1, 1.02, 1] } : {}}
        transition={{
          duration: actualDuration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      />
      
      {/* Second subtle counter-rotating background */}
      <motion.div
        className="absolute inset-0"
        style={secondLayerStyle}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: -360, scale: [1, 1.01, 1] } : {}}
        transition={{
          duration: actualDuration * 1.2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
