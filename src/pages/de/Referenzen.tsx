import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WeitereProjekteTable from '@/components/WeitereProjekteTable';
import CaseStudiesSEOText from '@/components/case-studies/CaseStudiesSEOText';

// Success pillars
const successPillars = [
  {
    title: "Strategie-First Ansatz",
    description: "Jede Website beginnt mit klaren Zielen, Struktur und messbaren KPIs."
  },
  {
    title: "Individuelles Design & Content",
    description: "Wir bauen keine Templates – sondern Websites, die zu Ihrer Marke passen."
  },
  {
    title: "Technik & SEO für Performance",
    description: "Schnell, skalierbar und auf nachhaltige Sichtbarkeit ausgerichtet."
  }
];

// FAQ items with focus on "marketing mainz"
const faqItems = [
  {
    question: "Mit welchen Unternehmen arbeitet ooliv als Marketing Agentur in Mainz?",
    answer: "Wir arbeiten mit B2B-Unternehmen aller Größen – von Software bis Industrie, Bildung oder Beratung. Als Marketing Agentur in Mainz verstehen wir regionale und internationale Anforderungen."
  },
  {
    question: "Gibt es mehr Details zu den Case Studies?",
    answer: "Jede Fallstudie zeigt KPIs, Projektziele und echte Ergebnisse. Unsere Marketing-Projekte aus Mainz und darüber hinaus werden dokumentiert – für volle Transparenz."
  },
  {
    question: "Sind solche Ergebnisse im Marketing Mainz realistisch?",
    answer: "Ja – wenn Strategie und Umsetzung stimmen. Unsere Ergebnisse basieren auf klarer Positionierung, starkem Content und technischer Exzellenz."
  },
  {
    question: "Kann ich frühere Kunden kontaktieren?",
    answer: "Auf Anfrage stellen wir gerne Kontakt her. Unsere Kundenbeziehungen sind langfristig – wir sind stolz auf das Vertrauen, das wir als Marketing Agentur aus Mainz genießen."
  }
];

const GermanCaseStudies = () => {
  // Handler for opening the lead form
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  // Force document title update to ensure it works across all domains
  useEffect(() => {
    document.title = "Marketing Mainz – Erfolgreiche Projekte";
    
    // Create and update meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Entdecken Sie unsere erfolgreichen Marketingprojekte in Mainz. Fallstudien von ooliv zeigen Strategien, die wirken und begeistern.');
    
    // Create and update meta keywords if it doesn't exist
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Marketing Mainz, B2B Marketing, Webdesign, SEO, Case Studies');
  }, []);

  return (
    <PageLayout className="overflow-x-hidden" seoText={<CaseStudiesSEOText />}>
      <Helmet>
        <title>Marketing Mainz – Erfolgreiche Projekte</title>
        <meta 
          name="description" 
          content="Entdecken Sie unsere erfolgreichen Marketingprojekte in Mainz. Fallstudien von ooliv zeigen Strategien, die wirken und begeistern." 
        />
        <meta name="keywords" content="Marketing Mainz, B2B Marketing, Webdesign, SEO, Case Studies" />
      </Helmet>
      
      <CaseStudiesHero />
      
      <div className="section-container">
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse von echten Kunden"
          customSubtitle="Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht."
          customBodyText="Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
        />
        
        <div className="py-20 bg-brand-backgroundAlt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Warum unsere Projekte funktionieren
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unsere konstanten Ergebnisse kommen von einem bewährten Ansatz, der Strategie an erste Stelle und Ausführung an zweite Stelle setzt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <FAQ 
          customFaqs={faqItems}
          customTitle="Häufige Fragen zu Projekten & Marketing Mainz"
          customCtaText="Weitere Fragen? Kontaktieren Sie uns"
        />

        <CTA 
          title="Lassen Sie uns Ihre Erfolgsgeschichte schreiben"
          subtitle="Ob Relaunch, mehr Leads oder bessere Konversionen – jedes Projekt bei ooliv startet mit einem klaren Plan. Gemeinsam setzen wir Ihr Marketing strategisch um."
          primaryCta="Projekt starten"
        />
      </div>
      
      <WeitereProjekteTable />
    </PageLayout>
  );
};

export default GermanCaseStudies;
