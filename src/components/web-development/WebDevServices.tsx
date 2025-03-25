
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
    icon: Code,
    title: 'Custom Code (No CMS)',
    description: 'We build fully coded websites using HTML, CSS, and JavaScript — ideal for fast, flexible, and secure sites with no backend complexity.'
  },
  {
    icon: Layout,
    title: 'WordPress Development',
    description: 'For content-heavy or marketing-driven sites, we build custom WordPress setups — clean-coded and fully tailored.'
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Integration',
    description: 'Want to sell products or services? We integrate WooCommerce directly into your WordPress site.'
  },
  {
    icon: Database,
    title: 'API & Feature Development',
    description: 'We connect your site to third-party tools and services — or build custom features from scratch.'
  },
  {
    icon: ShoppingBag,
    title: 'Shopify (Selected Projects)',
    description: 'For product-first B2B clients, we create simple, conversion-ready Shopify storefronts.'
  }
];

const WebDevServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Development Solutions That Fit Your Business
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From custom code to CMS — we create solutions that are built to last.
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
