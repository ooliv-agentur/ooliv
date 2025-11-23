import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const germanLinks = [
  { title: 'Digitale Transformation & Strategie', path: '/digitale-transformation-strategie' },
  { title: 'UX & Konzeption', path: '/ux-konzeption' },
  { title: 'Webdesign & Entwicklung', path: '/webdesign-entwicklung' },
  { title: 'SEO & Performance', path: '/seo-performance' },
  { title: 'AI-Workflows', path: '/ai-workflows' },
  { title: 'Referenzen', path: '/referenzen' },
  { title: 'Über uns', path: '/ueber-uns' },
  { title: 'Kontakt', path: '/kontakt' }
];

const englishLinks = [
  { title: 'Digital Transformation & Strategy', path: '/en/digital-transformation-strategy' },
  { title: 'UX & Conception', path: '/en/ux-conception' },
  { title: 'Web Design & Development', path: '/en/webdesign-development' },
  { title: 'SEO & Performance', path: '/en/seo-performance' },
  { title: 'AI Workflows', path: '/en/ai-workflows' },
  { title: 'Case Studies', path: '/en/case-studies' },
  { title: 'About us', path: '/en/about-us' },
  { title: 'Contact', path: '/en/contact' }
];

const overlayVariants = {
  hidden: { 
    opacity: 0,
    y: "-10%"
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      delay: 0.08,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: { 
    opacity: 0,
    y: "-10%",
    transition: { 
      duration: 0.3
    }
  }
};

const linksContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  
  const links = language === 'de' ? germanLinks : englishLinks;
  
  // Body scroll lock when menu is open (Desktop + Mobile)
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);
  
  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/">
            <img 
              src="/ooliv_logo_2025.svg?v=2" 
              alt="ooliv" 
              className="h-7 lg:h-8" 
            />
          </Link>
          
          {/* Menu Button (Desktop + Mobile) */}
          <button 
            className="w-10 h-10 rounded-full bg-[#32B2AB] hover:bg-[#289690] flex items-center justify-center transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>
      
      {/* Fullscreen Mega Menu (Desktop + Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#32B2AB] flex flex-col"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}
          >
            {/* Header mit weißem Logo */}
            <div className="px-6 py-6 flex justify-between items-center border-b border-white/20">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img 
                  src="/ooliv_logo_2025.svg?v=2" 
                  alt="ooliv" 
                  className="h-7 brightness-0 invert" 
                />
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-7 h-7 text-white" />
              </button>
            </div>
            
            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-12 lg:py-20">
              <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[70%_30%] gap-12 lg:gap-20">
                
                {/* Links: Große Menülinks */}
                <motion.nav 
                  variants={linksContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-8 lg:gap-12"
                >
                  {links.map((link, i) => (
                    <motion.div key={i} variants={linkItemVariants}>
                      <Link 
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-[36px] lg:text-[56px] font-bold leading-tight hover:opacity-80 transition-opacity block"
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
                
                {/* Rechts: Info-Panel (Desktop sichtbar, Mobile am Ende) */}
                <div className="text-white space-y-6 lg:space-y-8 lg:pl-8 lg:sticky lg:top-12 lg:h-fit">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                    ooliv – Digitale Strategie, UX & AI-Workflows für Unternehmen
                  </h3>
                  
                  <div className="space-y-2 text-base lg:text-lg opacity-90">
                    <p className="font-semibold text-white">ooliv GmbH</p>
                    <p>Mombacher Str. 25</p>
                    <p>55122 Mainz, Deutschland</p>
                    
                    <div className="pt-4 space-y-1">
                      <a 
                        href="tel:+4961316367801" 
                        className="block hover:opacity-70 transition-opacity"
                      >
                        06131 6367801
                      </a>
                      <a 
                        href="mailto:info@ooliv.de" 
                        className="block hover:opacity-70 transition-opacity"
                      >
                        info@ooliv.de
                      </a>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#32B2AB] transition-all w-full lg:w-fit mt-6"
                    asChild
                  >
                    <Link to={language === 'de' ? '/kontakt' : '/en/contact'} onClick={() => setIsOpen(false)}>
                      Projekt starten
                    </Link>
                  </Button>
                </div>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
