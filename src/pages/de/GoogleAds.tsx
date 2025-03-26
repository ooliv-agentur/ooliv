
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import { ArrowRight, CheckCircle, BarChart, Search, Layout, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "Wie unterscheidet sich ooliv von anderen Google Ads Agenturen?",
      answer: "Wir kombinieren technisches Know-how mit strategischem B2B-Verständnis – statt generischer Kampagnen liefern wir Business Impact."
    },
    {
      question: "Brauchen wir Google Ads, wenn wir bei SEO gut ranken?",
      answer: "Ja – Google Ads erhöht die Sichtbarkeit und sorgt für sofortigen Traffic mit gezieltem Conversion-Fokus."
    },
    {
      question: "Was sind typische Budgets für erfolgreiche Google Ads Kampagnen?",
      answer: "Die meisten unserer Kunden starten mit 500–2.000 € monatlich – angepasst an Branche, Wettbewerb und Ziele."
    },
    {
      question: "Wie lange dauert es, bis eine Google Ads Kampagne Ergebnisse liefert?",
      answer: "Erste Ergebnisse sind meist nach wenigen Tagen sichtbar – die volle Performance entwickelt sich über 4–6 Wochen."
    },
    {
      question: "Hilft ihr auch bei der Erstellung von Zielseiten und Conversion-Tracking?",
      answer: "Ja – wir liefern alles aus einer Hand: Landingpages, Tracking, Kampagnenstruktur und Optimierung."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge="Traffic zu Leads zu Ergebnissen"
        title="Google Ads Agentur Mainz – Leads statt nur Klicks"
        subtitle="Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
        primaryCta={{
          text: "Kampagne starten",
          link: "/de/kontakt"
        }}
        secondaryCta={{
          text: "Kostenlose Analyse anfordern",
          link: "/de/kontakt"
        }}
      />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Google Ads für B2B – mit Fokus auf Ergebnisse
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir nutzen Google Ads zur Lead-Generierung – nicht für Klicks ohne Wirkung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Suchkampagnen</h3>
              <p>Ihre Zielgruppe sucht – wir liefern passende Anzeigen: mit Keyword-Targeting, Anzeigenerweiterungen & Conversion-Tracking.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Layout className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Landingpages</h3>
              <p>Performance beginnt nach dem Klick: Wir erstellen schnelle, mobileoptimierte Zielseiten mit klarer Botschaft und UX-Fokus.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <RefreshCw className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Laufende Optimierung</h3>
              <p>Wir testen, analysieren und verbessern kontinuierlich – für niedrigere Kosten pro Lead und steigende Conversion Rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Unser Tech-Stack für bessere Ergebnisse
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8">
              Wir setzen auf Tools und Methoden, die Performance messbar machen und automatisiert verbessern:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Ads (Search, Display, Brand, Remarketing)",
              "Google Tag Manager",
              "Consent Mode v2",
              "Conversion API & Tracking-Setup",
              "Zielgruppen-Segmentierung über Google Signals",
              "KI-gestützte Anzeigentexte & Visuals via ChatGPT & Midjourney"
            ].map((tech, index) => (
              <div key={index} className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-brand-text italic">
              Hinweis: Wir nutzen diese Tools zur Unterstützung – nicht als Ersatz für Expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Unser Ablauf – von der Analyse zur skalierbaren Kampagne
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Setup",
                description: "Bestehende Kampagnen analysieren, Tracking prüfen, Zieldefinition festlegen"
              },
              {
                step: "02",
                title: "Kampagnenstruktur & Zielseiten",
                description: "Klare Anzeigengruppen, Conversion-Fokus, A/B-getestete Landingpages"
              },
              {
                step: "03",
                title: "Optimierung & Skalierung",
                description: "Laufende Keyword-Optimierung, Budgetsteuerung, Performance-Messung"
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
          
          <div className="text-center mt-12">
            <Button variant="link" asChild className="group">
              <Link to="/de/webentwicklung" className="flex items-center gap-2 text-brand-primary">
                Mehr über unsere Landingpages & Webentwicklung
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} customTitle="Häufige Fragen zu Google Ads" />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Lassen Sie uns Ihre Google Ads optimieren
            </h2>
            <p className="text-xl text-brand-text mb-8">
              Mit unserer datengesteuerten Herangehensweise verbessern wir Ihren ROI, senken die Kosten pro Lead und machen Ihre Kampagnen zum echten Vertriebskanal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="group" asChild>
                <Link to="/de/kontakt">
                  Kostenlose Kampagnenanalyse
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/de/kontakt">
                  Strategiegespräch buchen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>100+ erfolgreiche Projekte</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>Vertraut von führenden Unternehmen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>KI-gestützte Performance-Strategien</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanGoogleAds;
