import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, LayoutGrid, Frame, Code, TrendingUp, Zap, Shield,
  CheckCircle2, ArrowRight, Layers, PenTool, Workflow, Search,
  Users, Award, BarChart3, Brain, Lightbulb, Settings, Monitor,
  Smartphone
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const WebdesignEntwicklung = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign & Entwicklung", url: "https://ooliv.de/webdesign-entwicklung" }
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
        title="Webdesign & Webentwicklung | UX-Design & Performance-WordPress für B2B & Mittelstand"
        description="Wir entwickeln Websites, die verkaufen: UX-Konzept, Webdesign, WordPress-Entwicklung, mobile Optimierung, Performance, SEO und Conversion-Funnels – alles aus einer Hand."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="webdesign agentur, ux agentur, webentwicklung wordpress, corporate webdesign, website relaunch, ux ui design, conversion-optimiertes webdesign, wordpress entwicklung, webdesign mainz, webdesign frankfurt, webdesign wiesbaden, website entwicklung, responsive webdesign, mobile-first design"
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1 — HERO */}
      <PageHero
        title="Websites, die verkaufen — nicht nur gut aussehen."
        subtitle="Wir verbinden UX, Design, Conversion-Psychologie und performante WordPress-Entwicklung zu Websites, die messbar mehr Leads generieren."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Beispiele ansehen",
          link: "#beispiele"
        }}
      />

      {/* Trust Bullets */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, text: "100+ Projekte" },
              { icon: Users, text: "Senior-Strategie statt Junioren" },
              { icon: Target, text: "UX-first & SEO-ready" },
              { icon: Zap, text: "Performance-optimierte Umsetzung" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Warum gutes Webdesign heute nicht reicht */}
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
              Design allein reicht nicht — Struktur, Inhalte und Technik entscheiden.
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
                icon: LayoutGrid,
                title: "UX-Architektur statt Schönfärberei",
                description: "Struktur und Nutzerführung vor Ästhetik."
              },
              {
                icon: Brain,
                title: "Conversion-Psychologie integriert",
                description: "Jedes Element hat einen strategischen Zweck."
              },
              {
                icon: Zap,
                title: "Mobile-first & schnelle Ladezeiten",
                description: "Performance ist kein Kompromiss."
              },
              {
                icon: Search,
                title: "SEO-optimierte Struktur von Anfang an",
                description: "Technisches SEO ist Teil des Fundaments."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
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

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xl font-semibold text-foreground"
          >
            Wir entwickeln Websites, die funktionieren — vom Konzept bis zur Entwicklung.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — Unser Ansatz für Webdesign & Entwicklung */}
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
              Ein klarer Prozess für maximale Wirkung
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: "UX-Konzept & Wireframes",
                items: [
                  "Informationsarchitektur entwickeln",
                  "Conversion-Flow optimieren",
                  "Low-Fidelity-Prototypen erstellen",
                  "Content-Structure aufbauen"
                ]
              },
              {
                icon: PenTool,
                title: "Designsystem & UI-Design",
                items: [
                  "CI-konformes Layout gestalten",
                  "Skalierbare Designsysteme",
                  "Mobile-first responsive Design",
                  "Hochwertige Visuals erstellen"
                ]
              },
              {
                icon: Code,
                title: "WordPress-Entwicklung",
                items: [
                  "Schnelle Ladezeiten garantieren",
                  "Skalierbare Module entwickeln",
                  "Höchste Sicherheitsstandards",
                  "SEO-freundliche technische Basis"
                ]
              },
              {
                icon: TrendingUp,
                title: "Launch & Optimierung",
                items: [
                  "SEO-Onpage implementieren",
                  "Redirects & Tracking einrichten",
                  "Qualitäts-Check durchführen",
                  "Performance-Optimierung"
                ]
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
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

      {/* SECTION 4 — UX-Konzept & Customer Journeys */}
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
                UX, die Nutzer leitet — nicht verwirrt.
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Zielgruppenanalyse durchführen",
                  "Customer Journey Mapping erstellen",
                  "Content-Strategie entwickeln",
                  "Conversion-Funnels bauen",
                  "Hotjar-Daten & Analytics berücksichtigen"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
              <div className="mb-4">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Mehr über UX-Konzeption erfahren
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Entdecken Sie unseren vollständigen UX-Ansatz: Informationsarchitektur, Wireframes und strukturierte User Journeys.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                <Link to="/ux-konzeption">
                  UX-Konzeption ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — UI Design & visuelle Systeme */}
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
              Modernes Design — klar, hochwertig, vertrauenswürdig.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              "Markenorientiertes Design",
              "Klare visuelle Hierarchien",
              "Skalierbare Designsysteme",
              "Motion & Microinteractions",
              "Visuelle Konsistenz über alle Geräte"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card rounded-lg p-6 border border-border shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Mockup Placeholders */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border flex items-center justify-center min-h-[300px]"
              >
                <div className="text-center">
                  <Frame className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Design Mockup {i}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WordPress-Entwicklung */}
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
              Saubere technische Entwicklung — schnell, sicher, skalierbar.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Performance",
                items: [
                  "90+ Lighthouse Scores",
                  "Schnelle Ladezeiten garantiert",
                  "Intelligente Caching-Strategien",
                  "Optimierte Assets & Code"
                ]
              },
              {
                icon: Code,
                title: "Strukturierter Aufbau",
                items: [
                  "Wiederverwendbare Module",
                  "Sauberer, wartbarer Code",
                  "Keine Pagebuilder-Bloat",
                  "Entwickler-freundlich"
                ]
              },
              {
                icon: Search,
                title: "SEO-ready",
                items: [
                  "Clean HTML & Semantik",
                  "Logische URL-Struktur",
                  "Technisches SEO integriert",
                  "Core Web Vitals optimiert"
                ]
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-lg mb-6 mx-auto">
                  <block.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {block.title}
                </h3>
                <div className="space-y-3">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Case Studies */}
      <section id="beispiele" className="py-20 lg:py-32 bg-muted/30">
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
              Websites, die Ergebnisse liefern
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "KLAIBER",
                industry: "Steuerberatung",
                metric: "+180% mehr Anfragen",
                detail: "Kompletter Website-Relaunch mit UX-Optimierung",
                logo: caseStudiesData.de[0]?.logo
              },
              {
                client: "COBUS",
                industry: "Flughafenbusse",
                metric: "Internationale B2B-Plattform",
                detail: "Custom WordPress Development",
                logo: caseStudiesData.de[1]?.logo
              },
              {
                client: "SPEZ",
                industry: "Automotive",
                metric: "+90% Conversion-Rate",
                detail: "Landing Page Optimierung",
                logo: caseStudiesData.de[2]?.logo
              },
              {
                client: "IconPro",
                industry: "KI-Software",
                metric: "Skalierbare SaaS-Platform",
                detail: "Headless CMS & Custom Development",
                logo: caseStudiesData.de[3]?.logo
              },
              {
                client: "Am Kliff",
                industry: "Gastronomie",
                metric: "+92% organische Sichtbarkeit",
                detail: "Restaurant-Website mit Buchungssystem",
                logo: caseStudiesData.de[4]?.logo
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-background p-4 rounded-lg mb-4 flex items-center justify-center min-h-[80px]">
                  {item.logo ? (
                    <img src={item.logo} alt={item.client} className="h-10 w-auto" />
                  ) : (
                    <p className="font-bold text-lg text-foreground">{item.client}</p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.industry}</p>
                <p className="text-base font-semibold text-primary mb-2">{item.metric}</p>
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

      {/* SECTION 8 — Tools & Technologien */}
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
              Unsere Tools für moderne Webentwicklung
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Design & UX */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Design & UX
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Figma – Design & Prototyping",
                  "Midjourney – AI-generierte Visuals",
                  "ChatGPT & LLMs – Content & Konzeption",
                  "Miro – Workshops & Collaboration",
                  "Adobe Creative Suite – High-end Grafik"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Entwicklung */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Entwicklung
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "WordPress – CMS & Custom Development",
                  "Headless CMS – Moderne Architekturen",
                  "HTML/CSS/JavaScript – Clean Code",
                  "Performance Tools – Lighthouse, GTmetrix",
                  "SEO Tools – Ahrefs, Screaming Frog",
                  "Git & CI/CD – Professionelles Deployment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Team-Hybrid */}
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
              Wer Ihre Website baut
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Sie arbeiten direkt mit mir (Uli) und einem eingespielten Team aus UX, Design, Entwicklung & SEO.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Uli",
                role: "Strategie & Konzept",
                icon: Target,
                expertise: "Ihr direkter Ansprechpartner"
              },
              {
                name: "Dorinel",
                role: "UX & UI Design",
                icon: PenTool,
                expertise: "User Experience & Interface Design"
              },
              {
                name: "Parveen & Kamil",
                role: "WordPress Entwicklung",
                icon: Code,
                expertise: "Frontend & Backend Development"
              },
              {
                name: "Lisa",
                role: "Content & Copywriting",
                icon: Lightbulb,
                expertise: "Strategische Texte & SEO-Content"
              },
              {
                name: "Paul",
                role: "SEO & Performance",
                icon: TrendingUp,
                expertise: "Technisches SEO & Analytics"
              },
              {
                name: "Giovanni",
                role: "Branding & Kreation",
                icon: Layers,
                expertise: "Brand Strategy & Visual Identity"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
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
        </div>
      </section>

      {/* SECTION 10 — Unser Ablauf (Timeline) */}
      <section id="ablauf" className="py-20 lg:py-32 bg-background">
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
              So entsteht Ihre Website
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Analyse & Zieldefinition",
                  description: "Kickoff-Workshop, Zielgruppen verstehen, Wettbewerb analysieren."
                },
                {
                  number: "02",
                  title: "UX-Konzept & Wireframes",
                  description: "Informationsarchitektur, User Flows, Low-Fidelity Prototypen."
                },
                {
                  number: "03",
                  title: "UI-Design",
                  description: "Designsystem entwickeln, High-Fidelity Mockups, Feedback-Runden."
                },
                {
                  number: "04",
                  title: "Entwicklung",
                  description: "WordPress-Setup, Frontend & Backend, Module programmieren, Testing."
                },
                {
                  number: "05",
                  title: "SEO & GoLive",
                  description: "Technisches SEO, Content-Optimierung, Performance-Check, Launch."
                },
                {
                  number: "06",
                  title: "Monitoring & Optimierung",
                  description: "Analytics-Setup, Conversion-Tracking, kontinuierliche Verbesserungen."
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

      {/* SECTION 11 — CTA */}
      <CTA 
        title="Bereit für eine Website, die verkauft?"
        subtitle="Starten Sie Ihr Projekt mit einer kostenlosen Strategieberatung"
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
              Häufige Fragen zu Webdesign & Entwicklung
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was kostet eine Website?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Eine professionelle Business-Website beginnt ab 8.000 €. Umfangreiche Corporate Websites oder E-Commerce-Projekte starten ab 15.000 €. Der Preis hängt von Funktionsumfang, Design-Komplexität und Content-Menge ab. Wir bieten eine kostenlose Erstberatung, um Ihren Bedarf zu verstehen und ein transparentes Angebot zu erstellen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Wie lange dauert ein Website-Projekt?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ein typisches Website-Projekt dauert 8-16 Wochen vom Kickoff bis zum Launch. Die Dauer hängt von der Komplexität, der Anzahl der Seiten und Feedback-Zyklen ab. Wir arbeiten in Sprints, sodass Sie kontinuierlich Fortschritte sehen können.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Entwickeln Sie mit Templates?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Nein. Wir entwickeln jede Website individuell und auf Ihre spezifischen Anforderungen zugeschnitten. Keine vorgefertigten Templates, keine Standardlösungen. Jedes Projekt bekommt ein maßgeschneidertes Design und eine saubere technische Umsetzung, die zu Ihrer Marke und Ihren Zielen passt.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Arbeiten Sie mit Baukästen wie Wix oder Squarespace?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Nein. Wir entwickeln professionelle Websites mit WordPress und modernen Web-Technologien. Baukästen sind limitiert in Funktionalität, Performance und SEO. Unsere Custom-Entwicklung garantiert volle Kontrolle, Skalierbarkeit und optimale Performance — ohne Einschränkungen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Macht ooliv auch die Texte?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ja! Wir haben erfahrene Content-Strategists und Copywriter im Team. Von der Content-Strategie über SEO-optimierte Texte bis hin zu Landingpage-Copywriting — wir übernehmen die komplette Content-Erstellung. So stellen wir sicher, dass Design und Inhalte perfekt zusammenarbeiten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Haben wir direkten Kontakt zum Gründer?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ja, absolut. Ich (Uli, Gründer) bin bei jedem Projekt persönlich involviert — vom Kickoff über Strategie-Workshops bis zur finalen Abnahme. Sie arbeiten nicht mit Junior-Teams oder wechselnden Ansprechpartnern, sondern haben direkten Zugang zu erfahrener Senior-Expertise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Ist SEO inklusive?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Technisches SEO ist bei jedem Website-Projekt inklusive: saubere Code-Struktur, optimierte Performance, Mobile-Optimierung, Schema-Markup. Content-SEO (Keyword-Recherche, Content-Optimierung, Linkbuilding) bieten wir als separaten Service an. So haben Sie die Wahl, wie tief Sie ins SEO einsteigen möchten.
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
              <Link to="/digitale-transformation-strategie">
                Digitale Transformation
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

export default WebdesignEntwicklung;
