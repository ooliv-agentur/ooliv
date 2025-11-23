import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Search, FileText, Cog, TestTube, GitBranch, GraduationCap, Target, AlertTriangle, CheckCircle2, Database, Cpu, Sparkles, BarChart3 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { typographyStyles } from '@/styles/typography';

const AiWorkflows = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "AI-Workflows", url: "https://ooliv.de/ai-workflows" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="AI-Workflows & Prozessautomatisierung für Unternehmen | ooliv"
        description="AI-Workflows, Prozessautomatisierung und KI-Integration für Unternehmen. Wir modernisieren Prozesse, steigern Effizienz und schaffen messbare Resultate."
        canonicalUrl="https://ooliv.de/ai-workflows"
        keywords="ai workflows, ki workflows, ai integration unternehmen, ai prozessautomatisierung, ai adoption, ai automation, ai strategie, ai tools für unternehmen"
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Workflows & Process Automation",
            "name": "AI-Workflows & Prozessautomatisierung",
            "provider": {
              "@type": "Organization",
              "name": "ooliv Werbeagentur"
            }
          }
        ]}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <PageHero
            title="AI-Workflows & Automatisierung für Unternehmen – effizient, skalierbar, messbar"
            subtitle="Wir entwickeln AI-Workflows, automatisieren Prozesse und integrieren KI sinnvoll in bestehende Strukturen – ohne Chaos, ohne Hype."
            primaryCta={{ text: "AI-Strategiegespräch vereinbaren", link: "/kontakt" }}
            secondaryCta={{ text: "Beispiel-Workflows ansehen", link: "#workflow-beispiele" }}
          />
        </Container>
      </Section>

      {/* USPs */}
      <Section background="light" spacing="small">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, text: "AI-Prozesse, die Zeit sparen" },
              { icon: GitBranch, text: "Integration in bestehende Systeme" },
              { icon: Shield, text: "Strukturierte Einführung ohne Chaos" },
              { icon: GraduationCap, text: "Enablement & Schulung für Teams" }
            ].map((usp, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <usp.icon className="w-10 h-10 mx-auto mb-4 text-[#0BC3C3]" />
                <p className="text-[#0A0A0A] font-medium">{usp.text}</p>
              </motion.div>
            ))}
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 text-[#0BC3C3] mb-4" />
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Problem Solution */}
      <Section background="light" spacing="large">
        <Container size="narrow">
          <motion.div {...fadeInUp}>
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

              <div className="bg-[#E0FBFA] p-8 rounded-lg border border-[#0BC3C3]/20">
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
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className={typographyStyles.headings.h2}>
              Unsere AI-Workflows für Unternehmen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "AI-Research & Datenanalyse",
                keywordTag: "AI Research • Knowledge Extraction",
                points: [
                  "Strukturierte LLM-Analysen",
                  "Wettbewerbs- & Markt-Insights",
                  "AI-gestützte Content-Recherche",
                  "Komplexe Themen verständlich aufbereitet"
                ]
              },
              {
                icon: FileText,
                title: "AI-Content & SEO-Automation",
                keywordTag: "AI Content Automation • SEO-Optimierung",
                points: [
                  "Blog-Automation",
                  "SEO-Cluster automatisch generieren",
                  "Social Media Content automatisieren",
                  "Qualitätssicherung durch menschliche Kontrolle"
                ]
              },
              {
                icon: Cog,
                title: "Process Automation & AI-Pipelines",
                keywordTag: "Workflow Automation • Process Mining",
                points: [
                  "Wiederkehrende Aufgaben automatisieren",
                  "Lead-Qualifizierung",
                  "Reporting, Monitoring, Alerts",
                  "Internes Projekt-Routing"
                ]
              },
              {
                icon: TestTube,
                title: "AI-Integration & Tool-Enablement",
                keywordTag: "AI Integration • AI Adoption",
                points: [
                  "Vergleich der Tools",
                  "Empfehlung passend zu Teams & Prozessen",
                  "Risiko- und Kostenbewertung",
                  "Integration in bestehende Systeme"
                ]
              },
              {
                icon: GitBranch,
                title: "AI-Workflow Integration in Teams",
                keywordTag: "AI Strategie • API-Integrationen",
                points: [
                  "CRM-Erweiterungen",
                  "CMS-Automationen",
                  "AI-Bots & interne Systeme",
                  "API-gestützte Prozesse"
                ]
              },
              {
                icon: GraduationCap,
                title: "AI Enablement & Team-Schulung",
                keywordTag: "Prompt Engineering • Best Practices",
                points: [
                  "Teamtraining",
                  "AI-Guidelines & Policy",
                  "Best-Practice Workflows",
                  "Hands-on Sessions"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#F5F7F7] p-8 rounded-lg border border-[#E5E8E8] hover:border-[#0BC3C3] transition-colors"
              >
                <service.icon className="w-12 h-12 text-[#0BC3C3] mb-4" />
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{service.title}</h3>
                <p className="text-xs text-[#0BC3C3] font-semibold mb-4">{service.keywordTag}</p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-[#555555] flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#0BC3C3] mr-2 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" background="light" spacing="large">
        <Container size="narrow">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className={typographyStyles.headings.h2}>
              Häufig gestellte Fragen
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Welche AI-Tools nutzt ihr?</AccordionTrigger>
              <AccordionContent>
                Wir arbeiten mit führenden AI-Plattformen wie ChatGPT, Claude, Perplexity, Midjourney und Google Vertex AI. Die Tool-Auswahl hängt vom Use-Case ab.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie lange dauert die Implementierung von AI-Workflows?</AccordionTrigger>
              <AccordionContent>
                Erste Prototypen in 2-4 Wochen. Vollständige Integration je nach Komplexität 2-6 Monate. Wir arbeiten iterativ für schnelle erste Erfolge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Was kostet AI-Integration?</AccordionTrigger>
              <AccordionContent>
                AI-Strategie-Workshops starten ab 3.000 €. Konkrete Workflow-Implementierungen ab 8.000 €. Laufende Betreuung ab 1.500 €/Monat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sind AI-Workflows sicher und DSGVO-konform?</AccordionTrigger>
              <AccordionContent>
                Ja. Wir achten auf Datenschutz, arbeiten mit EU-konformen Tools wo nötig und entwickeln sichere Prozesse für sensible Daten.
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
