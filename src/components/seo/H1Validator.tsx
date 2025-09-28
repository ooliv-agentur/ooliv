import { useEffect } from 'react';

// Component to ensure every page has exactly one H1 tag
const H1Validator = () => {
  useEffect(() => {
    const validateH1 = () => {
      const h1Elements = document.querySelectorAll('h1');
      
      if (h1Elements.length === 0) {
        console.warn('SEO Warning: No H1 tag found on this page');
      } else if (h1Elements.length > 1) {
        console.warn('SEO Warning: Multiple H1 tags found on this page:', h1Elements.length);
        console.log('H1 elements:', h1Elements);
      } else {
        console.log('✓ SEO: Single H1 tag found:', h1Elements[0].textContent);
      }
    };

    // Run validation after DOM is ready
    const timer = setTimeout(validateH1, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default H1Validator;