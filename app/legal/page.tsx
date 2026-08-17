import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { legalApps, legalCopy } from "@/lib/legal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: legalCopy.indexTitle,
  description: legalCopy.indexIntro,
  alternates: { canonical: "/legal" }
};

export default function LegalIndexPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-foreground/20">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-lg font-semibold"
          >
            <Logo />
            {siteConfig.name}
          </Link>
        </div>
      </header>

      <div className="container py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl font-semibold sm:text-6xl">
            {legalCopy.indexTitle}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {legalCopy.indexIntro}
          </p>

          <div className="mt-12 grid gap-10">
            {legalApps.map((app) => (
              <div key={app.slug}>
                <h2 className="font-display text-3xl font-semibold">{app.name}</h2>
                <div className="mt-4 grid gap-px overflow-hidden rounded-md border border-foreground/20 bg-foreground/20">
                  {app.docs.map((doc) => (
                    <Link
                      key={doc.kind}
                      href={`/legal/${app.slug}/${doc.kind}`}
                      className="group flex items-center justify-between gap-4 bg-background p-5 transition hover:bg-card"
                    >
                      <span>
                        <span className="font-display text-xl">{doc.title}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {legalCopy.updatedLabel}: {doc.updated}
                          {doc.draft ? " · Draft" : ""}
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
