import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Star } from 'lucide-react';
import { H2, H3, LargeParagraph, Paragraph, Caption } from '@/components/ui/typography';
import StatCard from '@/components/shared/StatCard';

const LandingpageOptimierungProof = () => {
  const caseStudies = [
    {
      company: "B2B SaaS Unternehmen",
      result: "+127% mehr qualifizierte Leads",
      description: "Durch optimierte Nutzerführung und klare CTAs."
    },
    {
      company: "E-Commerce Shop",
      result: "+89% höhere Conversion-Rate",
      description: "Vertrauenselemente und vereinfachter Checkout."
    },
    {
      company: "Dienstleistungsunternehmen",
      result: "+156% mehr Kontaktanfragen",
      description: "Strukturierte Landingpage mit klarem Value Proposition."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <H2 className="mb-4" alignment="center">
            Conversion-Ergebnisse, die überzeugen.
          </H2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <H3 className="mb-3">
                {study.company}
              </H3>
              <LargeParagraph className="text-primary font-bold mb-4">
                {study.result}
              </LargeParagraph>
              <Paragraph color="secondary">
                {study.description}
              </Paragraph>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="bg-background p-6 rounded-2xl border border-border inline-flex items-center gap-4">
            <img 
              src="https://d1b8w3i7vp2zxq.cloudfront.net/public/uploads/upload_5e5e76b4f54f41f99e3eb3ec6ac54abf.png"
              alt="Sortlist Badge"
              className="h-16 w-auto"
            />
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Caption color="secondary">
                Top-bewertete Agentur auf Sortlist
              </Caption>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungProof;
