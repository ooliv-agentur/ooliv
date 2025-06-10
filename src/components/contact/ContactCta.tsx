
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ContactCta = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-heading mb-4">
          Ready to Start Your Project?
        </h2>
        
        <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
          Get in touch today and let's discuss how we can help you achieve your digital goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primaryHover"
            onClick={handleOpenLeadForm}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
