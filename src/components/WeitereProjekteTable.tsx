import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const projekte = [
  {
    name: "Scheurich",
    branche: "Gartenbedarf",
    brancheEn: "Gardening Supplies",
    beschreibung: "UX-Optimierung + Webshop-Performance-Boost",
    link: "https://www.scheurich.de",
  },
  {
    name: "Weisenburger",
    branche: "Bauunternehmen",
    brancheEn: "Construction",
    beschreibung: "Corporate Website mit Lead-Funnel",
    link: "https://www.weisenburger.de",
  },
  {
    name: "Aeratron",
    branche: "E-Commerce",
    brancheEn: "E-Commerce",
    beschreibung: "Shopify Performance-Optimierung",
    link: "https://aeratron.io",
  },
  {
    name: "Leidmann",
    branche: "E-Commerce",
    brancheEn: "E-Commerce",
    beschreibung: "E-Commerce Strategie & UX",
    link: "https://www.leidmann.de",
  },
  {
    name: "MediCloud Med",
    branche: "Software",
    brancheEn: "Software",
    beschreibung: "SaaS Webdesign & Positioning",
    link: "https://www.medicloudmed.ch",
  },
  {
    name: "LIERSCH",
    branche: "Innenausbau",
    brancheEn: "Interior Design",
    beschreibung: "Markenwebsite mit Portfolio-Struktur",
    link: "https://liersch-retail.com",
  },
  {
    name: "ALC",
    branche: "Logistik",
    brancheEn: "Logistics",
    beschreibung: "B2B Website mit Service-Fokus",
    link: "https://www.alc-logistic.de",
  },
  {
    name: "NOXUSGROUP",
    branche: "Bau",
    brancheEn: "Construction",
    beschreibung: "Immobilien-Website & Lead-System",
    link: "https://noxusgroup-hausbau.com",
  },
  {
    name: "MDI",
    branche: "Industrie",
    brancheEn: "Industry",
    beschreibung: "Technische Website mit Produktfokus",
    link: "https://www.mdi-ap.com",
  },
  {
    name: "enwas",
    branche: "Energie",
    brancheEn: "Energy",
    beschreibung: "Energieversorger mit lokalem Fokus",
    link: "https://www.enwas.de",
  },
  {
    name: "FIBONA",
    branche: "Immobilien",
    brancheEn: "Real Estate",
    beschreibung: "Immobilienwebsite mit Objektverwaltung",
    link: "https://www.fibona.de",
  },
  {
    name: "confacts",
    branche: "SaaS",
    brancheEn: "SaaS",
    beschreibung: "SaaS-Platform Website & Onboarding",
    link: "https://www.confacts.de",
  },
];

const WeitereProjekteTable = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const translations = {
    title: isGerman ? "Weitere Referenzen & digitale Ergebnisse" : "More References & Digital Results"
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-brand-backgroundAlt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          {...fadeInUp}
          className="text-2xl md:text-3xl font-bold text-brand-heading mb-12 text-center"
        >
          {translations.title}
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {projekte.map((projekt, index) => (
            <motion.div
              key={projekt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h4 className="font-semibold text-brand-heading text-base mb-1">
                  {projekt.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {isGerman ? projekt.branche : projekt.brancheEn}
                </p>
                <p className="text-xs text-[#999999]">
                  {projekt.beschreibung}
                </p>
              </div>
              <a
                href={projekt.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
              >
                Zur Website
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeitereProjekteTable;
