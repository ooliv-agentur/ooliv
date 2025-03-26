
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileEdit, Code, FileText, Link2, MapPin } from 'lucide-react';

const SEOServicesDE = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">Unsere SEO-Leistungen – strategisch, lokal, skalierbar</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Keyword-Strategie</h3>
            <p className="text-brand-text">
              Tiefgreifende Recherche mit Fokus auf relevante, lokal & branchenspezifische Suchbegriffe.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileEdit className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Onpage-Optimierung</h3>
            <p className="text-brand-text">
              Strukturierte Inhalte, Meta-Daten, URLs und Headlines – für bessere Rankings & UX.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Code className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technisches SEO</h3>
            <p className="text-brand-text">
              Behebung von Indexierungsproblemen, Verbesserung der Ladezeit, Core Web Vitals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Content-Optimierung</h3>
            <p className="text-brand-text">
              Inhalte überarbeiten oder neu erstellen – auf Basis von Suchintention & Business-Zielen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Link2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Linkstrategie</h3>
            <p className="text-brand-text">
              Strukturierte interne Verlinkung + gezielter Backlink-Aufbau mit Fokus auf Autorität.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <MapPin className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Lokale SEO</h3>
            <p className="text-brand-text">
              Optimierung für Mainz und die Rhein-Main-Region: Google Business, Listings, Citations.
            </p>
          </div>
        </div>

        {/* AI-powered tools section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-brand-heading">⚙️ Tools & Tech-Stack</h3>
          <p className="text-brand-text mb-6">
            Wir setzen auf Tools zur Unterstützung – nicht als Ersatz für strategische Expertise.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Ahrefs</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Google Search Console</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">YoastSEO</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">ChatGPT (Text)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Midjourney (Visuals)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Sora (Video)</div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/de/content-erstellung" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            Mehr zu Onpage-Optimierung & Backlinks
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOServicesDE;
