import { CalculatorFormValues, companySizeMultipliers, projectTypeMultipliers, basePrices } from './CostCalculatorSchema';

export interface CalculationResult {
  subtotal: number;
  total: number;
  rangeMin: number;
  rangeMax: number;
  monthlyTotal: number;
  breakdown: {
    concept: number;
    design: number;
    implementation: number;
    languages: number;
    seo: number;
    golive: number;
    adsSetup: number;
    ongoingSeo: number;
    ongoingAds: number;
    maintenance: number;
  };
  assumptions: {
    projectType: string;
    cmsType: string;
    languages: string[];
    companySize: string;
  };
}

export const calculateCost = (data: CalculatorFormValues): CalculationResult => {
  // Count selected languages
  const selectedLanguagesArray = Object.entries(data.selectedLanguages)
    .filter(([_, isSelected]) => isSelected)
    .map(([lang, _]) => lang);
  
  const languageCount = selectedLanguagesArray.length;
  
  // Base costs
  const conceptCost = data.modules.concept ? basePrices.concept : 0;
  
  const designCost = data.modules.design ? basePrices.design : 0;
  
  const implementationCost = data.modules.implementation 
    ? (data.cmsType === 'with-cms' ? basePrices.implementationWithCms : basePrices.implementationNoCms)
    : 0;
  
  // Language cost: +25% per additional language (excluding German base)
  const languageCost = languageCount > 1 && (data.modules.design || data.modules.implementation)
    ? (designCost + implementationCost) * basePrices.languageMultiplier * (languageCount - 1)
    : 0;
  
  const seoCost = data.modules.seo ? basePrices.seo : 0;
  const goliveCost = data.modules.golive ? basePrices.golive : 0;
  const adsSetupCost = data.modules.adsSetup ? basePrices.adsSetup : 0;
  
  // Monthly costs
  const ongoingSeoCost = data.modules.ongoingSeo ? basePrices.ongoingSeo : 0;
  const ongoingAdsCost = data.modules.ongoingAds ? basePrices.ongoingAds : 0;
  const maintenanceCost = data.modules.maintenance ? basePrices.maintenance : 0;
  
  const monthlyTotal = ongoingSeoCost + ongoingAdsCost + maintenanceCost;
  
  // Subtotal before multipliers
  const subtotal = conceptCost + designCost + implementationCost + languageCost + 
                   seoCost + goliveCost + adsSetupCost;
  
  // Apply multipliers: project type (relaunch discount) and company size
  const total = subtotal * projectTypeMultipliers[data.projectType] * companySizeMultipliers[data.companySize];
  
  // Range: ±10%
  const rangeMin = Math.round((total * 0.9) / 100) * 100;
  const rangeMax = Math.round((total * 1.1) / 100) * 100;
  
  return {
    subtotal: Math.round(subtotal),
    total: Math.round(total),
    rangeMin,
    rangeMax,
    monthlyTotal: Math.round(monthlyTotal),
    breakdown: {
      concept: Math.round(conceptCost),
      design: Math.round(designCost),
      implementation: Math.round(implementationCost),
      languages: Math.round(languageCost),
      seo: seoCost,
      golive: goliveCost,
      adsSetup: adsSetupCost,
      ongoingSeo: ongoingSeoCost,
      ongoingAds: ongoingAdsCost,
      maintenance: maintenanceCost,
    },
    assumptions: {
      projectType: data.projectType,
      cmsType: data.cmsType,
      languages: selectedLanguagesArray,
      companySize: data.companySize,
    },
  };
};
