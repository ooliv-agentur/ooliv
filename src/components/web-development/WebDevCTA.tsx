
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const WebDevCTA = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  const { language } = useLanguage();
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };

  const title = language === 'de' 
    ? "Lassen Sie uns etwas gemeinsam aufbauen — für heute und morgen"
    : "Let's Build Something That Works — Now and in the Future";
    
  const description = language === 'de'
    ? "Sagen Sie uns, was Ihr Unternehmen braucht — wir entwickeln eine maßgeschneiderte Website, die für Ihre nächste Phase bereit ist."
    : "Tell us what your business needs — we'll develop a custom website that's ready for your next chapter.";
    
  const consultationText = language === 'de'
    ? "Technische Beratung vereinbaren"
    : "Schedule a Technical Consultation";
    
  const projectText = language === 'de'
    ? "Starten Sie Ihr Web-Projekt"
    : "Start Your Web Project";

  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <Button 
            className="flex-1"
            asChild
          >
            <Link to={contactPath}>
              {consultationText}
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-1 border-[#006064] text-[#006064] hover:bg-[#006064]/10"
            onClick={() => handleOpenForm('work')}
          >
            {projectText}
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-text">
            {language === 'de' 
              ? "100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-gestützte Strategien für maximale Effizienz"
              : "100+ successful projects • Trusted by leading companies • AI-powered strategies for maximum impact"}
          </p>
        </div>
      </div>
      
      <ContactForm 
        open={openForm}
        onOpenChange={setOpenForm}
        formType={formType}
      />
    </section>
  );
};

export default WebDevCTA;
