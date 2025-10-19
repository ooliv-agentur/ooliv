import { z } from 'zod';

export const calculatorSchema = z.object({
  companySize: z.enum(['solo', 'small', 'medium', 'large', 'xlarge']),
  pages: z.number().min(1, "Mindestens 1 Seite erforderlich").max(100, "Maximal 100 Seiten möglich"),
  complexity: z.enum(['low', 'mid', 'high']),
  languages: z.number().min(1, "Mindestens 1 Sprache erforderlich").max(10, "Maximal 10 Sprachen möglich"),
  instances: z.enum(['1', '2']),
  timeline: z.enum(['asap', '4-8weeks', '8plus']).optional(),
  
  modules: z.object({
    concept: z.boolean().default(true),
    design: z.boolean().default(true),
    implementation: z.boolean().default(true),
    seo: z.boolean().default(false),
    golive: z.boolean().default(false),
    ongoingSeo: z.boolean().default(false),
    adsSetup: z.boolean().default(false),
    ongoingAds: z.boolean().default(false),
    maintenance: z.boolean().default(false),
  }),
}).refine((data) => {
  // Rule: Mehrsprachigkeit erfordert Design + Umsetzung
  if (data.languages > 1 && (!data.modules.design || !data.modules.implementation)) {
    return false;
  }
  return true;
}, {
  message: "Mehrsprachigkeit setzt Design & Umsetzung voraus",
  path: ["languages"],
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;

export const companySizeMultipliers = {
  solo: 0.95,
  small: 1.0,
  medium: 1.1,
  large: 1.2,
  xlarge: 1.3,
} as const;

export const complexityMultipliers = {
  low: 0.9,
  mid: 1.0,
  high: 1.2,
} as const;

export const basePrices = {
  concept: 1500,
  design: 2500,
  implementation: 3500,
  seo: 500,
  golive: 500,
  adsSetup: 500,
  ongoingSeo: 400,
  ongoingAds: 200,
  maintenance: 150,
  secondInstance: 8000,
  languageMultiplier: 0.25,
  vatRate: 0.19,
} as const;

export const companySizeLabels: Record<keyof typeof companySizeMultipliers, string> = {
  solo: 'Solo/Freelancer',
  small: '2–10 Mitarbeiter',
  medium: '11–50 Mitarbeiter',
  large: '51–200 Mitarbeiter',
  xlarge: '200+ Mitarbeiter',
};

export const complexityLabels: Record<keyof typeof complexityMultipliers, string> = {
  low: 'Einfach (Templates, wenig Custom)',
  mid: 'Mittel (Custom Design, Brand-konform)',
  high: 'Hoch (Unique Design, aufwendige Interaktionen)',
};

export const timelineLabels = {
  asap: 'So schnell wie möglich',
  '4-8weeks': '4–8 Wochen',
  '8plus': 'Mehr als 8 Wochen',
} as const;
