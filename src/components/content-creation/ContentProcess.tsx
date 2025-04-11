
import React, { useRef, useState, useEffect } from 'react';
import { CalendarCheck, PenTool, Monitor, CheckCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

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
      icon: CalendarCheck,
      title: 'Strategie & Kickoff',
      description: 'Ziele definieren, Tonalität festlegen, SEO-Recherche (z. B. mit Ahrefs).'
    },
    {
      icon: PenTool,
      title: 'Erstellung & Design',
      description: 'Inhalte entwickeln – Texte, Bilder, Videos – mit Fokus auf UX & Conversion.'
    },
    {
      icon: Monitor,
      title: 'Review & Integration',
      description: 'Freigabe durch Sie, Einbindung über uns oder Ihr CMS.'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Launch',
      description: 'SEO-Checks, Performance, Struktur – dann Go Live.'
    },
    {
      icon: RefreshCw,
      title: 'Laufende Content-Pakete',
      description: 'Monatliche Pakete zur Pflege, Optimierung & strategischen Weiterentwicklung.'
    }
  ] : [
    {
      icon: CalendarCheck,
      title: 'Strategy & Kickoff',
      description: 'We start by understanding your goals, brand tone, and doing SEO research (using Ahrefs) to ensure we\'re on the right track.'
    },
    {
      icon: PenTool,
      title: 'Creation & Design',
      description: 'We create your content, including copy, visuals, and video — all designed for conversion and user experience.'
    },
    {
      icon: Monitor,
      title: 'Review & Integration',
      description: 'You review the content, and we integrate it into your site — either directly or through your CMS.'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Launch',
      description: 'We ensure SEO checks, speed, and structure before we go live.'
    },
    {
      icon: RefreshCw,
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {isGerman
            ? "Vom Content-Chaos zur Klarheit – so arbeiten wir"
            : "From Content Chaos to Clarity — Here's How We Work"
          }
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {isGerman
            ? "Ein bewährter Prozess, der Ihre Content-Strategie messbar macht."
            : "A proven process that ensures your content strategy delivers measurable business results."
          }
        </p>
        
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
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-brand-backgroundAlt flex-shrink-0">
                      <step.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-brand-heading">
                        {step.title}
                      </h3>
                      <p className="text-brand-text">{step.description}</p>
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
