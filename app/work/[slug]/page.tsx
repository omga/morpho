import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion";
import { ProjectArt } from "@/components/project-art";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
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
  const badgeLabel =
    project.badge ??
    (project.kind === "concept"
      ? caseStudyCopy.conceptBadge
      : project.kind === "team"
        ? caseStudyCopy.teamBadge
        : null);

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
              {project.year && (
                <>
                  <span aria-hidden>·</span>
                  <span>{project.year}</span>
                </>
              )}
              {badgeLabel && (
                <span
                  className={
                    project.kind === "concept"
                      ? "rounded-full border border-accent/40 px-3 py-1 text-xs text-accent"
                      : "rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground"
                  }
                >
                  {badgeLabel}
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

            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-sm uppercase text-muted-foreground">
                  {caseStudyCopy.linksLabel}
                </span>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/25 px-4 py-1.5 text-sm transition hover:bg-foreground hover:text-background"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
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
              {project.year && (
                <div className="bg-background p-5">
                  <dt className="text-sm uppercase text-muted-foreground">
                    {caseStudyCopy.meta.year}
                  </dt>
                  <dd className="mt-2 font-display text-lg">{project.year}</dd>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            {project.images?.hero ? (
              <div className="relative aspect-video overflow-hidden rounded-md border border-foreground/20">
                <Image
                  src={project.images.hero}
                  alt={`${project.title} — product imagery`}
                  fill
                  priority
                  sizes="(min-width: 1440px) 88rem, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[21/9] overflow-hidden rounded-md border border-foreground/20">
                <ProjectArt project={project} variant="wide" />
              </div>
            )}
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

          {/* Gallery — video takes the centerpiece when the project has one */}
          {project.video ||
          project.images?.stack?.length ||
          project.images?.gallery?.length ? (
            <div className="grid gap-4">
              {project.video && (
                <VideoEmbed
                  youtubeId={project.video.youtubeId}
                  title={`${project.title} — video demo`}
                  caption={project.video.caption}
                />
              )}
              {project.images?.stack?.map(({ src, width, height }) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-md border border-foreground/20"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — design detail`}
                    width={width}
                    height={height}
                    sizes="(min-width: 1440px) 88rem, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              ))}
              {project.images?.gallery && project.images.gallery.length > 0 && (
                <div
                  className={
                    project.images.galleryAspect === "portrait"
                      ? "grid grid-cols-2 gap-4 sm:grid-cols-3"
                      : "grid gap-4 sm:grid-cols-2"
                  }
                >
                  {project.images.gallery.map((src) => (
                    <div
                      key={src}
                      className={
                        project.images?.galleryAspect === "portrait"
                          ? "relative aspect-[1/2] overflow-hidden rounded-md border border-foreground/20"
                          : "relative aspect-square overflow-hidden rounded-md border border-foreground/20"
                      }
                    >
                      <Image
                        src={src}
                        alt={`${project.title} — product imagery`}
                        fill
                        sizes={
                          project.images?.galleryAspect === "portrait"
                            ? "(min-width: 640px) 30rem, 50vw"
                            : "(min-width: 640px) 44rem, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Reveal className="grid gap-4 md:grid-cols-2">
              <div className="aspect-[8/5] overflow-hidden rounded-md border border-foreground/20">
                <ProjectArt project={project} variant="screens" />
              </div>
              <div className="aspect-[8/5] overflow-hidden rounded-md border border-foreground/20">
                <ProjectArt project={project} variant="detail" />
              </div>
            </Reveal>
          )}

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
            <div className="relative mt-4 aspect-[8/3] overflow-hidden rounded-md">
              {next.images?.cover ? (
                <Image
                  src={next.images.cover}
                  alt={`${next.title} — product imagery`}
                  fill
                  sizes="24rem"
                  className="object-cover"
                />
              ) : (
                <ProjectArt project={next} variant="cover" />
              )}
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
