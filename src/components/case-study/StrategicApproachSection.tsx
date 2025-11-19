import React from 'react';
import { Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface StrategicApproachSectionProps {
  data: CaseStudyData['strategicApproach'];
}

const StrategicApproachSection = ({ data }: StrategicApproachSectionProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Strategic Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Der strategische Ansatz
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mb-12">
            {data.overview}
          </p>
        </Reveal>

        {/* Phases */}
        <StaggerReveal className="space-y-8">
          {data.phases.map((phase, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-3">
                    <span className="text-xs font-medium text-primary">{phase.phase}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{phase.duration}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{phase.description}</p>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground mb-3">Key Activities:</div>
                {phase.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Process Summary */}
        <Reveal>
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Strategic Framework</h3>
            </div>
            <p className="text-muted-foreground">
              Der strukturierte Ansatz von Discovery über Strategy Development bis zur Implementation 
              stellte sicher, dass jede Entscheidung evidenzbasiert und auf messbare Outcomes ausgerichtet war.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StrategicApproachSection;
