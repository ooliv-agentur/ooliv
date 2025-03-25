
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanCareers = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Werde Teil unseres Teams</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Entdecke Möglichkeiten, deine Karriere mit uns weiterzuentwickeln
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Warum bei uns arbeiten?</h2>
            <p className="text-lg mb-6">
              Bei ooliv bauen wir ein Team aus leidenschaftlichen und talentierten Persönlichkeiten auf, die sich für die Erschaffung digitaler Erlebnisse begeistern, die einen Unterschied machen.
            </p>
            <p className="text-lg mb-6">
              Wir bieten ein kollaboratives und innovatives Umfeld, in dem du dich beruflich entwickeln, an spannenden Projekten arbeiten und einen bedeutenden Einfluss nehmen kannst.
            </p>
            <div className="space-y-4">
              {[
                'Flexible Remote-Arbeitsmöglichkeiten',
                'Wettbewerbsfähige Vergütung und Zusatzleistungen',
                'Kontinuierliches Lernen und Entwicklung',
                'Kollaboratives und unterstützendes Arbeitsumfeld'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Team-Kultur Bild</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Offene Stellen</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Frontend Entwickler',
                location: 'Remote',
                type: 'Vollzeit'
              },
              {
                title: 'UI/UX Designer',
                location: 'Remote',
                type: 'Vollzeit'
              },
              {
                title: 'SEO-Spezialist',
                location: 'Remote',
                type: 'Vollzeit'
              },
              {
                title: 'Digital Marketing Manager',
                location: 'Remote',
                type: 'Vollzeit'
              }
            ].map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="text-gray-500 flex flex-wrap gap-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0">
                    Details ansehen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-backgroundAlt rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Kein perfekter Treffer dabei?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Wir suchen immer nach talentierten Persönlichkeiten für unser Team. Sende uns deinen Lebenslauf!
          </p>
          <Button size="lg">Initiativbewerbung einreichen</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default GermanCareers;
