
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';

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
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <PageHero
        badge="Echte Ergebnisse. Echte Kunden."
        title="Echte Ergebnisse. Echte Kunden."
        subtitle="Marketing-Erfolgsgeschichten aus Mainz und darüber hinaus. Sehen Sie, wie wir B2B-Unternehmen mit intelligenter Strategie, starkem Design und messbaren Ergebnissen beim Wachstum helfen."
        primaryCta={{
          text: "Projekt starten",
          link: "/de/kontakt"
        }}
        secondaryCta={{
          text: "Strategiegespräch buchen",
          link: "/de/kontakt"
        }}
      />
      
      <div className="section-container">
        {/* Global Case Studies Section */}
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse von echten Kunden"
          customSubtitle="Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht."
          customBodyText="Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
        />
        
        {/* What Makes These Projects Work */}
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
        
        {/* FAQ Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Häufige Fragen zu Projekten & Marketing Mainz
              </h2>
              <p className="text-lg text-gray-600">
                Hier beantworten wir die wichtigsten Fragen rund um Projekte und Marketing in Mainz.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-brand-heading">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lassen Sie uns Ihre Erfolgsgeschichte schreiben</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ob Relaunch, mehr Leads oder bessere Konversionen – jedes Projekt bei ooliv startet mit einem klaren Plan. Gemeinsam setzen wir Ihr Marketing strategisch um.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/de/kontakt">
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/de/kontakt">
                Strategiegespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GermanCaseStudies;
