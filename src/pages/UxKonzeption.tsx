import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, Route, Frame, Layers, TrendingUp, TestTube2,
  AlertTriangle, Search, PenTool, Check, ArrowRight, Users,
  Target, Workflow, Brain, Monitor, Smartphone
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const UxKonzeption = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "UX & Konzeption", url: "https://ooliv.de/ux-konzeption" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
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
        title="UX-Konzeption & Struktur | Agentur für Wireframes, IA & Prototyping"
        description="Wir entwickeln UX-Konzepte, die Entscheidungen beschleunigen: Informationsarchitektur, Wireframes, Prototypen & strukturierte User Journeys. Ideal für B2B & Mittelstand."
        canonicalUrl="https://ooliv.de/ux-konzeption"
        keywords="UX Konzeption Agentur, Informationsarchitektur, UX für Websites, Wireframes erstellen lassen, Prototyping Agentur, UX Strategie, UX Audit, UX Optimierung, UX B2B, UX Customer Journey, UX Struktur, UX Funnel, UX Design Agentur, User Experience Beratung, UX Workshop, UX Analyse, Conversion Optimierung UX, digitale Nutzerführung"
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1 — HERO */}
      <PageHero
        title="UX & Konzeption – klare Strukturen für digitale Systeme, die funktionieren"
        subtitle="Wir entwickeln Informationsarchitektur, Wireframes und userzentrierte Abläufe, die Komplexität reduzieren und Entscheidungen beschleunigen — strategisch, datenbasiert und ohne Agentur-Overload."
        primaryCta={{
          text: "Projekt besprechen",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Arbeitsweise ansehen",
          link: "#prozess"
        }}
      />

      {/* SECTION 2 — Was gute UX-Konzeption ausmacht */}
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
              Was gute UX-Konzeption ausmacht
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Struktur statt Bauchgefühl",
                description: "UX beginnt mit Klarheit, nicht mit Design."
              },
              {
                icon: Route,
                title: "User Flows, die lenken",
                description: "Wir gestalten Wege, die Nutzer leiten — nicht verlieren."
              },
              {
                icon: Brain,
                title: "Entscheidungsarchitektur",
                description: "Strategie vor Schönheitsdesign."
              },
              {
                icon: TrendingUp,
                title: "UX als Conversion-Treiber",
                description: "Ideal für komplexe B2B-Angebote."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
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
        </div>
      </section>

      {/* SECTION 3 — Unser strategischer UX-Ansatz */}
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
                UX beginnt bei der Strategie
              </h2>
              <div className="space-y-4">
                {[
                  "Customer Journeys analysieren & optimieren",
                  "Value Proposition Mapping",
                  "Nutzerbedürfnisse verstehen & priorisieren",
                  "Entscheidungslogik entwickeln",
                  "KPI-basiertes UX-Framework aufbauen"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-semibold text-foreground">
                Strategie vor Technologie — UX vor Ästhetik.
              </p>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-muted/50 rounded-lg p-8 border border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Route className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Customer Journey Diagramm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Informationsarchitektur & Struktur */}
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
                <LayoutGrid className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Sitemap & Struktur-Visualisierung</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Informationsarchitektur, die Ordnung schafft
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Sitemap & Content-Hierarchie
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Wir strukturieren Inhalte logisch und nutzerorientiert.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Entscheidungslogik pro Page
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Jede Seite hat einen klaren Zweck und führt zu einer Aktion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Reduktion unnötiger Komplexität
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Weniger ist mehr — wir eliminieren Reibung und Ablenkung.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Wireframes & Prototyping */}
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
              Wireframes & Prototypen, die Entscheidungen schneller machen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Frame,
                title: "Low-Fidelity bis High-Fidelity",
                description: "Von schnellen Skizzen bis zu detaillierten Designs."
              },
              {
                icon: Route,
                title: "Nutzerführung optimieren",
                description: "Jeder Klick ist strategisch durchdacht."
              },
              {
                icon: Layers,
                title: "Click-Dummies erstellen",
                description: "Interaktive Prototypen zum Testen und Validieren."
              },
              {
                icon: TestTube2,
                title: "Usability validieren",
                description: "Feedback einholen, bevor entwickelt wird."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm"
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

          {/* Wireframe Placeholders */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted/50 rounded-lg p-6 border border-border flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <PenTool className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Wireframe Beispiel {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — UX für Websites & digitale Produkte */}
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
              UX-Optimierung für Websites, Plattformen & digitale Produkte
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Spezialisiert auf B2B & Mittelstand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Lead-fokussierte UX",
                description: "Optimiert auf Conversion und Anfragen — jede Interaktion zählt."
              },
              {
                icon: Brain,
                title: "UX für erklärungsbedürftige Produkte",
                description: "Komplexe Angebote einfach und überzeugend darstellen."
              },
              {
                icon: Smartphone,
                title: "Mobile-first UX",
                description: "Perfekte Nutzererfahrung auf allen Geräten."
              },
              {
                icon: Workflow,
                title: "Performance UX",
                description: "Schnelle Ladezeiten, flüssige Interaktionen, keine Reibung."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
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

          {/* Device Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-background rounded-lg p-8 border border-border flex items-center justify-center min-h-[300px]"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-4">
                <Monitor className="w-12 h-12 text-muted-foreground" />
                <Smartphone className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Responsive Device Preview</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — Case Study Teaser */}
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
              UX-Projekte mit messbarem Erfolg
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                client: "KLAIBER",
                industry: "Steuerberatung",
                result: "+180% mehr Anfragen",
                logo: caseStudiesData.de[0]?.logo
              },
              {
                client: "COBUS",
                industry: "Flughafenbusse",
                result: "Klare Produktnavigation",
                logo: caseStudiesData.de[1]?.logo
              },
              {
                client: "SPEZ",
                industry: "Automotive",
                result: "+90% Conversion",
                logo: caseStudiesData.de[2]?.logo
              },
              {
                client: "IconPro",
                industry: "KI-Software",
                result: "Komplexität reduziert",
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
                <p className="text-base font-semibold text-primary">{item.result}</p>
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

      {/* SECTION 8 — Wie wir arbeiten */}
      <section id="prozess" className="py-20 lg:py-32 bg-muted/30">
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
              So entsteht Ihr UX-Konzept
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Analyse",
                  description: "Ziele definieren, Nutzer verstehen, Schwachstellen identifizieren."
                },
                {
                  number: "02",
                  title: "Informationsarchitektur",
                  description: "Sitemap erstellen, Content strukturieren, Hierarchien festlegen."
                },
                {
                  number: "03",
                  title: "Wireframing",
                  description: "Layouts skizzieren, User Flows visualisieren, Interaktionen planen."
                },
                {
                  number: "04",
                  title: "Prototyping",
                  description: "Klickbare Prototypen erstellen, Feedback einholen, iterieren."
                },
                {
                  number: "05",
                  title: "Optimierung",
                  description: "Usability testen, Conversion optimieren, kontinuierlich verbessern."
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

      {/* SECTION 9 — Team-Hybrid */}
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
              Wer an Ihrem UX-Projekt arbeitet
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein hybrides Team aus Strategie, Design, Entwicklung und Content — für ganzheitliche UX-Konzepte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Uli",
                role: "Strategy & Konzeption",
                icon: Target
              },
              {
                name: "Dorinel",
                role: "UX/UI Design & Kreation",
                icon: PenTool
              },
              {
                name: "Parveen & Kamil",
                role: "Development",
                icon: Frame
              },
              {
                name: "Paul",
                role: "SEO & Performance",
                icon: Search
              },
              {
                name: "Lisa",
                role: "Content & Copywriting",
                icon: Layers
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <member.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-lg text-muted-foreground mt-12"
          >
            Unser hybrider Ansatz: CEO + UX-Designer + Entwickler + Content = vollständige UX-Konzepte.
          </motion.p>
        </div>
      </section>

      {/* SECTION 10 — CTA */}
      <CTA 
        title="Lassen Sie uns Ihr UX-Projekt starten"
        subtitle="Kostenlose Erstberatung & UX-Analyse in 48 Stunden"
        primaryCta="Projekt starten"
        secondaryCta="Kostenlose 15-Minuten-Einschätzung"
        secondaryCtaLink="#"
      />

      {/* SECTION 11 — FAQ */}
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
              Häufige Fragen zu UX-Konzeption
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was kostet ein UX-Konzept?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Die Kosten hängen vom Projektumfang ab. Ein UX-Audit für kleinere Websites beginnt ab 2.500 €. Komplette UX-Konzepte mit Informationsarchitektur, Wireframes und Prototyping starten ab 8.000 €. Wir bieten eine kostenlose Erstanalyse, um Ihren Bedarf zu verstehen und ein transparentes Angebot zu erstellen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Wie lange dauert UX-Konzeption?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Erste Ergebnisse sind oft nach 2-3 Wochen sichtbar. Ein vollständiges UX-Konzept dauert je nach Komplexität 4-8 Wochen. Wir arbeiten in iterativen Sprints, sodass Sie kontinuierlich Fortschritte sehen und Feedback geben können.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was ist der Unterschied zu UI-Design?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                UX (User Experience) fokussiert auf Struktur, Nutzerführung und Funktionalität — das "Wie" einer Anwendung. UI (User Interface) ist die visuelle Gestaltung — das "Aussehen". Wir beginnen immer mit UX-Konzeption, bevor wir zum UI-Design übergehen. Gute UX ist die Basis für effektives Design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Bietet ihr UX-Workshops an?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ja! Wir bieten UX-Workshops für Teams an, z.B. User Journey Mapping, Design Sprints oder UX-Audits. Perfekt, um Ihr Team zu involvieren und gemeinsam Lösungen zu entwickeln. Workshops dauern typischerweise 1-2 Tage und können remote oder vor Ort stattfinden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Macht ihr UX für B2B?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Absolut. B2B ist sogar unser Schwerpunkt. Wir verstehen die Besonderheiten von B2B-Kaufprozessen: längere Entscheidungswege, mehrere Stakeholder, erklärungsbedürftige Produkte. Unsere UX-Konzepte sind speziell darauf ausgelegt, komplexe B2B-Angebote klar und überzeugend zu präsentieren.
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
              <Link to="/digitale-transformation-strategie">
                Digitale Transformation
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
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UxKonzeption;
