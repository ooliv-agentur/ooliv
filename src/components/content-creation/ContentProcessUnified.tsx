
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid2X2, Sparkles, Code2, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ContentProcessUnified = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const steps = isGerman ? [
    {
      number: "01",
      title: 'Analyse & Strategie',
      description: 'Zielgruppenbestimmung, Suchbegriff-Analyse, Content-Audit und Inhaltsplanung.',
      deliverables: [
        'Content-Strategie-Dokument',
        'Keyword-Map & SEO-Plan',
        'Kundenprofile',
        'Content-Kalender'
      ],
      link: '/strategie',
      linkText: 'Mehr zur Strategie',
      icon: Grid2X2
    },
    {
      number: "02", 
      title: 'Kreation & Design',
      description: 'Content-Erstellung: Texte, Bilder, Videos, Grafiken – alles abgestimmt auf Ihre Ziele.',
      deliverables: [
        'Website-Texte & Blog-Artikel',
        'Visuelle Assets (Bilder, Grafiken)',
        'Video-Content',
        'Social Media Content'
      ],
      link: '/webdesign',
      linkText: 'Mehr zum Design',
      icon: Sparkles
    },
    {
      number: "03",
      title: 'Umsetzung & Integration', 
      description: 'Technische Integration in Ihre Website, CMS-Setup und Performance-Optimierung.',
      deliverables: [
        'CMS-Integration',
        'SEO-technische Umsetzung',
        'Performance-Optimierung',
        'Mobile Optimierung'
      ],
      link: '/webentwicklung',
      linkText: 'Mehr zur Entwicklung',
      icon: Code2
    },
    {
      number: "04",
      title: 'Optimierung & Weiterentwicklung',
      description: 'Kontinuierliche Analyse, A/B-Testing und strategische Weiterentwicklung.',
      deliverables: [
        'Performance-Reports',
        'A/B-Testing-Ergebnisse',
        'Optimierungsempfehlungen',
        'Monatliche Content-Updates'
      ],
      link: '/seo-optimierung',
      linkText: 'Mehr zur Optimierung',
      icon: TrendingUp
    },
    {
      number: "05",
      title: 'Automatisierte Content-Verteilung',
      description: 'AI-gestützte tägliche Content-Erstellung und automatische Verteilung auf alle Kanäle.',
      deliverables: [
        'Tägliche SEO-optimierte Artikel',
        'Automatische Social Media Posts',
        'Multi-Platform Publishing',
        'Backlink-Netzwerk Integration'
      ],
      link: '/automatisierte-content-marketing',
      linkText: 'Mehr zur Automation',
      icon: Sparkles
    }
  ] : [
    {
      number: "01",
      title: 'Analysis & Strategy',
      description: 'Target audience analysis, keyword research, content audit and strategic planning.',
      deliverables: [
        'Content strategy document',
        'Keyword map & SEO plan',
        'Target audience personas',
        'Content calendar'
      ],
      link: '/strategy',
      linkText: 'Learn about Strategy',
      icon: Grid2X2
    },
    {
      number: "02",
      title: 'Creation & Design', 
      description: 'Content creation: texts, images, videos, graphics – all aligned with your goals.',
      deliverables: [
        'Website copy & blog articles',
        'Visual assets (images, graphics)',
        'Video content',
        'Social media content'
      ],
      link: '/creation',
      linkText: 'Learn about Creation',
      icon: Sparkles
    },
    {
      number: "03",
      title: 'Implementation & Integration',
      description: 'Technical integration into your website, CMS setup and performance optimization.',
      deliverables: [
        'CMS integration',
        'Technical SEO implementation',
        'Performance optimization',
        'Mobile optimization'
      ],
      link: '/implementation',
      linkText: 'Learn about Implementation',
      icon: Code2
    },
    {
      number: "04",
      title: 'Optimization & Development',
      description: 'Continuous analysis, A/B testing and strategic development.',
      deliverables: [
        'Performance reports',
        'A/B testing results',
        'Optimization recommendations',
        'Monthly content updates'
      ],
      link: '/optimization',
      linkText: 'Learn about Optimization',
      icon: TrendingUp
    },
    {
      number: "05",
      title: 'Automated Content Distribution',
      description: 'AI-powered daily content creation and automated distribution across all channels.',
      deliverables: [
        'Daily SEO-optimized articles',
        'Automatic social media posts',
        'Multi-platform publishing',
        'Backlink network integration'
      ],
      link: '/automated-content-marketing',
      linkText: 'Learn about Automation',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            {isGerman
              ? "Unser Content-Prozess – von der Strategie zur Umsetzung"
              : "Our Content Process – From Strategy to Implementation"
            }
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {isGerman 
              ? "Content ist mehr als Text und Bilder. Wir bringen Strategie, Kreativität und Technologie zusammen."
              : "Content is more than text and images. We combine strategy, creativity, and technology."
            }
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-brand-heading">
                        {step.title}
                      </h3>
                      
                      <p className="text-brand-text leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="mb-6 flex-grow">
                        <div className="space-y-2">
                          {step.deliverables.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-accent-primary mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-brand-text text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          variant="link" 
                          className="text-accent-primary hover:text-accent-primary/80 p-0 h-auto font-medium group" 
                          asChild
                        >
                          <Link to={step.link} className="flex items-center">
                            {step.linkText}
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent-primary text-white hover:bg-accent-primary/90 px-8 py-3 rounded-full font-medium"
            onClick={() => window.dispatchEvent(new Event('open-lead-form'))}
          >
            {isGerman ? "Content-Strategie besprechen" : "Discuss Content Strategy"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentProcessUnified;
