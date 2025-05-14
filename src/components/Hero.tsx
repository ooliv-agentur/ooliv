
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
  videoSrc?: string;
  useVideo?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  startProjectText, 
  seeWorkText,
  videoOpacity = 0.65,
  videoSrc,
  useVideo = false
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
      videoSrc={videoSrc}
      useVideo={useVideo}
    />
  );
};

export default Hero;
