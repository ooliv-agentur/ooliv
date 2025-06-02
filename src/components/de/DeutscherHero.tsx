import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';

const DeutscherHero = () => {
  // Handle opening the lead generation form
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <section className="relative bg-gradient-mint pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-50 via-brand-mint-100 to-brand-mint-200 opacity-90 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-mint-100/50 via-transparent to-brand-mint-200/50 animate-pulse"></div>
      </div>
      
      {/* Animated floating circles - enhanced for mobile visibility */}
      <div className="absolute inset-0 z-10">
        {/* Large floating circle - top right */}
        <div className="absolute top-20 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-brand-mint-300/40 md:bg-brand-mint-300/30 rounded-full blur-lg md:blur-xl animate-[float_6s_ease-in-out_infinite] will-change-transform"></div>
        
        {/* Medium floating circle - bottom left */}
        <div className="absolute bottom-32 md:bottom-40 left-4 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-brand-mint-400/50 md:bg-brand-mint-400/40 rounded-full blur-md md:blur-lg animate-[float-reverse_8s_ease-in-out_infinite] will-change-transform"></div>
        
        {/* Small floating circle - top left */}
        <div className="absolute top-24 md:top-32 left-8 md:left-20 w-12 h-12 md:w-16 md:h-16 bg-brand-mint-500/30 md:bg-brand-mint-500/20 rounded-full blur-sm md:blur-md animate-[float_4s_ease-in-out_infinite_1s] will-change-transform"></div>
        
        {/* Extra small floating circle - middle right */}
        <div className="absolute top-1/2 right-16 md:right-32 w-10 h-10 md:w-12 md:h-12 bg-brand-mint-200/60 md:bg-brand-mint-200/50 rounded-full blur-sm animate-[float-reverse_5s_ease-in-out_infinite_2s] will-change-transform"></div>
        
        {/* Tiny floating circle - bottom right */}
        <div className="absolute bottom-16 md:bottom-20 right-8 md:right-20 w-6 h-6 md:w-8 md:h-8 bg-brand-mint-600/40 md:bg-brand-mint-600/30 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite_0.5s] will-change-transform"></div>
        
        {/* Additional mobile-visible circles */}
        <div className="absolute top-40 left-1/2 w-8 h-8 bg-brand-mint-400/35 rounded-full blur-sm animate-[float_5s_ease-in-out_infinite_1.5s] will-change-transform md:hidden"></div>
        <div className="absolute bottom-24 left-1/3 w-14 h-14 bg-brand-mint-300/25 rounded-full blur-md animate-[float-reverse_7s_ease-in-out_infinite_3s] will-change-transform md:hidden"></div>
      </div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-left max-w-4xl">
            {/* Main heading with emphasis - single H1 */}
            <Reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen
              </h1>
            </Reveal>
            
            {/* Subheadline with mint accent */}
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-brand-mint-600 font-medium mb-6">
                Für messbare Ergebnisse im Web.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
              </p>
            </Reveal>
            
            {/* CTA buttons with mint green styling */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-brand-mint-500 text-white hover:bg-brand-mint-600 shadow-mint hover:shadow-mintHover transition-all duration-300" 
                  onClick={handleOpenLeadForm}
                >
                  Projekt starten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/80 text-gray-800 border-brand-mint-300 hover:bg-brand-mint-50 hover:border-brand-mint-400 hover:text-brand-mint-700 transition-all duration-300" 
                  asChild
                >
                  <Link to="/de/case-studies">
                    Arbeiten ansehen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Modern curved bottom section with mint accent */}
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
      
      {/* Modern transition indicator with mint accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-brand-mint-300 to-brand-mint-500 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-brand-mint-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-brand-mint-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-brand-mint-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeutscherHero;
