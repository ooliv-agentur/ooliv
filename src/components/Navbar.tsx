
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import MainMenu from './menu/MainMenu';
import LanguageSwitcher from './menu/LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={language === 'de' ? '/de' : '/'} className="z-50">
              <img 
                src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                alt="ooliv" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              <LanguageSwitcher />
              
              <Link 
                to={language === 'de' ? '/de/kontakt' : '/contact'}
                className="hidden md:inline-flex px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                {language === 'de' ? 'Kontakt' : 'Get in touch'}
              </Link>

              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={language === 'de' ? 'Menü öffnen' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Menu */}
      <MainMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
