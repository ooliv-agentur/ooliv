
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid2X2, Sparkles, Code2, TrendingUp, CheckCircle } from 'lucide-react';
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
      link: '/strategie',
      icon: Grid2X2
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
      link: '/webdesign',
      icon: Sparkles
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
      link: '/webentwicklung',
      icon: Code2
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
      link: '/seo-optimierung',
      icon: TrendingUp
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
      link: '/strategy',
      icon: Grid2X2
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
      link: '/creation',
      icon: Sparkles
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
      link: '/implementation',
      icon: Code2
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
      link: '/optimization',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            {isGerman
              ? "Unser Content-Prozess – von der Strategie zur Umsetzung"
              : "Our Content Process – From Strategy to Implementation"
            }
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-card hover:shadow-cardHover transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-medico-mint rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  {step.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-brand-heading">
                    {isGerman ? "Was wir liefern:" : "What we deliver:"}
                  </h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-medico-turquoise mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-brand-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="link" 
                    className="text-medico-turquoise hover:text-green-700 p-0 h-auto font-medium" 
                    asChild
                  >
                    <Link to={step.link}>
                      {isGerman ? "Mehr erfahren" : "Learn more"}
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentProcessUnified;
