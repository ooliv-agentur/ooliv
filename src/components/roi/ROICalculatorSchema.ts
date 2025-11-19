import { z } from 'zod';

export const roiCalculatorSchema = z.object({
  monthlyTraffic: z.number()
    .min(100, 'Mindestens 100 Besucher pro Monat')
    .max(10000000, 'Maximal 10 Millionen Besucher'),
  conversionRate: z.number()
    .min(0.01, 'Mindestens 0.01%')
    .max(50, 'Maximal 50%'),
  bounceRate: z.number()
    .min(1, 'Mindestens 1%')
    .max(100, 'Maximal 100%'),
  customerAcquisitionCost: z.number()
    .min(1, 'Mindestens 1€')
    .max(100000, 'Maximal 100.000€'),
  averageOrderValue: z.number()
    .min(1, 'Mindestens 1€')
    .max(1000000, 'Maximal 1.000.000€'),
  engagementModel: z.enum(['discovery', 'transformation']),
});

export type ROICalculatorFormValues = z.infer<typeof roiCalculatorSchema>;
