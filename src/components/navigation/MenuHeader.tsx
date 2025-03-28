
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface MenuHeaderProps {
  onClose: () => void;
  isDesktop?: boolean;
}

const MenuHeader = ({ onClose, isDesktop }: MenuHeaderProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
      {!isDesktop && (
        <h2 className="text-lg font-semibold text-brand-heading font-sans">
          {language === 'de' ? 'Menü' : 'Menu'}
        </h2>
      )}
      <Button 
        variant="ghost" 
        size="icon" 
        className="w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] transition-all duration-300" 
        onClick={onClose}
        aria-label={language === 'de' ? 'Menü schließen' : 'Close menu'}
      >
        <X className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MenuHeader;
