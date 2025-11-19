import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Code, ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const WebDesignWhyUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Warum ooliv für Ihr Webdesign?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Die perfekte Kombination aus persönlicher Betreuung und Team-Expertise
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Uli's Personal Touch */}
          <Reveal delay={0.1}>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Uli Schönleber
                  </h3>
                  <p className="text-accent-primary font-semibold mb-4">
                    Ihr Webdesign-Lead
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>16+ Jahre Design-Expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>100+ erfolgreiche Webprojekte</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>Direkte Zusammenarbeit – kein Outsourcing</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Seit über 16 Jahren helfe ich B2B-Unternehmen, Websites zu gestalten, die nicht nur schön aussehen, sondern auch konvertieren. Dabei unterstützt mich ein Team von Spezialisten, die technisch auf höchstem Niveau arbeiten. Als Ihr persönlicher Ansprechpartner begleite ich Sie von der ersten Idee bis zum erfolgreichen Launch.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Team Support */}
          <Reveal delay={0.2}>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Unterstützt von Spezialisten
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">UX/UI Designer</h4>
                    <p className="text-sm text-muted-foreground">
                      Conversion-optimierte Interfaces, die Besucher zu Kunden machen
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Responsive, Performance-optimiert und technisch auf höchstem Niveau
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Content Strategist</h4>
                    <p className="text-sm text-muted-foreground">
                      SEO-optimierte Texte, die Ihre Zielgruppe ansprechen
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">+180%</div>
                    <div className="text-xs text-muted-foreground">Lead-Qualität</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">95%</div>
                    <div className="text-xs text-muted-foreground">Weiterempfehlung</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">4.9/5</div>
                    <div className="text-xs text-muted-foreground">Design-Zufriedenheit</div>
                  </div>
                </div>
              </div>

              <Link 
                to="/ueber-uns" 
                className="inline-flex items-center gap-2 text-accent-primary hover:gap-3 transition-all font-semibold"
              >
                Mehr über unser Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WebDesignWhyUs;
