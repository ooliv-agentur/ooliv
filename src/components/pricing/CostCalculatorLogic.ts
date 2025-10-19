import { CalculatorFormValues, companySizeMultipliers, complexityMultipliers, basePrices } from './CostCalculatorSchema';

export interface CalculationResult {
  subtotal: number;
  total: number;
  totalWithVAT: number;
  rangeMin: number;
  rangeMax: number;
  rangeMinWithVAT: number;
  rangeMaxWithVAT: number;
  monthlyTotal: number;
  monthlyTotalWithVAT: number;
  breakdown: {
    concept: number;
    design: number;
    implementation: number;
    languages: number;
    secondInstance: number;
    seo: number;
    golive: number;
    adsSetup: number;
    ongoingSeo: number;
    ongoingAds: number;
    maintenance: number;
  };
  assumptions: {
    pages: number;
    languages: number;
    complexity: string;
    companySize: string;
    timeline?: string;
  };
}

export const calculateCost = (data: CalculatorFormValues): CalculationResult => {
  const pagesFactor = data.pages <= 8 ? 1.0 : data.pages <= 20 ? 1.25 : 1.5;
  
  const conceptCost = data.modules.concept ? basePrices.concept : 0;
  
  const designCost = data.modules.design 
    ? basePrices.design * complexityMultipliers[data.complexity] * pagesFactor 
    : 0;
  
  const implementationCost = data.modules.implementation 
    ? basePrices.implementation * pagesFactor 
    : 0;
  
  const languageCost = data.languages > 1 && (data.modules.design || data.modules.implementation)
    ? (designCost + implementationCost) * basePrices.languageMultiplier * (data.languages - 1) 
    : 0;
  
  const secondInstanceCost = data.instances === '2' ? basePrices.secondInstance : 0;
  
  const seoCost = data.modules.seo ? basePrices.seo : 0;
  const goliveCost = data.modules.golive ? basePrices.golive : 0;
  const adsSetupCost = data.modules.adsSetup ? basePrices.adsSetup : 0;
  
  const ongoingSeoCost = data.modules.ongoingSeo ? basePrices.ongoingSeo : 0;
  const ongoingAdsCost = data.modules.ongoingAds ? basePrices.ongoingAds : 0;
  const maintenanceCost = data.modules.maintenance ? basePrices.maintenance : 0;
  
  const monthlyTotal = ongoingSeoCost + ongoingAdsCost + maintenanceCost;
  
  const subtotal = conceptCost + designCost + implementationCost + languageCost + 
                   secondInstanceCost + seoCost + goliveCost + adsSetupCost;
  
  const total = subtotal * companySizeMultipliers[data.companySize];
  
  const totalWithVAT = total * (1 + basePrices.vatRate);
  const monthlyTotalWithVAT = monthlyTotal * (1 + basePrices.vatRate);
  
  const rangeMin = Math.round((total * 0.9) / 100) * 100;
  const rangeMax = Math.round((total * 1.1) / 100) * 100;
  const rangeMinWithVAT = Math.round((rangeMin * (1 + basePrices.vatRate)) / 100) * 100;
  const rangeMaxWithVAT = Math.round((rangeMax * (1 + basePrices.vatRate)) / 100) * 100;
  
  return {
    subtotal: Math.round(subtotal),
    total: Math.round(total),
    totalWithVAT: Math.round(totalWithVAT),
    rangeMin,
    rangeMax,
    rangeMinWithVAT,
    rangeMaxWithVAT,
    monthlyTotal,
    monthlyTotalWithVAT: Math.round(monthlyTotalWithVAT),
    breakdown: {
      concept: Math.round(conceptCost),
      design: Math.round(designCost),
      implementation: Math.round(implementationCost),
      languages: Math.round(languageCost),
      secondInstance: secondInstanceCost,
      seo: seoCost,
      golive: goliveCost,
      adsSetup: adsSetupCost,
      ongoingSeo: ongoingSeoCost,
      ongoingAds: ongoingAdsCost,
      maintenance: maintenanceCost,
    },
    assumptions: {
      pages: data.pages,
      languages: data.languages,
      complexity: data.complexity,
      companySize: data.companySize,
      timeline: data.timeline,
    },
  };
};
