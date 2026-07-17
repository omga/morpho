"use client";

import { useEffect, useRef } from "react";
import { createTimeline, scrambleText } from "animejs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

const { slogans } = siteConfig.hero;

// Timing (ms)
const SCRAMBLE_DURATION = 1000;
const LINE_STAGGER = 300;
const SLOGAN_HOLD = 600; // gap between slogans on the timeline

// Wrap each word in a span so single words can react to hover (styled in globals.css)
function wrapWords(lines: HTMLElement[]) {
  lines.forEach((line) => {
    const words = line.textContent?.split(/(\s+)/) ?? [];
    line.innerHTML = words
      .map((w) => (w.trim() ? `<span class="slogan-word">${w}</span>` : w))
      .join("");
  });
}

export function HeroSection() {
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sloganRef.current;
    if (!element) return;

    const lines = Array.from(
      element.querySelectorAll<HTMLElement>(".slogan-line")
    );
    if (lines.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapWords(lines);
      return;
    }

    // Build a single timeline: scramble slogan 0 -> 1 -> 2, then enable hover
    const tl = createTimeline({
      defaults: { duration: SCRAMBLE_DURATION, ease: "easeInOutSine" },
    });

    let cursor = 0;

    slogans.forEach((slogan) => {
      slogan.forEach((text, lineIndex) => {
        tl.add(
          lines[lineIndex],
          {
            innerHTML: scrambleText({ text }),
            delay: lineIndex * LINE_STAGGER,
          },
          cursor + lineIndex * LINE_STAGGER
        );
      });
      // advance cursor past this slogan's scramble + hold
      cursor += LINE_STAGGER * (lines.length - 1) + SCRAMBLE_DURATION + SLOGAN_HOLD;
    });

    tl.call(() => wrapWords(lines), cursor - SLOGAN_HOLD);

    return () => {
      tl.pause();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-foreground/20 px-4 pt-16"
    >
      <h1 className="sr-only">{siteConfig.hero.headline}</h1>

      <div
        ref={sloganRef}
        aria-hidden
        className="flex cursor-pointer flex-col items-center text-center font-display font-bold tracking-[0.03em]"
      >
        <div
          className="slogan-line text-muted-foreground"
          style={{ fontSize: "clamp(2rem, 8vw, 4rem)", lineHeight: 1 }}
        >
          {slogans[0][0]}
        </div>
        <div
          className="slogan-line mt-2 text-foreground"
          style={{ fontSize: "clamp(3rem, 12vw, 7rem)", lineHeight: 1 }}
        >
          {slogans[0][1]}
        </div>
        <div
          className="slogan-line mt-2 text-foreground"
          style={{ fontSize: "clamp(3rem, 12vw, 7rem)", lineHeight: 1 }}
        >
          {slogans[0][2]}
        </div>
      </div>

      <p className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {siteConfig.hero.proof}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg" className="rounded-full">
          <a href={siteConfig.hero.primaryAction.href}>
            {siteConfig.hero.primaryAction.label}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <a href={siteConfig.hero.secondaryAction.href}>
            {siteConfig.hero.secondaryAction.label}
          </a>
        </Button>
      </div>
    </section>
  );
}
