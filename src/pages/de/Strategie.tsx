
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import StrategieFAQ from '@/components/strategy/StrategieFAQ';
import CTA from '@/components/CTA';

// SEO Text Section Component
const StrategieSEOText = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#0A1E2C] pt-12 pb-16 font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed" style={{ color: '#FFFFFF' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#FFFFFF' }}>Strategieberatung Mainz – Durchdachte Webkonzepte für nachhaltigen Erfolg</h2>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Als spezialisierte Strategieberatung für digitale Projekte entwickeln wir bei ooliv durchdachte Webkonzepte, die Ihre Geschäftsziele erreichen. Mit klarer Zielgruppendefinition, strukturierter Informationsarchitektur und nutzerorientierten Ansätzen schaffen wir die Basis für erfolgreiche Websites – in Mainz und darüber hinaus.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Jetzt Strategiegespräch vereinbaren
            </button>
            {" → "}
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold"
            >
              Kostenlose Erstberatung anfordern
            </button>
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Warum strategisches Webkonzept entscheidend ist</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Eine Website ohne Strategie ist wie ein Haus ohne Fundament. Unsere Strategieberatung adressiert typische Probleme und schafft nachhaltige Lösungen:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">Traffic ohne Conversion:</strong> Optimierung der Nutzerführung und Call-to-Actions.</li>
            <li><strong className="font-bold">Unklare Zielgruppenansprache:</strong> Entwicklung präziser Personas und Messaging.</li>
            <li><strong className="font-bold">Schlechte User Experience:</strong> Strukturierte Informationsarchitektur und intuitive Navigation.</li>
            <li><strong className="font-bold">Fehlende Messbarkeit:</strong> Definition klarer KPIs und Tracking-Strategien.</li>
          </ul>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Strategie vor Design – so entstehen Websites, die wirklich funktionieren.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Unser strategischer Ansatz im Detail</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Zielgruppen- & Marktanalyse:</strong><br />
            Detaillierte Analyse Ihrer Zielgruppe, Konkurrenzbetrachtung und Marktpositionierung für eine fundierte Strategiebasis.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Informationsarchitektur:</strong><br />
            Strukturierte Konzeption der Website-Hierarchie, Navigation und Content-Organisation für optimale Nutzerführung.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">User Experience Design:</strong><br />
            Entwicklung von User Journeys, Wireframes und Prototypen für eine intuitive und conversion-optimierte Nutzererfahrung.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Content-Strategie:</strong><br />
            Planung und Strukturierung von Inhalten, die Ihre Zielgruppe ansprechen und Ihre Geschäftsziele unterstützen.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Conversion-Optimierung:</strong><br />
            Strategische Platzierung von Call-to-Actions und Optimierung der Nutzerführung für maximale Conversion-Raten.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Strategieberatung für verschiedene Branchen</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Wir entwickeln branchenspezifische Strategien für optimale Ergebnisse:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">B2B-Unternehmen:</strong> Lead-Generation und fachspezifische Content-Strategien.</li>
            <li><strong className="font-bold">E-Commerce:</strong> Conversion-optimierte Shop-Strategien und Customer Journey Mapping.</li>
            <li><strong className="font-bold">Dienstleister:</strong> Vertrauensaufbau und lokale Sichtbarkeitsstrategien.</li>
            <li><strong className="font-bold">Start-ups:</strong> Skalierbare Strategien für wachsende Unternehmen.</li>
            <li><strong className="font-bold">Gesundheitswesen:</strong> Datenschutzkonforme und nutzerfreundliche Strategien.</li>
          </ul>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Jede Branche hat ihre Besonderheiten – unsere Strategien berücksichtigen das.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Messbare Erfolge durch strategische Planung</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Unsere strategische Herangehensweise liefert messbare Ergebnisse:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">Höhere Conversion-Raten:</strong> Durch optimierte Nutzerführung und zielgruppengerechte Ansprache.</li>
            <li><strong className="font-bold">Bessere User Experience:</strong> Intuitive Navigation und strukturierte Informationsarchitektur.</li>
            <li><strong className="font-bold">Steigende Sichtbarkeit:</strong> SEO-optimierte Content-Strategien und technische Grundlagen.</li>
            <li><strong className="font-bold">Nachhaltige Ergebnisse:</strong> Langfristig ausgerichtete Strategien für kontinuierliches Wachstum.</li>
          </ul>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Workshop-basierte Strategieentwicklung</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Unsere Strategieentwicklung erfolgt in strukturierten Workshops:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">Strategieworkshop:</strong> Gemeinsame Entwicklung der digitalen Strategie und Zieldefinition.</li>
            <li><strong className="font-bold">Zielgruppen-Workshop:</strong> Detaillierte Persona-Entwicklung und Nutzerverhalten-Analyse.</li>
            <li><strong className="font-bold">Content-Workshop:</strong> Planung und Strukturierung der Inhalte für optimale Wirkung.</li>
            <li><strong className="font-bold">UX-Workshop:</strong> Entwicklung der User Experience und Optimierung der Nutzerführung.</li>
          </ul>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Gemeinsam entwickeln wir Strategien, die zu Ihrem Unternehmen passen.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Von der Strategie zur Umsetzung</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Nach der Strategieentwicklung begleiten wir Sie bei der Umsetzung:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li>Webdesign und -entwicklung basierend auf der erarbeiteten Strategie</li>
            <li>Content-Erstellung nach dem entwickelten Content-Plan</li>
            <li>SEO-Optimierung entsprechend der Keyword-Strategie</li>
            <li>Performance-Monitoring und kontinuierliche Optimierung</li>
            <li>Schulung Ihres Teams für die eigenständige Weiterführung</li>
          </ul>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Häufige Fragen zur Strategieberatung</h3>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Wie lange dauert die Strategieentwicklung?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Je nach Projektumfang 2-6 Wochen für eine fundierte Strategieentwicklung.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Was unterscheidet eure Strategieberatung?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Workshop-basierte Entwicklung mit direkter Umsetzungsmöglichkeit – Strategie und Realisation aus einer Hand.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Arbeitet ihr nur mit großen Unternehmen?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Nein, wir entwickeln skalierbare Strategien für Unternehmen jeder Größe.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Wie messt ihr den Erfolg der Strategie?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Durch definierte KPIs, regelmäßiges Monitoring und datenbasierte Optimierung.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Strategische Websites, die funktionieren</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Eine durchdachte Strategie ist die Basis jeder erfolgreichen Website. Lassen Sie uns gemeinsam eine digitale Strategie entwickeln, die Ihre Geschäftsziele erreicht.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Jetzt Strategieberatung anfordern
            </button>
          </p>
          
          <ul className="list-none my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li>✅ Strategieentwicklung starten</li>
            <li>✅ Zielgruppe definieren</li>
            <li>✅ Erfolg messbar machen</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

const GermanStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<StrategieSEOText />}
    >
      <Helmet>
        <title>Webkonzept – Strategie für Ihre Website</title>
        <meta name="description" content="Durchdachtes Webkonzept von ooliv: Strategie und Struktur für erfolgreiche Websites. Wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen." />
      </Helmet>

      <StrategieHero />
      <StrategieBenefits />
      <StrategieProcess />
      <StrategieServices />
      <StrategieFAQ />
      
      {/* Footer CTA Section */}
      <CTA 
        title="Bereit für eine strategische Website?"
        subtitle="Lassen Sie uns gemeinsam eine digitale Strategie entwickeln, die Ihre Geschäftsziele erreicht."
        primaryCta="Strategiegespräch vereinbaren"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanStrategy;
