
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import MobileMenuContent from './MobileMenuContent';
import DesktopMenuContent from './DesktopMenuContent';
import { useMediaQuery } from '@/hooks/use-media-query';

// Create a style element to ensure our CSS takes precedence
const injectStyles = () => {
  const styleId = 'burger-menu-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .burger-menu-button {
        width: 5rem !important;
        height: 5rem !important;
        min-width: 5rem !important;
        min-height: 5rem !important;
      }
      .burger-menu-icon {
        width: 4rem !important;
        height: 4rem !important;
      }
    `;
    document.head.appendChild(style);
  }
};

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Inject CSS styles on component mount
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <>
      <nav className="w-full z-50 absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo - 50% smaller */}
            <div className="flex-shrink-0">
              <Link to={language === 'de' ? '/de' : '/'} className="flex items-center">
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv" 
                  className="h-6 md:h-8 w-auto" 
                />
              </Link>
            </div>
            
            {/* Mobile menu button - DOUBLED IN SIZE */}
            <div className="flex items-center">
              <button 
                className="burger-menu-button flex items-center justify-center rounded-full text-[#b1b497] hover:bg-white/20" 
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                style={{width: '5rem', height: '5rem'}}
              >
                <Menu className="burger-menu-icon transition-transform duration-200 hover:scale-110" style={{width: '4rem', height: '4rem'}} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isDesktop ? (
        <DesktopMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : (
        <MobileMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default MainNavigation;
