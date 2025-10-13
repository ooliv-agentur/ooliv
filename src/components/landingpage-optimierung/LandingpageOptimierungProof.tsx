import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Star } from 'lucide-react';

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conversion-Ergebnisse, die überzeugen.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {study.company}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">
                {study.result}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 inline-flex items-center gap-4">
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
              <p className="text-sm text-muted-foreground">
                Top-bewertete Agentur auf Sortlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungProof;
