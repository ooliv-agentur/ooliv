// Map of old broken article slugs to new correct slugs
// This is used for 301 redirects to maintain SEO value
export const articleRedirectMap: Record<string, string> = {
  // Broken slug pattern: missing initial characters
  '7-eispiele-fuer-ebsite-ptimierung-die-wirken': '7-beispiele-fuer-website-optimierung-die-wirken',
  '7-raktische-ome-ffice-ipps-fuer-mehr-roduktivitaet': '7-praktische-home-office-tipps-fuer-mehr-produktivitaet',
  '404-ehler-beheben-o-verbessern-ie-hre-ebsite': '404-fehler-beheben-so-verbessern-sie-ihre-website',
  '7-igitale-rends-2025-die-hr-nternehmen-beachten-sollte': '7-digitale-trends-2025-die-ihr-unternehmen-beachten-sollte',
  '2-ebsite-randing-2025-trategien-fuer-nachhaltigen-rfolg': 'b2b-website-branding-2025-strategien-fuer-nachhaltigen-erfolg',
  '2-ebsites-im-esundheitswesen-er-raxis-uide-fuer-ellness-arken-2025': 'b2b-websites-im-gesundheitswesen-der-praxis-guide-fuer-wellness-marken-2025',
  
  // Add any additional broken slugs discovered by Ahrefs here
  'nterkulturelles-arketing-verstehen-rundlagen-und-edeutung': 'interkulturelles-marketing-verstehen-grundlagen-und-bedeutung',
  'eambuilding-digital-erstaendnis-und-edeutung-fuer-nternehmen': 'teambuilding-digital-verstaendnis-und-bedeutung-fuer-unternehmen',
  'achhaltigkeit-im-uero-erstaendliche-rklaerungen-fuer-nternehmen': 'nachhaltigkeit-im-buero-verstaendliche-erklaerungen-fuer-unternehmen',
  'sability-esting-ethoden-verstaendlich-erklaert': 'usability-testing-methoden-verstaendlich-erklaert',
  'nline-eputation-verbessern-fuer-nternehmen-im-ahr-2025': 'online-reputation-verbessern-fuer-unternehmen-im-jahr-2025',
  'erstehen-der-modernen-nternehmenskultur-rundlagen-und-edeutungen': 'verstehen-der-modernen-unternehmenskultur-grundlagen-und-bedeutungen',
  'exterstellung-mit-rofessionelle-exte-2025-generieren': 'texterstellung-mit-professionelle-texte-2025-generieren',
  'as-ist-eine-itemap-erstehen-warum-sie-wichtig-ist': 'was-ist-eine-sitemap-verstehen-warum-sie-wichtig-ist',
  'udit-heckliste-ptimieren-ie-hre-ebsite-2025': 'audit-checkliste-optimieren-sie-ihre-website-2025',
  'ildrechte-im-nternet-verstehen-ine-umfassende-rklaerung': 'bildrechte-im-internet-verstehen-eine-umfassende-erklaerung',
  'as-ist-npage-erstehen-ie-die-rundlagen-fuer-hre-ebsite': 'was-ist-onpage-verstehen-sie-die-grundlagen-fuer-ihre-website',
  'eta-escription-erstellen-chritt-fuer-chritt-nleitung-fuer-2025': 'meta-description-erstellen-schritt-fuer-schritt-anleitung-fuer-2025',
  'ontent-arketing-asics-as-ist-das-und-warum-ist-es-wichtig': 'content-marketing-basics-was-ist-das-und-warum-ist-es-wichtig',
  'erstaendnis-von-hange-anagement-igital-fuer-nternehmen': 'verstaendnis-von-change-management-digital-fuer-unternehmen',
  'eyword-echerche-nleitung-rfolgreiche-trategien-in-2025': 'keyword-recherche-anleitung-erfolgreiche-strategien-in-2025',
  'esunde-nternehmenskultur-verstehen-edeutung-irkung': 'gesunde-unternehmenskultur-verstehen-bedeutung-wirkung',
  'ontent-ap-nalyse-o-identifizieren-ie-fehlende-nhalte': 'content-gap-analyse-so-identifizieren-sie-fehlende-inhalte',
  'torytelling-fuer-nternehmen-erstehen-und-nwenden': 'storytelling-fuer-unternehmen-verstehen-und-anwenden',
  'as-ist-ffpage-erstaendnis-und-edeutung-erklaert': 'was-ist-offpage-verstaendnis-und-bedeutung-erklaert',
  'ie-findet-oogle-meine-ebsite-in-tieferer-lick': 'wie-findet-google-meine-website-ein-tieferer-blick',
  'eta-itle-und-escription-optimieren-fuer-2025': 'meta-title-und-description-optimieren-fuer-2025',
  'oogle-pdates-2025-verstehen-as-arum-und-ie': 'google-updates-2025-verstehen-was-warum-und-wie',
  'ser-xperience-optimieren-5-chritte-zum-rfolg-2025': 'user-experience-optimieren-5-schritte-zum-erfolg-2025',
  'ebsite-elaunch-2025-ie-ultimative-heckliste-fuer-deutsche-2-nternehmen': 'website-relaunch-2025-die-ultimative-checkliste-fuer-deutsche-b2b-unternehmen',
  'randing-on-ebsites-2-trategies-for-2025-uccess': 'branding-on-websites-b2b-strategies-for-2025-success',
  'fuer-ienstleister-verstehen-rundlagen-und-ichtigkeit': 'seo-fuer-dienstleister-verstehen-grundlagen-und-wichtigkeit',
  'rbeitgeberattraktivitaet-steigern-ntdecken-ie-effektive-trategien': 'arbeitgeberattraktivitaet-steigern-entdecken-sie-effektive-strategien',
  'ontent-udit-durchfuehren-ffektive-ethoden-fuer-nternehmen': 'content-audit-durchfuehren-effektive-methoden-fuer-unternehmen',
  'arum-ontent-arketing-fuer-nternehmen-wichtig-ist': 'warum-content-marketing-fuer-unternehmen-wichtig-ist',
  'hat-s-2-ebsite-uide-for-ellness-and-ealth-rands-2025': 'whats-b2b-website-guide-for-wellness-and-health-brands-2025',
  'uenstliche-ntelligenz-im-digitalen-arketing-as-esundheits-und-ellness-arken-2025-wirklich-brauchen': 'kuenstliche-intelligenz-im-digitalen-marketing-was-gesundheits-und-wellness-marken-2025-wirklich-brauchen',
  'achhaltigkeit-im-nternehmen-raktische-ege-zum-rfolg': 'nachhaltigkeit-im-unternehmen-praktische-wege-zum-erfolg',
  'atensicherung-fuer-nternehmen-erstehen-und-rklaeren': 'datensicherung-fuer-unternehmen-verstehen-und-erklaeren',
  'fuer-ebsites-erstaendnis-und-elevanz': 'seo-fuer-websites-verstaendnis-und-relevanz',
  'ordress-icherheit-erhoehen-2025-optimal-geschuetzt': 'wordpress-sicherheit-erhoehen-2025-optimal-geschuetzt',
};

/**
 * Check if a slug needs to be redirected and return the correct slug
 * @param slug - The article slug from the URL
 * @returns The correct slug to use, or the original if no redirect needed
 */
export function getCorrectSlug(slug: string): string {
  return articleRedirectMap[slug] || slug;
}

/**
 * Check if a slug needs to be redirected
 * @param slug - The article slug to check
 * @returns True if the slug should be redirected
 */
export function shouldRedirect(slug: string): boolean {
  return slug in articleRedirectMap;
}
