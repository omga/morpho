import { notFound } from "next/navigation";
import { OgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/components/og-image";
import { projects } from "@/lib/data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const alt = "Morpho Studio case study";

export default function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return OgImage({
    eyebrow: project.type,
    title: project.title,
    subtitle: project.subtitle
  });
}
