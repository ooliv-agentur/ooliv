
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to scroll to top on page navigation
 * Automatically scrolls to the top of the page when the route changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Log that scroll reset was performed
    console.log('Scrolled to top on navigation to:', pathname);
  }, [pathname]);
  
  return null;
};
