
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
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-mint-600 font-medium">Für messbare Ergebnisse im Web.</span>
    </div>
  ) : (
    <div className="flex flex-col">
      <span>Web Design Agency Mainz</span>
      <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-mint-600 font-medium">For Websites That Convert, Rank & Drive Growth</span>
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
            className="group bg-brand-mint-500 text-white hover:bg-brand-mint-600 shadow-mint hover:shadow-mintHover transition-all duration-300"
            data-trigger-lead-form
            onClick={handleOpenLeadForm}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : primary.onClick ? (
          <Button 
            size="lg" 
            className="group bg-brand-mint-500 text-white hover:bg-brand-mint-600 shadow-mint hover:shadow-mintHover transition-all duration-300" 
            onClick={primary.onClick}
          >
            {primary.text}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <Button size="lg" className="group bg-brand-mint-500 text-white hover:bg-brand-mint-600 shadow-mint hover:shadow-mintHover transition-all duration-300" asChild>
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
              className="group border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white hover:border-brand-mint-500 transition-all duration-300" 
              onClick={secondary.onClick}
            >
              {secondary.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button variant="outline" size="lg" className="group border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white hover:border-brand-mint-500 transition-all duration-300" asChild>
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
    <section className={`relative overflow-hidden ${isHomepage ? 'bg-gradient-to-br from-brand-mint-50 via-brand-mint-100 to-brand-mint-200' : 'bg-gradient-to-br from-brand-mint-50 to-white'}`}>
      {/* Background container with mint gradient for homepage */}
      <div className={`absolute inset-0 z-0 ${isHomepage ? 'bg-gradient-to-br from-brand-mint-50 via-brand-mint-100 to-brand-mint-200' : 'bg-gradient-to-br from-brand-mint-50 to-white'}`}>
        {backgroundVideo && !videoError && isHomepage ? (
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
            </source>
            {!videoLoaded && (
              <div className={`absolute inset-0 ${isHomepage ? 'bg-gradient-to-br from-brand-mint-50 via-brand-mint-100 to-brand-mint-200' : 'bg-gradient-to-br from-brand-mint-50 to-white'}`}></div>
            )}
          </>
        ) : (
          // Mint gradient background
          <div className={`absolute inset-0 ${isHomepage ? 'bg-gradient-to-br from-brand-mint-50 via-brand-mint-100 to-brand-mint-200' : 'bg-gradient-to-br from-brand-mint-50 to-white'}`}></div>
        )}
      </div>
      
      {/* Animated floating circles for homepage */}
      {isHomepage && (
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-brand-mint-300/40 md:bg-brand-mint-300/30 rounded-full blur-lg md:blur-xl animate-[float_6s_ease-in-out_infinite] will-change-transform"></div>
          <div className="absolute bottom-32 md:bottom-40 left-4 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-brand-mint-400/50 md:bg-brand-mint-400/40 rounded-full blur-md md:blur-lg animate-[float-reverse_8s_ease-in-out_infinite] will-change-transform"></div>
          <div className="absolute top-24 md:top-32 left-8 md:left-20 w-12 h-12 md:w-16 md:h-16 bg-brand-mint-500/30 md:bg-brand-mint-500/20 rounded-full blur-sm md:blur-md animate-[float_4s_ease-in-out_infinite_1s] will-change-transform"></div>
          <div className="absolute top-1/2 right-16 md:right-32 w-10 h-10 md:w-12 md:h-12 bg-brand-mint-200/60 md:bg-brand-mint-200/50 rounded-full blur-sm animate-[float-reverse_5s_ease-in-out_infinite_2s] will-change-transform"></div>
          <div className="absolute bottom-16 md:bottom-20 right-8 md:right-20 w-6 h-6 md:w-8 md:h-8 bg-brand-mint-600/40 md:bg-brand-mint-600/30 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite_0.5s] will-change-transform"></div>
          <div className="absolute top-40 left-1/2 w-8 h-8 bg-brand-mint-400/35 rounded-full blur-sm animate-[float_5s_ease-in-out_infinite_1.5s] will-change-transform md:hidden"></div>
          <div className="absolute bottom-24 left-1/3 w-14 h-14 bg-brand-mint-300/25 rounded-full blur-md animate-[float-reverse_7s_ease-in-out_infinite_3s] will-change-transform md:hidden"></div>
        </div>
      )}
      
      {/* Fixed height container for consistent sizing */}
      <div className="relative z-20 min-h-[680px] flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {badge && !isHomepage && (
              <div className="inline-flex items-center bg-brand-mint-500/10 text-brand-mint-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-mint-200">
                <span>{badge}</span>
              </div>
            )}
            
            {renderTitle()}
            {renderSubtitle()}
            {renderCtas()}
          </div>
        </div>
      </div>
      
      {/* Fixed position for the wave */}
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
