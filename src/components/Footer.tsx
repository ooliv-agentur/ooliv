import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid: 4 Columns Desktop, 2 Columns Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1 - Branding */}
            <div className="space-y-3">
              <img 
                src="/ooliv_logo_2025.svg" 
                alt="ooliv" 
                className="h-10 w-auto"
              />
              <p className="text-sm text-[#666666]">
                Digitale Transformation, die verkauft.
              </p>
            </div>

            {/* Column 2 - Leistungen (Services) */}
            <div>
              <h3 className="text-base font-semibold text-[#0D0D0D] mb-4">Leistungen</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li>
                  <Link to="/digitale-transformation-strategie" className="hover:text-[#32b2ab] transition-colors">
                    Digitale Transformation & Strategie
                  </Link>
                </li>
                <li>
                  <Link to="/ux-konzeption" className="hover:text-[#32b2ab] transition-colors">
                    UX & Konzeption
                  </Link>
                </li>
                <li>
                  <Link to="/webdesign-entwicklung" className="hover:text-[#32b2ab] transition-colors">
                    Webdesign & Entwicklung
                  </Link>
                </li>
                <li>
                  <Link to="/seo-performance" className="hover:text-[#32b2ab] transition-colors">
                    SEO & Performance
                  </Link>
                </li>
                <li>
                  <Link to="/ai-workflows" className="hover:text-[#32b2ab] transition-colors">
                    AI-Workflows
                  </Link>
                </li>
                <li>
                  <Link to="/referenzen" className="hover:text-[#32b2ab] transition-colors">
                    Referenzen
                  </Link>
                </li>
                <li>
                  <Link to="/ueber-uns" className="hover:text-[#32b2ab] transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-[#32b2ab] transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Kontakt */}
            <div>
              <h3 className="text-base font-semibold text-[#0D0D0D] mb-4">Kontakt</h3>
              <div className="space-y-2 text-sm text-[#666666]">
                <p className="font-medium text-[#0D0D0D]">ooliv GmbH</p>
                <p>
                  Mombacher Str. 25<br />
                  55122 Mainz
                </p>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="block hover:text-[#32b2ab] transition-colors"
                >
                  info@ooliv.de
                </a>
                <a 
                  href="tel:+4961316367801" 
                  className="block hover:text-[#32b2ab] transition-colors"
                >
                  +49 6131 6367801
                </a>
                <a 
                  href="https://wa.me/4961316367801" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#32b2ab] hover:underline pt-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Column 4 - Region / Claim */}
            <div>
              <p className="text-sm text-[#666666] leading-relaxed">
                Zuhause in Mainz – aktiv in ganz Deutschland und im DACH-Raum.
              </p>
            </div>

          </div>

          {/* Bottom Row - Legal / Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#666666]">
                <Link 
                  to="/datenschutz" 
                  className="hover:text-[#32b2ab] transition-colors"
                >
                  Datenschutz
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  to="/impressum" 
                  className="hover:text-[#32b2ab] transition-colors"
                >
                  Impressum
                </Link>
              </div>
              <div className="text-sm text-[#666666]">
                © 2025 ooliv. Alle Rechte vorbehalten.
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
