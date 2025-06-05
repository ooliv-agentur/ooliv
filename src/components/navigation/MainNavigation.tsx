
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import MobileMenuContent from './MobileMenuContent';
import DesktopMenuContent from './DesktopMenuContent';
import LanguageSwitcher from './LanguageSwitcher';

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const { language } = useLanguage();

  // Close menu when switching between desktop/mobile
  useEffect(() => {
    setIsMenuOpen(false);
  }, [isDesktop]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        
        {/* Menu Button with floating style */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "relative z-[120] w-12 h-12 rounded-full transition-all duration-300",
            "bg-white/90 backdrop-blur-sm border border-gray-200/50",
            "hover:bg-white hover:border-gray-300 shadow-sm hover:shadow-md",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1b497]/50"
          )}
          onClick={toggleMenu}
          aria-label={isMenuOpen 
            ? (language === 'de' ? 'Menü schließen' : 'Close menu')
            : (language === 'de' ? 'Menü öffnen' : 'Open menu')
          }
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </Button>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100]"
          onClick={closeMenu}
        />
      )}

      {/* Menu Content - Use same component for all devices with fade animation */}
      {isDesktop ? (
        <DesktopMenuContent isOpen={isMenuOpen} onClose={closeMenu} />
      ) : (
        <MobileMenuContent isOpen={isMenuOpen} onClose={closeMenu} />
      )}
    </>
  );
};

export default MainNavigation;
