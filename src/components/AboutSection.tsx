
import React from 'react';
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section className="py-24 bg-brand-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            👀 People Choose Agencies. Not Just Services.
          </h2>
          <p className="text-xl text-center mb-12 text-brand-text/80">
            We believe strong partnerships build strong websites. That's why working with ooliv feels like working with a close, strategic partner — not just a service provider.
          </p>
          
          <div className="space-y-6 text-lg">
            <p>
              At ooliv, we work eye to eye with our clients: down-to-earth, transparent, modern. Our team combines creativity, strategy, and cutting-edge tech (like ChatGPT & Midjourney) to craft websites that don't just look good but drive measurable business value.
            </p>
            <p>
              We move fast, communicate clearly, and make things easy — from kickoff to long-term support. Most of our clients say the same thing: "You're always there when we need you." That's exactly how we like to work.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Separator className="w-full max-w-4xl mx-auto" />
      </div>
    </section>
  );
};

export default AboutSection;
