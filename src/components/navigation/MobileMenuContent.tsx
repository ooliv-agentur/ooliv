
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ArrowRight, MessageCircle, Mail, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks';

interface MobileMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuContent = ({ isOpen, onClose }: MobileMenuContentProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
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

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    if (language === 'en') {
      setLanguage('de');
      
      if (currentPath === '/') {
        navigate('/de');
      } else if (currentPath.startsWith('/')) {
        const pathWithoutLeadingSlash = currentPath.substring(1);
        navigate(`/de/${pathWithoutLeadingSlash}`);
      }
    } else {
      setLanguage('en');
      
      if (currentPath === '/de') {
        navigate('/');
      } else if (currentPath.startsWith('/de/')) {
        const pathWithoutDe = currentPath.substring(4);
        navigate(pathWithoutDe);
      }
    }
    
    onClose();
  };

  const startProjectText = language === 'de' ? 'Projekt starten' : 'Start Your Project';
  const languageButtonText = language === 'de' ? 'Sprache: Deutsch' : 'Language: English';
  const switchToText = language === 'de' ? 'Wechseln zu English' : 'Switch to German';

  return (
    <motion.div 
      ref={menuRef}
      className="fixed inset-0 w-full h-full bg-[#f7fafa] z-[101] overflow-auto"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-100 bg-[#f7fafa]/95 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-brand-heading font-sans">{language === 'de' ? 'Menü' : 'Menu'}</h2>
        <button 
          className="flex items-center justify-center rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] transition-all duration-300 w-10 h-10 min-w-10 min-h-10"
          onClick={onClose}
          aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex flex-col p-6 overflow-y-auto mt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="mb-6 pb-6 border-b border-gray-200 md:col-span-2 lg:col-span-2">
              <Button 
                variant="outline" 
                onClick={toggleLanguage}
                className="w-full justify-between py-3 border-gray-300 text-brand-heading hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-[#b1b497]" />
                  <span>{languageButtonText}</span>
                </div>
                <span className="text-sm opacity-70">{switchToText}</span>
              </Button>
            </div>
            
            <div className="lg:col-span-2 md:col-span-2">
              <NavigationLinks onLinkClick={onClose} className="space-y-2 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-8 md:gap-y-2 md:space-y-0" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="sticky bottom-0 z-10 border-t border-gray-200 p-6 space-y-5 bg-[#f7fafa]/95 backdrop-blur-sm">
        <Button 
          className="w-full justify-between group text-lg py-6 bg-[#b1b497] hover:bg-[#9a9c83] text-white rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] font-sans" 
          size="lg"
          onClick={onClose}
          asChild
        >
          <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
            {startProjectText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 text-white" />
          </Link>
        </Button>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/4961316367801" },
            { icon: Mail, label: language === 'de' ? "E-Mail" : "Email", href: "mailto:info@ooliv.de" },
            { icon: Phone, label: language === 'de' ? "Telefon" : "Phone", href: "tel:+4961316367801" }
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
