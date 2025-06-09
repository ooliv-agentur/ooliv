
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
      // Prevent scrolling on mobile devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpen]);
  
  // Scroll to top on logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="w-full z-40 fixed top-0 left-0 right-0" style={{ cursor: 'none' }}>
        <div className="relative w-full h-24">
          {/* Logo - responsive positioning: desktop viewport edge, mobile content aligned */}
          <div className="absolute left-4 sm:left-6 lg:left-12 top-1/2 transform -translate-y-1/2 z-40">
            <Link 
              to={language === 'de' ? '/' : '/en'} 
              className="flex items-center" 
              onClick={handleLogoClick}
              aria-label="ooliv Homepage"
              style={{ cursor: 'none' }}
            >
              <img 
                src="/ooliv_logo_2025.svg?v=2" 
                alt="ooliv logo" 
                className="h-6 md:h-8 w-auto" 
                loading="lazy"
              />
            </Link>
          </div>
          
          {/* Right side controls - Language switcher and burger menu */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 flex items-center gap-3">
            <LanguageSwitcher />
            
            {/* Menu toggle button */}
            <button 
              className={cn(
                "flex items-center justify-center rounded-full text-white hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg",
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
          </div>
        </div>
      </nav>

      {/* Menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[90]"
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
