
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
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

  const menuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    },
    exit: { 
      x: "100%",
      opacity: 0,
      transition: { 
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
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
          className="fixed top-0 right-0 bottom-0 w-[40%] bg-medico-mint text-medico-darkGreen z-[95] flex flex-col overflow-hidden h-screen shadow-2xl"
        >
          {/* Close button */}
          <div className="absolute top-6 right-4 z-[96]">
            <button 
              className="flex items-center justify-center rounded-full text-white hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg w-10 h-10 min-w-10 min-h-10"
              style={{ 
                backgroundColor: '#1A1A1A'
              }}
              onClick={onClose}
              aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Main content area - fills full height */}
          <div className="flex-1 flex flex-col justify-center py-6 px-8">
            <motion.nav 
              className="space-y-3 text-center w-full"
              variants={itemVariants}
            >
              <NavigationLinks layout="desktop" onLinkClick={handleLinkClick} />
            </motion.nav>
          </div>
          
          {/* Company details section at bottom */}
          <motion.div 
            className="border-t border-accent-primary/20 p-8 bg-medico-mint"
            variants={itemVariants}
          >
            {/* Company name */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-medico-darkGreen mb-2">ooliv</h3>
              <p className="text-lg text-medico-darkGreen/80">
                {language === 'de' ? 'Digitalagentur aus Mainz' : 'Digital Agency from Mainz'}
              </p>
            </div>
            
            {/* Contact details */}
            <div className="space-y-4 text-center">
              {/* Address */}
              <div className="flex items-center justify-center text-medico-darkGreen/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Mainz, Deutschland</span>
              </div>
              
              {/* Contact buttons */}
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent-primary/30 text-medico-darkGreen bg-white/90 hover:bg-accent-primary hover:text-white transition-all duration-200"
                  asChild
                >
                  <a href="mailto:info@ooliv.de" aria-label={language === 'de' ? "E-Mail senden" : "Send email"}>
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">Email</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent-primary/30 text-medico-darkGreen bg-white/90 hover:bg-accent-primary hover:text-white transition-all duration-200"
                  asChild
                >
                  <a href="tel:+4961316367801" aria-label={language === 'de' ? "Anrufen" : "Call us"}>
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{language === 'de' ? 'Anrufen' : 'Call'}</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent-primary/30 text-medico-darkGreen bg-white/90 hover:bg-green-500 hover:text-white transition-all duration-200"
                  asChild
                >
                  <a href="https://wa.me/+4917680167641" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopMenuContent;
