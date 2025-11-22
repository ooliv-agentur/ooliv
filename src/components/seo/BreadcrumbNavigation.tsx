import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbConfig {
  path: string;
  label: string;
  parent?: string;
}

const breadcrumbConfig: BreadcrumbConfig[] = [
  { path: '/', label: 'Home' },
  { path: '/webdesign', label: 'Webdesign', parent: '/' },
  { path: '/webentwicklung', label: 'Webentwicklung', parent: '/' },
  { path: '/seo-optimierung', label: 'SEO Optimierung', parent: '/' },
  { path: '/google-ads', label: 'Google Ads', parent: '/' },
  { path: '/ki-technologien', label: 'KI-Technologien', parent: '/' },
  { path: '/content-erstellung', label: 'Content-Erstellung', parent: '/' },
  { path: '/strategie', label: 'Strategie', parent: '/' },
  { path: '/ueber-uns', label: 'Über uns', parent: '/' },
  { path: '/referenzen', label: 'Referenzen', parent: '/' },
  { path: '/kontakt', label: 'Kontakt', parent: '/' },
  { path: '/werbeagentur-wiesbaden', label: 'Werbeagentur Wiesbaden', parent: '/' },
  { path: '/werbeagentur-frankfurt', label: 'Werbeagentur Frankfurt', parent: '/' },
  { path: '/werbeagentur-darmstadt', label: 'Werbeagentur Darmstadt', parent: '/' },
  { path: '/digitalagentur-schweiz', label: 'Digitalagentur Schweiz', parent: '/' },
  { path: '/klickbetrug', label: 'Klickbetrug-Schutz', parent: '/' },
  { path: '/datenschutz', label: 'Datenschutz', parent: '/' },
  { path: '/impressum', label: 'Impressum', parent: '/' },
  { path: '/artikel', label: 'Blog', parent: '/' },
];

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find current page config
  const currentPage = breadcrumbConfig.find(config => config.path === currentPath);
  
  if (!currentPage || currentPath === '/') {
    return null; // Don't show breadcrumbs on homepage
  }

  // Build breadcrumb trail
  const breadcrumbs = [];
  let current = currentPage;
  
  while (current) {
    breadcrumbs.unshift(current);
    if (current.parent) {
      current = breadcrumbConfig.find(config => config.path === current.parent);
    } else {
      break;
    }
  }

  // Generate breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": `https://ooliv.de${breadcrumb.path}`
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.path}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbNavigation;