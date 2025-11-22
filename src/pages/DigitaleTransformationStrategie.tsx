import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import PageHero from '@/components/PageHero';
import PremiumCaseStudyGrid from '@/components/PremiumCaseStudyGrid';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { 
  Target, Users, Workflow, Brain, BarChart3,
  X, Check, AlertCircle, 
  Search, Map, Zap, TrendingUp
} from 'lucide-react';
import { caseStudiesData } from '@/components/CaseStudiesSection';

const DigitaleTransformationStrategie = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digitale Transformation & Strategie", url: "https://ooliv.de/digitale-transformation-strategie" }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter case studies
  const filteredCases = caseStudiesData.de.filter(c => 
    ['KLAIBER', 'COBUS', 'IconPro'].includes(c.client)
  ).slice(0, 3);

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Digitale Transformation & Strategie – ooliv"
        description="Digitale Transformation mit Struktur: Strategie, Customer Journey, Prozesse und AI-gestützte Workflows für messbar mehr Effizienz und Anfragen."
        canonicalUrl="https://ooliv.de/digitale-transformation-strategie"
        keywords="Digitale Transformation Agentur, digitale Transformation Beratung, Transformation Strategie, digitale Prozesse, digitale Roadmap, AI Workflows, digitale Effizienz, Customer Journey Optimierung, UX Transformation, Website Transformation"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <PageHero
        title="Digitale Transformation, die messbar wirkt."
        subtitle="Wir modernisieren Customer Journeys, Prozesse und Workflows — für mehr Effizienz, bessere Entscheidungen und messbar mehr Anfragen."
        primaryCta={{
          text: "Kostenloses Konzept sichern",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Arbeitsweise ansehen",
          link: "#",
          onClick: () => scrollToSection('vorgehen')
        }}
      />

      {/* Section 2: Was bedeutet digitale Transformation? */}
      <WasIstTransformation />

      {/* Section 3: Die 5 Säulen */}
      <FuenfSaeulen />

      {/* Section 4: Typische Probleme */}
      <TypischeProbleme />

      {/* Section 5: Unser Vorgehen */}
      <UnserVorgehen onCtaClick={handleOpenLeadForm} />

      {/* Section 6: Ergebnisse */}
      <Ergebnisse />

      {/* Section 7: Beispiele aus der Praxis */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
              Beispiele aus der Praxis
            </h2>
            <p className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto">
              Reale Projekte mit messbarem Erfolg bei der digitalen Transformation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.client} Logo`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-brand-text mb-4">{caseStudy.industry}</p>
                <h3 className="text-xl font-bold text-brand-heading mb-4">
                  {caseStudy.headline}
                </h3>
                <ul className="space-y-2 mb-6">
                  {caseStudy.impact.slice(0, 3).map((impact, i) => (
                    <li key={i} className="flex items-start gap-2 text-brand-text">
                      <Check className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={caseStudy.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-primaryHover font-medium inline-flex items-center gap-2"
                >
                  Case ansehen
                  <TrendingUp className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Warum ooliv? */}
      <WarumOoliv />

      {/* Section 9: CTA */}
      <CTA
        title="Bereit für echte digitale Transformation?"
        subtitle="Lassen Sie uns besprechen, wie wir Ihre Customer Journeys, Prozesse und Workflows modernisieren können."
        primaryCta="Projekt starten"
        primaryCtaLink="/"
      />
    </PageLayout>
  );
};

// Section Components

const WasIstTransformation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Was bedeutet digitale Transformation?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-brand-heading mb-6">Nicht:</h3>
            <ul className="space-y-4">
              {[
                "Keine IT-Kosmetik",
                "Keine Tools ohne Strategie",
                "Keine \"Digital-Projekte\", die ins Leere laufen"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-brand-heading mb-6">Sondern:</h3>
            <ul className="space-y-4">
              {[
                "Strukturierte Prozesse",
                "Klare Verantwortlichkeiten",
                "Effiziente digitale Workflows",
                "Datenbasierte Entscheidungen",
                "Automatisierung dort, wo sie Sinn macht"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-bold text-brand-primary">
            Digitale Transformation = Struktur + UX + AI + effiziente Prozesse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FuenfSaeulen = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const saeulen = [
    {
      icon: Target,
      title: "Strategie & Priorisierung",
      description: "Fokus, KPIs, Roadmaps statt blindem Aktionismus."
    },
    {
      icon: Users,
      title: "Customer Journey & UX",
      description: "Engpässe identifizieren, Reibung reduzieren, Conversions erhöhen."
    },
    {
      icon: Workflow,
      title: "Digitale Prozesse & Automatisierung",
      description: "Workflows modernisieren und repetitive Arbeit reduzieren."
    },
    {
      icon: Brain,
      title: "AI-gestützte Workflows",
      description: "Recherche, Content, interne Prozesse automatisieren & beschleunigen."
    },
    {
      icon: BarChart3,
      title: "Messbarkeit & kontinuierliche Verbesserung",
      description: "Klare KPIs, Reporting, datenbasierte Entscheidungen."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Die 5 Säulen unserer Transformation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {saeulen.map((saeule, index) => {
            const Icon = saeule.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all ${
                  index >= 3 ? 'md:col-start-2' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-3">
                  {index + 1}. {saeule.title}
                </h3>
                <p className="text-brand-text">{saeule.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TypischeProbleme = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const probleme = [
    "Veraltete oder chaotische digitale Prozesse",
    "Keine klare digitale Roadmap",
    "Keine messbaren KPIs oder unklare Reports",
    "Wenig Lead-Generierung, niedrige Conversionrate",
    "Hoher manueller Aufwand in Marketing & Kommunikation",
    "Keine einheitliche Customer Experience",
    "Zu viele Tools, kein System",
    "Interne Teams arbeiten ineffizient oder unkoordiniert"
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Typische Probleme, die wir lösen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {probleme.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card rounded-lg border-l-4 border-brand-primary p-6 flex items-start gap-4"
            >
              <AlertCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <p className="text-brand-text">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-brand-heading">
            Wir bringen Ordnung in digitale Strukturen — und machen sie skalierbar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const UnserVorgehen = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const schritte = [
    {
      icon: Search,
      title: "Analyse & Reifegrad-Check",
      description: "Wo stehen Sie? Wo blockiert es?"
    },
    {
      icon: Map,
      title: "Roadmap & Priorisierung",
      description: "30/60/90-Tage-Plan + klare Verantwortlichkeiten."
    },
    {
      icon: Zap,
      title: "Umsetzung & AI-gestützte Optimierung",
      description: "Prozesse, Workflows, Interfaces, Websites, Automatisierung."
    },
    {
      icon: TrendingUp,
      title: "Messbarkeit & kontinuierliche Verbesserung",
      description: "KPIs, Reports, klare Entscheidungsgrundlagen."
    }
  ];

  return (
    <section id="vorgehen" ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Unser Vorgehen
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {schritte.map((schritt, index) => {
            const Icon = schritt.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6 bg-card rounded-lg border border-border p-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-brand-primary" />
                    <h3 className="text-xl font-bold text-brand-heading">{schritt.title}</h3>
                  </div>
                  <p className="text-brand-text">{schritt.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-brand-primary text-white hover:bg-brand-primaryHover"
          >
            Kostenlose Analyse erhalten
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Ergebnisse = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const metrics = [
    { value: "+127 %", label: "mehr qualifizierte Leads" },
    { value: "+300 %", label: "mehr Anfragen" },
    { value: "–45 %", label: "Bounce Rate" },
    { value: "+160 %", label: "mehr Interaktionen" }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Messbare Ergebnisse
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-brand-primary text-white rounded-lg p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm md:text-base opacity-90">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarumOoliv = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const features = [
    "15+ Jahre Erfahrung in Strategie, UX & AI",
    "Fokus auf messbare Ergebnisse, nicht nur Tools",
    "Direkte Zusammenarbeit auf Geschäftsführungsniveau",
    "Keine Junioren, kein Overhead",
    "Klarer, strukturierter Prozess"
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
            Warum ooliv?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card rounded-lg border border-border p-6 flex items-start gap-4"
            >
              <Check className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <p className="text-brand-text font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitaleTransformationStrategie;
