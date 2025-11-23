import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, LayoutGrid, Frame, Code, TrendingUp, Zap, Shield,
  CheckCircle2, ArrowRight, Layers, PenTool, Workflow, Search,
  Users, Award, BarChart3, Brain
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudiesData } from '@/components/CaseStudiesSection';
import { typographyStyles } from '@/styles/typography';

const WebdesignEntwicklung = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign & Entwicklung", url: "https://ooliv.de/webdesign-entwicklung" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Webdesign Agentur & WordPress Entwicklung für Unternehmen | ooliv"
        description="Professionelles Webdesign & WordPress Entwicklung: UX/UI Design, moderne Webentwicklung, technische SEO, Performance-Optimierung. 200+ Projekte. Jetzt Projekt starten."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="webdesign agentur, webdesign & entwicklung, wordpress agentur, webentwicklung agentur, wordpress entwicklung, webdesign für unternehmen, b2b webdesign, professionelle website erstellen, responsive webdesign, performance optimierung website, technische seo, headless cms, corporate webdesign, ux ui design, custom wordpress themes"
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "WebDesignService",
            "name": "Webdesign & WordPress Entwicklung",
            "provider": {
              "@type": "Organization",
              "name": "ooliv",
              "url": "https://ooliv.de"
            }
          }
        ]}
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

      {/* Trust Bullets */}
      <Section background="light" spacing="small">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, text: "100+ Projekte" },
              { icon: Users, text: "Senior-Strategie statt Junioren" },
              { icon: Target, text: "UX-first & SEO-ready" },
              { icon: Zap, text: "Performance-optimierte Umsetzung" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <item.icon className="w-5 h-5 text-[#0BC3C3] flex-shrink-0" />
                <p className="text-sm font-medium text-[#0A0A0A]">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pain Points */}
      <Section id="pain-points" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Warum modernes Webdesign entscheidend ist
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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

      {/* Services */}
      <Section id="leistungen" background="light" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Unsere Leistungen: Webdesign & Entwicklung für Unternehmen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg">
                    <block.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">
                      {block.title}
                    </h3>
                    <p className="text-xs text-[#0BC3C3] font-semibold">
                      {block.keywords}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                      <p className="text-base text-[#555555]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section id="warum-webdesign" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Professionelles Webdesign: Struktur, Performance & Conversion
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xl font-semibold text-[#0A0A0A]"
          >
            Wir entwickeln Websites, die funktionieren — vom Konzept bis zur Entwicklung.
          </motion.p>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section id="beispiele" background="light" spacing="large">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              Webdesign-Projekte in der Praxis
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesData.de.slice(0, 3).map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{study.client}</h3>
                <p className="text-sm text-[#555555] mb-4">{study.shortDescription}</p>
                <Link to="/referenzen">
                  <Button variant="secondary" size="sm">
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" spacing="large">
        <Container size="narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
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
                Eine professionelle Business-Website beginnt ab 8.000 €. Umfangreiche Corporate Websites oder E-Commerce-Projekte starten ab 15.000 €. Der Preis hängt von Funktionsumfang, Design-Komplexität und Content-Menge ab.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie lange dauert ein Website-Projekt?</AccordionTrigger>
              <AccordionContent>
                Ein typisches Website-Projekt dauert 8-16 Wochen vom Kickoff bis zum Launch. Die Dauer hängt von der Komplexität, der Anzahl der Seiten und Feedback-Zyklen ab.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Entwickeln Sie mit Templates?</AccordionTrigger>
              <AccordionContent>
                Nein. Wir entwickeln jede Website individuell und auf Ihre spezifischen Anforderungen zugeschnitten. Keine vorgefertigten Templates, keine Standardlösungen.
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
