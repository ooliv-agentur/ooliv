
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <button 
      className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
      onClick={toggleLanguage}
    >
      <Globe className="mr-1.5 w-4 h-4" />
      <span>{language === 'de' ? 'DE' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
