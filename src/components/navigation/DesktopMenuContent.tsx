
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationLinks } from './NavigationLinks';

interface DesktopMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopMenuContent = ({ isOpen, onClose }: DesktopMenuContentProps) => {
  const { language } = useLanguage();

  // Handle link click with scroll to top
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-0 right-0 bottom-0 w-[40%] bg-[#f7fafa] text-brand-heading z-[110] flex flex-col overflow-hidden"
          style={{ cursor: 'none' }}
        >
          {/* Removed the header with close button - we use the floating button instead */}
          
          <div className="flex-1 flex flex-col py-4 px-6 overflow-y-auto" style={{ cursor: 'none' }}>
            <nav className="space-y-3 text-center w-full">
              <NavigationLinks layout="desktop" onLinkClick={handleLinkClick} />
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopMenuContent;
