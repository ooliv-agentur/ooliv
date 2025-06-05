
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Users, TrendingUp, CheckCircle } from 'lucide-react';
import CTA from "@/components/CTA";

const Strategie = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Strategie & UX - Datenbasierte Entscheidungen für Ihren Erfolg</title>
        <meta
          name="description"
          content="Strategische UX-Planung und datenbasierte Entscheidungen für B2B-Websites. Klare Struktur, optimierte User Experience und messbare Ergebnisse."
        />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-medico-mint pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medico-darkGreen mb-6 leading-tight">
                Strategie & UX
              </h1>
              <p className="text-xl text-medico-darkGreen mb-10 leading-relaxed">
                Klare Struktur, datenbasierte Entscheidungen, B2B-ready – für Websites, die wirklich funktionieren.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-medico-darkGreen mb-6">
                  Warum Strategie vor Design kommt
                </h2>
                <p className="text-lg text-medico-darkGreen mb-6 leading-relaxed">
                  Bevor wir auch nur einen Pixel gestalten, verstehen wir Ihre Ziele, Ihre Zielgruppe und Ihren Markt. 
                  Nur so entstehen Websites, die nicht nur schön aussehen, sondern auch messbare Ergebnisse liefern.
                </p>
                <p className="text-medico-darkGreen leading-relaxed">
                  Unsere strategische Herangehensweise sorgt dafür, dass jede Entscheidung – von der Navigation 
                  bis zur Content-Struktur – auf fundierten Daten und bewährten UX-Prinzipien basiert.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-medico-mint p-6 rounded-lg">
                  <Target className="h-8 w-8 text-medico-turquoise mb-4" />
                  <h3 className="font-bold text-medico-darkGreen mb-2">Zielgruppenanalyse</h3>
                  <p className="text-sm text-medico-darkGreen">Verstehen, wer Ihre Kunden sind</p>
                </div>
                <div className="bg-medico-mint p-6 rounded-lg">
                  <Users className="h-8 w-8 text-medico-turquoise mb-4" />
                  <h3 className="font-bold text-medico-darkGreen mb-2">User Journey Mapping</h3>
                  <p className="text-sm text-medico-darkGreen">Optimierte Nutzererfahrung planen</p>
                </div>
                <div className="bg-medico-mint p-6 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-medico-turquoise mb-4" />
                  <h3 className="font-bold text-medico-darkGreen mb-2">Conversion-Optimierung</h3>
                  <p className="text-sm text-medico-darkGreen">Messbare Erfolge maximieren</p>
                </div>
                <div className="bg-medico-mint p-6 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-medico-turquoise mb-4" />
                  <h3 className="font-bold text-medico-darkGreen mb-2">A/B Testing</h3>
                  <p className="text-sm text-medico-darkGreen">Datenbasierte Verbesserungen</p>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-medico-mint rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center text-medico-darkGreen mb-12">
                Unser strategischer Prozess
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-medico-darkGreen mb-3">Analyse & Research</h3>
                  <p className="text-medico-darkGreen">
                    Wir analysieren Ihre Zielgruppe, Konkurrenz und Marktposition für eine fundierte Basis.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-medico-darkGreen mb-3">Konzept & Wireframing</h3>
                  <p className="text-medico-darkGreen">
                    Entwicklung einer klaren Informationsarchitektur und User Experience Strategie.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-medico-turquoise text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-medico-darkGreen mb-3">Testing & Optimierung</h3>
                  <p className="text-medico-darkGreen">
                    Kontinuierliche Verbesserung basierend auf Nutzerdaten und Performance-Metriken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          lightBackground={true}
          title="Bereit für eine strategische Website-Planung?"
          subtitle="Lassen Sie uns gemeinsam eine datenbasierte Strategie für Ihren Online-Erfolg entwickeln."
          primaryCta="Strategiegespräch vereinbaren"
        />
      </PageLayout>
    </>
  );
};

export default Strategie;
