import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from "@/components/PageLayout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { H1, H2, H3, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { 
  ArrowRight, Target, LayoutGrid, Code, Search, Brain,
  CheckCircle2, Award, Users, Zap
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
import { MicroCaseStudies } from '@/components/shared/MicroCaseStudies';

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
      <PageLayout>
        <EnhancedSEOHead
        title="Digitale Transformation & UX-Strategie | ooliv Mainz"
        description="Digitale Transformation, UX-Strategie und AI-Workflows. Senior-Level Beratung von Uli Schönleber. Klare Prozesse, messbare Ergebnisse."
          canonicalUrl="https://ooliv.de/"
          keywords="digitale transformation agentur, digitale transformation beratung, digitale strategie entwickeln, digitalstrategie agentur, digitale kundenreise optimieren, digitale prozesse verbessern, ai-workflows für unternehmen, ux agentur, webdesign agentur mainz, webentwicklung agentur, seo agentur mainz, digitale effizienz steigern, customer journey mapping, digitale roadmap, design systeme, conversion optimierung, digitaler arbeitsablauf, strategie workshop, lead-generierung b2b, webdesign mainz, webdesign wiesbaden, webdesign frankfurt"
          ogImage="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wie läuft ein Projekt bei ooliv ab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Strukturierte Analyse → Konzept & Strategie → UX & Wireframes → Design → Entwicklung → Launch & Optimierung. Sie haben während des gesamten Prozesses direkten Kontakt zu mir (Uli) und sehen kontinuierlich Fortschritte."
                }
              },
              {
                "@type": "Question",
                "name": "Was kostet eine Website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business-Websites beginnen ab 15.000 €, umfangreiche Corporate-Projekte ab 25.000 €. Der Preis hängt von Funktionsumfang, Design-Komplexität und Projektdauer ab. Wir bieten eine kostenlose Erstberatung für ein transparentes Angebot."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert ein Projekt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typische Website-Projekte dauern 8-16 Wochen vom Kickoff bis zum Launch. Digitale Transformationsprojekte benötigen 3-6 Monate. Die genaue Dauer hängt von Komplexität und Feedback-Zyklen ab."
                }
              },
              {
                "@type": "Question",
                "name": "Was unterscheidet ooliv von anderen Agenturen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Direkter Zugang zur Geschäftsführung, keine Junior-Teams, klare Struktur, messbare Ergebnisse. Ich (Uli) führe jedes Projekt persönlich und arbeite mit einem festen Team aus Senior-Experten zusammen."
                }
              }
            ]
          }}
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
        <Section id="hero" spacing="large" background="light">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
              
              {/* Left Column - Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <H1>
              Digitale Transformation, die Klarheit schafft
            </H1>
                </motion.div>
                
                <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Paragraph className="text-lg md:text-xl" color="secondary">
              Strategische Beratung, UX-Architektur und AI-gestützte Workflows — entwickelt von Uli Schönleber als Senior Digital Strategist, unterstützt durch ein spezialisiertes Hybridteam.
            </Paragraph>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={handleStartProject}
                  >
                    Projekt starten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
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
              >
                <div className="bg-secondary rounded-lg p-8 border border-border flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-primary mx-auto mb-6" aria-label="Digitale Transformation Icon" />
                    <p className="text-lg text-muted-foreground">Strategische Digitalisierung</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* SECTION 2: WIR SIND KEINE TYPISCHE AGENTUR */}
        <Section id="ueber-uns" spacing="large" background="light">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <H2 alignment="center">
                Wir sind keine typische Agentur.
              </H2>
              <Paragraph className="text-lg md:text-xl max-w-3xl mx-auto mt-6" color="secondary" alignment="center">
                Jedes Projekt wird persönlich von Uli geführt, unterstützt von einem hybriden Team aus UX, Design, Entwicklung, SEO und AI — ohne Outsourcing, ohne Freelancer-Kette.
              </Paragraph>
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
                  title: "Ehrliche Umsetzung",
                  description: "Realistische Timelines und klare Ergebnisse statt Agenturfloskeln."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <H3 className="text-lg mb-2">
                    {item.title}
                  </H3>
                  <Paragraph className="text-sm" color="secondary">
                    {item.description}
                  </Paragraph>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* SECTION 3: UNSERE KERNLEISTUNGEN */}
        <Section id="leistungen" spacing="large" background="white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <H2 alignment="center">
                Unsere Kernleistungen für digitale Transformation
              </H2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Digitale Transformation & Strategie",
                  description: "Strategische Roadmaps, digitale Prozesse und wertorientierte Transformation.",
                  link: "/digitale-transformation-strategie"
                },
                {
                  icon: LayoutGrid,
                  title: "UX & Konzeption",
                  description: "Informationsarchitektur, User Journeys, Wireframes und konversionsstarke Funnels.",
                  link: "/ux-konzeption"
                },
                {
                  icon: Code,
                  title: "Webdesign & Entwicklung",
                  description: "UX-first WordPress-Entwicklung, klare Strukturen und hohe Performance.",
                  link: "/webdesign-entwicklung"
                },
                {
                  icon: Search,
                  title: "SEO & Performance",
                  description: "Technische Optimierung, Content-Strategien und kontinuierliche Performance-Steuerung.",
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
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <H3 className="mb-3">
                    {service.title}
                  </H3>
                  <Paragraph className="text-base mb-6" color="secondary">
                    {service.description}
                  </Paragraph>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full"
                  >
                    <Link to={service.link}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* SECTION 4: AUSGEWÄHLTE PROJEKTE */}
        <MicroCaseStudies 
          cases={["klaiber", "cobus", "iconpro"]}
          title="Ausgewählte Projekte"
          showTitle={true}
        />

        {/* SECTION 5: ULI SCHÖNLEBER */}
        <Section id="team" spacing="large" background="white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-secondary rounded-lg p-8 border border-border flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-primary mx-auto mb-6" aria-label="Uli Schönleber Icon" />
                    <p className="text-lg text-muted-foreground">Uli Schönleber</p>
                    <p className="text-sm text-muted-foreground">Senior Digital Strategy Consultant & Gründer</p>
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
                <H2 className="mb-6">
                  Ihr Ansprechpartner: Uli Schönleber
                </H2>
            <Paragraph className="text-lg mb-6" color="secondary">
              Ich führe jedes Projekt persönlich — von Analyse und Strategie bis zur UX-Architektur. Das Hybridteam übernimmt Design, Entwicklung, SEO und AI-Implementierung. Dadurch bleiben Entscheidungen strategisch sauber und die Umsetzung effizient.
            </Paragraph>
                <div className="space-y-3 mb-8">
            {[
              "15+ Jahre Erfahrung",
              "100+ digitale Projekte",
              "Senior-Level ohne Junioren",
              "Direkte Zusammenarbeit"
            ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <Paragraph className="text-base" color="secondary">{item}</Paragraph>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                >
                  <Link to="/ueber-uns">
                    Über uns
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* SECTION 6: WERKZEUGE MIT VERSTAND EINGESETZT */}
        <Section id="tools" spacing="large" background="light">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <H2 alignment="center">
                Wir setzen Tools dort ein, wo sie echten Mehrwert schaffen
              </H2>
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
                <H3 className="mb-6">
                  AI & Research
                </H3>
                <Paragraph className="text-base mb-4" color="secondary">
                  LLMs, ChatGPT, Claude für Content und Recherche. Perplexity für strategische Insights.
                </Paragraph>

                <H3 className="mb-6 mt-8">
                  UX & Prototyping
                </H3>
                <Paragraph className="text-base mb-4" color="secondary">
                  Figma für Design, Journeys und Wireframes.
                </Paragraph>

                <H3 className="mb-6 mt-8">
                  Technische Umsetzung
                </H3>
                <Paragraph className="text-base mb-4" color="secondary">
                  WordPress, strukturierte Architektur und Performance-Optimierung.
                </Paragraph>

                <H3 className="mb-6 mt-8">
                  SEO
                </H3>
                <Paragraph className="text-base mb-4" color="secondary">
                  Ahrefs, Screaming Frog für technische Optimierung.
                </Paragraph>

                <H3 className="mb-6 mt-8">
                  Automation
                </H3>
                <Paragraph className="text-base mb-4" color="secondary">
                  Make, Zapier für Workflow-Integration.
                </Paragraph>
              </motion.div>

              {/* Prozesse & Implementierung */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-8 border border-[#E4E6E7] shadow-sm"
              >
                {/* Dieser Block wurde in die linke Spalte integriert */}
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* SECTION 7: HÄUFIG GESTELLTE FRAGEN */}
        <Section id="faq" spacing="large" background="white">
          <Container size="narrow">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <H2 alignment="center">
                Häufig gestellte Fragen
              </H2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Wie läuft ein Projekt bei ooliv ab?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Strukturierte Analyse → Konzept & Strategie → UX & Wireframes → Design → Entwicklung → Launch & Optimierung. Sie haben während des gesamten Prozesses direkten Kontakt zu mir (Uli) und sehen kontinuierlich Fortschritte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Was kostet eine Website?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Business-Websites beginnen ab 15.000 €, umfangreiche Corporate-Projekte ab 25.000 €. Der Preis hängt von Funktionsumfang, Design-Komplexität und Projektdauer ab. Wir bieten eine kostenlose Erstberatung für ein transparentes Angebot.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Wie lange dauert ein Projekt?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Typische Website-Projekte dauern 8-16 Wochen vom Kickoff bis zum Launch. Digitale Transformationsprojekte benötigen 3-6 Monate. Die genaue Dauer hängt von Komplexität und Feedback-Zyklen ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Was unterscheidet ooliv von anderen Agenturen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Direkter Zugang zur Geschäftsführung, keine Junior-Teams, klare Struktur, messbare Ergebnisse. Ich (Uli) führe jedes Projekt persönlich und arbeite mit einem festen Team aus Senior-Experten zusammen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Machen Sie auch SEO und Content?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Ja – technisches SEO ist in jedem Website-Projekt inklusive. Content-SEO, Keyword-Recherche und kontinuierliche Optimierung bieten wir als separaten Service an. AI-gestützte Content-Erstellung ist ebenfalls Teil unseres Angebots.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Kann ich mit Ihnen langfristig zusammenarbeiten?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Ja – wir bieten monatlichen Support für SEO, Performance-Optimierung, Content-Updates und technischen Support. Viele Kunden arbeiten Jahre mit uns zusammen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white border border-[#E5E8E8] rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#0A0A0A] hover:no-underline">
                  Unterstützen Sie Unternehmen bei digitaler Transformation jenseits von Websites?
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#555555]">
                  Ja — wir begleiten Unternehmen bei der kompletten digitalen Transformation: von der Strategieentwicklung über Prozessoptimierung bis zur Implementierung von AI-Workflows. Unsere Leistung geht weit über Webdesign hinaus.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Container>
        </Section>

        {/* SECTION 8: CTA */}
        <Section id="cta" spacing="large" background="light">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <H2 alignment="center" className="mb-6">
                Bereit für digitale Klarheit?
              </H2>
              <Paragraph className="text-xl max-w-2xl mx-auto mb-8" color="secondary" alignment="center">
                Lassen Sie uns besprechen, wie wir Ihnen helfen können.
              </Paragraph>
              <Button
                size="xl"
                variant="primary"
                onClick={handleStartProject}
              >
                Projekt starten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </Container>
        </Section>
      </PageLayout>
    </>
  );
};

export default GermanIndex;
