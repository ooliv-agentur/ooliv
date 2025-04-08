import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        "Conceptual realignment including wireframing and content creation",
        "Text development for all service areas and location pages",
        "Custom web design with clear structure and image-rich communication",
        "Technical implementation as WordPress website with SEO basics",
        "Production of image and video material for emotional brand staging"
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
        "Conceptual realignment including wireframing and content creation",
        "Text development for business divisions, product lines and international audiences",
        "High-quality web design focusing on user guidance, technology and brand image",
        "WordPress development based on a customized technical structure",
        "SEO optimization for international visibility and B2B reach",
        "Image and video production to visually strengthen global market leadership"
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
        "Development of logo, corporate design and brand presence for digital market entry",
        "Structure, wireframes and textual elaboration of all content and service areas",
        "Custom web design with clear imagery and focus on trust, technology and nature",
        "Implementation of the entire website with WordPress including responsive performance",
        "SEO optimization for local keywords and Google Ads campaigns for lead generation",
        "Rank 1 for the main keyword in a short time - significantly ahead of all regional competitors"
      ],
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.png",
    },
    {
      client: "COBUS",
      industry: "ERP & IT Solutions",
      headline: "Lead generation improved by 80% with a new website & conversion strategy",
      logo: "/placeholder.svg",
      quote: "Professional, strategic, and results-driven. They understood exactly what our business needed.",
      impact: [
        "80% more leads through targeted conversion strategy",
        "3x website traffic with improved visibility and content",
        "40% lower bounce rate with enhanced user experience"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: {
        name: "Thomas Weber",
        position: "CEO, COBUS"
      }
    },
    {
      client: "Weisenburger",
      industry: "Construction & Real Estate",
      headline: "Seamless CRM integration & scalable web infrastructure",
      logo: "/placeholder.svg",
      quote: "A game-changer for our online presence. More leads, better conversions, and seamless collaboration.",
      impact: [
        "95% faster load time with optimized architecture",
        "60% more inquiries through improved user journey",
        "4.9/5 user satisfaction with new digital experience"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: {
        name: "Julia Müller",
        position: "Digital Manager, Weisenburger"
      }
    },
    {
      client: "PopBird",
      industry: "E-Commerce & Retail",
      headline: "35% sales increase in 6 months through emotional storytelling",
      logo: "/placeholder.svg",
      quote: "Working with ooliv completely transformed our online presence. Our customers now have a seamless experience from discovery to purchase.",
      impact: [
        "35% sales growth through emotional storytelling approach",
        "42% increase in average order value with improved UX",
        "60% higher customer retention with personalized email workflows"
      ],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      author: {
        name: "Sarah Johnson",
        position: "Marketing Lead, PopBird"
      }
    },
    {
      client: "GreenTech",
      industry: "Renewable Energy",
      headline: "200+ qualified leads per month with targeted SEO & content strategy",
      logo: "/placeholder.svg",
      quote: "The results exceeded our expectations. Our web presence now truly reflects our brand values and converts visitors efficiently.",
      impact: [
        "200+ qualified leads per month with targeted strategy",
        "First page Google rankings for 30+ industry keywords",
        "68% reduction in cost per acquisition through organic channels"
      ],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      author: {
        name: "Daniel Krause",
        position: "Growth Director, GreenTech"
      }
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
        "Konzeptionelle Neuausrichtung inklusive Wireframing und Content-Erstellung",
        "Textentwicklung für alle Leistungsbereiche und Standortseiten",
        "Individuelles Webdesign mit klarer Struktur und bildstarker Kommunikation",
        "Technische Umsetzung als WordPress-Website mit SEO-Basics",
        "Produktion von Bild- und Videomaterial zur emotionalen Markeninszenierung"
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
        "Konzeptionelle Neuausrichtung inklusive Wireframing und Content-Erstellung",
        "Textentwicklung für Unternehmensbereiche, Produktlinien und internationale Zielgruppen",
        "Hochwertiges Webdesign mit Fokus auf Nutzerführung, Technik und Markenimage",
        "WordPress-Entwicklung auf Basis einer individuellen technischen Struktur",
        "SEO-Optimierung für internationale Sichtbarkeit und B2B-Reichweite",
        "Bild- und Videoproduktion zur visuellen Stärkung der globalen Marktführerschaft"
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
        "Entwicklung von Logo, Corporate Design und Markenauftritt für den digitalen Markteintritt",
        "Struktur, Wireframes und textliche Ausarbeitung aller Inhalte und Leistungsbereiche",
        "Individuelles Webdesign mit klarer Bildsprache und Fokus auf Vertrauen, Technik und Natur",
        "Umsetzung der gesamten Website mit WordPress inklusive responsiver Performance",
        "SEO-Optimierung auf lokale Keywords und Google Ads Kampagnen zur Lead-Generierung",
        "Nach kurzer Zeit Platz 1 für das Hauptkeyword – deutlich vor allen regionalen Mitbewerbern"
      ],
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.png",
    },
    {
      client: "COBUS",
      industry: "ERP & IT-Lösungen",
      headline: "Lead-Generierung um 80% verbessert mit neuer Website & Konversionsstrategie",
      logo: "/placeholder.svg",
      quote: "Professionell, strategisch und ergebnisorientiert. Sie haben genau verstanden, was unser Unternehmen braucht.",
      impact: [
        "80% mehr Leads durch gezielte Konversionsstrategie",
        "3x Website-Traffic mit verbesserter Sichtbarkeit und Inhalten",
        "40% niedrigere Absprungrate mit verbesserter Benutzererfahrung"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: {
        name: "Thomas Weber",
        position: "CEO, COBUS"
      }
    },
    {
      client: "Weisenburger",
      industry: "Bau & Immobilien",
      headline: "Nahtlose CRM-Integration & skalierbare Web-Infrastruktur",
      logo: "/placeholder.svg",
      quote: "Ein Game-Changer für unsere Online-Präsenz. Mehr Leads, bessere Conversions und nahtlose Zusammenarbeit.",
      impact: [
        "95% schnellere Ladezeit mit optimierter Architektur",
        "60% mehr Anfragen durch verbesserte Benutzerführung",
        "4,9/5 Nutzerzufriedenheit mit neuer digitaler Erfahrung"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: {
        name: "Julia Müller",
        position: "Digital Manager, Weisenburger"
      }
    },
    {
      client: "PopBird",
      industry: "E-Commerce & Einzelhandel",
      headline: "35% Umsatzsteigerung in 6 Monaten durch emotionales Storytelling",
      logo: "/placeholder.svg",
      quote: "Die Zusammenarbeit mit ooliv hat unsere Online-Präsenz komplett transformiert. Unsere Kunden haben jetzt ein nahtloses Erlebnis von der Entdeckung bis zum Kauf.",
      impact: [
        "35% Umsatzwachstum durch emotionalen Storytelling-Ansatz",
        "42% Steigerung des durchschnittlichen Bestellwerts mit verbesserter UX",
        "60% höhere Kundenbindung mit personalisierten E-Mail-Workflows"
      ],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      author: {
        name: "Sarah Johnson",
        position: "Marketing Lead, PopBird"
      }
    },
    {
      client: "GreenTech",
      industry: "Erneuerbare Energien",
      headline: "200+ qualifizierte Leads pro Monat mit gezielter SEO & Content-Strategie",
      logo: "/placeholder.svg",
      quote: "Die Ergebnisse haben unsere Erwartungen übertroffen. Unsere Webpräsenz spiegelt nun wirklich unsere Markenwerte wider und konvertiert Besucher effizient.",
      impact: [
        "200+ qualifizierte Leads pro Monat mit gezielter Strategie",
        "Erste Seite Google-Rankings für 30+ Branchenkeywords",
        "68% Reduzierung der Akquisitionskosten durch organische Kanäle"
      ],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      author: {
        name: "Daniel Krause",
        position: "Growth Director, GreenTech"
      }
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
    startProject: "Start Your Project"
  },
  de: {
    title: "Echte Ergebnisse von echten Kunden",
    subtitle: "Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht.",
    bodyText: "Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben.",
    ctaText: "Welche Ergebnisse dürfen wir für Ihr Unternehmen erreichen?",
    startProject: "Projekt starten"
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
    <section className="py-20 bg-gradient-to-br from-brand-background to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeaderText && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              {customTitle || t.title}
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-4">
              {customSubtitle || t.subtitle}
            </p>
            <p className="text-lg text-brand-text max-w-3xl mx-auto">
              {customBodyText || t.bodyText}
            </p>
          </div>
        )}
        
        <div className="space-y-20">
          {cases.map((study, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={study.logo} 
                        alt={`${study.client} logo`} 
                        className="h-10 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">{study.client}</h3>
                      <p className="text-sm text-gray-500">{study.industry}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    {study.headline}
                  </h4>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "{study.quote}"
                  </blockquote>
                  
                  {study.websiteLink && (
                    <div className="mb-6">
                      <a 
                        href={`https://${study.websiteLink}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:underline inline-flex items-center"
                      >
                        Website live erleben → {study.websiteLink}
                      </a>
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    {study.impact.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 text-brand-primary">
                          <Check className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-gray-600">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  {study.author && (
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                      <div className="mr-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {study.author.name.split(' ').map(part => part.charAt(0)).join('')}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{study.author.name}</p>
                        <p className="text-xs text-gray-500">{study.author.position}</p>
                      </div>
                    </div>
                  )}
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
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-medium text-brand-heading mb-8">
            {t.ctaText}
          </h3>
          
          <Button size="lg" className="group" asChild>
            <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
              {t.startProject}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
