
import React from 'react';
import { Code, Layout, ShoppingBag, Database, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const services = [
  {
    icon: Code,
    title: 'Custom Code (No CMS)',
    description: 'HTML, CSS, JS – fast, flexible, and lean'
  },
  {
    icon: Layout,
    title: 'WordPress Development',
    description: 'Clean-coded, scalable, and editor-friendly'
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Integration',
    description: 'Sell products or services directly from your site'
  },
  {
    icon: Database,
    title: 'API & Feature Integration',
    description: 'Connect third-party tools or build custom features'
  },
  {
    icon: ShoppingBag,
    title: 'Shopify (Selected Projects)',
    description: 'Tailored storefronts for product-first B2B clients'
  }
];

const WebDevServices = () => {
  const { language } = useLanguage();
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Technologies & Capabilities
        </h2>
        
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center h-full flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-heading">
                {service.title}
              </h3>
              <p className="text-brand-text text-sm flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="block md:hidden mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-4/5 sm:basis-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex">
                        <service.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-brand-heading">
                      {service.title}
                    </h3>
                    <p className="text-brand-text text-sm flex-grow">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mx-2 static" />
              <CarouselNext className="mx-2 static" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-brand-text mb-6">
            <strong>Not sure what fits?</strong> ➔ Let's talk strategy.
          </p>
          <Button variant="outline" asChild>
            <Link to={contactPath}>
              Schedule a Strategy Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
