
import React from 'react';
import { Target, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const challengeGroups = isGerman ? [
    {
      icon: Target,
      title: 'Strategie & Content-Erstellung',
      germanTitle: 'Strategie & Content-Erstellung',
      challenges: [
        'Fehlende Strategie und Zielgruppenanalyse',
        'Unklare Botschaften ohne Markenidentität',
        'Fehlende SEO-Optimierung (Keywords, Meta, Struktur)',
        'Unstrukturierte Inhalte ohne Storytelling',
        'Keine oder zu wenige Website-Inhalte'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'Visuelle Inkonsistenz (kein einheitliches visuelles Konzept)',
        'Schwache Visuals (nur Stock-Fotos)',
        'Fehlende Integration von Videos und Bildern in den Content-Flow'
      ]
    }
  ] : [
    {
      icon: Target,
      title: 'Strategy & Content Creation',
      germanTitle: 'Strategy & Content Creation',
      challenges: [
        'Missing strategy and target group analysis',
        'Unclear messages without brand identity',
        'Missing SEO optimization (keywords, meta, structure)',
        'Unstructured content without storytelling',
        'No or too few website content'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'Visual inconsistency (no cohesive visual concept)',
        'Weak visuals (only stock photos)',
        'Lack of integration of videos and images into content flow'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Typische Content-Herausforderungen — und wie wir sie lösen"
              : "Typical Content Challenges — And How We Solve Them"
            }
          </h2>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            {isGerman 
              ? "Als Content Agentur Mainz kennen wir die größten Stolpersteine, die Unternehmen beim digitalen Wachstum bremsen. Hier zeigen wir Ihnen, wie wir gemeinsam Content-Herausforderungen meistern."
              : "As a Content Agency in Mainz, we know the biggest stumbling blocks that slow down companies' digital growth. Here we show you how we master content challenges together."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {challengeGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-brand-backgroundAlt p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-brand-primary/10 mb-6">
                  <group.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-heading">
                    {isGerman ? group.germanTitle : group.title}
                  </h3>
                  <ul className="text-brand-text text-left space-y-3">
                    {group.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <span className="text-brand-primary mr-2 flex-shrink-0">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-brand-text font-medium">
            {isGerman 
              ? "ooliv als Content Agentur Mainz bietet maßgeschneiderte Lösungen für all diese Herausforderungen."
              : "ooliv as a Content Agency in Mainz offers tailored solutions for all these challenges."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;
