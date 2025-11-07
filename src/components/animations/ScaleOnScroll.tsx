import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScaleOnScrollProps {
  children: ReactNode;
  scaleRange?: [number, number];
  className?: string;
}

export const ScaleOnScroll = ({ 
  children, 
  scaleRange = [0.8, 1],
  className = ""
}: ScaleOnScrollProps) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }
  
  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};
