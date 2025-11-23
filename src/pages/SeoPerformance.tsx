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
  AlertTriangle, Gauge, Link as LinkIcon, FileSearch
} from 'lucide-react';
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
        title="SEO & Performance Optimierung – Sichtbarkeit, die wirkt | ooliv"
        description="Strategische SEO & Performance-Optimierung: Technisches SEO, Content-Strategie und UX-fokussierte Suchmaschinenoptimierung für nachhaltige Sichtbarkeit und Leads."
        canonicalUrl="https://ooliv.de/seo-performance"
        keywords="SEO Optimierung, Performance Optimierung, Technisches SEO, Content Strategie, Suchmaschinenoptimierung, SEO Agentur, Core Web Vitals, SEO Consulting"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <PageHero
        title="SEO & Performance, das wirkt."
        subtitle="Wir optimieren Struktur, Inhalte und Technik Ihrer Website so, dass Google sie versteht, Nutzer finden und Leads entstehen — datengetrieben, klar und ohne SEO-Mythen."
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

      {/* USPs Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Gauge className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-sm">Technisches SEO + strukturierte Inhalte</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Target className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-sm">UX- und Conversion-fokussiert</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-sm">AI-gestützte Recherchen & Audits</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3">
              <BarChart3 className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-sm">Messbare Verbesserungen statt Keyword-Versprechen</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem → Lösung Section */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-8 text-center">
              SEO ist kein Keyword-Spiel.<br />
              Es ist Struktur, Content und technische Exzellenz.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-[#666666]">Viele Seiten haben Inhalte, aber keine Suchlogik</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-[#666666]">Falsche Struktur verhindert Sichtbarkeit</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-[#666666]">Technische Fehler blockieren Ranking</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-[#666666]">Keine klare Content-Priorisierung</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-[#666666]">Kein Tracking, keine Datenbasis</p>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              className="bg-[#0BC3C3] text-white p-8 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Die Lösung</h3>
              <p className="text-lg">
                Wir verbinden technisches SEO, UX, Content-Strategie und AI-gestützte Recherche zu einem System, das Sichtbarkeit und Leads liefert.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leistungs-Bereiche Section */}
      <section id="analyse" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              Unsere SEO & Performance Leistungen
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
                <Gauge className="w-7 h-7 text-[#0BC3C3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Technisches SEO</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Geschwindigkeit & Serverqualität</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Saubere Struktur / Schema / Redirects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Technische Fehleranalyse</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Content & Suchlogik */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#0BC3C3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Content & Suchlogik</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Themencluster & Content-Strategien</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">AI-gestützte Keyword- & Intent-Recherche</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Content-Blueprints</span>
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
                <LayoutGrid className="w-7 h-7 text-[#0BC3C3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Informationsarchitektur & UX für SEO</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Logische Seitenstruktur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Navigation & Kategorien</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">URL-Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Interne Verlinkung & Funnel-Routen</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 4: Performance- & Ranking-Optimierung */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg"
            >
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#0BC3C3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Performance- & Ranking-Optimierung</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Tracking & KPI-Dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Ranking-Verbesserung & Content-Gaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Monitoring & monatliche Audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">Conversionnahe Optimierung</span>
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
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              So entsteht SEO, das wirklich funktioniert.
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
                  <FileSearch className="w-8 h-8 text-[#0BC3C3]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">SEO & Performance Audit</h3>
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
                  <LayoutGrid className="w-8 h-8 text-[#0BC3C3]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Struktur & Content-System</h3>
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
                  <Zap className="w-8 h-8 text-[#0BC3C3]" />
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
                  <BarChart3 className="w-8 h-8 text-[#0BC3C3]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Monitoring & Verbesserungen</h3>
                <p className="text-[#666666]">
                  Rankings, KPIs, Funnel-Ergebnisse, datengetriebene Updates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Teaser Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              Sichtbarkeit ist messbar.
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {seoRelatedCases.map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F7F8FC] p-8 rounded-lg border border-gray-200 hover:border-[#0BC3C3] transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center h-24">
                  <img 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.client} Logo`}
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

      {/* Uli-Teaser Section */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Bereit für mehr Sichtbarkeit — und mehr Leads?"
        subtitle="Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Sichtbarkeit und Conversion-Rate steigern können."
        primaryCta="Kostenloses Konzept sichern"
        primaryCtaLink="/"
      />

      {/* SEO Footer Section */}
      <section className="py-12 bg-white border-t border-gray-100">
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