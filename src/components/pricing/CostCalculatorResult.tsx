import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CalculationResult } from './CostCalculatorLogic';
import { formatEUR } from './utils';
import { companySizeLabels, complexityLabels, timelineLabels } from './CostCalculatorSchema';

interface CostCalculatorResultProps {
  result: CalculationResult | null;
  includeVAT: boolean;
  onVATToggle: (checked: boolean) => void;
  onRequestConsultation: () => void;
}

const CostCalculatorResult: React.FC<CostCalculatorResultProps> = ({ 
  result, 
  includeVAT, 
  onVATToggle, 
  onRequestConsultation 
}) => {
  if (!result) {
    return (
      <div className="bg-background p-8 rounded-xl border border-border">
        <p className="text-muted-foreground text-center text-sm">
          Wählen Sie Ihre Anforderungen links aus und klicken Sie auf "Kalkulation berechnen"
        </p>
      </div>
    );
  }

  const displayRangeMin = includeVAT ? result.rangeMinWithVAT : result.rangeMin;
  const displayRangeMax = includeVAT ? result.rangeMaxWithVAT : result.rangeMax;
  const displayTotal = includeVAT ? result.totalWithVAT : result.total;
  const displayMonthly = includeVAT ? result.monthlyTotalWithVAT : result.monthlyTotal;

  return (
    <div className="bg-background p-8 rounded-xl border-2 border-border">
      <h3 className="text-2xl font-bold text-foreground mb-6">Ihre geschätzte Investition</h3>
      
      <div className="flex items-center justify-between mb-6 p-4 border border-border rounded-lg">
        <label htmlFor="vat-toggle" className="text-sm font-medium cursor-pointer">
          Preise inklusive 19% USt. anzeigen
        </label>
        <Switch 
          id="vat-toggle"
          checked={includeVAT} 
          onCheckedChange={onVATToggle}
          aria-label="USt. ein-/ausblenden"
        />
      </div>
      
      <div className="text-center mb-8 p-6 border-2 border-foreground rounded-lg">
        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          {formatEUR(displayRangeMin)} – {formatEUR(displayRangeMax)}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Empfohlenes Budget: ca. {formatEUR(displayTotal)}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {includeVAT ? 'Alle Beträge inkl. 19% USt.' : 'Alle Beträge netto, zzgl. USt.'}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Einmalige Kosten:</h4>
        
        {result.breakdown.concept > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Konzept & Strategie</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.concept * 1.19 : result.breakdown.concept)}</span>
          </div>
        )}
        
        {result.breakdown.design > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Webdesign (UX/UI)</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.design * 1.19 : result.breakdown.design)}</span>
          </div>
        )}
        
        {result.breakdown.implementation > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Technische Umsetzung</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.implementation * 1.19 : result.breakdown.implementation)}</span>
          </div>
        )}
        
        {result.breakdown.languages > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Mehrsprachigkeit ({result.assumptions.languages} Sprachen)</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.languages * 1.19 : result.breakdown.languages)}</span>
          </div>
        )}
        
        {result.breakdown.seo > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Basis-SEO & 301-Redirects</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.seo * 1.19 : result.breakdown.seo)}</span>
          </div>
        )}
        
        {result.breakdown.golive > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>GoLive & Schulung</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.golive * 1.19 : result.breakdown.golive)}</span>
          </div>
        )}
        
        {result.breakdown.adsSetup > 0 && (
          <div className="flex justify-between text-sm border-b border-border pb-2">
            <span>Google Ads Setup</span>
            <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.adsSetup * 1.19 : result.breakdown.adsSetup)}</span>
          </div>
        )}
        
        <div className="border-t-2 border-border pt-3 flex justify-between font-bold text-base">
          <span>Gesamt (Projektkosten)</span>
          <span className="text-foreground">{formatEUR(displayTotal)}</span>
        </div>
      </div>

      {result.monthlyTotal > 0 && (
        <div className="space-y-3 mb-6 p-4 border-2 border-border rounded-lg">
          <div className="flex items-start gap-2 mb-3">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">
              Laufende Kosten (monatlich):
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            <strong>Hinweis:</strong> Diese Leistungen sind <strong>nicht</strong> in der Projektsumme enthalten.
          </p>
          
          {result.breakdown.ongoingSeo > 0 && (
            <div className="flex justify-between text-sm">
              <span>SEO-Betreuung</span>
              <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.ongoingSeo * 1.19 : result.breakdown.ongoingSeo)}/Monat</span>
            </div>
          )}
          
          {result.breakdown.ongoingAds > 0 && (
            <div className="flex justify-between text-sm">
              <span>Ads-Betreuung</span>
              <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.ongoingAds * 1.19 : result.breakdown.ongoingAds)}/Monat</span>
            </div>
          )}
          
          {result.breakdown.maintenance > 0 && (
            <div className="flex justify-between text-sm">
              <span>Wartung & Support</span>
              <span className="font-medium">{formatEUR(includeVAT ? result.breakdown.maintenance * 1.19 : result.breakdown.maintenance)}/Monat</span>
            </div>
          )}
          
          <div className="border-t-2 border-border pt-2 flex justify-between font-bold text-sm">
            <span>Gesamt (monatlich)</span>
            <span className="text-foreground">{formatEUR(displayMonthly)}/Monat</span>
          </div>
        </div>
      )}

      <div className="border border-border p-4 rounded text-xs text-muted-foreground mb-6">
        <p className="font-bold mb-2">Annahmen:</p>
        <ul className="space-y-1">
          <li>• {result.assumptions.pages} Seiten</li>
          <li>• {result.assumptions.languages} Sprache(n)</li>
          <li>• Design-Komplexität: {complexityLabels[result.assumptions.complexity as keyof typeof complexityLabels]}</li>
          <li>• Unternehmensgröße: {companySizeLabels[result.assumptions.companySize as keyof typeof companySizeLabels]}</li>
          {result.assumptions.timeline && (
            <li>• Zeitplan: {timelineLabels[result.assumptions.timeline as keyof typeof timelineLabels]}</li>
          )}
        </ul>
      </div>

      <Button 
        size="lg" 
        className="w-full mb-3"
        onClick={onRequestConsultation}
      >
        Beratung anfragen
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        Richtwerte – finales Angebot nach 15-Min-Abstimmung
      </p>
    </div>
  );
};

export default React.memo(CostCalculatorResult);
