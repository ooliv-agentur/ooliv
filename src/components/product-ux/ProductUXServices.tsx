
import React from 'react';
import { Target, Layers, Users, LineChart, Lightbulb, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: isGerman ? "Product Vision & Roadmap" : "Product Vision & Roadmap",
      description: isGerman 
        ? "Strategische Produktvision mit klaren Meilensteinen, Priorisierung und messbaren Business Outcomes."
        : "Strategic product vision with clear milestones, prioritization, and measurable business outcomes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "UX Strategy & IA" : "UX Strategy & IA",
      description: isGerman 
        ? "Customer Journey Design, Information Architecture und nutzerzentrierte Konzeption für komplexe Systeme."
        : "Customer journey design, information architecture, and user-centered conception for complex systems."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: isGerman ? "Requirements Engineering" : "Requirements Engineering",
      description: isGerman 
        ? "Strukturierte Anforderungsanalyse, Stakeholder-Alignment und klare Spezifikationen für multidisziplinäre Teams."
        : "Structured requirements analysis, stakeholder alignment, and clear specifications for multidisciplinary teams."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: isGerman ? "Prototype & Concept Development" : "Prototype & Concept Development",
      description: isGerman 
        ? "Von Wireframes bis zu interaktiven Prototypen – validierte Konzepte vor der technischen Umsetzung."
        : "From wireframes to interactive prototypes – validated concepts before technical implementation."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Conversion & Funnel Optimization" : "Conversion & Funnel Optimization",
      description: isGerman 
        ? "Datengetriebene CRO-Strategien, A/B-Testing-Frameworks und kontinuierliche Performance-Optimierung."
        : "Data-driven CRO strategies, A/B testing frameworks, and continuous performance optimization."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: isGerman ? "Performance Analytics Strategy" : "Performance Analytics Strategy",
      description: isGerman 
        ? "KPI-Frameworks, Tracking-Konzepte und Analytics-Strategien für datenbasierte Produktentscheidungen."
        : "KPI frameworks, tracking concepts, and analytics strategies for data-based product decisions."
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
