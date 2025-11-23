import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { 
  ArrowRight, Target, LayoutGrid, Code, Search, Brain,
  CheckCircle2, Award, Users, Zap, TrendingUp
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CompleteBusinessSchemaGenerator from '@/components/seo/CompleteBusinessSchemaGenerator';
import H1Validator from '@/components/seo/H1Validator';
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, []);

  const handleStartProject = () => {
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
    <>
      <H1Validator />
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="ooliv – Digitale Transformation, UX & Webdesign, das verkauft"
          description="Digitale Strategie, UX, Webdesign, SEO und AI-Workflows – geführt von einem Senior-Strategen. 100+ Projekte. Klare KPIs. Keine Junioren."
          canonicalUrl="https://ooliv.de/"
          keywords="digitale transformation agentur, digitale strategie beratung, ux agentur, webdesign agentur, website erstellen lassen, seo agentur, ai workflows agentur, digitale transformation unternehmen, digitale customer experience, leadgenerierung website, webdesign mainz, webdesign wiesbaden, webdesign frankfurt"
          ogImage="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
        />
        
        <CompleteBusinessSchemaGenerator
          businessName="ooliv Digitalagentur"
          description="Digitalagentur für digitale Transformation, UX-Konzeption, Webdesign und SEO. Messbare Ergebnisse für B2B & Mittelstand."
          address={{
            streetAddress: "Mombacher Str. 25",
            addressLocality: "Mainz",
            postalCode: "55122",
            addressRegion: "Rheinland-Pfalz",
            addressCountry: "DE"
          }}
          telephone="+49-6131-6367801"
          email="info@ooliv.de"
          url="https://ooliv.de"
          areaServed={["Deutschland", "Schweiz", "Österreich", "DACH-Region"]}
          services={["Digitale Transformation", "UX & Konzeption", "Webdesign & Entwicklung", "SEO & Performance", "AI-Workflows"]}
        />
        
        {/* HERO SECTION */}
        <section className="relative bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 sm:py-20 lg:py-28 items-center min-h-[calc(100vh-80px)]">
              
              {/* Left Column - Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h1 
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
                >
                  Digitale Transformation, die verkauft.
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  Wir entwickeln digitale Strategien, UX-Konzepte und Websites, die messbar mehr Leads generieren — geführt von Senior-Expertise, nicht von Junioren.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    onClick={handleStartProject}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  >
                    Projekt starten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                  >
                    <Link to="/referenzen">Projekte ansehen</Link>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    { icon: Award, text: "100+ Projekte" },
                    { icon: Users, text: "Senior-Level" },
                    { icon: Target, text: "Messbare KPIs" },
                    { icon: Zap, text: "Schnelle Umsetzung" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm font-medium text-foreground">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-muted/50 rounded-lg p-8 border border-border flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground">Strategische Digitalisierung</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WIR SIND KEINE TYPISCHE AGENTUR */}
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
                Wir sind keine typische Agentur.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Jedes Projekt wird persönlich von Uli geführt, unterstützt von einem eingespielten Team aus UX, Design, Entwicklung und SEO.
              </p>
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
                  title: "Senior-Strategie",
                  description: "Keine Junioren. Direkter Zugang zur Geschäftsführung."
                },
                {
                  title: "Messbare Ergebnisse",
                  description: "Klare KPIs und transparente Erfolgsmessung."
                },
                {
                  title: "Hybrides Team",
                  description: "Strategie, Design, Entwicklung, SEO — alles aus einer Hand."
                },
                {
                  title: "Keine Agentur-Theater",
                  description: "Ehrliche Kommunikation. Realistische Timelines."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
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

        {/* SECTION 3: UNSERE KERNLEISTUNGEN */}
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
                Unsere Kernleistungen
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Digitale Transformation & Strategie",
                  description: "Klare Roadmaps, digitale Prozesse und messbare Transformation für Ihr Unternehmen.",
                  link: "/digitale-transformation-strategie"
                },
                {
                  icon: LayoutGrid,
                  title: "UX & Konzeption",
                  description: "Informationsarchitektur, Wireframes und strukturierte User Journeys für bessere Conversion.",
                  link: "/ux-konzeption"
                },
                {
                  icon: Code,
                  title: "Webdesign & Entwicklung",
                  description: "Performance-optimierte WordPress-Websites mit UX-First-Ansatz und SEO-Fundament.",
                  link: "/webdesign-entwicklung"
                },
                {
                  icon: Search,
                  title: "SEO & Performance",
                  description: "Technisches SEO, Content-Optimierung und kontinuierliche Verbesserung für Top-Rankings.",
                  link: "/seo-performance"
                },
                {
                  icon: Brain,
                  title: "AI-Workflows",
                  description: "KI-gestützte Prozesse für Content, Recherche und Automatisierung.",
                  link: "/ai-workflows"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-all hover:scale-105 group"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-lg mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    <Link to={service.link}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: IHRE INVESTITION IN DIGITALE KLARHEIT */}
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
                Ihre Investition in digitale Klarheit
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Transparente Preise. Klare Leistungen. Messbare Ergebnisse.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Strategie & Konzept",
                  price: "ab 5.000 €",
                  features: [
                    "Digitale Roadmap",
                    "UX-Konzept & Wireframes",
                    "Strategieberatung"
                  ]
                },
                {
                  title: "Website-Projekt",
                  price: "ab 15.000 €",
                  features: [
                    "Komplettes Webdesign",
                    "WordPress-Entwicklung",
                    "SEO-Basis inklusive"
                  ],
                  highlighted: true
                },
                {
                  title: "Digitale Transformation",
                  price: "ab 25.000 €",
                  features: [
                    "Vollständige Transformation",
                    "Prozessoptimierung",
                    "Langfristige Begleitung"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-card rounded-lg p-8 border ${plan.highlighted ? 'border-primary shadow-lg' : 'border-border shadow-sm'}`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-6">
                    {plan.price}
                  </p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={handleStartProject}
                    className={plan.highlighted ? "bg-primary hover:bg-primary/90 text-primary-foreground w-full" : "w-full"}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Beratung anfragen
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: ERGEBNISSE SPRECHEN FÜR SICH */}
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
                Ergebnisse sprechen für sich
              </h2>
            </motion.div>

            <BeforeAfterSlider />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/referenzen">
                  Mehr Referenzen ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6: AUSGEWÄHLTE PROJEKTE */}
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
                Ausgewählte Projekte
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudiesData.de.slice(0, 4).map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  <div className="bg-background p-4 rounded-lg mb-6 flex items-center justify-center min-h-[80px]">
                    <img src={caseStudy.logo} alt={caseStudy.client} className="h-10 w-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {caseStudy.client}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {caseStudy.industry}
                  </p>
                  <p className="text-base font-semibold text-primary mb-4">
                    {caseStudy.keyMetric}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {caseStudy.headline}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/referenzen">
                      Case Study ansehen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: ULI SCHÖNLEBER */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-muted/50 rounded-lg p-8 border border-border flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground">Uli Schönleber</p>
                    <p className="text-sm text-muted-foreground">Gründer & Digital Strategy Lead</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Ihr Ansprechpartner: Uli Schönleber
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ich führe jedes Projekt persönlich — von der Strategie bis zur Umsetzung. Sie arbeiten direkt mit mir, nicht mit wechselnden Junior-Teams.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Ich arbeite eng mit einem festen Team aus Design, Entwicklung, SEO und Content zusammen — keine Freelancer-Kette, keine ausgelagerten Leistungen.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "15+ Jahre Digital-Erfahrung",
                    "100+ erfolgreich umgesetzte Projekte",
                    "Senior-Level Beratung ohne Junioren",
                    "Direkter Draht zur Geschäftsführung"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link to="/ueber-uns">
                    Über uns
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WERKZEUGE MIT VERSTAND EINGESETZT */}
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
                Werkzeuge mit Verstand eingesetzt
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* AI & Research */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  AI & Research
                </h3>
                <div className="space-y-3">
                  {[
                    "ChatGPT, Claude, Gemini – AI-gestützte Content-Erstellung",
                    "Perplexity, SearchGPT – Intelligente Recherche",
                    "Midjourney – AI-Visuals",
                    "NotebookLM – Wissensmanagement"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Prozesse & Implementierung */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Prozesse & Implementierung
                </h3>
                <div className="space-y-3">
                  {[
                    "Figma – Design & Prototyping",
                    "WordPress – CMS & Development",
                    "Ahrefs, Screaming Frog – SEO-Tools",
                    "Make, Zapier – Automatisierung"
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

        {/* SECTION 9: HÄUFIG GESTELLTE FRAGEN */}
        <section className="py-20 lg:py-32 bg-background">
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
                Häufig gestellte Fragen
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Wie läuft ein Projekt bei ooliv ab?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Strukturierte Analyse → Konzept & Strategie → UX & Wireframes → Design → Entwicklung → Launch & Optimierung. Sie haben während des gesamten Prozesses direkten Kontakt zu mir (Uli) und sehen kontinuierlich Fortschritte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Was kostet eine Website?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Business-Websites beginnen ab 15.000 €, umfangreiche Corporate-Projekte ab 25.000 €. Der Preis hängt von Funktionsumfang, Design-Komplexität und Projektdauer ab. Wir bieten eine kostenlose Erstberatung für ein transparentes Angebot.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Wie lange dauert ein Projekt?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Typische Website-Projekte dauern 8-16 Wochen vom Kickoff bis zum Launch. Digitale Transformationsprojekte benötigen 3-6 Monate. Die genaue Dauer hängt von Komplexität und Feedback-Zyklen ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Was unterscheidet ooliv von anderen Agenturen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Direkter Zugang zur Geschäftsführung, keine Junior-Teams, klare Struktur, messbare Ergebnisse. Ich (Uli) führe jedes Projekt persönlich und arbeite mit einem festen Team aus Senior-Experten zusammen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Machen Sie auch SEO und Content?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Ja – technisches SEO ist in jedem Website-Projekt inklusive. Content-SEO, Keyword-Recherche und kontinuierliche Optimierung bieten wir als separaten Service an. AI-gestützte Content-Erstellung ist ebenfalls Teil unseres Angebots.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Kann ich mit Ihnen langfristig zusammenarbeiten?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Ja – wir bieten monatlichen Support für SEO, Performance-Optimierung, Content-Updates und technischen Support. Viele Kunden arbeiten Jahre mit uns zusammen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 10: CTA */}
        <CTA 
          title="Bereit für digitale Klarheit?"
          subtitle="Lassen Sie uns besprechen, wie wir Ihnen helfen können."
          primaryCta="Projekt starten"
        />

        {/* FOOTER */}
        <footer className="py-16 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Footer Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              
              {/* Spalte 1: Unternehmen */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Unternehmen</h4>
                <nav className="space-y-2">
                  <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/ueber-uns" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Über uns
                  </Link>
                  <Link to="/referenzen" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Referenzen
                  </Link>
                  <Link to="/kontakt" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                  <Link to="/artikel" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </nav>
              </div>

              {/* Spalte 2: Leistungen */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Leistungen</h4>
                <nav className="space-y-2">
                  <Link to="/digitale-transformation-strategie" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Digitale Transformation & Strategie
                  </Link>
                  <Link to="/ux-konzeption" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    UX & Konzeption
                  </Link>
                  <Link to="/webdesign-entwicklung" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Webdesign & Entwicklung
                  </Link>
                  <Link to="/seo-performance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    SEO & Performance
                  </Link>
                  <Link to="/ai-workflows" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    AI-Workflows
                  </Link>
                </nav>
              </div>

              {/* Spalte 3: Kontakt */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Kontakt</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <a href="mailto:info@ooliv.de" className="text-primary hover:underline">
                      info@ooliv.de
                    </a>
                  </p>
                  <p>06131 – 63 67 801</p>
                  <p className="mt-4">
                    Mombacher Str. 25<br />
                    55122 Mainz
                  </p>
                </div>
              </div>
            </div>

            {/* Marken-Zeile */}
            <div className="py-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                Zuhause in Mainz. Aktiv in ganz Deutschland und im DACH-Raum.
              </p>
            </div>

            {/* Copyright & Legal */}
            <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">
                © 2025 ooliv GmbH. Alle Rechte vorbehalten.
              </p>
              <nav className="flex gap-6">
                <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
                <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
                <Link to="/cookie-richtlinie" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Cookie-Richtlinie
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </PageLayout>
    </>
  );
};

export default GermanIndex;
