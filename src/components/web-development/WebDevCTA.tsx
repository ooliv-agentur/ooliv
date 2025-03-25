
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

const WebDevCTA = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('audit');
  
  const handleOpenForm = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setOpenForm(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Let's Build Something That Works—Now and in the Future
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            Tell us what your business needs. We'll develop a website that delivers.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <Button 
            className="flex-1" 
            onClick={() => handleOpenForm('call')}
          >
            Schedule a Technical Consultation
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => handleOpenForm('work')}
          >
            Start Your Web Project
          </Button>
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
