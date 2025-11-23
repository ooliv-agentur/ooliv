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
        title="Digitale Transformation & Strategie | Strukturen, Prozesse & Wachstums-Systeme"
        description="Wir entwickeln digitale Strategien, die Unternehmen transformieren: klare Strukturen, moderne Workflows, Prozessautomatisierung, AI-Integration und messbare digitale Ergebnisse für B2B & Mittelstand."
        canonicalUrl="https://ooliv.de/digitale-transformation-strategie"
        keywords="digitale transformation agentur, digitale strategie beratung, digitaler reifegrad, digitale roadmap, prozessdigitalisierung, geschäftsprozessoptimierung, customer journey mapping, unternehmensdigitalisierung, ai-integration unternehmen, digitale transformation mittelstand, digitale transformation b2b, digitalisierung beratung, digitale geschäftsmodelle"
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1 — HERO */}
      <PageHero
        title="Digitale Transformation, die funktioniert."
        subtitle="Wir entwickeln klare digitale Strategien, skalierbare Strukturen, effiziente Workflows und AI-gestützte Prozesse — damit Unternehmen schneller entscheiden, besser arbeiten und messbar wachsen."
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
      <section className="py-20 lg:py-32 bg-background">
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
              Digitale Transformation scheitert nicht an Tools — sondern an Strukturen.
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
                title: "Kein klarer digitaler Fahrplan",
                description: "Projekte ohne Priorisierung und Struktur."
              },
              {
                icon: Workflow,
                title: "Veraltete Prozesse & Silos",
                description: "Abteilungen arbeiten gegeneinander statt gemeinsam."
              },
              {
                icon: BarChart3,
                title: "Entscheidungen ohne Datenbasis",
                description: "Bauchgefühl statt Fakten und Kennzahlen."
              },
              {
                icon: Settings,
                title: "Zu viel Technik, zu wenig Strategie",
                description: "Tools ohne klare Ziele und Anwendungsfälle."
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
      <section className="py-20 lg:py-32 bg-muted/30">
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
              Strukturierter Ansatz für nachhaltige digitale Transformation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Analyse & Reifegrad-Modell",
                items: [
                  "Digitaler Reifegrad bestimmen",
                  "Prozessaufnahme durchführen",
                  "Wettbewerbsanalyse erstellen"
                ]
              },
              {
                icon: Map,
                title: "Digitale Strategie & Roadmap",
                items: [
                  "Value Proposition definieren",
                  "Priorisierung festlegen",
                  "KPIs & Zielbilder entwickeln",
                  "Entscheidungsarchitektur aufbauen"
                ]
              },
              {
                icon: Zap,
                title: "Implementierung & Enablement",
                items: [
                  "Prozessmodernisierung umsetzen",
                  "Technologie-Einführung begleiten",
                  "Team-Fähigkeiten steigern"
                ]
              },
              {
                icon: Brain,
                title: "AI-Integration & Automatisierung",
                items: [
                  "AI-Workflows entwickeln",
                  "Prozessautomatisierung implementieren",
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
      <section className="py-20 lg:py-32 bg-background">
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
                Digitale Roadmaps, die wirklich umsetzbar sind
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
              <p className="text-lg font-semibold text-foreground">
                Roadmaps, die Teams verstehen und umsetzen können.
              </p>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-muted/50 rounded-lg p-8 border border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <GitBranch className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Digitale Roadmap Visualisierung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Customer Journey & Entscheidungsarchitektur */}
      <section className="py-20 lg:py-32 bg-muted/30">
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
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Customer Journey Map</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Customer Journeys, die Nutzer lenken — nicht verwirren
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
      <section className="py-20 lg:py-32 bg-background">
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
              Prozesse digitalisieren, vereinfachen, beschleunigen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Digitalisierung bedeutet nicht mehr Tools — sondern weniger Komplexität.
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
      <section className="py-20 lg:py-32 bg-muted/30">
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
              AI-gestützte Workflows für schnelleres Arbeiten
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
      <section className="py-20 lg:py-32 bg-background">
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
              Digitale Transformation im Einsatz – echte Ergebnisse
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                client: "KLAIBER",
                industry: "Steuerberatung",
                result: "+180% mehr Anfragen",
                detail: "Digitale Prozesse & moderne Website",
                logo: caseStudiesData.de[0]?.logo
              },
              {
                client: "COBUS",
                industry: "Flughafenbusse",
                result: "Vollständige digitale Transformation",
                detail: "B2B-Plattform & Prozessoptimierung",
                logo: caseStudiesData.de[1]?.logo
              },
              {
                client: "SPEZ",
                industry: "Automotive",
                result: "+90% Conversion",
                detail: "Optimierte Customer Journey",
                logo: caseStudiesData.de[2]?.logo
              },
              {
                client: "IconPro",
                industry: "KI-Software",
                result: "Skalierbare Plattform",
                detail: "AI-Integration & Automation",
                logo: caseStudiesData.de[3]?.logo
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
                <div className="bg-background p-4 rounded-lg mb-4 flex items-center justify-center min-h-[80px]">
                  {item.logo ? (
                    <img src={item.logo} alt={item.client} className="h-10 w-auto" />
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
                  title: "Kickoff & Analyse",
                  description: "Digitaler Reifegrad, Prozessaufnahme, Zieldefinition."
                },
                {
                  number: "02",
                  title: "Digitale Strategie",
                  description: "Roadmap, Priorisierung, KPIs und Milestones festlegen."
                },
                {
                  number: "03",
                  title: "UX & Struktur",
                  description: "Informationsarchitektur, Wireframes, Prototypen entwickeln."
                },
                {
                  number: "04",
                  title: "Implementierung",
                  description: "Prozessmodernisierung, Tool-Integration, Team-Enablement."
                },
                {
                  number: "05",
                  title: "Optimierung & Support",
                  description: "Kontinuierliche Verbesserung, Monitoring, Skalierung."
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
      <section className="py-20 lg:py-32 bg-background">
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
              Wer Ihre Transformation begleitet
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein hybrides Team aus Strategie, Design, Entwicklung und Content — für vollständige digitale Transformation.
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
                  <member.icon className="w-8 h-8" />
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
            className="text-center text-lg text-muted-foreground mt-12"
          >
            Unser hybrider Ansatz: Strategie + Design + Entwicklung + Content = ganzheitliche digitale Transformation.
          </motion.p>
        </div>
      </section>

      {/* SECTION 11 — CTA */}
      <CTA 
        title="Bereit für klare digitale Strukturen?"
        subtitle="Starten Sie Ihre digitale Transformation mit einem kostenlosen Strategiegespräch"
        primaryCta="Projekt starten"
        secondaryCta="Kostenlose 15-Minuten-Einschätzung"
        secondaryCtaLink="#"
      />

      {/* SECTION 12 — FAQ */}
      <section className="py-20 lg:py-32 bg-muted/30">
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
