import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, FileText, Search, RefreshCw } from 'lucide-react';

const RelatedServicesGrid = () => {
  const services = [
    {
      icon: Palette,
      title: "Webdesign",
      description: "UI/UX Design, das konvertiert – entwickelt von unseren Design-Experten.",
      link: "/webdesign",
      cta: "Webdesign-Beratung anfragen"
    },
    {
      icon: FileText,
      title: "Content-Erstellung",
      description: "SEO-optimierte Texte für Ihre neue Website – von Profis geschrieben.",
      link: "/content-erstellung",
      cta: "Content-Services entdecken"
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Technisches SEO, Performance und Ranking-Strategien für Ihre Website.",
      link: "/seo-optimierung",
      cta: "SEO-Strategie entwickeln"
    },
    {
      icon: RefreshCw,
      title: "Website Relaunch",
      description: "Ihre alte Website neu entwickelt – mit moderner Technologie und besserer Performance.",
      link: "/website-relaunch",
      cta: "Relaunch planen"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-4">
            Ergänzende Services
          </h2>
          <p className="text-xl text-medico-darkGreen/80 max-w-3xl mx-auto">
            Für ein ganzheitliches Web-Projekt bieten wir weitere Services an
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl p-6 border-2 border-medico-turquoise/20 hover:border-medico-turquoise hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-medico-turquoise/10 flex items-center justify-center mb-4 group-hover:bg-medico-turquoise/20 transition-colors">
                  <Icon className="w-7 h-7 text-medico-turquoise" />
                </div>
                
                <h3 className="text-xl font-bold text-medico-darkGreen mb-3 group-hover:text-medico-turquoise transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-medico-darkGreen/70 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 text-medico-turquoise font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  {service.cta} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesGrid;
