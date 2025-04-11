
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GoogleAdsProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery('(max-width: 1023px)');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  const translations = {
    en: {
      title: "Our Campaign Process – From Audit to Growth",
      steps: [
        {
          number: "01",
          title: "Campaign Strategy",
          description: "Define your audience, value propositions, budgets, and KPIs"
        },
        {
          number: "02",
          title: "Landing Page Creation",
          description: "We design SEO-ready, mobile-first landing pages tailored to your specific offers"
        },
        {
          number: "03",
          title: "Google Ads Setup",
          description: "We launch and manage campaigns across Google Ads — Search, Display, and Performance Max"
        },
        {
          number: "04",
          title: "Tracking & Protection",
          description: "We set up event tracking to monitor performance, block invalid clicks, and ensure data accuracy"
        },
        {
          number: "05",
          title: "Reporting & Optimization",
          description: "We iterate and improve your funnel through weekly insights and A/B tests"
        }
      ],
      learnMore: "Explore our landing page & web development services",
      scrollHint: "Scroll to see more"
    },
    de: {
      title: "Unser Kampagnen-Prozess – von Strategie bis Skalierung",
      steps: [
        {
          number: "01",
          title: "Strategie & Setup",
          description: "Zielgruppen, Angebote, Budgets und KPIs definieren"
        },
        {
          number: "02",
          title: "Landingpage-Erstellung",
          description: "Mobileoptimierte Seiten mit klarem Nutzen & schneller Ladezeit"
        },
        {
          number: "03",
          title: "Kampagnen-Setup",
          description: "Anzeigen starten – Search, Display & Performance Max"
        },
        {
          number: "04",
          title: "Tracking & Schutz",
          description: "Ereignisse erfassen, Klickbetrug blockieren, Datenqualität sichern"
        },
        {
          number: "05",
          title: "Reporting & Optimierung",
          description: "A/B-Tests, Funnel-Analysen & wöchentliche Verbesserungen"
        }
      ],
      learnMore: "Mehr über unsere Landingpages & Webentwicklung",
      scrollHint: "Weiter scrollen für mehr"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const webDevPath = isGerman ? "/de/webentwicklung" : "/web-development";

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / t.steps.length;
      container.scrollTo({ 
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < t.steps.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      setScrollPosition(container.scrollLeft);
      
      const cardWidth = container.scrollWidth / t.steps.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < t.steps.length) {
        setActiveIndex(newIndex);
      }
      
      // Update scroll buttons state
      setCanScrollPrev(container.scrollLeft > 10);
      setCanScrollNext(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grabbing';
        scrollRef.current.style.userSelect = 'none';
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.userSelect = 'auto';
      
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / t.steps.length;
      const targetIndex = Math.round(container.scrollLeft / cardWidth);
      scrollToIndex(targetIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (scrollRef.current) {
      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (activeIndex > 0) {
          scrollToIndex(activeIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (activeIndex < t.steps.length - 1) {
          scrollToIndex(activeIndex + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, t.steps.length]);

  // Initialize scroll buttons state
  useEffect(() => {
    handleScroll();
  }, []);

  const scrollContainerClass = cn(
    "flex overflow-x-auto snap-x snap-mandatory process-scroll pb-6 -mx-4 px-4 cursor-grab",
    isDragging && "cursor-grabbing"
  );

  return (
    <section className="py-16 md:py-24 bg-brand-backgroundAlt overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="w-full max-w-6xl mx-auto relative">
          <style dangerouslySetInnerHTML={{ __html: `
            .process-scroll::-webkit-scrollbar {
              display: none;
            }
            .process-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
            }
          `}} />
          
          <div 
            ref={scrollRef}
            className={scrollContainerClass}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {t.steps.map((step, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
              >
                <div className="bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 flex items-center justify-center border-2 border-brand-primary text-brand-primary transition-all duration-200",
                !canScrollPrev && "opacity-50 cursor-not-allowed"
              )}
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 flex items-center justify-center border-2 border-brand-primary text-brand-primary transition-all duration-200",
                !canScrollNext && "opacity-50 cursor-not-allowed"
              )}
              disabled={!canScrollNext}
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {isMobile && (
            <div className="text-center mt-3 text-sm text-gray-500">
              {t.scrollHint} ›
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="link" asChild className="group">
              <Link to={webDevPath} className="flex items-center justify-center gap-2 text-brand-primary">
                {t.learnMore}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsProcess;
