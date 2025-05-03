
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileEdit, Code, FileText, Link2, MapPin } from 'lucide-react';

const SEOServicesDE = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO-Leistungen für langfristiges Wachstum</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Keyword-Strategie</h3>
            <p className="text-brand-text">
              Tiefgreifende Recherche nach relevanten, branchenspezifischen und lokalen Suchbegriffen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileEdit className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">On-Page-Optimierung</h3>
            <p className="text-brand-text">
              Metadaten, URLs, Überschriften und strukturierter Content für bessere Rankings und UX.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Code className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technische SEO</h3>
            <p className="text-brand-text">
              Website-Geschwindigkeit, Core Web Vitals, saubere Indizierung – das Fundament für SEO-Erfolg.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Content-Optimierung</h3>
            <p className="text-brand-text">
              Verbesserung bestehender Inhalte oder Erstellung neuer Seiten basierend auf Nutzerbedürfnissen und Suchintention.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Link2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Link-Strategie</h3>
            <p className="text-brand-text">
              Strategische interne Verlinkung und nachhaltige Backlink-Kampagnen zum Aufbau von Autorität.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <MapPin className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Lokale SEO</h3>
            <p className="text-brand-text">
              Steigern Sie Ihre Sichtbarkeit in Mainz und im Rhein-Main-Gebiet: Google Business, Brancheneinträge, Verzeichnisse.
            </p>
          </div>
        </div>

        {/* AI-powered tools section - Removed emoji from heading */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-brand-heading">Tools als Unterstützung — nicht als Ersatz für Strategie</h3>
          <p className="text-brand-text mb-6">
            Wir nutzen branchenführende Tools zur Unterstützung unserer SEO-Strategien, aber unsere Expertise ist es, die Ergebnisse liefert.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Ahrefs</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Google Search Console</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">YoastSEO (WordPress)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">ChatGPT (für Inhalte)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Midjourney (für Visuals)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Sora (für Video)</div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/de/content-erstellung" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            Mehr zu On-Page-SEO & Backlink-Strategie
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOServicesDE;
