
import React from 'react';
import { Check, X } from 'lucide-react';

interface ChallengeProps {
  title?: string;
  description?: string;
  challenges?: string[];
  solutions?: string[];
}

const Challenge = ({ title, description, challenges, solutions }: ChallengeProps) => {
  const hasProblemsAndSolutions = challenges && solutions && challenges.length > 0 && solutions.length > 0;
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {title || "Your Website Should Work for You—Not Against You."}
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            {description || "Many businesses struggle with websites that don't perform—whether they're outdated, too slow, or don't exist yet. A website that doesn't generate leads, build trust, or rank well on Google is a wasted opportunity."}
          </p>
        </div>
        
        {hasProblemsAndSolutions ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <X className="mr-2 h-5 w-5" />
                Probleme
              </h3>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex">
                    <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <Check className="mr-2 h-5 w-5" />
                Unsere Lösungen
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {challenges && challenges.map((challenge, index) => (
              <div key={index} className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Challenge;
