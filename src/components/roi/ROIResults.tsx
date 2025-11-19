import React from 'react';
import { ROICalculationResult } from './ROICalculatorLogic';
import { TrendingUp, TrendingDown, ArrowRight, Users, Euro, Target, Percent } from 'lucide-react';

interface ROIResultsProps {
  result: ROICalculationResult;
}

const ROIResults: React.FC<ROIResultsProps> = ({ result }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-DE').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Ihre ROI-Projektion
        </h3>
        <p className="text-muted-foreground">
          Basierend auf Ihren Metriken und unserem Track Record
        </p>
      </div>

      {/* Before/After Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Current State */}
        <div className="bg-muted/30 p-6 rounded-xl border border-border">
          <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
            Aktueller Status
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Conversions/Monat
              </span>
              <span className="font-semibold text-foreground">{formatNumber(result.current.monthlyConversions)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Euro className="h-4 w-4" />
                Umsatz/Monat
              </span>
              <span className="font-semibold text-foreground">{formatCurrency(result.current.monthlyRevenue)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                CAC
              </span>
              <span className="font-semibold text-foreground">{formatCurrency(result.current.effectiveCac)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Marketing ROI
              </span>
              <span className="font-semibold text-foreground">{result.current.roi}%</span>
            </div>
          </div>
        </div>

        {/* Projected State */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/30">
          <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            Nach Transformation
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Conversions/Monat
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{formatNumber(result.projected.monthlyConversions)}</span>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +{result.projected.improvementConversion}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Euro className="h-4 w-4" />
                Umsatz/Monat
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{formatCurrency(result.projected.monthlyRevenue)}</span>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +{result.projected.improvementRevenue}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                CAC
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{formatCurrency(result.projected.effectiveCac)}</span>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  -{result.projected.improvementCac}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Marketing ROI
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{result.projected.roi}%</span>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {result.projected.roi > result.current.roi ? '+' : ''}{result.projected.roi - result.current.roi}pp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card p-6 rounded-xl border border-border text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            +{formatCurrency(result.projected.monthlyRevenue - result.current.monthlyRevenue)}
          </div>
          <div className="text-sm text-muted-foreground">
            Zusätzlicher Umsatz pro Monat
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {formatCurrency(result.investment.yearlyImpact)}
          </div>
          <div className="text-sm text-muted-foreground">
            Jährlicher Impact
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {result.investment.monthsToBreakeven < 12 
              ? `${result.investment.monthsToBreakeven} Monate` 
              : '12+ Monate'}
          </div>
          <div className="text-sm text-muted-foreground">
            Break-Even Point
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/30 p-4 rounded-lg border border-border">
        <p className="text-xs text-muted-foreground text-center">
          <strong>Hinweis:</strong> Diese Projektion basiert auf unserem Track Record aus 100+ Transformationsprojekten. 
          Tatsächliche Ergebnisse können variieren und hängen von vielen Faktoren ab. Die gezeigten Verbesserungen 
          entsprechen realen Case Studies mit nachweisbaren Business Outcomes.
        </p>
      </div>
    </div>
  );
};

export default ROIResults;
