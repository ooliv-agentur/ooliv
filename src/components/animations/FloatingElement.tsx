import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  intensity?: number;
  className?: string;
}

export const FloatingElement = ({ 
  children, 
  duration = 3, 
  delay = 0,
  intensity = 5,
  className = ""
}: FloatingElementProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};
