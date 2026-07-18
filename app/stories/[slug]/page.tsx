import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { siteConfig, stories, storiesCopy } from "@/lib/data";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      url: `${siteConfig.url}/stories/${story.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.excerpt
    }
  };
}

function readingTime(story: (typeof stories)[number]) {
  const words = story.body
    .map((b) => [b.h2 ?? "", b.p ?? "", ...(b.list ?? [])].join(" "))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) notFound();

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <article className="border-b border-foreground/20 pt-16">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl">
            <Link
              href="/#stories"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {storiesCopy.backLabel}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm uppercase text-muted-foreground">
              <span>{storiesCopy.eyebrow}</span>
              <span aria-hidden>·</span>
              <span>{story.date}</span>
              <span aria-hidden>·</span>
              <span>{readingTime(story)} min read</span>
            </div>

            <h1 className="mt-4 text-balance font-display text-5xl font-semibold sm:text-7xl">
              {story.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              {story.excerpt}
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl gap-7">
            {story.body.map((block, i) => {
              if (block.h2) {
                return (
                  <h2
                    key={i}
                    className="mt-6 font-display text-3xl font-semibold sm:text-4xl"
                  >
                    {block.h2}
                  </h2>
                );
              }
              if (block.list) {
                return (
                  <ul key={i} className="grid gap-3">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 rounded-md border border-foreground/15 bg-card p-4 leading-relaxed text-muted-foreground"
                      >
                        <span className="text-accent" aria-hidden>
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {block.p}
                </p>
              );
            })}
          </div>

          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-start justify-between gap-6 rounded-md border border-foreground/20 bg-card p-8 sm:flex-row sm:items-center">
            <h2 className="font-display text-3xl font-semibold">
              {storiesCopy.cta.title}
            </h2>
            <Button asChild size="lg" className="rounded-full">
              <Link href={storiesCopy.cta.href}>{storiesCopy.cta.action}</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
