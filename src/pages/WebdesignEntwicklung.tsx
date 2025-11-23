import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { StatsBar, PainPointsGrid, FeatureGrid, BenefitsCards } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, LayoutGrid, Code, Zap, Users, Award, Brain, Search,
  PenTool, CheckCircle2, ArrowRight
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

const WebdesignEntwicklung = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign & Entwicklung", url: "https://ooliv.de/webdesign-entwicklung" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const trustStats = [
    { icon: Award, value: "100+", label: "Projekte" },
    { icon: Users, value: "Senior", label: "Senior-Level Führung ohne Junior-Teams" },
    { icon: Target, value: "UX-first", label: "Struktur, UX & SEO integriert" },
    { icon: Zap, value: "Perfor-mant", label: "Schnell, skalierbar, wartbar" }
  ];

  const painPoints = [
    {
      icon: LayoutGrid,
      title: "Veraltetes Webdesign, das nicht konvertiert",
      description: "Gutes Design reicht nicht — fehlende Struktur verhindert Anfragen."
    },
    {
      icon: Zap,
      title: "Langsame Websites ohne Performance-Optimierung",
      description: "Jede Sekunde Ladezeit kostet Conversion und Vertrauen."
    },
    {
      icon: Code,
      title: "WordPress-Systeme ohne Systematik & Sicherheit",
      description: "Fehlende Architektur führt zu Sicherheitslücken und schwerer Wartbarkeit."
    },
    {
      icon: Target,
      title: "Kein klares UX-Konzept davor",
      description: "Ohne Entscheidungs-Logik verlieren Nutzer Orientierung."
    }
  ];

  const services = [
    {
      icon: PenTool,
      title: "UX & UI Design",
      keywords: "UX UI Design • Corporate Webdesign",
      items: [
        "Informationsarchitektur entwickeln",
        "Wireframes & Prototypen",
        "Markenorientiertes UI Design",
        "UX-Designsysteme aufbauen"
      ]
    },
    {
      icon: Code,
      title: "Webentwicklung & Responsive Design",
      keywords: "Webentwicklung Agentur • Responsive Webdesign",
      items: [
        "Strukturierte Frontend-Entwicklung",
        "Mobile-first Architektur",
        "Performance-orientierter Code",
        "WCAG-orientierte Umsetzung"
      ]
    },
    {
      icon: Code,
      title: "WordPress Agentur & individuelle Themes",
      keywords: "WordPress Agentur • Custom WordPress Themes",
      items: [
        "Custom Theme-Entwicklung",
        "Gutenberg-Blocks & modulare Komponenten",
        "Stabile Plugin-Integrationen",
        "Security & Update-Architektur"
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimierung & technische SEO",
      keywords: "Performance Optimierung Website • Technische SEO",
      items: [
        "Core Web Vitals Optimierung",
        "Caching & Lazy Loading",
        "Technische Schema-Strukturen",
        "Saubere URL- & IA-Architektur"
      ]
    }
  ];

  const approach = [
    {
      icon: LayoutGrid,
      title: "UX-Architektur statt Schönfärberei",
      description: "Struktur, Entscheidungslogik und Nutzerführung vor visueller Ästhetik."
    },
    {
      icon: Brain,
      title: "Conversion-Psychologie integriert",
      description: "Jedes Element folgt einer klaren strategischen Funktion."
    },
    {
      icon: Zap,
      title: "Mobile-first & schnelle Ladezeiten",
      description: "Performance wird von Anfang an in die Architektur eingebaut."
    },
    {
      icon: Search,
      title: "SEO-optimierte Struktur von Anfang an",
      description: "Technisches SEO und klare Informationsarchitektur sind grundlegende Bausteine."
    }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Webdesign & WordPress Entwicklung | ooliv Mainz"
        description="Strategisches Webdesign, UX-first WordPress-Entwicklung & technische SEO. Senior-Level Umsetzung unter Führung von Uli Schönleber."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="webdesign agentur, wordpress agentur, webentwicklung agentur, b2b webdesign, responsive webdesign"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="Webdesign Agentur für moderne Websites & performante Entwicklung"
            subtitle="Strategisches Webdesign & performante WordPress-Entwicklung: UX-first, SEO-ready und strukturiert entwickelt — geführt von Uli Schönleber, umgesetzt durch ein spezialisiertes Hybridteam."
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
        </Container>
      </Section>

      {/* Trust Stats */}
      <Section background="light" spacing="small">
        <Container>
          <StatsBar stats={trustStats} variant="horizontal" />
        </Container>
      </Section>

      {/* Pain Points */}
      <Section id="pain-points" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Warum modernes Webdesign entscheidend ist
            </H2>
          </motion.div>

          <PainPointsGrid painPoints={painPoints} columns={4} />
        </Container>
      </Section>

      {/* Services */}
      <Section id="leistungen" background="light" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Unsere Leistungen: Webdesign & Entwicklung für Unternehmen
            </H2>
          </motion.div>

          <FeatureGrid 
            features={services}
            columns={2}
            showCheckmarks={true}
            variant="detailed"
          />
        </Container>
      </Section>

      {/* Approach */}
      <Section id="warum-webdesign" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Professionelles Webdesign: Struktur, Performance & Conversion
            </H2>
          </motion.div>

          <BenefitsCards 
            benefits={approach}
            columns={4}
            variant="icon-top"
            background="white"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <LargeParagraph alignment="center" className="font-semibold">
              Wir entwickeln Websites, die funktionieren — vom Konzept bis zur Entwicklung.
            </LargeParagraph>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies */}
      <MicroCaseStudies 
        cases={["alc", "mdi", "fibona"]}
        title="Webdesign-Projekte in der Praxis"
        showTitle={true}
      />

      {/* FAQ */}
      <Section id="faq" spacing="large">
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
              <AccordionTrigger>Was kostet eine Website?</AccordionTrigger>
              <AccordionContent>
                Eine professionelle Business-Website beginnt ab 8.000 €. Umfangreiche Corporate Websites oder E-Commerce-Projekte starten ab 15.000 €.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie lange dauert ein Website-Projekt?</AccordionTrigger>
              <AccordionContent>
                Ein typisches Website-Projekt dauert 8-16 Wochen vom Kickoff bis zum Launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Entwickeln Sie mit Templates?</AccordionTrigger>
              <AccordionContent>
                Nein. Wir entwickeln jede Website individuell und auf Ihre spezifischen Anforderungen zugeschnitten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Ist SEO inklusive?</AccordionTrigger>
              <AccordionContent>
                Technisches SEO ist bei jedem Website-Projekt inklusive: saubere Code-Struktur, optimierte Performance, Mobile-Optimierung, Schema-Markup.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <CTA 
            title="Bereit für ein professionelles Webdesign?"
            subtitle="Lassen Sie uns gemeinsam eine Website entwickeln, die nicht nur gut aussieht, sondern auch konvertiert."
            primaryCta="Website-Projekt starten"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default WebdesignEntwicklung;
