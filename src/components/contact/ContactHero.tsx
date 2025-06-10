
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface ContactHeroProps {
  title: string;
  subtitle: string;
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
}

const ContactHero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta
}: ContactHeroProps) => {
  const { language } = useLanguage();
  
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
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
            <h1 
              className="font-medium leading-tight text-left mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
              style={{ 
                color: '#003343' 
              }}
            >
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left" style={{ lineHeight: '1.6' }}>
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {primaryCta && (
                primaryCta.onClick ? (
                  <Button 
                    size="lg" 
                    className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={primaryCta.onClick}
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <Button size="lg" className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to={primaryCta.link}>
                      {primaryCta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )
              )}
              
              {secondaryCta && (
                secondaryCta.onClick ? (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                    onClick={secondaryCta.onClick}
                  >
                    {secondaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <Button variant="outline" size="lg" className="group bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to={secondaryCta.link}>
                      {secondaryCta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual transition indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
