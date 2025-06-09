
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const steps = isGerman ? [
    {
      number: "01",
      title: 'Strategie & Kickoff',
      description: 'Ziele definieren, Tonalität festlegen, SEO-Recherche (z. B. mit Ahrefs).'
    },
    {
      number: "02",
      title: 'Erstellung & Design',
      description: 'Inhalte entwickeln – Texte, Bilder, Videos – mit Fokus auf UX & Conversion.'
    },
    {
      number: "03",
      title: 'Review & Integration',
      description: 'Freigabe durch Sie, Einbindung über uns oder Ihr CMS.'
    },
    {
      number: "04",
      title: 'Testing & Launch',
      description: 'SEO-Checks, Performance, Struktur – dann Go Live.'
    },
    {
      number: "05",
      title: 'Laufende Content-Pakete',
      description: 'Monatliche Pakete zur Pflege, Optimierung & strategischen Weiterentwicklung.'
    }
  ] : [
    {
      number: "01",
      title: 'Strategy & Kickoff',
      description: 'We start by understanding your goals, brand tone, and doing SEO research (using Ahrefs) to ensure we\'re on the right track.'
    },
    {
      number: "02",
      title: 'Creation & Design',
      description: 'We create your content, including copy, visuals, and video — all designed for conversion and user experience.'
    },
    {
      number: "03",
      title: 'Review & Integration',
      description: 'You review the content, and we integrate it into your site — either directly or through your CMS.'
    },
    {
      number: "04",
      title: 'Testing & Launch',
      description: 'We ensure SEO checks, speed, and structure before we go live.'
    },
    {
      number: "05",
      title: 'Ongoing Content Support',
      description: 'After launch, we offer monthly content packages to keep your site fresh and aligned with your SEO and business goals.'
    }
  ];

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
          {isGerman
            ? "Unser Kampagnen-Prozess – von Strategie bis Skalierung"
            : "Our Campaign Process – From Strategy to Growth"
          }
        </h2>
        
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 pt-12 h-full shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary relative">
                <div className="absolute -top-7 left-6 h-14 w-14 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="mt-3">
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile and Tablet Version with native scrolling */}
        <div className="lg:hidden">
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {steps.map((step, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 pt-12 shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary relative">
                  <div className="absolute -top-7 left-6 h-14 w-14 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                    <p className="text-brand-text">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional link at the bottom */}
        <div className="text-center mt-10">
          <Button variant="link" asChild className="group">
            <Link to={isGerman ? "/webentwicklung" : "/web-development"} className="flex items-center gap-2 text-brand-primary">
              {isGerman ? "Mehr über unsere Landingpages & Webentwicklung" : "Learn more about our landing pages & web development"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
