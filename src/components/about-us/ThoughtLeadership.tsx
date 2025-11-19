
import React from 'react';
import { BookOpen, TrendingUp, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  const expertiseAreas = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Strategic Frameworks",
      description: "16+ Jahre entwickelte Methodologie für Digital Strategy, Product Discovery und UX Transformation"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Measurable Outcomes",
      description: "Best Practices für KPI-Frameworks, Performance Analytics und datengetriebene Strategien"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "C-Level Advisory",
      description: "Strategic Advisory Insights für digitale Transformation und Implementation Leadership"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "AI Integration",
      description: "Praxiserprobte Strategien für AI-enabled Workflows, LLM Integration und ML Pipelines"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Thought Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            16+ Jahre dokumentierte Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            146 veröffentlichte Artikel über Digital Strategy, Product & UX Leadership und AI-Integration – praxiserprobte Insights und Strategic Frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-2xl border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">146</div>
                <div className="text-sm text-muted-foreground">Fachbeiträge</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">16+</div>
                <div className="text-sm text-muted-foreground">Jahre Expertise</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Von Strategic Discovery bis AI Integration
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dokumentierte Strategic Frameworks, Best Practices und Methodologies aus 16+ Jahren Digital Strategy Leadership – keine Theorie, sondern praxiserprobte Insights aus 100+ Transformationsprojekten.
            </p>
            
            <Link to="/blog">
              <Button size="lg" className="group">
                Strategic Insights entdecken
                <BookOpen className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
