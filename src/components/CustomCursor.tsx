
import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Reset cursor to default browser cursor
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
    
    // Remove cursor: none from all elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      (el as HTMLElement).style.cursor = '';
    });
    
    // Cleanup function to ensure cursor is reset
    return () => {
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);
  
  // Return null to not render anything
  return null;
};

export default CustomCursor;
