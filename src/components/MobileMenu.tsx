
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-media-query';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

const MobileMenu = ({ isOpen, onClose, isDesktop }: MobileMenuProps) => {
  const { language, setLanguage } = useLanguage();
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

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    if (language === 'en') {
      // Switching to German
      setLanguage('de');
      
      if (currentPath === '/') {
        navigate('/de');
      } else if (currentPath.startsWith('/')) {
        const pathWithoutLeadingSlash = currentPath.substring(1);
        navigate(`/de/${pathWithoutLeadingSlash}`);
      }
    } else {
      // Switching to English
      setLanguage('en');
      
      if (currentPath === '/de') {
        navigate('/');
      } else if (currentPath.startsWith('/de/')) {
        const pathWithoutDe = currentPath.substring(4);
        navigate(pathWithoutDe);
      }
    }
    
    onClose();
  };

  const getNavigationLinks = () => {
    if (language === 'de') {
      return [
        { title: 'Home', path: '/de' },
        { title: 'Webdesign', path: '/de/webdesign' },
        { title: 'Webentwicklung', path: '/de/webentwicklung' },
        { title: 'Content-Erstellung', path: '/de/content-erstellung' },
        { title: 'SEO-Optimierung', path: '/de/seo-optimierung' },
        { title: 'Google Ads', path: '/de/google-ads' },
        { title: 'KI-Technologien', path: '/de/ki-technologien' },
        { title: 'Case Studies', path: '/de/case-studies' },
        { title: 'Über ooliv', path: '/de/ueber-ooliv' },
        { title: 'Kontakt', path: '/de/kontakt' }
      ];
    } else {
      return [
        { title: 'Home', path: '/' },
        { title: 'Web Design', path: '/web-design' },
        { title: 'Web Development', path: '/web-development' },
        { title: 'Content Creation', path: '/content-creation' },
        { title: 'SEO Optimization', path: '/seo-optimization' },
        { title: 'Google Ads', path: '/google-ads' },
        { title: 'AI Technologies', path: '/ai-technologies' },
        { title: 'Case Studies', path: '/case-studies' },
        { title: 'About ooliv', path: '/about-ooliv' },
        { title: 'Contact', path: '/contact' }
      ];
    }
  };

  const navigationLinks = getNavigationLinks();
  
  const startProjectText = language === 'de' ? 'Projekt starten' : 'Start Your Project';
  const languageButtonText = language === 'de' ? 'Sprache: Deutsch' : 'Language: English';
  const switchToText = language === 'de' ? 'Wechseln zu English' : 'Switch to German';

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
        <motion.div
          className="fixed inset-0 bg-black/50 flex flex-col z-[100]"
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
            className={cn(
              "flex flex-col bg-[#f7fafa] text-brand-heading", 
              isDesktop 
                ? "ml-auto w-[40%] h-full" 
                : "w-full h-full max-h-[100dvh] overflow-auto"
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
              {!isDesktop && (
                <h2 className="text-lg font-semibold text-brand-heading font-sans">{language === 'de' ? 'Menü' : 'Menu'}</h2>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-brand-heading hover:bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center ml-auto" 
                onClick={onClose}
                aria-label={language === 'de' ? 'Menü schließen' : 'Close menu'}
              >
                <X className="h-8 w-8" />
              </Button>
            </div>
            
            <div className={cn(
              "flex-1 flex flex-col py-4 px-6 overflow-y-auto",
              isDesktop ? "pt-4" : "pt-6"
            )}>
              {/* Language switcher at the top of the menu */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={toggleLanguage}
                  className="w-full justify-between py-3 border-gray-300 text-brand-heading hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{languageButtonText}</span>
                  </div>
                  <span className="text-sm opacity-70">{switchToText}</span>
                </Button>
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
                        "block py-2 font-bold text-brand-heading hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/50 rounded-md hover:scale-105 transition-transform font-sans",
                        isDesktop ? "text-lg py-2" : "text-3xl py-3"
                      )}
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="sticky bottom-0 z-10 border-t border-gray-200 p-6 space-y-5 bg-[#f7fafa]/95 backdrop-blur-sm">
              <Button 
                className="w-full justify-between group text-lg py-6 bg-[#335bff] hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] font-sans" 
                size="lg"
                onClick={onClose}
                asChild
              >
                <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
                  {startProjectText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: MessageCircle, label: "WhatsApp" },
                  { icon: Mail, label: language === 'de' ? "E-Mail" : "Email" },
                  { icon: Phone, label: language === 'de' ? "Telefon" : "Phone" }
                ].map((contact, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="lg" 
                    className="w-full py-6 min-h-[60px] border-gray-300 text-brand-heading bg-gray-50/50 hover:bg-[#335bff]/10 hover:text-[#335bff] transition-all duration-200 hover:border-[#335bff]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#335bff]/50 flex items-center justify-center"
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
