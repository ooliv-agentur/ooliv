
import { useEffect, useState } from 'react';

interface UseImagePreloaderProps {
  src: string;
  priority?: boolean;
}

export const useImagePreloader = ({ src, priority = false }: UseImagePreloaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
    };

    // Preload with appropriate priority
    if (priority) {
      img.fetchPriority = 'high';
    }
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority]);

  return { isLoaded, hasError };
};
