
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';

const DeutscherHero = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden min-h-[80vh] flex items-center">
      {/* Simple background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-medico-mint/10 text-medico-navy rounded-full text-sm font-medium">
                  Werbeagentur Mainz
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
                Werbeagentur Mainz
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-medico-navy mb-8 font-medium max-w-3xl mx-auto">
                Für messbare Ergebnisse im Web.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
                und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-medico-navy text-white hover:bg-medico-navyLight font-semibold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 group" 
                  onClick={handleOpenLeadForm}
                >
                  Projekt starten
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 group" 
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
    </section>
  );
};

export default DeutscherHero;
