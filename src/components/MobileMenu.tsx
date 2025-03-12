
import { useState, useEffect, useRef } from 'react';
import { X, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (sectionId: string) => {
    onClose();
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <motion.div
              className="relative bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden max-w-md w-full m-4"
              ref={menuRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-200"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Menu Content */}
              <div className="p-6">
                <nav className="space-y-4">
                  <button onClick={() => handleLinkClick('solutions')} className="block text-lg hover:text-primary transition-colors duration-200 cursor-pointer w-full text-left">
                    {t('nav.solutions')}
                  </button>
                  <button onClick={() => handleLinkClick('process')} className="block text-lg hover:text-primary transition-colors duration-200 cursor-pointer w-full text-left">
                    {t('nav.process')}
                  </button>
                  <button onClick={() => handleLinkClick('cases')} className="block text-lg hover:text-primary transition-colors duration-200 cursor-pointer w-full text-left">
                    {t('nav.cases')}
                  </button>
                  <button onClick={() => handleLinkClick('faq')} className="block text-lg hover:text-primary transition-colors duration-200 cursor-pointer w-full text-left">
                    {t('nav.faq')}
                  </button>
                  <button onClick={() => handleLinkClick('contact')} className="block text-lg hover:text-primary transition-colors duration-200 cursor-pointer w-full text-left">
                    {t('nav.contact')}
                  </button>
                </nav>
              </div>

              {/* Footer with contact icons and CTA - sticky */}
              <div className="sticky bottom-0 z-10 border-t border-white/10 p-6 space-y-5 bg-gray-900/95 backdrop-blur-sm">
                <Button 
                  className="w-full justify-between group text-lg py-6 bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]" 
                  size="lg"
                  onClick={() => handleLinkClick('contact')}
                >
                  {t('footer.startProject')}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Contact buttons row */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mail, label: "Email" },
                    { icon: Phone, label: "Phone" }
                  ].map((contact, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="lg" 
                      className="w-full py-6 min-h-[60px] border-white/20 text-white bg-gray-800/50 hover:bg-white/10 hover:text-blue-400 transition-all duration-200 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center justify-center"
                      aria-label={contact.label}
                    >
                      <contact.icon className="h-6 w-6" />
                      <span className="ml-2">{contact.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
