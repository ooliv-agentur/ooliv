-- Fix broken article slugs
-- These slugs are missing initial characters and need to be corrected

UPDATE content_posts
SET slug = '7-beispiele-fuer-website-optimierung-die-wirken'
WHERE id = 37342 AND slug = '7-eispiele-fuer-ebsite-ptimierung-die-wirken';

UPDATE content_posts
SET slug = '7-praktische-home-office-tipps-fuer-mehr-produktivitaet'
WHERE id = 36353 AND slug = '7-raktische-ome-ffice-ipps-fuer-mehr-roduktivitaet';

UPDATE content_posts
SET slug = '404-fehler-beheben-so-verbessern-sie-ihre-website'
WHERE id = 35275 AND slug = '404-ehler-beheben-o-verbessern-ie-hre-ebsite';

UPDATE content_posts
SET slug = '7-digitale-trends-2025-die-ihr-unternehmen-beachten-sollte'
WHERE id = 23108 AND slug = '7-igitale-rends-2025-die-hr-nternehmen-beachten-sollte';

UPDATE content_posts
SET slug = 'b2b-website-branding-2025-strategien-fuer-nachhaltigen-erfolg'
WHERE id = 6724 AND slug = '2-ebsite-randing-2025-trategien-fuer-nachhaltigen-rfolg';

UPDATE content_posts
SET slug = 'b2b-websites-im-gesundheitswesen-der-praxis-guide-fuer-wellness-marken-2025'
WHERE id = 6630 AND slug = '2-ebsites-im-esundheitswesen-er-raxis-uide-fuer-ellness-arken-2025';