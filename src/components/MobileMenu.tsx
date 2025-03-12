import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full" style={{ zIndex: 50 }}>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            style={{ zIndex: 1 }}
          />
          
          {/* Menu content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-gray-900/95 flex flex-col overflow-y-auto"
            style={{ zIndex: 2 }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10" 
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Navigation links */}
            <div className="flex-1 flex flex-col justify-center items-center py-8 px-6">
              <nav className="space-y-8 text-center w-full">
                <a 
                  href="#" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
                
                <div className="space-y-4">
                  <button 
                    onClick={toggleServices}
                    className="flex items-center justify-center gap-2 text-4xl font-bold text-white hover:text-primary transition-colors mx-auto"
                  >
                    Services
                    {servicesOpen ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                  
                  {servicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 py-2"
                    >
                      <a 
                        href="#" 
                        className="block text-xl text-white hover:text-primary transition-colors"
                        onClick={handleLinkClick}
                      >
                        Website Relaunch
                      </a>
                      <a 
                        href="#" 
                        className="block text-xl text-white hover:text-primary transition-colors"
                        onClick={handleLinkClick}
                      >
                        SEO
                      </a>
                      <a 
                        href="#" 
                        className="block text-xl text-white hover:text-primary transition-colors"
                        onClick={handleLinkClick}
                      >
                        AI Solutions
                      </a>
                      <a 
                        href="#" 
                        className="block text-xl text-white hover:text-primary transition-colors"
                        onClick={handleLinkClick}
                      >
                        Lead Generation
                      </a>
                    </motion.div>
                  )}
                </div>
                
                <a 
                  href="#cases" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Case Studies
                </a>
                
                <a 
                  href="#about" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  About Us
                </a>
                
                <a 
                  href="#" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
                
                <a 
                  href="#careers" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Careers
                </a>
              </nav>
            </div>
            
            {/* Footer with contact icons and CTA */}
            <div className="mt-auto border-t border-white/10 p-6 space-y-6">
              <Button 
                className="w-full justify-between group text-lg py-6 bg-primary hover:bg-primary/90 text-white" 
                size="lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="grid grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full py-6 border-white/20 text-white hover:bg-white/10"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full py-6 border-white/20 text-white hover:bg-white/10"
                >
                  <Mail className="h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full py-6 border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
