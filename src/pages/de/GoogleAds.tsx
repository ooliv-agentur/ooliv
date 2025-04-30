
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import HeroGoogleAds from '@/components/hero/HeroGoogleAds';
import GoogleAdsLeadGenerationDE from '@/components/google-ads/GoogleAdsLeadGenerationDE';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import { 
  Target, 
  LineChart, 
  MousePointerClick, 
  Layout, 
  Shield,
  Bot,
  RefreshCw,
  Search
} from 'lucide-react';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GoogleAdsDE = () => {
  // Custom FAQ items for German Google Ads page
  const googleAdsFaqs = [
    {
      question: "Was unterscheidet ooliv von anderen Google Ads Agenturen?",
      answer: "Wir kombinieren B2B-Strategie mit technischem Know-how — und liefern echte Geschäftsergebnisse, nicht nur generischen Traffic."
    },
    {
      question: "Brauchen wir Google Ads, wenn SEO bereits gut funktioniert?",
      answer: "Ja — Google Ads erhöht die Sichtbarkeit und liefert sofortigen, gezielten Traffic mit Conversion-Fokus."
    },
    {
      question: "Wie hoch ist ein typisches Budget für effektive Google Ads?",
      answer: "Die meisten Kunden starten zwischen 1.000–3.000 €/Monat — abhängig von Zielen, Markt und Wettbewerb."
    },
    {
      question: "Wie schnell werden wir Ergebnisse einer Kampagne sehen?",
      answer: "Erste Ergebnisse oft schon nach wenigen Tagen, volle Leistung nach 4–6 Wochen."
    },
    {
      question: "Können Sie bei Landing Pages und Tracking helfen?",
      answer: "Absolut — wir kümmern uns um alles vom Seitendesign bis zur vollständigen Analytics-Integration."
    },
    {
      question: "Auf welchen Plattformen schalten Sie Werbung?",
      answer: "Wir konzentrieren uns zu 100% auf Google Ads — einschließlich Search, Display und Performance Max."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Google Ads Agentur Mainz | Leads statt nur Klicks | ooliv</title>
        <meta name="description" content="Google Ads Agentur Mainz - Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Leads generieren. Datenbasiert & KI-optimiert." />
      </Helmet>

      {/* Hero Section */}
      <HeroGoogleAds />

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website-Probleme, die Ihr Geschäft beeinträchtigen — so lösen wir sie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Keine eingehenden Leads",
                context: "Ihre Website bekommt Traffic, aber keine Conversions",
                solution: "Wir erstellen Kampagnen und Landing Pages, die B2B-Besucher in echte Kontakte umwandeln"
              },
              {
                problem: "Verschwendete Werbeausgaben",
                context: "ROI ist unklar und Budget verschwindet",
                solution: "Wir verfolgen jeden Klick, optimieren kontinuierlich und schützen vor Klickbetrug"
              },
              {
                problem: "Falsche Zielgruppe",
                context: "Besucher verlassen die Seite ohne Aktion",
                solution: "Unsere Kampagnen verwenden KI-verbessertes Targeting, um Entscheider zu erreichen"
              },
              {
                problem: "Mangel an Strategie",
                context: "Unzusammenhängende Bemühungen, kein echtes Wachstum",
                solution: "Wir verbinden Kampagnen, Content und Daten zu einem konversionsorientierten System"
              }
            ].map((item, i) => (
              <div key={i} className="bg-brand-backgroundAlt rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-primary font-bold mb-3">PROBLEM:</div>
                <h3 className="text-lg font-bold mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.context}</p>
                <div className="text-brand-primary font-bold mb-2">LÖSUNG:</div>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Lead Generation Section */}
      <GoogleAdsLeadGenerationDE />

      {/* Google Ads Process Section */}
      <GoogleAdsProcess />

      {/* Case Studies Section */}
      <section className="py-24 bg-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} customTitle="Häufig gestellte Fragen" />

      {/* CTA Section */}
      <CTA 
        title="Verwandeln Sie Google Ads in einen skalierbaren Vertriebskanal"
        subtitle="Mit unserem datengesteuerten Ansatz helfen wir Ihnen, den ROI zu verbessern, die Lead-Kosten zu senken und Kampagnen aufzubauen, die messbares Wachstum liefern."
        primaryCta="Kampagne starten"
      />

      {/* New Claim Section */}
      <section className="bg-brand-backgroundAlt py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg text-brand-text font-medium">
            100+ erfolgreiche Projekte • Vertraut von B2B-Führungskräften • KI-gestützte Strategien für messbares Wachstum
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoogleAdsDE;
