import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GooglePartnerBadge from '@/components/google-ads/GooglePartnerBadge';
import { ArrowRight, Target, LineChart, MousePointerClick, Bot, Shield, Layout } from 'lucide-react';

import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Link } from 'react-router-dom';
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';
import { H2, H3, Paragraph } from '@/components/ui/typography';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Google Ads", url: "https://ooliv.de/google-ads" }
  ];

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
    >
      <EnhancedSEOHead
        title="Google Ads Agentur – KI-gestützte Kampagnen für B2B | ooliv"
        description="ooliv Digitalagentur: B2B-Lead-Generierung durch Google Ads, SEO & Content-Marketing. KI-gestützt, messbar, conversion-fokussiert – Jetzt starten."
        canonicalUrl="https://ooliv.de/google-ads"
        keywords="Google Ads Agentur, B2B Google Ads, PPC Marketing, Online Werbung, Lead-Generierung"
        breadcrumbs={breadcrumbs}
      />
      
      <ServiceSchemaGenerator
        serviceName="Google Ads Betreuung"
        description="Professionelle Google Ads Kampagnen-Betreuung für B2B-Unternehmen. Maximale Conversion und ROI."
        serviceType="AdvertisingService"
        priceRange="€1000-€5000"
        offers={[
          {
            name: "Google Ads Setup",
            description: "Kampagnen-Erstellung und erste Optimierung",
            priceRange: "€1000-€2000"
          },
          {
            name: "Monatliche Betreuung",
            description: "Laufende Optimierung und Reporting",
            priceRange: "€1500-€3000"
          },
          {
            name: "Performance Marketing Plus",
            description: "Vollbetreuung mit Landingpages und CRO",
            priceRange: "€3000-€5000"
          }
        ]}
      />

      <GoogleAdsHero />

      {/* Problems Section - White background with dark headline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <H2 className="mb-4" alignment="center">
              Website-Probleme, die Leads kosten – wir lösen sie
            </H2>
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
              <TurquoiseCard key={i} variant="default" hoverLift>
                <TurquoiseBadge variant="solid" size="sm" className="mb-3">PROBLEM</TurquoiseBadge>
                <H3 className="mb-2">{item.problem}</H3>
                <Paragraph className="text-sm mb-4" color="secondary">{item.context}</Paragraph>
                <TurquoiseBadge variant="soft" size="sm" className="mb-2">LÖSUNG</TurquoiseBadge>
                <Paragraph>{item.solution}</Paragraph>
              </TurquoiseCard>
            ))}
          </div>
        </div>
      </section>

      <GooglePartnerBadge />

      <GoogleAdsLeadGeneration />

      {/* Services Section - White background instead of dark */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <H2 className="mb-4" alignment="center">
              Erweiterte Leistungen für maximale Performance
            </H2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Google Ads (Search, Display & PMax)",
                description: "Performance-orientierte Kampagnen mit Fokus auf B2B-Keywords und mehr Anfragen generieren"
              },
              {
                icon: Bot,
                title: "KI-gestützte Kampagnensteuerung",
                description: "Wir nutzen KI-Tools zur Verbesserung von Anzeigenqualität, Keyword-Performance und Targeting"
              },
              {
                icon: Layout,
                title: "Landingpage Design & Entwicklung",
                description: "Wir erstellen Zielseiten, die schnell laden, klar kommunizieren und zu Leads konvertieren"
              },
              {
                icon: MousePointerClick,
                title: "Conversion Rate Optimierung (CRO)",
                description: "Wir testen jedes Element – von Headlines bis CTAs – um Ihre Conversion-Raten schrittweise zu verbessern"
              },
              {
                icon: Shield,
                title: "Analytics, Tracking & Click-Fraud-Schutz",
                description: "Wir tracken jede Aktion, überwachen Performance und schützen Ihr Budget vor ungültigen Klicks"
              }
            ].map((service, index) => (
              <TurquoiseCard key={index} icon={service.icon} hoverLift>
                <H3 className="mb-2">{service.title}</H3>
                <Paragraph color="secondary">{service.description}</Paragraph>
              </TurquoiseCard>
            ))}
          </div>
        </div>
      </section>

      <GoogleAdsProcess />

      {/* Budget-Signal Google Ads */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <TurquoiseCard variant="soft">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Was kostet eine professionelle Google Ads Kampagne?
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Setup & Strategie: <span className="text-turquoise font-bold">ab €500</span> (einmalig)<br/>
              Laufende Betreuung & Optimierung: <span className="text-turquoise font-bold">ab €250/Monat</span> + Ihr Werbebudget<br/>
              Empfohlenes monatliches Werbebudget: <span className="text-turquoise font-bold">mindestens €2.000</span>
            </p>
            <TurquoiseBadge variant="outline" size="sm">
              Für B2B-Kampagnen mit hohem Ticket-Wert empfehlen wir €5.000+ Werbebudget/Monat
            </TurquoiseBadge>
          </TurquoiseCard>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <H2 className="mb-4" alignment="center">
              Performance in Zahlen
            </H2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-primary" />,
                metric: "+3x mehr qualifizierte Leads",
                description: "dank KI-Targeting & strategischer Landingpages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-primary" />,
                metric: "-40% Absprungrate",
                description: "durch Conversion-optimierte Texte & bessere UX"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-primary" />,
                metric: "+70% höhere CTR",
                description: "durch bessere Anzeigentexte & Keyword-Strategie"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-md text-center border border-border">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <H3 className="my-3 text-primary">{metric.metric}</H3>
                <Paragraph>{metric.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Now with white background */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      <Paragraph className="text-center text-sm mt-4">
        Mehr über <Link to="/" className="underline hover:no-underline">ooliv und unsere Arbeitsweise</Link>.
      </Paragraph>

      <FAQ customFaqs={googleAdsFaqs} customTitle="Häufige Fragen zu Google Ads" />

      <CTA 
        title="Lassen Sie uns Ihre Google Ads messbar machen"
        subtitle="Sie brauchen keine weiteren Klicks – sondern Leads, die konvertieren. Gemeinsam entwickeln wir einen Performance-Funnel, der von der Anzeige bis zur Conversion funktioniert."
        primaryCta="Kampagne starten"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default GermanGoogleAds;
