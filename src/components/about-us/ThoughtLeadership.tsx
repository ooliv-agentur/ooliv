
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
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/blog">
                <Button size="lg" className="group">
                  Strategic Insights entdecken
                  <BookOpen className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <a 
                href="https://www.linkedin.com/in/uli-schoenleber/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Folgen Sie mir auf LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
