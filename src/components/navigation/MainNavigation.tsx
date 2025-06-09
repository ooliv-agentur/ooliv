
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
      <nav className="w-full z-50 fixed top-0 left-0 right-0" style={{ cursor: 'none' }}>
        <div className="relative w-full h-24">
          {/* Logo - responsive positioning: desktop viewport edge, mobile content aligned */}
          <div className="absolute left-4 sm:left-6 lg:left-12 top-1/2 transform -translate-y-1/2 z-50">
            <Link 
              to={language === 'de' ? '/' : '/en'} 
              className="flex items-center" 
              onClick={handleLogoClick}
              aria-label="ooliv Homepage"
              style={{ cursor: 'none' }}
            >
              <img 
                src="/ooliv_logo_2025.svg" 
                alt="ooliv logo" 
                className="h-6 md:h-8 w-auto" 
                loading="lazy"
              />
            </Link>
          </div>
          
          {/* Container for centered content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-end h-full">
              {/* Language Switcher - positioned to the right with margin for burger menu */}
              <div className="mr-16">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu toggle button - fixed position at top right */}
      <button 
        className={cn(
          "fixed top-7 right-4 z-[200] flex items-center justify-center rounded-full text-white hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg",
          "w-10 h-10 min-w-10 min-h-10"
        )}
        style={{ 
          cursor: 'none',
          backgroundColor: '#32b1ab'
        }}
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
          style={{ cursor: 'none' }}
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
