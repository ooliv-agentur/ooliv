
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface ThankYouScreenProps {
  onRedirectToHome: () => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRedirectToHome }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-8 text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      <h3 className="text-xl font-bold">
        {language === 'de' ? "Vielen Dank!" : "Thank you!"}
      </h3>
      <p className="text-gray-300 max-w-md">
        {language === 'de'
          ? "Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen. Für dringende Anfragen erreichen Sie uns direkt unter 06131 – 63 67 801."
          : "We'll usually get back to you within 24 hours. For urgent inquiries, you can reach us directly at 06131 – 63 67 801."
        }
      </p>
      <div className="pt-4">
        <Button 
          onClick={onRedirectToHome} 
          variant="light" 
          size="default"
        >
          {language === 'de' ? "Zurück zur Website" : "Back to Site"}
        </Button>
      </div>
    </motion.div>
  );
};

export default React.memo(ThankYouScreen);
