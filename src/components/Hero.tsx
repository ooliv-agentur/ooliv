
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ScrollIndicator from './ScrollIndicator';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  startProjectText?: string;
  seeWorkText?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  startProjectText, 
  seeWorkText 
}: HeroProps = {}) => {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative section-gradient pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ooliv-black to-ooliv-black/90 opacity-90 z-0"></div>
      
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {language === 'de' ? (
                <div className="flex flex-col">
                  <span>Werbeagentur Mainz</span>
                  <span>für messbare Ergebnisse im Web</span>
                  <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-ooliv-green">Seit 2008 entwickeln wir Websites, die mehr leisten.</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Web Design Agency Mainz</span>
                  <span>for Websites That Convert, Rank & Drive Growth</span>
                </div>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8">
              {language === 'de' ? (
                <>
                  Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
                  und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
                </>
              ) : (
                <>
                  We build websites that outperform – with clear strategy,<br />
                  custom design and measurable results from day one.
                </>
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-ooliv-green text-ooliv-black hover:bg-ooliv-green/90" asChild>
                <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
                  {startProjectText || (language === 'de' ? "Projekt starten" : "Start Your Website Project")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white hover:bg-white hover:text-ooliv-black" asChild>
                <Link to={language === 'de' ? "/de/referenzen" : "/case-studies"}>
                  {seeWorkText || (language === 'de' ? "Arbeiten ansehen" : "See Our Work")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
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

export default Hero;
