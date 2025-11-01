import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Check, FileText, Mail, CheckCircle2, MessageSquare } from 'lucide-react';

interface JourneyStep {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const journeySteps: JourneyStep[] = [
  { id: 'hero', icon: <Check className="w-4 h-4" />, label: 'Start' },
  { id: 'trust', icon: <FileText className="w-4 h-4" />, label: 'Vorteile' },
  { id: 'was-sie-erhalten', icon: <Mail className="w-4 h-4" />, label: 'Konzept' },
  { id: 'prototype', icon: <CheckCircle2 className="w-4 h-4" />, label: 'Prototyp' },
  { id: 'process', icon: <MessageSquare className="w-4 h-4" />, label: '3 Schritte' },
  { id: 'lead-form-section', icon: <Check className="w-4 h-4" />, label: 'Formular' },
];

const JourneyLine = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Refs for each section
  const heroRef = useInView({ threshold: 0.5 });
  const trustRef = useInView({ threshold: 0.5 });
  const conceptRef = useInView({ threshold: 0.5 });
  const prototypeRef = useInView({ threshold: 0.5 });
  const processRef = useInView({ threshold: 0.5 });
  const formRef = useInView({ threshold: 0.5 });
  
  useEffect(() => {
    if (formRef.inView) setActiveStep(5);
    else if (processRef.inView) setActiveStep(4);
    else if (prototypeRef.inView) setActiveStep(3);
    else if (conceptRef.inView) setActiveStep(2);
    else if (trustRef.inView) setActiveStep(1);
    else if (heroRef.inView) setActiveStep(0);
  }, [heroRef.inView, trustRef.inView, conceptRef.inView, prototypeRef.inView, processRef.inView, formRef.inView]);

  return (
    <>
      {/* Hidden refs for intersection observer */}
      <div ref={heroRef.ref} id="hero-observer" className="absolute top-[10vh]" />
      <div ref={trustRef.ref} id="trust-observer" className="absolute top-[120vh]" />
      <div ref={conceptRef.ref} id="concept-observer" className="absolute top-[200vh]" />
      <div ref={prototypeRef.ref} id="prototype-observer" className="absolute top-[300vh]" />
      <div ref={processRef.ref} id="process-observer" className="absolute top-[380vh]" />
      <div ref={formRef.ref} id="form-observer" className="absolute top-[450vh]" />
      
      {/* Journey Line - Desktop only */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/20" style={{ height: `${(journeySteps.length - 1) * 56}px` }} />
          
          {/* Active progress line */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary transition-all duration-500"
            style={{ 
              height: `${activeStep * 56}px`,
              top: 0
            }}
          />
          
          {/* Steps */}
          <div className="relative flex flex-col gap-8">
            {journeySteps.map((step, index) => {
              const isActive = index === activeStep;
              const isPassed = index < activeStep;
              
              return (
                <div key={step.id} className="flex items-center gap-3">
                  {/* Icon circle */}
                  <div 
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                      ${isActive ? 'bg-primary text-white scale-110 shadow-lg' : 
                        isPassed ? 'bg-primary/70 text-white' : 
                        'bg-white border-2 border-primary/20 text-primary/40'}
                    `}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Label - only show on active */}
                  <span 
                    className={`
                      text-sm font-medium whitespace-nowrap transition-all duration-300
                      ${isActive ? 'opacity-100 translate-x-0 text-primary' : 'opacity-0 -translate-x-2 text-transparent'}
                    `}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyLine;
