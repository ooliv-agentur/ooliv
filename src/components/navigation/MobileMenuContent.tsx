
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
  
  // Handle CTA click - open lead form
  const handleCtaClick = () => {
    onClose(); // Close menu first
    setTimeout(() => {
      window.dispatchEvent(new Event('open-lead-form'));
    }, 300); // Wait for menu animation to finish
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
          className="fixed top-0 right-0 bottom-0 w-full bg-medico-mint z-[95] flex flex-col overflow-hidden shadow-2xl h-screen-mobile"
        >
          {/* Close button */}
          <div className="absolute top-6 right-4 z-[100]">
            <button 
              className="flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg w-10 h-10 min-w-10 min-h-10"
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6" style={{ color: '#000000' }} aria-hidden="true" />
            </button>
          </div>

          <div 
            className="flex-1 flex flex-col py-4 px-6 overflow-y-auto safe-area-inset-top" 
            style={{ 
              minHeight: '0', // Allow flexbox to shrink
              paddingTop: 'max(1rem, env(safe-area-inset-top))' // Respect notch on iOS
            }}
          >
            <nav className="space-y-6 text-center w-full flex-1 flex flex-col justify-center">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
              
              {/* Prominent CTA Button */}
              <div className="pt-6 pb-4">
                <Button
                  onClick={handleCtaClick}
                  size="lg"
                  className="w-full max-w-xs mx-auto bg-black text-white hover:bg-black/90 font-bold py-4 text-lg shadow-lg"
                >
                  {language === 'de' ? 'Mit ooliv durchstarten' : 'Get Started with ooliv'}
                </Button>
                <p className="text-xs text-medico-darkGreen/60 mt-3">
                  {language === 'de' 
                    ? 'Uli und das Team melden sich innerhalb von 24h' 
                    : 'Uli and the team will respond within 24h'}
                </p>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
