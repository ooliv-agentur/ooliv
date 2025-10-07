
import React from 'react';
import { CheckCircle, Users, Lightbulb, Bot, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ContentExpertInsight = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const benefits = isGerman ? [
    {
      icon: CheckCircle,
      title: "Strategischer Content-Ansatz",
      description: "Wir entwickeln Inhalte, die alle Kanäle und Zielgruppen erreichen – für nachhaltigen Erfolg.",
      link: "/strategie",
      linkText: "Mehr zur Strategie"
    },
    {
      icon: Users,
      title: "Content-Expertise",
      description: "Unsere Content-Strategen, Designer und Texter sorgen für professionelle Umsetzung.",
      link: "/ueber-uns",
      linkText: "Unser Team kennenlernen"
    },
    {
      icon: Lightbulb,
      title: "Workshops",
      description: "Wir geben unser Wissen weiter und schulen Ihr Team in Content-Strategien und Trends.",
      link: "/kontakt",
      linkText: "Workshop anfragen"
    },
    {
      icon: Bot,
      title: "KI-Tools",
      description: "Mit modernen KI-Tools arbeiten wir effizient und sichern höchste Qualität.",
      link: "/ki-technologien",
      linkText: "KI-Ansatz entdecken"
    },
    {
      icon: TrendingUp,
      title: "Messbare Ergebnisse",
      description: "Wir tracken die Performance Ihrer Inhalte und optimieren kontinuierlich.",
      link: "/seo-optimierung",
      linkText: "SEO-Ansatz erfahren"
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Dank eingespielter Abläufe liefern wir Content zügig und zuverlässig.",
      link: "/referenzen",
      linkText: "Projekte ansehen"
    }
  ] : [
    {
      icon: CheckCircle,
      title: "Strategic Content Approach",
      description: "We don't create isolated content – we think holistically, from initial idea to measurable performance.",
      link: "/en/strategy",
      linkText: "Learn about Strategy"
    },
    {
      icon: Users,
      title: "Experienced Content Team", 
      description: "Our team combines content strategists, SEO experts, designers, and copywriters under one roof.",
      link: "/en/about-us",
      linkText: "Meet our Team"
    },
    {
      icon: Lightbulb,
      title: "Workshops & Trend Consulting",
      description: "We share our knowledge in content workshops and advise you on current trends and best practices.",
      link: "/en/contact",
      linkText: "Request Workshop"
    },
    {
      icon: Bot,
      title: "AI-Powered Efficiency",
      description: "We use cutting-edge AI tools like ChatGPT and Midjourney to work faster and more efficiently – without replacing human expertise.",
      link: "/en/ai-technologies",
      linkText: "Discover AI Approach"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Content without metrics is just art. We track performance and continuously optimize.",
      link: "/en/seo",
      linkText: "Learn about SEO"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Thanks to structured processes and a well-coordinated team, we deliver content quickly and with high quality.",
      link: "/en/case-studies",
      linkText: "View Projects"
    }
  ];

  return (
    <section className="py-24 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            {isGerman ? "Warum ooliv als Content Agentur?" : "Why Choose ooliv for Content?"}
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
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white shadow-card hover:shadow-cardHover transition-shadow duration-300">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-brand-heading">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-brand-text leading-relaxed mb-6 flex-grow">
                        {benefit.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Button 
                          variant="link" 
                          className="text-brand-primary hover:text-brand-primaryHover p-0 h-auto font-medium" 
                          asChild
                        >
                          <a href={benefit.link}>
                            {benefit.linkText}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
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
            className="bg-brand-primary text-white hover:bg-brand-primaryHover"
            onClick={handleStartProject}
          >
            {isGerman ? "Content-Strategie besprechen" : "Discuss Content Strategy"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentExpertInsight;
