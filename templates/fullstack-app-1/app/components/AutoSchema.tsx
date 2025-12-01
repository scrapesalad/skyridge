import React from "react";
import { headers } from "next/headers";

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function extractCityFromPath(pathname: string): string | null {
  let m = pathname.match(/^\/dumpster-rental-([a-z0-9-]+)-ut\/?$/i);
  if (m) return titleCase(m[1]);
  // Legacy patterns for backwards compatibility
  m = pathname.match(/^\/slc-dumpster-rental-([a-z0-9-]+)-ut\/?$/i);
  if (m) return titleCase(m[1]);
  m = pathname.match(/^\/utah-dumpster-rental-([a-z0-9-]+)\/?$/i);
  if (m) return titleCase(m[1]);
  m = pathname.match(/^\/services\/[^/]*-([a-z0-9-]+)-ut\/?$/i);
  if (m) return titleCase(m[1]);
  return null;
}

async function resolveRequestInfo() {
  const headerList = await headers();
  const forwardedProto = headerList.get("x-forwarded-proto") ?? "https";
  const forwardedHost = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "icondumpsters.com";
  const hintedUrl = headerList.get("x-url") ?? headerList.get("x-next-url");

  if (hintedUrl) {
    try {
      const parsed = new URL(hintedUrl, `${forwardedProto}://${forwardedHost}`);
      return { pathname: parsed.pathname || "/", base: `${parsed.protocol}//${parsed.host}`, url: parsed.toString() };
    } catch {
      // fall through to manual construction
    }
  }

  const pathname = headerList.get("x-invoke-path") ?? "/";
  const base = `${forwardedProto}://${forwardedHost}`;
  const full = `${base}${pathname}`;
  return { pathname, base, url: full };
}

export default async function AutoSchema() {
  const { pathname, base, url } = await resolveRequestInfo();
  const city = extractCityFromPath(pathname);
  if (!city) return null;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Icon Dumpsters - ${city}, UT`,
    description: "Professional dumpster rental services with same-day delivery and honest pricing.",
    url,
    telephone: "+1-801-918-6000",
    address: { "@type": "PostalAddress", addressLocality: `${city}`, addressRegion: "UT", addressCountry: "US" },
    areaServed: [{ "@type": "City", name: `${city}` }],
    image: `${base}/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png`,
    "@id": `${base}/#local-business`,
    priceRange: "$$",
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
    geo: { "@type": "GeoCoordinates", latitude: 40.7608, longitude: -111.8910 },
    hasMap: "https://maps.google.com/?q=Icon+Dumpsters+Utah",
    sameAs: [
      "https://www.facebook.com/p/Icon-Dumpsters-61557014799828/",
      "https://www.instagram.com/icondumpsters",
      "https://www.linkedin.com/in/icondumpsters"
    ]
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Dumpster Rental in ${city}, UT`,
    description: "Dumpster rental services for residential and commercial projects.",
    serviceType: "Dumpster Rental",
    provider: { "@type": "LocalBusiness", name: "Icon Dumpsters", url: base },
    areaServed: [`${city}, UT`],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}
