
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const Strategie = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const strategieFaqs = [
    {
      question: "Wie entwickelt ihr eine passende Strategie für mein Unternehmen?",
      answer: "Wir beginnen mit einer gründlichen Analyse Ihrer Zielgruppen, Mitbewerber und Geschäftsziele. Darauf aufbauend entwickeln wir eine maßgeschneiderte Digitalstrategie, die messbare Ergebnisse liefert."
    },
    {
      question: "Was beinhaltet eine UX-Analyse?",
      answer: "Wir analysieren das Nutzerverhalten auf Ihrer Website, identifizieren Optimierungspotentiale und entwickeln Lösungen für eine bessere User Experience und höhere Conversion-Raten."
    },
    {
      question: "Wie lange dauert die Strategieentwicklung?",
      answer: "Eine fundierte Strategieentwicklung dauert in der Regel 2-4 Wochen, je nach Komplexität Ihres Geschäftsmodells und der gewünschten Tiefe der Analyse."
    },
    {
      question: "Arbeitet ihr auch mit bestehenden Websites?",
      answer: "Ja, wir analysieren gerne Ihre bestehende Website und entwickeln Optimierungsstrategien. Oft können bereits kleine Änderungen große Wirkung erzielen."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Digitalstrategie & UX-Beratung Mainz | ooliv</title>
        <meta name="description" content="Strategische Digitalberatung und UX-Optimierung in Mainz. Datenbasierte Entscheidungen für messbare Erfolge im digitalen Marketing." />
      </Helmet>

      <StrategieHero />

      {/* Strategy Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Strategie ist der Grundstein Ihres digitalen Erfolgs
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Ohne klare Strategie verpuffen Marketing-Budgets. Wir sorgen dafür, dass jeder Euro zielgerichtet eingesetzt wird.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Zielgruppenanalyse</h3>
              <p className="text-brand-text">
                Wir identifizieren genau, wer Ihre Kunden sind und wie sie online nach Ihren Lösungen suchen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">UX-Optimierung</h3>
              <p className="text-brand-text">
                Nutzerfreundliche Websites, die Besucher zu Kunden machen. Basierend auf bewährten UX-Prinzipien.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Messbare Ergebnisse</h3>
              <p className="text-brand-text">
                Klare KPIs und regelmäßiges Tracking sorgen dafür, dass Sie den ROI Ihrer Investition sehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-medico-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Unser strategischer Ansatz
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Systematisch von der Analyse zur Umsetzung
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Analyse</h3>
              <p className="text-sm text-brand-text">Ist-Zustand, Zielgruppen, Wettbewerb</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Strategie</h3>
              <p className="text-sm text-brand-text">Ziele definieren, Maßnahmen planen</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Umsetzung</h3>
              <p className="text-sm text-brand-text">Schrittweise Implementierung</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-2">Optimierung</h3>
              <p className="text-sm text-brand-text">Kontinuierliche Verbesserung</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ customFaqs={strategieFaqs} />
      <CTA 
        title="Bereit für eine strategische Digitalberatung?"
        subtitle="Lassen Sie uns gemeinsam eine Strategie entwickeln, die messbare Ergebnisse liefert."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Kontakt aufnehmen"
      />
    </PageLayout>
  );
};

export default Strategie;
