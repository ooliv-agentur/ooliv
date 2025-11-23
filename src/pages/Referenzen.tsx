import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import WeitereProjekteTable from '@/components/WeitereProjekteTable';
import { CheckCircle2, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanCaseStudies = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  // Handler for opening the lead form
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Success pillars
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

  // FAQ items with updated SEO-optimized questions
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
  
  // Force document title update
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
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const keywords = isGerman
      ? "case studies webdesign, digitale projekte referenzen, webdesign referenzen, digitale transformation referenzen, erfolgsprojekte digitalagentur, ux projekte, b2b case studies, webentwicklungsprojekte, seo resultaten, ai workflows in der praxis, erfolgreiche kundencases, digitale sichtbarkeit, conversion-rate optimierung, user journey optimierung, lead generierung b2b, performance webdesign, ux konzeption, webdesign agentur, wordpress entwicklung, technische seo, content strategie"
      : "case studies web design, digital project references, web design references, digital transformation references, successful projects digital agency, ux projects, b2b case studies, web development projects, seo results, ai workflows in practice, successful customer cases, digital visibility, conversion rate optimization, user journey optimization, lead generation b2b, performance web design, ux conception, web design agency, wordpress development, technical seo, content strategy";
    metaKeywords.setAttribute('content', keywords);
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
    ? "case studies webdesign, digitale projekte referenzen, webdesign referenzen, digitale transformation referenzen, erfolgsprojekte digitalagentur, ux projekte, b2b case studies, webentwicklungsprojekte, seo resultaten, ai workflows in der praxis, erfolgreiche kundencases, digitale sichtbarkeit, conversion-rate optimierung, user journey optimierung, lead generierung b2b, performance webdesign, ux konzeption, webdesign agentur, wordpress entwicklung, technische seo, content strategie"
    : "case studies web design, digital project references, web design references, digital transformation references, successful projects digital agency, ux projects, b2b case studies, web development projects, seo results, ai workflows in practice, successful customer cases, digital visibility, conversion rate optimization, user journey optimization, lead generation b2b, performance web design, ux conception, web design agency, wordpress development, technical seo, content strategy";

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
            "description": isGerman ? "Unsere erfolgreichsten Webdesign, UX, SEO und Digitalprojekte" : "Our most successful web design, UX, SEO and digital projects",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "position": 1,
                "name": "KLAIBER - B2B Webdesign & Markenstrategie",
                "description": "+92% mehr Sichtbarkeit durch strategische Neupositionierung"
              },
              {
                "@type": "CreativeWork",
                "position": 2,
                "name": "COBUS Industries - UX-Redesign & internationale B2B-Struktur",
                "description": "+160% mehr Interaktionen"
              },
              {
                "@type": "CreativeWork",
                "position": 3,
                "name": "SPEZ AG - Markenentwicklung & lokale Lead-Automation",
                "description": "+300% qualifizierte Anfragen"
              },
              {
                "@type": "CreativeWork",
                "position": 4,
                "name": "IconPro - KI-Software UX & AI-Visualisierung",
                "description": "+45% höheres Engagement"
              },
              {
                "@type": "CreativeWork",
                "position": 5,
                "name": "Quartier am Kliff - Immobilienmarke & Conversion-Landingpage",
                "description": "+40% bessere Conversionrate"
              }
            ]
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
      
      <section id="hero">
        <CaseStudiesHero />
      </section>
      
      {/* Intro Section */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003343] mb-6">
              {isGerman ? "Echte Referenzen, echte Ergebnisse" : "Real References, Real Results"}
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              {isGerman 
                ? "Keine Demo-Prototypen, keine Agentur-Portfolios – nur echte digitale Projekte mit messbaren Ergebnissen."
                : "No demo prototypes, no agency portfolios – only real digital projects with measurable results."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: isGerman ? "Echte digitale Projekte, echte Ergebnisse" : "Real digital projects, real results",
                description: isGerman 
                  ? "Keine Demo-Prototypen. Jedes Projekt ist live und generiert reale Leads."
                  : "No demo prototypes. Every project is live and generates real leads."
              },
              {
                title: isGerman ? "Nur reale Kundenprojekte" : "Only real customer projects",
                description: isGerman 
                  ? "Wir zeigen nur reale Kundenprojekte, kein Agentur-Marketing."
                  : "We only show real customer projects, no agency marketing."
              },
              {
                title: isGerman ? "Messbare Ergebnisse: Sichtbarkeit, Conversions, Prozesseffizienz" : "Measurable Results: Visibility, Conversions, Process Efficiency",
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
                className="bg-[#F7F8FC] rounded-lg p-8 text-center border border-gray-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#0BC3C3]/10 text-[#0BC3C3] rounded-lg mx-auto mb-6">
                  {index === 0 && <CheckCircle2 className="w-6 h-6" aria-label={item.title} />}
                  {index === 1 && <Target className="w-6 h-6" aria-label={item.title} />}
                  {index === 2 && <TrendingUp className="w-6 h-6" aria-label={item.title} />}
                </div>
                <h3 className="text-xl font-bold text-[#003343] mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-[#666666]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="case-studies">
        <CaseStudiesSection 
          customTitle={isGerman ? "Echte Ergebnisse aus echten Projekten" : "Real Results from Real Projects"}
          hideHeaderText={false}
        />
      </section>
      
      {/* Success Pillars */}
      <section id="success-pillars" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-16 text-center">
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
                className="bg-[#F4F7F7] rounded-lg p-8 text-center border border-gray-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#0BC3C3]/10 rounded-lg mx-auto mb-6">
                  {index === 0 && <Target className="w-8 h-8 text-[#0BC3C3]" aria-label={pillar.title} />}
                  {index === 1 && <Users className="w-8 h-8 text-[#0BC3C3]" aria-label={pillar.title} />}
                  {index === 2 && <Zap className="w-8 h-8 text-[#0BC3C3]" aria-label={pillar.title} />}
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hybrid Team */}
      <section id="hybrid-team" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              {isGerman 
                ? <>Unsere Case Studies spiegeln unseren hybriden Ansatz wider: <strong className="text-[#003343]">Strategie, UX, Content, Entwicklung & AI-Workflows</strong> arbeiten synchron – kein Silodenken, keine Fremdvergabe. Weitere Services: <a href="/digitale-transformation-strategie" className="text-[#0BC3C3] hover:underline ml-1">Digitale Transformation</a>, <a href="/ux-konzeption" className="text-[#0BC3C3] hover:underline ml-1">UX-Konzeption</a>, <a href="/webdesign-entwicklung" className="text-[#0BC3C3] hover:underline ml-1">Webdesign</a>, <a href="/seo-performance" className="text-[#0BC3C3] hover:underline ml-1">SEO & Performance</a>, <a href="/ai-workflows" className="text-[#0BC3C3] hover:underline ml-1">AI-Workflows</a>.</>
                : <>Our case studies reflect our hybrid approach: <strong className="text-[#003343]">Strategy, UX, Content, Development & AI Workflows</strong> work synchronously – no silo thinking, no outsourcing.</>
              }
            </p>
          </motion.div>
        </div>
      </section>
      
      <section id="cta">
        <CTA 
          title={isGerman 
            ? "Welche Ergebnisse möchten Sie für Ihr Unternehmen erreichen?" 
            : "What results do you want to achieve for your company?"
          }
          subtitle={isGerman 
            ? "Case Studies zeigen, was möglich ist. Jetzt Ihr Projekt mit kostenloser Strategieberatung starten." 
            : "Case studies show what's possible. Start your project now with free strategy consultation."
          }
          primaryCta={isGerman ? "Projekt starten" : "Start Project"}
        />
      </section>
      
      <section id="faq">
        <FAQ
          customFaqs={faqItems}
          showCTA={false}
        />
      </section>
      
      <section id="weitere-projekte">
        <WeitereProjekteTable />
      </section>
    </PageLayout>
  );
};

export default GermanCaseStudies;
