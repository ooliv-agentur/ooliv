
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    window.scrollTo({ top: 0, behavior: 'instant' });
    onClose();
  };

  const menuVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="fixed top-0 left-0 w-full h-screen bg-white z-[100] flex flex-col overflow-y-auto"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh'
          }}
        >
          {/* Sticky Header with Logo and Close Button */}
          <div className="sticky top-0 z-10 bg-white border-b border-[#E5E5E5] px-6 py-5 flex justify-between items-center">
            <Link to="/" onClick={onClose}>
              <img 
                src="/ooliv_logo_2025.svg?v=2" 
                alt="ooliv logo" 
                className="h-6 w-auto" 
              />
            </Link>
            
            <button 
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group border border-[#E5E5E5]"
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-5 h-5 text-[#0D0D0D]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 px-6 py-10 space-y-12">
            
            {/* Services Navigation */}
            <nav className="space-y-4">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
            </nav>
            
            {/* Description + CTA Section */}
            <div className="space-y-5 border-t border-[#E5E5E5] pt-10">
              <h2 className="text-2xl font-bold text-[#0D0D0D] leading-tight">
                {language === 'de'
                  ? 'ooliv – Digitale Strategie, UX & AI-Workflows'
                  : 'ooliv – Digital Strategy, UX & AI Workflows'
                }
              </h2>
              
              <p className="text-base text-[#666666] leading-relaxed">
                {language === 'de'
                  ? 'Wir entwickeln Websites, digitale Prozesse und AI-gestützte Workflows, die Unternehmen messbar voranbringen.'
                  : 'We develop websites, digital processes, and AI-powered workflows that measurably advance companies.'
                }
              </p>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full border-2 border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all duration-200 font-semibold"
                asChild
              >
                <Link to={language === 'de' ? '/kontakt' : '/en/contact'} onClick={handleLinkClick}>
                  {language === 'de' ? 'Projekt starten' : 'Start Project'}
                </Link>
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 border-t border-[#E5E5E5] pt-10">
              <p className="font-bold text-[#0D0D0D] text-lg">ooliv GmbH</p>
              <div className="text-[#666666] text-sm space-y-1">
                <p>Mombacher Str. 25</p>
                <p>55122 Mainz</p>
                <a 
                  href="tel:+4061316367801" 
                  className="block mt-4 hover:text-[#32b2ab] transition-colors duration-200 font-medium"
                >
                  06131 6367801
                </a>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="block hover:text-[#32b2ab] transition-colors duration-200 font-medium"
                >
                  info@ooliv.de
                </a>
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
