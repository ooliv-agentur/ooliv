import { ROICalculatorFormValues } from './ROICalculatorSchema';

export interface ROICalculationResult {
  current: {
    monthlyConversions: number;
    monthlyRevenue: number;
    effectiveCac: number;
    roi: number;
  };
  projected: {
    conversionRate: number;
    bounceRate: number;
    monthlyConversions: number;
    monthlyRevenue: number;
    effectiveCac: number;
    roi: number;
    improvementConversion: number;
    improvementRevenue: number;
    improvementCac: number;
  };
  investment: {
    model: string;
    costMin: number;
    costMax: number;
    duration: string;
    monthsToBreakeven: number;
    yearlyImpact: number;
    roiPercentage: number;
  };
}

export const calculateROI = (data: ROICalculatorFormValues): ROICalculationResult => {
  // Current state calculations
  const currentConversions = (data.monthlyTraffic * data.conversionRate) / 100;
  const currentRevenue = currentConversions * data.averageOrderValue;
  const currentMarketingSpend = currentConversions * data.customerAcquisitionCost;
  const currentROI = currentMarketingSpend > 0 
    ? ((currentRevenue - currentMarketingSpend) / currentMarketingSpend) * 100 
    : 0;

  // Improvement factors based on engagement model
  const improvements = data.engagementModel === 'discovery' 
    ? {
        conversionImprovement: 1.60, // +60% (conservative estimate)
        bounceReduction: 0.75, // -25%
        cacImprovement: 0.85, // -15%
        label: 'Strategic Discovery Package',
        costMin: 15000,
        costMax: 25000,
        duration: '4-6 Wochen'
      }
    : {
        conversionImprovement: 2.40, // +140% (like case study +240%)
        bounceReduction: 0.55, // -45%
        cacImprovement: 0.70, // -30%
        label: 'End-to-End Product & UX Transformation',
        costMin: 40000,
        costMax: 80000,
        duration: '8-16 Wochen'
      };

  // Projected state calculations
  const projectedConversionRate = data.conversionRate * improvements.conversionImprovement;
  const projectedBounceRate = data.bounceRate * improvements.bounceReduction;
  const projectedConversions = (data.monthlyTraffic * projectedConversionRate) / 100;
  const projectedRevenue = projectedConversions * data.averageOrderValue;
  const projectedCac = data.customerAcquisitionCost * improvements.cacImprovement;
  const projectedMarketingSpend = projectedConversions * projectedCac;
  const projectedROI = projectedMarketingSpend > 0
    ? ((projectedRevenue - projectedMarketingSpend) / projectedMarketingSpend) * 100
    : 0;

  // Investment calculations
  const averageInvestment = (improvements.costMin + improvements.costMax) / 2;
  const monthlyRevenueGain = projectedRevenue - currentRevenue;
  const yearlyImpact = monthlyRevenueGain * 12;
  const monthsToBreakeven = monthlyRevenueGain > 0 
    ? Math.ceil(averageInvestment / monthlyRevenueGain) 
    : 999;
  const roiPercentage = ((yearlyImpact - averageInvestment) / averageInvestment) * 100;

  return {
    current: {
      monthlyConversions: Math.round(currentConversions),
      monthlyRevenue: Math.round(currentRevenue),
      effectiveCac: Math.round(data.customerAcquisitionCost),
      roi: Math.round(currentROI),
    },
    projected: {
      conversionRate: Math.round(projectedConversionRate * 100) / 100,
      bounceRate: Math.round(projectedBounceRate * 100) / 100,
      monthlyConversions: Math.round(projectedConversions),
      monthlyRevenue: Math.round(projectedRevenue),
      effectiveCac: Math.round(projectedCac),
      roi: Math.round(projectedROI),
      improvementConversion: Math.round((improvements.conversionImprovement - 1) * 100),
      improvementRevenue: Math.round(((projectedRevenue - currentRevenue) / currentRevenue) * 100),
      improvementCac: Math.round((1 - improvements.cacImprovement) * 100),
    },
    investment: {
      model: improvements.label,
      costMin: improvements.costMin,
      costMax: improvements.costMax,
      duration: improvements.duration,
      monthsToBreakeven,
      yearlyImpact: Math.round(yearlyImpact),
      roiPercentage: Math.round(roiPercentage),
    }
  };
};
