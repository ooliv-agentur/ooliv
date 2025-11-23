import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const caseStudiesData = {
  de: [
    {
      client: "KLAIBER",
      industry: "Steuerberatung",
      headline: "Strategische Neupositionierung für mehr Sichtbarkeit und Vertrauen",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png",
      quote: "Unsere neue Website repräsentiert endlich, was uns als Beratung ausmacht: Klarheit, Vertrauen und Dynamik. Die Zusammenarbeit mit ooliv war strukturiert und zielführend.",
      websiteLink: "www.kl-klaiber.de",
      keyMetric: "+92 % mehr Sichtbarkeit",
      impact: [
        "Strategische Neuausrichtung",
        "Wireframes & Informationsarchitektur",
        "Modernes Design mit Vertrauen als Kernwert",
        "WordPress + SEO-Optimierung"
      ],
      image: "/lovable-uploads/8ef26bfc-1352-4dc8-ad43-46bdcc7f171f.webp",
    },
    {
      client: "COBUS Industries",
      industry: "Industrie",
      headline: "Strukturierte UX für Technik, Service und internationales Publikum",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png",
      quote: "Unsere neue Website verbindet Technik, Service und Markenanspruch. Die Zusammenarbeit mit ooliv war strukturiert, kreativ und zielorientiert – passend zu unserem Anspruch als globaler Marktführer.",
      websiteLink: "www.cobus-industries.de",
      keyMetric: "+160 % mehr Interaktionen",
      impact: [
        "Komplette UX-Konzeption",
        "Struktur für Technik, Produkt & Service",
        "Internationales B2B-Publikum",
        "SEO + Video zur Markenstärkung"
      ],
      image: "/lovable-uploads/f7ec3d1a-2f4b-400b-91d8-213e1c774935.png",
    },
    {
      client: "SPEZ AG",
      industry: "Handwerk",
      headline: "Ganzheitliche Markenentwicklung, die konstant qualifizierte Anfragen generiert",
      logo: "/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png",
      quote: "Mit ooliv konnten wir SPEZ sichtbar machen. Die neue Marke überzeugt technisch und emotional – und generiert seit dem Launch konstant qualifizierte Anfragen.",
      websiteLink: "www.spez-ag.ch",
      keyMetric: "+300 % qualifizierte Anfragen",
      impact: [
        "Markenentwicklung inkl. Logo & CI",
        "Struktur, Inhalte, Design",
        "SEO + SEM für lokalen Markt",
        "Performance-optimierte WordPress-Seite"
      ],
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.webp",
    },
    {
      client: "IconPro GmbH",
      industry: "KI-Software",
      headline: "Komplexe KI-Software klar und visuell verständlich dargestellt",
      logo: "/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png",
      quote: "Dank ooliv wirkt unsere Website jetzt genauso wie unsere Software: durchdacht, strukturiert und visuell überzeugend. Besonders Illustrationen und Animationen bringen komplexe Themen auf den Punkt.",
      websiteLink: "www.iconpro.com",
      keyMetric: "+45 % höheres Engagement",
      impact: [
        "Strukturierte Use-Cases",
        "Illustrationen & Animationen",
        "UX für komplexe Software",
        "WordPress mit optimierter Performance"
      ],
      image: "/lovable-uploads/5f09a7f9-6e7f-4a8e-b087-d2d250bc591e.webp",
    },
    {
      client: "Quartier Am Kliff",
      industry: "Immobilien",
      headline: "Digitale Markteinführung, die aktiv im Vertrieb unterstützt",
      logo: "/lovable-uploads/aeb4a03d-670d-4abf-841c-f958a8f9ac2e.png",
      quote: "Mit ooliv haben wir ein Projekt geschaffen, das unsere Architektur, Lage und Vision überzeugend digital inszeniert. Die Seite unterstützt uns aktiv im Vertrieb – auf allen Ebenen.",
      websiteLink: "www.amkliff.de",
      keyMetric: "+40 % bessere Conversionrate",
      impact: [
        "Markenentwicklung: Logo, CI & Naming",
        "Konzept & Design der Verkaufs-Landingpage",
        "Performante HTML-Umsetzung",
        "Bildbearbeitung & Projektkommunikation"
      ],
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png",
    }
  ]
};

interface CaseStudiesSectionProps {
  customTitle?: string;
  customSubtitle?: string;
  customBodyText?: string;
  hideHeaderText?: boolean;
}

const defaultTranslations = {
  title: "Projekte, die Wirkung zeigen.",
  subtitle: "Starke Marken. Klare Struktur. Messbare Ergebnisse.",
  bodyText: "",
  ctaText: "Welche Ergebnisse dürfen wir für Ihr Unternehmen erreichen?",
  startProject: "Projekt starten",
  exploreWebsite: "Website live erleben →"
};

const CaseStudiesSection = ({ 
  customTitle,
  customSubtitle,
  customBodyText,
  hideHeaderText = false
}: CaseStudiesSectionProps) => {
  const cases = caseStudiesData.de;
  const t = defaultTranslations;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeaderText && (
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-6 leading-tight">
                {customTitle || t.title}
              </h2>
              <p className="text-lg md:text-xl text-teal max-w-3xl mx-auto mb-4 font-medium leading-relaxed">
                {customSubtitle || t.subtitle}
              </p>
              {(customBodyText || t.bodyText) && (
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
                  {customBodyText || t.bodyText}
                </p>
              )}
            </div>
          </Reveal>
        )}
        
        <StaggerReveal className="space-y-20" stagger={0.15}>
          {cases.map((study, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-[#F4F7F7] rounded-[20px] p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4 w-16 h-10">
                      <AspectRatio ratio={16/10} className="h-full">
                        <img 
                          src={study.logo} 
                          alt={`${study.client} logo`} 
                          className="h-full w-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary-text">{study.client}</h3>
                      <p className="text-sm md:text-base text-muted-foreground font-normal">{study.industry}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-base md:text-lg font-medium mb-6 text-primary-text leading-relaxed">
                    {study.headline}
                  </h4>
                  
                  <blockquote className="italic text-muted-foreground text-sm md:text-base border-l-4 border-teal pl-4 my-6 font-normal leading-relaxed">
                    "{study.quote}"
                  </blockquote>
                  
                   {study.websiteLink && (
                    <div className="mb-6">
                      <a 
                        href={`https://${study.websiteLink}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-teal/10 text-teal hover:bg-teal/20 rounded-lg font-medium text-sm transition-colors"
                      >
                        Website ansehen
                      </a>
                    </div>
                  )}
                  
                  <StaggerReveal className="space-y-3 mb-6" stagger={0.05}>
                    {study.impact.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 text-teal">
                          <Check className="h-5 w-5" />
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </StaggerReveal>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-[20px] overflow-hidden border border-gray-100">
                  <img 
                    src={study.image} 
                    alt={`${study.client} case study`} 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
        
        <Reveal delay={0.2}>
          <div className="mt-24 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-text mb-8 leading-tight">
              {t.ctaText}
            </h3>
            
            <Button 
              variant="primary"
              size="lg" 
              className="group" 
              onClick={() => {
                window.dispatchEvent(new Event('open-lead-form'));
              }}
            >
              {t.startProject}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
