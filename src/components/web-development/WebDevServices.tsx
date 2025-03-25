
import React from 'react';
import { Code, Layout, ShoppingBag, Database, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const services = [
  {
    icon: Database,
    title: 'Headless Development',
    description: 'Jamstack architecture for fast, scalable websites with design freedom and API-readiness.'
  },
  {
    icon: Layout,
    title: 'WordPress Development',
    description: 'Flexible WordPress setups—from corporate sites to multisite solutions.'
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Development',
    description: 'Integrated shop functionality for product-based pages or small B2B storefronts.'
  },
  {
    icon: Code,
    title: 'Custom Code & API Integrations',
    description: 'Individual features, clean frontends, or custom interfaces—coded to fit your use case.'
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Selected Shopify projects for streamlined sales and product showcases.'
  }
];

const WebDevServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Flexible Development for Real Business Needs
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From CMS to custom code—we create solutions that are built to last.
        </p>
        
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
          <Button variant="outline" asChild>
            <Link to="/contact">
              Not sure what fits your case? Let's talk strategy.
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
