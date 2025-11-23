import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Search, FileText, Cog, TestTube, GitBranch, GraduationCap } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';

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
        title="AI-Workflows & Automatisierung – Strukturierte KI-Integration | ooliv"
        description="Strategische AI-Workflows für Unternehmen: Prozessautomatisierung, Team-Enablement und AI-Integration – strukturiert, sicher und messbar."
        canonicalUrl="https://ooliv.de/ai-workflows"
        keywords="AI Workflows, KI Automatisierung, Process Automation, AI Integration, AI Adoption, Team Enablement"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <PageHero
        title="AI-Workflows, die Prozesse wirklich effizienter machen."
        subtitle="Wir entwickeln und integrieren AI-gestützte Workflows, die interne Prozesse automatisieren, Teams entlasten und Entscheidungen verbessern — strukturiert, sicher und unternehmerisch sinnvoll."
        primaryCta={{ text: "AI-Analyse & Konzept sichern", link: "/kontakt" }}
        secondaryCta={{ text: "Beispiel-Workflows ansehen", link: "#workflow-beispiele" }}
      />

      {/* USPs Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <usp.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <p className="text-foreground font-medium">{usp.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Lösung Block */}
      <section className="py-20 bg-muted/30">
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
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere AI-Services für Unternehmen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "AI-Research & Datenanalyse",
                points: [
                  "Strukturierte LLM-Analysen",
                  "Wettbewerbs- & Markt-Insights",
                  "AI-gestützte Content-Recherche",
                  "Komplexe Themen verständlich aufbereitet"
                ]
              },
              {
                icon: FileText,
                title: "AI-gestützte Content-Workflows",
                points: [
                  "Blog-Automation",
                  "SEO-Cluster automatisch generieren",
                  "Social Media Content automatisieren",
                  "Qualitätssicherung durch menschliche Kontrolle"
                ]
              },
              {
                icon: Cog,
                title: "Prozessautomatisierung",
                points: [
                  "Wiederkehrende Aufgaben automatisieren",
                  "Lead-Qualifizierung",
                  "Reporting, Monitoring, Alerts",
                  "Internes Projekt-Routing"
                ]
              },
              {
                icon: TestTube,
                title: "Tool-Evaluierung & Auswahl",
                points: [
                  "Vergleich der Tools",
                  "Empfehlung passend zu Teams & Prozessen",
                  "Risiko- und Kostenbewertung",
                  "Integration in bestehende Systeme"
                ]
              },
              {
                icon: GitBranch,
                title: "AI-Integration in Team-Workflows",
                points: [
                  "CRM-Erweiterungen",
                  "CMS-Automationen",
                  "AI-Bots & interne Systeme",
                  "API-gestützte Prozesse"
                ]
              },
              {
                icon: GraduationCap,
                title: "Enablement & Schulung",
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
                className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
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

      {/* Workflow-Beispiele */}
      <section id="workflow-beispiele" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beispiele für AI-Workflows aus realen Projekten
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SEO-Workflow mit automatisierter Recherche",
                description: "Clustering & Briefings",
                result: "6 Stunden Arbeitszeit pro Woche gespart"
              },
              {
                title: "Automatisiertes Reporting & Performance-Monitoring",
                description: "KPI-Dashboard + Alerts",
                result: "Echtzeit-Übersicht für Abweichungen"
              },
              {
                title: "AI-gestützte Lead-Qualifizierung & Routing",
                description: "Automatische Priorisierung",
                result: "Leads automatisch verteilt und priorisiert"
              },
              {
                title: "Content-Automation für Blog und Social Media",
                description: "Multi-Channel Publishing",
                result: "30–60 Inhalte pro Monat"
              }
            ].map((example, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{example.title}</h3>
                <p className="text-muted-foreground mb-4">{example.description}</p>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">{example.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So führen wir AI systematisch ein.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Analyse & Reifegrad",
                description: "Prozesse, Tools, Risiken, Chancen."
              },
              {
                number: "02",
                title: "Konzept & Priorisierung",
                description: "Klare Roadmap mit Quick Wins & High-Impact-Workflows."
              },
              {
                number: "03",
                title: "Umsetzung & Integration",
                description: "Technische Verknüpfungen, Workflows, Automationen."
              },
              {
                number: "04",
                title: "Enablement & Skalierung",
                description: "Schulungen, Guidelines, laufende Optimierung."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-background p-8 rounded-lg border border-border h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uli Teaser */}
      <section className="py-20 bg-background">
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
                      <Brain className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
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
                  <Users className="w-20 h-20 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Bereit für AI-Workflows, die wirklich funktionieren?"
        subtitle="Lassen Sie uns Ihre Prozesse analysieren und strategische AI-Lösungen entwickeln"
        primaryCta="Kostenloses Konzept sichern"
        primaryCtaLink="/kontakt"
      />

      {/* SEO Footer Content */}
      <section className="py-16 bg-muted/30">
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
