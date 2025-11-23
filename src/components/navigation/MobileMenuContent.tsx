
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
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      y: "-10%",
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
          className="fixed inset-0 w-screen h-screen bg-white z-[95] flex flex-col overflow-y-auto shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        >
          {/* Sticky Header with Logo and Close Button */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-6 flex justify-between items-center">
            <Link to="/" onClick={onClose}>
              <img 
                src="/ooliv_logo_2025.svg?v=2" 
                alt="ooliv logo" 
                className="h-6 w-auto" 
              />
            </Link>
            
            <button 
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6 text-[#000000] group-hover:rotate-[15deg] transition-transform duration-300" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 px-6 py-12 space-y-16">
            
            {/* Services Navigation */}
            <nav className="space-y-6">
              <NavigationLinks layout="mobile" onLinkClick={handleLinkClick} />
            </nav>
            
            {/* Description + CTA Section */}
            <div className="space-y-6 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-[#000000] leading-tight">
                {language === 'de'
                  ? 'ooliv – Digitale Strategie, UX & AI-Workflows für Unternehmen'
                  : 'ooliv – Digital Strategy, UX & AI Workflows for Companies'
                }
              </h2>
              
              <p className="text-base text-[#555555] leading-relaxed">
                {language === 'de'
                  ? 'Wir entwickeln Websites, digitale Prozesse und AI-gestützte Workflows, die messbar mehr Leads generieren. Senior-geführte Beratung statt Agentur-Theater.'
                  : 'We develop websites, digital processes, and AI-powered workflows that measurably generate more leads. Senior-led consulting instead of agency theater.'
                }
              </p>
              
              <Button 
                size="lg"
                className="w-full bg-[#32b2ab] hover:bg-[#289690] text-white transition-all duration-200"
                asChild
              >
                <Link to={language === 'de' ? '/kontakt' : '/en/contact'} onClick={handleLinkClick}>
                  {language === 'de' ? 'Kostenloses Konzept sichern' : 'Get Free Concept'}
                </Link>
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 border-t border-gray-100 pt-12">
              <p className="font-semibold text-[#000000] text-base">ooliv GmbH</p>
              <div className="text-[#555555] text-sm space-y-1">
                <p>Mombacher Str. 25</p>
                <p>55122 Mainz, Deutschland</p>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="block mt-4 hover:text-[#32b2ab] transition-colors duration-200"
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
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuContent;
