
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

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
  const { t, language } = useLanguage();
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };
  
  const isGerman = language === 'de';
  
  return (
    <section className="py-24 bg-brand-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-heading">
          {title || t('cta.title')}
        </h2>
        
        <p className="text-lg mb-12 text-brand-text">
          {subtitle || t('cta.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="px-8 py-6 h-auto text-base font-medium rounded-md"
            onClick={() => handleOpenForm('audit')}
          >
            <FileCheck className="mr-2 h-5 w-5" />
            {primaryCta || (isGerman ? "Projekt starten" : "Start Your Website Project")}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 h-auto text-base font-medium rounded-md"
            onClick={() => handleOpenForm('call')}
          >
            <PhoneCall className="mr-2 h-5 w-5" />
            {secondaryCta || (isGerman ? "Unsere Arbeiten sehen" : "See Our Work")}
          </Button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-brand-text/80 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
            <span className="font-medium">100+ successful projects completed</span>
            <span className="hidden sm:inline-block">•</span>
            <span>Trusted by leading companies</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="font-medium">AI-powered strategy for maximum efficiency</span>
          </p>
        </div>
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
