
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks';
import LanguageSwitcher from './LanguageSwitcher';

interface DesktopMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopMenuContent = ({ isOpen, onClose }: DesktopMenuContentProps) => {
  const { language } = useLanguage();

  const startProjectText = language === 'de' ? 'Projekt starten' : 'Start Your Project';

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#f7fafa] z-[101] overflow-auto"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="sticky top-0 flex items-center justify-between p-4 border-b border-gray-100 h-24">
        <div className="invisible">Placeholder for alignment</div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] transition-all duration-300"
          aria-label={language === 'de' ? "Menü schließen" : "Close menu"}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="flex justify-end mb-8">
              <LanguageSwitcher />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <NavigationLinks onLinkClick={onClose} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-right" />
            
            <div className="mt-12">
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopMenuContent;
