
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactHero = () => {
  const { language } = useLanguage();
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="bg-brand-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading mb-6">
            {language === 'de' 
              ? 'Kontakt – ooliv Marketing Agentur Mainz'
              : 'Contact – ooliv Marketing Agency Mainz'
            }
          </h1>
          <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto mb-10">
            {language === 'de'
              ? 'Kontaktieren Sie ooliv – Ihre Marketing Agentur Mainz. Persönliche Beratung, klare Kommunikation und individuelle Lösungen für Ihr Projekt.'
              : 'Contact ooliv – Your marketing agency in Mainz. Personal consultation, clear communication and individual solutions for your project.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-brand-primary text-white hover:bg-brand-primaryHover"
              onClick={handleOpenLeadForm}
            >
              {language === 'de' ? 'Projekt starten' : 'Start Your Project'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              asChild
            >
              <a href="tel:+4961316367801">
                <Phone className="mr-2 h-5 w-5" />
                {language === 'de' ? 'Jetzt anrufen' : 'Call Now'}
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-brand-text">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+49 (0) 6131 63 67 801</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@ooliv.de</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
