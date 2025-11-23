
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { H1, LargeParagraph } from '@/components/ui/typography';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

const AboutUsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <Section className="relative bg-[#F5F7F7] overflow-hidden font-satoshi min-h-screen flex items-center" spacing="large">
      {/* Floating circles animation - consistent with master */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
        <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
        <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
        <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
      </div>
      
      <div className="relative z-20 w-full">
        <Container size="default">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
            {/* Main heading - using typography system */}
            <H1 className="mb-6 sm:mb-8">
              Die Digitalagentur aus Mainz, die anders arbeitet.
            </H1>
            
            {/* Subtitle - using typography system */}
            <LargeParagraph className="mb-8 sm:mb-10">
              Persönlich geführt, strategisch fokussiert und mit einem hybriden Team aus UX, Design, Entwicklung, Content und AI-Workflows.
            </LargeParagraph>
            
            {/* CTA buttons - now using design system */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                variant="primary"
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleStartProject}
              >
                Lernen wir uns kennen
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto" 
                asChild
              >
                <Link to="/referenzen">
                  Wie wir arbeiten
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Visual transition indicator - consistent with master */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#0BC3C3]/50 to-[#0BC3C3]/80 rounded-full animate-pulse"></div>
          <div className="flex space-x-1">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#0BC3C3]/80 rounded-full animate-pulse"></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#0BC3C3]/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#0BC3C3]/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsHero;
