
import React, { useRef, useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import { Icon } from '@/components/ui/icon';

interface ProcessStep {
  icon: LucideIcon;
  number?: string;
  title: string;
  subtitle?: string;
  description: string;
}

type LayoutType = 'grid' | 'timeline' | 'cards';
type GridColumns = 2 | 3 | 4 | 5;

interface BaseProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  backgroundColor?: 'white' | 'mint' | 'gray';
  layout?: LayoutType;
  gridColumns?: GridColumns;
  showConnectors?: boolean;
  alignment?: 'left' | 'center';
  animationDelay?: number;
  animationStagger?: number;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
  animationDistance?: number;
  disableAnimations?: boolean;
}

const BaseProcess = ({ 
  title, 
  subtitle, 
  steps, 
  backgroundColor = 'mint',
  layout = 'cards',
  gridColumns = 4,
  showConnectors = true,
  alignment = 'center',
  animationDelay = 0,
  animationStagger = 0.1,
  animationDirection = 'up',
  animationDistance = 30,
  disableAnimations = false
}: BaseProcessProps) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !disableAnimations && !prefersReducedMotion;
  
  // Timeline progress tracking
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  // Smooth spring animation for progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (layout !== 'timeline') return;
    
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setTimelineProgress(latest);
    });
    
    return () => unsubscribe();
  }, [smoothProgress, layout]);

  // Track which step is currently in view
  useEffect(() => {
    if (layout !== 'timeline' || stepRefs.current.length === 0) return;

    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStepIndex(index);
          }
        },
        { threshold: 0.5, rootMargin: '-100px 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [layout, steps.length]);

  // Scroll to specific step
  const scrollToStep = (index: number) => {
    const targetRef = stepRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };
  const bgClass = {
    white: 'bg-white',
    mint: 'bg-medico-mint/30',
    gray: 'bg-gray-50'
  }[backgroundColor];

  const alignmentClass = alignment === 'left' ? 'text-left' : 'text-center';
  const alignmentMxClass = alignment === 'left' ? '' : 'mx-auto';

  // Animation variants
  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: animationDistance,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Grid layout - horizontal with icons and connection lines
  const renderGridLayout = () => {
    const gridColsClass = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5'
    }[gridColumns];

    return (
      <StaggerReveal 
        className={`grid grid-cols-1 ${gridColsClass} gap-8`}
        stagger={animationStagger}
        delay={animationDelay}
        distance={animationDistance}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className={`${alignmentClass} group relative`}
            whileHover={shouldAnimate ? { y: -5 } : {}}
            transition={{ duration: 0.2 }}
          >
            {/* Connection line */}
            {showConnectors && index < steps.length - 1 && (
              <motion.div 
                className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 z-0" 
                style={{ width: 'calc(100% - 2rem)' }}
                initial="hidden"
                animate="visible"
                variants={shouldAnimate ? lineVariants : {}}
              />
            )}
            
            <div className="relative z-10 mb-6">
              <motion.div 
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 group-hover:bg-medico-turquoise group-hover:text-white transition-all duration-300"
                initial="hidden"
                animate="visible"
                variants={shouldAnimate ? iconVariants : {}}
                whileHover={shouldAnimate ? { scale: 1.1, rotate: 5 } : {}}
              >
                <step.icon className="h-6 w-6" />
              </motion.div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">
              {step.title}
            </h3>
            
            {step.subtitle && (
              <p className="text-sm text-medico-turquoise mb-3 font-semibold">
                {step.subtitle}
              </p>
            )}
            
            <p className="text-medico-darkGreen/80 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </StaggerReveal>
    );
  };

  // Timeline layout - alternating left/right with progress indicator
  const renderTimelineLayout = () => (
    <div className="relative" ref={timelineRef}>
      {/* Progress indicator line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none">
        {/* Background line */}
        <div className="absolute inset-0 bg-gray-200 rounded-full" />
        {/* Progress line */}
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-medico-turquoise to-accent-primary rounded-full origin-top"
          style={{ 
            scaleY: timelineProgress,
            transformOrigin: 'top'
          }}
        />
        {/* Animated dot at progress end */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full shadow-lg"
          style={{
            top: `${timelineProgress * 100}%`,
            opacity: timelineProgress > 0 ? 1 : 0
          }}
        >
          <motion.div
            className="absolute inset-0 bg-accent-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.3, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Interactive step indicators */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
        {steps.map((step, index) => {
          const position = ((index + 0.5) / steps.length) * 100;
          const isActive = activeStepIndex === index;
          const isPassed = timelineProgress * 100 >= position;
          
          return (
            <motion.button
              key={index}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer group"
              style={{ top: `${position}%` }}
              onClick={() => scrollToStep(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Jump to step ${index + 1}: ${step.title}`}
            >
              {/* Outer ring for active step */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 -m-2 border-2 border-accent-primary rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                />
              )}
              
              {/* Step dot */}
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isPassed 
                    ? 'bg-accent-primary shadow-md' 
                    : 'bg-gray-300 group-hover:bg-gray-400'
                }`}
                animate={{
                  scale: isActive ? 1.3 : 1
                }}
              >
                {/* Step number tooltip */}
                <motion.div
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-medico-darkGreen text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={false}
                >
                  {step.number || (index + 1)}. {step.title}
                </motion.div>
              </motion.div>
              
              {/* Pulse animation for active step */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-accent-primary rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal 
              key={index}
              direction={isEven ? 'left' : 'right'}
              distance={animationDistance}
              delay={animationDelay + (index * animationStagger)}
            >
              <motion.div 
                ref={(el) => (stepRefs.current[index] = el)}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative z-10`}
                whileHover={shouldAnimate ? { scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-16 h-16 bg-medico-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-md relative z-20"
                      initial="hidden"
                      animate="visible"
                      variants={shouldAnimate ? iconVariants : {}}
                      whileHover={shouldAnimate ? { scale: 1.15, rotate: 360 } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="h-8 w-8 text-medico-turquoise" />
                    </motion.div>
                    {step.number && shouldAnimate && (
                      <span className="text-5xl font-bold text-medico-turquoise/20">
                        <AnimatedCounter end={parseInt(step.number)} duration={1500} />
                      </span>
                    )}
                    {step.number && !shouldAnimate && (
                      <span className="text-5xl font-bold text-medico-turquoise/20">{step.number}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-medico-darkGreen">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="text-lg text-medico-turquoise mb-3 font-semibold">
                      {step.subtitle}
                    </p>
                  )}
                  <p className="text-medico-darkGreen/80 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );

  // Cards layout - original card-based grid
  const renderCardsLayout = () => {
    const gridColsClass = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
      5: 'md:grid-cols-3 lg:grid-cols-5'
    }[gridColumns];

    return (
      <StaggerReveal 
        className={`grid grid-cols-1 ${gridColsClass} gap-8`}
        stagger={animationStagger}
        delay={animationDelay}
        distance={animationDistance}
      >
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              whileHover={shouldAnimate ? { 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              } : {}}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={shouldAnimate ? iconVariants : {}}
                    whileHover={shouldAnimate ? { scale: 1.1, rotate: 5 } : {}}
                  >
                    <Icon 
                      icon={step.icon}
                      variant="round"
                      size="lg"
                      background="strong"
                      className="text-accent-primary"
                    />
                  </motion.div>
                  {step.number && shouldAnimate && (
                    <motion.div 
                      className="absolute -top-2 -right-2 bg-accent-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2 
                      }}
                    >
                      <AnimatedCounter end={parseInt(step.number)} duration={1500} />
                    </motion.div>
                  )}
                  {step.number && !shouldAnimate && (
                    <div className="absolute -top-2 -right-2 bg-accent-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">{step.title}</h3>
              {step.subtitle && (
                <p className="text-sm text-medico-turquoise mb-3 font-semibold text-center">
                  {step.subtitle}
                </p>
              )}
              <p className="text-medico-darkGreen/80 leading-relaxed text-center">{step.description}</p>
            </motion.div>
            
            {showConnectors && index < steps.length - 1 && (
              <motion.div 
                className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-primary/30 transform -translate-y-1/2"
                initial="hidden"
                animate="visible"
                variants={shouldAnimate ? lineVariants : {}}
              />
            )}
          </div>
        ))}
      </StaggerReveal>
    );
  };

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={`${alignmentClass} mb-16`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen ${alignmentMxClass}`} style={{ lineHeight: '1.3' }}>
              {title}
            </h2>
            <div className={`w-20 h-1 bg-accent-primary mb-8 ${alignmentMxClass}`}></div>
            {subtitle && (
              <p className={`text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl ${alignmentMxClass}`} style={{ lineHeight: '1.6' }}>
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        
        {layout === 'grid' && renderGridLayout()}
        {layout === 'timeline' && renderTimelineLayout()}
        {layout === 'cards' && renderCardsLayout()}
      </div>
    </section>
  );
};

export default BaseProcess;
