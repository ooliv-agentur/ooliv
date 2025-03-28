
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { language, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn', delay: 0.3 } }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { 
        type: "spring", 
        damping: 30, 
        stiffness: 300,
        mass: 1
      } 
    },
    exit: { 
      x: "100%", 
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + navigationLinks.length * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col z-[100]"
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
            className="bg-ooliv-black flex flex-col w-full h-full max-h-[100dvh] overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/10 bg-ooliv-black/95 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white font-heading">{language === 'de' ? 'Menü' : 'Menu'}</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 w-14 h-14 rounded-full flex items-center justify-center" 
                onClick={onClose}
                aria-label={language === 'de' ? 'Menü schließen' : 'Close menu'}
              >
                <X className="h-8 w-8" />
              </Button>
            </div>
            
            <div className="flex-1 flex flex-col py-6 px-6 overflow-y-auto">
              <motion.nav className="space-y-5 text-left w-full">
                {navigationLinks.map((link, index) => (
                  <motion.div 
                    key={index} 
                    className={cn()}
                    variants={listItemVariants}
                    custom={index}
                  >
                    <div 
                      className="menu-link group"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <Link 
                        to={link.path}
                        className="block py-3 text-5xl font-bold text-white hover:text-ooliv-green transition-colors focus:outline-none focus:text-ooliv-green focus-visible:ring-2 focus-visible:ring-white/50 rounded-md font-heading"
                        onClick={onClose}
                      >
                        <span className="menu-link-text">
                          {link.title}
                        </span>
                        <span className="menu-link-text-duplicate text-ooliv-green">
                          {link.title}
                        </span>
                      </Link>
                      <motion.div 
                        className="h-px bg-white/20 w-full mt-1"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: activeIndex === index ? 1 : 0,
                          originX: 0
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
            
            <div className="sticky bottom-0 z-10 border-t border-white/10 p-6 space-y-5 bg-ooliv-black/95 backdrop-blur-sm">
              <motion.div
                variants={buttonVariants}
              >
                <Button 
                  className="w-full justify-between group text-lg py-6 font-heading hover:bg-ooliv-green hover:text-ooliv-black" 
                  size="lg"
                  onClick={onClose}
                  asChild
                >
                  <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
                    {startProjectText}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-3 gap-4"
                variants={buttonVariants}
              >
                {[
                  { icon: MessageCircle, label: "WhatsApp" },
                  { icon: Mail, label: language === 'de' ? "E-Mail" : "Email" },
                  { icon: Phone, label: language === 'de' ? "Telefon" : "Phone" }
                ].map((contact, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="lg" 
                    className="w-full py-6 min-h-[60px] border-white/20 text-white bg-ooliv-warm-grey/10 hover:bg-ooliv-green hover:text-ooliv-black transition-all duration-200 hover:border-ooliv-green focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center justify-center"
                    aria-label={contact.label}
                  >
                    <contact.icon className="h-6 w-6" />
                  </Button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
