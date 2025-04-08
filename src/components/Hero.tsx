
import React from 'react';
import PageHero from './PageHero';
import ScrollIndicator from './ScrollIndicator';
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  title?: React.ReactNode;
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
  const { language } = useLanguage();
  
  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      description={description}
      startProjectText={startProjectText}
      seeWorkText={seeWorkText}
      isHomepage={true}
    />
  );
};

export default Hero;
