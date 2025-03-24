
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
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-backgroundAlt rounded-xl p-10 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-brand-heading">
              Let's Build a Platform That Works for You
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-brand-text">
              Let's analyze your current setup, define your requirements, and develop a plan that matches your business—not just a template.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-brand-heading">
                Get a Free Website Audit
              </h3>
              <p className="text-brand-text mb-6">
                We'll analyze your current website and provide actionable insights for improvement.
              </p>
              <Button 
                className="w-full" 
                onClick={() => handleOpenForm('audit')}
              >
                Request Free Audit
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-brand-heading">
                Discuss Your Project
              </h3>
              <p className="text-brand-text mb-6">
                Schedule a call with our development team to discuss your specific requirements.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleOpenForm('call')}
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
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
