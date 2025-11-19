import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, 
  Palette, 
  Code, 
  Search, 
  Bot, 
  FileText, 
  RefreshCw,
  Target 
} from 'lucide-react';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface ServiceCategory {
  title: string;
  description: string;
  services: {
    icon: typeof Lightbulb;
    title: string;
    description: string;
    path: string;
  }[];
}

const ServicesMegaMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: ServicesMegaMenuProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    onClose();
  };

  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Strategie & Beratung',
      description: 'Von der Analyse bis zur Roadmap',
      services: [
        {
          icon: Lightbulb,
          title: 'Digitale Strategie',
          description: 'Strategic Discovery & Digital Transformation',
          path: '/strategie'
        },
        {
          icon: Target,
          title: 'Product & UX Strategy',
          description: 'User-zentrierte Produktentwicklung',
          path: '/produkt-ux-strategie'
        },
        {
          icon: RefreshCw,
          title: 'Website-Relaunch',
          description: 'Konzept, Planung & Umsetzung',
          path: '/website-relaunch'
        }
      ]
    },
    {
      title: 'Design & Entwicklung',
      description: 'Von der Idee zur fertigen Website',
      services: [
        {
          icon: Palette,
          title: 'Webdesign',
          description: 'Conversion-optimiertes Design',
          path: '/webdesign'
        },
        {
          icon: Code,
          title: 'Webentwicklung',
          description: 'Technisch solide & performant',
          path: '/webentwicklung'
        }
      ]
    },
    {
      title: 'Marketing & Technologie',
      description: 'Sichtbarkeit & Innovation',
      services: [
        {
          icon: Search,
          title: 'SEO-Optimierung',
          description: 'Organische Reichweite & Rankings',
          path: '/seo-optimierung'
        },
        {
          icon: Bot,
          title: 'KI-Integration',
          description: 'AI-gestützte Prozesse & Automation',
          path: '/ki-technologien'
        },
        {
          icon: FileText,
          title: 'Content-Erstellung',
          description: 'Strategische Content-Produktion',
          path: '/content-erstellung'
        }
      ]
    }
  ];

  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 w-[800px] bg-white rounded-lg shadow-2xl border border-border z-50 opacity-0 invisible transition-all duration-200",
        isOpen && "opacity-100 visible"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <div className="pb-2 border-b border-border">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {category.description}
                </p>
              </div>
              
              <div className="space-y-1">
                {category.services.map((service, serviceIndex) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={serviceIndex}
                      to={service.path}
                      onClick={handleClick}
                      className="group flex items-start gap-3 p-2.5 rounded-md hover:bg-muted transition-colors"
                    >
                      <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-5 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Nicht sicher, was Sie brauchen?
              </p>
              <p className="text-xs text-muted-foreground">
                Lassen Sie uns in einem kostenlosen Erstgespräch die beste Lösung finden
              </p>
            </div>
            <Link
              to="/kontakt"
              onClick={handleClick}
              className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Strategiegespräch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;