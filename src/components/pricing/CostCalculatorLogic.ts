import { CalculatorFormValues, companySizeMultipliers, basePrices } from './CostCalculatorSchema';

export interface CostBreakdown {
  concept: number;
  design: number;
  implementation: number;
  seo: number;
  adsSetup: number;
  branding: number;
  multilingual: number;
  ongoingSeo: number;
  ongoingAds: number;
  maintenance: number;
}

export interface CalculationResult {
  rangeMin: number;
  rangeMax: number;
  oneTimeTotal: number;
  monthlyTotal: number;
  breakdown: CostBreakdown;
  assumptions: {
    companySize: string;
    multilingual: boolean;
  };
}

export const calculateCost = (data: CalculatorFormValues): CalculationResult => {
  const sizeMultiplier = companySizeMultipliers[data.companySize];

  // Calculate one-time costs
  let conceptCost = data.modules.concept ? basePrices.concept * sizeMultiplier : 0;
  let designCost = data.modules.design ? basePrices.design * sizeMultiplier : 0;
  let implementationCost = data.modules.implementation ? basePrices.implementation * sizeMultiplier : 0;
  let seoCost = data.modules.seo ? basePrices.seo : 0;
  let adsSetupCost = data.modules.adsSetup ? basePrices.adsSetup : 0;
  let brandingCost = data.modules.branding ? basePrices.branding : 0;

  // Multilingual adds 100% to base costs
  let multilingualCost = 0;
  if (data.multilingual) {
    multilingualCost = (conceptCost + designCost + implementationCost) * basePrices.multilingualMultiplier;
  }

  const oneTimeTotal = conceptCost + designCost + implementationCost + seoCost + adsSetupCost + brandingCost + multilingualCost;

  // Calculate monthly costs
  const ongoingSeoCost = data.modules.ongoingSeo ? basePrices.ongoingSeo : 0;
  const ongoingAdsCost = data.modules.ongoingAds ? basePrices.ongoingAds : 0;
  const maintenanceCost = data.modules.maintenance ? basePrices.maintenance : 0;
  const monthlyTotal = ongoingSeoCost + ongoingAdsCost + maintenanceCost;

  // Calculate price range (±15%)
  const rangeMin = Math.round(oneTimeTotal * 0.85);
  const rangeMax = Math.round(oneTimeTotal * 1.15);

  return {
    rangeMin,
    rangeMax,
    oneTimeTotal: Math.round(oneTimeTotal),
    monthlyTotal: Math.round(monthlyTotal),
    breakdown: {
      concept: Math.round(conceptCost),
      design: Math.round(designCost),
      implementation: Math.round(implementationCost),
      seo: Math.round(seoCost),
      adsSetup: Math.round(adsSetupCost),
      branding: Math.round(brandingCost),
      multilingual: Math.round(multilingualCost),
      ongoingSeo: Math.round(ongoingSeoCost),
      ongoingAds: Math.round(ongoingAdsCost),
      maintenance: Math.round(maintenanceCost),
    },
    assumptions: {
      companySize: data.companySize,
      multilingual: data.multilingual,
    },
  };
};
