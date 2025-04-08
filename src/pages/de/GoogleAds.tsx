import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import { ArrowRight, Search, Layout, RefreshCw, Target, LineChart, MousePointerClick, Bot, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

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
      answer: "Die meisten unserer Kunden starten mit 1.000–3.000 € monatlich – angepasst an Branche, Wettbewerb und Ziele."
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
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website-Probleme, die Leads kosten – wir lösen sie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Keine Inbound-Leads",
                context: "Besucher kommen, aber ohne Kontaktaufnahme",
                solution: "Wir entwickeln Kampagnen und Landingpages, die B2B-Besucher in echte Kontakte verwandeln"
              },
              {
                problem: "Werbebudget verpufft",
                context: "ROI unklar, Budget verschwindet",
                solution: "Wir tracken jeden Klick, optimieren kontinuierlich und schützen mit Click-Fraud-Technologie vor Fake-Traffic"
              },
              {
                problem: "Falsche Zielgruppe",
                context: "Besucher springen ohne Aktion ab",
                solution: "Unsere Kampagnen nutzen KI-Targeting, um Entscheider zu erreichen – keine \"Klick-Touristen\""
              },
              {
                problem: "Keine Strategie",
                context: "Unkoordinierte Maßnahmen, kein Wachstum",
                solution: "Wir verbinden Kampagnen, Content und Daten zu einem performanten System mit klarem Ziel"
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
      
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
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
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Google Ads für messbare Ergebnisse
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Von der Strategie bis zur Optimierung – wir kümmern uns um Ihre Google Ads Performance.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="group" asChild>
              <Link to="/de/kontakt">
                Jetzt Ihre Google Ads Kampagne starten
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Erweiterte Leistungen für maximale Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Performance-orientierte Kampagnen mit Fokus auf B2B-Keywords und Conversion-Optimierung"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "KI-gestützte Kampagnensteuerung",
                description: "Wir nutzen KI-Tools zur Verbesserung von Anzeigenqualität, Keyword-Performance und Targeting"
              },
              {
                icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landingpage Design & Entwicklung",
                description: "Wir erstellen Zielseiten, die schnell laden, klar kommunizieren und zu Leads konvertieren"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimierung (CRO)",
                description: "Wir testen jedes Element – von Headlines bis CTAs – um Ihre Conversion-Raten schrittweise zu verbessern"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics, Tracking & Click-Fraud-Schutz",
                description: "Wir tracken jede Aktion, überwachen Performance und schützen Ihr Budget vor ungültigen Klicks"
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

      <section className="py-16 md:py-24 bg-brand-backgroundAlt overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Unser Kampagnen-Prozess – von Strategie bis Skalierung
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Strategie & Setup",
                description: "Zielgruppen, Angebote, Budgets und KPIs definieren"
              },
              {
                step: "02",
                title: "Landingpage-Erstellung",
                description: "Mobileoptimierte Seiten mit klarem Nutzen & schneller Ladezeit"
              },
              {
                step: "03",
                title: "Kampagnen-Setup",
                description: "Anzeigen starten – Search, Display & Performance Max"
              },
              {
                step: "04",
                title: "Tracking & Schutz",
                description: "Ereignisse erfassen, Klickbetrug blockieren, Datenqualität sichern"
              },
              {
                step: "05",
                title: "Reporting & Optimierung",
                description: "A/B-Tests, Funnel-Analysen & wöchentliche Verbesserungen"
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg border-l-4 border-brand-primary">
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
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Performance in Zahlen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+3x mehr qualifizierte Leads",
                description: "dank KI-Targeting & strategischer Landingpages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "-40% Absprungrate",
                description: "durch Conversion-optimierte Texte & bessere UX"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+70% höhere CTR",
                description: "durch bessere Anzeigentexte & Keyword-Strategie"
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
      
      <section className="py-24 bg-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ customFaqs={googleAdsFaqs} customTitle="Häufige Fragen zu Google Ads" />
      
      <CTA 
        title="Bereit, Ihre Google Ads-Performance zu transformieren?"
        subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, bessere Ergebnisse aus Ihren Werbeausgaben zu erzielen."
        primaryCta="Starten Sie Ihr Google Ads-Projekt"
      />
      
      <div className="bg-brand-backgroundAlt py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-brand-text font-sans text-center">
            <span className="font-bold">100+ erfolgreich umgesetzte Projekte</span> • 
            <span className="mx-2">Vertraut von führenden Unternehmen</span> • 
            <span className="font-bold">KI-gestützte Performance-Strategien für maximale Wirkung</span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default GermanGoogleAds;
