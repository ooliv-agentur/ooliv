
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // If not German, return null to hide the language switcher
  if (language !== 'de') {
    return null;
  }
  
  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    // Switching to English
    setLanguage('en');
    
    if (currentPath === '/' || currentPath === '') {
      navigate('/en');
    } else {
      // Map German paths to English equivalent paths
      const pathMappings: Record<string, string> = {
        '/webdesign': '/en/web-design',
        '/webentwicklung': '/en/web-development',
        '/content-erstellung': '/en/content-creation',
        '/seo-optimierung': '/en/seo-optimization',
        '/google-ads': '/en/google-ads',
        '/ki-technologien': '/en/ai-technologies',
        '/case-studies': '/en/case-studies',
        '/ueber-ooliv': '/en/about-ooliv',
        '/kontakt': '/en/contact',
        '/impressum': '/en/legal-notice',
        '/datenschutz': '/en/privacy-policy',
      };
      
      const englishPath = pathMappings[currentPath] || '/en';
      navigate(englishPath);
    }
  };
  
  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="py-1 px-3 border-gray-300 text-brand-heading hover:text-[#b1b497] hover:border-[#b1b497] transition-all"
      size="sm"
    >
      <Globe className="h-4 w-4 mr-2 text-[#b1b497]" />
      <span>EN</span>
    </Button>
  );
};

export default LanguageSwitcher;
