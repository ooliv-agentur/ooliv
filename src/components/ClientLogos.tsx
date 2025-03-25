
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ClientLogosProps {
  title?: string;
  description?: string;
}

const ClientLogos = ({ title, description }: ClientLogosProps = {}) => {
  const { language } = useLanguage();
  
  // Basecamp text based on language
  const basecampText = language === 'de' 
    ? "Wir arbeiten mit Basecamp – für klare Aufgaben, smarte Kommunikation und vollständige Transparenz im Projektverlauf."
    : "We use Basecamp to manage tasks, communication, and feedback — with full transparency and efficiency.";
  
  return (
    <section className="py-16 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-brand-heading mb-3">
            {title || "Trusted by Leading Companies"}
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            {description || "We're proud of our longstanding client relationships with notable companies across industries."}
          </p>
        </div>
        
        {/* Client logos would go here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-32 h-16 bg-white/50 rounded-md flex items-center justify-center">
              <div className="w-24 h-10 bg-gray-200/50 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Basecamp information */}
        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-brand-text italic max-w-3xl mx-auto">
            {basecampText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
