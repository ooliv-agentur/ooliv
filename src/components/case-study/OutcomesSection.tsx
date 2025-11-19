import React from 'react';
import { TrendingUp, TrendingDown, Smartphone, DollarSign, Users, Clock, MousePointer, Activity, Target, ThumbsUp, MessageCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface OutcomesSectionProps {
  data: CaseStudyData['outcomes'];
}

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  TrendingDown,
  Smartphone,
  DollarSign,
  Users,
  Clock,
  MousePointer,
  Activity,
  Target,
  ThumbsUp,
  MessageCircle,
};

const OutcomesSection = ({ data }: OutcomesSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Measurable Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Messbare Business Outcomes
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mb-12">
            {data.summary}
          </p>
        </Reveal>

        {/* Metrics Grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.metrics.map((metric, index) => {
            const Icon = metric.icon ? iconMap[metric.icon] || TrendingUp : TrendingUp;
            
            return (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                
                <div className="flex items-baseline gap-3 mb-2">
                  <div className="text-sm text-muted-foreground line-through">{metric.before}</div>
                  <div className="text-2xl font-bold text-foreground">{metric.after}</div>
                </div>
                
                <div className="text-lg font-semibold text-primary">{metric.improvement}</div>
              </div>
            );
          })}
        </StaggerReveal>

        {/* Business Impact */}
        <Reveal>
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Business Impact</h3>
            
            <div className="space-y-3">
              {data.businessImpact.map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OutcomesSection;
