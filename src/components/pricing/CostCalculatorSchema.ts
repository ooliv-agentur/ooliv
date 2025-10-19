import { z } from 'zod';

export const calculatorSchema = z.object({
  companySize: z.enum(['small', 'medium', 'large']),
  projectType: z.enum(['new', 'relaunch']),
  cmsType: z.enum(['no-cms', 'with-cms']),
  selectedLanguages: z.object({
    de: z.boolean().default(true),
    en: z.boolean().default(false),
    fr: z.boolean().default(false),
    es: z.boolean().default(false),
  }),
  
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
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;

export const companySizeMultipliers = {
  small: 1.0,
  medium: 1.15,
  large: 1.3,
} as const;

export const projectTypeMultipliers = {
  new: 1.0,
  relaunch: 0.85,
} as const;

export const basePrices = {
  concept: 1500,
  design: 3000,
  implementationNoCms: 3500,
  implementationWithCms: 4200,
  seo: 500,
  golive: 500,
  adsSetup: 500,
  ongoingSeo: 400,
  ongoingAds: 200,
  maintenance: 150,
  languageMultiplier: 0.25,
} as const;

export const companySizeLabels: Record<keyof typeof companySizeMultipliers, string> = {
  small: '2–50 Mitarbeiter',
  medium: '51–200 Mitarbeiter',
  large: '200+ Mitarbeiter',
};

export const projectTypeLabels: Record<keyof typeof projectTypeMultipliers, string> = {
  new: 'Neue Website',
  relaunch: 'Relaunch / Überarbeitung',
};

export const cmsTypeLabels = {
  'no-cms': 'Ohne CMS (statisch / Custom)',
  'with-cms': 'Mit CMS (WordPress, Webflow, etc.)',
} as const;

export const languageLabels = {
  de: 'Deutsch',
  en: 'Englisch',
  fr: 'Französisch',
  es: 'Spanisch',
} as const;
