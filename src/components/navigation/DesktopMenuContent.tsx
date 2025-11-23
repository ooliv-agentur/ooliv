
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  const menuVariants = {
    hidden: { 
      y: "-10%",
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delayChildren: 0.15,
        staggerChildren: 0.08
      }
    },
    exit: { 
      y: "-10%",
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
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
          className="fixed inset-0 w-screen h-screen bg-white z-[95] flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        >
          {/* Header with Logo and Close Button */}
          <div className="w-full px-12 py-8 flex justify-between items-center border-b border-gray-100">
            <Link to="/" onClick={onClose}>
              <img 
                src="/ooliv_logo_2025.svg?v=2" 
                alt="ooliv logo" 
                className="h-8 w-auto" 
              />
            </Link>
            
            <button 
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6 text-[#000000] group-hover:rotate-[15deg] transition-transform duration-300" />
            </button>
          </div>

          {/* Main Content Area - 3 Columns */}
          <div className="flex-1 w-full px-12 py-16 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 h-full">
              
              {/* Column 1: Services Navigation */}
              <motion.nav 
                className="flex flex-col justify-center space-y-8"
                variants={itemVariants}
              >
                <NavigationLinks layout="desktop" onLinkClick={handleLinkClick} />
              </motion.nav>
              
              {/* Column 2: Description + CTA */}
              <motion.div 
                className="flex flex-col justify-center space-y-8 px-8"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold text-[#000000] leading-tight">
                  {language === 'de' 
                    ? 'ooliv – Digitale Strategie, UX & AI-Workflows für Unternehmen'
                    : 'ooliv – Digital Strategy, UX & AI Workflows for Companies'
                  }
                </h2>
                
                <p className="text-lg text-[#555555] leading-relaxed">
                  {language === 'de'
                    ? 'Wir entwickeln Websites, digitale Prozesse und AI-gestützte Workflows, die messbar mehr Leads generieren. Senior-geführte Beratung statt Agentur-Theater.'
                    : 'We develop websites, digital processes, and AI-powered workflows that measurably generate more leads. Senior-led consulting instead of agency theater.'
                  }
                </p>
                
                <Button 
                  size="lg"
                  className="bg-[#32b2ab] hover:bg-[#289690] text-white w-fit transition-all duration-200"
                  asChild
                >
                  <Link to={language === 'de' ? '/kontakt' : '/en/contact'} onClick={handleLinkClick}>
                    {language === 'de' ? 'Kostenloses Konzept sichern' : 'Get Free Concept'}
                  </Link>
                </Button>
              </motion.div>
              
              {/* Column 3: Contact Information */}
              <motion.div 
                className="flex flex-col justify-center space-y-6 px-8"
                variants={itemVariants}
              >
                <div className="space-y-2 text-[#555555] text-base">
                  <p className="font-semibold text-[#000000]">ooliv GmbH</p>
                  <p>Mombacher Str. 25</p>
                  <p>55122 Mainz, Deutschland</p>
                  
                  <div className="pt-4 space-y-1">
                    <a 
                      href="mailto:info@ooliv.de" 
                      className="block hover:text-[#32b2ab] transition-colors duration-200"
                    >
                      info@ooliv.de
                    </a>
                    <a 
                      href="tel:+4061316367801" 
                      className="block hover:text-[#32b2ab] transition-colors duration-200"
                    >
                      +49 6131 6367801
                    </a>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopMenuContent;
