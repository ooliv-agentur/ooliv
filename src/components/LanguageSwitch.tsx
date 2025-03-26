
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

// Map of English to German URL paths
const pathMapping: Record<string, string> = {
  '/': '/de',
  '/web-design': '/de/webdesign',
  '/web-development': '/de/webentwicklung',
  '/content-creation': '/de/content-erstellung',
  '/seo-optimization': '/de/seo-optimierung',
  '/google-ads': '/de/google-ads',
  '/ai-technologies': '/de/ki-technologien',
  '/case-studies': '/de/case-studies',
  '/about-ooliv': '/de/ueber-ooliv',
  '/contact': '/de/kontakt',
  '/careers': '/de/karriere',
  '/legal-notice': '/de/impressum',
  '/privacy-policy': '/de/datenschutz',
  '/data-privacy': '/de/datenschutz',
};

// Map of German to English URL paths (reverse of the above)
const reversePathMapping: Record<string, string> = Object.entries(pathMapping).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Make sure language state is synchronized with URL on mount and URL changes
  React.useEffect(() => {
    const currentPath = location.pathname;
    const isGermanPath = currentPath.startsWith('/de');
    
    if (isGermanPath && language !== 'de') {
      setLanguage('de');
    } else if (!isGermanPath && language !== 'en') {
      setLanguage('en');
    }
  }, [location.pathname, language, setLanguage]);

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    if (language === 'en') {
      // Switching to German
      setLanguage('de');
      
      // Try to find a mapped path
      for (const [enPath, dePath] of Object.entries(pathMapping)) {
        if (currentPath === enPath || currentPath.startsWith(enPath + '/')) {
          navigate(dePath);
          return;
        }
      }
      
      // Default fallback if no specific path mapping found
      navigate('/de');
    } else {
      // Switching to English
      setLanguage('en');
      
      // Try to find a mapped path
      for (const [dePath, enPath] of Object.entries(reversePathMapping)) {
        if (currentPath === dePath || currentPath.startsWith(dePath + '/')) {
          navigate(enPath);
          return;
        }
      }
      
      // Default fallback if no specific path mapping found
      navigate('/');
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'DE' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitch;
