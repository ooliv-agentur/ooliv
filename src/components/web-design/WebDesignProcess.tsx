
import React, { useRef, useState, useEffect } from 'react';
import { FileSearch, PencilRuler, Code, TestTube, Rocket, Check, ChevronLeft, ChevronRight, CircleDot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from "@/components/ui/button";

const WebDesignProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery('(max-width: 1023px)');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const translations = {
    en: {
      title: "Our Webdesign Process – Step by Step",
      subtitle: "A clear, collaborative approach that turns your business objectives into a website that works.",
      steps: [
        {
          number: "01",
          title: "Strategy & Planning",
          description: "We define your goals, study your competitors, and create a clear roadmap.",
          icon: FileSearch,
          deliverables: ["Business Goals Analysis", "Competitor Research", "User Personas", "Project Roadmap"]
        },
        {
          number: "02",
          title: "Structure & Content",
          description: "We plan your pages, write the content, and map out the wireframes.",
          icon: PencilRuler,
          deliverables: ["Sitemap Creation", "Content Strategy", "Wireframes", "UX Planning"]
        },
        {
          number: "03",
          title: "Design & Development",
          description: "We build your site cleanly, responsively, and ready to scale.",
          icon: Code,
          deliverables: ["Custom Development", "Responsive Design", "Integrations", "Performance Tuning"]
        },
        {
          number: "04",
          title: "Testing & QA",
          description: "We test speed, design, SEO, and mobile experience across all devices.",
          icon: TestTube,
          deliverables: ["Browser Testing", "Mobile Checks", "Speed Tests", "Functionality Checks"]
        },
        {
          number: "05",
          title: "Launch & Support",
          description: "We go live, track the results, and stay available for technical support and updates.",
          icon: Rocket,
          deliverables: ["Site Deployment", "Analytics Setup", "Post-Launch Support", "Ongoing Monitoring"]
        }
      ],
      deliverableTitle: "DELIVERABLES",
      scrollHint: "Scroll to see more"
    },
    de: {
      title: "Unser Webdesign-Prozess – von der Planung bis zum Launch",
      subtitle: "Ein klarer, kollaborativer Ansatz, der Ihre Geschäftsziele in eine erfolgreiche Website umsetzt.",
      steps: [
        {
          number: "01",
          title: "Strategie & SEO-Planung",
          description: "Wir definieren Ihre Ziele, analysieren den Wettbewerb und erstellen einen klaren Fahrplan.",
          icon: FileSearch,
          deliverables: ["Geschäftszielanalyse", "Wettbewerbsrecherche", "Zielgruppendefinition", "Projektplanung"]
        },
        {
          number: "02",
          title: "Struktur & Inhalte",
          description: "Wir planen Ihre Seiten, erstellen Inhalte und entwickeln Wireframes.",
          icon: PencilRuler,
          deliverables: ["Sitemap-Erstellung", "Content-Strategie", "Wireframes", "UX-Planung"]
        },
        {
          number: "03",
          title: "Design & Entwicklung",
          description: "Wir bauen Ihre Website sauber, responsiv und skalierbar.",
          icon: Code,
          deliverables: ["Individuelle Entwicklung", "Responsive Design", "Integrationen", "Performance-Optimierung"]
        },
        {
          number: "04",
          title: "Testing & QA",
          description: "Wir testen Geschwindigkeit, Design, SEO und mobile Erfahrung auf allen Geräten.",
          icon: TestTube,
          deliverables: ["Browser-Tests", "Mobile Prüfungen", "Geschwindigkeitstests", "Funktionsprüfungen"]
        },
        {
          number: "05",
          title: "Launch & Betreuung",
          description: "Wir gehen live, verfolgen die Ergebnisse und bleiben für technischen Support verfügbar.",
          icon: Rocket,
          deliverables: ["Website-Deployment", "Analytics-Einrichtung", "Betreuung nach Launch", "Laufendes Monitoring"]
        }
      ],
      deliverableTitle: "WAS WIR LIEFERN",
      scrollHint: "Weiter scrollen für mehr"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  // Move to next slide
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

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < t.steps.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      setScrollPosition(container.scrollLeft);
      
      // Calculate active index based on scroll position
      const cardWidth = container.scrollWidth / t.steps.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < t.steps.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollLeft();
      } else if (e.key === 'ArrowRight') {
        scrollRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  // Calculate if we can scroll further
  const canScrollLeft = scrollPosition > 10;
  const canScrollRight = scrollRef.current 
    ? scrollPosition < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10 
    : false;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {t.subtitle}
        </p>
        
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Custom scrollbar styling */}
          <style dangerouslySetInnerHTML={{ __html: `
            .process-scroll::-webkit-scrollbar {
              display: none;
            }
            .process-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
          `}} />
          
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory process-scroll pb-6 -mx-4 px-4"
            onScroll={handleScroll}
          >
            {t.steps.map((step, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
              >
                <div className="bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <step.icon className="h-5 w-5 text-brand-primary mr-2" />
                        <h3 className="text-xl font-bold text-brand-heading">{step.title}</h3>
                      </div>
                      <p className="text-brand-text text-sm mb-5">{step.description}</p>
                      
                      <div className="border-t border-brand-backgroundAlt pt-4">
                        <h4 className="text-brand-primary font-bold mb-3 text-sm tracking-wider">
                          {t.deliverableTitle}
                        </h4>
                        <div className="space-y-2.5">
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-backgroundAlt flex items-center justify-center mr-3">
                                <Check className="h-3 w-3 text-brand-primary" />
                              </div>
                              <p className="text-sm font-medium text-brand-text">{deliverable}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls - Always visible */}
          <div className="flex justify-between mt-6">
            <Button 
              variant="secondary"
              size="icon"
              onClick={scrollLeft}
              className={`rounded-full transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-50'}`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Position Indicators */}
            <div className="flex items-center gap-1.5">
              {t.steps.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to step ${idx + 1}`}
                  className={`flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                  onClick={() => scrollToIndex(idx)}
                >
                  <CircleDot 
                    className={`h-4 w-4 transition-colors ${
                      idx === activeIndex 
                        ? 'text-brand-primary fill-brand-primary' 
                        : 'text-gray-300'
                    }`} 
                  />
                </button>
              ))}
            </div>
            
            <Button 
              variant="secondary"
              size="icon"
              onClick={scrollRight}
              className={`rounded-full transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-50'}`}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {isMobile && (
            <div className="text-center mt-3 text-sm text-gray-500">
              {t.scrollHint} ›
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebDesignProcess;
