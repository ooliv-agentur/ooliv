
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BarChart, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Typing effect state
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Value propositions to cycle through
  const valueProps = [
    { text: "Maximum Growth & Conversions", icon: <BarChart className="inline-block ml-2 h-6 w-6" /> },
    { text: "Higher SEO Rankings & More Traffic", icon: <ArrowRight className="inline-block ml-2 h-6 w-6" /> },
    { text: "Stronger Branding & User Engagement", icon: <Users className="inline-block ml-2 h-6 w-6" /> },
    { text: "Seamless User Experience & Performance", icon: <Zap className="inline-block ml-2 h-6 w-6" /> }
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
  
  // Typing effect implementation
  useEffect(() => {
    const handleTyping = () => {
      // Get current text based on the loop number
      const currentProp = valueProps[loopNum % valueProps.length];
      const fullText = currentProp.text;
      
      // Set typing speed based on whether we're deleting or typing
      let updatedSpeed = isDeleting ? 50 : 80;
      
      // If deleting, remove a character, otherwise add one
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
      
      setTypingSpeed(updatedSpeed);
      
      // Handle the typing/deleting transitions
      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing before starting to delete
        setTypingSpeed(2000); // Pause for 2 seconds
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIcon(valueProps[(loopNum + 1) % valueProps.length].icon);
        setTypingSpeed(500); // Pause before typing the next phrase
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, valueProps]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            <div className="mb-2">ooliv: Webdesign Agency That Builds High-Performance Websites</div>
            <div className="flex items-center justify-center gap-1 text-brand-primary">
              for{' '}
              <span className="relative text-white">
                {displayText}
                <span className="absolute -right-4 top-1/2 h-5 w-0.5 bg-white animate-pulse opacity-75"></span>
                <span className="transition-opacity duration-300 ease-in">
                  {currentIcon}
                </span>
              </span>
            </div>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-100">
            At ooliv, we create websites that rank higher, convert better, and drive measurable business success. Whether it's a relaunch or a brand-new site, we ensure your website delivers results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                {t('hero.startProject')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white" asChild>
              <Link to="/case-studies">
                {t('hero.seeWork')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
