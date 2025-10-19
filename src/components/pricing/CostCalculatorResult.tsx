import React from 'react';
import { CalculationResult } from './CostCalculatorLogic';
import { CalculatorFormValues, companySizeLabels, cmsTypeLabels } from './CostCalculatorSchema';
import { formatEUR } from './utils';
import { CostCalculatorContactForm } from './CostCalculatorContactForm';

interface CostCalculatorResultProps {
  result: CalculationResult | null;
  formData: CalculatorFormValues;
}

const CostCalculatorResult: React.FC<CostCalculatorResultProps> = ({ result, formData }) => {
  if (!result) {
    return (
      <div className="bg-background rounded-xl border p-8 shadow-sm flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground text-center text-sm">
          Wählen Sie Optionen für Ihre Kostenschätzung.
        </p>
      </div>
    );
  }

  const { rangeMin, rangeMax, monthlyTotal, breakdown, assumptions } = result;

  return (
    <div className="space-y-6">
      <div className="bg-background rounded-xl border p-6 lg:p-8 shadow-sm">
        {/* Price Range */}
        <div className="mb-6 pb-6 border-b">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Geschätzter Preis</h3>
          <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            {formatEUR(rangeMin)} - {formatEUR(rangeMax)}
          </div>
          <p className="text-xs text-muted-foreground">
            Alle Preise netto, zzgl. 19% USt.
          </p>
        </div>

        {/* Monthly Costs */}
        {monthlyTotal > 0 && (
          <div className="mb-6 pb-6 border-b">
            <h4 className="text-sm font-medium mb-2">Monatlich</h4>
            <div className="text-2xl font-bold text-foreground">
              {formatEUR(monthlyTotal)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">netto, zzgl. 19% USt.</p>
          </div>
        )}

        {/* Breakdown */}
        <div className="mb-6 pb-6 border-b">
          <h4 className="text-sm font-medium mb-3">Aufschlüsselung</h4>
          
          {/* One-time costs */}
          <div className="space-y-2 mb-4 text-sm">
            {breakdown.concept > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Konzeption</span>
                <span className="font-medium">{formatEUR(breakdown.concept)}</span>
              </div>
            )}
            {breakdown.design > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Design</span>
                <span className="font-medium">{formatEUR(breakdown.design)}</span>
              </div>
            )}
            {breakdown.implementation > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Umsetzung</span>
                <span className="font-medium">{formatEUR(breakdown.implementation)}</span>
              </div>
            )}
            {breakdown.multilingual > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mehrsprachig</span>
                <span className="font-medium">{formatEUR(breakdown.multilingual)}</span>
              </div>
            )}
            {breakdown.seo > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">SEO & Go-Live</span>
                <span className="font-medium">{formatEUR(breakdown.seo)}</span>
              </div>
            )}
            {breakdown.adsSetup > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Google Ads Setup</span>
                <span className="font-medium">{formatEUR(breakdown.adsSetup)}</span>
              </div>
            )}
          </div>

          {/* Ongoing costs */}
          {monthlyTotal > 0 && (
            <div className="space-y-2 pt-4 border-t text-sm">
              {breakdown.ongoingSeo > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SEO-Betreuung</span>
                  <span className="font-medium">{formatEUR(breakdown.ongoingSeo)}/Mon.</span>
                </div>
              )}
              {breakdown.ongoingAds > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ads-Betreuung</span>
                  <span className="font-medium">{formatEUR(breakdown.ongoingAds)}/Mon.</span>
                </div>
              )}
              {breakdown.maintenance > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wartung</span>
                  <span className="font-medium">{formatEUR(breakdown.maintenance)}/Mon.</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Assumptions */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Annahmen</h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">CMS:</span>
              <span className="font-medium">{cmsTypeLabels[assumptions.cmsType]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sprachen:</span>
              <span className="font-medium">{assumptions.multilingual ? 'Mehrsprachig' : 'Einsprachig'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Größe:</span>
              <span className="font-medium">{companySizeLabels[assumptions.companySize]}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground">
          Schätzung. Detailliertes Angebot nach Gespräch.
        </div>
      </div>

      {/* Inline Contact Form */}
      <CostCalculatorContactForm calculationResult={result} formData={formData} />
    </div>
  );
};

export default React.memo(CostCalculatorResult);
