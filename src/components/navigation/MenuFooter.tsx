
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactButtons from './ContactButtons';

interface MenuFooterProps {
  onClose: () => void;
}

const MenuFooter = ({ onClose }: MenuFooterProps) => {
  const { language } = useLanguage();
  const startProjectText = language === 'de' ? 'Projekt starten' : 'Start Your Project';

  return (
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
      
      <ContactButtons />
    </div>
  );
};

export default MenuFooter;
