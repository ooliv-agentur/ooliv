
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface LanguageToggleProps {
  onToggle?: () => void;
}

const LanguageToggle = ({ onToggle }: LanguageToggleProps) => {
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
    
    if (onToggle) onToggle();
  };
  
  const languageButtonText = language === 'de' ? 'Sprache: Deutsch' : 'Language: English';
  const switchToText = language === 'de' ? 'Wechseln zu English' : 'Switch to German';

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="w-full justify-between py-3 border-gray-300 text-brand-heading hover:bg-gray-100"
    >
      <div className="flex items-center">
        <Globe className="h-4 w-4 mr-2 text-[#b1b497]" />
        <span>{languageButtonText}</span>
      </div>
      <span className="text-sm opacity-70">{switchToText}</span>
    </Button>
  );
};

export default LanguageToggle;
