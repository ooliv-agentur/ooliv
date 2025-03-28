
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import NavigationLinks from './navigation/NavigationLinks';
import MenuHeader from './navigation/MenuHeader';
import MenuFooter from './navigation/MenuFooter';
import LanguageToggle from './navigation/LanguageToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

const MobileMenu = ({ isOpen, onClose, isDesktop }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleTouchStart = useRef<number | null>(null);
  const handleTouchMove = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleTouchMove.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!handleTouchStart.current || !handleTouchMove.current) return;
    
    const diff = handleTouchStart.current - handleTouchMove.current;
    const threshold = 100;

    if (diff > threshold) {
      onClose();
    }
    
    handleTouchStart.current = null;
    handleTouchMove.current = null;
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
    exit: { x: "100%", transition: { duration: 0.25, ease: 'easeIn' } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/50 flex flex-col z-[100]">
          <motion.div 
            ref={menuRef}
            className={cn(
              "flex flex-col bg-[#f7fafa] text-brand-heading", 
              isDesktop 
                ? "ml-auto w-[40%] h-full" 
                : "w-full h-full max-h-[100dvh] overflow-auto"
            )}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <MenuHeader onClose={onClose} isDesktop={isDesktop} />
            
            <div className={cn(
              "flex-1 flex flex-col py-4 px-6 overflow-y-auto",
              isDesktop ? "pt-4" : "pt-6"
            )}>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <LanguageToggle onToggle={onClose} />
              </div>
              
              <nav className={cn(
                "space-y-4 text-center w-full",
                isDesktop ? "space-y-3" : "space-y-4"
              )}>
                <NavigationLinks onLinkClick={onClose} className="space-y-0" />
              </nav>
            </div>
            
            <MenuFooter onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
