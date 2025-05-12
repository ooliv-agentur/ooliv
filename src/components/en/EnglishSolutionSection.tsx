
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';

const EnglishSolutionSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12" delay={0.2}>
          <h2 className="text-3xl font-bold mb-6 text-brand-heading">
            We develop websites that drive your business forward – with strategy, expertise and technology.
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Our services include: 
            <Link to="/en/web-design" className="text-brand-primary hover:underline"> Web Design</Link>, 
            <Link to="/en/web-development" className="text-brand-primary hover:underline"> Web Development</Link>, 
            <Link to="/en/content-creation" className="text-brand-primary hover:underline"> Content Creation</Link>, 
            <Link to="/en/seo" className="text-brand-primary hover:underline"> SEO Optimization</Link>, 
            <Link to="/en/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> and 
            <Link to="/en/ai-technologies" className="text-brand-primary hover:underline"> AI Technologies</Link>.
          </p>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default EnglishSolutionSection;
