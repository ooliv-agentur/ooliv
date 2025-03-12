
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall, LayoutGrid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

const CTA = () => {
  const { t } = useLanguage();
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };
  
  return (
    <section className="py-24 bg-brand-backgroundAlt text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            {t('cta.title')}
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg mb-8 font-sans">
            {t('cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-brand-heading hover:bg-brand-primary hover:text-white border-brand-primary text-base py-6 font-medium font-sans"
              onClick={() => handleOpenForm('audit')}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              {t('cta.audit')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-brand-heading hover:bg-brand-primary hover:text-white border-brand-primary text-base py-6 font-medium font-sans"
              onClick={() => handleOpenForm('call')}
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              {t('cta.call')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-brand-heading hover:bg-brand-primary hover:text-white border-brand-primary text-base py-6 font-medium font-sans"
              onClick={() => handleOpenForm('work')}
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              {t('cta.work')}
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
