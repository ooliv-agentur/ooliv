
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const CTA = ({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta 
}: CTAProps) => {
  const { language } = useLanguage();
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };
  
  const isGerman = language === 'de';
  
  return (
    <section className="py-16 bg-[#f7f7f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isGerman ? (
          <>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-heading">
              {title || "Bereit für den nächsten Schritt?"}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2 mb-8">
              {subtitle || "Lassen Sie uns Ihre Website aufs nächste Level bringen."}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-heading">
              {title || "Ready to take the next step?"}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2 mb-8">
              {subtitle || "Let's build a website that works for your business."}
            </p>
          </>
        )}
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-auto text-base font-medium rounded-md"
            onClick={() => handleOpenForm('audit')}
          >
            {primaryCta || (isGerman ? "Projekt starten" : "Start Your Project")}
          </Button>
          
          <Button 
            variant="outline" 
            className="border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 px-6 py-3 h-auto text-base font-medium rounded-md"
            onClick={() => handleOpenForm('call')}
          >
            {secondaryCta || (isGerman ? "Unsere Arbeiten ansehen" : "See Our Work")}
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          {isGerman 
            ? "100+ Projekte erfolgreich umgesetzt • Vertraut von führenden Unternehmen • KI-gestützte Strategie" 
            : "100+ successful projects • Trusted by leading companies • AI-powered strategy"
          }
        </p>
      </div>
      
      {/* Contact Form Dialog */}
      <ContactForm 
        open={openForm} 
        onOpenChange={setOpenForm} 
        formType={formType}
      />
    </section>
  );
};

export default CTA;
