
import React from 'react';
import { Target, FileText, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const challengeGroups = isGerman ? [
    {
      icon: Target,
      title: 'Content Strategy Challenges',
      germanTitle: 'Content-Strategie-Herausforderungen',
      challenges: [
        'Fehlende Strategie und Zielgruppenanalyse',
        'Unklare Botschaften ohne Markenidentität',
        'Mangelnde einheitliche Struktur für SEO und Conversion'
      ]
    },
    {
      icon: FileText,
      title: 'Content Creation Challenges',
      germanTitle: 'Content-Erstellungs-Herausforderungen',
      challenges: [
        'Keine oder zu wenige Website-Inhalte',
        'Unstrukturierte Inhalte ohne Storytelling',
        'Fehlende SEO-Optimierung (Keywords, Meta, Struktur)'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video Challenges',
      germanTitle: 'Visuals & Video-Herausforderungen',
      challenges: [
        'Visuelle Inkonsistenz (kein einheitliches visuelles Konzept)',
        'Schwache Visuals und Videos (z. B. nur Stock-Fotos)',
        'Fehlende Integration von Bildern, Videos und Animationen in den Content-Flow'
      ]
    }
  ] : [
    {
      icon: Target,
      title: 'Content Strategy Challenges',
      germanTitle: 'Content Strategy Challenges',
      challenges: [
        'Missing strategy and target group analysis',
        'Unclear messages without brand identity',
        'Lack of consistent structure for SEO and conversion'
      ]
    },
    {
      icon: FileText,
      title: 'Content Creation Challenges',
      germanTitle: 'Content Creation Challenges',
      challenges: [
        'No or too few website content',
        'Unstructured content without storytelling',
        'Missing SEO optimization (keywords, meta, structure)'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video Challenges',
      germanTitle: 'Visuals & Video Challenges',
      challenges: [
        'Visual inconsistency (no cohesive visual concept)',
        'Weak visuals and videos (e.g., only stock photos)',
        'Lack of integration of images, videos, and animations into content flow'
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Probleme, die Ihr Business ausbremsen können – und wie wir sie lösen"
              : "Problems That Can Slow Down Your Business – And How We Solve Them"
            }
          </h2>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            {isGerman 
              ? "Als Content Agentur Mainz lösen wir die häufigsten Content-Herausforderungen, die Unternehmen daran hindern, online erfolgreich zu sein:"
              : "As a Content Agency in Mainz, we solve the most common content challenges that prevent businesses from succeeding online:"
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challengeGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
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
