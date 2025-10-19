import React from 'react';
import { CalculationResult } from './CostCalculatorLogic';
import { CalculatorFormValues } from './CostCalculatorSchema';
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

  const { rangeMin, rangeMax, monthlyTotal } = result;

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
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Monatlich</h4>
            <div className="text-2xl font-bold text-foreground">
              {formatEUR(monthlyTotal)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">netto, zzgl. 19% USt.</p>
          </div>
        )}

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
