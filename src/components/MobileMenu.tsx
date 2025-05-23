
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, Phone, ArrowRight, Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-media-query';
import LanguageSwitcher from './navigation/LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

const MobileMenu = ({ isOpen, onClose, isDesktop }: MobileMenuProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
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
    const threshold = 100;

    if (diff > threshold) {
      onClose();
    }
    
    handleTouchStart.current = null;
    handleTouchMove.current = null;
  };

  // Handle link click with scroll to top
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  // Navigation links based on language
  const navigationLinks = language === 'de' ? [
    { title: 'Home', path: '/' },
    { title: 'Webdesign', path: '/webdesign' },
    { title: 'Webentwicklung', path: '/webentwicklung' },
    { title: 'Content-Erstellung', path: '/content-erstellung' },
    { title: 'SEO-Optimierung', path: '/seo-optimierung' },
    { title: 'Google Ads', path: '/google-ads' },
    { title: 'KI-Technologien', path: '/ki-technologien' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Über ooliv', path: '/ueber-ooliv' },
    { title: 'Kontakt', path: '/kontakt' }
  ] : [
    { title: 'Home', path: '/en' },
    { title: 'Web Design', path: '/en/webdesign' },
    { title: 'Web Development', path: '/en/webdevelopment' },
    { title: 'Content Creation', path: '/en/content-creation' },
    { title: 'SEO', path: '/en/seo' },
    { title: 'Google Ads', path: '/en/google-ads' },
    { title: 'AI Technologies', path: '/en/ai-technologies' },
    { title: 'Case Studies', path: '/en/case-studies' },
    { title: 'About ooliv', path: '/en/about-us' },
    { title: 'Contact', path: '/en/contact' }
  ];

  // Text based on language
  const menuText = language === 'de' ? 'Menü' : 'Menu';
  const closeMenuText = language === 'de' ? 'Menü schließen' : 'Close menu';

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const menuVariants = isDesktop 
    ? {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
        exit: { x: "100%", transition: { duration: 0.25, ease: 'easeIn' } }
      }
    : {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
        exit: { x: "100%", transition: { duration: 0.25, ease: 'easeIn' } }
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/50 flex flex-col z-[100]">
          <motion.div 
            ref={menuRef}
            className={cn(
              "flex flex-col bg-[#f7fafa] text-brand-heading", 
              isDesktop 
                ? "ml-auto w-[40%] h-full" 
                : "w-full h-full max-h-[100dvh] overflow-auto"
            )}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
              {!isDesktop && (
                <h2 className="text-lg font-semibold text-brand-heading font-sans">{menuText}</h2>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 flex items-center justify-center text-[#b1b497] hover:bg-accent rounded-full border border-gray-300" 
                onClick={onClose}
                aria-label={closeMenuText}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className={cn(
              "flex-1 flex flex-col py-4 px-6 overflow-y-auto",
              isDesktop ? "pt-4" : "pt-6"
            )}>
              {/* Language Switcher */}
              <div className="flex justify-end mb-4">
                <LanguageSwitcher />
              </div>
              
              <nav className={cn(
                "space-y-4 text-center w-full",
                isDesktop ? "space-y-3" : "space-y-4"
              )}>
                {navigationLinks.map((link, index) => (
                  <div key={index} className={cn()}>
                    <Link 
                      to={link.path}
                      className={cn(
                        "block py-2 font-bold text-brand-heading hover:text-[#b1b497] transition-colors focus:outline-none focus:text-[#b1b497] focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 rounded-md hover:scale-105 transition-transform font-sans",
                        isDesktop ? "text-lg py-2" : "text-3xl py-3"
                      )}
                      onClick={handleLinkClick}
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="sticky bottom-0 z-10 border-t border-gray-200 p-6 space-y-5 bg-[#f7fafa]/95 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Mail, label: language === 'de' ? "E-Mail an ooliv" : "Email ooliv", href: "mailto:info@ooliv.de" },
                  { icon: Phone, label: language === 'de' ? "ooliv anrufen" : "Call ooliv", href: "tel:+4961316367801" }
                ].map((contact, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="lg" 
                    className="w-full py-6 min-h-[60px] border-gray-300 text-[#b1b497] bg-gray-50/50 hover:bg-[#b1b497]/10 hover:text-[#b1b497] transition-all duration-200 hover:border-[#b1b497]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 flex items-center justify-center"
                    aria-label={contact.label}
                    asChild
                  >
                    <a href={contact.href}>
                      <contact.icon className="h-6 w-6" />
                    </a>
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
