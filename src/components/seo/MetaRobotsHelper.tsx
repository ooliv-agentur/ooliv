import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Helper component to ensure proper meta robots tags
const MetaRobotsHelper = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure all pages have proper robots meta tag
    let existingRobots = document.querySelector('meta[name="robots"]');
    
    if (!existingRobots) {
      existingRobots = document.createElement('meta');
      existingRobots.setAttribute('name', 'robots');
      document.head.appendChild(existingRobots);
    }
    
    // Set appropriate robots directive based on page
    const isPublicPage = ![
      '/admin', 
      '/preview', 
      '/api'
    ].some(path => location.pathname.startsWith(path));
    
    const robotsContent = isPublicPage 
      ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      : 'noindex, nofollow';
      
    existingRobots.setAttribute('content', robotsContent);
    
  }, [location.pathname]);

  return null;
};

export default MetaRobotsHelper;