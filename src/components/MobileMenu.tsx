
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu Panel - Full screen overlay */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center py-8 px-6 overflow-y-auto">
              <nav className="space-y-8 text-center w-full">
                <a href="#" className="block text-4xl font-bold hover:text-primary transition-colors">
                  Home
                </a>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold hover:text-primary transition-colors">
                    Services
                  </h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-primary transition-colors">
                      Website Relaunch & Design
                    </a>
                    <a href="#" className="block text-xl hover:text-primary transition-colors">
                      SEO & Performance
                    </a>
                    <a href="#" className="block text-xl hover:text-primary transition-colors">
                      AI-Powered Content
                    </a>
                    <a href="#" className="block text-xl hover:text-primary transition-colors">
                      Lead Generation
                    </a>
                  </div>
                </div>
                
                <a href="#cases" className="block text-4xl font-bold hover:text-primary transition-colors">
                  Case Studies
                </a>
                
                <a href="#about" className="block text-4xl font-bold hover:text-primary transition-colors">
                  About Us
                </a>
                
                <a href="#" className="block text-4xl font-bold hover:text-primary transition-colors">
                  Contact
                </a>
                
                <a href="#careers" className="block text-4xl font-bold hover:text-primary transition-colors">
                  Careers
                </a>
              </nav>
            </div>

            <div className="mt-auto border-t p-6 space-y-6">
              <Button className="w-full justify-between group text-lg py-6" size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" size="lg" className="w-full py-6">
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="lg" className="w-full py-6">
                  <Mail className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="lg" className="w-full py-6">
                  <Phone className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
