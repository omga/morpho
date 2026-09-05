import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { findLegalDoc, legalApps, legalCopy } from "@/lib/legal";
import { siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return legalApps.flatMap((app) =>
    app.docs.map((doc) => ({ app: app.slug, doc: doc.kind }))
  );
}

export function generateMetadata({
  params
}: {
  params: { app: string; doc: string };
}): Metadata {
  const found = findLegalDoc(params.app, params.doc);
  if (!found) return {};
  const { app, doc } = found;
  return {
    title: `${app.name} — ${doc.title}`,
    description: `${doc.title} for ${app.name} — ${app.description} Published by ${app.publisher}.`,
    alternates: { canonical: `/legal/${app.slug}/${doc.kind}` }
  };
}

/**
 * Legal pages render statically with no viewport-gated animation: the text must
 * be visible to an app-store reviewer (and in the HTML source) without JS.
 */
export default function LegalDocPage({
  params
}: {
  params: { app: string; doc: string };
}) {
  const found = findLegalDoc(params.app, params.doc);
  if (!found) notFound();
  const { app, doc } = found;

  return (
    <main className="min-h-screen">
      <header className="border-b border-foreground/20">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-lg font-semibold"
          >
            <Logo />
            {siteConfig.name}
          </Link>
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {legalCopy.indexTitle}
          </Link>
        </div>
      </header>

      <article className="container py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {doc.draft && (
            <p className="mb-8 rounded-md border border-accent bg-accent/10 px-5 py-4 font-display text-sm uppercase tracking-wide text-accent">
              {legalCopy.draftWarning}
            </p>
          )}

          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            {app.name}
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {legalCopy.updatedLabel}: {doc.updated} · Published by {app.publisher}
          </p>

          <div className="mt-12 grid gap-6">
            {doc.blocks.map((block, i) => {
              if (block.h2) {
                return (
                  <h2
                    key={i}
                    className="mt-6 font-display text-2xl font-semibold sm:text-3xl"
                  >
                    {block.h2}
                  </h2>
                );
              }
              if (block.list) {
                return (
                  <ul key={i} className="grid gap-2 pl-5">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="list-disc leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {block.p}
                </p>
              );
            })}
          </div>

          <div className="mt-14 rounded-md border border-foreground/20 bg-card p-6">
            <p className="text-sm uppercase text-muted-foreground">
              {legalCopy.contactLabel}
            </p>
            <a
              href={`mailto:${app.contactEmail}`}
              className="mt-2 inline-block font-display text-xl"
            >
              {app.contactEmail}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
