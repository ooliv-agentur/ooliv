
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Define the structure for case studies
export const caseStudiesData = {
  en: [
    {
      client: "Scheurich",
      industry: "Ceramic & Lifestyle",
      impact: [
        "+120% organic traffic through complete website optimization",
        "+45% conversion rate through improved UX",
        "Successful relaunch incl. content, SEO and performance"
      ]
    },
    {
      client: "COBUS",
      industry: "ERP & IT Solutions",
      impact: [
        "+80% more leads through targeted SEO & conversion strategy",
        "3x visibility through technical optimization & backlinks",
        "Relaunch with focus on lead quality & authority"
      ]
    },
    {
      client: "Weisenburger",
      industry: "Construction & Real Estate",
      impact: [
        "-95% loading time through clean technical implementation",
        "+60% more inquiries thanks to intuitive user guidance",
        "Scalable web infrastructure & CRM integration"
      ]
    },
    {
      client: "PopBird",
      industry: "E-Commerce & Retail",
      impact: [
        "+35% sales increase in 6 months through storytelling & SEO",
        "+42% order value through improved customer experience",
        "High-conversion UX with personalized content system"
      ]
    },
    {
      client: "GreenTech",
      industry: "Renewable Energy",
      impact: [
        "200+ qualified leads per month",
        "30+ Google top rankings through targeted SEO measures",
        "-68% acquisition costs through organic reach"
      ]
    }
  ],
  de: [
    {
      client: "Scheurich",
      industry: "Keramik & Lifestyle",
      impact: [
        "+120% organischer Traffic durch vollständige Website-Optimierung",
        "+45% Conversion Rate durch verbesserte UX",
        "Erfolgreicher Relaunch inkl. Content, SEO und Performance"
      ]
    },
    {
      client: "COBUS",
      industry: "ERP & IT-Lösungen",
      impact: [
        "+80% mehr Leads durch gezielte SEO- & Conversion-Strategie",
        "3x Sichtbarkeit durch technische Optimierung & Backlinks",
        "Relaunch mit Fokus auf Lead-Qualität & Autorität"
      ]
    },
    {
      client: "Weisenburger",
      industry: "Bau & Immobilien",
      impact: [
        "-95% Ladezeit durch saubere technische Umsetzung",
        "+60% mehr Anfragen dank intuitiver Nutzerführung",
        "Skalierbare Web-Infrastruktur & CRM-Integration"
      ]
    },
    {
      client: "PopBird",
      industry: "E-Commerce & Einzelhandel",
      impact: [
        "+35% Umsatzsteigerung in 6 Monaten durch Storytelling & SEO",
        "+42% Bestellwert durch verbesserte Customer Experience",
        "Conversion-starke UX mit personalisiertem Content-System"
      ]
    },
    {
      client: "GreenTech",
      industry: "Erneuerbare Energien",
      impact: [
        "200+ qualifizierte Leads pro Monat",
        "30+ Google Top-Rankings durch gezielte SEO-Maßnahmen",
        "-68% Akquisekosten durch organische Reichweite"
      ]
    }
  ]
};

interface CaseStudiesSectionProps {
  showTitle?: boolean;
  customTitle?: string;
  customSubtitle?: string;
  customBodyText?: string;
}

const CaseStudiesSection = ({ 
  showTitle = true,
  customTitle,
  customSubtitle,
  customBodyText
}: CaseStudiesSectionProps) => {
  const { language } = useLanguage();
  const cases = language === 'de' ? caseStudiesData.de : caseStudiesData.en;
  
  const translations = {
    en: {
      title: "Real Results from Real Clients",
      subtitle: "We deliver websites and strategies that make visible what makes your company special.",
      bodyText: "See how we've helped businesses achieve sustainable growth through clear positioning, strong content, SEO performance, and measurable UX optimization."
    },
    de: {
      title: "Echte Ergebnisse von echten Kunden",
      subtitle: "Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht.",
      bodyText: "Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
    }
  };
  
  const t = language === 'de' ? translations.de : translations.en;
  
  // Use custom text if provided, otherwise use default translations
  const displayTitle = customTitle || t.title;
  const displaySubtitle = customSubtitle || t.subtitle;
  const displayBodyText = customBodyText || t.bodyText;

  return (
    <section className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              {displayTitle}
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-4">
              {displaySubtitle}
            </p>
            <p className="text-lg text-brand-text max-w-3xl mx-auto mb-12">
              {displayBodyText}
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-brand-heading">{study.client}</h3>
                <p className="text-sm text-gray-500">{study.industry}</p>
              </div>
              
              <div className="space-y-3">
                {study.impact.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mr-3 mt-1 text-brand-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
