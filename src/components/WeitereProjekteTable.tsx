
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const projekte = [
  {
    name: "Scheurich",
    branche: "Gartenbedarf",
    brancheEn: "Gardening Supplies",
    link: "https://www.scheurich.de",
  },
  {
    name: "Weisenburger",
    branche: "Bauunternehmen",
    brancheEn: "Construction Company",
    link: "https://www.weisenburger.de",
  },
  {
    name: "Aeratron",
    branche: "E-Commerce",
    brancheEn: "E-Commerce",
    link: "https://aeratron.io",
  },
  {
    name: "Leidmann",
    branche: "E-Commerce",
    brancheEn: "E-Commerce",
    link: "https://www.leidmann.de",
  },
  {
    name: "MediCloud Med",
    branche: "Software",
    brancheEn: "Software",
    link: "https://www.medicloudmed.ch",
  },
  {
    name: "LIERSCH",
    branche: "Innenausbau",
    brancheEn: "Interior Design",
    link: "https://liersch-retail.com",
  },
  {
    name: "ALC",
    branche: "Logistik",
    brancheEn: "Logistics",
    link: "https://www.alc-logistic.de",
  },
  {
    name: "NOXUSGROUP",
    branche: "Bau",
    brancheEn: "Construction",
    link: "https://noxusgroup-hausbau.com",
  },
  {
    name: "MDI",
    branche: "Industrie & Fertigung",
    brancheEn: "Industry & Manufacturing",
    link: "https://www.mdi-ap.com",
  },
  {
    name: "enwas",
    branche: "Energieversorgung",
    brancheEn: "Energy Supply",
    link: "https://www.enwas.de",
  },
  {
    name: "FIBONA",
    branche: "Immobilien",
    brancheEn: "Real Estate",
    link: "https://www.fibona.de",
  },
  {
    name: "confacts",
    branche: "SaaS",
    brancheEn: "SaaS",
    link: "https://www.confacts.de",
  },
  {
    name: "Doerr Kühn Plück + Partner",
    branche: "Rechtsberatung",
    brancheEn: "Legal Services",
    link: "https://www.doerrpartners.de",
  },
  {
    name: "präQ",
    branche: "MedTech",
    brancheEn: "MedTech",
    link: "https://www.praeq.de",
  },
  {
    name: "Dachdeckerei Leilich",
    branche: "Handwerk",
    brancheEn: "Craft",
    link: "https://www.dachdeckerei-leilich.de",
  },
];

const WeitereProjekteTable = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const translations = {
    title: isGerman ? "Weitere Projekte im Überblick" : "More Projects Overview",
    projectName: isGerman ? "Kunde" : "Client",
    industry: isGerman ? "Branche" : "Industry",
    liveLink: isGerman ? "Live-Link" : "Live Link",
    toWebsite: isGerman ? "Zur Website" : "View Website"
  };

  console.log("Rendering WeitereProjekteTable with language:", language);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-backgroundAlt to-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-heading mb-8 text-center">
          {translations.title}
        </h3>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto shadow-card rounded-xl bg-white">
          <Table className="min-w-full border-separate border-spacing-y-0">
            <TableHeader>
              <TableRow className="bg-brand-background">
                <TableHead className="font-bold text-sm text-brand-primary py-4 px-4 min-w-[160px]">
                  {translations.projectName}
                </TableHead>
                <TableHead className="font-bold text-sm text-brand-primary py-4 px-4 min-w-[140px]">
                  {translations.industry}
                </TableHead>
                <TableHead className="font-bold text-sm text-brand-primary py-4 px-4 min-w-[110px]">
                  {translations.liveLink}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projekte.map((projekt) => (
                <TableRow
                  key={projekt.name}
                  className="bg-white even:bg-brand-backgroundAlt/70 border-b border-brand-backgroundAlt hover:bg-brand-backgroundAlt transition"
                >
                  <TableCell className="font-semibold text-brand-heading py-3 px-4 text-base">
                    {projekt.name}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-brand-text text-sm">
                    {isGerman ? projekt.branche : projekt.brancheEn}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <a
                      href={projekt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary font-medium text-sm rounded shadow hover:bg-brand-primary/20 transition"
                    >
                      {translations.toWebsite}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Mobile Stack/Card Layout */}
        <div className="block md:hidden space-y-4 mt-2">
          {projekte.map((projekt, idx) => (
            <div
              key={projekt.name}
              className="bg-white rounded-xl shadow-card px-4 py-4 flex flex-col gap-2 border border-brand-backgroundAlt"
            >
              <div className="font-semibold text-brand-heading text-base">
                {projekt.name}
              </div>
              <div className="text-brand-text text-sm">
                {isGerman ? projekt.branche : projekt.brancheEn}
              </div>
              <div>
                <a
                  href={projekt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 mt-1 bg-brand-primary/10 text-brand-primary font-medium text-sm rounded shadow hover:bg-brand-primary/20 transition"
                >
                  {translations.toWebsite}
                </a>
              </div>
              {idx !== projekte.length - 1 && (
                <div className="mt-4">
                  <hr className="border-t border-brand-backgroundAlt/90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeitereProjekteTable;
