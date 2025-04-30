
import React from 'react';
import HeroButton from '@/components/HeroButton';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollIndicator from '../ScrollIndicator';

const HeroHome = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Handle opening the lead form
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  const translations = {
    en: {
      title: <div className="flex flex-col">
              <span>Web Design Agency Mainz</span>
              <span>for Websites That Convert, Rank & Drive Growth</span>
              <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-[#b1b497]">Since 2008, we've been building high-performance websites.</span>
            </div>,
      subtitle: <>
                  We build websites that outperform – with clear strategy,<br />
                  custom design and measurable results from day one.
                </>,
      primaryBtn: "Start Your Website Project",
      secondaryBtn: "See Our Work"
    },
    de: {
      title: <div className="flex flex-col">
              <span>Werbeagentur Mainz</span>
              <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-primary font-medium">Für messbare Ergebnisse im Web.</span>
            </div>,
      subtitle: <>
                  Wir entwickeln Websites, die besser ranken, mehr konvertieren<br />
                  und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege.
                </>,
      primaryBtn: "Projekt starten",
      secondaryBtn: "Arbeiten ansehen"
    }
  };

  const t = isGerman ? translations.de : translations.en;
  const caseStudiesPath = isGerman ? "/de/case-studies" : "/en/case-studies";

  return (
    <section className="relative bg-brand-background pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background to-brand-backgroundAlt opacity-50 z-0"></div>
      
      <div className="relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main heading with emphasis - single H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {t.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-10">
              {t.subtitle}
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroButton 
                variant="solid"
                label={t.primaryBtn}
                onClick={handleOpenLeadForm}
              />
              
              <HeroButton 
                variant="outline"
                label={t.secondaryBtn}
                href={caseStudiesPath}
              />
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
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroHome;
