
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationLinks } from './NavigationLinks';

interface DesktopMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopMenuContent = ({ isOpen, onClose }: DesktopMenuContentProps) => {
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
          className="fixed top-0 right-0 bottom-0 w-[40%] bg-[#f7fafa] text-brand-heading z-[110] flex flex-col overflow-hidden"
        >
          <div className="sticky top-0 z-10 flex items-center justify-end p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
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
            <nav className="space-y-3 text-center w-full">
              <NavigationLinks layout="desktop" onLinkClick={handleLinkClick} />
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopMenuContent;
