
import React from 'react';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: isGerman ? "Product-Led Growth" : "Product-Led Growth",
      description: isGerman 
        ? "Produkte, die durch exzellente UX und strategische Produktführung organisch wachsen – weniger Marketing-Abhängigkeit, mehr Retention."
        : "Products that grow organically through excellent UX and strategic product leadership – less marketing dependency, more retention."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Evidence-Based Decisions" : "Evidence-Based Decisions",
      description: isGerman 
        ? "Datenbasierte Produktentscheidungen durch User Research und Analytics statt Bauchgefühl – validierte Features, höhere Success Rate."
        : "Data-based product decisions through user research and analytics instead of gut feeling – validated features, higher success rate."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: isGerman ? "Reduced Development Risk" : "Reduced Development Risk",
      description: isGerman 
        ? "Validierte Konzepte vor der technischen Umsetzung reduzieren kostspielige Fehlentwicklungen – weniger Rework, schnellere Time-to-Market."
        : "Validated concepts before technical implementation reduce costly misdevelopment – less rework, faster time-to-market."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "Measurable ROI" : "Measurable ROI",
      description: isGerman 
        ? "Klare KPIs und messbare Business Outcomes durch strategische UX-Investition – höhere Conversions, bessere Lead-Qualität, nachhaltige Skalierung."
        : "Clear KPIs and measurable business outcomes through strategic UX investment – higher conversions, better lead quality, sustainable scaling."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Warum Product & UX Strategy?" : "Why Product & UX Strategy?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "Strategische Produktführung schafft Klarheit, reduziert Risiken und führt zu messbaren Business-Ergebnissen."
              : "Strategic product leadership creates clarity, reduces risks, and leads to measurable business results."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductUXBenefits;
