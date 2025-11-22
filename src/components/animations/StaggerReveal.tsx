
import React, { ReactNode, Children, isValidElement, cloneElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  distance?: number;
}

const StaggerReveal = ({
  children,
  className = '',
  stagger = 0.05,
  delay = 0,
  distance = 15
}: StaggerRevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Return immediately without animations if reduced motion is preferred
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: distance 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Wrap each child in a motion.div with the item variants
  const staggeredChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      );
    }
    return child;
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {staggeredChildren}
    </motion.div>
  );
};

export default StaggerReveal;
