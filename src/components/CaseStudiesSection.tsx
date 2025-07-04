import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const caseStudiesData = {
  en: [
    {
      client: "KLAIBER",
      industry: "Tax & Business Consulting",
      headline: "Comprehensive website relaunch for increased visibility and modern brand presence",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png",
      quote: "Our new website finally represents what defines us as consultants: clarity, trust, and dynamism. The collaboration with ooliv was structured and goal-oriented.",
      websiteLink: "www.kl-klaiber.de",
      impact: [
        "Strategic repositioning including wireframes and content",
        "Text development for services and locations",
        "Custom web design with clear visual language",
        "WordPress implementation with SEO basics"
      ],
      image: "/lovable-uploads/8ef26bfc-1352-4dc8-ad43-46bdcc7f171f.png",
    },
    {
      client: "COBUS Industries",
      industry: "Global Airport Bus Manufacturer",
      headline: "Strategic website relaunch for increased visibility and modern user experience",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png",
      quote: "Our new website combines technology, service and brand aspiration. The collaboration with ooliv was structured, creative and goal-oriented - fitting our standards as a global market leader.",
      websiteLink: "www.cobus-industries.de",
      impact: [
        "Concept and content for international product communication",
        "UX-oriented web design for technology and service",
        "WordPress implementation with customized structure",
        "SEO & video for market leader visibility"
      ],
      image: "/lovable-uploads/f7ec3d1a-2f4b-400b-91d8-213e1c774935.png",
    },
    {
      client: "SPEZ AG",
      industry: "Specialist for Tree Removal, Crane Work and Green Maintenance",
      headline: "Market launch with holistic strategy - from initial idea to high-performance website",
      logo: "/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png",
      quote: "With ooliv, we were able to make SPEZ visible. The new brand convinces both technically and emotionally - and has been consistently generating qualified inquiries since the launch.",
      websiteLink: "www.spez-ag.ch",
      impact: [
        "Brand development incl. logo, design and tonality",
        "Structure & content for web presence and services",
        "WordPress launch with local SEO & SEM",
        "Quick top ranking for main keyword in Zurich"
      ],
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.png",
    },
    {
      client: "IconPro GmbH",
      industry: "AI Software for Predictive Quality & Smart Production",
      headline: "Website relaunch with strong brand presentation for complex B2B tech solutions",
      logo: "/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png",
      quote: "Thanks to ooliv, our website now feels just like our software: thoughtful, structured, and visually compelling. The illustrations and animations in particular bring complex topics to the point.",
      websiteLink: "www.iconpro.com",
      impact: [
        "Relaunch concept including structure, wireframes & text",
        "UX-oriented design for AI software & use cases",
        "Development of illustrative assets & animated modules",
        "WordPress implementation with optimized performance"
      ],
      image: "/lovable-uploads/5f09a7f9-6e7f-4a8e-b087-d2d250bc591e.png",
    },
    {
      client: "Quartier Am Kliff",
      industry: "Beachfront Condominiums on Rügen",
      headline: "Market launch of a real estate brand - from logo to landing page",
      logo: "/lovable-uploads/aeb4a03d-670d-4abf-841c-f958a8f9ac2e.png",
      quote: "With ooliv, we have created a project that convincingly showcases our architecture, location, and vision digitally. The site actively supports us in sales - at all levels.",
      websiteLink: "www.amkliff.de",
      impact: [
        "Digital brand development incl. logo, CI & naming",
        "Concept, text and design of the sales landing page",
        "Implementation as a high-performance HTML page (without CMS)",
        "Image editing & construction signs for project communication"
      ],
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png",
    }
  ],
  de: [
    {
      client: "KLAIBER",
      industry: "Steuerberatung & Unternehmensberatung",
      headline: "Ganzheitlicher Website-Relaunch für mehr Sichtbarkeit und eine moderne Markenpräsenz",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png",
      quote: "Unsere neue Website repräsentiert endlich, was uns als Beratung ausmacht: Klarheit, Vertrauen und Dynamik. Die Zusammenarbeit mit ooliv war strukturiert und zielführend.",
      websiteLink: "www.kl-klaiber.de",
      impact: [
        "Strategische Neuausrichtung inklusive Wireframes und Content",
        "Textentwicklung für Leistungen und Standorte",
        "Individuelles Webdesign mit klarer Bildsprache",
        "WordPress-Umsetzung mit SEO-Basics"
      ],
      image: "/lovable-uploads/8ef26bfc-1352-4dc8-ad43-46bdcc7f171f.png",
    },
    {
      client: "COBUS Industries",
      industry: "Weltmarktführer für Flughafenbusse",
      headline: "Strategischer Website-Relaunch für mehr Sichtbarkeit und ein modernes Nutzererlebnis",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png",
      quote: "Unsere neue Website verbindet Technik, Service und Markenanspruch. Die Zusammenarbeit mit ooliv war strukturiert, kreativ und zielorientiert – passend zu unserem Anspruch als globaler Marktführer.",
      websiteLink: "www.cobus-industries.de",
      impact: [
        "Konzeption und Content für internationale Produktkommunikation",
        "UX-orientiertes Webdesign für Technik und Service",
        "WordPress-Umsetzung mit maßgeschneiderter Struktur",
        "SEO & Video zur Sichtbarkeit als Marktführer"
      ],
      image: "/lovable-uploads/f7ec3d1a-2f4b-400b-91d8-213e1c774935.png",
    },
    {
      client: "SPEZ AG",
      industry: "Spezialist für Baumfällung, Kranarbeiten und Grünpflege",
      headline: "Markteinführung mit ganzheitlicher Strategie – von der ersten Idee zur performanten Website",
      logo: "/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png",
      quote: "Mit ooliv konnten wir SPEZ sichtbar machen. Die neue Marke überzeugt technisch und emotional – und generiert seit dem Launch konstant qualifizierte Anfragen.",
      websiteLink: "www.spez-ag.ch",
      impact: [
        "Markenentwicklung incl. Logo, Design und Tonalität",
        "Struktur & Inhalte für Webauftritt und Leistungen",
        "WordPress-Launch mit lokalem SEO & SEM",
        "Schnell Top-Ranking für Hauptkeyword in Zürich"
      ],
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.png",
    },
    {
      client: "IconPro GmbH",
      industry: "KI-Software für Predictive Quality & Smart Production",
      headline: "Website-Relaunch mit starker Markeninszenierung für erklärungsbedürftige B2B-Techlösungen",
      logo: "/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png",
      quote: "Dank ooliv wirkt unsere Website jetzt genauso wie unsere Software: durchdacht, strukturiert und visuell überzeugend. Besonders Illustrationen und Animationen bringen komplexe Themen auf den Punkt.",
      websiteLink: "www.iconpro.com",
      impact: [
        "Relaunch-Konzeption inkl. Struktur, Wireframes & Text",
        "UX-orientiertes Design für KI-Software & Use Cases",
        "Entwicklung illustrativer Assets & animierter Module",
        "WordPress-Umsetzung mit optimierter Performance"
      ],
      image: "/lovable-uploads/5f09a7f9-6e7f-4a8e-b087-d2d250bc591e.png",
    },
    {
      client: "Quartier Am Kliff",
      industry: "Strandnahe Eigentumswohnungen auf Rügen",
      headline: "Markteinführung einer Immobilienmarke – von Logo bis Landingpage",
      logo: "/lovable-uploads/aeb4a03d-670d-4abf-841c-f958a8f9ac2e.png",
      quote: "Mit ooliv haben wir ein Projekt geschaffen, das unsere Architektur, Lage und Vision überzeugend digital inszeniert. Die Seite unterstützt uns aktiv im Vertrieb – auf allen Ebenen.",
      websiteLink: "www.amkliff.de",
      impact: [
        "Digitale Markenentwicklung incl. Logo, CI & Naming",
        "Konzept, Text und Design der Verkaufs-Landingpage",
        "Umsetzung als performante HTML-Seite (ohne CMS)",
        "Bildbearbeitung & Bauschilder für die Projektkommunikation"
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
  en: {
    title: "Real Results from Real Clients",
    subtitle: "We deliver websites and strategies that highlight what makes your business special.",
    bodyText: "See how we've helped businesses achieve sustainable growth through clear positioning, strong content, SEO performance, and measurable UX optimization.",
    ctaText: "What results can we achieve for your business?",
    startProject: "Start Your Project",
    exploreWebsite: "Explore website →"
  },
  de: {
    title: "Echte Ergebnisse von echten Kunden",
    subtitle: "Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht.",
    bodyText: "Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben.",
    ctaText: "Welche Ergebnisse dürfen wir für Ihr Unternehmen erreichen?",
    startProject: "Projekt starten",
    exploreWebsite: "Website live erleben →"
  }
};

const CaseStudiesSection = ({ 
  customTitle,
  customSubtitle,
  customBodyText,
  hideHeaderText = false
}: CaseStudiesSectionProps) => {
  const { language } = useLanguage();
  const cases = language === 'de' ? caseStudiesData.de : caseStudiesData.en;
  
  const t = language === 'de' ? defaultTranslations.de : defaultTranslations.en;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeaderText && (
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-6" style={{ lineHeight: '1.3' }}>
                {customTitle || t.title}
              </h2>
              <p className="text-lg md:text-xl text-medico-darkGreen max-w-3xl mx-auto mb-4" style={{ lineHeight: '1.6' }}>
                {customSubtitle || t.subtitle}
              </p>
              <p className="text-base md:text-lg text-medico-darkGreen max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
                {customBodyText || t.bodyText}
              </p>
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
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
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
                      <h3 className="text-xl md:text-2xl font-bold text-medico-darkGreen">{study.client}</h3>
                      <p className="text-sm md:text-base text-medico-darkGreen/70">{study.industry}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-base md:text-lg font-medium mb-6 text-medico-darkGreen" style={{ lineHeight: '1.5' }}>
                    {study.headline}
                  </h4>
                  
                  <blockquote className="italic text-medico-darkGreen/80 text-sm md:text-base border-l-4 border-medico-turquoise pl-4 my-6" style={{ lineHeight: '1.6' }}>
                    "{study.quote}"
                  </blockquote>
                  
                  {study.websiteLink && (
                    <div className="mb-6">
                      <a 
                        href={`https://${study.websiteLink}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-medico-turquoise hover:underline inline-flex items-center text-sm md:text-base font-medium"
                      >
                        {t.exploreWebsite} {study.websiteLink}
                      </a>
                    </div>
                  )}
                  
                  <StaggerReveal className="space-y-3 mb-6" stagger={0.05}>
                    {study.impact.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 text-medico-turquoise">
                          <Check className="h-4 w-4 md:h-5 md:w-5" />
                        </div>
                        <p className="text-sm md:text-base text-medico-darkGreen/80" style={{ lineHeight: '1.5' }}>{point}</p>
                      </div>
                    ))}
                  </StaggerReveal>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
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
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-medico-darkGreen mb-8" style={{ lineHeight: '1.4' }}>
              {t.ctaText}
            </h3>
            
            <Button 
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
              onClick={() => {
                window.dispatchEvent(new Event('open-lead-form'));
              }}
            >
              {t.startProject}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
