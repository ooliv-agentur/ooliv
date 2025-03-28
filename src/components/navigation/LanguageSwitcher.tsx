
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
      setLanguage('de');
      
      if (currentPath === '/') {
        navigate('/de');
      } else if (currentPath.startsWith('/')) {
        const pathWithoutLeadingSlash = currentPath.substring(1);
        navigate(`/de/${pathWithoutLeadingSlash}`);
      }
    } else {
      setLanguage('en');
      
      if (currentPath === '/de') {
        navigate('/');
      } else if (currentPath.startsWith('/de/')) {
        const pathWithoutDe = currentPath.substring(4);
        navigate(pathWithoutDe);
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
