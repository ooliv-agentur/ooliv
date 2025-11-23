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
    { icon: Users, value: "Senior", label: "Senior-Strategie statt Junioren" },
    { icon: Target, value: "UX", label: "UX-first & SEO-ready" },
    { icon: Zap, value: "Fast", label: "Performance-optimierte Umsetzung" }
  ];

  const painPoints = [
    {
      icon: LayoutGrid,
      title: "Veraltetes Webdesign, das nicht konvertiert",
      description: "Ihre Website sieht gut aus, aber generiert keine Anfragen."
    },
    {
      icon: Zap,
      title: "Langsame Websites ohne Performance-Optimierung",
      description: "Ladezeiten über 3 Sekunden kosten Sie potenzielle Kunden."
    },
    {
      icon: Code,
      title: "WordPress-Systeme ohne Systematik & Sicherheit",
      description: "Unsauberer Code, Sicherheitslücken und fehlende Wartbarkeit."
    },
    {
      icon: Target,
      title: "Kein klares UX-Konzept davor",
      description: "Design ohne Strategie führt zu verwirrten Nutzern."
    }
  ];

  const services = [
    {
      icon: PenTool,
      title: "UX & UI Design",
      keywords: "UX UI Design • Corporate Webdesign",
      items: [
        "Informationsarchitektur entwickeln",
        "Wireframes & Prototypen erstellen",
        "Markenorientiertes UI Design",
        "Design-Systeme aufbauen"
      ]
    },
    {
      icon: Code,
      title: "Webentwicklung & Responsive Design",
      keywords: "Webentwicklung Agentur • Responsive Webdesign",
      items: [
        "Custom Frontend-Entwicklung",
        "Mobile-first Optimierung",
        "Performance-optimierter Code",
        "Barrierefreie Umsetzung (WCAG)"
      ]
    },
    {
      icon: Code,
      title: "WordPress Agentur & individuelle Themes",
      keywords: "WordPress Agentur • Custom WordPress Themes",
      items: [
        "Custom Theme-Entwicklung",
        "Gutenberg Block-Entwicklung",
        "Plugin-Entwicklung",
        "WordPress Sicherheit & Updates"
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimierung & technische SEO",
      keywords: "Performance Optimierung Website • Technische SEO",
      items: [
        "Core Web Vitals Optimierung",
        "Lazy Loading & Caching",
        "Schema.org Markup",
        "SEO-freundliche URL-Struktur"
      ]
    }
  ];

  const approach = [
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
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Webdesign Agentur & WordPress Entwicklung für Unternehmen | ooliv"
        description="Professionelles Webdesign & WordPress Entwicklung: UX/UI Design, moderne Webentwicklung, technische SEO, Performance-Optimierung. 200+ Projekte."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="webdesign agentur, wordpress agentur, webentwicklung agentur, b2b webdesign, responsive webdesign"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="Webdesign Agentur für moderne Websites & performante Entwicklung"
            subtitle="Professionelle Webdesign & Entwicklung: WordPress Agentur für UX/UI Design, Performance-Optimierung und technische SEO – messbar mehr Leads generieren."
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
            <h2 className={typographyStyles.headings.h2}>
              Warum modernes Webdesign entscheidend ist
            </h2>
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
            <h2 className={typographyStyles.headings.h2}>
              Unsere Leistungen: Webdesign & Entwicklung für Unternehmen
            </h2>
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
            <h2 className={typographyStyles.headings.h2}>
              Professionelles Webdesign: Struktur, Performance & Conversion
            </h2>
          </motion.div>

          <BenefitsCards 
            benefits={approach}
            columns={4}
            variant="icon-top"
            background="white"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xl font-semibold text-[#0A0A0A] mt-12"
          >
            Wir entwickeln Websites, die funktionieren — vom Konzept bis zur Entwicklung.
          </motion.p>
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
            <h2 className={typographyStyles.headings.h2}>
              Häufig gestellte Fragen
            </h2>
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
            primaryCta="Projekt starten"
            secondaryCta="Strategiegespräch vereinbaren"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default WebdesignEntwicklung;
