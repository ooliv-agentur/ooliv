import React from 'react';
import { Shield, Target, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const benefits = [
  {
    icon: Shield,
    title: 'Transparente Preise, keine Überraschungen',
    description: 'Sie wissen vorher, was es kostet und was Sie bekommen. Keine versteckten Kosten, kein Agentur-Overhead, kein Kleingedrucktes.',
  },
  {
    icon: Target,
    title: 'Fokus auf echte Ergebnisse',
    description: 'Ich arbeite nicht nach Stunden, sondern auf Ergebnisse. Ziel: mehr Anfragen, mehr Verkäufe, bessere Zahlen.',
  },
  {
    icon: Zap,
    title: 'Schnell erste Erfolge sehen',
    description: '4-16 Wochen bis zu messbaren Ergebnissen. Keine endlosen Projekte, die sich jahrelang hinziehen.',
  },
  {
    icon: TrendingUp,
    title: 'Bewährte Methoden, die funktionieren',
    description: '16+ Jahre Erfahrung, hunderte erfolgreiche Projekte. Durchschnittlich +60-140% mehr Conversions bei meinen Kunden.',
  },
  {
    icon: Users,
    title: 'Direkter Draht zu mir – keine Umwege',
    description: 'Sie arbeiten direkt mit mir zusammen, nicht mit Junior-Beratern. Kein Account-Manager-Ping-Pong.',
  },
  {
    icon: CheckCircle,
    title: 'Flexibel passend zu Ihrer Situation',
    description: 'Vom einmaligen Strategie-Paket bis zur langfristigen Beratung – je nachdem, was Sie gerade brauchen.',
  },
];

const InvestmentBenefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Warum so arbeiten?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Weil Sie als Kunde wissen sollten, was Sie bekommen und was es kostet. Ohne Unklarheiten, ohne Agentur-Aufschläge.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* ROI Calculator Teaser */}
        <Reveal>
          <div className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 rounded-2xl border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lohnt sich eine Investition für Sie?
              </h3>
              <p className="text-muted-foreground mb-6">
                Berechnen Sie kostenlos, wie viel mehr Umsatz Sie mit einer optimierten Website machen könnten. Basierend auf Ihren aktuellen Besucherzahlen und durchschnittlichen Auftragswerten.
              </p>
              <a 
                href="/roi-rechner"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <TrendingUp className="h-5 w-5" />
                Jetzt ROI berechnen (kostenlos)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
