
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
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Return immediately without animations if reduced motion is preferred
  if (prefersReducedMotion) {
    return <section className={className}>{children}</section>;
  }

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
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
