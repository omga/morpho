import { projects, services, siteConfig } from "@/lib/data";

/**
 * Organization + WebSite JSON-LD for the homepage. Helps search engines
 * understand the studio, its services, and the case-study catalog.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description.replace(/\n/g, " "),
        slogan: siteConfig.tagline,
        knowsAbout: services.map((s) => s.title),
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text }
        }))
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/#work`,
        name: "Selected Work",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        hasPart: projects.map((p) => ({
          "@type": "CreativeWork",
          name: p.title,
          headline: p.subtitle,
          url: `${siteConfig.url}/work/${p.slug}`,
          about: p.industry
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
