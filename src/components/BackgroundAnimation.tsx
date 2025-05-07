
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  speed?: number;
  opacity?: number;
  disableAnimation?: boolean;
  testMode?: boolean;
  includeWave?: boolean;
}

const BackgroundAnimation = ({
  speed = 1,
  opacity = 0.8,
  disableAnimation = false,
  testMode = false,
  includeWave = true
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

  // Updated background style: stronger, centered, more visible glow
  const backgroundStyle = {
    background: `radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)`,
    opacity: opacity,
  };

  const secondLayerStyle = {
    background: `radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%)`,
    opacity: opacity * 0.8,
  };

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ rotate: 0 }}
      animate={shouldAnimate ? { rotate: 360 } : {}}
      transition={{
        duration: actualDuration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {/* Main background */}
      <div className="absolute inset-0" style={backgroundStyle} />
      
      {/* Second subtle counter-rotating background */}
      <motion.div
        className="absolute inset-0"
        style={secondLayerStyle}
        initial={{ rotate: 0 }}
        animate={shouldAnimate ? { rotate: -360 } : {}}
        transition={{
          duration: actualDuration * 1.2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      />

      {/* Bottom wave that rotates with the background */}
      {includeWave && (
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="absolute bottom-0 w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default BackgroundAnimation;
