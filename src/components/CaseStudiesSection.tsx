import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const transformationsData = {
  de: [
    {
      client: "KLAIBER",
      industry: "Steuerberatung & Unternehmensberatung",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png",
      challenge: "Fragmentierte digitale Präsenz ohne strategische Positionierung. Keine klare Value Proposition für gehobene B2B-Klientel. Veraltete Website ohne moderne UX-Standards.",
      approach: [
        "Strategic Discovery & Stakeholder Alignment",
        "UX Strategy mit Wireframes und Information Architecture",
        "Content Strategy für Leistungen und Standorte",
        "WordPress Implementation mit SEO Foundation"
      ],
      outcomes: [
        { metric: "+180%", label: "Lead Quality" },
        { metric: "8 Wochen", label: "Strategy to Launch" },
        { metric: "Top 3", label: "Google Rankings" }
      ],
      quote: "Die strategische Neuausrichtung hat unsere digitale Präsenz transformiert. ooliv hat nicht nur eine Website gebaut, sondern unsere Positionierung strategisch neu definiert.",
      websiteLink: "www.kl-klaiber.de",
      image: "/lovable-uploads/8ef26bfc-1352-4dc8-ad43-46bdcc7f171f.webp",
    },
    {
      client: "COBUS Industries",
      industry: "Weltmarktführer für Flughafenbusse",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png",
      challenge: "Komplexe internationale Produktkommunikation ohne klare digitale Strategie. Technische Inhalte schwer zugänglich. Marktführerposition digital nicht sichtbar.",
      approach: [
        "International Content Strategy & IA Development",
        "Technical UX Design für komplexe Produktwelten",
        "Maßgeschneiderte WordPress-Architektur",
        "SEO & Video-Integration für globale Sichtbarkeit"
      ],
      outcomes: [
        { metric: "+240%", label: "International Traffic" },
        { metric: "-40%", label: "Bounce Rate" },
        { metric: "6 Sprachen", label: "Seamless UX" }
      ],
      quote: "Die strategische Transformation unserer digitalen Präsenz hat unsere Position als Weltmarktführer endlich auch online sichtbar gemacht.",
      websiteLink: "www.cobus-industries.de",
      image: "/lovable-uploads/f7ec3d1a-2f4b-400b-91d8-213e1c774935.png",
    },
    {
      client: "IconPro GmbH",
      industry: "KI-Software für Predictive Quality",
      logo: "/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png",
      challenge: "Erklärungsbedürftige B2B-Tech-Lösung ohne klare strategische Kommunikation. Komplexe AI/ML-Technologie schwer verständlich. Keine visuelle Differenzierung im Markt.",
      approach: [
        "Strategic Content Architecture für Tech-Audience",
        "Visual Strategy mit Custom Illustrations & Animations",
        "UX Design für komplexe Software-Erklärung",
        "Performance-optimierte WordPress Implementation"
      ],
      outcomes: [
        { metric: "+320%", label: "Demo Requests" },
        { metric: "95/100", label: "Lighthouse Score" },
        { metric: "-60%", label: "Explanation Time" }
      ],
      quote: "ooliv hat unsere komplexe AI-Technologie strategisch so kommuniziert, dass sie sofort verständlich ist – ohne die technische Tiefe zu verlieren.",
      websiteLink: "www.iconpro.com",
      image: "/lovable-uploads/5f09a7f9-6e7f-4a8e-b087-d2d250bc591e.webp",
    },
    {
      client: "SPEZ AG",
      industry: "Baumfällung & Kranarbeiten Schweiz",
      logo: "/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png",
      challenge: "Markteinführung ohne digitale Präsenz. Keine Brand Identity. Starke lokale Konkurrenz in Zürich ohne strategische Differenzierung.",
      approach: [
        "Brand Strategy & Visual Identity Development",
        "Local SEO Strategy für Zürich-Region",
        "Content Strategy für Service-Kommunikation",
        "WordPress Launch mit SEM Integration"
      ],
      outcomes: [
        { metric: "#1", label: "Google Zürich (Hauptkeyword)" },
        { metric: "+450%", label: "Qualified Leads" },
        { metric: "4 Wochen", label: "Brand to Launch" }
      ],
      quote: "Von null auf Marktführer in Zürich – die strategische Markteinführung durch ooliv hat SPEZ digital positioniert und konstante Anfragen generiert.",
      websiteLink: "www.spez-ag.ch",
      image: "/lovable-uploads/aa4b94fd-917b-458f-bbad-7e593011a6a3.webp",
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
  title: "Transformationen, die wir geleitet haben",
  subtitle: "Strategische Digital-Projekte mit messbaren Business-Outcomes",
  bodyText: "Von der Strategic Challenge über strukturierte Umsetzung bis zu messbaren Ergebnissen – End-to-End Digital Transformation für B2B-Unternehmen.",
  ctaText: "Welche Transformation dürfen wir für Ihr Unternehmen leiten?",
  startProject: "Strategiegespräch vereinbaren",
  challenge: "Strategic Challenge",
  approach: "Strategic Approach",
  outcomes: "Measurable Outcomes",
  exploreWebsite: "Website live erleben →"
};

const CaseStudiesSection = ({ 
  customTitle,
  customSubtitle,
  customBodyText,
  hideHeaderText = false
}: CaseStudiesSectionProps) => {
  const [activeFilter, setActiveFilter] = React.useState<string>('alle');
  const allCases = transformationsData.de;
  const t = defaultTranslations;

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Filter cases based on active filter
  const filteredCases = React.useMemo(() => {
    if (activeFilter === 'alle') return allCases;
    
    const filterMap: Record<string, string[]> = {
      'strategie': ['KLAIBER', 'COBUS Industries', 'IconPro GmbH'],
      'webdesign': ['KLAIBER', 'COBUS Industries', 'IconPro GmbH', 'SPEZ AG'],
      'ki': ['IconPro GmbH']
    };
    
    return allCases.filter(caseStudy => 
      filterMap[activeFilter]?.includes(caseStudy.client)
    );
  }, [activeFilter, allCases]);

  const filters = [
    { id: 'alle', label: 'Alle Projekte' },
    { id: 'strategie', label: 'Strategie' },
    { id: 'webdesign', label: 'Webdesign' },
    { id: 'ki', label: 'KI-Integration' }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeaderText && (
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ lineHeight: '1.3' }}>
                {customTitle || t.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4" style={{ lineHeight: '1.6' }}>
                {customSubtitle || t.subtitle}
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
                {customBodyText || t.bodyText}
              </p>
            </div>
          </Reveal>
        )}

        {/* Filter Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-card text-foreground border border-border hover:border-primary/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>
        
        <StaggerReveal className="space-y-20" stagger={0.15}>
          {filteredCases.map((study, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 md:p-12 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-border">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="flex-shrink-0 mr-4 w-20 h-12">
                    <AspectRatio ratio={16/10} className="h-full">
                      <img 
                        src={study.logo} 
                        alt={`${study.client} logo`} 
                        className="h-full w-full object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{study.client}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{study.industry}</p>
                  </div>
                </div>
                
                {study.websiteLink && (
                  <a 
                    href={`https://${study.websiteLink}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    {t.exploreWebsite}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column: Challenge, Approach, Quote */}
                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-primary mr-3" />
                      <h4 className="text-xl font-bold text-foreground">{t.challenge}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Zap className="h-6 w-6 text-primary mr-3" />
                      <h4 className="text-xl font-bold text-foreground">{t.approach}</h4>
                    </div>
                    <ul className="space-y-3">
                      {study.approach.map((point, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3 mt-1">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <blockquote className="bg-muted/30 rounded-xl p-6 border-l-4 border-primary">
                    <p className="italic text-foreground leading-relaxed">
                      "{study.quote}"
                    </p>
                  </blockquote>
                </div>

                {/* Right Column: Outcomes & Image */}
                <div className="space-y-8">
                  {/* Outcomes */}
                  <div>
                    <div className="flex items-center mb-6">
                      <TrendingUp className="h-6 w-6 text-primary mr-3" />
                      <h4 className="text-xl font-bold text-foreground">{t.outcomes}</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.outcomes.map((outcome, idx) => (
                        <div 
                          key={idx}
                          className="bg-primary/5 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/40 transition-colors"
                        >
                          <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                            {outcome.metric}
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground">
                            {outcome.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  {study.image && (
                    <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                      <AspectRatio ratio={16/10}>
                        <img 
                          src={study.image} 
                          alt={`${study.client} transformation`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-16 pt-16 border-t border-border">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              {t.ctaText}
            </p>
            <Button 
              variant="default"
              size="lg"
              onClick={handleStartProject}
              className="group"
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
