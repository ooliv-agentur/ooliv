import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

interface PrototypeFormProps {
  onClose: () => void;
}

const PrototypeForm: React.FC<PrototypeFormProps> = ({ onClose }) => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de' 
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein" 
          : "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: 'POST',
        headers: getSupabaseHeaders(),
        body: JSON.stringify({
          projectType: 'prototype',
          email: email,
          name: '',
          message: language === 'de' ? 'Kostenloses Website-Konzept angefordert' : 'Free website concept requested',
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
      toast({
        title: language === 'de' ? "Vielen Dank!" : "Thank you!",
        description: language === 'de' 
          ? "Wir melden uns innerhalb von 48 Stunden mit Ihrem Konzept bei Ihnen" 
          : "We'll get back to you within 48 hours with your concept",
      });

    } catch (error) {
      console.error('Prototype form submission error:', error);
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de' 
          ? "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut." 
          : "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-8 px-4 text-center min-h-[300px]"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          {language === 'de' ? 'Anfrage gesendet!' : 'Request sent!'}
        </h3>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm">
          {language === 'de' 
            ? 'Wir erstellen Ihr kostenloses Website-Konzept und melden uns binnen 48 Stunden.' 
            : 'We\'ll create your free website concept and get back to you within 48 hours.'}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-left space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'de' ? 'Was Sie erhalten' : 'What you get'}
          </h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-base text-white/90 leading-relaxed">
            {language === 'de' 
              ? 'Wir analysieren Ihr Geschäft und erstellen ein maßgeschneidertes Website-Konzept, das Ihre Zielgruppe überzeugt und zu mehr Kunden führt.' 
              : 'We analyze your business and create a tailored website concept that convinces your target audience and leads to more customers.'}
          </p>
          <ul className="space-y-3 text-sm text-white/85 pl-1">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-0.5 text-lg leading-none">•</span>
              <span className="flex-1">{language === 'de' ? 'Strategische Seitenstruktur nach bewährten Verkaufsprinzipien' : 'Strategic page structure based on proven sales principles'}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-0.5 text-lg leading-none">•</span>
              <span className="flex-1">{language === 'de' ? 'Optimierte Benutzerführung für maximale Conversion' : 'Optimized user guidance for maximum conversion'}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-0.5 text-lg leading-none">•</span>
              <span className="flex-1">{language === 'de' ? 'Konkrete Inhaltsempfehlungen für Ihre Branche' : 'Concrete content recommendations for your industry'}</span>
            </li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="prototype-email" className="text-white text-sm">
            {language === 'de' ? 'E-Mail-Adresse *' : 'Email Address *'}
          </Label>
          <Input
            id="prototype-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={language === 'de' ? 'ihre.email@beispiel.de' : 'your.email@example.com'}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
        >
          {isSubmitting 
            ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') 
            : (language === 'de' ? 'Kostenloses Konzept anfordern' : 'Request Free Concept')
          }
        </Button>
      </form>

      <div className="text-xs text-white/50 text-center">
        {language === 'de' 
          ? '100% kostenlos • Keine Verpflichtungen • Antwort in 48h' 
          : '100% free • No obligations • Response within 48h'}
      </div>
    </motion.div>
  );
};

export default React.memo(PrototypeForm);