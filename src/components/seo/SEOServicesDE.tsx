
import React from 'react';
import { Search, FileEdit, Code, FileText } from 'lucide-react';

const SEOServicesDE = () => {
  return (
    <section className="py-20 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO-Services für nachhaltigen Erfolg</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Unsere SEO-Leistungen decken alle relevanten Bereiche ab – von Strategie bis Technik – für messbare Erfolge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <Search className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading text-center">Keyword-Strategie</h3>
            <p className="text-brand-text text-center">
              Wir finden die richtigen Suchbegriffe für Ihr Business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <FileEdit className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading text-center">On-Page-Optimierung</h3>
            <p className="text-brand-text text-center">
              Titel, Struktur und Content – optimiert für User und Google.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading text-center">Technische SEO</h3>
            <p className="text-brand-text text-center">
              Schnell, indexierbar, zukunftssicher.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading text-center">Content-Optimierung</h3>
            <p className="text-brand-text text-center">
              Inhalte, die gefunden werden und überzeugen.
            </p>
          </div>
        </div>

        {/* AI-powered tools section */}
        <div className="mt-24 bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto border-l-4 border-brand-primary">
          <h3 className="text-2xl font-bold mb-4 text-brand-heading">Tools als Unterstützung — nicht als Ersatz für Strategie</h3>
          <p className="text-brand-text mb-6">
            Wir nutzen branchenführende Tools zur Unterstützung unserer SEO-Strategien, aber unsere Expertise ist es, die Ergebnisse liefert. 
            Mehr zu SEO-Best-Practices finden Sie in den{' '}
            <a 
              href="https://developers.google.com/search/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline font-medium"
            >
              Google Search Guidelines
            </a>{' '}
            und bei{' '}
            <a 
              href="https://moz.com/learn/seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline font-medium"
            >
              Moz SEO Learning Center
            </a>.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
              <a 
                href="https://ahrefs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                Ahrefs
              </a>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
              <a 
                href="https://search.google.com/search-console" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                Google Search Console
              </a>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">ChatGPT (für Inhalte)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Midjourney (für Visuals)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Sora (für Video)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServicesDE;
