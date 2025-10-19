import { z } from 'zod';

export const calculatorSchema = z.object({
  companySize: z.enum(['xs', 'small', 'medium', 'large']),
  multilingual: z.boolean().default(false),
  
  modules: z.object({
    concept: z.boolean().default(false),
    design: z.boolean().default(true),
    implementation: z.boolean().default(true),
    seo: z.boolean().default(false),
    adsSetup: z.boolean().default(false),
    branding: z.boolean().default(false),
    ongoingSeo: z.boolean().default(false),
    ongoingAds: z.boolean().default(false),
    maintenance: z.boolean().default(false),
  }),
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;

export const companySizeMultipliers = {
  xs: 1.0,
  small: 1.15,
  medium: 1.3,
  large: 1.5,
} as const;

export const basePrices = {
  concept: 1000,
  design: 2000,
  implementation: 2500,
  seo: 500,
  adsSetup: 500,
  branding: 1000,
  ongoingSeo: 400,
  ongoingAds: 200,
  maintenance: 150,
  multilingualMultiplier: 0.5,
} as const;

export const companySizeLabels: Record<keyof typeof companySizeMultipliers, string> = {
  xs: '2–10 Mitarbeiter',
  small: '10–50 Mitarbeiter',
  medium: '50–100 Mitarbeiter',
  large: '100+ Mitarbeiter',
};
