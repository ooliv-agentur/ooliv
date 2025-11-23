import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, Users, Workflow, Brain, BarChart3, Zap, TrendingUp,
  AlertCircle, Search, Map, CheckCircle2, ArrowRight, Layers,
  GitBranch, Lightbulb, Settings, Clock, Award
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const DigitaleTransformationStrategie = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digitale Transformation & Strategie", url: "https://ooliv.de/digitale-transformation-strategie" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Digitale Transformation Beratung | Strategie, Prozesse, AI & Roadmaps – ooliv"
        description="Beratung für digitale Transformation: Roadmaps, Prozessoptimierung, Customer Journey Mapping, digitale Workflows, AI-Integration. Senior-Level Strategie. 200+ Digitalprojekte."
        canonicalUrl="https://ooliv.de/digitale-transformation-strategie"
        keywords="digitale transformation beratung, digitale transformation strategie, digitale transformation agentur, digitale prozesse optimieren, digitale roadmap erstellen, customer journey mapping, digitale effizienz steigern, organisationsentwicklung digital, digitale prozessautomatisierung, digitale tools einführen, ai-workflows implementieren, digitaler reifegrad, digitale priorisierung, effiziente workflows, digitalisierung unternehmen, strategie workshop digital, change management digital, team enablement digital, prozessdigitalisierung, unternehmensdigitalisierung, digitale transformation mittelstand"
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digitale Transformation Beratung",
            "provider": {
              "@type": "Organization",
              "name": "ooliv Werbeagentur",
              "url": "https://ooliv.de"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Deutschland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digitale Transformation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digitale Strategie & Roadmap"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Customer Journey Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Prozessdigitalisierung & Automatisierung"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI-Workflows & Integration"
                  }
                }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was ist digitale Transformation wirklich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digitale Transformation bedeutet mehr als neue Tools einzuführen. Es geht darum, Geschäftsprozesse, Customer Journeys und Entscheidungswege neu zu denken — mit dem Ziel, schneller, effizienter und datenbasiert zu arbeiten. Wir entwickeln klare Strategien und Roadmaps, die Ihr gesamtes digitales Ökosystem modernisieren."
                }
              },
              {
                "@type": "Question",
                "name": "Was kostet eine digitale Transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Kosten hängen vom Umfang ab. Eine digitale Strategie mit Roadmap beginnt ab 8.000 €. Komplette Transformationsprojekte mit Implementierung starten ab 25.000 €. Wir bieten eine kostenlose Erstanalyse, um Ihren Bedarf zu verstehen und ein transparentes Angebot zu erstellen."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert die Umsetzung?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eine digitale Strategie und Roadmap entwickeln wir in 3-6 Wochen. Die Implementierung erfolgt phasenweise und dauert je nach Komplexität 3-12 Monate. Wir arbeiten iterativ, sodass Sie kontinuierlich Fortschritte sehen und erste Ergebnisse oft nach 30-60 Tagen messbar sind."
                }
              },
              {
                "@type": "Question",
                "name": "Arbeiten Sie auch mit bestehenden Systemen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja! Wir analysieren Ihre bestehende Infrastruktur und entwickeln Lösungen, die sich nahtlos integrieren. Unser Ansatz ist technologieneutral — wir empfehlen nur Tools, die wirklich Mehrwert bringen. Bei Bedarf modernisieren wir schrittweise, ohne Ihren laufenden Betrieb zu stören."
                }
              },
              {
                "@type": "Question",
                "name": "Welche Branchen betreuen Sie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir arbeiten mit B2B-Unternehmen, Mittelstand und Dienstleistern aus verschiedenen Branchen — von Steuerberatung über Industrie bis zu Tech-Unternehmen. Unsere Expertise liegt in der Entwicklung maßgeschneiderter digitaler Strategien, die branchenspezifische Anforderungen berücksichtigen."
                }
              },
              {
                "@type": "Question",
                "name": "Was unterscheidet Sie von anderen Agenturen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir sind keine Junior-getriebene Agentur. Jedes Projekt wird von Senior-Experten geführt und von unserem Hybridteam aus Strategie, UX, Development und Content umgesetzt. Sie arbeiten direkt mit dem Gründer und einem festen Team — ohne Outsourcing, ohne ständig wechselnde Ansprechpartner."
                }
              },
              {
                "@type": "Question",
                "name": "Bieten Sie auch Support nach dem Launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja — digitale Transformation ist ein kontinuierlicher Prozess. Wir bieten Post-Launch-Support, Monitoring und fortlaufende Optimierung. Sie entscheiden, ob Sie eigenständig weitermachen oder uns für langfristige Betreuung und Weiterentwicklung an Bord behalten möchten."
                }
              }
            ]
          }
        ]}
      />

      {/* SECTION 1 — HERO */}
      <section id="hero">
        <PageHero
          title="Digitale Transformation Beratung für Unternehmen"
          subtitle="Wir entwickeln klare digitale Strategien, optimieren digitale Prozesse und implementieren AI-gestützte Workflows — damit Unternehmen schneller entscheiden, besser arbeiten und messbar wachsen."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Arbeitsweise ansehen",
          link: "#",
          onClick: () => scrollToSection('vorgehensweise')
        }}
        />
      </section>

      {/* Trust Bullets */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, text: "100+ Projekte" },
              { icon: Users, text: "Direkter Kontakt zum Gründer" },
              { icon: Target, text: "Senior-Level Beratung" },
              { icon: BarChart3, text: "Klare KPIs & echte Ergebnisse" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Warum digitale Transformation scheitert */}
      <section id="warum-scheitert" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Die häufigsten Gründe, warum digitale Transformation scheitert
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: Map,
                title: "Fehlende digitale Roadmap",
                description: "Projekte ohne Priorisierung und klare digitale Struktur."
              },
              {
                icon: Workflow,
                title: "Veraltete Prozesse & Silos",
                description: "Abteilungen arbeiten gegeneinander statt gemeinsam digital."
              },
              {
                icon: BarChart3,
                title: "Fehlende datenbasierte Entscheidungen",
                description: "Bauchgefühl statt Fakten und digitale Kennzahlen."
              },
              {
                icon: Settings,
                title: "Zu viele Tools, zu wenig digitale Strategie",
                description: "Technologie ohne klare Ziele und Anwendungsfälle."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 text-destructive rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xl font-semibold text-foreground"
          >
            Wir lösen nicht nur technische Aufgaben — wir richten Ihr gesamtes digitales Ökosystem neu aus.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — Unser Transformations-Framework */}
      <section id="framework" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unser strukturierter Ansatz für digitale Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unsere hybride Struktur aus Strategie, UX, Development und Content sorgt dafür, dass digitale Transformation ganzheitlich realisiert wird.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Digitale Analyse & Reifegrad-Modell",
                items: [
                  "Digitaler Reifegrad bestimmen",
                  "Prozessaufnahme durchführen",
                  "Wettbewerbsanalyse erstellen"
                ]
              },
              {
                icon: Map,
                title: "Digitale Strategie & Roadmap erstellen",
                items: [
                  "Value Proposition definieren",
                  "Digitale Priorisierung festlegen",
                  "KPIs & Zielbilder entwickeln",
                  "Entscheidungsarchitektur aufbauen"
                ]
              },
              {
                icon: Zap,
                title: "Digitale Implementierung & Enablement",
                items: [
                  "Digitale Prozesse optimieren",
                  "Technologie-Einführung begleiten",
                  "Team-Fähigkeiten steigern"
                ]
              },
              {
                icon: Brain,
                title: "AI-Workflows & Automatisierung",
                items: [
                  "AI-Workflows implementieren",
                  "Digitale Prozessautomatisierung umsetzen",
                  "Operative Effizienz steigern"
                ]
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                    <block.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {block.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Digitale Roadmaps */}
      <section id="roadmaps" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Digitale Roadmaps, die Teams wirklich nutzen können
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Fokus auf ROI und messbare Ergebnisse",
                  "Keine endlosen PowerPoints",
                  "Klare Milestones und Timelines",
                  "Technologieneutral und zukunftssicher",
                  "Operative Übersetzung für alle Teams"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground mb-4">
                Roadmaps, die Teams verstehen und umsetzen können.
              </p>
              <p className="text-base text-muted-foreground">
                Mit unserer digitalen Strategie-Beratung entwickeln wir Roadmaps, die digitale Effizienz steigern und klare Prioritäten setzen — keine Theorie, sondern umsetzbare digitale Transformation.
              </p>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-muted/50 rounded-lg p-8 border border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <GitBranch className="w-16 h-16 text-muted-foreground mx-auto mb-4" aria-label="Digitale Roadmap Visualisierung für Unternehmen" />
                <p className="text-sm text-muted-foreground">Digitale Roadmap Visualisierung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Customer Journey & Entscheidungsarchitektur */}
      <section id="customer-journey" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Visual Placeholder */}
            <div className="bg-background rounded-lg p-8 border border-border flex items-center justify-center min-h-[400px] order-2 lg:order-1">
              <div className="text-center">
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" aria-label="Customer Journey Mapping Diagramm" />
                <p className="text-sm text-muted-foreground">Customer Journey Map</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Customer Journey Mapping & digitale Nutzerführung
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Journey Mapping
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Wir visualisieren jeden Touchpoint und identifizieren Optimierungspotenziale.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Priorisierte Touchpoints
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Fokus auf die kritischen Momente, die Entscheidungen beeinflussen.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Conversion-Bottlenecks identifizieren
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Wir finden und eliminieren Reibung in der User Journey.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Messbare KPIs je Phase
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Datenbasierte Optimierung für jede Etappe der Journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — Digitale Prozesse & Modernisierung */}
      <section id="prozesse" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prozesse digitalisieren und automatisieren
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Digitale Prozessautomatisierung bedeutet nicht mehr Tools — sondern weniger Komplexität und höhere Effizienz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Prozessanalyse",
                description: "Bestehende Abläufe verstehen und dokumentieren."
              },
              {
                icon: TrendingUp,
                title: "Eliminierung redundanter Arbeit",
                description: "Ineffizienzen identifizieren und beseitigen."
              },
              {
                icon: Zap,
                title: "Automatisierte Abläufe",
                description: "Wiederholende Aufgaben intelligent automatisieren."
              },
              {
                icon: Layers,
                title: "Tool-Stacks modernisieren",
                description: "Die richtigen Tools für maximale Effizienz."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — AI-Integration & Automation */}
      <section id="ai-workflows" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AI-Workflows für effizientere Teams
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Search,
                title: "AI zur Recherche",
                description: "Intelligente Informationsbeschaffung und Analyse in Sekunden."
              },
              {
                icon: Brain,
                title: "AI für Content & SEO",
                description: "Content-Erstellung, Optimierung und Skalierung mit AI."
              },
              {
                icon: Workflow,
                title: "AI für interne Abläufe",
                description: "Automatisierung von Routineaufgaben und Entscheidungsprozessen."
              },
              {
                icon: Zap,
                title: "Automatisierungs-Pipelines",
                description: "Ende-zu-Ende Automation für wiederkehrende Prozesse."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary/10 rounded-lg p-8 border border-primary/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Mehr über AI-Workflows erfahren
                </h3>
                <p className="text-base text-muted-foreground">
                  Entdecken Sie, wie wir AI in Ihre Prozesse integrieren.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/ai-workflows">
                  AI-Workflows ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 — Case Studies */}
      <section id="case-studies" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Digitale Transformation im Einsatz – echte Beispiele
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                client: "KLAIBER",
                industry: "Steuerberatung",
                result: "+180% mehr Anfragen",
                detail: "Digitale Prozesse & moderne Website",
                logo: caseStudiesData.de[0]?.logo,
                seoTag: "Digitale Transformation Steuerberatung"
              },
              {
                client: "COBUS",
                industry: "Flughafenbusse",
                result: "Vollständige digitale Transformation",
                detail: "B2B-Plattform & Prozessoptimierung",
                logo: caseStudiesData.de[1]?.logo,
                seoTag: "Digitale Transformation Industrie"
              },
              {
                client: "SPEZ",
                industry: "Automotive",
                result: "+90% Conversion",
                detail: "Optimierte Customer Journey",
                logo: caseStudiesData.de[2]?.logo,
                seoTag: "Customer Journey Optimierung Handwerk"
              },
              {
                client: "IconPro",
                industry: "KI-Software",
                result: "Skalierbare Plattform",
                detail: "AI-Integration & Automation",
                logo: caseStudiesData.de[3]?.logo,
                seoTag: "AI-Integration SaaS Unternehmen"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {item.seoTag}
                </span>
                <div className="bg-background p-4 rounded-lg mb-4 flex items-center justify-center min-h-[80px]">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.client} – ${item.seoTag} von ooliv`} className="h-10 w-auto" />
                  ) : (
                    <p className="font-bold text-lg text-foreground">{item.client}</p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.industry}</p>
                <p className="text-base font-semibold text-primary mb-2">{item.result}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/referenzen">
                Alle Referenzen ansehen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 — Vorgehensweise (Timeline) */}
      <section id="vorgehensweise" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              So begleiten wir Ihre digitale Transformation
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Digitale Analyse & Kickoff",
                  description: "Digitaler Reifegrad, Prozessaufnahme, Zieldefinition und Potenzialanalyse."
                },
                {
                  number: "02",
                  title: "Digitale Strategieentwicklung",
                  description: "Digitale Roadmap erstellen, Priorisierung, KPIs und Milestones festlegen."
                },
                {
                  number: "03",
                  title: "UX & Struktur",
                  description: "Informationsarchitektur, Wireframes, Prototypen entwickeln."
                },
                {
                  number: "04",
                  title: "Digitale Implementierung",
                  description: "Prozessmodernisierung, digitale Tools einführen, Team-Enablement durchführen."
                },
                {
                  number: "05",
                  title: "Optimierung & Support",
                  description: "Kontinuierliche Verbesserung, Monitoring, Skalierung und digitale Effizienz steigern."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <div className="bg-card rounded-lg p-8 border border-border shadow-sm inline-block w-full">
                      <div className="flex items-center gap-4 mb-4 lg:justify-end">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Team-Hybrid */}
      <section id="team" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Wer Ihre digitale Transformation begleitet
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Hybridteam für digitale Transformation: Strategie, Design, Entwicklung, Content und AI — interdisziplinäre digitale Beratung für vollständige Transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Uli",
                role: "Strategy & Transformation",
                icon: Target,
                expertise: "Digitale Strategieentwicklung"
              },
              {
                name: "Lisa",
                role: "Content & Kommunikation",
                icon: Lightbulb,
                expertise: "Content-Strategie & Copywriting"
              },
              {
                name: "Dorinel",
                role: "UX/UI Design",
                icon: Layers,
                expertise: "User Experience & Interface Design"
              },
              {
                name: "Parveen & Kamil",
                role: "Development",
                icon: Workflow,
                expertise: "Web- & Software-Entwicklung"
              },
              {
                name: "Paul",
                role: "SEO & Performance",
                icon: TrendingUp,
                expertise: "SEO-Optimierung & Analytics"
              },
              {
                name: "Giovanni",
                role: "Branding & Kreation",
                icon: Brain,
                expertise: "Brand Strategy & Visual Identity"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <member.icon className="w-8 h-8" aria-label={`${member.name} – ${member.role}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-2 text-center">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-lg font-semibold text-foreground mt-12"
          >
            Unsere hybride Struktur sorgt dafür, dass digitale Transformation nicht nur geplant, sondern vollständig realisiert wird — mit einem interdisziplinären Team, das alle Kompetenzen vereint.
          </motion.p>
        </div>
      </section>

      {/* SECTION 11 — CTA */}
      <section id="cta">
        <CTA 
          title="Bereit für klare digitale Strukturen?"
          subtitle="Starten Sie Ihre digitale Transformation mit einem kostenlosen Strategiegespräch"
          primaryCta="Projekt starten"
          secondaryCta="Kostenlose 15-Minuten-Einschätzung"
          secondaryCtaLink="#"
        />
      </section>

      {/* SECTION 12 — FAQ */}
      <section id="faq" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Häufige Fragen zur digitalen Transformation
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was ist digitale Transformation wirklich?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Digitale Transformation bedeutet mehr als neue Tools einzuführen. Es geht darum, Geschäftsprozesse, Customer Journeys und Entscheidungswege neu zu denken — mit dem Ziel, schneller, effizienter und datenbasiert zu arbeiten. Wir entwickeln klare Strategien und Roadmaps, die Ihr gesamtes digitales Ökosystem modernisieren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was kostet eine digitale Transformation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Die Kosten hängen vom Umfang ab. Eine digitale Strategie mit Roadmap beginnt ab 8.000 €. Komplette Transformationsprojekte mit Implementierung starten ab 25.000 €. Wir bieten eine kostenlose Erstanalyse, um Ihren Bedarf zu verstehen und ein transparentes Angebot zu erstellen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Wie lange dauert die Umsetzung?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Eine digitale Strategie und Roadmap entwickeln wir in 3-6 Wochen. Die Implementierung erfolgt phasenweise und dauert je nach Komplexität 3-12 Monate. Wir arbeiten iterativ, sodass Sie kontinuierlich Fortschritte sehen und erste Ergebnisse oft nach 30-60 Tagen messbar sind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Arbeiten Sie auch mit bestehenden Systemen?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ja! Wir analysieren Ihre bestehende Infrastruktur und entwickeln Lösungen, die sich nahtlos integrieren. Unser Ansatz ist technologieneutral — wir empfehlen nur Tools, die wirklich Mehrwert bringen. Bei Bedarf modernisieren wir schrittweise, ohne Ihren laufenden Betrieb zu stören.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Welche Tools empfehlen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Wir sind technologieneutral und wählen Tools basierend auf Ihren Zielen. Typische Empfehlungen: HubSpot oder Pipedrive für CRM, Notion oder ClickUp für Projektmanagement, Make oder Zapier für Automatisierung, und moderne Web-Technologien für digitale Plattformen. Wir fokussieren uns auf Integration und Effizienz, nicht auf Tool-Komplexität.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Wie läuft ein Transformationsprojekt ab?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                1. Kickoff & Analyse (1-2 Wochen): Digitaler Reifegrad, Prozessaufnahme, Zieldefinition. 2. Strategie & Roadmap (2-4 Wochen): Priorisierung, KPIs, Milestones. 3. UX & Konzeption (3-6 Wochen): Informationsarchitektur, Prototypen. 4. Implementierung (8-24 Wochen): Schrittweise Umsetzung. 5. Optimierung: Kontinuierliche Verbesserung basierend auf Daten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was unterscheidet euch von IT-Beratungen?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                IT-Beratungen fokussieren auf Technologie. Wir fokussieren auf Strategie, UX und messbare Business-Ergebnisse. Unser Ansatz: Strategie vor Technologie, User Experience vor Features, Conversion vor Komplexität. Wir kombinieren strategische Beratung, UX-Design, Entwicklung und Content — alles aus einer Hand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Weitere Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/ux-konzeption">
                UX & Konzeption
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/webdesign-entwicklung">
                Webdesign & Entwicklung
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/seo-performance">
                SEO & Performance
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/ai-workflows">
                AI Workflows
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/referenzen">
                Referenzen
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/kontakt">
                Kontakt
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DigitaleTransformationStrategie;
