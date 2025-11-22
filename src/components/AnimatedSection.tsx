
import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold || 0.15,
    rootMargin: '0px 0px -50px 0px', // Only trigger when well into viewport
  });

  // Return immediately without animations if reduced motion is preferred
  if (prefersReducedMotion) {
    return <section className={className}>{children}</section>;
  }

  const variants = {
    hidden: { opacity: 0, y: 8, willChange: 'transform, opacity' },
    visible: { 
      opacity: 1, 
      y: 0,
      willChange: 'auto',
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
