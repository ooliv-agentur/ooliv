
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const useScrollAnimation = ({
  triggerOnce = true,
  threshold = 0.2,
  delay = 0,
  distance = 30,
  direction = 'up'
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

  // Determine transform property based on direction
  let transform = 'translateY(10px)';
  if (direction === 'down') transform = 'translateY(-10px)';
  if (direction === 'left') transform = 'translateX(10px)';
  if (direction === 'right') transform = 'translateX(-10px)';

  const animationClass = inView ? 'animate-fade-in opacity-100' : 'opacity-0';
  
  const style = {
    transform: inView ? 'none' : transform,
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
