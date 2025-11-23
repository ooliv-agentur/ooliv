import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WeitereProjekteTable from '@/components/WeitereProjekteTable';


// Success pillars
const successPillars = [
  {
    title: "Strategie führt, Design folgt.",
    description: "Klare Ziele, Struktur und KPIs vor jedem Pixel."
  },
  {
    title: "Individuelle Lösungen statt Templates.",
    description: "Jede Website entsteht aus Geschäftsmodell, Positionierung und Nutzerbedürfnissen."
  },
  {
    title: "Technik + SEO für reale Performance.",
    description: "Schnelle Ladezeiten, saubere Strukturen und nachhaltige Sichtbarkeit."
  }
];

// FAQ items with balanced national/regional positioning
const faqItems = [
  {
    question: "Mit welchen Unternehmen arbeitet ooliv als Marketing Agentur in Mainz?",
    answer: "Wir arbeiten mit B2B-Unternehmen aller Größen bundesweit – von Software bis Industrie, Bildung oder Beratung. Mit Sitz in Mainz verstehen wir regionale UND überregionale Anforderungen."
  },
  {
    question: "Gibt es mehr Details zu den Case Studies?",
    answer: "Jede Fallstudie zeigt KPIs, Projektziele und echte Ergebnisse. Unsere Marketing-Projekte werden dokumentiert – für volle Transparenz, egal wo in Deutschland."
  },
  {
    question: "Sind solche Ergebnisse realistisch?",
    answer: "Ja – wenn Strategie und Umsetzung stimmen. Unsere Ergebnisse basieren auf klarer Positionierung, starkem Content und technischer Exzellenz."
  },
  {
    question: "Kann ich frühere Kunden kontaktieren?",
    answer: "Auf Anfrage stellen wir gerne Kontakt her. Unsere Kundenbeziehungen sind langfristig – bundesweit vertrauen uns Unternehmen seit über 15 Jahren."
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
    document.title = "Case Studies & Projekte | ooliv – Digitale Transformation & UX";
    
    // Create and update meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Echte Ergebnisse aus Strategie, UX, SEO und digitaler Transformation. Case Studies aus Steuerberatung, Industrie, KI-Software, Immobilien, Handwerk und E-Commerce.');
    
    // Create and update meta keywords if it doesn't exist
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Case Studies, Referenzen, Digitale Transformation, UX Projekte, SEO Erfolge, B2B Webdesign');
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Referenzen", url: "https://ooliv.de/referenzen" }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Case Studies & Projekte | ooliv – Digitale Transformation & UX"
        description="Echte Ergebnisse aus Strategie, UX, SEO und digitaler Transformation. Case Studies aus Steuerberatung, Industrie, KI-Software, Immobilien, Handwerk und E-Commerce."
        canonicalUrl="https://ooliv.de/referenzen"
        keywords="Case Studies, Referenzen, Digitale Transformation, UX Projekte, SEO Erfolge, B2B Webdesign"
        breadcrumbs={breadcrumbs}
      />
      
      <CaseStudiesHero />
      
      <div className="section-container">
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse aus echten Projekten"
          hideHeaderText={false}
        />
        
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Warum unsere Projekte wirken
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-lg hover:shadow-md transition-shadow text-center">
                  <div className="h-16 w-16 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-turquoise">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-text-primary">{pillar.title}</h3>
                  <p className="text-text-secondary">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTA 
          title="Welche Ergebnisse dürfen wir für Ihr Unternehmen erreichen?"
          subtitle="Ob Relaunch, Positionierung oder Conversion-Optimierung – jedes Projekt beginnt mit einem klaren Plan."
          primaryCta="Projekt starten"
        />
      </div>
      
      <WeitereProjekteTable />
    </PageLayout>
  );
};

export default GermanCaseStudies;
