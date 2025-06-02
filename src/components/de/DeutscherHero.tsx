
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
    <section className="relative bg-gradient-to-br from-medico-mint via-medico-mintLight to-medico-skyBlue pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden min-h-[80vh] flex items-center bg-[length:400%_400%] animate-gradient-shift">
      {/* Animated floating circles */}
      <div className="absolute inset-0 opacity-40">
        {/* Large circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-medico-yellow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-medico-mint/30 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Medium circles */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-medico-navy/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-medico-yellow/30 rounded-full blur-lg animate-float" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        <div className="absolute top-1/3 left-10 w-48 h-48 bg-white/15 rounded-full blur-2xl animate-float" style={{animationDelay: '5s', animationDuration: '9s'}}></div>
        
        {/* Small circles */}
        <div className="absolute top-20 left-1/2 w-20 h-20 bg-medico-mint/40 rounded-full blur-md animate-float" style={{animationDelay: '0.5s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-medico-yellow/25 rounded-full blur-lg animate-float" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 bg-white/25 rounded-full blur-sm animate-float" style={{animationDelay: '4.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-10 right-1/2 w-28 h-28 bg-medico-navy/15 rounded-full blur-lg animate-float" style={{animationDelay: '1.5s', animationDuration: '7s'}}></div>
        
        {/* Extra small accent circles */}
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-medico-mint/50 rounded-full blur-sm animate-float" style={{animationDelay: '3.5s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-medico-yellow/40 rounded-full blur-sm animate-float" style={{animationDelay: '6s', animationDuration: '5s'}}></div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20"></div>
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-medico-navy rounded-full text-sm font-semibold shadow-lg">
                  Werbeagentur Mainz
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-medico-navy mb-6 leading-tight max-w-4xl mx-auto">
                Für messbare Ergebnisse im Web
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-medico-navy/80 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
                und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-medico-navy text-white hover:bg-medico-navyLight font-bold px-10 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group" 
                  onClick={handleOpenLeadForm}
                >
                  Projekt starten
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/80 bg-white/20 backdrop-blur-sm text-medico-navy hover:bg-white hover:text-medico-navy font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 group shadow-lg" 
                  asChild
                >
                  <Link to="/de/case-studies">
                    Arbeiten ansehen
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
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
