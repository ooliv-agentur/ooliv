import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import WeitereProjekteTable from '@/components/WeitereProjekteTable';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { CheckCircle2, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { typographyStyles } from '@/styles/typography';

const GermanCaseStudies = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const successPillars = [
    {
      title: isGerman ? "Strategie-first" : "Strategy-first",
      description: isGerman 
        ? "Jedes Projekt beginnt mit klarer Positionierung, KPIs und einer strukturierten User Journey." 
        : "Every project starts with clear positioning, KPIs and a structured user journey."
    },
    {
      title: isGerman ? "UX, Content & Design integriert" : "UX, Content & Design integrated",
      description: isGerman 
        ? "UX, Inhalte und Design entstehen gleichzeitig – kein sequentielles Denken." 
        : "UX, content and design are created simultaneously – no sequential thinking."
    },
    {
      title: isGerman ? "Performance & Skalierbarkeit" : "Performance & Scalability",
      description: isGerman 
        ? "SEO, Geschwindigkeit und technische Architektur sind Fundament, nicht Add-on." 
        : "SEO, speed and technical architecture are foundation, not add-on."
    }
  ];

  const faqItems = [
    {
      question: isGerman ? "Wie messen Sie den Erfolg eines Projekts?" : "How do you measure the success of a project?",
      answer: isGerman 
        ? "Wir definieren vor Projektstart klare KPIs: Sichtbarkeit (SEO-Rankings, organischer Traffic), Conversions (Lead-Generierung, Anfragen), Engagement (Zeit auf Seite, Interaktionen) und Business-Metriken (ROI, Umsatz). Nach Launch tracken wir diese Werte kontinuierlich."
        : "We define clear KPIs before project start: Visibility (SEO rankings, organic traffic), conversions (lead generation, inquiries), engagement (time on page, interactions) and business metrics (ROI, revenue). After launch we track these values continuously."
    },
    {
      question: isGerman ? "Welche Branchen profitieren am meisten?" : "Which industries benefit the most?",
      answer: isGerman 
        ? "Unsere Projekte decken B2B-Unternehmen, Dienstleistungen, Industrie, Beratung, Software, Immobilien und E-Commerce ab. Der gemeinsame Nenner: Unternehmen, die digitale Klarheit brauchen und messbare Ergebnisse erwarten."
        : "Our projects cover B2B companies, services, industry, consulting, software, real estate and e-commerce. The common denominator: companies that need digital clarity and expect measurable results."
    },
    {
      question: isGerman ? "Wie lange dauert ein Projekt von Start bis Launch?" : "How long does a project take from start to launch?",
      answer: isGerman 
        ? "Je nach Komplexität 8-16 Wochen. Ein Website-Relaunch mit UX-Konzeption, Design und Entwicklung dauert ca. 12 Wochen. Kleinere Projekte wie Landing Pages 6-8 Wochen. Wir arbeiten in strukturierten Sprints mit klaren Meilensteinen."
        : "Depending on complexity 8-16 weeks. A website relaunch with UX conception, design and development takes about 12 weeks. Smaller projects like landing pages 6-8 weeks. We work in structured sprints with clear milestones."
    },
    {
      question: isGerman ? "Arbeiten Sie auch mit internen Teams zusammen?" : "Do you also work with internal teams?",
      answer: isGerman 
        ? "Ja, sehr gerne. Viele unserer Projekte entstehen in Zusammenarbeit mit internen Marketing-, IT- oder Produktteams. Wir bringen Strategie, UX und Umsetzung mit – Ihr Team bringt Branchenwissen und interne Prozesse."
        : "Yes, very gladly. Many of our projects are created in collaboration with internal marketing, IT or product teams. We bring strategy, UX and implementation – your team brings industry knowledge and internal processes."
    },
    {
      question: isGerman ? "Wie läuft Reporting & KPI-Tracking?" : "How does reporting & KPI tracking work?",
      answer: isGerman 
        ? "Nach Launch richten wir Google Analytics 4, Search Console und Custom Dashboards ein. Monatliche Reports zeigen Traffic, Rankings, Conversions und Business-Impact. Optional bieten wir laufende Performance-Optimierung an."
        : "After launch we set up Google Analytics 4, Search Console and Custom Dashboards. Monthly reports show traffic, rankings, conversions and business impact. Optionally we offer ongoing performance optimization."
    }
  ];
  
  useEffect(() => {
    const title = isGerman 
      ? "Webdesign Case Studies & Digitale Projekte | ooliv Referenzen" 
      : "Web Design Case Studies & Digital Projects | ooliv References";
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const description = isGerman
      ? "Echte Case Studies aus Webdesign, UX, SEO, AI-Workflows und digitaler Transformation. Messbare Ergebnisse, starke Marken und skalierbare Systeme."
      : "Real case studies from web design, UX, SEO, AI workflows and digital transformation. Measurable results, strong brands and scalable systems.";
    metaDescription.setAttribute('content', description);
  }, [isGerman]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: isGerman ? "Referenzen" : "Case Studies", url: `https://ooliv.de${isGerman ? '/referenzen' : '/en/case-studies'}` }
  ];

  const metaTitle = isGerman 
    ? "Webdesign Case Studies & Digitale Projekte | ooliv Referenzen" 
    : "Web Design Case Studies & Digital Projects | ooliv References";

  const metaDescription = isGerman
    ? "Echte Case Studies aus Webdesign, UX, SEO, AI-Workflows und digitaler Transformation. Messbare Ergebnisse, starke Marken und skalierbare Systeme."
    : "Real case studies from web design, UX, SEO, AI workflows and digital transformation. Measurable results, strong brands and scalable systems.";
  
  const metaKeywords = isGerman
    ? "case studies webdesign, digitale projekte referenzen, webdesign referenzen, digitale transformation referenzen, erfolgsprojekte digitalagentur, ux projekte, b2b case studies"
    : "case studies web design, digital project references, web design references, digital transformation references";

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonicalUrl={`https://ooliv.de${isGerman ? '/referenzen' : '/en/case-studies'}`}
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": isGerman ? "Case Studies & Digitale Projekte" : "Case Studies & Digital Projects",
            "description": isGerman ? "Unsere erfolgreichsten Webdesign, UX, SEO und Digitalprojekte" : "Our most successful web design, UX, SEO and digital projects"
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />
      
      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <CaseStudiesHero />
        </Container>
      </Section>
      
      {/* Intro */}
      <Section id="intro" spacing="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={typographyStyles.headings.h2}>
              {isGerman ? "Echte Referenzen, echte Ergebnisse" : "Real References, Real Results"}
            </h2>
            <p className={`${typographyStyles.body.large} max-w-3xl mx-auto mt-6`}>
              {isGerman 
                ? "Keine Demo-Prototypen, keine Agentur-Portfolios – nur echte digitale Projekte mit messbaren Ergebnissen."
                : "No demo prototypes, no agency portfolios – only real digital projects with measurable results."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: isGerman ? "Echte digitale Projekte, echte Ergebnisse" : "Real digital projects, real results",
                description: isGerman 
                  ? "Keine Demo-Prototypen. Jedes Projekt ist live und generiert reale Leads."
                  : "No demo prototypes. Every project is live and generates real leads."
              },
              {
                icon: Target,
                title: isGerman ? "Nur reale Kundenprojekte" : "Only real customer projects",
                description: isGerman 
                  ? "Wir zeigen nur reale Kundenprojekte, kein Agentur-Marketing."
                  : "We only show real customer projects, no agency marketing."
              },
              {
                icon: TrendingUp,
                title: isGerman ? "Messbare Ergebnisse: Sichtbarkeit, Conversions, Prozesseffizienz" : "Measurable Results",
                description: isGerman 
                  ? "Jede Case Study hat KPIs – von Sichtbarkeit bis Lead-Generierung."
                  : "Every case study has KPIs – from visibility to lead generation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F7F7] rounded-lg p-8 text-center border border-[#E5E8E8]"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg mx-auto mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-[#555555]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Case Studies */}
      <Section id="case-studies" background="light" spacing="large">
        <Container>
          <CaseStudiesSection 
            customTitle={isGerman ? "Echte Ergebnisse aus echten Projekten" : "Real Results from Real Projects"}
            hideHeaderText={false}
          />
        </Container>
      </Section>
      
      {/* Success Pillars */}
      <Section id="success-pillars" spacing="large">
        <Container>
          <h2 className={`${typographyStyles.headings.h2} text-center mb-16`}>
            {isGerman ? "Warum unsere digitalen Projekte funktionieren" : "Why our digital projects work"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F7F7] rounded-lg p-8 text-center border border-[#E5E8E8]"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#E0FBFA] rounded-lg mx-auto mb-6">
                  {index === 0 && <Target className="w-8 h-8 text-[#0BC3C3]" />}
                  {index === 1 && <Users className="w-8 h-8 text-[#0BC3C3]" />}
                  {index === 2 && <Zap className="w-8 h-8 text-[#0BC3C3]" />}
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#555555] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Hybrid Team */}
      <Section id="hybrid-team" background="light" spacing="medium">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className={typographyStyles.body.large}>
              {isGerman 
                ? <>Unsere Case Studies spiegeln unseren hybriden Ansatz wider: <strong className="text-[#0A0A0A]">Strategie, UX, Content, Entwicklung & AI-Workflows</strong> arbeiten synchron – kein Silodenken, keine Fremdvergabe. Weitere Services: <a href="/digitale-transformation-strategie" className="text-[#0BC3C3] hover:underline ml-1">Digitale Transformation</a>, <a href="/webdesign-entwicklung" className="text-[#0BC3C3] hover:underline ml-1">Webdesign</a>, <a href="/seo-optimierung" className="text-[#0BC3C3] hover:underline ml-1">SEO & Performance</a>, <a href="/ai-workflows" className="text-[#0BC3C3] hover:underline ml-1">AI-Workflows</a>.</>
                : <>Our case studies reflect our hybrid approach: <strong className="text-[#0A0A0A]">Strategy, UX, Content, Development & AI Workflows</strong> work synchronously – no silo thinking, no outsourcing.</>
              }
            </p>
          </motion.div>
        </Container>
      </Section>
      
      {/* More Projects */}
      <Section id="weitere-projekte" spacing="large">
        <Container>
          <WeitereProjekteTable />
        </Container>
      </Section>
      
      {/* FAQ */}
      <Section id="faq" background="light" spacing="large">
        <Container>
          <FAQ customFaqs={faqItems} />
        </Container>
      </Section>
      
      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <CTA 
            title={isGerman ? "Bereit für ein erfolgreiches Projekt?" : "Ready for a successful project?"}
            subtitle={isGerman ? "Lassen Sie uns gemeinsam ein Projekt entwickeln, das nicht nur gut aussieht, sondern auch messbare Ergebnisse liefert." : "Let's develop a project together that not only looks good, but also delivers measurable results."}
            primaryCta={isGerman ? "Projekt starten" : "Start Project"}
            secondaryCta={isGerman ? "Strategiegespräch vereinbaren" : "Schedule Strategy Call"}
            lightBackground={false}
          />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default GermanCaseStudies;
