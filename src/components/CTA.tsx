
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
  const { t } = useLanguage();
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };
  
  return (
    <section className="section-alt text-brand-text">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h2 className="heading-standard">
            {title || t('cta.title')}
          </h2>
          
          <p className="subheading-standard">
            {subtitle || t('cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="button-primary text-base py-6 font-medium font-sans"
              onClick={() => handleOpenForm('audit')}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              {primaryCta || "Let's Build Something That Performs"}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="button-secondary text-base py-6 font-medium font-sans"
              onClick={() => handleOpenForm('call')}
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              {secondaryCta || "Book a Free Strategy Call"}
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-brand-text font-sans">
              <span className="font-bold">100+ successful projects completed</span> • 
              <span className="mx-2">Trusted by leading companies</span> • 
              <span className="font-bold">AI-powered strategy for maximum efficiency</span>
            </p>
          </div>
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
