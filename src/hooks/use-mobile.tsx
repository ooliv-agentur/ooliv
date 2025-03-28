
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    // Initial check
    const checkIfMobile = () => {
      return window.innerWidth < MOBILE_BREAKPOINT;
    };
    
    // Set initial state
    setIsMobile(checkIfMobile());
    
    // Create debounced version of resize handler for better performance
    let timeoutId: number | null = null;
    
    const handleResize = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        setIsMobile(checkIfMobile());
      }, 100);
    };
    
    // Add event listener with debounce
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return isMobile
}
