
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import WiesbadenHero from '@/components/de/WiesbadenHero';

// Import AboutSection and modify its content for Wiesbaden
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

// Use the actual homepage components instead
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';

// Wiesbaden About Section with same layout as AboutSection but different text
const WiesbadenAboutSection = () => {
  // Define the 4 pillars of service with Wiesbaden content
  const services = [
    {
      title: "Webdesign",
      description: "Professionelle Websites, die Ihre Wiesbadener Zielgruppe überzeugen und Vertrauen schaffen.",
      icon: <LayoutGrid className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Entwicklung",
      description: "Technisch ausgereifte Lösungen für nachhaltiges Wachstum Ihres Unternehmens.",
      icon: <Sparkles className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "SEO",
      description: "Bessere Sichtbarkeit in Wiesbaden und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen.",
      icon: <Code className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Strategie",
      description: "Datenbasierte Konzepte, die Ihre Marktposition stärken und Umsätze steigern.",
      icon: <PhoneCall className="h-6 w-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-heading mb-4 text-center">
              Ihre Werbeagentur Wiesbaden für messbare Erfolge
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto text-center">
              Digitale Lösungen, die Ihr Unternehmen nachhaltig voranbringen
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-background/50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-brand-primary/10 inline-flex">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </StaggerReveal>
        
        <div className="mt-12 text-center">
          <p className="text-brand-text mb-6">
            Als spezialisierte Werbeagentur in Wiesbaden entwickeln wir strategische Online-Auftritte, die Ihre Zielgruppe erreichen und Geschäftsergebnisse verbessern. Professionell, zielgerichtet und mit nachweisbaren Resultaten.
          </p>
          <Button variant="outline" size="lg" className="group">
            Mehr erfahren
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Updated FAQ items for Wiesbaden
const wiesbadenFaqs = [
  {
    question: "Wie arbeitet eine Werbeagentur in Wiesbaden mit lokalen Unternehmen?",
    answer: "Als Werbeagentur in Wiesbaden verstehen wir die besonderen Herausforderungen lokaler Unternehmen. Wir entwickeln maßgeschneiderte Strategien, die sowohl regional als auch überregional wirken – von der lokalen Sichtbarkeit bis zur deutschlandweiten Expansion."
  },
  {
    question: "Was unterscheidet ooliv von anderen Werbeagenturen in Wiesbaden?",
    answer: "Unsere Stärke liegt in der Kombination aus strategischer Planung und technischer Exzellenz. Während andere Agenturen oft nur Teilbereiche abdecken, bieten wir als Werbeagentur einen ganzheitlichen Ansatz – von der Konzeption bis zur Umsetzung und Betreuung."
  },
  {
    question: "Welche Investition ist für eine professionelle Website nötig?",
    answer: "Die Investition richtet sich nach Ihren Zielen und Anforderungen. Einfache Websites beginnen bei 4.000 €, umfassende Projekte mit erweiterten Funktionen liegen zwischen 8.000 € und 15.000 €. Wir erstellen transparente Angebote ohne versteckte Kosten."
  },
  {
    question: "Wie schnell kann eine neue Website realisiert werden?",
    answer: "Die Umsetzungsdauer variiert je nach Projektumfang. Standardprojekte realisieren wir in 4-8 Wochen, komplexere Vorhaben benötigen entsprechend mehr Zeit. Eine strukturierte Planung sorgt für verlässliche Termine."
  },
  {
    question: "Warum ist ooliv die ideale Werbeagentur für Wiesbadener Unternehmen?",
    answer: "Weil wir die Bedürfnisse von Unternehmen im Rhein-Main-Gebiet genau kennen. Als Werbeagentur kombinieren wir regionale Expertise mit überregionaler Erfahrung und liefern messbare Resultate statt leerer Versprechungen."
  }
];

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    document.title = 'Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg';
  }, []);

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg</title>
        <meta
          name="description"
          content="ooliv – Ihre kompetente Werbeagentur in Wiesbaden für digitale Strategien, professionelle Websites und messbare Online-Erfolge. Regional verwurzelt, digital führend."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout 
        className="overflow-x-hidden"
        seoText={<SEOTextSection />}
      >
        <WiesbadenHero />
        <WiesbadenAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre digitale Präsenz sollte Geschäfte generieren – nicht nur existieren.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Wiesbadener Unternehmen haben Websites, die nicht zum Unternehmenserfolg beitragen. Als erfahrene Werbeagentur entwickeln wir digitale Auftritte, die aktiv Kunden gewinnen, Vertrauen schaffen und nachweislich zu besseren Geschäftsergebnissen führen.
            </p>
            <BeforeAfterSlider />
            <div className="mt-8 text-center">
              <p className="text-brand-text mb-6">
                Weitere Referenzen gerne im persönlichen Gespräch – <a href="mailto:info@ooliv.de" className="text-brand-primary hover:underline">info@ooliv.de</a>
              </p>
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                onClick={handleStartProject}
              >
                Digitales Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <GermanSolutionSection />
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={wiesbadenFaqs}
          customTitle="Häufige Fragen zur Werbeagentur-Zusammenarbeit"
          customCtaText="Weitere Fragen? Sprechen Sie direkt mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich."
          primaryCta="Digitales Projekt starten"
        />
      </PageLayout>
    </>
  );
};

export default WerbeagenturWiesbaden;
