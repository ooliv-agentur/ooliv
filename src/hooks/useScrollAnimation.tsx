
import { useInView } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = ({
  triggerOnce = true,
  threshold = 0.2,
  delay = 0
}: ScrollAnimationOptions = {}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Return no animation classes if user prefers reduced motion
  if (prefersReducedMotion) {
    return { 
      ref, 
      animationClass: '', 
      isInView: true, 
      style: {}
    };
  }

  const animationClass = inView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10';
  
  const style = {
    transitionDelay: `${delay}s`,
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return {
    ref,
    animationClass,
    isInView: inView,
    style
  };
};

export default useScrollAnimation;
