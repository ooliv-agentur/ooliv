
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
          <div className="flex justify-between h-24 items-center"> {/* Increased height for more space */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                  alt="ooliv" 
                  className="h-10 md:h-12 w-auto" /* Increased logo size */
                />
              </Link>
            </div>
            
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group h-12 w-12 rounded-full text-gray-800 hover:bg-white/20" /* Increased size and contrast */
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-8 w-8 transition-transform duration-200 group-hover:scale-110" /> {/* Increased icon size */}
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
