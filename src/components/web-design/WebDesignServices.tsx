
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

const services = [
  {
    icon: Palette,
    title: "Webdesign",
    items: [
      "Strategic UI/UX design",
      "Mobile-responsive layouts",
      "Brand-aligned visuals",
      "Conversion optimization"
    ],
    link: "/web-design"
  },
  {
    icon: Code,
    title: "Development",
    items: [
      "Clean, semantic code",
      "Performance optimization",
      "Accessibility compliance",
      "Cross-browser testing"
    ],
    link: "/web-development"
  },
  {
    icon: FileText,
    title: "Content & Structure",
    items: [
      "Content architecture",
      "Conversion copywriting",
      "Visual storytelling",
      "Content management"
    ],
    link: "/content-creation"
  },
  {
    icon: Search,
    title: "SEO-Ready Foundations",
    items: [
      "Technical SEO setup",
      "Performance optimization",
      "Structured data markup",
      "Local SEO integration"
    ],
    link: "/seo-optimization"
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    items: [
      "Regular updates & backups",
      "Performance monitoring",
      "Security maintenance",
      "Growth-driven iterations"
    ],
    link: "/contact"
  }
];

const specializedServices = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    items: [
      "Custom theme development",
      "Performance optimization",
      "Payment integration",
      "Inventory management"
    ],
    link: "/contact"
  },
  {
    icon: Bookmark,
    title: "WordPress Maintenance",
    items: [
      "Regular updates & backups",
      "Security monitoring",
      "Performance optimization",
      "WooCommerce support"
    ],
    link: "/contact"
  }
];

const WebDesignServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          What We Offer – All from One Webdesign Partner
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Comprehensive webdesign and development services to build and maintain your digital presence.
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
                <Card className="h-full">
                  <CardHeader>
                    <div className="p-2 w-10 h-10 rounded-full bg-brand-backgroundAlt flex items-center justify-center mb-2">
                      <service.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-brand-primary flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to={service.link} className="inline-flex items-center text-brand-primary hover:text-brand-primary/90">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
          Specialized Solutions
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specializedServices.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="p-2 w-10 h-10 rounded-full bg-brand-backgroundAlt flex items-center justify-center mb-2">
                  <service.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-brand-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to={service.link} className="inline-flex items-center text-brand-primary hover:text-brand-primary/90">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
