
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
      answer: "Unsere Website-Projekte folgen einem klaren 5-Schritte-Ablauf:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Strategie & Konzept</strong> – Wir analysieren Ziele, Zielgruppen und Wettbewerber – und schaffen eine fundierte inhaltliche Basis.</li><li><strong>Content-Erstellung</strong> – Texte, Bilder, Struktur – alles maßgeschneidert auf Ihre Marke und SEO-optimiert.</li><li><strong>UX/UI-Design</strong> – Modernes, individuelles Design mit Fokus auf Klarheit, Nutzerfreundlichkeit und Markenwirkung.</li><li><strong>Entwicklung</strong> – Technisch sauber umgesetzt mit aktueller Technik, responsive und DSGVO-konform.</li><li><strong>Launch & Support</strong> – Go-Live mit persönlicher Betreuung – inklusive technischer Unterstützung bei Bedarf.</li></ul>"
    },
    {
      question: "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?",
      answer: "Die Kosten hängen von Umfang, Funktionalität und gewünschtem Design ab. Typische Projekte bewegen sich in diesen Bereichen:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Basic:</strong> ab 4.000 € (Onepager, Starter-Seiten)</li><li><strong>Standard:</strong> 6.000 – 12.000 € (Corporate Sites, lokale SEO)</li><li><strong>Erweitert:</strong> ab 15.000 € (Shops, komplexe Funktionen, Multilinguale Seiten)</li></ul>Transparente Angebote – keine versteckten Kosten.<br/><br/>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Lassen Sie uns Ihr Projekt besprechen</a>"
    },
    {
      question: "Wie lange dauert die Erstellung einer maßgeschneiderten Website?",
      answer: "Das hängt vom Projektumfang ab – ein typischer Zeitrahmen:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Kompakte Seiten</strong> (z. B. Onepager): 3–4 Wochen</li><li><strong>Mittlere Projekte:</strong> ca. 5–8 Wochen</li><li><strong>Komplexe Umsetzungen:</strong> 10+ Wochen (z. B. Shop, Multisite)</li></ul>Wichtig: Qualität vor Schnelligkeit – aber mit realistischen Timings und klarer Projektstruktur.<br/><br/>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Jetzt Timing klären</a>"
    },
    {
      question: "Was beinhaltet die laufende Betreuung nach dem Launch meiner Website?",
      answer: "Wir begleiten Sie gerne auch nach dem Go-Live – mit Optionen wie:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Technische Wartung</strong> (Updates, Backups, Sicherheit)</li><li><strong>Content-Pflege</strong> (Texte, Medien, SEO)</li><li><strong>Erweiterungen & Optimierung</strong></li><li>Monatliche Support-Modelle oder nach Bedarf buchbar</li></ul>→ Betreuung, wie Sie sie brauchen – flexibel und transparent."
    },
    {
      question: "Warum ist ooliv die richtige Werbeagentur in Mainz für mein Projekt?",
      answer: "Weil wir anders arbeiten – und besser zusammenarbeiten:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Direkter Kontakt:</strong> Bei uns sprechen Sie immer mit dem CEO.</li><li><strong>Effiziente Prozesse:</strong> Strategie, Content, Design und Technik aus einer Hand.</li><li><strong>Volle Sichtbarkeit:</strong> SEO, Performance und Klarheit stehen im Fokus.</li><li><strong>Lokale Stärke & digitale Exzellenz:</strong> Mit Sitz in Mainz – und Kunden weit darüber hinaus.</li></ul>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Gemeinsam sichtbar werden</a>"
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
