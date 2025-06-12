
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const currentYear = new Date().getFullYear();

  const footerSections = {
    de: {
      services: {
        title: "Leistungen",
        links: [
          { name: "Webdesign", path: "/webdesign" },
          { name: "Webentwicklung", path: "/webentwicklung" },
          { name: "Content-Erstellung", path: "/content-erstellung" },
          { name: "SEO-Optimierung", path: "/seo-optimierung" },
          { name: "Google Ads", path: "/google-ads" },
          { name: "KI-Technologien", path: "/ki-technologien" },
          { name: "Klickbetrug-Schutz", path: "/klickbetrug" }
        ]
      },
      company: {
        title: "Unternehmen", 
        links: [
          { name: "Über ooliv", path: "/ueber-ooliv" },
          { name: "Case Studies", path: "/case-studies" },
          { name: "Kontakt", path: "/kontakt" }
        ]
      },
      legal: {
        title: "Rechtliches",
        links: [
          { name: "Impressum", path: "/impressum" },
          { name: "Datenschutz", path: "/datenschutz" },
          { name: "Cookie-Richtlinie", path: "/cookie-richtlinie" }
        ]
      }
    },
    en: {
      services: {
        title: "Services",
        links: [
          { name: "Webdesign", path: "/en/webdesign" },
          { name: "Web Development", path: "/en/webdevelopment" },
          { name: "Content Creation", path: "/en/content-creation" },
          { name: "SEO", path: "/en/seo" },
          { name: "Google Ads", path: "/en/google-ads" },
          { name: "AI Technologies", path: "/en/ai-technologies" }
        ]
      },
      company: {
        title: "Company",
        links: [
          { name: "About Us", path: "/en/about-us" },
          { name: "Case Studies", path: "/en/case-studies" },
          { name: "Contact", path: "/en/contact" }
        ]
      },
      legal: {
        title: "Legal",
        links: [
          { name: "Legal Notice", path: "/en/legal-notice" },
          { name: "Privacy Policy", path: "/en/privacy-policy" }
        ]
      }
    }
  };

  const sections = isGerman ? footerSections.de : footerSections.en;

  return (
    <footer className="bg-medico-darkGreen text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/ooliv_logo_2025.svg" alt="ooliv" className="h-8 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-4">
              {isGerman 
                ? "Ihr Partner für digitale Lösungen in Mainz – von der Strategie bis zur Umsetzung."
                : "Your partner for digital solutions in Mainz – from strategy to implementation."
              }
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{sections.services.title}</h3>
            <ul className="space-y-2">
              {sections.services.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{sections.company.title}</h3>
            <ul className="space-y-2">
              {sections.company.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{sections.legal.title}</h3>
            <ul className="space-y-2">
              {sections.legal.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} ooliv. {isGerman ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/company/ooliv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
