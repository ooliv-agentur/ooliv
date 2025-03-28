
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import MobileMenuContent from './MobileMenuContent';
import DesktopMenuContent from './DesktopMenuContent';
import { useMediaQuery } from '@/hooks/use-media-query';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
                  className="h-12 md:h-16 w-auto"
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group h-14 w-14 rounded-full text-gray-800 hover:bg-white/20" 
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
              </Button>
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
