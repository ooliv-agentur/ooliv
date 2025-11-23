import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, H3, H4, Paragraph, LargeParagraph } from '@/components/ui/typography';

export const caseStudiesData = {
  de: [
    {
      client: "KLAIBER",
      industry: "Steuerberatung",
      seoTitle: "Case Study: KLAIBER – B2B Webdesign & Markenstrategie",
      seoTag: "+92% Sichtbarkeit",
      shortDescription: "Neupositionierung & digitale Lead-Architektur für eine Beratung.",
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
      seoTitle: "Case Study: COBUS Industries – UX-Redesign & internationale B2B-Struktur",
      seoTag: "+160% Interaktionen",
      shortDescription: "Komplette UX-Neustrukturierung für globalen Marktführer.",
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
      seoTitle: "Case Study: SPEZ – Markenentwicklung & lokale Lead-Automation",
      seoTag: "+300% qualifizierte Anfragen",
      shortDescription: "Ganzheitliche Markenentwicklung mit SEO & SEM für lokalen Markt.",
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
      seoTitle: "Case Study: IconPro – KI-Software UX & AI-Visualisierung",
      seoTag: "+45% Engagement",
      shortDescription: "Komplexe KI-Software visuell und strukturiert dargestellt.",
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
      seoTitle: "Case Study: Quartier am Kliff – Immobilienmarke & Conversion-Landingpage",
      seoTag: "+40% Conversionrate",
      shortDescription: "Digitale Markteinführung mit Fokus auf Vertriebsunterstützung.",
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
    <Section id="case-studies" spacing="large" background="white" className="overflow-hidden">
      <Container size="default">
        {!hideHeaderText && (
          <Reveal>
            <div className="text-center mb-16">
              <H2 className="text-[#0A0A0A] mb-6" alignment="center">
                {customTitle || t.title}
              </H2>
              <LargeParagraph className="text-[#0BC3C3] max-w-3xl mx-auto mb-4 font-medium" alignment="center">
                {customSubtitle || t.subtitle}
              </LargeParagraph>
              {(customBodyText || t.bodyText) && (
                <Paragraph className="text-[#555555] max-w-3xl mx-auto" alignment="center">
                  {customBodyText || t.bodyText}
                </Paragraph>
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
                <div className="bg-[#F5F7F7] rounded-[20px] p-4 sm:p-6 lg:p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4 w-16 h-10">
                      <AspectRatio ratio={16/10} className="h-full">
                        <img 
                          src={study.logo} 
                          alt={`${study.client} Logo – ${study.seoTitle}`} 
                          className="h-full w-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#0BC3C3]/10 text-[#0BC3C3] text-xs font-medium rounded-full mb-2">
                        {study.seoTag}
                      </span>
                      <p className="text-sm md:text-base text-[#555555] font-normal">{study.industry}</p>
                    </div>
                  </div>
                  
                  <H3 className="text-[#0A0A0A] mb-3">
                    {study.seoTitle}
                  </H3>
                  
                  <Paragraph className="text-[#555555] mb-4">
                    {study.shortDescription}
                  </Paragraph>
                  
                  <H4 className="mb-6 text-[#0A0A0A]">
                    {study.headline}
                  </H4>
                  
                  <blockquote className="italic text-[#555555] text-sm md:text-base border-l-4 border-[#0BC3C3] pl-4 my-6 font-normal leading-relaxed">
                    "{study.quote}"
                  </blockquote>
                  
                   {study.websiteLink && (
                    <div className="mb-6">
                      <a 
                        href={`https://${study.websiteLink}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#0BC3C3]/10 text-[#0BC3C3] hover:bg-[#0BC3C3]/20 rounded-lg font-medium text-sm transition-colors"
                      >
                        Website ansehen
                      </a>
                    </div>
                  )}
                  
                  <StaggerReveal className="space-y-3 mb-6" stagger={0.05}>
                    {study.impact.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 text-[#0BC3C3]">
                          <Check className="h-5 w-5" />
                        </div>
                        <p className="text-sm md:text-base text-[#555555] font-normal leading-relaxed">{point}</p>
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
            <H3 className="text-[#0A0A0A] mb-8" alignment="center">
              {t.ctaText}
            </H3>
            
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
      </Container>
    </Section>
  );
};

export default CaseStudiesSection;
