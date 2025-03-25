
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitch from './LanguageSwitch';
import MobileMenu from './MobileMenu';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed w-full backdrop-blur-xl border-b z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-sm" : "bg-white/80"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold font-sans">ooliv</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <LanguageSwitch />
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group h-10 w-10 rounded-full"
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

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
