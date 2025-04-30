
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DeutscherHero = () => {
  // Handle opening the lead generation form
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Dispatch both events to ensure compatibility with different components
    window.dispatchEvent(new Event('open-lead-form'));
    window.dispatchEvent(new CustomEvent('open-lead-generation'));
  };
  
  return (
    <section className="relative bg-brand-background pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background to-brand-backgroundAlt opacity-50 z-0"></div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-left max-w-4xl">
            {/* Main heading with emphasis - single H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Werbeagentur Mainz
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-brand-primary font-medium mb-6">
              Für messbare Ergebnisse im Web.
            </p>
            
            <p className="text-xl text-gray-700 mb-10">
              Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
            </p>
            
            {/* CTA buttons - left-aligned */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-[#006064] text-white hover:bg-[#004d51]" 
                onClick={handleOpenLeadForm}
              >
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent text-gray-800 hover:bg-white/10 border-gray-800 hover:text-white hover:bg-gray-800"
                asChild
              >
                <Link to="/de/case-studies">
                  Arbeiten ansehen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
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
          <div className="w-1 h-8 bg-gradient-to-b from-gray-300/50 to-gray-400/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-gray-400/80 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-400/80 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-400/80 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeutscherHero;
