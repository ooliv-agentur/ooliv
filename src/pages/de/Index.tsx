
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import DeutscherHero from "@/components/de/DeutscherHero";
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamImpactSectionDE from "@/components/de/TeamImpactSectionDE";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GermanSolutionSection from "@/components/de/GermanSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  // Update document title and meta description
  useEffect(() => {
    document.title = "ooliv – Ihre Full-Service Werbeagentur in Mainz";
  }, []);
  
  const newFaqs = [
    {
      question: "Wie läuft der Website-Erstellungsprozess bei ooliv ab?",
      answer: "Unser bewährter Prozess umfasst fünf klare Schritte, um Ihre Website strategisch aufzubauen und Ihre Ziele zu erreichen:\n\n<ul className='list-disc pl-4 space-y-2'>\n<li><span className='font-semibold'>Strategie & Konzept</span> – Wir analysieren Ihre Ziele, Zielgruppen und Mitbewerber, um die optimale Grundlage zu schaffen.</li>\n<li><span className='font-semibold'>Content-Erstellung</span> – Erstellung maßgeschneiderter Inhalte, abgestimmt auf Ihre Zielgruppe und SEO-Anforderungen.</li>\n<li><span className='font-semibold'>UX/UI-Design</span> – Individuelle Gestaltung eines modernen und benutzerfreundlichen Designs.</li>\n<li><span className='font-semibold'>Entwicklung</span> – Umsetzung Ihrer Website mit neuester Technik, zuverlässig und optimiert für alle Endgeräte.</li>\n<li><span className='font-semibold'>Launch & Support</span> – Veröffentlichung der Website mit laufender Betreuung und technischen Updates.</li>\n</ul>"
    },
    {
      question: "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?",
      answer: "Die Kosten einer individuell gestalteten WordPress-Website beginnen meist bei etwa 3.500 € bis 5.000 €.\n\nDer genaue Preis hängt von Faktoren wie dem Umfang der Inhalte, der Komplexität individueller Funktionen und der benötigten Designarbeit ab.\n\nIn einem unverbindlichen Erstgespräch klären wir Ihre Anforderungen genau, damit Sie eine präzise Kalkulation erhalten."
    },
    {
      question: "Wie lange dauert die Erstellung einer maßgeschneiderten Website?",
      answer: "Die Entwicklung einer maßgeschneiderten Website dauert durchschnittlich 4 bis 8 Wochen.\n\nDer exakte Zeitraum hängt von Umfang und Komplexität Ihres Projekts ab. Kleinere Projekte setzen wir in etwa einem Monat um, größere Projekte oder Websites mit speziellen Funktionen können etwas länger dauern.\n\nTransparente Zeitplanung ist fester Bestandteil unserer Zusammenarbeit."
    },
    {
      question: "Was beinhaltet die laufende Betreuung nach dem Launch meiner Website?",
      answer: "Nach der Veröffentlichung Ihrer Website kümmern wir uns kontinuierlich um:\n\n<ul className='list-disc pl-4 space-y-2'>\n<li><span className='font-semibold'>Technische Wartung</span> – Regelmäßige Updates und Sicherheitsüberprüfungen</li>\n<li><span className='font-semibold'>Inhaltliche Anpassungen</span> – Bei Bedarf Aktualisierung Ihrer Webseiteninhalte</li>\n<li><span className='font-semibold'>SEO-Performance-Überwachung</span> – Kontinuierliche Analyse und Optimierung</li>\n</ul>\n\nWir unterstützen Sie langfristig dabei, Ihre Website aktuell und wettbewerbsfähig zu halten."
    },
    {
      question: "Warum ist ooliv die richtige Werbeagentur in Mainz für mein Projekt?",
      answer: "Seit 2008 in Mainz etabliert, kombinieren wir:\n\n<ul className='list-disc pl-4 space-y-2'>\n<li><span className='font-semibold'>Kreative Lösungen</span> – Innovative Designs, die Ihre Marke hervorheben</li>\n<li><span className='font-semibold'>Datengetriebene Strategien</span> – Messbare Ergebnisse und klare Zielerreichung</li>\n<li><span className='font-semibold'>Technisches Know-how</span> – Modernste Webtechnologien und SEO-Optimierung</li>\n<li><span className='font-semibold'>Lokale Marktkenntnisse</span> – Tiefes Verständnis für regionale Geschäftslandschaften</li>\n</ul>\n\nWir entwickeln individuelle Lösungen, die exakt auf Ihre Ziele zugeschnitten sind, mit transparenter Kommunikation und messbarem Erfolg."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>ooliv – Ihre Full-Service Werbeagentur in Mainz</title>
        <meta 
          name="description" 
          content="Entdecken Sie maßgeschneiderte digitale Lösungen mit ooliv, Ihrer Full-Service Werbeagentur in Mainz. Wir bieten Webdesign, SEO, Google Ads, Branding und kanalübergreifende Online-Strategien für Ihren Erfolg." 
        />
      </Helmet>
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero />
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen kämpfen mit Webseiten, die nicht performen. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gefunden werden.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <GermanSolutionSection />
        
        <TechnologiesSection />
        
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse von echten Kunden."
          customSubtitle="Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht."
          customBodyText="Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
        />
        
        <FAQ 
          customFaqs={newFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Kontaktieren Sie uns"
        />
        
        <CTA 
          lightBackground={true}
          title="Bereit, Ihre digitale Präsenz zu transformieren?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
          primaryCta="Starten Sie Ihr Website-Projekt"
          secondaryCta="Sehen Sie unsere Arbeit"
          footerNote="100+ erfolgreiche Projekte umgesetzt • Vertrauenspartner führender Unternehmen • KI-Strategien, die messbar und menschlich sind"
        />
      </PageLayout>
      
      {/* SEO Text Section placed after the PageLayout */}
      <SEOTextSection />
    </>
  );
};

export default GermanIndex;
