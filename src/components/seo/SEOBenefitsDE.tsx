
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Clock, FileText, ShieldAlert } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const SEOBenefitsDE = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO-Probleme, die Umsatz kosten – wir lösen sie</h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Unsere SEO-Dienstleistungen aus Mainz adressieren typische Sichtbarkeitsprobleme – und schaffen messbare Ergebnisse.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <BarChart2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Traffic, aber keine Leads</h3>
            <p className="text-brand-text mb-4">
              Wir optimieren Inhalte und Struktur für Suchintention & Conversion – für Besucher, die handeln.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">SEO dauert zu lange</h3>
            <p className="text-brand-text mb-4">
              Wir kombinieren schnelle Ergebnisse mit langfristiger Wirkung – für sichtbaren ROI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Veraltete Inhalte & schlechte Struktur</h3>
            <p className="text-brand-text mb-4">
              Wir restrukturieren Seiten und Inhalte suchmaschinenfreundlich und nutzerzentriert.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technische Fehler bremsen Rankings</h3>
            <p className="text-brand-text mb-4">
              Wir analysieren Ladezeit, Indexierung und Core Web Vitals – und sorgen für sauberen Code.
            </p>
          </div>
        </StaggerReveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-10">
            <Link to="/content-erstellung" className="inline-flex items-center text-brand-primary font-medium hover:underline">
              Mehr zu Content-Erstellung & Webentwicklung
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SEOBenefitsDE;
