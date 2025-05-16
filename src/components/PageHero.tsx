import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ScrollIndicator from './ScrollIndicator';
import { useIsMobile } from '@/hooks/use-mobile';

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
  backgroundVideo
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
  const caseStudiesPath = language === 'de' ? "/case-studies" : "/en/case-studies";
  
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
  const defaultHomepageTitle = language === 'de' ? (
    <div className="flex flex-col">
      <span>Werbeagentur Mainz</span>
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-primary font-medium">Für messbare Ergebnisse im Web.</span>
    </div>
  ) : (
    <div className="flex flex-col">
      <span>Web Design Agency Mainz</span>
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-primary font-medium">For Websites That Convert, Rank & Drive Growth</span>
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
    
    if (secondary && isStrategyCallCta(secondary.text)) {
      secondary.link = contactPath;
      secondary.onClick = undefined;
    }
    
    const openLeadForm = shouldOpenLeadForm(primary.text);
    
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {openLeadForm ? (
          <Button 
            size="lg" 
            className="group bg-[#006064] text-white hover:bg-[#004D40]"
            data-trigger-lead-form
            onClick={handleOpenLeadForm}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : primary.onClick ? (
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
    <section className="relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {backgroundVideo && !videoError ? (
          // Video background when provided - with error handling and loading feedback
          <>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute w-full h-full object-cover opacity-20 z-10"
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!videoLoaded && (
              <div className="absolute inset-0 bg-hero-pattern" style={{ backgroundColor: '#f7f8fc' }}></div>
            )}
          </>
        ) : !isMobile && !prefersReducedMotion && !videoError ? (
          // Default pattern background if no video
          <div className="absolute inset-0 bg-hero-pattern" style={{ backgroundColor: '#f7f8fc' }}></div>
        ) : (
          // Fallback pattern background
          <div className="absolute inset-0 bg-hero-pattern" style={{ backgroundColor: '#f7f8fc' }}></div>
        )}
      </div>
      
      {/* Fixed height container for consistent sizing */}
      <div className="relative z-20 min-h-[680px] flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {badge && !isHomepage && (
              <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                <span>{badge}</span>
              </div>
            )}
            
            {renderTitle()}
            {renderSubtitle()}
            {renderCtas()}
          </div>
        </div>
      </div>
      
      {/* Fixed position for the wave - Increased height and adjusted position to eliminate line */}
      <div className="absolute -bottom-1 left-0 right-0 h-20 z-30 pointer-events-none">
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
