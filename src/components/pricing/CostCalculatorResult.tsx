import React from 'react';
import { CalculationResult } from './CostCalculatorLogic';
import { CalculatorFormValues, projectTypeLabels, cmsTypeLabels, languageLabels, companySizeLabels } from './CostCalculatorSchema';
import { formatEUR } from './utils';
import { CostCalculatorContactForm } from './CostCalculatorContactForm';

interface CostCalculatorResultProps {
  result: CalculationResult | null;
  formData: CalculatorFormValues;
}

const CostCalculatorResult: React.FC<CostCalculatorResultProps> = ({ result, formData }) => {
  if (!result) {
    return (
      <div className="bg-card rounded-lg p-10 lg:p-12 shadow-sm border">
        <p className="text-muted-foreground text-center">
          Passen Sie die Parameter an, um eine Kostenschätzung zu erhalten.
        </p>
      </div>
    );
  }

  const { rangeMin, rangeMax, monthlyTotal, breakdown, assumptions } = result;

  return (
    <div className="bg-card rounded-lg p-10 lg:p-12 shadow-sm border">
      {/* Price Range */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-muted-foreground mb-4">Geschätzter Preis</h3>
        <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {formatEUR(rangeMin)} - {formatEUR(rangeMax)}
        </div>
        <p className="text-sm text-muted-foreground">
          Alle Preise netto, zzgl. 19% USt.
        </p>
      </div>

      {/* Monthly Costs */}
      {monthlyTotal > 0 && (
        <div className="mb-12 pb-12 border-b">
          <h4 className="text-base font-semibold mb-2">Monatliche Kosten</h4>
          <div className="text-3xl font-bold text-primary">
            {formatEUR(monthlyTotal)} / Monat
          </div>
          <p className="text-sm text-muted-foreground mt-1">netto, zzgl. 19% USt.</p>
        </div>
      )}

      {/* Breakdown */}
      <div className="mb-12 pb-12 border-b">
        <h4 className="text-base font-semibold mb-6">Kostenaufschlüsselung</h4>
        
        {/* One-time costs */}
        <div className="space-y-3 mb-6">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Einmalige Kosten</p>
          {breakdown.concept > 0 && (
            <div className="flex justify-between text-base">
              <span>Konzeption & Strategie</span>
              <span className="font-medium">{formatEUR(breakdown.concept)}</span>
            </div>
          )}
          {breakdown.design > 0 && (
            <div className="flex justify-between text-base">
              <span>UX/UI Design</span>
              <span className="font-medium">{formatEUR(breakdown.design)}</span>
            </div>
          )}
          {breakdown.implementation > 0 && (
            <div className="flex justify-between text-base">
              <span>Technische Umsetzung</span>
              <span className="font-medium">{formatEUR(breakdown.implementation)}</span>
            </div>
          )}
          {breakdown.languages > 0 && (
            <div className="flex justify-between text-base">
              <span>Mehrsprachigkeit</span>
              <span className="font-medium">{formatEUR(breakdown.languages)}</span>
            </div>
          )}
          {breakdown.seo > 0 && (
            <div className="flex justify-between text-base">
              <span>SEO-Optimierung</span>
              <span className="font-medium">{formatEUR(breakdown.seo)}</span>
            </div>
          )}
          {breakdown.golive > 0 && (
            <div className="flex justify-between text-base">
              <span>GoLive & Deployment</span>
              <span className="font-medium">{formatEUR(breakdown.golive)}</span>
            </div>
          )}
          {breakdown.adsSetup > 0 && (
            <div className="flex justify-between text-base">
              <span>Ads-Setup</span>
              <span className="font-medium">{formatEUR(breakdown.adsSetup)}</span>
            </div>
          )}
        </div>

        {/* Ongoing costs */}
        {monthlyTotal > 0 && (
          <div className="space-y-3 pt-6 border-t">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Laufende Kosten (monatlich)</p>
            {breakdown.ongoingSeo > 0 && (
              <div className="flex justify-between text-base">
                <span>SEO-Betreuung</span>
                <span className="font-medium">{formatEUR(breakdown.ongoingSeo)}</span>
              </div>
            )}
            {breakdown.ongoingAds > 0 && (
              <div className="flex justify-between text-base">
                <span>Ads-Betreuung</span>
                <span className="font-medium">{formatEUR(breakdown.ongoingAds)}</span>
              </div>
            )}
            {breakdown.maintenance > 0 && (
              <div className="flex justify-between text-base">
                <span>Wartung & Support</span>
                <span className="font-medium">{formatEUR(breakdown.maintenance)}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Assumptions */}
      <div className="mb-12">
        <h4 className="text-base font-semibold mb-4">Annahmen</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Projektart:</span>
            <span className="font-medium">{projectTypeLabels[assumptions.projectType]}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">CMS:</span>
            <span className="font-medium">{cmsTypeLabels[assumptions.cmsType]}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sprachen:</span>
            <span className="font-medium">
              {assumptions.languages
                .map((lang) => languageLabels[lang as keyof typeof languageLabels])
                .join(', ')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Unternehmensgröße:</span>
            <span className="font-medium">{companySizeLabels[assumptions.companySize]}</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Hinweis:</strong> Dies ist eine automatische Kostenschätzung basierend auf 
          Ihren Angaben. Der tatsächliche Preis kann je nach spezifischen Anforderungen und Projektumfang variieren. 
          Gerne erstellen wir Ihnen ein detailliertes, individuelles Angebot.
        </p>
      </div>

      {/* Inline Contact Form */}
      <CostCalculatorContactForm calculationResult={result} formData={formData} />
    </div>
  );
};

export default React.memo(CostCalculatorResult);
