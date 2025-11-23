
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H1, LargeParagraph } from '@/components/ui/typography';

const ContactHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <Section background="light" spacing="large" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Floating circles animation - same as other subpages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
        <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
        <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
        <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
      </div>
      
      <Container size="default" className="relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
          {/* Main heading */}
          <H1 className="mb-6 sm:mb-8 text-left">
            Kontaktieren Sie ooliv direkt
          </H1>
          
          {/* Subtitle */}
          <LargeParagraph className="mb-8 sm:mb-10 text-left" color="secondary">
            Ihre Digitalagentur für individuelle Websites, SEO und Marketinglösungen – persönlich und ohne Umwege.
          </LargeParagraph>
            
            {/* CTA buttons - now using design system */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                variant="primary"
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleStartProject}
              >
                Projekt starten
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto" 
                asChild
              >
                <a href="tel:+4961316367801">
                  Jetzt anrufen
                  <Phone className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
  );
};

export default ContactHeroDE;
