
import React from 'react';
import { Target, Layers, Users, LineChart, Lightbulb, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: isGerman ? "Nutzer-Analyse & Zielgruppen-Verständnis" : "Product Discovery Workshops",
      description: isGerman 
        ? "Ich finde heraus, was Ihre Nutzer wirklich brauchen: durch Interviews, Umfragen und Datenanalyse. So entwickeln wir Lösungen, die wirklich genutzt werden."
        : "Structured approach to opportunity identification: Opportunity solution trees, assumption mapping, and validation framework."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "User Testing & Feedback-Analyse" : "User Research & Testing",
      description: isGerman 
        ? "Ich teste Konzepte mit echten Nutzern, bevor sie entwickelt werden. Das zeigt uns, was funktioniert und was nicht – und spart teure Umwege."
        : "Comprehensive research methodology: Qualitative interviews, quantitative surveys, usability testing, and evidence-based personas."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Priorisierung & Roadmap-Entwicklung" : "Product Roadmap & Prioritization",
      description: isGerman 
        ? "Wir legen fest, welche Features zuerst umgesetzt werden – basierend auf Business-Impact und Nutzer-Bedarf. Mit klaren Prioritäten und realistischem Zeitplan."
        : "Outcome-based roadmaps with RICE/ICE scoring, feature prioritization, and strategic release planning."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: isGerman ? "Website-Struktur & Navigation optimieren" : "UX Strategy & Information Architecture",
      description: isGerman 
        ? "Ich entwickle die optimale Website-Struktur und Navigation – damit Nutzer finden, was sie suchen, und zu Kunden werden."
        : "Holistic CX strategy, structured IA, customer journey mapping, and conversion-optimized navigation."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: isGerman ? "KPIs & Erfolgs-Tracking" : "Product Analytics Strategy",
      description: isGerman 
        ? "Ich definiere die wichtigen KPIs und richte Tracking ein – damit Sie immer sehen, was funktioniert und wo noch Potenzial liegt."
        : "Data-driven product decisions: KPI frameworks, metric trees, tracking concepts, and performance dashboards."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: isGerman ? "UX-Status & Verbesserungs-Potenzial" : "UX Maturity Assessment",
      description: isGerman 
        ? "Ich schaue mir an, wo Ihre UX aktuell steht und wo die größten Verbesserungs-Potenziale liegen – mit konkreten Empfehlungen."
        : "Strategic evaluation of UX capabilities: Maturity level analysis, gap assessment, and transformation roadmap."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Wie ich Ihre UX verbessere" : "Strategic Product Leadership"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "Von der Nutzer-Analyse über Konzeption bis zur messbaren Optimierung – mit klaren Schritten zu besseren Conversions."
              : "End-to-end Product & UX Strategy – from strategic vision to measurable implementation."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {isGerman ? "Was Sie am Ende haben" : "Result"}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isGerman 
              ? "Eine UX, die überzeugt und konvertiert. Mit messbaren Verbesserungen bei Conversion Rate, Nutzer-Zufriedenheit und Lead-Qualität."
              : "Strategic product leadership with clear outcomes: validated concepts, structured roadmaps, and measurable business results through user-centered UX strategy."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductUXServices;
