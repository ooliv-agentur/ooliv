
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import { ArrowRight, Target, LineChart, MousePointerClick, Bot, Shield, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GoogleAdsSEOText from '@/components/google-ads/GoogleAdsSEOText';

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

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<GoogleAdsSEOText />}
    >
      <Helmet>
        <title>Google Ads Agentur Mainz – Kampagnenoptimierung & Leadgenerierung | ooliv</title>
        <meta name="description" content="Mit ooliv als Google Ads Agentur Mainz sichern Sie sich Leads, Umsatzwachstum und volle Transparenz. Jetzt Analyse sichern!" />
      </Helmet>

      {/* Hero Section - Following German startpage master design */}
      <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
        {/* Enhanced floating circles animation - same as startpage */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
          <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
          <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
          <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
          <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
          <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
          <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
          <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
          <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
        </div>
        
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
              {/* Main heading */}
              <h1 
                className="font-medium mb-6 sm:mb-8 leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
                style={{ 
                  color: '#003343' 
                }}
              >
                Google Ads Agentur Mainz – Leads statt nur Klicks
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left"
                style={{ lineHeight: '1.6' }}
              >
                Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt.
              </p>
              
              {/* CTA buttons - matching startpage style */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  style={{ 
                    backgroundColor: '#FFD700', 
                    color: '#003347',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD700';
                  }}
                  onClick={handleStartProject}
                >
                  Kampagne starten
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                  onClick={handleStartProject}
                >
                  Kostenlose Analyse anfordern
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual transition indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
            <div className="flex space-x-1">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section - White background with dark headline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medico-darkGreen">
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
              <div key={i} className="bg-medico-mint rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-medico-turquoise font-bold mb-3">PROBLEM:</div>
                <h3 className="text-lg font-bold mb-2 text-medico-darkGreen">{item.problem}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.context}</p>
                <div className="text-medico-turquoise font-bold mb-2">LÖSUNG:</div>
                <p className="text-medico-darkGreen">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleAdsLeadGeneration />

      {/* Services Section - White background instead of dark */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medico-darkGreen">
              Erweiterte Leistungen für maximale Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-medico-turquoise" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Performance-orientierte Kampagnen mit Fokus auf B2B-Keywords und Conversion-Optimierung"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-medico-turquoise" />,
                title: "KI-gestützte Kampagnensteuerung",
                description: "Wir nutzen KI-Tools zur Verbesserung von Anzeigenqualität, Keyword-Performance und Targeting"
              },
              {
                icon: <Layout className="h-10 w-10 mb-4 text-medico-turquoise" />,
                title: "Landingpage Design & Entwicklung",
                description: "Wir erstellen Zielseiten, die schnell laden, klar kommunizieren und zu Leads konvertieren"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-medico-turquoise" />,
                title: "Conversion Rate Optimierung (CRO)",
                description: "Wir testen jedes Element – von Headlines bis CTAs – um Ihre Conversion-Raten schrittweise zu verbessern"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-medico-turquoise" />,
                title: "Analytics, Tracking & Click-Fraud-Schutz",
                description: "Wir tracken jede Aktion, überwachen Performance und schützen Ihr Budget vor ungültigen Klicks"
              }
            ].map((service, index) => (
              <div key={index} className="bg-medico-mint p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">{service.title}</h3>
                <p className="text-medico-darkGreen">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleAdsProcess />

      {/* Performance Metrics Section */}
      <section className="py-16 md:py-24 bg-medico-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medico-darkGreen">
              Performance in Zahlen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-medico-turquoise" />,
                metric: "+3x mehr qualifizierte Leads",
                description: "dank KI-Targeting & strategischer Landingpages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-medico-turquoise" />,
                metric: "-40% Absprungrate",
                description: "durch Conversion-optimierte Texte & bessere UX"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-medico-turquoise" />,
                metric: "+70% höhere CTR",
                description: "durch bessere Anzeigentexte & Keyword-Strategie"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-medico-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <h3 className="text-2xl font-bold my-3 text-medico-turquoise">{metric.metric}</h3>
                <p className="text-medico-darkGreen">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24" style={{ backgroundColor: '#0A1E2C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      <FAQ customFaqs={googleAdsFaqs} customTitle="Häufige Fragen zu Google Ads" />

      <CTA 
        title="Lassen Sie uns Ihre Google Ads messbar machen"
        subtitle="Sie brauchen keine weiteren Klicks – sondern Leads, die konvertieren. Gemeinsam entwickeln wir einen Performance-Funnel, der von der Anzeige bis zur Conversion funktioniert."
        primaryCta="Kampagne starten"
        secondaryCtaLink="/de/kontakt"
      />
    </PageLayout>
  );
};

export default GermanGoogleAds;
