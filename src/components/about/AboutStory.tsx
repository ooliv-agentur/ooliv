
import React from 'react';

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Unsere Geschichte</h2>
            <p className="text-lg mb-6 text-brand-text">
              Seit 2008 arbeiten wir mit B2B-Unternehmen, die online wachsen wollen. 
              Alles begann mit der Vision, Websites zu entwickeln, die nicht nur gut aussehen, 
              sondern auch messbare Geschäftsergebnisse liefern.
            </p>
            <p className="text-lg mb-6 text-brand-text">
              Was als kleines Designstudio anfing, hat sich zu einer Full-Service-Digitalagentur 
              entwickelt, die technische Expertise mit strategischem Marketing verbindet – immer 
              mit dem Fokus auf B2B-Kunden und ihre spezifischen Herausforderungen.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/Uli.jpg" 
                alt="ooliv Gründer Ulrich Merkel" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-brand-background p-4 rounded-lg shadow-lg">
              <p className="font-bold">Ulrich Merkel</p>
              <p className="text-sm text-brand-text">Gründer & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
