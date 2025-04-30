
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="flex items-center justify-center text-sm font-medium"
      aria-label={language === 'de' ? "Switch to English" : "Auf Deutsch umschalten"}
    >
      <Globe className="h-4 w-4 mr-1.5" />
      <span>{t('nav.language')}</span>
    </Button>
  );
};

export default LanguageSwitch;
