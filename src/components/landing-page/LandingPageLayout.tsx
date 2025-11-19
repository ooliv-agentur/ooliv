import React from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface LandingPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({
  children,
  title,
  description,
  canonicalUrl,
  keywords
}) => {
  const handleContactClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Simple Header - Logo + CTA */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" aria-label="ooliv Homepage">
                <img 
                  src="/ooliv_logo_2025.svg?v=2" 
                  alt="ooliv logo" 
                  className="h-6 md:h-8 w-auto" 
                  loading="eager"
                />
              </Link>
              
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Jetzt Gespräch buchen
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="bg-medico-darkGreen text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm">
                © {new Date().getFullYear()} ooliv. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/datenschutz" className="hover:text-medico-turquoise transition-colors">
                  Datenschutz
                </Link>
                <Link to="/impressum" className="hover:text-medico-turquoise transition-colors">
                  Impressum
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default LandingPageLayout;
