
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
          className="fixed top-0 left-0 w-full h-screen bg-white z-[100] flex flex-col"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
          }}
        >
          {/* Header with Logo and Close Button */}
          <div className="w-full px-8 lg:px-16 py-6 flex justify-between items-center border-b border-[#E5E5E5]">
            <Link to="/" onClick={onClose}>
              <img 
                src="/ooliv_logo_2025.svg?v=2" 
                alt="ooliv logo" 
                className="h-7 w-auto" 
              />
            </Link>
            
            <button 
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group border border-[#E5E5E5]"
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6 text-[#0D0D0D]" />
            </button>
          </div>

          {/* Main Content Area - 3 Columns with exact proportions */}
          <div className="flex-1 w-full px-8 lg:px-16 py-12 overflow-y-auto">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[40%_30%_30%] gap-12 lg:gap-8 items-center">
              
              {/* Column 1: Services Navigation (40%) */}
              <nav className="flex flex-col justify-center space-y-6 lg:space-y-8">
                <NavigationLinks layout="desktop" onLinkClick={handleLinkClick} />
              </nav>
              
              {/* Column 2: Description + CTA (30%) */}
              <div className="flex flex-col justify-center space-y-6 lg:pl-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0D0D0D] leading-tight">
                  {language === 'de' 
                    ? 'ooliv – Digitale Strategie, UX & AI-Workflows'
                    : 'ooliv – Digital Strategy, UX & AI Workflows'
                  }
                </h2>
                
                <p className="text-base lg:text-lg text-[#666666] leading-relaxed">
                  {language === 'de'
                    ? 'Wir entwickeln Websites, digitale Prozesse und AI-gestützte Workflows, die Unternehmen messbar voranbringen.'
                    : 'We develop websites, digital processes, and AI-powered workflows that measurably advance companies.'
                  }
                </p>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-fit border-2 border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all duration-200 font-semibold"
                  asChild
                >
                  <Link to={language === 'de' ? '/kontakt' : '/en/contact'} onClick={handleLinkClick}>
                    {language === 'de' ? 'Projekt starten' : 'Start Project'}
                  </Link>
                </Button>
              </div>
              
              {/* Column 3: Contact Information (30%) */}
              <div className="flex flex-col justify-center space-y-4 lg:pl-8">
                <div className="space-y-3 text-[#666666] text-base">
                  <p className="font-bold text-[#0D0D0D] text-lg">ooliv GmbH</p>
                  <div className="space-y-1">
                    <p>Mombacher Str. 25</p>
                    <p>55122 Mainz</p>
                  </div>
                  
                  <div className="pt-3 space-y-2">
                    <a 
                      href="tel:+4061316367801" 
                      className="block hover:text-[#32b2ab] transition-colors duration-200 font-medium"
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
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopMenuContent;
