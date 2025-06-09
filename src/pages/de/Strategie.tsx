import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Search, Target, Monitor, ArrowUp } from 'lucide-react';

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
              Strategie & Konzept als Fundament Ihres digitalen Erfolgs
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Ohne eine klare Strategie verpuffen Marketing-Budgets. Mit einem soliden Konzept sorgen wir dafür, dass jeder Euro wirkt – von der ersten Idee bis zur Umsetzung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 012-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Zielgruppenanalyse & Marktverständnis</h3>
              <p className="text-brand-text">
                Wir analysieren, wer Ihre Kunden sind, wie sie online suchen und wie Sie sie am besten erreichen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Nutzerführung & Conversion</h3>
              <p className="text-brand-text">
                Wir definieren, wie Ihre Besucher geführt werden und wie Ihre Website aus Interessenten Kunden macht.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Messbare Ergebnisse & KPIs</h3>
              <p className="text-brand-text">
                Wir definieren messbare Ziele und sorgen für ein klares Tracking – damit Sie Ihren Erfolg jederzeit im Blick haben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced with Timeline */}
      <section className="py-20 bg-gradient-to-b from-medico-mint to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Unser strategischer Ansatz: Von der Analyse bis zur Umsetzung
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir begleiten Sie Schritt für Schritt – von der Analyse Ihrer aktuellen Website bis zur erfolgreichen Umsetzung.
            </p>
          </div>

          {/* Modern Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-medico-turquoise via-medico-yellow to-medico-turquoise rounded-full"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-medico-mint">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-medico-turquoise to-medico-darkGreen rounded-full flex items-center justify-center shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div className="pt-8 text-center">
                  <div className="w-8 h-8 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">1</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-heading">Analyse & Konzept</h3>
                  <p className="text-sm text-brand-text leading-relaxed">
                    Wir prüfen den Ist-Zustand, Ihre Zielgruppen und den Wettbewerb. Dazu entwickeln wir eine Sitemap und erste Wireframes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-medico-mint lg:mt-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-medico-yellow to-medico-turquoise rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-medico-darkGreen" />
                </div>
                <div className="pt-8 text-center">
                  <div className="w-8 h-8 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">2</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-heading">Strategie & Planung</h3>
                  <p className="text-sm text-brand-text leading-relaxed">
                    Wir definieren messbare Ziele, planen Maßnahmen und erstellen einen Projektplan.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-medico-mint">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-medico-turquoise to-medico-darkGreen rounded-full flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div className="pt-8 text-center">
                  <div className="w-8 h-8 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">3</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-heading">Design-Übergabe & Umsetzung</h3>
                  <p className="text-sm text-brand-text leading-relaxed">
                    Nach der Designfreigabe geht es in die Webentwicklung: sauber, performant und individuell.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-medico-mint lg:mt-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-medico-yellow to-medico-turquoise rounded-full flex items-center justify-center shadow-lg">
                  <ArrowUp className="w-8 h-8 text-medico-darkGreen" />
                </div>
                <div className="pt-8 text-center">
                  <div className="w-8 h-8 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">4</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-heading">Optimierung & Reporting</h3>
                  <p className="text-sm text-brand-text leading-relaxed">
                    Wir messen den Erfolg anhand definierter KPIs und optimieren kontinuierlich.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow connectors for mobile */}
            <div className="lg:hidden flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-medico-turquoise rounded-full"></div>
                <div className="w-8 h-0.5 bg-medico-turquoise"></div>
                <div className="w-2 h-2 bg-medico-turquoise rounded-full"></div>
                <div className="w-8 h-0.5 bg-medico-turquoise"></div>
                <div className="w-2 h-2 bg-medico-turquoise rounded-full"></div>
                <div className="w-8 h-0.5 bg-medico-turquoise"></div>
                <div className="w-2 h-2 bg-medico-turquoise rounded-full"></div>
              </div>
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
