import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Zap, Target, Users, CheckCircle, Award } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Vom Konzept bis zum Launch",
      description: "Strategie, Design & Entwicklung aus einer Hand – für digitale Produkte, die wirklich funktionieren.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Messbare Ergebnisse",
      description: "Deutlich mehr qualifizierte Anfragen. Wir arbeiten mit klaren KPIs, nicht mit Vermutungen.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Persönlich & auf Augenhöhe",
      description: "Direkte Zusammenarbeit mit erfahrenen Strategen. Ehrliche Beratung statt Verkaufsshow.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const metrics = [
    {
      value: "100+",
      label: "Erfolgreiche Projekte",
      description: "Vom Mittelstand bis zum Weltmarktführer"
    },
    {
      value: "16+",
      label: "Jahre Expertise",
      description: "Digital-Strategie & Transformation"
    },
    {
      value: "95%",
      label: "Weiterempfehlung",
      description: "Zufriedene Kunden"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Warum ooliv?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ihr Partner für digitale Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir kombinieren strategisches Denken mit praktischer Umsetzung – für messbare Ergebnisse, die Ihr Business voranbringen.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Benefits */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Was uns auszeichnet
              </h3>
            </Reveal>
            <StaggerReveal className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {typeof benefit.description === 'string' ? benefit.description : benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>

          {/* Metrics */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Zahlen, die überzeugen
              </h3>
            </Reveal>
            <StaggerReveal className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              ))}
            </StaggerReveal>

            <Reveal delay={0.6}>
              <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Ausgezeichnete Qualität
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unsere Projekte kombinieren strategische Exzellenz mit technischer Präzision – bestätigt durch zufriedene Kunden und messbare Erfolge.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
