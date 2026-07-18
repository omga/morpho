import { OgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/components/og-image";
import { siteConfig } from "@/lib/data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function Image() {
  return OgImage({
    eyebrow: "Mobile & digital product studio",
    title: "Small team. Serious output.",
    subtitle: "Mobile apps and digital products, built right and shipped fast."
  });
}
