
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategyHero = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="bg-brand-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading mb-6">
            Strategy & Concept for Digital Success
          </h1>
          <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto mb-10">
            We develop individual digital strategies including concept and optimize your website's user experience – for more visibility, more leads and sustainable success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-primary text-white hover:bg-brand-primaryHover"
              onClick={handleOpenLeadForm}
            >
              Schedule Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              asChild
            >
              <Link to="/en/webdesign">
                Learn About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyHero;
