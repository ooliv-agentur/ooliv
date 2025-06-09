
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';
import DynamicSubheadlines from '@/components/animations/DynamicSubheadlines';

const DeutscherHero = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  const subheadlines = [
    "online mehr Kunden zu gewinnen.",
    "Ihre Website sichtbar zu machen.",
    "Ihr Unternehmen digital zu stärken."
  ];
  
  return (
    <section className="relative bg-medico-mint overflow-hidden hero-gradient-bg font-satoshi min-h-screen flex items-center">
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
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
            {/* Main heading - left-aligned */}
            <Reveal>
              <h1 
                className="font-medium mb-8 leading-tight text-left"
                style={{ 
                  fontSize: '64px', 
                  lineHeight: '76px', 
                  color: '#003343' 
                }}
              >
                ooliv Werbeagentur Mainz
              </h1>
            </Reveal>
            
            {/* Dynamic Subheadlines with static part - left-aligned */}
            <Reveal delay={0.1}>
              <div className="mb-10 text-left">
                <div
                  className="font-bold leading-tight"
                  style={{ 
                    fontSize: '40px', 
                    lineHeight: '50px', 
                    color: '#32b1ab' 
                  }}
                >
                  <span>Wir helfen Ihnen, </span>
                  <DynamicSubheadlines 
                    subheadlines={subheadlines}
                    interval={4000}
                    className="inline"
                  />
                </div>
              </div>
            </Reveal>
            
            {/* Body text - updated with new B2B-focused copy */}
            <Reveal delay={0.2}>
              <p className="text-2xl text-medico-darkGreen mb-10 leading-relaxed text-left">
                Wir entwickeln Websites für B2B-Unternehmen, die messbar mehr Leads generieren und Vertrauen schaffen. Keine Templates, keine Buzzwords – nur Strategie, Design und Performance aus einer Hand.
              </p>
            </Reveal>
            
            {/* CTA buttons - left-aligned */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#FFD700', 
                    color: '#003347',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD700';
                  }}
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
