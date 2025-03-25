import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGenerationDE from '@/components/google-ads/GoogleAdsLeadGenerationDE';
import { 
  Target, 
  LineChart, 
  MousePointerClick, 
  LayoutTemplate, 
  Shield,
  Bot
} from 'lucide-react';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for Google Ads page with focus on "google ads mainz"
  const googleAdsFaqs = [
    {
      question: "Auf welchen Plattformen schaltet ihr als Google Ads Agentur Werbung?",
      answer: "Wir konzentrieren uns zu 100% auf Google Ads – einschließlich Search, Display und Performance Max. Als spezialisierte Google Ads Agentur aus Mainz kennen wir alle Facetten der Plattform."
    },
    {
      question: "Nutzt ihr als Google Ads Agentur in Mainz KI in euren Kampagnen?",
      answer: "Ja – wir setzen KI-Tools ein, um die Anzeigenqualität, das Targeting und die Performance zu verbessern. Unsere Google Ads Agentur in Mainz bleibt stets auf dem neuesten Stand der Technologie."
    },
    {
      question: "Kann eure Google Ads Agentur auch die Landing Pages erstellen?",
      answer: "Absolut. Wir gestalten und entwickeln hochkonvertierende Landing Pages, die auf Ihre geschäftlichen Ziele zugeschnitten sind. Als Full-Service Google Ads Agentur in Mainz bieten wir das komplette Paket."
    },
    {
      question: "Wie schützt ihr als Google Ads Agentur vor Klickbetrug?",
      answer: "Wir verwenden Betrugserkennung-Tools, um Ihre Kampagnen zu überwachen und ungültige Klicks zu blockieren, wodurch Ihr Werbebudget geschützt wird. Unsere Google Ads Agentur in Mainz legt großen Wert auf die Sicherheit Ihrer Investition."
    },
    {
      question: "Arbeitet ihr als Google Ads Agentur nur mit B2B-Kunden?",
      answer: "Ja – wir sind auf B2B-Lead-Generierung und -Konversion für Unternehmen in verschiedenen Branchen spezialisiert. Als Google Ads Agentur in Mainz haben wir besondere Expertise im B2B-Bereich."
    },
    {
      question: "Was beinhaltet das Reporting eurer Google Ads Agentur?",
      answer: "Sie erhalten detaillierte Einblicke in die Performance, einschließlich Metriken zu Klicks, Konversionen und dem allgemeinen Kampagnenerfolg. Transparenz ist ein Grundprinzip unserer Google Ads Agentur in Mainz."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <GoogleAdsHero />

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website-Herausforderungen, die Ihrem Unternehmen schaden — So lösen wir sie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Keine eingehenden Leads",
                context: "Ihre Website erhält Traffic, aber keine Konversionen",
                solution: "Wir erstellen Kampagnen und Landing Pages, die darauf ausgelegt sind, B2B-Besucher in reale Kontakte zu verwandeln"
              },
              {
                problem: "Verschwendetes Werbebudget",
                context: "ROI ist unklar und Budget verschwindet",
                solution: "Wir verfolgen jeden Klick, optimieren kontinuierlich und nutzen Klickbetrug-Schutz, um Fake-Traffic zu vermeiden"
              },
              {
                problem: "Falsche Zielgruppe",
                context: "Besucher verlassen die Seite ohne Aktion",
                solution: "Unsere Kampagnen nutzen KI-verbessertes Targeting, um Entscheider zu erreichen, nicht nur Interessenten"
              },
              {
                problem: "Mangel an Strategie",
                context: "Unverbundene Bemühungen, kein echtes Wachstum",
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

      {/* Lead Generation Section */}
      <GoogleAdsLeadGenerationDE />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Hochleistungs-Google Ads für B2B-Unternehmen in Mainz
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Leistungsorientierte Kampagnen, die auf B2B-Keywords mit hoher Absicht abzielen und für Konversionen optimiert sind"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "KI-verbessertes Kampagnenmanagement",
                description: "Wir nutzen KI-Tools zur Verbesserung der Anzeigenqualität, Keyword-Performance und Zielgruppenansprache"
              },
              {
                icon: <LayoutTemplate className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landing Page Design & Entwicklung",
                description: "Wir erstellen Landing Pages, die schnell laden, klar kommunizieren und darauf ausgelegt sind, Besucher in Leads zu verwandeln"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimierung (CRO)",
                description: "Wir testen jedes Element – von Überschriften bis zu CTAs – um Ihre Konversionsraten Schritt für Schritt zu verbessern"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics, Tracking & Klickbetrug-Schutz",
                description: "Wir verfolgen jede Aktion, überwachen die Performance und schützen Ihr Budget vor ungültigen Klicks"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Unser bewährter 5-Schritte-Prozess für Lead-Generierung
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Kampagnenstrategie",
                description: "Definition Ihrer Zielgruppe, Wertversprechen, Budgets und KPIs"
              },
              {
                step: "02",
                title: "Landing Page Erstellung",
                description: "Wir gestalten SEO-gerechte, mobile-first Landing Pages für Ihre spezifischen Angebote"
              },
              {
                step: "03",
                title: "Google Ads Einrichtung",
                description: "Wir starten und verwalten Kampagnen in Google Ads – Search, Display und Performance Max"
              },
              {
                step: "04",
                title: "Tracking & Schutz",
                description: "Wir richten Event-Tracking ein, um die Performance zu überwachen, blockieren ungültige Klicks und stellen Datengenauigkeit sicher"
              },
              {
                step: "05",
                title: "Reporting & Optimierung",
                description: "Wir verbessern Ihren Trichter durch wöchentliche Erkenntnisse und A/B-Tests"
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-brand-backgroundAlt p-6 rounded-lg border-l-4 border-brand-primary">
                <div className="absolute -top-4 -left-4 bg-brand-primary text-white h-10 w-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              B2B-Marken, die mit ooliv in Mainz Ergebnisse erzielen
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
                metric: "-40% Absprungrate",
                description: "nach Verbesserung von Konversionstexten und Benutzererfahrung"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+70% höhere Klickrate",
                description: "durch bessere Anzeigentexte und Keyword-Abstimmung"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <h3 className="text-2xl font-bold my-3 text-brand-primary">{metric.metric}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} />

      {/* CTA Section */}
      <CTA 
        title="Machen wir Ihr Marketing messbar"
        subtitle="Sie brauchen nicht mehr Klicks – Sie brauchen Leads, die konvertieren. Lassen Sie uns einen Trichter aufbauen, der von der Anzeige bis zur Aktion funktioniert."
        primaryCta="Starten Sie Ihre Kampagne"
        secondaryCta="Kostenloses Audit anfordern"
      />
    </PageLayout>
  );
};

export default GermanGoogleAds;
