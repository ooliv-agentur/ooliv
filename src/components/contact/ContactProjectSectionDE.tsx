
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';

const ContactProjectSectionDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Send className="h-12 w-12 mx-auto mb-6 text-accent-primary" />
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-medico-darkGreen">
          Projekt-Details über unser Formular teilen
        </h2>
        <Button 
          variant="primary"
          size="lg" 
          className="group"
          onClick={handleStartProject}
        >
          Projektanfrage stellen
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default ContactProjectSectionDE;
