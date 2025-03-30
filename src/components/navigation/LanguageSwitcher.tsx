
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    if (language === 'en') {
      // Switching to German (default)
      setLanguage('de');
      
      if (currentPath === '/en') {
        navigate('/');
      } else if (currentPath.startsWith('/en/')) {
        // Map English paths to German equivalent paths
        const pathWithoutEn = currentPath.substring(3);
        
        // Map of English paths to German paths
        const pathMappings: Record<string, string> = {
          '/web-design': '/webdesign',
          '/web-development': '/webentwicklung',
          '/content-creation': '/content-erstellung',
          '/seo-optimization': '/seo-optimierung',
          '/google-ads': '/google-ads',
          '/ai-technologies': '/ki-technologien',
          '/case-studies': '/case-studies',
          '/about-ooliv': '/ueber-ooliv',
          '/contact': '/kontakt',
          '/careers': '/karriere',
          '/legal-notice': '/impressum',
          '/data-privacy': '/datenschutz',
          '/privacy-policy': '/datenschutz',
        };
        
        const germanPath = pathMappings[pathWithoutEn] || '/';
        navigate(germanPath);
      }
    } else {
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
          '/karriere': '/en/careers',
          '/impressum': '/en/legal-notice',
          '/datenschutz': '/en/privacy-policy',
        };
        
        const englishPath = pathMappings[currentPath] || '/en';
        navigate(englishPath);
      }
    }
  };
  
  const languageButtonText = language === 'de' ? 'EN' : 'DE';
  
  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="py-1 px-3 border-gray-300 text-brand-heading hover:text-[#b1b497] hover:border-[#b1b497] transition-all"
      size="sm"
    >
      <Globe className="h-4 w-4 mr-2 text-[#b1b497]" />
      <span>{languageButtonText}</span>
    </Button>
  );
};

export default LanguageSwitcher;
