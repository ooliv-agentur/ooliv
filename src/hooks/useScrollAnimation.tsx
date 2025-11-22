
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
  threshold = 0.15,
  delay = 0,
  distance = 8,
  direction = 'up'
}: ScrollAnimationOptions = {}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: '0px 0px -50px 0px',
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

  // Determine transform property based on direction - very subtle
  let transform = 'translateY(6px)';
  if (direction === 'down') transform = 'translateY(-6px)';
  if (direction === 'left') transform = 'translateX(6px)';
  if (direction === 'right') transform = 'translateX(-6px)';

  const animationClass = inView ? 'animate-fade-in opacity-100' : 'opacity-0';
  
  const style = {
    transform: inView ? 'none' : transform,
    transitionDelay: `${delay}s`,
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.35s',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    willChange: inView ? 'auto' : 'transform, opacity',
  };

  return {
    ref,
    animationClass,
    isInView: inView,
    style
  };
};

export default useScrollAnimation;
