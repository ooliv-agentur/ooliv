
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const translations = {
    en: {
      title: "Webdesign That Helps B2B Companies Grow",
      subtitle: "We design websites that improve your Google visibility, drive qualified leads, and align with your business goals. Our webdesign services are built on strategy – not on templates."
    },
    de: {
      title: "Webdesign Mainz für B2B-Unternehmen mit Wachstumskurs",
      subtitle: "Wir entwickeln maßgeschneiderte Websites, die Ihre Sichtbarkeit in Google stärken, mehr Leads generieren und Ihre Marke digital positionieren. Unser Webdesign für Unternehmen aus Mainz und darüber hinaus basiert auf Strategie, nicht auf Templates."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  
  return (
    <section className="relative overflow-hidden font-satoshi min-h-screen flex items-center" style={{ backgroundColor: '#0A1E2C' }}>
      {/* Enhanced floating circles animation - same as startpage */}
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
            {/* Main heading */}
            <h1 
              className="font-medium mb-6 sm:mb-8 leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
              style={{ color: '#FFFFFF' }}
            >
              {t.title}
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-left"
              style={{ lineHeight: '1.6', color: '#F4F4F4' }}
            >
              {t.subtitle}
            </p>
            
            {/* CTA buttons - matching startpage style */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#FFE500', 
                  color: '#003347',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e6ce00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFE500';
                }}
                onClick={handleStartProject}
              >
                {isGerman ? 'Projekt starten' : 'Start Your Web Project'}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#003347',
                  borderColor: '#FFFFFF',
                  borderWidth: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                asChild
              >
                <Link to={isGerman ? "/referenzen" : "/en/case-studies"}>
                  {isGerman ? 'Referenzen ansehen' : 'View Case Studies'}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual transition indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-medico-yellow/50 to-medico-yellow/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-yellow/80 rounded-full animate-pulse"></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-yellow/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-yellow/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignHero;
