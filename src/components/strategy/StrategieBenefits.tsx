
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Target, TrendingUp, Users, Zap, DollarSign, BarChart } from 'lucide-react';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const StrategieBenefits = () => {
  const benefits = [
    {
      IconComponent: Target,
      title: "Sie wissen, was zu tun ist",
      description: "Keine diffusen Ideen mehr. Wir entwickeln eine klare Strategie mit priorisierten Maßnahmen – basierend auf Daten, nicht auf Bauchgefühl. Sie wissen nach der Analyse genau, welche Schritte jetzt Sinn machen."
    },
    {
      IconComponent: TrendingUp,
      title: "Messbar bessere Ergebnisse",
      description: "Keine leeren Versprechen. Unsere Kunden steigern ihre Lead-Qualität im Schnitt um +180% und ihre Conversion Rate um +240%. Sehen Sie sich unsere erfolgreichen Projekte in den Referenzen an."
    },
    {
      IconComponent: Users,
      title: "Von der Strategie zur Umsetzung",
      description: "Nicht nur ein Plan, sondern auch Unterstützung bei der Umsetzung. Ich koordiniere Ihr Team persönlich, definiere klare Meilensteine und sorge dafür, dass es wirklich passiert."
    },
    {
      IconComponent: Zap,
      title: "Direkter Draht zu 16+ Jahren Erfahrung",
      description: "Direkte Zusammenarbeit mit mir – keine Junior-Berater, keine Agentur-Ebenen. Dabei profitieren Sie von 16+ Jahren Erfahrung in digitaler Transformation für B2B-Unternehmen."
    },
    {
      IconComponent: DollarSign,
      title: "Transparente Preisgestaltung",
      description: "Keine versteckten Kosten. Sie erhalten vorab ein klares Angebot mit transparenter Leistungsbeschreibung. Sie wissen genau, was Sie investieren und was Sie dafür bekommen."
    },
    {
      IconComponent: BarChart,
      title: "Messbare KPIs von Anfang an",
      description: "Wir definieren gemeinsam klare Erfolgskriterien und tracken kontinuierlich den Fortschritt. Keine Vanity-Metriken – nur KPIs, die für Ihr Business wirklich zählen."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Was Sie von mir bekommen
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto`}>
              Klare Strategien, messbare Ergebnisse und jemanden, der Sie von der Analyse bis zur Umsetzung begleitet.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(3, 'large')}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.IconComponent;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center p-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>{benefit.title}</h3>
                <p className={getBodyClasses('base', 'secondary', 'center')}>
                  {benefit.title === "Messbar bessere Ergebnisse" ? (
                    <>
                      Keine leeren Versprechen. Unsere Kunden steigern ihre Lead-Qualität im Schnitt um +180% und ihre Conversion Rate um +240%. Sehen Sie sich unsere <Link to="/referenzen" className="text-primary hover:underline font-medium">erfolgreichen Projekte</Link> an.
                    </>
                  ) : (
                    benefit.description
                  )}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieBenefits;
