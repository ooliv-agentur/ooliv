import React from 'react';
import { CalculationResult } from './CostCalculatorLogic';
import { CalculatorFormValues } from './CostCalculatorSchema';
import { formatEUR } from './utils';
import { CostCalculatorContactForm } from './CostCalculatorContactForm';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

  const { rangeMin, rangeMax, oneTimeTotal, monthlyTotal } = result;
  
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { source: 'CostCalculator', variant: 'project' } 
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border-2 border-[#0BC3C3] p-6 lg:p-10 shadow-lg">
        {/* Price Range with Visual Bar */}
        <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
          <h3 className="text-sm font-bold text-[#0BC3C3] mb-4 uppercase tracking-wide">Ihre Investition</h3>
          <div className="text-5xl md:text-6xl font-bold mb-4 text-[#0D0D0D]">
            {formatEUR(oneTimeTotal)}
          </div>
          
          {/* Visual Price Range Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm font-medium text-[#666666] mb-2">
              <span>{formatEUR(rangeMin)}</span>
              <span>{formatEUR(rangeMax)}</span>
            </div>
            <div className="h-3 bg-[#F0F0F0] rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-[#0BC3C3] to-[#09A8A8] rounded-full"
                style={{ width: '100%' }}
              ></div>
              <div 
                className="absolute top-0 h-full w-1 bg-[#0D0D0D] shadow-lg"
                style={{ 
                  left: `${((oneTimeTotal - rangeMin) / (rangeMax - rangeMin)) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
              ></div>
            </div>
          </div>
          
          <p className="text-base text-[#666666] leading-relaxed mt-4">
            Die meisten Kunden liegen zwischen <strong className="text-[#0D0D0D]">{formatEUR(rangeMin)}</strong> und <strong className="text-[#0D0D0D]">{formatEUR(rangeMax)}</strong>.
          </p>
          <p className="text-sm text-[#0BC3C3] font-semibold mt-2">
            Kostenlose 15-Minuten-Einschätzung sichern.
          </p>
        </div>

        {/* Monthly Costs */}
        {monthlyTotal > 0 && (
          <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
            <h4 className="text-sm font-bold text-[#0BC3C3] mb-3 uppercase tracking-wide">Monatliche Betreuung</h4>
            <div className="text-3xl md:text-4xl font-bold text-[#0D0D0D]">
              {formatEUR(monthlyTotal)}<span className="text-xl text-[#666666]">/Monat</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mb-6">
          <Button
            onClick={handleCTA}
            className="w-full bg-[#0BC3C3] hover:bg-[#09A8A8] text-white text-lg font-bold py-6 rounded-xl group"
            size="lg"
          >
            Kostenloses Konzept sichern
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#F0F0F0] rounded-xl p-4 text-sm text-[#666666] leading-relaxed text-center">
          Alle Preise netto, zzgl. 19% USt. • Unverbindliche Schätzung • Detailliertes Angebot nach Erstgespräch
        </div>
      </div>

      {/* Inline Contact Form */}
      <CostCalculatorContactForm calculationResult={result} formData={formData} />
    </div>
  );
};

export default React.memo(CostCalculatorResult);
