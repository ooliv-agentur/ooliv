import React from 'react';
import { Target, Video, CheckCircle } from 'lucide-react';
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
        'Fehlende Strategie und Zielgruppenbestimmung',
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
    <section className="py-20 bg-medico-mint/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Content-Probleme, die Sie kennen – und wie Sie sie lösen"
              : "Content Problems You Know — And How to Solve Them"
            }
          </h2>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            {isGerman 
              ? "Content kostet Zeit, Budget und Nerven – vor allem, wenn die Ergebnisse ausbleiben. Hier zeigen wir, was schief läuft und wie wir es besser machen."
              : "Content takes time, budget and nerves – especially when results don't show. Here's what goes wrong and how we fix it."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {challengeGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-card hover:shadow-cardHover transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mb-6">
                  <group.icon className="h-6 w-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-heading">
                    {isGerman ? group.germanTitle : group.title}
                  </h3>
                  <ul className="text-brand-text text-left space-y-3">
                    {group.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <CheckCircle className="h-3 w-3 text-accent-primary" />
                        </div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;
