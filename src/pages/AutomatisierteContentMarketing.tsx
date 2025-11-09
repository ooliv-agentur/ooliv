import React from 'react';
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Zap, Globe, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';

const AutomatisierteContentMarketing = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { 
        mode: 'project',
        initialData: {
          projectType: 'ai-content'
        }
      } 
    }));
  };

  const benefits = [
    {
      icon: Clock,
      title: "Täglich frischer Content",
      description: "Automatisch generierte, SEO-optimierte Artikel – jeden Tag neue Inhalte ohne Aufwand."
    },
    {
      icon: Zap,
      title: "Sofortige Social Media Verteilung",
      description: "Automatische Verbreitung auf LinkedIn, Twitter, Facebook und weitere Plattformen."
    },
    {
      icon: Globe,
      title: "Mehrsprachiger Support",
      description: "Content in über 20 Sprachen – perfekt für internationale Märkte."
    },
    {
      icon: TrendingUp,
      title: "SEO & KI-Optimiert",
      description: "Optimiert für Google UND ChatGPT, Claude, Gemini – die Zukunft der Suche."
    },
    {
      icon: Users,
      title: "Backlink-Netzwerk",
      description: "Automatischer Austausch hochwertiger Backlinks mit anderen Unternehmen."
    },
    {
      icon: Target,
      title: "Zielgruppengenau",
      description: "Content basiert auf Echtzeitdaten, Trends und Ihrer spezifischen Zielgruppe."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Setup & Analyse",
      description: "Wir analysieren Ihr Unternehmen, Ihre Zielgruppe und erstellen eine 30-Tage Content-Strategie."
    },
    {
      step: "02", 
      title: "KI-Training",
      description: "Unsere Systeme lernen Ihre Markenstimme, damit die Inhalte klingen, als kämen sie von Ihrem eigenen Team."
    },
    {
      step: "03",
      title: "Automatisierung",
      description: "Tägliche Artikel-Erstellung, automatische Veröffentlichung und Social Media Distribution."
    },
    {
      step: "04",
      title: "Monitoring & Optimierung",
      description: "Kontinuierliche Leistungsüberwachung und Optimierung basierend auf Echtzeitdaten."
    }
  ];

  const faqs = [
    {
      question: "Wie funktioniert die automatische Content-Erstellung?",
      answer: "Unser KI-System analysiert täglich aktuelle Trends, Ihre Branche und Zielgruppe. Basierend darauf erstellt es SEO-optimierte Artikel, die Ihrem Tonfall entsprechen und automatisch auf Ihrer Website und Social Media veröffentlicht werden."
    },
    {
      question: "Welche Plattformen werden für die automatische Verteilung unterstützt?",
      answer: "Wir unterstützen WordPress, Webflow, Shopify, Wix und weitere CMS-Systeme sowie Social Media Plattformen wie LinkedIn, Twitter, Facebook und Instagram. Die Integration erfolgt über sichere APIs."
    },
    {
      question: "Wie wird die Qualität des automatisch erstellten Contents sichergestellt?",
      answer: "Alle Artikel durchlaufen mehrere Qualitätsprüfungen: KI-basierte Faktenprüfung, Plagiatskontrolle, SEO-Optimierung und Brand-Consistency-Check. Bei Bedarf können Sie auch manuell Freigaben einrichten."
    },
    {
      question: "Was kostet die automatisierte Content-Marketing Lösung?",
      answer: "Die Preise beginnen bei 299€/Monat und beinhalten 30 Artikel, automatische Veröffentlichung, Social Media Distribution und Backlink-Aufbau. Größere Pakete und Enterprise-Lösungen sind verfügbar."
    },
    {
      question: "Wie schnell sehe ich Ergebnisse mit automatisiertem Content Marketing?",
      answer: "Erste SEO-Verbesserungen sind meist nach 2-3 Wochen messbar. Signifikante Traffic-Steigerungen und bessere Rankings entwickeln sich typischerweise nach 2-3 Monaten kontinuierlicher Content-Veröffentlichung."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Automatisierte Content Marketing", url: "https://ooliv.de/automatisierte-content-marketing" }
  ];

  return (
    <>
      <PageLayout>
        <EnhancedSEOHead
          title="KI-Content-Marketing – Automatisierte Artikel im Autopilot | ooliv"
          description="KI-Content-Marketing – Täglich frische SEO-Artikel im Autopilot. Social Media Distribution & Backlinks automatisch. Demo vereinbaren!"
          canonicalUrl="https://ooliv.de/automatisierte-content-marketing"
          keywords="Automatisierte Content Marketing, KI Content, SEO Automation, Content Erstellung, AI Marketing"
          breadcrumbs={breadcrumbs}
        />
        <PageHero
          title="Ihr Content-Team, das niemals schläft"
          subtitle="Automatisierte Content-Erstellung und -Verteilung mit KI"
          description="Täglich frische, SEO-optimierte Artikel. Automatische Social Media Distribution. Backlink-Aufbau im Autopilot. Lassen Sie KI für Ihr Content Marketing arbeiten."
          primaryCta={{
            text: "Kostenlose Testphase starten",
            link: "#",
            onClick: handleStartProject
          }}
        />

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Warum automatisiertes Content Marketing die Zukunft ist
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Während Sie schlafen, arbeitet Ihr Content-System. Täglich neue Artikel, automatische Verteilung und kontinuierlicher Traffic-Aufbau.
                </p>
              </div>
            </Reveal>
            
            <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <TurquoiseCard key={index} icon={benefit.icon} hoverLift>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </TurquoiseCard>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Mini-CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent-primary to-accent-primary/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h3 className="text-2xl font-bold mb-4">
                👉 Lassen Sie uns zeigen, wie Ihr Content-System in wenigen Tagen live ist.
              </h3>
              <p className="text-lg mb-8 text-white/90">
                Kostenlose Demo und individuelle Beratung – ohne Verpflichtung.
              </p>
          <Button 
            onClick={handleStartProject}
            size="lg"
            className="bg-white text-turquoise hover:bg-gray-50 font-semibold px-8 py-3"
          >
            Kostenlose Beratung vereinbaren
          </Button>
            </Reveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  So funktioniert automatisiertes Content Marketing
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Von der Einrichtung bis zum laufenden Betrieb – ein transparenter Prozess für maximale Effizienz.
                </p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <TurquoiseCard variant="default" hoverLift>
                    <TurquoiseBadge variant="solid" size="lg" className="mb-6">
                      {item.step}
                    </TurquoiseBadge>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </TurquoiseCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Was Sie mit automatisiertem Content Marketing erreichen
                </h2>
              </div>
            </Reveal>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-turquoise flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Bewährte Enterprise-Technologie aus dem Silicon Valley
                      </h3>
                      <p className="text-muted-foreground">
                        Als zertifizierte Partner bringen wir diese erprobte KI-Technologie mit lokaler Betreuung und deutschsprachigem Support zu Ihnen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-brand-heading mb-2">
                        Ranking bei Google UND ChatGPT
                      </h3>
                      <p className="text-brand-text">
                        Optimiert für traditionelle Suchmaschinen und neue KI-basierte Suchsysteme.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-brand-heading mb-2">
                        Echtzeitdaten als Grundlage
                      </h3>
                      <p className="text-brand-text">
                        Content basiert auf aktuellen Google-Ergebnissen, Reddit, Quora und Fachpublikationen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <TurquoiseCard variant="soft" className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Typische Ergebnisse nach 3 Monaten:
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Organischer Traffic</span>
                    <span className="text-turquoise font-bold">+340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Domain Rating (DR)</span>
                    <span className="text-turquoise font-bold">+8 Punkte</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Neue Keywords</span>
                    <span className="text-turquoise font-bold">+700</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Qualitative Backlinks</span>
                    <span className="text-turquoise font-bold">+210</span>
                  </div>
                </div>
              </TurquoiseCard>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-foreground text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">
                  Automatisiertes Content Marketing für Ihr Unternehmen
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Als spezialisierte Agentur für SEO Automation revolutionieren wir die Art, wie Unternehmen Content erstellen und verteilen.
                </p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-white/90 mb-6">
                  <strong className="text-white">Automatisiertes Content Marketing</strong> ist mehr als nur ein Trend – es ist die Zukunft effizienter Unternehmenskommunikation. Mit KI Content Distribution erreichen Sie Ihre Zielgruppe präzise und kontinuierlich, während traditionelle Ansätze an ihre Grenzen stoßen.
                </p>
                <p className="text-white/90 mb-6">
                  Unsere <strong className="text-white">SEO Automation Mainz</strong> Services kombinieren lokale Expertise mit internationaler Technologie. So entstehen Content-Systeme, die nicht nur heute funktionieren, sondern auch für die Herausforderungen von morgen gerüstet sind.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Ihre Vorteile im Überblick:</h3>
                <ul className="space-y-3 text-white/90">
                  <li>• <strong className="text-white">Lokale Betreuung:</strong> Direkter Ansprechpartner in Mainz</li>
                  <li>• <strong className="text-white">Bewährte Technologie:</strong> Enterprise-Systeme aus dem Silicon Valley</li>
                  <li>• <strong className="text-white">Deutschsprachiger Support:</strong> Kommunikation ohne Barrieren</li>
                  <li>• <strong className="text-white">Branchenexpertise:</strong> Spezialisiert auf B2B-Unternehmen</li>
                  <li>• <strong className="text-white">Messbare Erfolge:</strong> ROI-fokussierte Implementierung</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          customFaqs={faqs}
          customTitle="Häufige Fragen zu automatisiertem Content Marketing"
        />
        
        <CTA
          title="Bereit für Content Marketing im Autopilot?"
          subtitle="Lassen Sie uns besprechen, wie automatisierte Content-Systeme Ihr Unternehmen voranbringen können."
          primaryCta="Jetzt Demo vereinbaren"
          lightBackground={false}
        />
      </PageLayout>
    </>
  );
};

export default AutomatisierteContentMarketing;