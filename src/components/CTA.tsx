
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall, LayoutGrid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg mb-8">
            {t('cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <FileCheck className="mr-2 h-5 w-5" />
              {t('cta.audit')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              {t('cta.call')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-white text-base py-6 font-medium"
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              {t('cta.work')}
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-white">
              <span className="font-bold">100+ successful projects completed</span> • 
              <span className="mx-2">Trusted by leading companies</span> • 
              <span className="font-bold">AI-powered strategy for maximum efficiency</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
