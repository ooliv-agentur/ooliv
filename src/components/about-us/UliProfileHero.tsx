
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UliProfileHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden py-24 md:py-32">
      {/* Floating circles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="floating-circle slow w-32 h-32 top-20 left-10"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Profile Image Column */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/uli-profile.jpg" 
                  alt="Uli Schönleber - Digital Strategy Lead"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop';
                  }}
                />
              </div>
              
              {/* Credentials Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">16+</div>
                  <div className="text-sm">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content Column */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  Digital Strategy Lead
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                  Uli Schönleber
                </h1>
                
                <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                  Digital Strategy Lead · AI-Driven Consultant · UX & Product Advisor
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Seit 2008 transformiere ich digitale Ökosysteme für B2B-Unternehmen und führe multidisziplinäre Teams bei der strategischen Umsetzung komplexer digitaler Projekte.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Als strategischer Berater arbeite ich direkt mit C-Level Stakeholdern an der Schnittstelle von Business-Strategie, UX-Denken und AI-gestützten Workflows – von der Opportunity Map bis zur messbaren Umsetzung.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Projekte geleitet</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">16+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">KDA</div>
                  <div className="text-sm text-muted-foreground">Diploma Design</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  variant="default"
                  size="lg" 
                  className="group"
                  onClick={handleStartProject}
                >
                  Strategiegespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group" 
                  asChild
                >
                  <Link to="/referenzen">
                    Transformationen ansehen
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliProfileHero;
