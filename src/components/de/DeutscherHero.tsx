
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';

const DeutscherHero = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <section className="relative bg-medico-hero-animated bg-[length:400%_400%] animate-gradient-shift pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medico-mint opacity-30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medico-yellow opacity-25 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-medico-mintLight opacity-20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-left">
              <Reveal>
                <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-medico-mint mb-8 shadow-lg">
                  <span className="text-medico-navy text-base font-semibold">Werbeagentur Mainz</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-medico-navy mb-8 leading-tight">
                  Websites die besser
                  <span className="text-medico-mint"> ranken,</span>
                  <br />
                  <span className="text-medico-mint">konvertieren</span> & verkaufen
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl text-medico-navyLight mb-10 leading-relaxed font-medium">
                  Wir entwickeln maßgeschneiderte Websites, die Ihre Sichtbarkeit stärken, mehr Leads generieren und Ihr Unternehmen digital positionieren – ohne Templates, ohne Umwege.
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="group bg-medico-yellow text-medico-navy hover:bg-medico-yellowHover font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg" 
                    onClick={handleOpenLeadForm}
                  >
                    Projekt starten
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/90 backdrop-blur-sm text-medico-navy hover:bg-medico-mint hover:text-white border-2 border-medico-mint font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg" 
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
            
            {/* Right column - Enhanced visual elements */}
            <div className="relative">
              <Reveal delay={0.4}>
                <div className="relative">
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-medico-mint to-medico-mintDark rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-medico-navy">SEO-Optimierung</h3>
                        <p className="text-medico-navyLight font-medium">Bessere Rankings</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-medico-mintDark to-medico-mint rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-medico-navy">Lead-Generation</h3>
                        <p className="text-medico-navyLight font-medium">Mehr Anfragen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-medico-yellow to-medico-yellowHover rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                        <Target className="h-8 w-8 text-medico-navy" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-medico-navy">Conversion</h3>
                        <p className="text-medico-navyLight font-medium">Höhere Umsätze</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-medico-yellow to-medico-yellowHover rounded-full opacity-90 animate-pulse-slow shadow-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-medico-mint to-medico-mintLight rounded-full opacity-80 animate-float shadow-lg"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none">
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
    </section>
  );
};

export default DeutscherHero;
