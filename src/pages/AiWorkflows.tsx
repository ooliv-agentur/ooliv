import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { StatsBar, PainPointsGrid, FeatureGrid, MicroCaseStudies } from '@/components/shared';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { typographyStyles } from '@/styles/typography';
import { motion } from 'framer-motion';
import { H2, H3, Paragraph, LargeParagraph } from '@/components/ui/typography';
import { 
  Brain, Zap, Shield, GraduationCap, Search, FileText, Cog, 
  TestTube, GitBranch, Target, AlertTriangle, Database, BarChart3
} from 'lucide-react';

const AiWorkflows = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "AI-Workflows", url: "https://ooliv.de/ai-workflows" }
  ];

  const trustStats = [
    { icon: Zap, value: "Zeit", label: "Repetitive Aufgaben automatisiert & skalierbar machen" },
    { icon: GitBranch, value: "System", label: "CRM, CMS, ERP & interne Tools sauber verknüpfen" },
    { icon: Shield, value: "Struktur", label: "AI-Frameworks, Priorisierung & klare Governance" },
    { icon: GraduationCap, value: "Team", label: "Trainings, Guidelines & sichere AI-Nutzung" }
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Zeitintensive manuelle Abläufe",
      description: "Ressourcen werden gebunden statt wertschöpfend eingesetzt."
    },
    {
      icon: Target,
      title: "Kein AI-Framework / keine AI-Adoption",
      description: "Tools werden getestet, aber nicht strategisch operationalisiert."
    },
    {
      icon: GitBranch,
      title: "Insellösungen ohne Integration",
      description: "Einzel-Tools liefern keinen Wert ohne System-Architektur."
    },
    {
      icon: Database,
      title: "Kein Nutzen aus vorhandenen Daten",
      description: "Daten liegen vor, werden aber nicht strukturiert verarbeitet."
    },
    {
      icon: BarChart3,
      title: "Prozesse zu komplex für Wachstum",
      description: "Manuelle Abläufe bremsen Skalierung & Qualität."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "AI-Research & Datenanalyse",
      keywords: "AI Research • Knowledge Extraction",
      items: [
        "Strukturierte LLM-Analysen",
        "Knowledge Extraction & semantische Muster",
        "Wettbewerbs- & Markt-Insights",
        "Intent- & Themenanalyse",
        "Komplexe Inhalte verständlich aufbereitet"
      ]
    },
    {
      icon: FileText,
      title: "AI-Content & SEO-Automation",
      keywords: "AI Content Automation • SEO-Optimierung",
      items: [
        "Blog-Automation mit Qualitätskontrolle",
        "AI-generierte Themencluster",
        "SEO-Automationen & Content-Blueprints",
        "Social Media Content automatisiert",
        "Menschliche Review-Schleifen"
      ]
    },
    {
      icon: Cog,
      title: "Process Automation & AI-Pipelines",
      keywords: "Workflow Automation • Process Mining",
      items: [
        "Wiederkehrende Aufgaben automatisieren",
        "Lead-Scoring & Qualifizierung",
        "Reporting, Alerts & Monitoring",
        "Prozess-Routing & interne Systeme"
      ]
    },
    {
      icon: TestTube,
      title: "AI-Integration & Tool-Enablement",
      keywords: "AI Integration • AI Adoption",
      items: [
        "Tool-Vergleiche & Technologieauswahl",
        "Risiko-, Kosten- & Nutzeneinschätzung",
        "Systemintegration in bestehende Prozesse",
        "Governance & Policy-Entwicklung"
      ]
    },
    {
      icon: GitBranch,
      title: "AI-Workflow Integration in Teams",
      keywords: "AI Strategie • API-Integrationen",
      items: [
        "CRM-Integrationen & API-Prozesse",
        "CMS-Automationen & interne Bots",
        "Automatisierte Arbeitsabläufe",
        "API-gestützte Systeme"
      ]
    },
    {
      icon: GraduationCap,
      title: "AI Enablement & Team-Schulung",
      keywords: "Prompt Engineering • Best Practices",
      items: [
        "Prompt Engineering & Best Practices",
        "AI-Guidelines & Sicherheitsrahmen",
        "Teamtraining & Rollenmodelle",
        "Hands-on Sessions"
      ]
    }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
      title="AI-Workflows & Prozessautomatisierung | ooliv Mainz"
      description="AI-Workflows, Automatisierung & Prozessoptimierung. Senior-Level AI-Strategie mit strategischer Führung. Effizienz, Skalierbarkeit & klare Strukturen."
        canonicalUrl="https://ooliv.de/ai-workflows"
        keywords="ai workflows, ki workflows, ai integration unternehmen, ai prozessautomatisierung"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="AI-Workflows & Automatisierung für Unternehmen – effizient, skalierbar, messbar"
            subtitle="Wir entwickeln strukturierte AI-Workflows, automatisieren Prozesse und integrieren KI sinnvoll in bestehende Systeme — Senior-Level-Führung mit spezialisierter Umsetzung durch Experten für Automatisierung, Development und Systemintegration."
            primaryCta={{ text: "AI-Strategiegespräch vereinbaren", link: "/kontakt" }}
            secondaryCta={{ text: "Beispiel-Workflows ansehen", link: "#leistungen" }}
          />
        </Container>
      </Section>

      {/* USPs */}
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
              Warum AI-Workflows & Prozessautomatisierung entscheidend sind
            </H2>
          </motion.div>

          <PainPointsGrid painPoints={painPoints} columns={5} />
        </Container>
      </Section>

      {/* Problem Solution */}
      <Section background="light" spacing="large">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 className="text-center mb-12" alignment="center">
              AI bringt nur etwas, wenn sie sauber in Prozesse integriert wird.
            </H2>
            
              <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-8 rounded-lg border border-border">
                <H3 className="mb-4">Typische Herausforderungen</H3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <Paragraph color="secondary">Unternehmen testen Tools, aber haben kein System</Paragraph>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <Paragraph color="secondary">Kein Überblick über Kosten, Nutzen, Risiken</Paragraph>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <Paragraph color="secondary">Teams fühlen sich überfordert</Paragraph>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <Paragraph color="secondary">Keine klaren AI-Use-Cases</Paragraph>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
                <H3 className="mb-4">Unsere Lösung</H3>
                <Paragraph>
            Wir entwickeln AI-Workflows, die nicht experimentieren, sondern funktionieren: klare Prozessmodelle, Automatisierungen, datenbasierte Entscheidungen und skalierbare Abläufe.
                </Paragraph>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Services */}
      <Section id="leistungen" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <H2 className="mb-6" alignment="center">
              Unsere AI-Workflows für Unternehmen
            </H2>
          </motion.div>

          <FeatureGrid 
            features={services}
            columns={3}
            showCheckmarks={true}
            variant="detailed"
          />
        </Container>
      </Section>

      {/* Case Studies */}
      <MicroCaseStudies 
        cases={["iconpro", "medicloud", "cobus"]}
        title="AI-lastige Kundenprojekte"
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
              <AccordionTrigger>Welche AI-Tools nutzt ihr?</AccordionTrigger>
              <AccordionContent>
                Wir arbeiten mit führenden AI-Plattformen wie ChatGPT, Claude, Perplexity, Midjourney und Google Vertex AI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie lange dauert die Implementierung?</AccordionTrigger>
              <AccordionContent>
                Erste Prototypen in 2-4 Wochen. Vollständige Integration je nach Komplexität 2-6 Monate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Was kostet AI-Integration?</AccordionTrigger>
              <AccordionContent>
                AI-Strategie-Workshops starten ab 3.000 €. Konkrete Workflow-Implementierungen ab 8.000 €.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sind AI-Workflows DSGVO-konform?</AccordionTrigger>
              <AccordionContent>
                Ja. Wir achten auf Datenschutz, arbeiten mit EU-konformen Tools wo nötig und entwickeln sichere Prozesse.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* Team */}
      <Section spacing="medium">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <H3 className="mb-6" alignment="center">
              Hybride AI-Strategie
            </H3>
            <LargeParagraph alignment="center" color="secondary">
              AI-Strategie, Prozessmodellierung & Priorisierung unter Senior-Level-Führung — Umsetzung durch spezialisiertes Hybridteam für Automatisierung, Development, Content & Systemintegration.
            </LargeParagraph>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <CTA 
            title="Bereit für AI-Workflows?"
            subtitle="Lassen Sie uns gemeinsam AI-Prozesse entwickeln, die Ihre Teams entlasten und messbare Ergebnisse liefern."
        primaryCta="AI-Strategiegespräch vereinbaren"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default AiWorkflows;
