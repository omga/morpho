"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Reveal } from "@/components/motion";
import { projects, sectionCopy } from "@/lib/data";

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      className={[
        "group cursor-pointer overflow-hidden rounded-md bg-background transition-colors",
        isExpanded ? "bg-card" : "hover:bg-card",
      ].join(" ")}
      style={{ willChange: "transform" }}
    >
      {/* Collapsed layout */}
      <motion.div
        layout
        className="grid gap-5 p-3 md:grid-cols-[8rem_1fr_14rem_16rem_3rem] md:items-center"
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
        <p className="text-sm uppercase text-muted-foreground">
          {project.type}
        </p>
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
      </motion.div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3 },
            }}
            className="overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="grid gap-6 border-t border-foreground/10 px-3 pb-6 pt-5 md:grid-cols-[1fr_1.2fr] md:items-start md:gap-10">
              <div className="overflow-hidden rounded-md bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} project visual`}
                  width={960}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-2xl font-semibold">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle();
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition hover:bg-foreground/10"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs uppercase text-muted-foreground">
                    {project.type}
                  </span>
                  <span className="rounded-full border border-foreground/15 bg-background px-3 py-1 text-xs uppercase text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function WorkSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

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

        <div className="mt-6 overflow-hidden rounded-md border border-foreground/20 bg-foreground/20">
          <LayoutGroup>
            <div className="flex flex-col gap-px">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.04, 0.28),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isExpanded={expandedIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                </motion.div>
              ))}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}