import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Search, FileText, Cog, TestTube, GitBranch, GraduationCap, Target, AlertTriangle, CheckCircle2, Database, Cpu, Sparkles, BarChart3 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        keywords="ai workflows, ki workflows, ai integration unternehmen, ai prozessautomatisierung, ai adoption, ai automation, ai strategie, ai tools für unternehmen, ai research, ai content automation, ai gestützte analyse, workflow automation, prozessoptimierung ai, decision intelligence, prompt engineering, automations-pipelines, knowledge extraction, machine learning unterstützung, datengetriebene prozesse, information retrieval"
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Workflows & Process Automation",
            "name": "AI-Workflows & Prozessautomatisierung",
            "description": "AI-Workflows, Prozessautomatisierung und KI-Integration für Unternehmen",
            "provider": {
              "@type": "Organization",
              "name": "ooliv Werbeagentur"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Germany"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Workflow Solutions",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            }
          }
        ]}
      />

      {/* Hero Section */}
      <section id="hero">
        <PageHero
          title="AI-Workflows & Automatisierung für Unternehmen – effizient, skalierbar, messbar"
          subtitle="Wir entwickeln AI-Workflows, automatisieren Prozesse und integrieren KI sinnvoll in bestehende Strukturen – ohne Chaos, ohne Hype."
          primaryCta={{ text: "AI-Strategiegespräch vereinbaren", link: "/kontakt" }}
          secondaryCta={{ text: "Beispiel-Workflows ansehen", link: "#workflow-beispiele" }}
        />
      </section>

      {/* USPs Section */}
      <section id="usps" className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, text: "AI-Prozesse, die Zeit sparen", label: "AI-Prozesse, die Zeit sparen" },
              { icon: GitBranch, text: "Integration in bestehende Systeme", label: "Integration in bestehende Systeme" },
              { icon: Shield, text: "Strukturierte Einführung ohne Chaos", label: "Strukturierte Einführung ohne Chaos" },
              { icon: GraduationCap, text: "Enablement & Schulung für Teams", label: "Enablement & Schulung für Teams" }
            ].map((usp, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <usp.icon className="w-10 h-10 mx-auto mb-4 text-primary" aria-label={usp.label} />
                <p className="text-foreground font-medium">{usp.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION - Pain Points */}
      <section id="pain-points" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
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
                className="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" aria-label={item.title} />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Lösung Block */}
      <section id="problem-solution" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              AI bringt nur etwas, wenn sie sauber in Prozesse integriert wird.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Typische Herausforderungen</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Unternehmen testen Tools, aber haben kein System</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Kein Überblick über Kosten, Nutzen, Risiken</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Teams fühlen sich überfordert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Prozesse sind nicht automatisiert, nur „beschleunigt"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Keine klaren AI-Use-Cases</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Unsere Lösung</h3>
                <p className="text-foreground leading-relaxed">
                  Wir entwickeln klare AI-Workflows, die nicht experimentieren, sondern liefern:
                  Prozessautomatisierung, bessere Entscheidungen, interne Entlastung.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positionierung */}
      <section id="positionierung" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Wir setzen AI nicht als Hype ein — sondern als strukturierten Prozess.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unsere AI-Workflows kombinieren Geschäftslogik, UX-Denkweise, Datenstrukturen und technische Umsetzung.
              Wir bauen Systeme, die in Unternehmen funktionieren — nicht nur in Tools.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "AI-gestützte Recherchen, Content und Datenanalyse",
              "Automatisierung wiederkehrender Aufgaben",
              "Performance-Monitoring",
              "Workflow-Design für Teams",
              "Integrationen in bestehende Tools",
              "Skalierbare Prozesse"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leistungsbereiche */}
      <section id="leistungen" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere AI-Workflows für Unternehmen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "AI-Research & Datenanalyse",
                keywordTag: "AI Research • Knowledge Extraction • Decision Intelligence",
                points: [
                  "Strukturierte LLM-Analysen",
                  "Wettbewerbs- & Markt-Insights",
                  "AI-gestützte Content-Recherche",
                  "Komplexe Themen verständlich aufbereitet"
                ],
                label: "AI-Research & Datenanalyse"
              },
              {
                icon: FileText,
                title: "AI-Content & SEO-Automation",
                keywordTag: "AI Content Automation • SEO-Optimierung • Content-Produktion",
                points: [
                  "Blog-Automation",
                  "SEO-Cluster automatisch generieren",
                  "Social Media Content automatisieren",
                  "Qualitätssicherung durch menschliche Kontrolle"
                ],
                label: "AI-Content & SEO-Automation"
              },
              {
                icon: Cog,
                title: "Process Automation & AI-Pipelines",
                keywordTag: "Workflow Automation • Process Mining • End-to-end Automatisierung",
                points: [
                  "Wiederkehrende Aufgaben automatisieren",
                  "Lead-Qualifizierung",
                  "Reporting, Monitoring, Alerts",
                  "Internes Projekt-Routing"
                ],
                label: "Process Automation & AI-Pipelines"
              },
              {
                icon: TestTube,
                title: "AI-Integration & Tool-Enablement",
                keywordTag: "AI Integration Unternehmen • AI Adoption • Tool-Evaluierung",
                points: [
                  "Vergleich der Tools",
                  "Empfehlung passend zu Teams & Prozessen",
                  "Risiko- und Kostenbewertung",
                  "Integration in bestehende Systeme"
                ],
                label: "AI-Integration & Tool-Enablement"
              },
              {
                icon: GitBranch,
                title: "AI-Workflow Integration in Teams",
                keywordTag: "AI Strategie • Datengetriebene Prozesse • API-Integrationen",
                points: [
                  "CRM-Erweiterungen",
                  "CMS-Automationen",
                  "AI-Bots & interne Systeme",
                  "API-gestützte Prozesse"
                ],
                label: "AI-Workflow Integration in Teams"
              },
              {
                icon: GraduationCap,
                title: "AI Enablement & Team-Schulung",
                keywordTag: "Prompt Engineering • AI Adoption • Best Practices",
                points: [
                  "Teamtraining",
                  "AI-Guidelines & Policy",
                  "Best-Practice Workflows",
                  "Hands-on Sessions"
                ],
                label: "AI Enablement & Team-Schulung"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-muted/30 p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" aria-label={service.label} />
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs text-primary font-semibold mb-4">{service.keywordTag}</p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Kostenlose AI-Analyse buchen
            </a>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION - AI-Stack */}
      <section id="ai-stack" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Tools & Technologien, die wir nutzen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Wir arbeiten mit führenden AI-Plattformen und Automatisierungstools für maximale Effizienz.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ChatGPT / LLMs", icon: Brain, category: "AI Models" },
              { name: "Claude", icon: Sparkles, category: "AI Models" },
              { name: "Midjourney", icon: Cpu, category: "AI Generation" },
              { name: "Perplexity", icon: Search, category: "AI Research" },
              { name: "Airtable", icon: Database, category: "Automation" },
              { name: "Zapier / Make", icon: GitBranch, category: "Integration" },
              { name: "Ahrefs + AI", icon: BarChart3, category: "SEO Analytics" },
              { name: "Google Vertex AI", icon: Cpu, category: "Cloud AI" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-background p-6 rounded-lg border border-border text-center hover:border-primary/50 transition-colors"
              >
                <tool.icon className="w-10 h-10 text-primary mx-auto mb-3" aria-label={tool.name} />
                <h3 className="font-bold text-foreground mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow-Beispiele */}
      <section id="workflow-beispiele" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beispielhafte AI-Workflows
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-gestützte Recherche",
                description: "Automatisierte Informationsrecherche in Sekunden, statt Stunden.",
                result: "6 Stunden Arbeitszeit pro Woche gespart",
                icon: Search
              },
              {
                title: "AI-Content-Pipeline",
                description: "Von Briefing → Keyword-Analyse → Draft → SEO-Optimierung → Publikation.",
                result: "30–60 Inhalte pro Monat",
                icon: FileText
              },
              {
                title: "Prozessautomatisierung",
                description: "AI erkennt Muster, routet Aufgaben und löst Auslöser für Folgeprozesse aus.",
                result: "Leads automatisch verteilt und priorisiert",
                icon: Cog
              },
              {
                title: "Performance-Monitoring & Alerts",
                description: "KPI-Dashboard + automatische Benachrichtigungen bei Abweichungen.",
                result: "Echtzeit-Übersicht für Abweichungen",
                icon: BarChart3
              }
            ].map((example, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg border border-primary/20"
              >
                <example.icon className="w-10 h-10 text-primary mb-4" aria-label={example.title} />
                <h3 className="text-xl font-bold text-foreground mb-2">{example.title}</h3>
                <p className="text-muted-foreground mb-4">{example.description}</p>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" aria-label="Ergebnis" />
                  <span className="text-primary font-semibold">{example.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION - Mini Case Studies */}
      <section id="case-studies" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Workflow Erfolge unserer Kunden
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI-gestützte Prozessautomatisierung",
                industry: "KI-Softwareunternehmen",
                description: "Automatisierung von Workflows für interne Produktentwicklung und Kundenprojekte.",
                kpi: "40% Zeitersparnis bei Routineaufgaben"
              },
              {
                title: "Automatisierte Content-Pipelines",
                industry: "Dienstleister",
                description: "End-to-end Content-Produktion mit AI-gestützter Recherche, Erstellung und SEO-Optimierung.",
                kpi: "3x höhere Content-Output bei gleichbleibender Qualität"
              },
              {
                title: "AI-gestützte Analyse & Reporting",
                industry: "Industrie-B2B",
                description: "Automatisches Performance-Monitoring mit AI-generierten Insights und Handlungsempfehlungen.",
                kpi: "Wöchentliche Reports in 15 statt 4 Stunden"
              },
              {
                title: "AI-Roadmap & Tool-Enablement",
                industry: "Beratungsunternehmen",
                description: "Strategische AI-Integration mit Team-Training und strukturiertem Roll-out.",
                kpi: "Team-weite AI-Adoption in 8 Wochen"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg border border-border"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {caseStudy.industry}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                <div className="flex items-center space-x-2 text-primary font-semibold">
                  <CheckCircle2 className="w-5 h-5" aria-label="KPI" />
                  <span>{caseStudy.kpi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section id="prozess" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So führen wir AI in Ihr Unternehmen ein
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                number: "01",
                title: "Analyse & Use-Case-Identifikation",
                description: "Prozesse analysieren, AI-Potenziale erkennen, Prioritäten setzen."
              },
              {
                number: "02",
                title: "Workflow-Entwicklung",
                description: "Konkrete AI-Workflows designen, die zu Ihren Prozessen passen."
              },
              {
                number: "03",
                title: "Prototyping & Testing",
                description: "Workflows testen, optimieren, skalierbar machen."
              },
              {
                number: "04",
                title: "Integration & Automation",
                description: "Technische Verknüpfungen, API-Integrationen, End-to-end Automatisierung."
              },
              {
                number: "05",
                title: "Training & Enablement",
                description: "Team-Schulungen, Guidelines, laufende Optimierung."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-muted/30 p-8 rounded-lg border border-border h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uli Teaser */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  AI-Workflows von jemandem, der Prozesse wirklich versteht.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ich entwickle AI-gestützte Systeme, die nicht nur Zeit sparen, sondern Qualität und Effizienz messbar steigern.
                  Mit Fokus auf Struktur, unternehmerischen Nutzen und sichere Implementierung.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "200+ realisierte Digitalprojekte",
                    "Strukturierter Prozess statt 'Tool-Hopping'",
                    "Teams bis C-Level begleitet"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start text-foreground">
                      <Brain className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" aria-label={point} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/ueber"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Uli kennenlernen →
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary" aria-label="Team" />
                </div>
              </div>
            </div>
            
            <motion.p
              {...fadeInUp}
              className="text-center text-lg text-muted-foreground mt-8 pt-8 border-t border-primary/20"
            >
              Unser hybrides Team aus Strategie, UX, Content, Entwicklung und AI-Engineering sorgt dafür, dass KI-Integrationen nicht nur technisch funktionieren, sondern echten Unternehmenswert schaffen. Weitere Services: 
              <a href="/digitale-transformation-strategie" className="text-primary hover:underline ml-2">Digitale Transformation</a>, 
              <a href="/seo-performance" className="text-primary hover:underline ml-2">SEO & Performance</a>, 
              <a href="/webdesign-entwicklung" className="text-primary hover:underline ml-2">Webdesign</a>, 
              <a href="/ux-konzeption" className="text-primary hover:underline ml-2">UX-Konzeption</a>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <CTA
          title="Bereit für AI-Workflows, die wirklich funktionieren?"
          subtitle="AI-Workflows & Prozessautomatisierung für Unternehmen – messbar, skalierbar, nachhaltig. Starten Sie jetzt mit einem kostenlosen AI-Strategiegespräch."
          primaryCta="Kostenloses AI-Strategiegespräch"
          primaryCtaLink="/kontakt"
        />
      </section>

      {/* NEW SECTION - FAQ */}
      <section id="faq" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              FAQ: AI-Workflows & Automatisierung
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was sind AI-Workflows?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                AI-Workflows sind automatisierte Prozesse, die künstliche Intelligenz nutzen, um repetitive Aufgaben zu übernehmen, Entscheidungen zu unterstützen oder Inhalte zu generieren. Sie kombinieren AI-Tools mit bestehenden Systemen und sparen Zeit, steigern Qualität und verbessern Effizienz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Wie lange dauert die Implementierung von AI-Workflows?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Erste Quick Wins können oft in 2-4 Wochen umgesetzt werden. Komplexere AI-Integrationen mit mehreren Workflows benötigen 6-12 Wochen. Wir starten immer mit einer Analyse-Phase (1-2 Wochen), um Prioritäten zu setzen und schnell messbare Erfolge zu liefern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Welche AI-Tools nutzen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Wir arbeiten mit führenden AI-Plattformen wie ChatGPT, Claude, Midjourney und Perplexity. Für Automatisierungen nutzen wir Tools wie Zapier, Make und Airtable. Die Tool-Auswahl erfolgt immer basierend auf Ihren spezifischen Anforderungen, bestehenden Systemen und Budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Was kostet die Implementierung von AI-Workflows?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Die Kosten hängen von Komplexität und Umfang ab. Eine AI-Analyse mit Konzept startet bei €3.500, einzelne Workflow-Implementierungen ab €5.000. Umfassende AI-Transformationsprojekte liegen typischerweise zwischen €15.000–€50.000. Wir erstellen transparente Angebote basierend auf Ihrer Situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Sind AI-Workflows sicher und DSGVO-konform?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ja, Datenschutz und Sicherheit haben höchste Priorität. Wir wählen DSGVO-konforme Tools, implementieren sichere Datenverarbeitungsprozesse und erstellen klare AI-Guidelines für Ihr Team. Bei sensiblen Daten nutzen wir On-Premise-Lösungen oder europäische AI-Anbieter.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Brauchen wir technisches Know-how für AI-Workflows?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Nein, Sie brauchen kein technisches Expertenwissen. Wir entwickeln benutzerfreundliche Workflows, schulen Ihr Team und erstellen klare Dokumentationen. Ziel ist, dass Ihre Mitarbeiter die AI-Tools selbstständig nutzen können – ohne Programmier-Kenntnisse.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                Welche Prozesse lassen sich automatisieren?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Typische Anwendungsfälle sind: Content-Erstellung, Datenanalyse, Lead-Qualifizierung, Performance-Reporting, Recherche, E-Mail-Automation, Dokumenten-Verarbeitung, Social Media Management, SEO-Optimierung und Customer Support. Wir analysieren Ihre Prozesse und identifizieren die größten Potenziale.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section id="seo-footer" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              AI-gestützte Arbeitsprozesse für Unternehmen im DACH-Raum
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir unterstützen Unternehmen in Deutschland, Österreich und der Schweiz bei AI-gestützten Workflows, 
              datenbasierter Prozessoptimierung, Content-Automation und Tool-Integration. Unser Fokus liegt auf 
              nachhaltiger Effizienz, klaren Strukturen und verantwortungsvoller AI-Einführung.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AiWorkflows;
