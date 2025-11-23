import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Award, Target, Zap, User,
  AlertTriangle, Navigation, Clock, TrendingDown,
  Layout, Code, Gauge, Boxes,
  Search, PenTool, Palette, Rocket,
  Check, ArrowRight, ExternalLink
} from 'lucide-react';
import { caseStudiesData } from '@/components/CaseStudiesSection';

const WebdesignEntwicklung = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign & Entwicklung", url: "https://ooliv.de/webdesign-entwicklung" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Webdesign & Entwicklung, das verkauft | ooliv"
        description="Performante Websites mit UX-Fokus, strategisch aufgebaut für echte Conversion. Webdesign & WordPress-Entwicklung von ooliv – Digital Strategy Lead."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="Webdesign, Webentwicklung, WordPress Entwicklung, UX Design, Performance Optimierung, Website erstellen, Responsive Design, Modern Web Development"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <PageHero
        title="Webdesign & Entwicklung, das verkauft."
        subtitle="Wir entwickeln performante Websites, die strategisch aufgebaut sind, klar strukturieren, Nutzer leiten und echte Conversion erzeugen — keine Deko, sondern digitale Wirkung."
        primaryCta={{
          text: 'Kostenloses Konzept sichern',
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: 'Arbeitsweise ansehen',
          link: "#prozess"
        }}
      />

      {/* USPs Under Hero */}
      <section className="py-12 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            {...staggerContainer}
          >
            {[
              { icon: Award, text: "200+ Projekte seit 2008" },
              { icon: Target, text: "UX-geführt, KPI-optimiert" },
              { icon: Zap, text: "Schnelle Ladezeiten & technische Exzellenz" },
              { icon: User, text: "Persönlich geführt von Uli Schönleber" }
            ].map((usp, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                {...fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0BC3C3]/10 rounded-lg flex items-center justify-center">
                  <usp.icon className="w-6 h-6 text-[#0BC3C3]" />
                </div>
                <p className="text-sm font-medium text-[#0D0D0D]">{usp.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem → Lösung Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Webdesign ist kein Design-Problem. Es ist ein Struktur-, UX- und Performance-Problem.
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              Viele Websites sehen gut aus, funktionieren aber nicht. Wir entwickeln Websites, die klar führen, überzeugen und konvertieren — basierend auf Strategie, User Experience und technischer Exzellenz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            {...staggerContainer}
          >
            {[
              { icon: Navigation, title: "Unklare Struktur & geringe Conversion", description: "Nutzer finden nicht, was sie suchen und verlassen die Seite." },
              { icon: AlertTriangle, title: "Komplexe Inhalte ohne klare Führung", description: "Zu viel Information ohne Priorisierung überfordert Besucher." },
              { icon: Clock, title: "Langsame Ladezeiten & technische Schwächen", description: "Performance-Probleme schaden Rankings und User Experience." },
              { icon: TrendingDown, title: "Fehlende Differenzierung im Wettbewerb", description: "Austauschbare Websites ohne klare Positionierung." }
            ].map((problem, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#F7F8FC] rounded-xl border border-gray-100 hover:shadow-md transition-all"
                {...fadeInUp}
              >
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">{problem.title}</h3>
                <p className="text-[#666666]">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Was wir für Sie entwickeln
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            {...staggerContainer}
          >
            {[
              {
                icon: Layout,
                title: "UX-geführtes Interface-Design",
                features: [
                  "Mobile-first UI",
                  "Klar strukturierte Seitenarchitektur",
                  "Conversion-optimierte Layouts",
                  "Markenintegration ohne Überladen"
                ]
              },
              {
                icon: Code,
                title: "Moderne WordPress-Entwicklung",
                features: [
                  "Maßgeschneiderte Themes",
                  "Kein Baukasten, kein Overhead",
                  "Schnelle Ladezeiten",
                  "Saubere Struktur, perfekt wartbar"
                ]
              },
              {
                icon: Gauge,
                title: "Performance & Sichtbarkeit",
                features: [
                  "Core Web Vitals optimiert",
                  "SEO-Grundstruktur integriert",
                  "Technische Sauberkeit (Schema, Redirects, strukturierte Daten)",
                  "Tracking & Analytics vorbereitet"
                ]
              },
              {
                icon: Boxes,
                title: "Skalierbare Design- & Content-Systeme",
                features: [
                  "Wiederverwendbare Module",
                  "Atomic Design",
                  "Konsistente Bild- & Textwelten",
                  "Einfach erweiterbar für künftiges Wachstum"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all"
                {...fadeInUp}
              >
                <div className="w-16 h-16 bg-[#0BC3C3] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#666666]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" {...fadeInUp}>
            <Button 
              size="lg" 
              className="bg-[#0BC3C3] text-white hover:bg-[#0BC3C3]/90"
              onClick={handleOpenLeadForm}
            >
              Kostenlose Strategie-Session buchen
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Prozess Section */}
      <section id="prozess" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              So entsteht Ihre Website — klar, strukturiert und effizient
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...staggerContainer}
          >
            {[
              {
                number: "01",
                icon: Search,
                title: "Analyse & Positionierung",
                description: "Wir verstehen Marke, Zielgruppen und Conversion-Ziele."
              },
              {
                number: "02",
                icon: PenTool,
                title: "UX-Konzept & Wireframes",
                description: "Wir entwickeln die Struktur, Nutzerführung und Interaktionslogik."
              },
              {
                number: "03",
                icon: Palette,
                title: "Design & Entwicklung",
                description: "UI-Design + technische Umsetzung, immer mobile-first & performance-orientiert."
              },
              {
                number: "04",
                icon: Rocket,
                title: "Go-Live & Optimierung",
                description: "Launch, Tracking, technische Checks und stetige Verbesserung."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                {...fadeInUp}
              >
                <div className="relative p-6 bg-[#F7F8FC] rounded-xl h-full">
                  <div className="w-14 h-14 bg-[#0BC3C3] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-[#0BC3C3] mb-4" />
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">{step.title}</h3>
                  <p className="text-[#666666]">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#0BC3C3]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Websites, die Wirkung erzeugen.
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            {...staggerContainer}
          >
            {[0, 1, 3].map((caseIndex) => {
              const caseStudy = caseStudiesData.de[caseIndex];
              return (
                <motion.div
                  key={caseIndex}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-8"
                  {...fadeInUp}
                >
                  <div className="flex items-center justify-center h-20 mb-6">
                    <img 
                      src={caseStudy.logo} 
                      alt={caseStudy.client} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-[#0BC3C3] font-semibold mb-2">{caseStudy.industry}</p>
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">{caseStudy.client}</h3>
                  <div className="bg-[#F7F8FC] rounded-lg p-4 mb-6">
                    <p className="text-2xl font-bold text-[#0BC3C3]">{caseStudy.keyMetric}</p>
                    <p className="text-sm text-[#666666] mt-1">Key Result</p>
                  </div>
                  <a 
                    href={caseStudy.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0BC3C3] hover:text-[#0BC3C3]/80 font-medium"
                  >
                    Case ansehen
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Uli Teaser */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="bg-[#F7F8FC] rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4">
                Ihr Ansprechpartner: Uli Schönleber
              </h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                Seit 2008 entwickle ich Websites, die klar strukturieren, Nutzer führen und Ergebnisse liefern. Keine Junioren, keine Übergaben — jedes Projekt persönlich geführt.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "200+ Projekte für Mittelstand & Marktführer",
                  "Tiefes Verständnis für Strategie, UX & AI",
                  "Direkte Zusammenarbeit auf Geschäftsführungsniveau"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0D0D0D] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a href="/ueber-uns">
                  Uli kennenlernen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Bereit für eine Website, die verkauft?"
        subtitle="Lassen Sie uns gemeinsam herausfinden, wie Ihre Website klarer, schneller und wirkungsvoller werden kann."
        primaryCta="Kostenloses Konzept sichern"
        primaryCtaLink="/"
      />

      {/* SEO Footer Content */}
      <section className="py-12 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-[#0D0D0D] mb-4">
              Webdesign & Webentwicklung für Unternehmen im DACH-Raum
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Wir entwickeln Websites für Unternehmen in Deutschland, Österreich und der Schweiz, die mehr als nur Design wollen: klare Nutzerführung, technische Performance, SEO-Grundlagen und skalierbare Strukturen. Als Digitalagentur in Mainz begleiten wir Mittelstand, B2B-Firmen und Marken bei Webdesign, UX-Konzeption und WordPress-Entwicklung.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebdesignEntwicklung;
