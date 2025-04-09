
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks';

interface MobileMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuContent = ({ isOpen, onClose }: MobileMenuContentProps) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div 
      ref={menuRef}
      className="fixed inset-0 w-full h-full bg-[#f7fafa] z-[101] overflow-auto"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-brand-heading font-sans">Menü</h2>
      </div>
      
      <div className="flex flex-col p-6 overflow-y-auto mt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Language switcher removed */}
            
            <div className="lg:col-span-2 md:col-span-2">
              <NavigationLinks onLinkClick={onClose} className="space-y-2 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-8 md:gap-y-2 md:space-y-0" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="sticky bottom-0 z-10 border-t border-gray-200 p-6 space-y-5 bg-[#f7fafa]/95 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Mail, label: "E-Mail an ooliv", href: "mailto:info@ooliv.de" },
            { icon: Phone, label: "ooliv anrufen", href: "tel:+4961316367801" }
          ].map((contact, index) => (
            <Button 
              key={index}
              variant="outline" 
              size="lg"
              onClick={onClose} 
              className="w-full py-6 min-h-[60px] border-gray-300 text-[#b1b497] bg-gray-50/50 hover:bg-[#b1b497]/10 hover:text-[#b1b497] transition-all duration-200 hover:border-[#b1b497]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 flex items-center justify-center"
              aria-label={contact.label}
              asChild
            >
              <a href={contact.href}>
                <contact.icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenuContent;
