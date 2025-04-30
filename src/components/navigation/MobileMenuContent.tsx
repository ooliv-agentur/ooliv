
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationLinks } from './NavigationLinks';
import LanguageSwitch from '../LanguageSwitch';

interface MobileMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuContent = ({ isOpen, onClose }: MobileMenuContentProps) => {
  const { language } = useLanguage();
  
  // Handle link click with scroll to top
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-0 right-0 bottom-0 w-full md:w-[350px] bg-[#f7fafa] text-brand-heading z-[110] flex flex-col overflow-hidden"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-brand-heading font-sans">
              {language === 'de' ? 'Menü' : 'Menu'}
            </h2>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-12 h-12 flex items-center justify-center text-[#b1b497] hover:bg-accent rounded-full" 
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 flex flex-col py-4 px-6 overflow-y-auto">
            <div className="mb-4 flex justify-center">
              <LanguageSwitch />
            </div>
            <nav className="space-y-4 text-center w-full">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
