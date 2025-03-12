import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();
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

  // Navigation links data
  const navigationLinks = [
    { title: 'Home', path: '/' },
    { title: 'Web Design & Development', path: '/web-design-development' },
    { title: 'SEO & Performance Optimization', path: '/seo-performance-optimization' },
    { title: 'AI-Powered Solutions', path: '/ai-powered-solutions' },
    { title: 'Lead Generation & Conversion Optimization', path: '/lead-generation' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Contact', path: '/contact' },
    { title: 'Careers', path: '/careers' }
  ];

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
          <motion.div
            ref={menuRef}
            className="bg-brand-footer flex flex-col w-full h-full max-h-[100dvh] overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/10 bg-brand-footer/95 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white font-sans">Menu</h2>
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
            
            {/* Navigation links */}
            <div className="flex-1 flex flex-col py-6 px-6 overflow-y-auto">
              <nav className="space-y-6 text-center w-full">
                {navigationLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path}
                    className="block py-3 text-4xl font-bold text-white hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:scale-105 transition-transform font-sans"
                    onClick={onClose}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Footer */}
            <div className="sticky bottom-0 z-10 border-t border-white/10 p-6 space-y-5 bg-brand-footer/95 backdrop-blur-sm">
              <Button 
                className="w-full justify-between group text-lg py-6 bg-brand-primary hover:bg-brand-primaryHover text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02] font-sans" 
                size="lg"
                onClick={onClose}
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
                    className="w-full py-6 min-h-[60px] border-white/20 text-white bg-brand-backgroundAlt/10 hover:bg-brand-primary hover:text-white transition-all duration-200 hover:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center justify-center"
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
