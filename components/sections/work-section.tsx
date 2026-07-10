"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { MotionArticle, Reveal } from "@/components/motion";
import { projects, sectionCopy } from "@/lib/data";

export function WorkSection() {
  const marqueeItems = [...projects.slice(0, 5), ...projects.slice(0, 5)];

  return (
    <section id="work" className="border-t border-foreground/20">
      <div className="section-shell">
        <Reveal className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="text-sm uppercase text-muted-foreground">
              {sectionCopy.work.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl font-semibold sm:text-7xl">
              {sectionCopy.work.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {sectionCopy.work.description}
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-md border border-foreground/20 bg-background/65 py-3 backdrop-blur-xl">
          <div className="flex w-max animate-marquee gap-3">
            {marqueeItems.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="flex min-w-64 items-center gap-3 rounded-sm border border-foreground/15 bg-card/85 p-2"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={160}
                  height={128}
                  className="h-16 w-20 rounded-sm object-cover"
                />
                <div>
                  <p className="font-display text-lg">{project.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-md border border-foreground/20 bg-foreground/20 mt-6">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.04, 0.28),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group grid gap-5 bg-background p-3 transition hover:bg-card md:grid-cols-[8rem_1fr_14rem_16rem_3rem] md:items-center"
            >
              <div className="text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {project.year}
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{project.subtitle}</p>
              </div>
              <p className="text-sm uppercase text-muted-foreground">{project.type}</p>
              <div className="h-44 overflow-hidden rounded-md bg-muted md:h-32">
                <Image
                  src={project.image}
                  alt={`${project.title} project visual`}
                  width={640}
                  height={420}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <ArrowUpRight className="h-6 w-6 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}