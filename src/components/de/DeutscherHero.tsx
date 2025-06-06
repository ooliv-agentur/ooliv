
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';

const DeutscherHero = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <section className="relative bg-medico-mint pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden hero-gradient-bg font-satoshi">
      {/* Enhanced floating circles animation with more variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large slow moving circles */}
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
        
        {/* Medium circles with different animations */}
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
        
        {/* Small fast moving circles */}
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
        
        {/* Additional ambient circles */}
        <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
        <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
        <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
      </div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main heading - font-medium, 52px, line-height 68px, color #003343 */}
            <Reveal>
              <h1 
                className="font-medium mb-2 leading-tight text-center"
                style={{ 
                  fontSize: '52px', 
                  lineHeight: '68px', 
                  color: '#003343' 
                }}
              >
                Werbeagentur Mainz
              </h1>
            </Reveal>
            
            {/* Subheadline - font-bold, 52px, line-height 68px, color #32b1ab */}
            <Reveal delay={0.1}>
              <p 
                className="font-bold mb-10 text-center"
                style={{ 
                  fontSize: '52px', 
                  lineHeight: '68px', 
                  color: '#32b1ab' 
                }}
              >
                Für messbare Ergebnisse im Web.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-medico-darkGreen mb-10 leading-relaxed">
                Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
              </p>
            </Reveal>
            
            {/* CTA buttons - center-aligned */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                  onClick={handleOpenLeadForm}
                >
                  Projekt starten
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                  asChild
                >
                  <Link to="/case-studies">
                    Arbeiten ansehen
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Visual transition indicator - simplified */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeutscherHero;
