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
  
  const contactPath = "/kontakt";
  const caseStudiesPath = "/referenzen";
  
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
  const defaultHomepageTitle = "ooliv Digitalagentur – Websites, die konvertieren";
  
  const defaultHomepageDescription = "Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.";
  
  const renderTitle = () => {
    if (isHomepage) {
      return (
        <div className="mb-8">
          <h1 
            className="font-bold leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px] mb-8 text-[#0B0B0B]"
          >
            {title || defaultHomepageTitle}
          </h1>
          
          {/* Dynamic subheadlines section for homepage */}
          {dynamicSubheadlines && (
            <div className="text-left mb-8">
              <div
                className="font-medium leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#444444]"
              >
                {dynamicPrefix && <span className="inline">{dynamicPrefix} </span>}
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
          className="font-bold leading-tight text-left mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px] text-[#0B0B0B]"
        >
          {title}
        </h1>
      );
    }
  };
  
  const renderSubtitle = () => {
    return (
      <p className="text-lg sm:text-xl md:text-2xl text-[#444444] mb-10 text-left font-normal leading-relaxed">
        {subtitle || description || (isHomepage ? defaultHomepageDescription : '')}
      </p>
    );
  };
  
  const renderCtas = () => {
    const defaultPrimaryCta = {
      text: startProjectText || "Kostenloses Konzept sichern",
      link: "#",
      onClick: handleOpenLeadForm
    };
    
    const defaultSecondaryCta = {
      text: seeWorkText || "Arbeiten ansehen",
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
            variant="primary"
            size="lg" 
            className="group w-full sm:w-auto"
            onClick={handleOpenLeadForm}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : primary.onClick ? (
          <Button 
            variant="primary"
            size="lg" 
            className="group w-full sm:w-auto"
            onClick={primary.onClick}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <Button 
            variant="primary"
            size="lg" 
            className="group w-full sm:w-auto"
            asChild
          >
            <Link to={primary.link}>
              {primary.text}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
        
        {secondary && (
          secondary.onClick ? (
            <Button 
              variant="secondary" 
              size="lg" 
              className="group w-full sm:w-auto" 
              onClick={secondary.onClick}
            >
              {secondary.text}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button 
              variant="secondary" 
              size="lg" 
              className="group w-full sm:w-auto" 
              asChild
            >
              <Link to={secondary.link}>
                {secondary.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )
        )}
      </div>
    );
  };
  
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center py-24">
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div className="max-w-4xl flex flex-col justify-center items-start min-h-[60vh]">
            {badge && (
              <p className="text-sm font-medium mb-6 uppercase tracking-wide text-[#32B2AB]">
                {badge}
              </p>
            )}
            {renderTitle()}
            {renderSubtitle()}
            {renderCtas()}
          </div>
        </div>
      </div>
      
      {isHomepage && <ScrollIndicator />}
    </section>
  );
};


export default PageHero;
