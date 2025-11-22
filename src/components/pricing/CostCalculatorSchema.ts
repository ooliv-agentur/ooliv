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
  small: 1.3,
  medium: 1.5,
  large: 1.9,
} as const;

export const basePrices = {
  concept: 3000,
  design: 5000,
  implementation: 6000,
  seo: 800,
  adsSetup: 900,
  branding: 2000,
  ongoingSeo: 900,
  ongoingAds: 700,
  maintenance: 250,
  multilingualMultiplier: 1.0,
} as const;

export const companySizeLabels: Record<keyof typeof companySizeMultipliers, string> = {
  xs: '2–10 Mitarbeiter',
  small: '10–50 Mitarbeiter',
  medium: '50–100 Mitarbeiter',
  large: '100+ Mitarbeiter',
};
