import React from 'react';
import { ArrowLeft, Briefcase, Building2, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface CaseStudyHeroProps {
  caseStudy: CaseStudyData;
}

const CaseStudyHero = ({ caseStudy }: CaseStudyHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link to="/referenzen">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Alle Transformationen
            </Button>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{caseStudy.projectType}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {caseStudy.title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mb-12">
            {caseStudy.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            <div className="bg-card p-6 rounded-xl border border-border">
              <Building2 className="w-6 h-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Client</div>
              <div className="font-semibold text-foreground">{caseStudy.client}</div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <Briefcase className="w-6 h-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Industry</div>
              <div className="font-semibold text-foreground">{caseStudy.industry}</div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Duration</div>
              <div className="font-semibold text-foreground">{caseStudy.duration}</div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <DollarSign className="w-6 h-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground mb-1">Investment</div>
              <div className="font-semibold text-foreground">{caseStudy.investment}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudyHero;
