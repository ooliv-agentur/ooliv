
import React, { useRef, useState, useEffect } from 'react';
import { CalendarCheck, PenTool, Monitor, CheckCircle, RefreshCw, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const ContentProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  const steps = isGerman ? [
    {
      number: "01",
      title: 'Strategie & Kickoff',
      description: 'Ziele definieren, Tonalität festlegen, SEO-Recherche (z. B. mit Ahrefs).'
    },
    {
      number: "02",
      title: 'Erstellung & Design',
      description: 'Inhalte entwickeln – Texte, Bilder, Videos – mit Fokus auf UX & Conversion.'
    },
    {
      number: "03",
      title: 'Review & Integration',
      description: 'Freigabe durch Sie, Einbindung über uns oder Ihr CMS.'
    },
    {
      number: "04",
      title: 'Testing & Launch',
      description: 'SEO-Checks, Performance, Struktur – dann Go Live.'
    },
    {
      number: "05",
      title: 'Laufende Content-Pakete',
      description: 'Monatliche Pakete zur Pflege, Optimierung & strategischen Weiterentwicklung.'
    }
  ] : [
    {
      number: "01",
      title: 'Strategy & Kickoff',
      description: 'We start by understanding your goals, brand tone, and doing SEO research (using Ahrefs) to ensure we\'re on the right track.'
    },
    {
      number: "02",
      title: 'Creation & Design',
      description: 'We create your content, including copy, visuals, and video — all designed for conversion and user experience.'
    },
    {
      number: "03",
      title: 'Review & Integration',
      description: 'You review the content, and we integrate it into your site — either directly or through your CMS.'
    },
    {
      number: "04",
      title: 'Testing & Launch',
      description: 'We ensure SEO checks, speed, and structure before we go live.'
    },
    {
      number: "05",
      title: 'Ongoing Content Support',
      description: 'After launch, we offer monthly content packages to keep your site fresh and aligned with your SEO and business goals.'
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / steps.length;
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
    if (activeIndex < steps.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      
      const cardWidth = container.scrollWidth / steps.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < steps.length) {
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
      const cardWidth = container.scrollWidth / steps.length;
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
        if (activeIndex < steps.length - 1) {
          scrollToIndex(activeIndex + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, steps.length]);

  // Initialize scroll buttons state
  useEffect(() => {
    handleScroll();
  }, []);

  const scrollContainerClass = cn(
    "flex overflow-x-auto snap-x snap-mandatory process-scroll pb-6 -mx-4 px-4 cursor-grab",
    isDragging && "cursor-grabbing"
  );

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {isGerman
            ? "Unser Kampagnen-Prozess – von Strategie bis Skalierung"
            : "Our Campaign Process – From Strategy to Growth"
          }
        </h2>
        
        <div className="w-full max-w-6xl mx-auto relative mt-12">
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
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
              >
                <div className="bg-white rounded-lg p-6 pt-10 h-full shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary relative">
                  <div className="absolute -top-8 left-6 h-16 w-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                    <p className="text-brand-text">{step.description}</p>
                  </div>
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
          
          {/* Mobile scroll hint */}
          <div className="text-center mt-3 text-sm text-gray-500 md:hidden">
            {isGerman ? "Weiter scrollen für mehr ›" : "Scroll to see more ›"}
          </div>
          
          {/* Additional link at the bottom as shown in the image */}
          <div className="text-center mt-10">
            <Button variant="link" asChild className="group">
              <Link to={isGerman ? "/webentwicklung" : "/web-development"} className="flex items-center gap-2 text-brand-primary">
                {isGerman ? "Mehr über unsere Landingpages & Webentwicklung" : "Learn more about our landing pages & web development"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
