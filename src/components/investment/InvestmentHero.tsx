import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const InvestmentHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Strategic Investment Models</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Klare Preise,
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                konkrete Ergebnisse
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Drei transparente Pakete mit festen Preisen und klaren Leistungen. Sie wissen vorher, was Sie bekommen und was es kostet. 
              Basierend auf 16+ Jahren Erfahrung – kein Agentur-Overhead, nur echte Expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-xl border border-border">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">+60–140%</div>
                <div className="text-sm text-muted-foreground">Mehr Anfragen & Conversions (Durchschnitt meiner Kunden)</div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">4-16 Wochen</div>
                <div className="text-sm text-muted-foreground">Bis zu ersten messbaren Ergebnissen</div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">€15k - €80k</div>
                <div className="text-sm text-muted-foreground">Investitions-Bereich je nach Paket</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InvestmentHero;
