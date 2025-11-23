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
    { icon: Zap, value: "Zeit", label: "AI-Prozesse, die Zeit sparen" },
    { icon: GitBranch, value: "System", label: "Integration in bestehende Systeme" },
    { icon: Shield, value: "Struktur", label: "Strukturierte Einführung ohne Chaos" },
    { icon: GraduationCap, value: "Team", label: "Enablement & Schulung für Teams" }
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Zeitintensive manuelle Abläufe",
      description: "Repetitive Aufgaben binden Ressourcen, die strategisch besser eingesetzt werden könnten."
    },
    {
      icon: Target,
      title: "Kein AI-Framework / keine AI-Adoption",
      description: "Tools werden getestet, aber nicht systematisch integriert oder skaliert."
    },
    {
      icon: GitBranch,
      title: "Insellösungen ohne Integration",
      description: "AI-Tools arbeiten isoliert und nicht in bestehende Workflows eingebunden."
    },
    {
      icon: Database,
      title: "Kein Nutzen aus vorhandenen Daten",
      description: "Daten liegen vor, werden aber nicht automatisiert analysiert oder genutzt."
    },
    {
      icon: BarChart3,
      title: "Prozesse zu komplex für Wachstum",
      description: "Bestehende Abläufe skalieren nicht mit steigenden Anforderungen."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "AI-Research & Datenanalyse",
      keywords: "AI Research • Knowledge Extraction",
      items: [
        "Strukturierte LLM-Analysen",
        "Wettbewerbs- & Markt-Insights",
        "AI-gestützte Content-Recherche",
        "Komplexe Themen verständlich aufbereitet"
      ]
    },
    {
      icon: FileText,
      title: "AI-Content & SEO-Automation",
      keywords: "AI Content Automation • SEO-Optimierung",
      items: [
        "Blog-Automation",
        "SEO-Cluster automatisch generieren",
        "Social Media Content automatisieren",
        "Qualitätssicherung durch menschliche Kontrolle"
      ]
    },
    {
      icon: Cog,
      title: "Process Automation & AI-Pipelines",
      keywords: "Workflow Automation • Process Mining",
      items: [
        "Wiederkehrende Aufgaben automatisieren",
        "Lead-Qualifizierung",
        "Reporting, Monitoring, Alerts",
        "Internes Projekt-Routing"
      ]
    },
    {
      icon: TestTube,
      title: "AI-Integration & Tool-Enablement",
      keywords: "AI Integration • AI Adoption",
      items: [
        "Vergleich der Tools",
        "Empfehlung passend zu Teams & Prozessen",
        "Risiko- und Kostenbewertung",
        "Integration in bestehende Systeme"
      ]
    },
    {
      icon: GitBranch,
      title: "AI-Workflow Integration in Teams",
      keywords: "AI Strategie • API-Integrationen",
      items: [
        "CRM-Erweiterungen",
        "CMS-Automationen",
        "AI-Bots & interne Systeme",
        "API-gestützte Prozesse"
      ]
    },
    {
      icon: GraduationCap,
      title: "AI Enablement & Team-Schulung",
      keywords: "Prompt Engineering • Best Practices",
      items: [
        "Teamtraining",
        "AI-Guidelines & Policy",
        "Best-Practice Workflows",
        "Hands-on Sessions"
      ]
    }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="AI-Workflows & Prozessautomatisierung für Unternehmen | ooliv"
        description="AI-Workflows, Prozessautomatisierung und KI-Integration für Unternehmen. Wir modernisieren Prozesse, steigern Effizienz und schaffen messbare Resultate."
        canonicalUrl="https://ooliv.de/ai-workflows"
        keywords="ai workflows, ki workflows, ai integration unternehmen, ai prozessautomatisierung"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="AI-Workflows & Automatisierung für Unternehmen – effizient, skalierbar, messbar"
            subtitle="Wir entwickeln AI-Workflows, automatisieren Prozesse und integrieren KI sinnvoll in bestehende Strukturen – ohne Chaos, ohne Hype."
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
            <h2 className={typographyStyles.headings.h2}>
              Warum AI-Workflows & Prozessautomatisierung entscheidend sind
            </h2>
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
            <h2 className={`${typographyStyles.headings.h2} text-center mb-12`}>
              AI bringt nur etwas, wenn sie sauber in Prozesse integriert wird.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg border border-[#E5E8E8]">
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Typische Herausforderungen</h3>
                <ul className="space-y-3 text-[#555555]">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Unternehmen testen Tools, aber haben kein System</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Kein Überblick über Kosten, Nutzen, Risiken</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Teams fühlen sich überfordert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Keine klaren AI-Use-Cases</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#D8F3F1] p-8 rounded-lg border border-[#32b2ab]/20">
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Unsere Lösung</h3>
                <p className="text-[#0A0A0A] leading-relaxed">
                  Wir entwickeln klare AI-Workflows, die nicht experimentieren, sondern liefern:
                  Prozessautomatisierung, bessere Entscheidungen, interne Entlastung.
                </p>
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
            <h2 className={typographyStyles.headings.h2}>
              Unsere AI-Workflows für Unternehmen
            </h2>
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
            <h2 className={typographyStyles.headings.h2}>
              Häufig gestellte Fragen
            </h2>
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

      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <CTA 
            title="Bereit für AI-Workflows?"
            subtitle="Lassen Sie uns gemeinsam AI-Prozesse entwickeln, die Ihre Teams entlasten und messbare Ergebnisse liefern."
            primaryCta="AI-Strategiegespräch vereinbaren"
            secondaryCta="Beispiel-Workflows ansehen"
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default AiWorkflows;
