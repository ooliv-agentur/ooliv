import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ScrollIndicator from './ScrollIndicator';
import { useIsMobile } from '@/hooks/use-mobile';
import DynamicSubheadlines from './animations/DynamicSubheadlines';

interface PageHeroProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: string;
  primaryCta?: {
    text: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  secondaryCta?: {
    text: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  startProjectText?: string;
  seeWorkText?: string;
  isHomepage?: boolean;
  backgroundVideo?: string;
  // New props for homepage dynamic subheadlines
  dynamicSubheadlines?: string[];
  dynamicPrefix?: string;
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
  isHomepage = false,
  backgroundVideo,
  dynamicSubheadlines,
  dynamicPrefix
}: PageHeroProps) => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const handleVideoLoaded = () => {
    console.log('Background video loaded successfully:', backgroundVideo);
    setVideoLoaded(true);
    setVideoError(false);
  };
  
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Error loading background video:', e);
    console.error('Failed video source:', backgroundVideo);
    setVideoLoaded(false);
    setVideoError(true);
  };
  
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  const caseStudiesPath = language === 'de' ? "/referenzen" : "/en/case-studies";
  
  const isStrategyCallCta = (text?: string) => {
    if (!text) return false;
    return text.includes('Strategiegespräch vereinbaren') || 
           text.includes('Schedule a Strategy Call') ||
           text.includes('Technical Consultation') ||
           text.includes('Technische Beratung');
  };
  
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const shouldOpenLeadForm = (text?: string) => {
    if (!text) return false;
    
    if (
      text === 'Projekt starten' || 
      text === 'Start Your Project' ||
      text === 'Start Your Web Project' ||
      text === 'SEO-Strategie starten' ||
      text === 'Start Your SEO Strategy' ||
      text === 'Content-Projekt starten' ||
      text === 'Launch Your Campaign' ||
      text === 'Kampagne starten'
    ) {
      return true;
    }
    
    return text.includes('Projekt starten') || 
           text.includes('Start Your') || 
           text.includes('Launch Your') ||
           text.includes('SEO-Strategie starten') ||
           text.includes('Kampagne starten');
  };
  
  // Default content based on language
  const defaultHomepageTitle = language === 'de' ? "ooliv Digitalagentur Mainz" : "Web Design Agency Mainz";
  
  const defaultHomepageDescription = language === 'de' ? (
    "Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege."
  ) : (
    "We build websites that outperform – with clear strategy, custom design and measurable results from day one."
  );
  
  const renderTitle = () => {
    if (isHomepage) {
      return (
        <div className="mb-6 sm:mb-8">
          <h1 
            className="font-medium leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px] mb-4"
            style={{ color: '#003343' }}
          >
            {title || defaultHomepageTitle}
          </h1>
          
          {/* Dynamic subheadlines section for homepage */}
          {dynamicSubheadlines && dynamicPrefix && (
            <div className="text-left">
              <div
                className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]"
                style={{ color: 'hsl(var(--accent-primary))' }}
              >
                <span className="inline">{dynamicPrefix} </span>
                <DynamicSubheadlines 
                  subheadlines={dynamicSubheadlines}
                  interval={4000}
                  className="inline"
                />
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <h1 
          className="font-medium leading-tight text-left mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
          style={{ color: '#003343' }}
        >
          {title}
        </h1>
      );
    }
  };
  
  const renderSubtitle = () => {
    return (
      <p className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left" style={{ lineHeight: '1.7' }}>
        {subtitle || description || (isHomepage ? defaultHomepageDescription : '')}
      </p>
    );
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
    
    if (secondary && isStrategyCallCta(secondary.text)) {
      secondary.link = contactPath;
      secondary.onClick = undefined;
    }
    
    const openLeadForm = shouldOpenLeadForm(primary.text);
    
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {openLeadForm ? (
          <Button 
            size="lg" 
            className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            onClick={handleOpenLeadForm}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : primary.onClick ? (
          <Button 
            size="lg" 
            className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            onClick={primary.onClick}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <Button 
            size="lg" 
            className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            asChild
          >
            <Link to={primary.link}>
              {primary.text}
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
        
        {secondary && (
          secondary.onClick ? (
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
              onClick={secondary.onClick}
            >
              {secondary.text}
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
              asChild
            >
              <Link to={secondary.link}>
                {secondary.text}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )
        )}
      </div>
    );
  };
  
  return (
    <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
      {/* Enhanced floating circles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
        <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
        <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
        <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
      </div>
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
            {badge && (
              <p className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ color: '#00B8A9' }}>
                {badge}
              </p>
            )}
            {renderTitle()}
            {renderSubtitle()}
            {renderCtas()}
          </div>
        </div>
      </div>
      
      {/* Visual transition indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-6 sm:h-8 rounded-full animate-pulse" style={{ background: `linear-gradient(to bottom, hsl(var(--accent-primary) / 0.5), hsl(var(--accent-primary) / 0.8))` }}></div>
          <div className="flex space-x-1">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-primary) / 0.8)' }}></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-primary) / 0.8)', animationDelay: '0.5s' }}></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-primary) / 0.8)', animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {isHomepage && <ScrollIndicator />}
    </section>
  );
};

export default PageHero;
