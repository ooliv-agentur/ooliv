
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentProcessUnified = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const steps = isGerman ? [
    {
      number: "01",
      title: 'Analyse & Strategie',
      description: 'Zielgruppenanalyse, Keyword-Recherche, Content-Audit und strategische Planung.',
      deliverables: [
        'Content-Strategie-Dokument',
        'Keyword-Map & SEO-Plan',
        'Zielgruppen-Personas',
        'Content-Kalender'
      ],
      link: '/strategie'
    },
    {
      number: "02", 
      title: 'Kreation & Design',
      description: 'Content-Erstellung: Texte, Bilder, Videos, Grafiken – alles abgestimmt auf Ihre Ziele.',
      deliverables: [
        'Website-Texte & Blog-Artikel',
        'Visuelle Assets (Bilder, Grafiken)',
        'Video-Content',
        'Social Media Content'
      ],
      link: '/kreation'
    },
    {
      number: "03",
      title: 'Umsetzung & Integration', 
      description: 'Technische Integration in Ihre Website, CMS-Setup und Performance-Optimierung.',
      deliverables: [
        'CMS-Integration',
        'SEO-technische Umsetzung',
        'Performance-Optimierung',
        'Mobile Optimierung'
      ],
      link: '/umsetzung'
    },
    {
      number: "04",
      title: 'Optimierung & Weiterentwicklung',
      description: 'Kontinuierliche Analyse, A/B-Testing und strategische Weiterentwicklung.',
      deliverables: [
        'Performance-Reports',
        'A/B-Testing-Ergebnisse',
        'Optimierungsempfehlungen',
        'Monatliche Content-Updates'
      ],
      link: '/optimierung'
    }
  ] : [
    {
      number: "01",
      title: 'Analysis & Strategy',
      description: 'Target audience analysis, keyword research, content audit and strategic planning.',
      deliverables: [
        'Content strategy document',
        'Keyword map & SEO plan',
        'Target audience personas',
        'Content calendar'
      ],
      link: '/strategy'
    },
    {
      number: "02",
      title: 'Creation & Design', 
      description: 'Content creation: texts, images, videos, graphics – all aligned with your goals.',
      deliverables: [
        'Website copy & blog articles',
        'Visual assets (images, graphics)',
        'Video content',
        'Social media content'
      ],
      link: '/creation'
    },
    {
      number: "03",
      title: 'Implementation & Integration',
      description: 'Technical integration into your website, CMS setup and performance optimization.',
      deliverables: [
        'CMS integration',
        'Technical SEO implementation',
        'Performance optimization',
        'Mobile optimization'
      ],
      link: '/implementation'
    },
    {
      number: "04",
      title: 'Optimization & Development',
      description: 'Continuous analysis, A/B testing and strategic development.',
      deliverables: [
        'Performance reports',
        'A/B testing results',
        'Optimization recommendations',
        'Monthly content updates'
      ],
      link: '/optimization'
    }
  ];

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
          {isGerman
            ? "Unser Content-Prozess – von der Strategie zur Umsetzung"
            : "Our Content Process – From Strategy to Implementation"
          }
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-card hover:shadow-cardHover transition-shadow border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">
                    {step.title}
                  </h3>
                  <p className="text-brand-text mb-4">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-brand-heading">
                  {isGerman ? "Was wir liefern:" : "What we deliver:"}
                </h4>
                <ul className="space-y-2">
                  {step.deliverables.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-brand-primary mr-3 flex-shrink-0 mt-2"></div>
                      <span className="text-brand-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" asChild className="w-full">
                <Link to={step.link} className="flex items-center justify-center gap-2">
                  {isGerman ? "Mehr erfahren" : "Learn more"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProcessUnified;
