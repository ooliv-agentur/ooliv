
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

  // Improved animation variants with better easing
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
    exit: { x: "100%", transition: { duration: 0.25, ease: 'easeIn' } }
  };

  const servicesVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      marginTop: 16,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1] // Improved easing function
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      marginTop: 0,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1]
      } 
    }
  };

  // Add touch swipe handling
  const handleTouchStart = useRef<number | null>(null);
  const handleTouchMove = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleTouchMove.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!handleTouchStart.current || !handleTouchMove.current) return;
    
    const diff = handleTouchStart.current - handleTouchMove.current;
    const threshold = 100; // Minimum swipe distance
    
    if (diff > threshold) {
      onClose(); // Swipe left to close
    }
    
    handleTouchStart.current = null;
    handleTouchMove.current = null;
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
          {/* Content container with swipe handling */}
          <motion.div
            ref={menuRef}
            className="bg-gray-900 flex flex-col w-full h-full max-h-[100dvh] overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Header with close button - sticky */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/10 bg-gray-900/95 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 w-14 h-14 rounded-full flex items-center justify-center" 
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>
            
            {/* Navigation links with improved scrolling */}
            <div className="flex-1 flex flex-col py-6 px-6 overflow-y-auto">
              <nav className="space-y-6 text-center w-full">
                <a 
                  href="#" 
                  className="block py-3 text-4xl font-bold text-white hover:text-blue-400 transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:scale-105 transition-transform"
                  onClick={handleLinkClick}
                  tabIndex={0}
                >
                  Home
                </a>
                
                <div className="space-y-3">
                  <button 
                    onClick={toggleServices}
                    className="flex items-center justify-center gap-2 mx-auto py-3 text-4xl font-bold text-white hover:text-blue-400 transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md w-full hover:scale-105 transition-transform"
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
                        className="space-y-4 py-2 px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
                      >
                        {['Website Relaunch', 'SEO', 'AI Solutions', 'Lead Generation'].map((service, index) => (
                          <a 
                            key={index}
                            href="#" 
                            className="block py-3 text-xl text-white hover:text-blue-400 transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:scale-105 transition-transform"
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
                    className="block py-3 text-4xl font-bold text-white hover:text-blue-400 transition-colors focus:outline-none focus:text-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:scale-105 transition-transform"
                    onClick={handleLinkClick}
                    tabIndex={0}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Footer with contact icons and CTA - sticky */}
            <div className="sticky bottom-0 z-10 border-t border-white/10 p-6 space-y-5 bg-gray-900/95 backdrop-blur-sm">
              <Button 
                className="w-full justify-between group text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]" 
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
                    className="w-full py-6 min-h-[60px] border-white/20 text-white bg-gray-800/50 hover:bg-white/10 hover:text-blue-400 transition-all duration-200 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center justify-center"
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
