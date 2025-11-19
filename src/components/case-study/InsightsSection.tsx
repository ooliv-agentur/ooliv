import React from 'react';
import { Lightbulb } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface InsightsSectionProps {
  insights: CaseStudyData['insights'];
}

const InsightsSection = ({ insights }: InsightsSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Key Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Learnings & Insights
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mb-12">
            Die wichtigsten strategischen Erkenntnisse aus diesem Projekt.
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <Lightbulb className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{insight.title}</h3>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default InsightsSection;
