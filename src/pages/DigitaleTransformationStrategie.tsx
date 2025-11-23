import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
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
import { typographyStyles } from '@/styles/typography';

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
            }
          }
        ]}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
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
        </Container>
      </Section>

      {/* Trust Bullets */}
      <Section background="light" spacing="small">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, text: "100+ Projekte" },
              { icon: Users, text: "Direkter Kontakt zum Gründer" },
              { icon: Target, text: "Senior-Level Beratung" },
              { icon: BarChart3, text: "Klare KPIs & echte Ergebnisse" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <item.icon className="w-5 h-5 text-[#0BC3C3] flex-shrink-0" />
                <p className="text-sm font-medium text-[#0A0A0A]">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pain Points */}
      <Section id="warum-scheitert" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Die häufigsten Gründe, warum digitale Transformation scheitert
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-50 text-red-600 rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xl font-semibold text-[#0A0A0A]"
          >
            Wir lösen nicht nur technische Aufgaben — wir richten Ihr gesamtes digitales Ökosystem neu aus.
          </motion.p>
        </Container>
      </Section>

      {/* Framework */}
      <Section id="framework" background="light" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Unser strukturierter Ansatz für digitale Transformation
            </h2>
            <p className={`${typographyStyles.body.large} max-w-3xl mx-auto mt-6`}>
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
                className="bg-white rounded-lg p-8 border border-[#E5E8E8] shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg">
                    <block.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A]">
                    {block.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                      <p className="text-base text-[#555555]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section id="beispiele" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Digitale Transformation in der Praxis
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesData.de.slice(0, 3).map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{study.client}</h3>
                <p className="text-sm text-[#555555] mb-4">{study.shortDescription}</p>
                <Link to="/referenzen">
                  <Button variant="secondary" size="sm">
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" background="light" spacing="large">
        <Container size="narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={typographyStyles.headings.h2}>
              Häufig gestellte Fragen
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Was ist digitale Transformation wirklich?</AccordionTrigger>
              <AccordionContent>
                Digitale Transformation bedeutet mehr als neue Tools einzuführen. Es geht darum, Geschäftsprozesse, Customer Journeys und Entscheidungswege neu zu denken — mit dem Ziel, schneller, effizienter und datenbasiert zu arbeiten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Was kostet eine digitale Transformation?</AccordionTrigger>
              <AccordionContent>
                Die Kosten hängen vom Umfang ab. Eine digitale Strategie mit Roadmap beginnt ab 8.000 €. Komplette Transformationsprojekte mit Implementierung starten ab 25.000 €.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Wie lange dauert die Umsetzung?</AccordionTrigger>
              <AccordionContent>
                Eine digitale Strategie und Roadmap entwickeln wir in 3-6 Wochen. Die Implementierung erfolgt phasenweise und dauert je nach Komplexität 3-12 Monate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Arbeiten Sie auch mit bestehenden Systemen?</AccordionTrigger>
              <AccordionContent>
                Ja! Wir analysieren Ihre bestehende Infrastruktur und entwickeln Lösungen, die sich nahtlos integrieren. Unser Ansatz ist technologieneutral.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <CTA 
            title="Bereit für digitale Transformation?"
            subtitle="Lassen Sie uns gemeinsam eine digitale Strategie entwickeln, die Ihre Geschäftsziele erreicht."
            primaryCta="Projekt starten"
            secondaryCta="Strategiegespräch vereinbaren"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default DigitaleTransformationStrategie;
