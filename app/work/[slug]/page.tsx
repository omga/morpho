import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion";
import { ProjectArt } from "@/components/project-art";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { caseStudyCopy, projects, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.type} | ${siteConfig.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary
    }
  };
}

export default function CaseStudyPage({
  params
}: {
  params: { slug: string };
}) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-foreground/20 pt-16">
        <div className="section-shell">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {caseStudyCopy.backLabel}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm uppercase text-muted-foreground">
              <span>{project.type}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
              {project.kind === "concept" && (
                <span className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
                  {caseStudyCopy.conceptBadge}
                </span>
              )}
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-6xl font-semibold sm:text-8xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-2xl text-muted-foreground sm:text-3xl">
              {project.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </Reveal>

          {/* Meta grid */}
          <Reveal delay={0.1}>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-md border border-foreground/20 bg-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-5">
                <dt className="text-sm uppercase text-muted-foreground">
                  {caseStudyCopy.meta.industry}
                </dt>
                <dd className="mt-2 font-display text-lg">{project.industry}</dd>
              </div>
              <div className="bg-background p-5">
                <dt className="text-sm uppercase text-muted-foreground">
                  {caseStudyCopy.meta.services}
                </dt>
                <dd className="mt-2 font-display text-lg">
                  {project.services.join(", ")}
                </dd>
              </div>
              <div className="bg-background p-5">
                <dt className="text-sm uppercase text-muted-foreground">
                  {caseStudyCopy.meta.stack}
                </dt>
                <dd className="mt-2 font-display text-lg">
                  {project.stack.join(", ")}
                </dd>
              </div>
              <div className="bg-background p-5">
                <dt className="text-sm uppercase text-muted-foreground">
                  {caseStudyCopy.meta.year}
                </dt>
                <dd className="mt-2 font-display text-lg">{project.year}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div className="aspect-[21/9] overflow-hidden rounded-md border border-foreground/20">
              <ProjectArt project={project} variant="wide" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="border-b border-foreground/20">
        <div className="section-shell grid gap-14">
          <Reveal className="grid gap-6 md:grid-cols-[0.6fr_1.4fr]">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {caseStudyCopy.sections.challenge}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-[0.6fr_1.4fr]">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {caseStudyCopy.sections.approach}
            </h2>
            <ul className="grid max-w-3xl gap-4">
              {project.approach.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-md border border-foreground/15 bg-card p-5"
                >
                  <span className="font-display text-lg text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Gallery */}
          <Reveal className="grid gap-4 md:grid-cols-2">
            <div className="aspect-[8/5] overflow-hidden rounded-md border border-foreground/20">
              <ProjectArt project={project} variant="screens" />
            </div>
            <div className="aspect-[8/5] overflow-hidden rounded-md border border-foreground/20">
              <ProjectArt project={project} variant="detail" />
            </div>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-[0.6fr_1.4fr]">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {caseStudyCopy.sections.outcome}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {project.outcome}
            </p>
          </Reveal>

          {/* Context / attribution */}
          <Reveal>
            <div className="rounded-md border border-foreground/20 bg-card p-6">
              <p className="text-sm uppercase text-muted-foreground">
                {caseStudyCopy.contextTitle}
              </p>
              {project.kind === "concept" ? (
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {caseStudyCopy.conceptNote}
                </p>
              ) : (
                project.attribution && (
                  <div className="mt-3 grid gap-1 text-muted-foreground">
                    <p>{project.attribution.context}</p>
                    {project.attribution.role && <p>{project.attribution.role}</p>}
                    {project.attribution.team && <p>{project.attribution.team}</p>}
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA + next project */}
      <section className="border-b border-foreground/20">
        <div className="section-shell flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-xl text-balance font-display text-4xl font-semibold sm:text-6xl">
              {caseStudyCopy.cta.title}
            </h2>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <Link href={caseStudyCopy.cta.href}>{caseStudyCopy.cta.action}</Link>
            </Button>
          </div>

          <Link
            href={`/work/${next.slug}`}
            className="group w-full max-w-sm rounded-md border border-foreground/20 bg-card p-5 transition hover:bg-muted"
          >
            <p className="flex items-center justify-between text-sm uppercase text-muted-foreground">
              {caseStudyCopy.nextProject}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </p>
            <div className="mt-4 aspect-[8/3] overflow-hidden rounded-md">
              <ProjectArt project={next} variant="cover" />
            </div>
            <p className="mt-4 font-display text-2xl font-semibold">{next.title}</p>
            <p className="text-sm text-muted-foreground">{next.subtitle}</p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
