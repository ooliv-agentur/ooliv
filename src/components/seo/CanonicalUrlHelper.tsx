import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Helper to ensure canonical URLs are always correctly set
const CanonicalUrlHelper = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Ensure canonical URL is always the non-www, https version
    const currentUrl = window.location.href;
    const canonicalUrl = `https://ooliv.de${location.pathname}`;
    
    // Update canonical link if it doesn't match
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical && existingCanonical.getAttribute('href') !== canonicalUrl) {
      existingCanonical.setAttribute('href', canonicalUrl);
    }
  }, [location.pathname]);
  
  return null;
};

export default CanonicalUrlHelper;