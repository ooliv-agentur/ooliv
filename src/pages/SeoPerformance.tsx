import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Zap, Search, FileText, LayoutGrid, TrendingUp, 
  BarChart3, Target, CheckCircle2, Clock, ArrowRight,
  AlertTriangle, Gauge, Link as LinkIcon, FileSearch, PenTool
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const SeoPerformance = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "SEO & Performance", url: "https://ooliv.de/seo-performance" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  // Get specific cases for SEO page
  const seoRelatedCases = [
    caseStudiesData.de[3], // IconPro
    caseStudiesData.de[4], // SPEZ AG
    caseStudiesData.de[0]  // KLAIBER
  ].filter(Boolean);

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="SEO Agentur & Technische SEO | ooliv Mainz"
        description="Technische SEO, Content-Strategie, IA & AI-gestützte Analysen. Senior-Level SEO mit strategischer Führung. Nachhaltige Rankings & messbare Performance."
        canonicalUrl="https://ooliv.de/seo-performance"
        keywords="seo agentur, seo & performance, technische seo, seo optimierung, seo für unternehmen, sichtbarkeit steigern, pagespeed optimierung, core web vitals optimierung, content optimierung seo, seo analyse, seo audit, crawling & indexing, seo performance monitoring, seo für b2b, conversion optimierung, keyword-recherche, content-struktur, interne verlinkung, backlink-qualität, search intent, seo ux kombination, technische performance"
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ooliv.de/seo-performance",
            "name": "ooliv SEO Agentur",
            "description": "Technische SEO, Content-Optimierung, Core Web Vitals & Performance für Unternehmen",
            "url": "https://ooliv.de/seo-performance",
            "serviceType": "SEO Agency"
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO & Performance Optimization",
            "provider": {
              "@type": "Organization",
              "name": "ooliv"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was kostet SEO-Optimierung?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Kosten für professionelle SEO-Optimierung hängen vom Umfang ab: Ein einmaliger SEO-Audit startet bei €2.500, laufende SEO-Betreuung ab €1.500/Monat. Wir erstellen Ihnen ein individuelles Angebot basierend auf Ihrer Website und Ihren Zielen."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert es, bis SEO Ergebnisse zeigt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Erste Verbesserungen bei Core Web Vitals und technischer Performance sehen Sie oft nach 4-8 Wochen. Signifikante Ranking-Verbesserungen benötigen in der Regel 3-6 Monate, da Google Zeit braucht, um Änderungen zu crawlen und zu bewerten."
                }
              },
              {
                "@type": "Question",
                "name": "Was ist der Unterschied zwischen technischer SEO und Content-SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Technische SEO optimiert die Infrastruktur Ihrer Website (Core Web Vitals, Crawlbarkeit, Schema.org, Seitenstruktur). Content-SEO fokussiert sich auf Inhalte, Keywords, Search Intent und Content-Strategien. Beide Bereiche müssen zusammenarbeiten für nachhaltigen Erfolg."
                }
              },
              {
                "@type": "Question",
                "name": "Was sind Core Web Vitals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Core Web Vitals sind Google's Metriken für Nutzererfahrung: LCP (Largest Contentful Paint) für Ladegeschwindigkeit, FID (First Input Delay) für Interaktivität, und CLS (Cumulative Layout Shift) für visuelle Stabilität. Schlechte Werte können Rankings negativ beeinflussen."
                }
              },
              {
                "@type": "Question",
                "name": "Welche SEO-Tools nutzen Sie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir arbeiten mit professionellen Tools wie Ahrefs, Semrush, Google Search Console, Screaming Frog für Analysen, Google PageSpeed Insights und Lighthouse für Performance, sowie Google Analytics 4 und custom Dashboards für Monitoring und Reporting."
                }
              },
              {
                "@type": "Question",
                "name": "Ist lokale SEO wichtig für mein Unternehmen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wenn Sie Kunden in einer bestimmten Region ansprechen, ist lokale SEO entscheidend. Das umfasst Google My Business Optimierung, lokale Keywords, standortbasierte Landing Pages und strukturierte Daten für lokale Unternehmen."
                }
              },
              {
                "@type": "Question",
                "name": "Wie messen Sie SEO-Erfolg?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir tracken organischen Traffic, Keyword-Rankings, Core Web Vitals, Conversion-Raten, Sichtbarkeitsindex und Business-KPIs wie generierte Leads. Monatliche Reports zeigen Entwicklung und ROI transparent auf."
                }
              }
            ]
          }
        ]}
      />

      {/* Hero Section */}
      <section id="hero">
        <PageHero
          title="SEO Agentur für nachhaltige Sichtbarkeit & technische Performance"
          subtitle="SEO & technische Performance unter Senior-Level-Leitung — kombiniert mit strukturierter UX, Content-Strategie und AI-gestützten Analysen für messbare Ergebnisse."
        primaryCta={{
          text: "Kostenloses Konzept sichern",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "SEO-Analyse anfordern",
          link: "#analyse"
        }}
        />
      </section>

      {/* USPs Section */}
      <section id="usps" className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Gauge className="w-6 h-6 text-[#32B2AB] flex-shrink-0 mt-1" aria-label="Technisches SEO + strukturierte Inhalte" />
              <div>
                <h3 className="font-semibold text-[#0B0B0B] text-sm">Saubere Architektur, klare Informationsstruktur und SEO-Fundament.</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Target className="w-6 h-6 text-[#32B2AB] flex-shrink-0 mt-1" aria-label="UX- und Conversion-fokussiert" />
              <div>
                <h3 className="font-semibold text-[#0B0B0B] text-sm">Suchlogik, Nutzerführung und Funnel-Strukturen integriert.</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#32B2AB] flex-shrink-0 mt-1" aria-label="AI-gestützte Recherchen & Audits" />
              <div>
                <h3 className="font-semibold text-[#0B0B0B] text-sm">Intent-Analysen, Keyword-Cluster & technische Insights.</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <BarChart3 className="w-6 h-6 text-[#32B2AB] flex-shrink-0 mt-1" aria-label="Messbare Verbesserungen statt Keyword-Versprechen" />
              <div>
                <h3 className="font-semibold text-[#0B0B0B] text-sm">KPIs, Ranking-Performance & transparente Fortschritte.</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION — Pain Points */}
      <section id="pain-points" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Warum SEO & Performance entscheidend sind
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Search,
                title: "Keine Sichtbarkeit trotz guter Inhalte",
                description: "Inhalte ohne strukturiertes Intent-Matching bleiben unsichtbar."
              },
              {
                icon: Gauge,
                title: "Langsame Website / schlechte Core Web Vitals",
                description: "Ladezeiten & technische Fehler bremsen Nutzer und Rankings."
              },
              {
                icon: AlertTriangle,
                title: "Technische Fehler behindern Ranking",
                description: "Crawling, interne Linklogik und Struktur verhindern Indexierung."
              },
              {
                icon: Target,
                title: "Keine klare SEO-Strategie oder Priorisierung",
                description: "Ohne Funnel-Logik und Prioritätensystem kein nachhaltiges Wachstum."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F7F8FC] rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 text-[#0BC3C3] mb-4" aria-label={item.title} />
                <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem → Lösung Section */}
      <section id="problem-solution" className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-8 text-center">
              SEO Optimierung: Struktur, Content & technische Exzellenz
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" aria-label="SEO Problem" />
                <p className="text-[#666666]">Viele Seiten haben Inhalte, aber keine Suchlogik</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" aria-label="SEO Problem" />
                <p className="text-[#666666]">Falsche Struktur verhindert Sichtbarkeit & indexierbare Inhalte.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" aria-label="SEO Problem" />
                <p className="text-[#666666]">Technische Fehler blockieren Crawling & Ranking.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" aria-label="SEO Problem" />
                <p className="text-[#666666]">Fehlende Priorisierung führt zu falschen Maßnahmen.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" aria-label="SEO Problem" />
                <p className="text-[#666666]">Ohne Tracking fehlt die Basis für datengetriebene SEO.</p>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              className="bg-[#0BC3C3] text-white p-8 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Die Lösung</h3>
              <p className="text-lg">
                Wir verbinden technische SEO, UX-Struktur, Content-Strategie und AI-Research zu einem SEO-System, das nachhaltig Sichtbarkeit und Leads erzeugt.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leistungs-Bereiche Section */}
      <section id="leistungen" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              Unsere SEO-Leistungen im Überblick
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Card 1: Technisches SEO */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Gauge className="w-7 h-7 text-[#0BC3C3]" aria-label="Technische SEO & Core Web Vitals Optimierung" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Technische SEO & Core Web Vitals Optimierung</h3>
              <p className="text-xs text-[#0BC3C3] font-semibold mb-4">
                SEO Audit • Crawling & Indexing • Pagespeed Optimierung
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Technisches SEO Audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Crawling, Indexing & Strukturfehler</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Core Web Vitals Optimierung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Saubere Schema- & Redirect-Architektur</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Content & Suchlogik */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#0BC3C3]" aria-label="Content & Onpage Optimierung" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Content & Onpage Optimierung</h3>
              <p className="text-xs text-[#0BC3C3] font-semibold mb-4">
                Keyword-Recherche • Search Intent • Content-Struktur
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Intent-basierte Keyword-Cluster</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Themencluster & Content-Blueprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">AI-gestützte Briefings & Recherchen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Optimierung bestehender Inhalte</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Informationsarchitektur & UX für SEO */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <LayoutGrid className="w-7 h-7 text-[#0BC3C3]" aria-label="Informationsarchitektur & UX für SEO" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Informationsarchitektur & UX für SEO</h3>
              <p className="text-xs text-[#0BC3C3] font-semibold mb-4">
                Interne Verlinkung • URL-Struktur • Conversion-Optimierung
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">URL-Design & logische Seitenstruktur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Interne Verlinkung & Funnel-Routen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Category-Logik & Navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">SEO-taugliche Funnel-Architektur</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 4: Performance- & Ranking-Optimierung */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#0BC3C3]" aria-label="Performance Monitoring & Reporting" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Performance Monitoring & Reporting</h3>
              <p className="text-xs text-[#0BC3C3] font-semibold mb-4">
                SEO Performance Monitoring • KPI-Dashboards • Ranking-Analysen
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">KPI-Dashboards & Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Ranking-Analysen & Content-Gaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Monatliche SEO-Audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Conversion-nahe SEO-Optimierung</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button 
              size="lg"
              onClick={handleOpenLeadForm}
              className="bg-[#0BC3C3] hover:bg-[#0BC3C3]/90 text-white text-lg px-8 py-6"
            >
              Kostenlose SEO-Analyse buchen
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Prozess Section */}
      <section id="prozess" className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              So optimieren wir Ihre SEO & Website-Performance
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-white p-8 rounded-lg border-2 border-[#0BC3C3] h-full">
                <div className="bg-[#0BC3C3] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <div className="mb-4">
                  <FileSearch className="w-8 h-8 text-[#0BC3C3]" aria-label="SEO Audit & technische Analyse" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">SEO Audit & technische Analyse</h3>
                <p className="text-[#666666]">
                  Technische Analyse, Konkurrenzvergleich, Intent-Recherche.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-[#0BC3C3]" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-white p-8 rounded-lg border-2 border-[#0BC3C3] h-full">
                <div className="bg-[#0BC3C3] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <div className="mb-4">
                  <LayoutGrid className="w-8 h-8 text-[#0BC3C3]" aria-label="Technisches Setup & Content-Optimierung" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Technisches Setup & Content-Optimierung</h3>
                <p className="text-[#666666]">
                  Informationsarchitektur, Themencluster, Priorisierung.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-[#0BC3C3]" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-white p-8 rounded-lg border-2 border-[#0BC3C3] h-full">
                <div className="bg-[#0BC3C3] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <div className="mb-4">
                  <Zap className="w-8 h-8 text-[#0BC3C3]" aria-label="Optimierung & Implementierung" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Optimierung & Implementierung</h3>
                <p className="text-[#666666]">
                  SEO-Technik, Content-Blueprints, interne Verlinkung.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-[#0BC3C3]" />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white p-8 rounded-lg border-2 border-[#0BC3C3] h-full">
                <div className="bg-[#0BC3C3] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  4
                </div>
                <div className="mb-4">
                  <BarChart3 className="w-8 h-8 text-[#0BC3C3]" aria-label="Performance-Checks & kontinuierliches Monitoring" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Performance-Checks & kontinuierliches Monitoring</h3>
                <p className="text-[#666666]">
                  Rankings, KPIs, Funnel-Ergebnisse, datengetriebene Updates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Teaser Section */}
      <section id="case-studies" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              SEO-Ergebnisse unserer Kunden
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                ...seoRelatedCases[0],
                seoTag: "SEO Softwareunternehmen"
              },
              {
                ...seoRelatedCases[1],
                seoTag: "Lokale SEO Optimierung"
              },
              {
                ...seoRelatedCases[2],
                seoTag: "SEO Steuerberatung"
              }
            ].filter(Boolean).map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                <span className="inline-block px-3 py-1 bg-[#0BC3C3]/10 text-[#0BC3C3] text-xs font-medium rounded-full mb-4">
                  {caseStudy.seoTag}
                </span>
                <div className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center h-24">
                  <img 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.client} – ${caseStudy.seoTag} von ooliv`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">
                  {caseStudy.client}
                </h3>
                <p className="text-sm text-[#666666] mb-4">{caseStudy.industry}</p>
                <div className="bg-[#0BC3C3] text-white px-4 py-2 rounded-lg inline-block mb-6 font-bold">
                  {caseStudy.keyMetric}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-[#0BC3C3] text-[#0BC3C3] hover:bg-[#0BC3C3] hover:text-white"
                  asChild
                >
                  <a href="/referenzen">Case ansehen</a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION — Tools & Technologien */}
      <section id="tools" className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Tools & Technologien für professionelle SEO
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Wir nutzen moderne SEO-Tools, AI-gestützte Analysen und Performance-Monitoring für messbare Ergebnisse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO-Analyse & Research",
                tools: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog"]
              },
              {
                icon: Gauge,
                title: "Performance & Core Web Vitals",
                tools: ["Google PageSpeed Insights", "GTmetrix", "Lighthouse", "WebPageTest"]
              },
              {
                icon: BarChart3,
                title: "Monitoring & Reporting",
                tools: ["Google Analytics 4", "Looker Studio", "Custom Dashboards", "Rank Tracking"]
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#0BC3C3]/10 text-[#0BC3C3] rounded-lg mb-6">
                  <block.icon className="w-6 h-6" aria-label={block.title} />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0BC3C3] flex-shrink-0" />
                      <span className="text-sm text-[#666666]">{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uli-Teaser Section */}
      <section id="team" className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-white p-8 lg:p-12 rounded-lg border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6 text-center">
              SEO & Performance von einem, der Struktur denkt.
            </h2>
            <p className="text-lg text-[#666666] mb-8 text-center max-w-3xl mx-auto">
              Ich verbinde Strategie, UX, Technik und AI-gestützte Recherche zu SEO-Systemen, die nicht nur ranken — sondern verkaufen. Jedes Projekt persönlich geführt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
                <span className="text-[#666666]">200+ realisierte Digitalprojekte</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
                <span className="text-[#666666]">SEO mit UX- & Funnel-Fokus</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
                <span className="text-[#666666]">AI-gestützte Analysen & Prozesse</span>
              </div>
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-[#0BC3C3] text-[#0BC3C3] hover:bg-[#0BC3C3] hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="/ueber">Uli kennenlernen</a>
              </Button>
            </div>
            
            <motion.p
              {...fadeInUp}
              className="text-center text-lg text-[#666666] mt-8 max-w-3xl mx-auto"
            >
              Uli führt Strategie, SEO-Architektur & Priorisierung; das Hybridteam unterstützt in Content, UX, Development und Performance-Monitoring. Weitere Services: 
              <a href="/digitale-transformation-strategie" className="text-[#0BC3C3] hover:underline ml-2">Digitale Transformation</a>, 
              <a href="/ux-konzeption" className="text-[#0BC3C3] hover:underline ml-2">UX-Konzeption</a>, 
              <a href="/webdesign-entwicklung" className="text-[#0BC3C3] hover:underline ml-2">Webdesign</a>, 
              <a href="/ai-workflows" className="text-[#0BC3C3] hover:underline ml-2">AI-Workflows</a>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <CTA
          title="Bereit für mehr Sichtbarkeit — und mehr Leads?"
          subtitle="SEO für Unternehmen – nachhaltige Rankings, bessere Performance. Starten Sie jetzt mit einem kostenlosen SEO-Audit."
          primaryCta="Kostenloses SEO-Audit anfordern"
          primaryCtaLink="#"
        />
      </section>

      {/* NEW SECTION — FAQ */}
      <section id="faq" className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              FAQ: SEO & Performance
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Was kostet SEO-Optimierung?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Die Kosten für professionelle SEO-Optimierung hängen vom Umfang ab: Ein einmaliger SEO-Audit startet bei €2.500, laufende SEO-Betreuung ab €1.500/Monat. Wir erstellen Ihnen ein individuelles Angebot basierend auf Ihrer Website und Ihren Zielen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Wie lange dauert es, bis SEO Ergebnisse zeigt?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Erste Verbesserungen bei Core Web Vitals und technischer Performance sehen Sie oft nach 4-8 Wochen. Signifikante Ranking-Verbesserungen benötigen in der Regel 3-6 Monate, da Google Zeit braucht, um Änderungen zu crawlen und zu bewerten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Was ist der Unterschied zwischen technischer SEO und Content-SEO?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Technische SEO optimiert die Infrastruktur Ihrer Website (Core Web Vitals, Crawlbarkeit, Schema.org, Seitenstruktur). Content-SEO fokussiert sich auf Inhalte, Keywords, Search Intent und Content-Strategien. Beide Bereiche müssen zusammenarbeiten für nachhaltigen Erfolg.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Was sind Core Web Vitals?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Core Web Vitals sind Google's Metriken für Nutzererfahrung: LCP (Largest Contentful Paint) für Ladegeschwindigkeit, FID (First Input Delay) für Interaktivität, und CLS (Cumulative Layout Shift) für visuelle Stabilität. Schlechte Werte können Rankings negativ beeinflussen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Welche SEO-Tools nutzen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Wir arbeiten mit professionellen Tools wie Ahrefs, Semrush, Google Search Console, Screaming Frog für Analysen, Google PageSpeed Insights und Lighthouse für Performance, sowie Google Analytics 4 und custom Dashboards für Monitoring und Reporting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Ist lokale SEO wichtig für mein Unternehmen?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Wenn Sie Kunden in einer bestimmten Region ansprechen, ist lokale SEO entscheidend. Das umfasst Google My Business Optimierung, lokale Keywords, standortbasierte Landing Pages und strukturierte Daten für lokale Unternehmen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#0D0D0D] hover:no-underline">
                Wie messen Sie SEO-Erfolg?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#666666]">
                Wir tracken organischen Traffic, Keyword-Rankings, Core Web Vitals, Conversion-Raten, Sichtbarkeitsindex und Business-KPIs wie generierte Leads. Monatliche Reports zeigen Entwicklung und ROI transparent auf.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEO Footer Section */}
      <section id="seo-footer" className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-4">
              SEO & Performance für Unternehmen im DACH-Raum
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed">
              Wir unterstützen Unternehmen in Deutschland, Österreich und der Schweiz bei technischer Suchmaschinenoptimierung, strategischer Content-Entwicklung, Performance-Optimierung und Informationsarchitektur. Unser Fokus liegt auf nachhaltiger Sichtbarkeit und einer klaren Suchlogik, die Nutzer leitet und Leads generiert.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SeoPerformance;