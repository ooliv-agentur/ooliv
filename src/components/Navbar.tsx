
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MobileMenu from './MobileMenu';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full z-50 absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv" 
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </div>
            
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group h-16 w-16 rounded-full text-gray-800 hover:bg-white/20" // Increased size from h-12 w-12 to h-16 w-16
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-10 w-10 transition-transform duration-200 group-hover:scale-110" /> {/* Increased from h-8 w-8 to h-10 w-10 */}
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

