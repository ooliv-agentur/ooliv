import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const WebsiteRelaunchSEO = () => {
  const benefits = [
    "Analyse & Planung innerhalb von 48 h",
    "UX und Design strategisch verbunden",
    "Technisch saubere Umsetzung und SEO-Vorbereitung"
  ];

  return (
    <AnimatedSection className="py-20 bg-[#0B1C2A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Website Relaunch Agentur – professionelle Neugestaltung mit Strategie.
        </h2>
        
        <div className="prose prose-lg prose-invert max-w-none mb-8">
          <p className="leading-relaxed mb-6">
            Ein Website-Relaunch ist mehr als nur ein neues Design – es ist die Neuausrichtung Ihrer digitalen Präsenz. Viele Unternehmen haben Websites, die technisch funktionieren, aber ihre Geschäftsziele nicht mehr unterstützen. Ein strategisch geplanter Relaunch schafft die Grundlage für nachhaltiges Wachstum.
          </p>
          <p className="leading-relaxed mb-6">
            Bei ooliv entwickeln wir ganzheitliche Relaunch-Konzepte, die Strategie, User Experience und technische Exzellenz verbinden. Von der initialen Analyse über die Strukturplanung bis zur visuellen Gestaltung – wir begleiten Sie durch jeden Schritt. Das Ergebnis: eine moderne, conversion-optimierte Website, die Ihre Marke authentisch repräsentiert und messbare Geschäftsergebnisse liefert.
          </p>
          <p className="leading-relaxed">
            Unser kostenloses Relaunch-Konzept gibt Ihnen einen klaren Überblick über Potenziale und Optimierungsansätze. Sie erhalten eine fundierte Analyse Ihrer aktuellen Website sowie konkrete Empfehlungen für Struktur, Design und Technologie – ohne Risiko und vollständig unverbindlich.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchSEO;
