import React from 'react';
import { AlertCircle, TrendingDown } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface InitialSituationProps {
  data: CaseStudyData['initialSituation'];
}

const InitialSituation = ({ data }: InitialSituationProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Initial Situation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Die Herausforderung
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Reveal>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Challenge</h3>
              <p className="text-muted-foreground">{data.challenge}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Context</h3>
              <p className="text-muted-foreground">{data.businessContext}</p>
            </div>
          </Reveal>
        </div>

        {/* Pain Points */}
        <Reveal>
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Pain Points</h3>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {data.painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </div>
          ))}
        </StaggerReveal>

        {/* Initial Metrics */}
        <Reveal>
          <h3 className="text-2xl font-bold text-foreground mb-6">Initial Metrics</h3>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.metrics.map((metric, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-destructive/30">
              <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
              <div className="text-3xl font-bold text-destructive mb-1">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.context}</div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default InitialSituation;
