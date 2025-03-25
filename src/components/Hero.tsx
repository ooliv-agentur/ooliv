
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
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
  
  // Typing effect state
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Updated value propositions to cycle through
  const valueProps = [
    { text: "Measurable Business Growth & Higher Conversions", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Scalable, High-Performing Digital Experiences", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "More Visibility, Engagement & Conversions", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Faster Load Times & Better SEO Rankings", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Lead Generation & Long-Term Success", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> }
  ];
  
  const [currentIcon, setCurrentIcon] = useState(valueProps[0].icon);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentProp = valueProps[loopNum % valueProps.length];
      const fullText = currentProp.text;
      
      let updatedSpeed = isDeleting ? 50 : 80;
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
      
      setTypingSpeed(updatedSpeed);
      
      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIcon(valueProps[(loopNum + 1) % valueProps.length].icon);
        setTypingSpeed(500);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, valueProps]);
  
  return (
    <section className="relative bg-brand-background pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background to-brand-backgroundAlt opacity-50 z-0"></div>
      
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Tag line above heading - Only show in English version */}
            {language === 'en' && (
              <div className="inline-flex items-center bg-blue-600/20 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span>Web Design Agency</span>
              </div>
            )}
            
            {/* Main heading with emphasis */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {language === 'de' ? (
                <div className="flex flex-col">
                  <span>Werbeagentur Mainz</span>
                  <span>für messbare Ergebnisse im Web</span>
                  <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-primary">Seit 2008 entwickeln wir Websites, die mehr leisten.</span>
                </div>
              ) : title || (
                <div className="flex flex-col">
                  <span>Web Design Agency Mainz</span>
                  <span>for Websites That Convert, Rank & Drive Growth</span>
                </div>
              )}
              
              {/* Animation container with fixed width to prevent line breaks on desktop - only for English without custom title */}
              {!subtitle && language === 'en' && (
                <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-4 md:whitespace-nowrap">
                  <span className="mr-2">for</span>
                  <div className="relative inline-flex items-center">
                    <span className="whitespace-nowrap text-gray-800">{displayText}</span>
                    <span className="absolute right-[-16px] top-1/2 h-5 w-0.5 bg-gray-800 animate-pulse opacity-75"></span>
                    {currentIcon}
                  </div>
                </div>
              )}
              {subtitle && <div className="mt-4">{subtitle}</div>}
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              {language === 'de' ? (
                <>
                  Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
                  und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
                </>
              ) : description || (
                <>
                  We build websites that outperform – with clear strategy,<br />
                  custom design and measurable results from day one.
                </>
              )}
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
                  {startProjectText || (language === 'de' ? "Projekt starten" : "Start Your Website Project")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="bg-transparent text-gray-800 hover:bg-white/10 border-gray-800 hover:text-white hover:bg-gray-800" asChild>
                <Link to={language === 'de' ? "/de/referenzen" : "/case-studies"}>
                  {seeWorkText || (language === 'de' ? "Arbeiten ansehen" : "See Our Work")}
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

export default Hero;
