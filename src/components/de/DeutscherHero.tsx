
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
      {/* Floating circles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle w-20 h-20 top-20 left-10 opacity-60"></div>
        <div className="floating-circle delayed w-32 h-32 top-40 right-20 opacity-40"></div>
        <div className="floating-circle w-16 h-16 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle delayed w-24 h-24 bottom-20 right-1/3 opacity-30"></div>
        <div className="floating-circle w-12 h-12 top-1/2 left-3/4 opacity-70"></div>
      </div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main heading with emphasis - single H1 with target keyword */}
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medico-darkGreen mb-6 leading-tight">
                Werbeagentur Mainz
              </h1>
            </Reveal>
            
            {/* Subheadline */}
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-medico-turquoise font-medium mb-6">
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
                  <Link to="/de/case-studies">
                    Arbeiten ansehen
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Curved bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Visual transition indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeutscherHero;
