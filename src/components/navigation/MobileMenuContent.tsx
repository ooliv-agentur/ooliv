
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Mail, Phone } from 'lucide-react';
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
              className="w-12 h-12 flex items-center justify-center text-[#b1b497] hover:bg-accent rounded-full border border-gray-300" 
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 flex flex-col py-4 px-6 overflow-y-auto">
            <nav className="space-y-4 text-center w-full">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
            </nav>
          </div>
          
          <div className="sticky bottom-0 z-10 border-t border-gray-200 p-6 space-y-5 bg-[#f7fafa]/95 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  icon: Mail, 
                  label: language === 'de' ? "E-Mail an ooliv" : "Email ooliv", 
                  href: "mailto:info@ooliv.de" 
                },
                { 
                  icon: Phone, 
                  label: language === 'de' ? "ooliv anrufen" : "Call ooliv", 
                  href: "tel:+4961316367801" 
                }
              ].map((contact, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="lg" 
                  className="w-full py-6 min-h-[60px] border-gray-300 text-[#b1b497] bg-gray-50/50 hover:bg-[#b1b497]/10 hover:text-[#b1b497] transition-all duration-200 hover:border-[#b1b497]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 flex items-center justify-center"
                  aria-label={contact.label}
                  asChild
                >
                  <a href={contact.href}>
                    <contact.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
