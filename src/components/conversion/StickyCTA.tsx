import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyCTAProps {
  text?: string;
  onClick?: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ 
  text = "Kostenloses Strategiegespräch",
  onClick
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 50% of the page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.dispatchEvent(new CustomEvent('open-lead-form', { 
        detail: { mode: 'strategy' } 
      }));
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 h-14 px-8 text-base font-semibold"
      >
        {text}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default StickyCTA;
