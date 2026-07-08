"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { projects, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProgressProp = {
  progress: MotionValue<number>;
};

function KineticGlyph({
  char,
  glyphIndex,
  lineIndex,
  progress
}: ProgressProp & {
  char: string;
  glyphIndex: number;
  lineIndex: number;
}) {
  const direction = lineIndex % 2 === 0 ? 1 : -1;
  const x = useTransform(
    progress,
    [0, 1],
    [0, direction * (8 + (glyphIndex % 4) * 5)]
  );
  const y = useTransform(
    progress,
    [0, 1],
    [0, (lineIndex - 1.5) * -42 + (glyphIndex % 3) * 10]
  );
  const filter = useTransform(
    progress,
    [0, 0.56, 1],
    ["blur(0px)", "blur(1.2px)", "blur(8px)"]
  );

  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.04 * glyphIndex + 0.12 * lineIndex,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.span className="inline-block will-change-transform" style={{ x, y, filter }}>
        {char}
      </motion.span>
    </motion.span>
  );
}

function KineticLine({
  word,
  lineIndex,
  progress
}: ProgressProp & {
  word: string;
  lineIndex: number;
}) {
  const lineX = useTransform(
    progress,
    [0, 1],
    [0, lineIndex % 2 === 0 ? -46 : 46]
  );
  const lineY = useTransform(progress, [0, 1], [0, lineIndex * -16]);
  const opacity = useTransform(progress, [0, 0.72, 1], [1, 0.86, 0.28]);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "flex select-none overflow-visible whitespace-nowrap font-display text-7xl font-semibold leading-[0.78] sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem]",
        lineIndex % 2 === 1 && "kinetic-outline"
      )}
      style={{ x: lineX, y: lineY, opacity }}
    >
      {word.split("").map((char, glyphIndex) => (
        <KineticGlyph
          key={`${word}-${char}-${glyphIndex}`}
          char={char}
          glyphIndex={glyphIndex}
          lineIndex={lineIndex}
          progress={progress}
        />
      ))}
    </motion.div>
  );
}

function LoopRibbon({ progress }: ProgressProp) {
  const y = useTransform(progress, [0, 1], [0, -64]);
  const opacity = useTransform(progress, [0, 0.75], [1, 0.2]);
  const ribbonItems = Array.from({ length: 4 }, () => siteConfig.hero.loopWords).flat();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 top-[48%] z-0 -rotate-2 overflow-hidden border-y border-foreground/15 bg-background/50 py-3 backdrop-blur-md dark:bg-background/30"
      style={{ y, opacity }}
    >
      <div className="flex w-max animate-marquee items-center gap-5">
        {[...ribbonItems, ...ribbonItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 text-xs font-semibold uppercase text-foreground/55 sm:text-sm"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const marqueeItems = [...projects.slice(0, 5), ...projects.slice(0, 5)];
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const foregroundOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.42]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden border-b border-foreground/20 pt-20 md:pt-24"
    >
      <div className="kinetic-grid absolute inset-0 z-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-foreground/20" />
      <motion.div
        className="kinetic-mask pointer-events-none absolute inset-x-0 top-32 z-0 flex flex-col gap-2 px-4 sm:top-28 md:px-8 lg:top-24"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        {siteConfig.hero.kineticWords.map((word, lineIndex) => (
          <KineticLine
            key={word}
            word={word}
            lineIndex={lineIndex}
            progress={scrollYProgress}
          />
        ))}
      </motion.div>
      <LoopRibbon progress={scrollYProgress} />

      <motion.div
        className="container relative z-10 grid min-h-[calc(100svh-5rem)] content-between gap-10 py-8 sm:py-10 lg:py-12"
        style={{ y: foregroundY, opacity: foregroundOpacity }}
      >
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <p className="inline-block max-w-sm border-l border-foreground/35 bg-background/65 py-1 pl-4 pr-3 text-sm uppercase text-muted-foreground backdrop-blur-xl">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-3 max-w-sm text-balance font-display text-2xl font-semibold leading-none text-foreground/95 sm:text-3xl lg:text-4xl">
              {siteConfig.name}
            </h1>
          </div>

          <motion.div
            className="ml-auto grid max-w-xl gap-6 rounded-md border border-foreground/15 bg-background/70 p-4 backdrop-blur-xl sm:p-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-balance text-lg leading-relaxed text-foreground/78 sm:text-xl">
              {siteConfig.description}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.hero.proof}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#work">
                  {siteConfig.hero.primaryAction}
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#contact">{siteConfig.hero.secondaryAction}</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-3 overflow-hidden rounded-md border border-foreground/20 bg-background/65 backdrop-blur-xl">
            {siteConfig.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-foreground/15 p-3 last:border-r-0 sm:p-5"
              >
                <p className="font-display text-3xl leading-none sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

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
        </motion.div>
      </motion.div>
    </section>
  );
}
