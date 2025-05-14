
import React from 'react';
import PageHero from './PageHero';
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  startProjectText?: string;
  seeWorkText?: string;
  useVideo?: boolean;
  videoSrc?: string;
  videoOpacity?: number;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  startProjectText, 
  seeWorkText,
  useVideo = false,
  videoSrc = "/lovable-uploads/test.mp4",
  videoOpacity = 0.2
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
      useVideo={useVideo}
      videoSrc={videoSrc}
      videoOpacity={videoOpacity}
    />
  );
};

export default Hero;
