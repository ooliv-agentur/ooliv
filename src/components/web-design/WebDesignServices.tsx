
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Palette, Code, FileText, Search, Settings, ShoppingBag, Bookmark } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Helper function to get service-specific CSS class
  const getServiceClass = (title: string) => {
    if (title.toLowerCase().includes('webdesign') || title.toLowerCase().includes('palette')) return 'service-webdesign';
    if (title.toLowerCase().includes('entwicklung') || title.toLowerCase().includes('development') || title.toLowerCase().includes('code')) return 'service-webdev';
    if (title.toLowerCase().includes('content') || title.toLowerCase().includes('struktur')) return 'service-content';
    if (title.toLowerCase().includes('seo')) return 'service-seo';
    if (title.toLowerCase().includes('wartung') || title.toLowerCase().includes('maintenance')) return 'service-webdev';
    return 'service-webdesign'; // default
  };
  
  const services = [
    {
      icon: Palette,
      title: isGerman ? "Webdesign" : "Webdesign",
      items: isGerman ? [
        "Strategisches UI/UX Design",
        "Mobile-responsive Layouts",
        "Markenkonformes Design",
        "Mehr Anfragen generieren"
      ] : [
        "Strategic UI/UX design",
        "Mobile-responsive layouts",
        "Brand-aligned visuals",
        "Conversion optimization"
      ],
      link: isGerman ? "/webdesign" : "/en/webdesign"
    },
    {
      icon: Code,
      title: isGerman ? "Entwicklung" : "Development",
      items: isGerman ? [
        "Sauberer, semantischer Code",
        "Performance-Optimierung",
        "Barrierefreiheit",
        "Cross-Browser Testing"
      ] : [
        "Clean, semantic code",
        "Performance optimization",
        "Accessibility compliance",
        "Cross-browser testing"
      ],
      link: isGerman ? "/webentwicklung" : "/en/webdevelopment"
    },
    {
      icon: FileText,
      title: isGerman ? "Content & Struktur" : "Content & Structure",
      items: isGerman ? [
        "Content-Architektur",
        "Conversion-Texte",
        "Visuelles Storytelling",
        "Content-Management"
      ] : [
        "Content architecture",
        "Conversion copywriting",
        "Visual storytelling",
        "Content management"
      ],
      link: isGerman ? "/content-erstellung" : "/en/content-creation"
    },
    {
      icon: Search,
      title: isGerman ? "SEO-ready Basis" : "SEO-Ready Foundations",
      items: isGerman ? [
        "Technisches SEO Setup",
        "Performance-Optimierung",
        "Strukturierte Daten",
        "Lokale SEO-Integration"
      ] : [
        "Technical SEO setup",
        "Performance optimization",
        "Structured data markup",
        "Local SEO integration"
      ],
      link: isGerman ? "/seo-optimierung" : "/en/seo"
    },
    {
      icon: Settings,
      title: isGerman ? "Wartung & Support" : "Maintenance & Support",
      items: isGerman ? [
        "Regelmäßige Updates & Backups",
        "Performance-Monitoring",
        "Sicherheitswartung",
        "Wachstumsorientierte Iterationen"
      ] : [
        "Regular updates & backups",
        "Performance monitoring",
        "Security maintenance",
        "Growth-driven iterations"
      ],
      link: isGerman ? "/kontakt" : "/en/contact"
    }
  ];

  const specializedServices = [
    {
      icon: ShoppingBag,
      title: isGerman ? "Shopify Entwicklung" : "Shopify Development",
      items: isGerman ? [
        "Custom Theme-Entwicklung",
        "Performance-Optimierung",
        "Payment-Integration",
        "Inventar-Management"
      ] : [
        "Custom theme development",
        "Performance optimization",
        "Payment integration",
        "Inventory management"
      ],
      link: isGerman ? "/kontakt" : "/en/contact"
    },
    {
      icon: Bookmark,
      title: isGerman ? "WordPress Wartung" : "WordPress Maintenance",
      items: isGerman ? [
        "Regelmäßige Updates & Backups",
        "Sicherheits-Monitoring",
        "Performance-Optimierung",
        "WooCommerce Support"
      ] : [
        "Regular updates & backups",
        "Security monitoring",
        "Performance optimization",
        "WooCommerce support"
      ],
      link: isGerman ? "/kontakt" : "/en/contact"
    }
  ];

  const translations = {
    title: isGerman ? "Was wir anbieten – Alles von einem Webdesign-Partner" : "What We Offer – All from One Webdesign Partner",
    subtitle: isGerman ? "Umfassende Webdesign- und Entwicklungsdienstleistungen zum Aufbau und zur Pflege Ihrer digitalen Präsenz." : "Comprehensive webdesign and development services to build and maintain your digital presence.",
    specializedTitle: isGerman ? "Spezialisierte Lösungen" : "Specialized Solutions",
    learnMore: isGerman ? "Mehr erfahren" : "Learn More"
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {translations.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {translations.subtitle}
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-16"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className={`h-full ${getServiceClass(service.title)}`}>
                  <CardHeader>
                    <div className="p-2 w-10 h-10 rounded-full service-accent-bg flex items-center justify-center mb-2">
                      <service.icon className="h-5 w-5 service-icon" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1 w-1 rounded-full service-icon flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto service-hover" asChild>
                      <Link to={service.link} className="inline-flex items-center service-icon">
                        {translations.learnMore} <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
        
        <h3 className="text-2xl font-bold text-center mb-8 text-brand-heading">
          {translations.specializedTitle}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specializedServices.map((service, index) => (
            <Card key={index} className={`h-full ${getServiceClass(service.title)}`}>
              <CardHeader>
                <div className="p-2 w-10 h-10 rounded-full service-accent-bg flex items-center justify-center mb-2">
                  <service.icon className="h-5 w-5 service-icon" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full service-icon flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto service-hover" asChild>
                  <Link to={service.link} className="inline-flex items-center service-icon">
                    {translations.learnMore} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;
