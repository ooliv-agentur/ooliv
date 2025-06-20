
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const WebDesignProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Our Webdesign Process – Step by Step",
      subtitle: "A clear, collaborative approach that turns your business objectives into a website that works.",
      steps: [
        {
          number: "01",
          title: "Strategy & Planning",
          description: "We define your goals, study your competitors, and create a clear roadmap.",
          deliverables: ["Business Goals Analysis", "Competitor Research", "User Personas", "Project Roadmap"]
        },
        {
          number: "02",
          title: "Structure & Content",
          description: "We plan your pages, write the content, and map out the wireframes.",
          deliverables: ["Sitemap Creation", "Content Strategy", "Wireframes", "UX Planning"]
        },
        {
          number: "03",
          title: "Design & Development",
          description: "We build your site cleanly, responsively, and ready to scale.",
          deliverables: ["Custom Development", "Responsive Design", "Integrations", "Performance Tuning"]
        },
        {
          number: "04",
          title: "Testing & QA",
          description: "We test speed, design, SEO, and mobile experience across all devices.",
          deliverables: ["Browser Testing", "Mobile Checks", "Speed Tests", "Functionality Checks"]
        },
        {
          number: "05",
          title: "Launch & Support",
          description: "We go live, track the results, and stay available for technical support and updates.",
          deliverables: ["Site Deployment", "Analytics Setup", "Post-Launch Support", "Ongoing Monitoring"]
        }
      ],
      deliverableTitle: "DELIVERABLES"
    },
    de: {
      title: "Unser Webdesign-Prozess – vom Konzept zum visuellen Erlebnis",
      subtitle: "Wenn die Strategie steht, gestalten wir das visuelle Erscheinungsbild Ihrer Website. Dabei legen wir großen Wert auf eine klare, ansprechende Optik, die Ihre Marke stärkt und Ihre Besucher überzeugt – mobil und auf allen Geräten.",
      steps: [
        {
          number: "01",
          title: "Übergabe des Konzepts",
          description: "Wir übernehmen alle strategischen Grundlagen: Sitemap, Content-Strategie, Nutzerführung.",
          deliverables: ["Sitemap-Analyse", "Content-Strategie-Review", "Nutzerführung-Konzept", "Zielgruppen-Definition"]
        },
        {
          number: "02",
          title: "Moodboard & Designrichtung",
          description: "Gemeinsam definieren wir Farbwelt, Typografie und das visuelle Grundgerüst.",
          deliverables: ["Moodboard-Erstellung", "Farbpalette-Definition", "Typografie-Auswahl", "Visueller Stil-Guide"]
        },
        {
          number: "03",
          title: "Screendesign & Farbwelt",
          description: "Wir entwickeln die visuelle Sprache Ihrer Website – passend zu Ihrer Marke.",
          deliverables: ["Hauptseiten-Design", "Farbschema-Anwendung", "UI-Elemente-Design", "Marken-Integration"]
        },
        {
          number: "04",
          title: "Responsive Design",
          description: "Wir stellen sicher, dass Ihre Website auf allen Geräten perfekt aussieht.",
          deliverables: ["Mobile-Design", "Tablet-Optimierung", "Desktop-Varianten", "Cross-Device-Tests"]
        },
        {
          number: "05",
          title: "Design-Feinschliff & Animationen",
          description: "Wir optimieren Details, Buttons und Interaktionen für eine moderne User Experience.",
          deliverables: ["Micro-Interactions", "Button-Animationen", "Hover-Effekte", "UX-Verbesserungen"]
        },
        {
          number: "06",
          title: "Design-Abnahme & Übergabe",
          description: "Sie erhalten alle Design-Assets (z. B. Figma-Prototypen) für die technische Umsetzung.",
          deliverables: ["Figma-Prototyp", "Design-Assets", "Style-Guide", "Entwickler-Handoff"]
        }
      ],
      deliverableTitle: "WAS WIR LIEFERN"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {t.subtitle}
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {t.steps.map((step, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-[28.5%]">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-brand-heading mb-2">{step.title}</h3>
                        <p className="text-brand-text text-sm mb-5">{step.description}</p>
                        
                        <div className="border-t border-brand-backgroundAlt pt-4 mt-auto">
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
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WebDesignProcess;
