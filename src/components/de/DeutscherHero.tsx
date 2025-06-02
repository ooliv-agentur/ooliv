
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
      {/* Animated floating circles with complex movements */}
      <div className="absolute inset-0 opacity-50">
        {/* Large circles with diagonal movement */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/30 via-medico-mint/20 to-medico-yellow/10 rounded-full blur-3xl animate-float-diagonal"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-medico-yellow/30 via-medico-mint/20 to-white/15 rounded-full blur-3xl animate-float-reverse-diagonal" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-medico-mint/40 via-medico-navy/10 to-medico-yellow/20 rounded-full blur-2xl animate-orbit" style={{animationDelay: '4s'}}></div>
        
        {/* Medium circles with orbital movement */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-medico-navy/15 via-medico-mint/25 to-white/20 rounded-full blur-xl animate-orbit-reverse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-tl from-medico-yellow/35 via-white/20 to-medico-mint/15 rounded-full blur-lg animate-float-wave" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 left-10 w-48 h-48 bg-gradient-to-r from-white/20 via-medico-skyBlue/25 to-medico-mint/30 rounded-full blur-2xl animate-pulse-scale" style={{animationDelay: '5s'}}></div>
        
        {/* Small circles with rapid movement */}
        <div className="absolute top-20 left-1/2 w-20 h-20 bg-gradient-to-br from-medico-mint/50 via-medico-yellow/30 to-white/25 rounded-full blur-md animate-zigzag" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-gradient-to-tl from-medico-yellow/40 via-medico-mint/20 to-medico-navy/15 rounded-full blur-lg animate-bounce-around" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 bg-gradient-to-r from-white/35 via-medico-mint/40 to-medico-yellow/25 rounded-full blur-sm animate-spiral" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute top-10 right-1/2 w-28 h-28 bg-gradient-to-br from-medico-navy/20 via-white/30 to-medico-mint/25 rounded-full blur-lg animate-float-diagonal" style={{animationDelay: '1.5s'}}></div>
        
        {/* Extra small accent circles with color morphing */}
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-gradient-to-r from-medico-mint/60 via-medico-yellow/40 to-white/30 rounded-full blur-sm animate-color-morph" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-gradient-to-tl from-medico-yellow/50 via-white/35 to-medico-mint/45 rounded-full blur-sm animate-morph-size" style={{animationDelay: '6s'}}></div>
        
        {/* Additional dynamic circles */}
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-medico-skyBlue/30 via-medico-mint/25 to-medico-yellow/20 rounded-full blur-xl animate-expand-contract" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/2 right-1/2 w-52 h-52 bg-gradient-to-tl from-white/25 via-medico-navy/15 to-medico-mint/35 rounded-full blur-2xl animate-slow-drift" style={{animationDelay: '8s'}}></div>
      </div>
      
      {/* Moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/15 animate-gradient-flow"></div>
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-medico-navy mb-4 leading-tight max-w-4xl mx-auto">
                Werbeagentur Mainz
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-medico-navy/90 mb-6 leading-tight max-w-4xl mx-auto">
                Für messbare Ergebnisse im Web
              </h2>
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
