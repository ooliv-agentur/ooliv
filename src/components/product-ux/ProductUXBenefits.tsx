
import React from 'react';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: isGerman ? "Mehr Kunden durch bessere UX" : "Product-Led Growth",
      description: isGerman 
        ? "Wenn Besucher zu Kunden werden, brauchen Sie weniger Marketing-Budget. Ich entwickle User Experiences, die überzeugen – mit durchschnittlich +60-140% mehr Conversions."
        : "Products that grow organically through excellent UX and strategic product leadership – less marketing dependency, more retention."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: isGerman ? "Keine Bauchgefühl-Entscheidungen" : "Evidence-Based Decisions",
      description: isGerman 
        ? "Ich schaue mir an, was Ihre Nutzer wirklich brauchen – durch Nutzer-Interviews, Datenanalyse und Tests. So entwickeln wir Features, die wirklich genutzt werden."
        : "Data-based product decisions through user research and analytics instead of gut feeling – validated features, higher success rate."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: isGerman ? "Weniger teure Fehler" : "Reduced Development Risk",
      description: isGerman 
        ? "Ich teste Konzepte, bevor sie entwickelt werden. Das spart Ihnen teure Umwege und bringt Sie schneller zum Ziel."
        : "Validated concepts before technical implementation reduce costly misdevelopment – less rework, faster time-to-market."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: isGerman ? "Messbar bessere Zahlen" : "Measurable ROI",
      description: isGerman 
        ? "Sie sehen genau, was die UX-Optimierung bringt: mehr Anfragen, höhere Conversion Rates, bessere Lead-Qualität. Mit klaren KPIs, die Sie nachverfolgen können."
        : "Clear KPIs and measurable business outcomes through strategic UX investment – higher conversions, better lead quality, sustainable scaling."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Warum gute UX Ihr Business voranbringt" : "Why Product & UX Strategy?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "Weil Nutzer nicht lange überlegen, wenn eine Website sie nicht überzeugt. Eine durchdachte User Experience macht den Unterschied zwischen 'Besucher' und 'Kunde'."
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
