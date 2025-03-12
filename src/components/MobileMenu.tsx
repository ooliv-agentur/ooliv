
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      // Add slight delay to prevent immediate closing when opening
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleLinkClick = () => {
    onClose();
  };

  // Animation variants for smooth transitions
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const servicesVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/75 flex flex-col z-[100]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          aria-modal="true"
          role="dialog"
          aria-label="Mobile menu"
        >
          {/* Content container */}
          <motion.div
            ref={menuRef}
            className="bg-gray-900 flex flex-col w-full h-full max-h-[100dvh] overflow-auto overscroll-contain"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Header with close button */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/10 bg-gray-900/90 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 w-12 h-12 rounded-full" 
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </Button>
            </div>
            
            {/* Navigation links - increased tap targets */}
            <div className="flex-1 flex flex-col justify-center items-center py-6 px-6 overflow-y-auto">
              <nav className="space-y-6 text-center w-full">
                <a 
                  href="#" 
                  className="block py-2 text-4xl font-bold text-white hover:text-primary transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                  onClick={handleLinkClick}
                  tabIndex={0}
                >
                  Home
                </a>
                
                <div className="space-y-3">
                  <button 
                    onClick={toggleServices}
                    className="flex items-center justify-center gap-2 mx-auto py-2 text-4xl font-bold text-white hover:text-primary transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md w-full"
                    aria-expanded={servicesOpen}
                    aria-controls="services-dropdown"
                  >
                    Services
                    {servicesOpen ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.div 
                        id="services-dropdown"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={servicesVariants}
                        className="space-y-3 py-2 overflow-hidden"
                      >
                        {['Website Relaunch', 'SEO', 'AI Solutions', 'Lead Generation'].map((service, index) => (
                          <a 
                            key={index}
                            href="#" 
                            className="block py-2 text-xl text-white hover:text-primary transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                            onClick={handleLinkClick}
                            tabIndex={0}
                          >
                            {service}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {['Case Studies', 'About Us', 'Contact', 'Careers'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="block py-2 text-4xl font-bold text-white hover:text-primary transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                    onClick={handleLinkClick}
                    tabIndex={0}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Footer with contact icons and CTA */}
            <div className="sticky bottom-0 z-10 border-t border-white/10 p-6 space-y-5 bg-gray-900/90 backdrop-blur-sm">
              <Button 
                className="w-full justify-between group text-lg py-6 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" 
                size="lg"
                onClick={handleLinkClick}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: MessageCircle, label: "WhatsApp" },
                  { icon: Mail, label: "Email" },
                  { icon: Phone, label: "Phone" }
                ].map((contact, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="lg" 
                    className="w-full py-6 border-white/20 text-white hover:bg-white/10 transition-all duration-200 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    aria-label={contact.label}
                  >
                    <contact.icon className="h-6 w-6" />
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
