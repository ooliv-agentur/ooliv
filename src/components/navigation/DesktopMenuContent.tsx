
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ArrowRight } from 'lucide-react';
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
      className="fixed right-0 top-0 bottom-0 w-[40%] bg-[#f7fafa] z-[101] overflow-auto"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="flex justify-end p-4 border-b border-gray-100">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 w-12 h-12 flex items-center justify-center text-brand-heading hover:bg-accent rounded-full border border-gray-300 transition-all duration-300"
          onClick={onClose}
          aria-label={language === 'de' ? 'Menü schließen' : 'Close menu'}
        >
          <X className="h-12 w-12" />
        </Button>
      </div>

      <div className="flex flex-col p-6 h-[calc(100%-80px)] mt-6">
        <div className="flex justify-end mb-6">
          <LanguageSwitcher />
        </div>

        <NavigationLinks onLinkClick={onClose} className="space-y-3 text-right" />

        <div className="mt-auto pt-8">
          <Button
            className="w-full justify-between group text-lg py-6 bg-[#b1b497] hover:bg-[#9a9c83] text-white rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] font-sans"
            size="lg"
            onClick={onClose}
            asChild
          >
            <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
              {startProjectText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopMenuContent;
