import React, { ReactNode, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

/**
 * LazySection - Only renders children when they come into viewport
 * Perfect for heavy components like videos, animations, complex UI
 */
const LazySection = ({ 
  children, 
  fallback = <div className="h-32 animate-pulse bg-muted rounded" />,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazySectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true, // Only load once
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;