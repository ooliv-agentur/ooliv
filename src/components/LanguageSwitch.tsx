
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className={cn(
        "flex items-center justify-center gap-1.5 px-2 py-1 hover:bg-transparent",
        "text-brand-heading rounded-full h-auto"
      )}
      aria-label={language === 'de' ? "Switch to English" : "Auf Deutsch umschalten"}
    >
      <Globe className="h-[18px] w-[18px]" />
      <span className="text-sm font-medium uppercase">
        {language === 'de' ? 'EN' : 'DE'}
      </span>
    </Button>
  );
};

export default LanguageSwitch;
