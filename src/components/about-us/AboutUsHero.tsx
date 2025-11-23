
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { H1, LargeParagraph } from '@/components/ui/typography';

const AboutUsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden font-satoshi min-h-screen flex items-center">
      {/* Floating circles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40 bg-turquoise/10"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30 bg-turquoise/10"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50 bg-turquoise/10"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45 bg-turquoise/10"></div>
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60 bg-turquoise/10"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70 bg-turquoise/10"></div>
      </div>
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh] py-20">
            <H1 className="mb-6">
              Digitale Klarheit seit 2008.
            </H1>
            
            <LargeParagraph className="mb-10 text-text-secondary">
              Wir entwickeln Strategie, UX und AI-gestützte Workflows für Unternehmen, die digital wachsen wollen — seniorgeführt, strukturiert und ehrlich.
            </LargeParagraph>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                variant="primary"
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleStartProject}
              >
                Lernen wir uns kennen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto" 
                asChild
              >
                <Link to="/referenzen">
                  Wie wir arbeiten
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
