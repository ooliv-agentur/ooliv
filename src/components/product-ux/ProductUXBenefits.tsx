
import React from 'react';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Strategische Klarheit" : "Strategic Clarity",
      description: isGerman 
        ? "Von der Product Vision bis zur priorisierten Roadmap – klare strategische Entscheidungsgrundlagen für Ihre Produktentwicklung."
        : "From product vision to prioritized roadmap – clear strategic decision foundations for your product development."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "Nutzerzentriertes Design" : "User-Centered Design",
      description: isGerman 
        ? "UX Strategy und Information Architecture, die echte Nutzerbedürfnisse mit Business-Zielen verbindet."
        : "UX strategy and information architecture that connects real user needs with business goals."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: isGerman ? "Validierte Konzepte" : "Validated Concepts",
      description: isGerman 
        ? "Prototypen und Konzepte, die vor der teuren technischen Umsetzung validiert werden – weniger Risiko, schnellere Time-to-Market."
        : "Prototypes and concepts validated before expensive technical implementation – less risk, faster time-to-market."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: isGerman ? "Messbare Outcomes" : "Measurable Outcomes",
      description: isGerman 
        ? "KPI-Frameworks und Performance-Strategien für datenbasierte Produktentscheidungen und kontinuierliche Optimierung."
        : "KPI frameworks and performance strategies for data-based product decisions and continuous optimization."
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
