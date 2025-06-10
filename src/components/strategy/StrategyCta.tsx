
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const StrategyCta = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-heading mb-4">
          Ready to Develop Your Strategy?
        </h2>
        
        <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
          Let's create a comprehensive digital strategy that drives measurable results and sustainable growth for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primaryHover"
            onClick={handleOpenLeadForm}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrategyCta;
