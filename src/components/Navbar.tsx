
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitch from './LanguageSwitch';
import MobileMenu from './MobileMenu';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-3" 
          : "bg-white/80 py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-4">
                <NavLink to="/de">Home</NavLink>
                <NavLink to="/de/webdesign">Webdesign</NavLink>
                <NavLink to="/de/webentwicklung">Webentwicklung</NavLink>
                <NavLink to="/de/content-erstellung">Content-Erstellung</NavLink>
                <NavLink to="/de/seo-optimierung">SEO-Optimierung</NavLink>
                <NavLink to="/de/google-ads">Google Ads</NavLink>
                <NavLink to="/de/ki-technologien">KI-Technologien</NavLink>
                <NavLink to="/de/case-studies">Case Studies</NavLink>
                <NavLink to="/de/ueber-ooliv">Über ooliv</NavLink>
                <NavLink to="/de/kontakt">Kontakt</NavLink>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Button 
                  asChild 
                  className="hover:scale-105 font-heading font-bold"
                >
                  <Link to="/de/kontakt">
                    Projekt starten
                  </Link>
                </Button>
              </div>
              <LanguageSwitch />
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group h-10 w-10 rounded-full md:hidden"
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

// Helper component for navigation links
const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => {
  return (
    <Link 
      to={to} 
      className="menu-link text-ooliv-black px-3 py-2 text-sm font-medium font-heading uppercase relative overflow-hidden"
    >
      <span className="menu-link-text">{children}</span>
      <span className="menu-link-text-duplicate text-ooliv-orange">{children}</span>
    </Link>
  );
};

export default Navbar;
