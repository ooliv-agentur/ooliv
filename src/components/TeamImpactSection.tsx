
import React from 'react';
import { ArrowRight, FileText, Palette, BarChart2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface StatItem {
  value: string;
  label: string;
}

interface TeamImpactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: StatItem[];
}

const TeamImpactSection = ({ title, subtitle, description, stats }: TeamImpactSectionProps = {}) => {
  const { language } = useLanguage();

  const services = [
    {
      title: "Strategy & UX",
      description: "Clear structures, data-backed decisions, B2B-ready",
      icon: BarChart2
    },
    {
      title: "Content & SEO",
      description: "Keyword-driven, multilingual, and AI-supported",
      icon: FileText
    },
    {
      title: "Design & Development",
      description: "Custom-coded, conversion-optimized, built to scale",
      icon: Palette
    },
    {
      title: "Direct Communication",
      description: "You speak directly with the CEO—no middle layers",
      icon: MessageCircle
    }
  ];

  const defaultStats = [
    { value: "16+", label: "years of experience" },
    { value: "100+", label: "satisfied customers" },
    { value: "200+", label: "successful projects" }
  ];

  const displayStats = stats || defaultStats;

  // Basecamp text based on language
  const basecampTitle = language === 'de' 
    ? "Projektkoordination mit Struktur – per Basecamp"
    : "Organized Collaboration with Basecamp";
  
  const basecampDescription = language === 'de'
    ? "Für alle Projekte nutzen wir Basecamp als zentrale Plattform. Hier laufen Kommunikation, Aufgaben und Dateien zusammen – DSGVO-konform, transparent und effizient."
    : "We use Basecamp as our central project hub. All tasks, feedback, and files are shared transparently — GDPR-compliant and accessible to everyone involved.";
  
  const basecampBenefitsTitle = language === 'de' ? "Ihre Vorteile:" : "Your Benefits:";
  
  const basecampBenefits = language === 'de'
    ? [
        "Gemeinsame Aufgabenlisten und Meilensteine",
        "Klar dokumentierte Feedback-Schleifen",
        "Zugriff für alle Projektbeteiligten",
        "Kein E-Mail-Chaos",
        "Asynchrone Kommunikation spart Zeit",
        "Alles an einem Ort: Inhalte, Dateien, Freigaben"
      ]
    : [
        "Shared to-do lists and milestones",
        "Documented feedback and decisions",
        "Access for internal and external stakeholders",
        "No email chaos",
        "Asynchronous communication for efficient workflows",
        "Everything in one place: tasks, files, approvals"
      ];

  return (
    <section className="py-24 md:py-32 bg-ooliv-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {title || "Small Team. Big Impact."}
          </h2>
          <p className="text-xl md:text-2xl text-center mb-16 text-white">
            {subtitle && <span className="block mb-2">{subtitle}</span>}
            {description || "At ooliv, you don't get passed around. Every project is led directly by the CEO—and executed by a focused team of experts in strategy, content, design, and development. One point of contact. Full in-house precision."}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-ooliv-black/40 border border-ooliv-green/20 rounded-xl hover:border-ooliv-green/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-ooliv-green/20 rounded-full">
                    <service.icon className="h-6 w-6 text-ooliv-green" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-lg md:text-xl text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
          
          {displayStats && displayStats.length > 0 && (
            <div className="grid grid-cols-3 gap-6 mb-16 bg-ooliv-black/50 p-8 rounded-xl border border-white/10">
              {displayStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-ooliv-green mb-2">{stat.value}</div>
                  <div className="text-lg text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Basecamp section */}
          <div className="bg-ooliv-warm-grey text-ooliv-black rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">{basecampTitle}</h3>
            <p className="text-lg mb-6">{basecampDescription}</p>
            
            <div>
              <p className="font-bold text-xl mb-4">{basecampBenefitsTitle}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {basecampBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-ooliv-orange rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/about-ooliv" className="inline-flex items-center text-ooliv-green text-xl font-bold hover:text-ooliv-orange transition-all duration-300">
              Meet the team behind the results <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImpactSection;
