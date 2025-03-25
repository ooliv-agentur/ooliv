
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    
    if (language === 'en') {
      // Switching to German
      setLanguage('de');
      
      // Create the German path based on the current English path
      let germanPath = '/de';
      
      // Handle root path
      if (currentPath === '/') {
        navigate(germanPath);
        return;
      }
      
      // Handle other paths by adding /de prefix
      germanPath = `/de${currentPath}`;
      navigate(germanPath);
    } else {
      // Switching to English
      setLanguage('en');
      
      // Create the English path based on the current German path
      let englishPath = '/';
      
      // If we're on a German path, remove the /de prefix
      if (currentPath.startsWith('/de')) {
        englishPath = currentPath.replace('/de', '') || '/';
        navigate(englishPath);
      } else {
        navigate(englishPath);
      }
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
