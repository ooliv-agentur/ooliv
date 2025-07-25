
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationLinks } from './NavigationLinks';

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
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="fixed top-0 right-0 bottom-0 w-full bg-medico-mint text-medico-darkGreen z-[95] flex flex-col overflow-hidden shadow-2xl h-screen-mobile"
        >
          {/* Close button */}
          <div className="absolute top-6 right-4 z-[96]">
            <button 
              className="flex items-center justify-center rounded-full text-white hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg w-10 h-10 min-w-10 min-h-10"
              style={{ 
                backgroundColor: '#32b1ab'
              }}
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <div 
            className="flex-1 flex flex-col py-4 px-6 overflow-y-auto safe-area-inset-top" 
            style={{ 
              minHeight: '0', // Allow flexbox to shrink
              paddingTop: 'max(1rem, env(safe-area-inset-top))' // Respect notch on iOS
            }}
          >
            <nav className="space-y-4 text-center w-full flex-1 flex flex-col justify-center">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
