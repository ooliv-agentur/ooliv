import React, { ReactNode } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

interface LocationServicesSectionProps {
  location: string;
  headline: string;
  description: string;
  services: Service[];
  ctaText: string;
  ctaLink: string;
  servicesHeadline?: string;
  gridCols?: 3 | 4;
  children?: ReactNode;
}

const LocationServicesSection = ({
  location,
  headline,
  description,
  services,
  ctaText,
  ctaLink,
  servicesHeadline,
  gridCols = 4,
  children
}: LocationServicesSectionProps) => {
  const gridClass = gridCols === 3 
    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
    : "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16";

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              {headline}
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              {description}
            </p>
            
            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                asChild
              >
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        {servicesHeadline && (
          <h3 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-12 text-center">
            {servicesHeadline}
          </h3>
        )}
        
        <StaggerReveal className={gridClass}>
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center mb-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {service.description}
              </p>
              <div>
                <Link 
                  to={service.link}
                  className="text-accent-primary hover:text-medico-darkGreen underline transition-colors duration-300 font-bold text-lg"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Additional content sections (e.g., Target Audience, Local Advantage for Mainz) */}
        {children}
      </div>
    </section>
  );
};

export default LocationServicesSection;
