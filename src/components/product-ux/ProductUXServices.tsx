
import React from 'react';
import { Target, Layers, Users, LineChart, Lightbulb, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: isGerman ? "Product Discovery Workshops" : "Product Discovery Workshops",
      description: isGerman 
        ? "Strukturierter Approach zur Opportunity-Identifikation: Opportunity Solution Trees, Assumption Mapping und Validation Framework."
        : "Structured approach to opportunity identification: Opportunity solution trees, assumption mapping, and validation framework."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "User Research & Testing" : "User Research & Testing",
      description: isGerman 
        ? "Comprehensive Research Methodology: Qualitative Interviews, quantitative Surveys, Usability Testing und evidenzbasierte Personas."
        : "Comprehensive research methodology: Qualitative interviews, quantitative surveys, usability testing, and evidence-based personas."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Product Roadmap & Priorisierung" : "Product Roadmap & Prioritization",
      description: isGerman 
        ? "Outcome-basierte Roadmaps mit RICE/ICE-Scoring, Feature-Prioritization und strategischer Release-Planung."
        : "Outcome-based roadmaps with RICE/ICE scoring, feature prioritization, and strategic release planning."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: isGerman ? "UX Strategy & Information Architecture" : "UX Strategy & Information Architecture",
      description: isGerman 
        ? "Ganzheitliche CX-Strategie, strukturierte IA, Customer Journey Mapping und Conversion-optimierte Navigation."
        : "Holistic CX strategy, structured IA, customer journey mapping, and conversion-optimized navigation."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: isGerman ? "Product Analytics Strategy" : "Product Analytics Strategy",
      description: isGerman 
        ? "Datengetriebene Produktentscheidungen: KPI-Frameworks, Metric Trees, Tracking-Konzepte und Performance-Dashboards."
        : "Data-driven product decisions: KPI frameworks, metric trees, tracking concepts, and performance dashboards."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: isGerman ? "UX Maturity Assessment" : "UX Maturity Assessment",
      description: isGerman 
        ? "Strategische Evaluation der UX-Capabilities: Maturity-Level-Analyse, Gap-Assessment und Transformation-Roadmap."
        : "Strategic evaluation of UX capabilities: Maturity level analysis, gap assessment, and transformation roadmap."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Strategische Produktführung" : "Strategic Product Leadership"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "End-to-End Product & UX Strategy – von der strategischen Vision bis zur messbaren Umsetzung."
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
            {isGerman ? "Ergebnis" : "Result"}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isGerman 
              ? "Strategische Produktführung mit klaren Outcomes: validierte Konzepte, strukturierte Roadmaps und messbare Business-Ergebnisse durch nutzerzentrierte UX-Strategie."
              : "Strategic product leadership with clear outcomes: validated concepts, structured roadmaps, and measurable business results through user-centered UX strategy."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductUXServices;
