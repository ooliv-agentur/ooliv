
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface ThankYouScreenProps {
  onRedirectToHome: () => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRedirectToHome }) => {
  const { language } = useLanguage();

  // Auto-close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onRedirectToHome();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onRedirectToHome]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-8 text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
        <CheckCircle className="h-10 w-10 text-green-400" />
      </div>
      <h3 className="text-xl font-bold text-white">
        {language === 'de' ? "Willkommen bei ooliv!" : "Welcome to ooliv!"}
      </h3>
      <p className="text-white/80 max-w-md">
        {language === 'de'
          ? "Uli und das ooliv-Team melden sich innerhalb von 24 Stunden bei Ihnen. Für dringende Anfragen erreichen Sie uns direkt unter 06131 – 63 67 801."
          : "Uli and the ooliv team will get back to you within 24 hours. For urgent inquiries, you can reach us directly at 06131 – 63 67 801."
        }
      </p>
      <div className="pt-4">
        <Button 
          onClick={onRedirectToHome} 
          variant="outline"
          size="default"
          className="border-white/20 text-white hover:bg-white/10"
        >
          {language === 'de' ? "Schließen" : "Close"}
        </Button>
      </div>
    </motion.div>
  );
};

export default React.memo(ThankYouScreen);
