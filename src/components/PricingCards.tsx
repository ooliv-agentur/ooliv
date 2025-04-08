
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

interface PricingCardsProps {
  title: string;
  subtitle: string;
  cardsData: PricingCardProps[];
}

const PricingCards = ({ title, subtitle, cardsData }: PricingCardsProps) => {
  return (
    <section className="py-16 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">{title}</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-bold text-brand-heading mb-3">{card.title}</h3>
              <div className="text-2xl font-bold text-brand-primary mb-6">{card.price}</div>
              
              <ul className="mb-8 flex-grow">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-brand-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full" asChild>
                <Link to={card.buttonLink}>{card.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
