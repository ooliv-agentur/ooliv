import React from 'react';
import { Shield, Target, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const benefits = [
  {
    icon: Shield,
    title: 'Transparenz & Vorhersagbarkeit',
    description: 'Fixe Preise, klare Deliverables, definierter Scope. Keine versteckten Kosten, keine Agentur-Overhead.',
  },
  {
    icon: Target,
    title: 'ROI-fokussiertes Engagement',
    description: 'Jedes Investment ist an messbare Business Outcomes gekoppelt. Wir optimieren auf Impact, nicht auf Stunden.',
  },
  {
    icon: Zap,
    title: 'Schneller Time-to-Impact',
    description: '4-16 Wochen von Discovery zu messbaren Ergebnissen. Keine endlosen Projekte ohne Outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Bewährte Frameworks',
    description: 'Erprobte Strategic Discovery, Product Strategy und UX Transformation Frameworks mit +240% avg. Conversion Lift.',
  },
  {
    icon: Users,
    title: 'Direct Access zu Strategy Lead',
    description: 'Kein Account Manager Ping-Pong. Direkter Zugang zu 16+ Jahren Digital Strategy Expertise.',
  },
  {
    icon: CheckCircle,
    title: 'Flexible Engagement-Modelle',
    description: 'Von einmaligem Discovery Package bis zu langfristigem Strategic Retainer – passend zur aktuellen Phase.',
  },
];

const InvestmentBenefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Warum diese Investment-Struktur?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparenz, messbare Outcomes und strategische Excellence ohne Agentur-Overhead.
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
                ROI-Beispiel: Strategic Discovery Package
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">€20k</div>
                  <div className="text-sm text-muted-foreground">Investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">€250k+</div>
                  <div className="text-sm text-muted-foreground">Vermiedene Fehlentwicklung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">12.5x</div>
                  <div className="text-sm text-muted-foreground">ROI nur durch Risk Reduction</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ein Strategic Discovery Package verhindert durchschnittlich 6-8 Monate Fehlentwicklung. 
                Bei einem Development Team von €15k/Monat entspricht das €90k-120k vermiedenen Kosten – 
                zusätzlich zum Value durch richtige Priorisierung und schnelleren Time-to-Market.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
