
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
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

const GoogleAds = () => {
  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "Was unterscheidet ooliv von anderen Google Ads Agenturen?",
      answer: "Wir kombinieren B2B-Strategie mit Tech-Expertise – für echte Business-Ergebnisse, nicht nur Traffic-Zahlen."
    },
    {
      question: "Brauchen wir Google Ads, wenn SEO bereits gut funktioniert?",
      answer: "Ja – Google Ads erhöht die Sichtbarkeit und liefert sofortigen, gezielten Traffic mit Konversionsfokus."
    },
    {
      question: "Wie hoch ist ein typisches Budget für effektive Google Ads?",
      answer: "Die meisten Kunden starten zwischen 1.000–3.000 €/Monat – basierend auf Zielen, Markt und Wettbewerb."
    },
    {
      question: "Wie schnell werden wir Ergebnisse aus einer Kampagne sehen?",
      answer: "Erste Ergebnisse sind oft in wenigen Tagen sichtbar, mit voller Performance in 4–6 Wochen."
    },
    {
      question: "Könnt ihr bei Landingpages und Tracking-Einrichtung helfen?",
      answer: "Absolut – wir übernehmen alles vom Seitendesign bis zur vollständigen Analyse-Integration."
    },
    {
      question: "Auf welchen Plattformen schaltet ihr Werbung?",
      answer: "Wir konzentrieren uns zu 100% auf Google Ads – einschließlich Search, Display und Performance Max."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Google Ads Agentur Mainz | Kampagnen mit messbarem ROI</title>
        <meta name="description" content="Google Ads Management für B2B-Unternehmen. Wir erstellen und optimieren PPC-Kampagnen mit Fokus auf qualifizierte Leads und messbarer Rendite – nicht nur Impressionen." />
        <meta name="keywords" content="Google Ads, PPC-Marketing, Lead-Generation, Konversionsoptimierung" />
      </Helmet>
      
      {/* Hero Section */}
      <GoogleAdsHero />

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website-Herausforderungen, die Ihr Business behindern — So lösen wir sie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Keine eingehenden Leads",
                context: "Ihre Website erhält Traffic, aber keine Konversionen",
                solution: "Wir erstellen Kampagnen und Landing Pages, die speziell darauf ausgerichtet sind, B2B-Besucher in echte Kontakte zu verwandeln"
              },
              {
                problem: "Verschwendetes Werbebudget",
                context: "ROI ist unklar und Budget verschwindet",
                solution: "Wir tracken jeden Klick, optimieren kontinuierlich und nutzen Klickbetrugsschutz, um gefälschten Traffic zu vermeiden"
              },
              {
                problem: "Falsche Zielgruppe",
                context: "Besucher verlassen die Seite ohne Aktion",
                solution: "Unsere Kampagnen verwenden KI-verbesserte Zielgruppenausrichtung, um Entscheidungsträger zu erreichen, nicht Fenstergucker"
              },
              {
                problem: "Mangel an Strategie",
                context: "Isolierte Bemühungen, kein echtes Wachstum",
                solution: "Wir verbinden Kampagnen, Inhalte und Daten zu einem konversionsorientierten System"
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

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Google Ads für Ergebnisse – nicht nur für Sichtbarkeit
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir nutzen Google Ads, um qualifizierte Leads zu generieren — nicht nur leere Klicks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Suchkampagnen</h3>
              <p>Erreichen Sie Ihre Zielgruppe zum richtigen Zeitpunkt — mit gezielten Keywords, Ad Extensions und getrackte Conversions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Layout className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
              <p>Gute Anzeigen brauchen gute Zielseiten. Wir erstellen leistungsstarke Landing Pages für Geschwindigkeit, Klarheit und Konversion.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <RefreshCw className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Kontinuierliche Optimierung</h3>
              <p>Wir testen, analysieren und verbessern Ihre Kampagnen ständig — senken die Kosten pro Lead und steigern die Ergebnisse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <GoogleAdsLeadGeneration />

      {/* Extended Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Unser Tech-Stack – datengestützte Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Leistungsstarke Kampagnen, die auf hochwertige B2B-Keywords abzielen und auf Konversionen optimiert sind"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "KI-verbessertes Kampagnen-Management",
                description: "Wir nutzen KI-Tools zur Verbesserung der Anzeigenqualität, Keyword-Performance und Zielgruppenausrichtung"
              },
              {
                icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landing Page Design & Entwicklung",
                description: "Wir bauen Landing Pages, die schnell laden, klar kommunizieren und darauf ausgerichtet sind, Besucher in Leads zu konvertieren"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimierung (CRO)",
                description: "Wir testen jedes Element — von Überschriften bis zu CTAs — um Ihre Konversionsraten Schritt für Schritt zu verbessern"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics, Tracking & Klickbetrugsschutz",
                description: "Wir tracken jede Aktion, überwachen die Performance und schützen Ihr Budget vor ungültigen Klicks"
              }
            ].map((service, index) => (
              <div key={index} className="bg-brand-backgroundAlt p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Updated to use the new component */}
      <GoogleAdsProcess />

      {/* Success Metrics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              B2B-Marken, die mit ooliv Ergebnisse erzielen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+3x mehr qualifizierte Leads",
                description: "dank KI-optimiertem Targeting und strategischen Landing Pages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "-40% geringere Absprungrate",
                description: "nachdem wir Conversion-Texte und User Experience verbessert haben"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+70% höhere CTR",
                description: "durch bessere Anzeigentexte und Keyword-Abstimmung"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-brand-backgroundAlt p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <h3 className="text-2xl font-bold my-3 text-brand-primary">{metric.metric}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-24 bg-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} />

      {/* CTA Section */}
      <CTA 
        title="Lassen Sie uns Google Ads in einen skalierbaren Vertriebskanal verwandeln"
        subtitle="Mit unserem datengesteuerten Ansatz helfen wir Ihnen, den ROI zu verbessern, die Lead-Kosten zu senken und Kampagnen aufzubauen, die messbares Wachstum liefern."
        primaryCta="Starten Sie Ihre Kampagne"
      />

      {/* New Claim Section */}
      <section className="bg-brand-backgroundAlt py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg text-brand-text font-medium">
            100+ erfolgreiche Projekte • Vertrauen von B2B-Führungskräften • KI-gestützte Strategien für messbares Wachstum
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoogleAds;
