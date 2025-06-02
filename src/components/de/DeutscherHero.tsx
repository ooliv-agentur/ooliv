
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';

const DeutscherHero = () => {
  // Handle opening the lead generation form
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <section className="relative bg-medico-hero pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background elements inspired by medicosearch */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medico-mint opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medico-mintLight opacity-30 rounded-full blur-2xl"></div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-left">
              {/* Badge like medicosearch */}
              <Reveal>
                <div className="inline-flex items-center px-4 py-2 bg-medico-white rounded-full border border-medico-mint mb-6">
                  <span className="text-medico-navy text-sm font-medium">Werbeagentur Mainz</span>
                </div>
              </Reveal>
              
              {/* Main heading with medicosearch style */}
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medico-navy mb-6 leading-tight">
                  Websites die besser
                  <span className="text-medico-mint"> ranken,</span>
                  <br />
                  <span className="text-medico-mint">konvertieren</span> & verkaufen
                </h1>
              </Reveal>
              
              {/* Subheadline */}
              <Reveal delay={0.2}>
                <p className="text-xl text-medico-navyLight mb-8 leading-relaxed">
                  Wir entwickeln maßgeschneiderte Websites, die Ihre Sichtbarkeit stärken, mehr Leads generieren und Ihr Unternehmen digital positionieren – ohne Templates, ohne Umwege.
                </p>
              </Reveal>
              
              {/* CTA buttons with medicosearch styling */}
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="group bg-medico-yellow text-medico-navy hover:bg-medico-yellowHover font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
                    onClick={handleOpenLeadForm}
                  >
                    Projekt starten
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent text-medico-navy hover:bg-medico-mint hover:text-white border-2 border-medico-mint font-semibold px-8 py-4 rounded-full transition-all duration-300" 
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
            
            {/* Right column - Visual elements inspired by medicosearch */}
            <div className="relative">
              <Reveal delay={0.4}>
                <div className="relative">
                  {/* Main card */}
                  <div className="bg-white rounded-3xl p-8 shadow-medico border border-medico-mintLight">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-medico-mint rounded-full flex items-center justify-center mr-4">
                        <Search className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-medico-navy">SEO-Optimierung</h3>
                        <p className="text-sm text-medico-navyLight">Bessere Rankings</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-medico-mintDark rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-medico-navy">Lead-Generation</h3>
                        <p className="text-sm text-medico-navyLight">Mehr Anfragen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-medico-yellow rounded-full flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-medico-navy" />
                      </div>
                      <div>
                        <h3 className="font-bold text-medico-navy">Conversion</h3>
                        <p className="text-sm text-medico-navyLight">Höhere Umsätze</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-medico-yellow rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-medico-mint rounded-full opacity-60"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom section divider with medicosearch style */}
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
    </section>
  );
};

export default DeutscherHero;
