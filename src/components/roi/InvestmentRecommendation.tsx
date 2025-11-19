import React from 'react';
import { ROICalculationResult } from './ROICalculatorLogic';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Calendar, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestmentRecommendationProps {
  result: ROICalculationResult;
}

const InvestmentRecommendation: React.FC<InvestmentRecommendationProps> = ({ result }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const isHighROI = result.investment.roiPercentage > 200;
  const isQuickBreakeven = result.investment.monthsToBreakeven <= 6;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Investment-Empfehlung
        </h3>
        <p className="text-muted-foreground">
          Basierend auf Ihrer ROI-Projektion
        </p>
      </div>

      {/* Investment Summary */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/30">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-2">
                {result.investment.model}
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    <span className="font-semibold text-foreground">
                      {formatCurrency(result.investment.costMin)}–{formatCurrency(result.investment.costMax)}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    <span className="font-semibold text-foreground">
                      {result.investment.duration}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    <span className="font-semibold text-foreground">
                      {result.investment.roiPercentage > 0 ? '+' : ''}{result.investment.roiPercentage}% ROI
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3 pl-16">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Jährlicher Impact:</strong> {formatCurrency(result.investment.yearlyImpact)} zusätzlicher Umsatz
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Break-Even:</strong> Investment amortisiert sich in {result.investment.monthsToBreakeven} {result.investment.monthsToBreakeven === 1 ? 'Monat' : 'Monaten'}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Langfristig:</strong> Nachhaltige Verbesserungen mit kontinuierlichem ROI über Jahre hinweg
              </p>
            </div>
          </div>

          {/* Assessment Badge */}
          {(isHighROI || isQuickBreakeven) && (
            <div className="pl-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold border border-green-500/20">
                <CheckCircle2 className="h-4 w-4" />
                {isHighROI && isQuickBreakeven 
                  ? 'Exzellente Investment-Opportunity – Hoher ROI & schneller Break-Even'
                  : isHighROI 
                    ? 'Starke Investment-Opportunity – Hoher langfristiger ROI'
                    : 'Schneller Break-Even – Investment amortisiert sich rasch'}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={handleStartProject}
          className="group"
        >
          Mit ooliv durchstarten
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
        >
          <Link to="/investition">
            Alle Engagement-Modelle ansehen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Additional Info */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Im kostenlosen Strategiegespräch analysieren wir Ihre spezifische Situation und erstellen eine detaillierte ROI-Projektion mit konkreten Quick Wins und langfristigen Optimierungspotenzialen.
        </p>
      </div>
    </div>
  );
};

export default InvestmentRecommendation;
