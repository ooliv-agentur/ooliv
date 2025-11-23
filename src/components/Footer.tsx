import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
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
              <p className="text-sm text-muted-foreground">
                Digitale Transformation, die verkauft.
              </p>
            </div>

            {/* Column 2 - Leistungen (Services) */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4">Leistungen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/digitale-transformation-strategie" className="hover:text-primary transition-colors">
                    Digitale Transformation & Strategie
                  </Link>
                </li>
                <li>
                  <Link to="/ux-konzeption" className="hover:text-primary transition-colors">
                    UX & Konzeption
                  </Link>
                </li>
                <li>
                  <Link to="/webdesign-entwicklung" className="hover:text-primary transition-colors">
                    Webdesign & Entwicklung
                  </Link>
                </li>
                <li>
                  <Link to="/seo-performance" className="hover:text-primary transition-colors">
                    SEO & Performance
                  </Link>
                </li>
                <li>
                  <Link to="/ai-workflows" className="hover:text-primary transition-colors">
                    AI-Workflows
                  </Link>
                </li>
                <li>
                  <Link to="/referenzen" className="hover:text-primary transition-colors">
                    Referenzen
                  </Link>
                </li>
                <li>
                  <Link to="/ueber-uns" className="hover:text-primary transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Kontakt */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4">Kontakt</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">ooliv GmbH</p>
                <p>
                  Mombacher Str. 25<br />
                  55122 Mainz
                </p>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="block hover:text-primary transition-colors"
                >
                  info@ooliv.de
                </a>
                <a 
                  href="tel:+4961316367801" 
                  className="block hover:text-primary transition-colors"
                >
                  +49 6131 6367801
                </a>
                <a 
                  href="https://wa.me/4961316367801" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline pt-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Column 4 - Region / Claim */}
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zuhause in Mainz – aktiv in ganz Deutschland und im DACH-Raum.
              </p>
            </div>

          </div>

          {/* Bottom Row - Legal / Copyright */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Link 
                  to="/datenschutz" 
                  className="hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
                <span className="text-border">|</span>
                <Link 
                  to="/impressum" 
                  className="hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </div>
              <div className="text-sm text-muted-foreground">
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
