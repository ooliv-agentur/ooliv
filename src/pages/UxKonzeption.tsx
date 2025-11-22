import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  LayoutGrid, Route, Frame, Layers, TrendingUp, TestTube2,
  AlertTriangle, Search, PenTool,
  Check, ChevronDown, ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';

const UxKonzeption = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "UX & Konzeption", url: "https://ooliv.de/ux-konzeption" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="UX-Konzeption & User Experience Optimierung – ooliv"
        description="UX-Konzeption, die verkauft: Informationsarchitektur, Wireframes, Prototyping und Conversion-Optimierung. ooliv – UX Agentur für digitale Klarheit."
        canonicalUrl="https://ooliv.de/ux-konzeption"
        keywords="UX Konzeption, UX Agentur, User Experience Optimierung, Wireframes Prototyping, Customer Journey Optimierung, UX Struktur, UX Analyse, UX Consulting, UX Funnel"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <PageHero
        title="UX-Konzeption, die verkauft."
        subtitle="Wir entwickeln klare Informationsarchitektur, strukturierte User Flows und Conversion-optimierte Prototypen — für Websites und digitale Systeme, die messbar besser funktionieren."
        primaryCta={{
          text: "Kostenloses Konzept sichern",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Beispiele ansehen",
          link: "#beispiele"
        }}
      />

      {/* Section 2: Was ist UX-Konzeption bei ooliv? */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
                Was ist UX-Konzeption bei ooliv?
              </h2>
              <div className="space-y-4 text-lg text-[#666666]">
                <p>UX-Konzept ≠ schönes Design</p>
                <p className="font-semibold text-[#0D0D0D]">
                  UX-Konzept = <span className="text-[#0BC3C3]">Struktur, Klarheit, Nutzerführung, Entscheidungslogik</span>
                </p>
                <p>
                  Conversion beginnt nicht im Design, sondern in der <span className="font-semibold text-[#0D0D0D]">Architektur</span>
                </p>
              </div>
              <p className="mt-8 text-xl font-semibold text-[#0D0D0D]">
                Gute UX ist unsichtbar — aber messbar.
              </p>
            </div>

            {/* Right Column - Mini Bullets */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: LayoutGrid, text: "Informationsarchitektur" },
                { icon: Route, text: "User Journeys" },
                { icon: Frame, text: "Wireframes" },
                { icon: Layers, text: "Prototyping" },
                { icon: TrendingUp, text: "Funnel-Design" },
                { icon: TestTube2, text: "Testing & Analyse" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#E5E5E5]"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#0BC3C3]" />
                  </div>
                  <p className="text-base font-medium text-[#0D0D0D]">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Die größten UX-Probleme in Unternehmen */}
      <section className="py-20 lg:py-32 bg-white">
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
              Die größten UX-Probleme in Unternehmen
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              "Unklare Navigation, zu viele Klicks",
              "Überladene Seitenstrukturen",
              "Schlechte oder fehlende Priorisierung",
              "Kaum Conversion-Fokus",
              "Wichtige Inhalte werden nicht gefunden",
              "Kein System: jeder Mitarbeiter denkt anders",
              "Nutzer verlieren Vertrauen oder brechen ab"
            ].map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 bg-[#F7F8FC] rounded-lg border border-[#E5E5E5] hover:shadow-md transition-shadow"
              >
                <AlertTriangle className="w-6 h-6 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-base text-[#0D0D0D]">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xl font-semibold text-[#0D0D0D]"
          >
            Wir verwandeln komplexe Inhalte in klare digitale Wege.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Unser UX-Prozess */}
      <section id="prozess" className="py-20 lg:py-32 bg-[#F7F8FC]">
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
              Unser UX-Prozess
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                number: "01",
                icon: Search,
                title: "Analyse & Nutzerverständnis",
                description: "Engpässe, Reibungen, Prioritäten."
              },
              {
                number: "02",
                icon: LayoutGrid,
                title: "Informationsarchitektur",
                description: "Struktur, Sitemap, Logik, Priorisierung."
              },
              {
                number: "03",
                icon: PenTool,
                title: "Wireframes & Prototypen",
                description: "Low-Fidelity → High-Fidelity → Test"
              },
              {
                number: "04",
                icon: TrendingUp,
                title: "Conversion-Optimierung",
                description: "Funnels, CTAs, Entscheidungspsychologie."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 border border-[#E5E5E5] h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0BC3C3] text-white rounded-full text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-[#0BC3C3] mb-4" />
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#666666]">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#0BC3C3]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={handleOpenLeadForm}
              size="lg"
              className="bg-[#0BC3C3] hover:bg-[#0BC3C3]/90 text-white px-8 py-6 text-base"
            >
              Kostenlose Analyse sichern
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Beispiele aus der Praxis (UX-Fokus) */}
      <section id="beispiele" className="py-20 lg:py-32 bg-white">
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
              Beispiele aus der Praxis
            </h2>
            <p className="text-xl text-[#666666]">
              UX-Konzeption mit messbarem Erfolg
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* KLAIBER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-[#F7F8FC] rounded-lg p-8 border border-[#E5E5E5] hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-white p-6 rounded-lg">
                  <img 
                    src={caseStudiesData.de[0].logo} 
                    alt="KLAIBER" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
                    KLAIBER – Steuerberatung
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "Struktur, Wireframes, Argumentationslogik",
                      "UX für Vertrauen & Differenzierung",
                      "Messbar bessere Inhaltsarchitektur"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                        <p className="text-base text-[#666666]">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="border-[#0BC3C3] text-[#0BC3C3] hover:bg-[#0BC3C3] hover:text-white"
                  >
                    <a href="/referenzen">
                      Case ansehen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* COBUS Industries */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F7F8FC] rounded-lg p-8 border border-[#E5E5E5] hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-white p-6 rounded-lg">
                  <img 
                    src={caseStudiesData.de[1].logo} 
                    alt="COBUS Industries" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
                    COBUS Industries – Flughafenbusse
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "UX für technische Zielgruppen",
                      "Komplexe Informationen klar strukturiert",
                      "Produkt- & Service-Navigation komplett neu"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                        <p className="text-base text-[#666666]">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="border-[#0BC3C3] text-[#0BC3C3] hover:bg-[#0BC3C3] hover:text-white"
                  >
                    <a href="/referenzen">
                      Case ansehen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* IconPro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F7F8FC] rounded-lg p-8 border border-[#E5E5E5] hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-white p-6 rounded-lg">
                  <img 
                    src={caseStudiesData.de[3].logo} 
                    alt="IconPro" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
                    IconPro – KI-Software
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "UX für Software & KI",
                      "Komplexe Use Cases klar visualisiert",
                      "Interaktive Module & Struktur"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                        <p className="text-base text-[#666666]">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="border-[#0BC3C3] text-[#0BC3C3] hover:bg-[#0BC3C3] hover:text-white"
                  >
                    <a href="/referenzen">
                      Case ansehen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: UX-Ergebnisse in Zahlen */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
              UX-Ergebnisse in Zahlen
            </h2>
            <p className="text-xl text-[#666666]">
              UX wirkt — und zwar messbar.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "+300 % mehr qualifizierte Anfragen",
              "–45 % Bounce Rate",
              "+40 % Conversionrate",
              "+160 % mehr Interaktionen"
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0BC3C3] text-white rounded-lg p-8 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold">
                  {metric}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7: Warum ooliv für UX? */}
      <section className="py-20 lg:py-32 bg-white">
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
              Warum ooliv für UX?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {[
              "15+ Jahre Erfahrung in UX & Funnel-Konzeption",
              "Starke Brücke zwischen Strategie und Design",
              "UX, die auf Geschäftsziele einzahlt",
              "Keine Junioren, keine Umwege",
              "Strukturiert, schnell, klar"
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 bg-[#F7F8FC] rounded-lg"
              >
                <Check className="w-7 h-7 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                <p className="text-lg text-[#0D0D0D] font-medium">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              onClick={handleOpenLeadForm}
              size="lg"
              className="bg-[#0BC3C3] hover:bg-[#0BC3C3]/90 text-white px-8 py-6 text-base"
            >
              Kostenloses Konzept sichern
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-20 lg:py-32 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
              Häufige Fragen zu UX-Konzeption
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-[#E5E5E5] px-6">
                <AccordionTrigger className="text-left font-bold text-[#0D0D0D] hover:no-underline">
                  Was ist der Unterschied zwischen UX-Konzept und Design?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base pt-4">
                  Das UX-Konzept definiert die Struktur, Informationsarchitektur und Nutzerführung – also <strong>wie</strong> Inhalte organisiert werden. Das Design visualisiert diese Struktur dann ästhetisch. UX kommt immer vor Design, weil Form der Funktion folgen sollte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border border-[#E5E5E5] px-6">
                <AccordionTrigger className="text-left font-bold text-[#0D0D0D] hover:no-underline">
                  Wie lange dauert eine UX-Konzeption?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base pt-4">
                  Je nach Umfang 2-6 Wochen. Eine Landingpage braucht 1-2 Wochen, eine komplexe Website mit mehreren User Journeys 4-6 Wochen. Wir arbeiten in Iterationen: Analyse → Wireframes → Feedback → Optimierung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border border-[#E5E5E5] px-6">
                <AccordionTrigger className="text-left font-bold text-[#0D0D0D] hover:no-underline">
                  Was wird im UX-Konzept konkret erstellt?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base pt-4">
                  Sitemap & Informationsarchitektur, User Journeys & Flows, Low- und High-Fidelity Wireframes, Prototypen (klickbar), Content-Struktur & Hierarchie, und Conversion-Strategie (CTAs, Funnels).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border border-[#E5E5E5] px-6">
                <AccordionTrigger className="text-left font-bold text-[#0D0D0D] hover:no-underline">
                  Brauche ich UX, wenn ich nur ein Redesign will?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base pt-4">
                  Ja, auf jeden Fall. Die meisten Redesigns scheitern, weil sie nur visuell sind, aber die strukturellen Probleme nicht lösen. Ein Redesign ohne UX-Konzept ist wie ein neuer Anstrich auf einem schiefen Haus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border border-[#E5E5E5] px-6">
                <AccordionTrigger className="text-left font-bold text-[#0D0D0D] hover:no-underline">
                  Wie funktioniert UX-Testing bei ooliv?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base pt-4">
                  Wir arbeiten mit Prototypen-Testing (Klickdummys), A/B-Testing nach Launch, und nutzen Daten aus Google Analytics, Hotjar oder ähnlichen Tools. Wichtig: Testing ist nicht nur am Ende, sondern während der gesamten Konzeptphase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <CTA
        title="Bereit für bessere Nutzerführung?"
        subtitle="Lassen Sie uns besprechen, wie wir Ihre Customer Journey und digitale Struktur optimieren können."
        primaryCta="Projekt starten"
        primaryCtaLink="/"
      />
    </PageLayout>
  );
};

export default UxKonzeption;
