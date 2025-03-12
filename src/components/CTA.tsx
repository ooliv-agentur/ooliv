
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall, LayoutGrid } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Build a Website That Moves Your Business Forward.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Request a Free Website Audit
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Schedule a Strategy Call
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
