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
  if (!result || isNaN(result.rangeMin) || isNaN(result.rangeMax)) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#E5E5E5] p-8 lg:p-10 shadow-sm flex items-center justify-center min-h-[400px]">
        <p className="text-[#666666] text-center text-base">
          Wählen Sie Optionen für Ihre Kostenschätzung.
        </p>
      </div>
    );
  }

  const { rangeMin, rangeMax, monthlyTotal } = result;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border-2 border-[#E5E5E5] p-6 lg:p-10 shadow-sm">
        {/* Price Range */}
        <div className="mb-8 pb-8 border-b-2 border-[#E5E5E5]">
          <h3 className="text-sm font-semibold text-[#666666] mb-3 uppercase tracking-wide">Geschätzter Preis</h3>
          <div className="text-4xl md:text-5xl font-bold mb-3 text-[#0D0D0D]">
            ab {formatEUR(rangeMin)}
          </div>
          <p className="text-sm text-[#666666]">
            Alle Preise netto, zzgl. 19% USt.
          </p>
        </div>

        {/* Monthly Costs */}
        {monthlyTotal > 0 && (
          <div className="mb-8 pb-8 border-b-2 border-[#E5E5E5]">
            <h4 className="text-sm font-semibold text-[#666666] mb-3 uppercase tracking-wide">Monatlich</h4>
            <div className="text-3xl font-bold text-[#0D0D0D]">
              ab {formatEUR(monthlyTotal)}
            </div>
            <p className="text-sm text-[#666666] mt-2">netto, zzgl. 19% USt.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-[#F7F8FC] rounded-xl p-4 text-sm text-[#666666] leading-relaxed">
          Schätzung. Detailliertes Angebot nach Gespräch.
        </div>
      </div>

      {/* Inline Contact Form */}
      <CostCalculatorContactForm calculationResult={result} formData={formData} />
    </div>
  );
};

export default React.memo(CostCalculatorResult);
