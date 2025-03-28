
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenuContent from './MobileMenuContent';
import DesktopMenuContent from './DesktopMenuContent';
import { useMediaQuery } from '@/hooks/use-media-query';

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

  return (
    <>
      <nav className="w-full z-50 absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={language === 'de' ? '/de' : '/'} className="flex items-center">
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv" 
                  className="h-6 md:h-8 w-auto" 
                />
              </Link>
            </div>
            
            {/* Menu toggle button - fixed position */}
            <div className="flex items-center">
              <button 
                className="menu-toggle-button fixed top-4 right-4 z-[200] flex items-center justify-center rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] transition-all duration-300" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? (language === 'de' ? "Menü schließen" : "Close menu") : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  minWidth: '2.5rem', 
                  minHeight: '2.5rem',
                }}
              >
                {isOpen ? (
                  <X className="transition-transform duration-300" style={{ width: '1.5rem', height: '1.5rem' }} />
                ) : (
                  <Menu className="transition-transform duration-300" style={{ width: '1.5rem', height: '1.5rem' }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          onClick={() => setIsOpen(false)}
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
