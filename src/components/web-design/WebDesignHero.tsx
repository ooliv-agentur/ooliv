
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesignHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const valueProps = [
    'strategic business growth',
    'measurable ROI',
    'increased conversions',
    'stronger market positioning',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentProp = valueProps[loopNum % valueProps.length];
      const fullText = currentProp;
      
      let updatedSpeed = isDeleting ? 50 : 150;
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
      
      setTypingSpeed(updatedSpeed);
      
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, valueProps]);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt opacity-90" />
        <div className="absolute inset-0 bg-[url('/abstract-web-bg.jpg')] bg-cover bg-center opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-heading animate-fade-in">
            Strategic Web Design for B2B Growth
          </h1>
          
          <p className="text-xl max-w-2xl mb-6 text-brand-text">
            Custom websites engineered for{' '}
            <span className="text-brand-primary font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          
          <p className="max-w-2xl mb-8 text-brand-text">
            For mid-sized B2B companies and digital-focused enterprises that need more than just a website. 
            We build strategic digital platforms that generate leads, establish credibility, and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Start Your Web Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignHero;
