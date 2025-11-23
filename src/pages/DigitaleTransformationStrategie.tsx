import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { StatsBar, PainPointsGrid, FeatureGrid } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, Users, Award, BarChart3, Map, Workflow, Settings,
  Search, Zap, Brain, CheckCircle2, ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MicroCaseStudies } from '@/components/shared/MicroCaseStudies';
import { typographyStyles } from '@/styles/typography';
import { motion } from 'framer-motion';
import { H2, LargeParagraph } from '@/components/ui/typography';

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

  const trustStats = [
    { icon: Award, value: "100+", label: "Projekte" },
    { icon: Users, value: "Direkt", label: "Direkter Zugang zu Uli Schönleber" },
    { icon: Target, value: "16+", label: "Jahre digitale Transformations-Erfahrung" },
    { icon: BarChart3, value: "Messbar", label: "KPIs & strukturierte Erfolgsmessung" }
  ];

  const painPoints = [
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
  ];

  const frameworkFeatures = [
    {
      icon: Search,
      title: "Digitale Analyse & Reifegrad-Modell (Assessment)",
      items: [
        "Digitaler Reifegrad bestimmen",
        "Prozessaufnahme durchführen",
        "Wettbewerbsanalyse erstellen"
      ]
    },
    {
      icon: Map,
      title: "Digitale Strategie & Roadmap (Design)",
      items: [
        "Value Proposition definieren",
        "Digitale Priorisierung festlegen",
        "KPIs & Zielbilder entwickeln",
        "Entscheidungsarchitektur aufbauen"
      ]
    },
    {
      icon: Zap,
      title: "Implementierung & Enablement (Delivery)",
      items: [
        "Digitale Prozesse optimieren",
        "Technologie-Einführung begleiten",
        "Team-Fähigkeiten steigern"
      ]
    },
    {
      icon: Brain,
      title: "AI-Workflows & Automatisierung (Scale)",
      items: [
        "AI-Workflows implementieren",
        "Digitale Prozessautomatisierung umsetzen",
        "Operative Effizienz steigern"
      ]
    }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Digitale Transformation & Digitale Strategie | ooliv Mainz"
        description="Digitale Transformation, Prozessoptimierung und AI-Workflows. Senior-Level Beratung durch Uli Schönleber. Klare Roadmaps, messbare Ergebnisse."
        canonicalUrl="https://ooliv.de/digitale-transformation-strategie"
        keywords="digitale transformation beratung, digitale transformation strategie, digitale transformation agentur, digitale prozesse optimieren, digitale roadmap erstellen"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="Digitale Transformation Beratung für Unternehmen"
            subtitle="Wir entwickeln klare digitale Strategien, optimieren Prozesse und implementieren AI-Workflows — geführt von Senior-Expertise durch Uli Schönleber, unterstützt durch ein spezialisiertes Hybridteam."
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

      {/* Trust Stats */}
      <Section background="light" spacing="small">
        <Container>
          <StatsBar stats={trustStats} variant="horizontal" />
        </Container>
      </Section>

      {/* Pain Points */}
      <Section id="warum-scheitert" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Die häufigsten Gründe, warum digitale Transformation scheitert
            </H2>
          </motion.div>

          <PainPointsGrid painPoints={painPoints} columns={4} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <LargeParagraph alignment="center" className="font-semibold">
              Wir lösen nicht nur technische Aufgaben — wir strukturieren Ihr digitales Ökosystem strategisch, prozessorientiert und wertbasiert.
            </LargeParagraph>
          </motion.div>
        </Container>
      </Section>

      {/* Framework */}
      <Section id="framework" background="light" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Unser strukturierter Ansatz für digitale Transformation
            </H2>
            <LargeParagraph className="max-w-3xl mx-auto" alignment="center" color="secondary">
              Unsere hybride Struktur aus Strategie, UX, Development und Content sorgt dafür, dass digitale Transformation ganzheitlich realisiert wird.
            </LargeParagraph>
          </motion.div>

          <FeatureGrid 
            features={frameworkFeatures}
            columns={2}
            showCheckmarks={true}
            variant="default"
          />
        </Container>
      </Section>

      {/* Case Studies */}
      <MicroCaseStudies 
        cases={["cobus", "iconpro", "spez"]}
        title="Digitale Transformation in der Praxis"
        showTitle={true}
      />

      {/* FAQ */}
      <Section id="faq" background="light" spacing="large">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <H2 className="mb-6" alignment="center">
              Häufig gestellte Fragen
            </H2>
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
        primaryCta="Strategiegespräch vereinbaren"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default DigitaleTransformationStrategie;
