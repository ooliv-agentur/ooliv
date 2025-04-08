import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ScrollIndicator from './ScrollIndicator';

interface PageHeroProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: string;
  primaryCta?: {
    text: string;
    link: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    link: string;
    onClick?: () => void;
  };
  startProjectText?: string;
  seeWorkText?: string;
  isHomepage?: boolean;
}

const PageHero = ({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  startProjectText,
  seeWorkText,
  isHomepage = false
}: PageHeroProps) => {
  const { t, language } = useLanguage();
  const [showLeadForm, setShowLeadForm] = useState(false);
  
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  const valueProps = [
    { text: "Messbare Geschäftsergebnisse & höhere Konversionen", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Skalierbare, leistungsstarke digitale Erlebnisse", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Mehr Sichtbarkeit, Engagement & Konversionen", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Schnellere Ladezeiten & besseres Ranking", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Lead-Generierung & langfristiger Erfolg", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> }
  ];
  
  const [currentIcon, setCurrentIcon] = useState(valueProps[0].icon);
  
  useEffect(() => {
    if (language !== 'de' || !isHomepage) return;
    
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
  }, [displayText, isDeleting, loopNum, typingSpeed, valueProps, language, isHomepage]);
  
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  const caseStudiesPath = language === 'de' ? "/case-studies" : "/en/case-studies";
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const defaultHomepageTitle = language === 'de' ? (
    <div className="flex flex-col">
      <span>Werbeagentur Mainz</span>
      <span>für messbare Ergebnisse im Web</span>
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-[#b1b497]">Seit 2008 entwickeln wir Websites, die mehr leisten.</span>
    </div>
  ) : (
    <div className="flex flex-col">
      <span>Web Design Agency Mainz</span>
      <span>for Websites That Convert, Rank & Drive Growth</span>
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-[#b1b497]">Since 2008, we've been building high-performance websites.</span>
    </div>
  );
  
  const defaultHomepageDescription = language === 'de' ? (
    <>
      Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
      und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
    </>
  ) : (
    <>
      We build websites that outperform – with clear strategy,<br />
      custom design and measurable results from day one.
    </>
  );
  
  const renderTitle = () => {
    if (isHomepage) {
      return (
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          {title || defaultHomepageTitle}
          
          {!subtitle && isHomepage && language === 'de' && (
            <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-4 md:whitespace-nowrap">
              <span className="mr-2">für</span>
              <div className="relative inline-flex items-center">
                <span className="whitespace-nowrap text-gray-800">{displayText}</span>
                <span className="absolute right-[-16px] top-1/2 h-5 w-0.5 bg-gray-800 animate-pulse opacity-75"></span>
                {currentIcon}
              </div>
            </div>
          )}
        </h1>
      );
    } else {
      return (
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6 leading-tight">
          {title}
        </h1>
      );
    }
  };
  
  const renderSubtitle = () => {
    if (isHomepage) {
      return (
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          {subtitle || description || defaultHomepageDescription}
        </p>
      );
    } else {
      return (
        <p className="text-xl md:text-2xl text-brand-heading/80 mb-8">
          {subtitle || description}
        </p>
      );
    }
  };
  
  const renderCtas = () => {
    const defaultPrimaryCta = {
      text: startProjectText || (language === 'de' ? "Projekt starten" : "Start Your Website Project"),
      link: "#",
      onClick: handleOpenLeadForm
    };
    
    const defaultSecondaryCta = {
      text: seeWorkText || (language === 'de' ? "Arbeiten ansehen" : "See Our Work"),
      link: caseStudiesPath,
      onClick: undefined
    };
    
    const primary = primaryCta || defaultPrimaryCta;
    const secondary = secondaryCta || defaultSecondaryCta;
    
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primary.onClick ? (
          <Button 
            size="lg" 
            className="group bg-[#006064] text-white hover:bg-[#004D40]" 
            onClick={primary.onClick}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <Button size="lg" className="group bg-[#006064] text-white hover:bg-[#004D40]" asChild>
            <Link to={primary.link}>
              {primary.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
        
        {secondary && (
          secondary.onClick ? (
            <Button 
              variant="outline" 
              size="lg" 
              className="group" 
              onClick={secondary.onClick}
            >
              {secondary.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to={secondary.link}>
                {secondary.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )
        )}
      </div>
    );
  };
  
  return (
    <section className="relative bg-hero-pattern pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {badge && !isHomepage && (
              <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span>{badge}</span>
              </div>
            )}
            
            {renderTitle()}
            {renderSubtitle()}
            {renderCtas()}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 z-2">
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
      
      {isHomepage && <ScrollIndicator />}
    </section>
  );
};

export default PageHero;
