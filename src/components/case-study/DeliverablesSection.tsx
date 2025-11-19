import React from 'react';
import { Package, Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface DeliverablesSectionProps {
  deliverables: CaseStudyData['deliverables'];
}

const DeliverablesSection = ({ deliverables }: DeliverablesSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Deliverables</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Konkrete Deliverables
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mb-12">
            Alle strategischen und operativen Assets, die im Projekt entwickelt und übergeben wurden.
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliverables.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.category}</h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default DeliverablesSection;
