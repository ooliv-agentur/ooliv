
import React from 'react';
import { FileText, Image, Palette, Video } from 'lucide-react';
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

const ContentServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const services = [
    {
      icon: FileText,
      titleDE: "Text & Messaging",
      titleEN: "Text & Messaging",
      descriptionDE: "Conversion-fokussierte Texte mit GPT-Workflows und redaktioneller Qualität.",
      descriptionEN: "Conversion-focused copy with GPT workflows and editorial quality.",
      featuresDE: [
        "Headlines, Landingpages, CTAs, FAQs",
        "SEO-optimierte Inhaltsstruktur",
        "Conversion-fokussiertes Copywriting",
        "Konsistente Markensprache"
      ],
      featuresEN: [
        "Headlines, Landing pages, CTAs, FAQs",
        "SEO-optimized content structure",
        "Conversion-focused copywriting",
        "Consistent brand voice"
      ]
    },
    {
      icon: Image,
      titleDE: "Foto & Bildsprache",
      titleEN: "Photo & Visual Language",
      descriptionDE: "Bildästhetik passend zu Ihrer Marke — vom Briefing bis zur KI-gestützten Umsetzung.",
      descriptionEN: "Visual aesthetics matching your brand — from briefing to AI-supported implementation.",
      featuresDE: [
        "Bildästhetik passend zur Marke",
        "Individuelle Fotobriefings",
        "KI-gestützte Bildgenerierung",
        "Web-optimierte Formate"
      ],
      featuresEN: [
        "Brand-matched visual aesthetics",
        "Custom photo briefings",
        "AI-supported image generation",
        "Web-optimized formats"
      ]
    },
    {
      icon: Palette,
      titleDE: "Illustration & Logo Design",
      titleEN: "Illustration & Logo Design",
      descriptionDE: "Icons, Logos und visuelle Assets zur Verstärkung Ihrer Markenidentität.",
      descriptionEN: "Icons, logos and visual assets to strengthen your brand identity.",
      featuresDE: [
        "Icons, Logos, visuelle Assets",
        "Markenidentität gestalten",
        "Website-Illustrationen",
        "Visuelle Systeme"
      ],
      featuresEN: [
        "Icons, logos, visual assets",
        "Brand identity design",
        "Website illustrations",
        "Visual systems"
      ]
    },
    {
      icon: Video,
      titleDE: "Video & Animation",
      titleEN: "Video & Animation",
      descriptionDE: "Erklärvideos, Animationen u. Social Clips — erstellt mit modernsten Tools wie Sora.",
      descriptionEN: "Explainer videos, animations & social clips — created with cutting-edge tools like Sora.",
      featuresDE: [
        "Erklärvideos, Animationen, Social Clips",
        "Hero-Hintergrundvideos",
        "Produkt- & Prozessvisualisierung",
        "Erstellung mit Tools wie Sora"
      ],
      featuresEN: [
        "Explainer videos, animations, social clips",
        "Hero background videos",
        "Product & process visualization",
        "Created with tools like Sora"
      ]
    }
  ];

  return (
    <section className="py-24 bg-medico-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            {isGerman 
              ? "Webinhalte, die nicht nur Seiten füllen — sondern Menschen bewegen" 
              : "Web content that doesn't just fill pages — but moves people"
            }
          </h2>
          <p className="text-lg text-medico-darkGreen/80 max-w-3xl mx-auto">
            {isGerman 
              ? "Wir liefern Content, der konvertiert. Jedes Element ist gemacht für Klarheit, Verbindung und langfristige Relevanz." 
              : "We deliver content that converts. Every element is crafted for clarity, connection and long-term relevance."
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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="h-full bg-medico-mint/10 border-none">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-accent-primary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-medico-darkGreen">
                        {isGerman ? service.titleDE : service.titleEN}
                      </h3>
                      
                      <p className="text-medico-darkGreen/80 mb-6 leading-relaxed">
                        {isGerman ? service.descriptionDE : service.descriptionEN}
                      </p>
                      
                      <ul className="space-y-2 flex-grow">
                        {(isGerman ? service.featuresDE : service.featuresEN).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm text-medico-darkGreen/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
          <p className="text-accent-primary font-medium mb-4">
            {isGerman ? "Content definieren? Jetzt Strategiegespräch starten" : "Define content? Start strategy discussion now"}
            <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentServices;
