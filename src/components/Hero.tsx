
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Typing effect state
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Updated value propositions to cycle through
  const valueProps = [
    { text: "Measurable Business Growth & Higher Conversions", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Scalable, High-Performing Digital Experiences", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "More Visibility, Engagement & Conversions", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Faster Load Times & Better SEO Rankings", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Lead Generation & Long-Term Success", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> }
  ];
  
  const [currentIcon, setCurrentIcon] = useState(valueProps[0].icon);
  
  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        setVideoLoaded(true);
      } else {
        videoRef.current.addEventListener('loadeddata', () => {
          setVideoLoaded(true);
        });
      }
    }
  }, []);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentProp = valueProps[loopNum % valueProps.length];
      const fullText = currentProp.text;
      
      let updatedSpeed = isDeleting ? 50 : 80;
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
      
      setTypingSpeed(updatedSpeed);
      
      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIcon(valueProps[(loopNum + 1) % valueProps.length].icon);
        setTypingSpeed(500);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, valueProps]);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay 
          muted 
          loop 
          playsInline
          onError={() => setVideoLoaded(false)}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-team-working-on-computers-in-an-office-environment-33172-large.mp4" type="video/mp4" />
        </video>
        
        {!videoLoaded && (
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
            alt="Digital Transformation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </div>
      
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Tag line above heading */}
            <div className="inline-flex items-center bg-blue-600/20 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span>Web Design Agency</span>
            </div>
            
            {/* Main heading with emphasis */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-brand-primary">ooliv</span> Web Design Agency
              <div className="text-white flex items-center mt-2">
                for <span className="relative text-white flex items-center">
                  {displayText}
                  <span className="absolute right-[-16px] top-1/2 h-5 w-0.5 bg-white animate-pulse opacity-75"></span>
                  {currentIcon}
                </span>
              </div>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              We create high-performance websites that rank higher, convert better, and drive measurable business success. Our <Link to="/web-design" className="text-brand-primary hover:underline">Web Design Agency Process</Link> ensures your website delivers measurable results, whether it's a relaunch or <Link to="/google-ads" className="text-brand-primary hover:underline">conversion-focused landing pages</Link>.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Start Your Website Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white" asChild>
                <Link to="/case-studies">
                  See Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
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
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
