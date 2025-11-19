import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { caseStudies } from '@/data/caseStudiesData';

const DetailedCaseStudiesSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Detailed Transformations</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Erfolgsgeschichten aus der Zusammenarbeit mit ooliv
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von Initial Situation bis zu konkreten Business Outcomes – vollständige Dokumentation 
              strategischer Transformationen mit KPIs, Prozess und ROI.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.slug}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <span className="text-xs font-medium text-primary">{caseStudy.projectType}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {caseStudy.subtitle}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium text-foreground">{caseStudy.industry}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{caseStudy.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-medium text-foreground">{caseStudy.investment}</span>
                  </div>
                </div>

                {/* Preview Outcomes */}
                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Key Outcomes:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {caseStudy.outcomes.metrics.slice(0, 3).map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.improvement}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={`/referenzen/${caseStudy.slug}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Vollständige Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Jede Case Study dokumentiert: Initial Situation → Strategic Approach → Deliverables → Measurable Outcomes → Client Testimonial
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DetailedCaseStudiesSection;
