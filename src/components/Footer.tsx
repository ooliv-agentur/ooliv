import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <img 
                src="/ooliv_logo_2025.svg" 
                alt="ooliv" 
                className="h-10 w-auto"
              />
              <p className="text-sm text-[#666666]">
                Digitale Transformation, die verkauft.
              </p>
              
              {/* Rating Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://g.co/kgs/sgZX29W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#666666] hover:text-[#0BC3C3] transition-colors"
                  title="Google Bewertung"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#facc15] text-[#facc15]" />
                  ))}
                  <span className="ml-1">4,9</span>
                </a>
                <a 
                  href="https://www.sortlist.de/agency/uli-werbeagentur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-[#666666] hover:text-[#0BC3C3] transition-colors"
                >
                  Sortlist
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-base font-semibold text-[#0D0D0D] mb-4">Leistungen</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li>
                  <Link 
                    to="/digitale-transformation-strategie" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Digitale Transformation & Strategie
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ux-konzeption" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    UX & Konzeption
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/webdesign-entwicklung" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Webdesign & Entwicklung
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/seo-performance" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    SEO & Performance
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ai-workflows" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    AI-Workflows
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-base font-semibold text-[#0D0D0D] mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li>
                  <Link 
                    to="/ueber-uns" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/referenzen" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Referenzen
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/artikel" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kontakt" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
                <li className="pt-2">
                  <Link 
                    to="/datenschutz" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/impressum" 
                    className="hover:text-[#0BC3C3] transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact + Location */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#0D0D0D] mb-4">Kontakt</h3>
              
              <div className="space-y-2 text-sm text-[#666666]">
                <p className="font-medium text-[#0D0D0D]">ooliv GmbH</p>
                <p>
                  Mombacher Str. 25<br />
                  55122 Mainz
                </p>
                <a 
                  href="tel:+4961316367801" 
                  className="block hover:text-[#0BC3C3] transition-colors"
                >
                  +49 6131 6367801
                </a>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="block hover:text-[#0BC3C3] transition-colors"
                >
                  info@ooliv.de
                </a>
                <a 
                  href="https://wa.me/4961316367801" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0BC3C3] hover:underline pt-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              
              {/* Location Line */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-[#666666] leading-relaxed">
                  Zuhause in Mainz – aktiv in ganz Deutschland und im DACH-Raum.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
