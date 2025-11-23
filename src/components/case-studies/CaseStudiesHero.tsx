
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const CaseStudiesHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
      {/* Enhanced floating circles animation - same as startpage */}
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
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
            {/* Main heading */}
            <h1 
              className="font-medium mb-6 sm:mb-8 leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
              style={{ 
                color: '#003343' 
              }}
            >
              {isGerman 
                ? "Echte Ergebnisse. Echte Unternehmen. Echte Wirkung." 
                : "Real Results. Real Companies. Real Impact."
              }
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left"
              style={{ lineHeight: '1.6' }}
            >
              {isGerman 
                ? "Wir zeigen nicht nur schöne Screens – sondern messbare Resultate aus Strategie, UX, SEO und digitaler Transformation. Hier sehen Sie, wie Unternehmen durch digitale Klarheit wachsen." 
                : "We don't just show pretty screens – but measurable results from strategy, UX, SEO, and digital transformation. See how companies grow through digital clarity."
              }
            </p>
            
            {/* CTA buttons - now using design system */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                variant="primary"
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleOpenLeadForm}
              >
                {isGerman ? "Projekt besprechen" : "Discuss Project"}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto" 
                asChild
              >
                <Link to={isGerman ? "/kontakt" : "/en/contact"}>
                  {isGerman ? "Über die Agentur" : "About the Agency"}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual transition indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-accent-primary/50 to-accent-primary/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-primary/80 rounded-full animate-pulse"></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-primary/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-primary/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
