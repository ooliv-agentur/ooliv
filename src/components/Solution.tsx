
import React, { useEffect, useRef } from 'react';
import { Zap, BarChart, Code, FileText, LineChart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import useEmblaCarousel from 'embla-carousel-react';

const Solution = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const isDragging = useRef(false);
  
  useEffect(() => {
    if (!emblaApi) return;
    
    const onPointerDown = () => {
      isDragging.current = false;
    };
    
    const onDragMove = () => {
      isDragging.current = true;
    };
    
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('select', onDragMove);
    
    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('select', onDragMove);
    };
  }, [emblaApi]);
  
  const steps = [
    {
      number: "1️⃣",
      title: "Strategy & Analysis",
      subtitle: "Powered by Market Insights & SEO Data",
      description: "We analyze market trends, competitors, and customer behavior to craft a high-impact web strategy.",
      icon: BarChart
    },
    {
      number: "2️⃣",
      title: "Web Design & UX",
      subtitle: "Tailored Design, Enhanced by Technology",
      description: "We design visually stunning and conversion-optimized websites that reflect your brand identity.",
      icon: Zap
    },
    {
      number: "3️⃣",
      title: "Development & Performance",
      subtitle: "Optimized for Speed, Security & Scalability",
      description: "We build high-performance websites with top-tier security and fast loading speeds for all devices.",
      icon: Code
    },
    {
      number: "4️⃣",
      title: "Content & SEO Optimization",
      subtitle: "SEO & Content That Gets You Found",
      description: "SEO-driven content designed to engage audiences, increase rankings, and drive conversions.",
      icon: FileText
    },
    {
      number: "5️⃣",
      title: "Launch, Tracking & Support",
      subtitle: "Long-Term Success Through Data & Expertise",
      description: "We track, analyze, and optimize website performance over time to ensure continuous growth.",
      icon: LineChart
    }
  ];

  const techLogos = [
    {
      name: "ChatGPT-4",
      icon: "/chatgpt-logo.svg",
      description: "Content & automation"
    },
    {
      name: "Midjourney",
      icon: "/midjourney-logo.svg",
      description: "Design & branding"
    },
    {
      name: "Ahrefs",
      icon: "/ahrefs-logo.svg",
      description: "Advanced SEO analytics"
    },
    {
      name: "Google Ads",
      icon: "/google-ads-logo.svg",
      description: "Optimized ad campaigns"
    }
  ];

  const handleCardClick = (event: React.MouseEvent, card: HTMLDivElement) => {
    if (isDragging.current) {
      event.preventDefault();
    }
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Our Web Design Agency Process: Strategy, Performance & Growth
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            As an experienced Web Design Agency, we combine strategic thinking, user-focused design, and cutting-edge tools to create high-performance digital experiences. We focus on creativity, experience, and data-driven decisions to ensure your website's success.
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${emblaApi?.selectedScrollSnap() === index ? 'bg-brand-primary w-8' : 'bg-brand-muted'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="overflow-hidden mb-16" ref={emblaRef}>
          <div className="flex gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 group"
                onClick={(e) => handleCardClick(e, e.currentTarget)}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90 border border-gray-100 
                             transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full
                             flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-backgroundAlt text-brand-primary 
                                 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="p-2.5 bg-brand-backgroundAlt rounded-full">
                      <step.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-primary text-sm font-medium mb-3">{step.subtitle}</p>
                  <p className="text-brand-text text-sm flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 rounded-2xl p-8 ai-tools-section">
          <div className="text-center mb-10">
            <p className="text-lg text-brand-heading font-medium">
              Strategic Technology for Smarter Websites
            </p>
            <p className="text-base text-brand-text mt-2">
              At ooliv Web Design Agency, we leverage powerful technologies to enhance website performance, SEO, and user engagement—guided by expert strategy and human creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {techLogos.map((logo, index) => (
              <div key={index} className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 flex items-center justify-center p-4 rounded-full bg-brand-backgroundAlt group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  <img 
                    src={logo.icon} 
                    alt={`${logo.name} logo`} 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>
                <p className="mt-3 text-sm text-brand-heading font-medium">{logo.name}</p>
                <p className="text-xs text-brand-text mt-1">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center rounded-2xl p-8 cta-section">
          <p className="max-w-3xl mx-auto text-lg text-brand-text mb-8">
            Your Website Should Work for You—Let's Build One That Delivers Results. From strategy to execution, our Web Design Agency ensures every element drives measurable business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/contact" className="inline-flex items-center">
                Start Your Website Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="group">
              <Link to="/case-studies" className="inline-flex items-center">
                See How We Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
