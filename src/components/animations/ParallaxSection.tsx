import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ 
  children, 
  offset = 50, 
  speed = 0.5,
  className = ""
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, offset * speed]);
  
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
