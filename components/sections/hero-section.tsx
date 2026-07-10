"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProgressProp = {
  progress: MotionValue<number>;
};

type KineticWord = {
  text: string;
  unfilledWords?: string[];
};

function KineticGlyph({
  char,
  glyphIndex,
  lineIndex,
  progress,
  isFilled
}: ProgressProp & {
  char: string;
  glyphIndex: number;
  lineIndex: number;
  isFilled: boolean;
}) {
  const direction = lineIndex % 2 === 0 ? 1 : -1;
  const x = useTransform(
    progress,
    [0, 1],
    [0, direction * (6 + (glyphIndex % 4) * 4)]
  );
  const y = useTransform(
    progress,
    [0, 1],
    [0, (lineIndex - 1.5) * -38 + (glyphIndex % 3) * 8]
  );
  const filter = useTransform(
    progress,
    [0, 0.56, 1],
    ["blur(0px)", "blur(1.2px)", "blur(8px)"]
  );

  return (
    <motion.span
      className={cn(
        "inline-block",
        !isFilled && "kinetic-outline"
      )}
    >
      <motion.span
        className="inline-block will-change-transform"
        style={{ x, y, filter }}
      >
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
  word: KineticWord;
  lineIndex: number;
}) {
  const lineX = useTransform(
    progress,
    [0, 1],
    [0, lineIndex % 2 === 0 ? -38 : 38]
  );
  const lineY = useTransform(progress, [0, 1], [0, lineIndex * -14]);
  const opacity = useTransform(progress, [0, 0.72, 1], [1, 0.86, 0.28]);

  const text = word.text;
  const unfilledWords = word.unfilledWords || [];

  // Determine which characters are filled
  // Start with all characters filled
  const isFilledArray: boolean[] = new Array(text.length).fill(true);
  
  // Mark characters that are in unfilledWords as unfilled
  for (const unfilledWord of unfilledWords) {
    let searchIndex = 0;
    while (true) {
      const foundIndex = text.indexOf(unfilledWord, searchIndex);
      if (foundIndex === -1) break;
      for (let j = 0; j < unfilledWord.length; j++) {
        if (foundIndex + j < text.length) {
          isFilledArray[foundIndex + j] = false;
        }
      }
      searchIndex = foundIndex + 1;
    }
  }

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "flex select-none overflow-visible whitespace-nowrap font-display text-6xl font-semibold leading-[0.82] sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[11rem]",
        lineIndex === 0 && "lg:text-[7.5rem] xl:text-[8.5rem] 2xl:text-[9.5rem]",
        lineIndex % 2 === 1 && "kinetic-outline"
      )}
      style={{ x: lineX, y: lineY, opacity }}
    >
      {text.split("").map((char, glyphIndex) => (
        <KineticGlyph
          key={`${text}-${char}-${glyphIndex}`}
          char={char}
          glyphIndex={glyphIndex}
          lineIndex={lineIndex}
          progress={progress}
          isFilled={isFilledArray[glyphIndex]}
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
      className="absolute inset-x-0 top-[85%] z-0 -rotate-2 overflow-hidden border-y border-foreground/15 bg-background/50 py-3 backdrop-blur-md dark:bg-background/30"
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
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -88]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
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
      <LoopRibbon progress={scrollYProgress} />
      <motion.div
        className="kinetic-mask pointer-events-none absolute inset-x-0 top-32 z-0 flex flex-col gap-3 px-4 sm:top-28 md:px-8 lg:top-24"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        {(siteConfig.hero.kineticWords as KineticWord[]).map((word, lineIndex) => (
          <KineticLine
            key={`${word.text}-${lineIndex}`}
            word={word}
            lineIndex={lineIndex}
            progress={scrollYProgress}
          />
        ))}
      </motion.div>

    </section>
  );
}