
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from '@/components/ScrollIndicator';

const DeutscherHero = () => {
  return (
    <section className="relative bg-brand-background pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background to-brand-backgroundAlt opacity-50 z-0"></div>
      
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main heading with emphasis */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              <div className="flex flex-col">
                <span>Werbeagentur Mainz</span>
                <span>für messbare Ergebnisse im Web</span>
              </div>
              
              {/* Subheadline */}
              <span className="text-2xl md:text-3xl lg:text-4xl mt-4 text-brand-primary">
                Seit 2008 entwickeln wir Websites, die mehr leisten.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
              und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/de/kontakt">
                  Projekt starten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="bg-transparent text-gray-800 hover:bg-white/10 border-gray-800 hover:text-white hover:bg-gray-800" asChild>
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
      
      <ScrollIndicator />
    </section>
  );
};

export default DeutscherHero;
