
import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
}

/**
 * Hook to set meta tags consistently across the site
 * Always uses the non-www root domain (ooliv.de) for canonical URLs
 */
export const useMetaTags = ({ title, description, keywords, canonicalPath }: MetaTagsProps) => {
  useEffect(() => {
    // Function to update meta tags that will be called multiple times to handle race conditions
    const updateMetaTags = () => {
      // Set document title
      document.title = title;
      
      // Handle meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
      
      // Handle meta keywords if provided
      if (keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords);
      }
      
      // Handle canonical link - always point to the root domain (no www)
      const canonicalUrl = `https://ooliv.de${canonicalPath}`;
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
      
      // Force a re-render if necessary
      document.head.appendChild(document.createElement('meta')).remove();
    };
    
    // Execute immediately
    updateMetaTags();
    
    // And again after delays to ensure it takes effect after any potential overwrites
    const timeoutId = setTimeout(updateMetaTags, 100);
    const backupTimeoutId = setTimeout(updateMetaTags, 1000);
    
    // Clean up on component unmount
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(backupTimeoutId);
    };
  }, [title, description, keywords, canonicalPath]);
};
