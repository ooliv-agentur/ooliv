
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenuContent from './MobileMenuContent';
import DesktopMenuContent from './DesktopMenuContent';
import { useMediaQuery } from '@/hooks/use-media-query';
import LanguageSwitcher from './LanguageSwitcher';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Handle document body overflow when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Scroll to top on logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="w-full z-50 fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to={language === 'de' ? '/' : '/en'} 
                className="flex items-center" 
                onClick={handleLogoClick}
                aria-label="ooliv Homepage"
              >
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv logo" 
                  className="h-6 md:h-8 w-auto" 
                  loading="lazy"
                />
              </Link>
            </div>
            
            {/* Language Switcher - visible on all devices */}
            <div className="flex-1 flex justify-end items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Menu toggle button - fixed position at top right with better spacing */}
      <button 
        className={cn(
          "fixed top-7 right-4 z-[200] flex items-center justify-center rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] transition-all duration-300",
          "w-10 h-10 min-w-10 min-h-10"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (language === 'de' ? "Menü schließen" : "Close menu") : (language === 'de' ? "Menü öffnen" : "Open menu")}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu content - ensure full width/height */}
      {isDesktop ? (
        <DesktopMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : (
        <MobileMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default MainNavigation;
