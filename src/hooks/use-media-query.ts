
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Set up listener for changes
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    // Clean up listener on unmount
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  
  return matches;
}
