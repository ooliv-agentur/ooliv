
import React from 'react';
import PageHero from './PageHero';
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  startProjectText?: string;
  seeWorkText?: string;
  backgroundType?: 'video' | 'image';
  videoSrc?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  startProjectText, 
  seeWorkText,
  backgroundType = 'image',
  videoSrc
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
      backgroundType={backgroundType}
      videoSrc={videoSrc}
    />
  );
};

export default Hero;
