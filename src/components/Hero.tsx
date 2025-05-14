
import React from 'react';
import PageHero from './PageHero';
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  startProjectText?: string;
  seeWorkText?: string;
  videoOpacity?: number;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  startProjectText, 
  seeWorkText,
  videoOpacity = 0.65
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
      videoOpacity={videoOpacity}
    />
  );
};

export default Hero;
