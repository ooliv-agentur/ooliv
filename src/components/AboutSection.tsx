
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutSectionProps {
  title?: string;
  description?: string;
  values?: string[];
  additionalText?: string;
}

const AboutSection = ({ title, description, values, additionalText }: AboutSectionProps) => {
  const { language } = useLanguage();
  
  // Basecamp text based on language
  const basecampText = language === 'de' 
    ? "Wir nutzen Basecamp als zentrale Plattform. Hier laufen Kommunikation, Aufgaben und Dateien zusammen – DSGVO-konform, transparent und effizient."
    : "We use Basecamp as our central project hub. All tasks, feedback, and files are shared transparently — GDPR-compliant and accessible to everyone involved.";
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {title || "About ooliv"}
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            {description || "We're a specialized digital agency based in Mainz, creating high-quality websites and digital solutions for demanding clients since 2008. Our team combines strategic thinking with technical expertise and creative flair."}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {values && values.map((value, index) => (
              <div 
                key={index} 
                className="bg-brand-background p-6 rounded-lg text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-brand-primary" />
                </div>
                <p className="font-semibold text-brand-heading">{value}</p>
              </div>
            ))}
          </div>
          
          {additionalText && (
            <p className="text-center mt-8 text-brand-text">
              {additionalText}
            </p>
          )}
          
          <div className="mt-12 p-6 bg-brand-background/50 rounded-lg border border-gray-100">
            <p className="text-brand-text text-center">
              {basecampText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
