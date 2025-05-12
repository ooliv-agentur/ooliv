
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const GermanSolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">
              Wir entwickeln Websites, die Ihr Business voranbringen – mit Strategie, Expertise und Technologie.
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Unsere Leistungen umfassen: 
              <Link to="/de/webdesign" className="text-brand-primary hover:underline"> Webdesign</Link>, 
              <Link to="/de/webentwicklung" className="text-brand-primary hover:underline"> Webentwicklung</Link>, 
              <Link to="/de/content-erstellung" className="text-brand-primary hover:underline"> Content-Erstellung</Link>, 
              <Link to="/de/seo-optimierung" className="text-brand-primary hover:underline"> SEO-Optimierung</Link>, 
              <Link to="/de/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> und 
              <Link to="/de/ki-technologien" className="text-brand-primary hover:underline"> KI-Technologien</Link>.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="group" asChild>
                <Link to="/de/ueber-ooliv">
                  Mehr über den Ablauf erfahren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
