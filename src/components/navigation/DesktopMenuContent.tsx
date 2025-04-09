
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks';
import LanguageSwitcher from './LanguageSwitcher';

interface DesktopMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopMenuContent = ({ isOpen, onClose }: DesktopMenuContentProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#f7fafa] z-[101] overflow-auto"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="flex justify-end p-4 border-b border-gray-100">
        {/* Close button removed from here as it's in MainNavigation */}
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
            
            {/* "Start Your Project" button removed */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopMenuContent;
