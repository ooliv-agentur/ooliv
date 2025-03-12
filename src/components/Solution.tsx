
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

  // Reference to control drag vs. click behavior
  const isDragging = useRef(false);
  
  // Handle drag detection for links
  useEffect(() => {
    if (!emblaApi) return;
    
    const onPointerDown = () => {
      isDragging.current = false;
    };
    
    const onDragStart = () => {
      isDragging.current = true;
    };
    
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('dragStart', onDragStart);
    
    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('dragStart', onDragStart);
    };
  }, [emblaApi]);
  
  const steps = [
    {
      number: "1️⃣",
      title: "Strategy & Analysis",
      subtitle: "Powered by Market Insights & SEO Data",
      description: "We analyze competitors, market trends, and customer behavior to craft a website strategy that enhances visibility and engagement. AI supports data analysis—but every decision is driven by industry expertise.",
      icon: BarChart
    },
    {
      number: "2️⃣",
      title: "Web Design & UX",
      subtitle: "Tailored Design, Enhanced by Technology",
      description: "We create visually compelling and highly functional websites that reflect your brand identity. Advanced tools refine layouts, colors, and imagery—but human creativity ensures a seamless experience.",
      icon: Zap
    },
    {
      number: "3️⃣",
      title: "Development & Performance",
      subtitle: "Optimized for Speed, Security & Scalability",
      description: "Our websites are built for speed, accessibility, and future expansion. AI enhances technical efficiency, but our development team ensures stability, security, and flawless functionality.",
      icon: Code
    },
    {
      number: "4️⃣",
      title: "Content & SEO Optimization",
      subtitle: "Strategic Messaging That Ranks & Converts",
      description: "SEO-driven content designed to engage your audience and increase visibility. AI assists with research and structuring—but persuasive storytelling remains in expert hands.",
      icon: FileText
    },
    {
      number: "5️⃣",
      title: "Launch, Tracking & Support",
      subtitle: "Long-Term Success Through Data & Expertise",
      description: "We monitor website performance, analyze user behavior, and fine-tune strategies over time. AI streamlines reporting—but ongoing success is shaped by expert refinement and business intelligence.",
      icon: LineChart
    }
  ];

  const techLogos = [
    {
      name: "ChatGPT-4",
      icon: "/chatgpt-logo.svg",
      description: "AI-powered content & automation"
    },
    {
      name: "Midjourney",
      icon: "/midjourney-logo.svg",
      description: "AI-generated images & branding"
    },
    {
      name: "Sora AI",
      icon: "/sora-logo.svg",
      description: "AI-driven video production"
    },
    {
      name: "Ahrefs",
      icon: "/ahrefs-logo.svg",
      description: "Advanced SEO analytics"
    },
    {
      name: "Google Ads AI",
      icon: "/google-ads-logo.svg",
      description: "AI-optimized ad campaigns"
    }
  ];

  // Handle click only if not dragging
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
            We Build Websites That Elevate Your Business—
            <br />
            <span className="text-brand-primary">With Strategy, Expertise & Smart Technology</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Whether you're launching a new business or upgrading an outdated website, our expert team combines strategic thinking, user-focused design, and cutting-edge tools to create high-performance digital experiences. AI enhances efficiency—but creativity, experience, and data-driven decisions are at the core of our approach.
          </p>
        </div>
        
        {/* Carousel Indicators */}
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
        
        {/* Embla Carousel */}
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
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-backgroundAlt text-brand-primary 
                                 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="p-2 bg-brand-backgroundAlt rounded-full">
                      <step.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <h3 className="font-bold text-xl mb-2 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-primary text-sm font-medium mb-3">{step.subtitle}</p>
                  <p className="text-brand-text text-sm flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech Logos Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 backdrop-blur-sm bg-opacity-80">
          <div className="text-center mb-10">
            <p className="text-lg text-brand-heading font-medium">
              We integrate cutting-edge technologies to enhance website performance, SEO, and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
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
        
        <div className="mt-16 text-center bg-white rounded-2xl shadow-md p-8 backdrop-blur-sm bg-opacity-90">
          <p className="max-w-3xl mx-auto text-lg text-brand-text mb-8">
            Your website should be a powerful business tool—designed with strategy, built for performance, and enhanced with smart technology. Let's create a website that works for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/contact" className="inline-flex items-center">
                Start Your Project
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
