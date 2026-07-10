"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, scrambleText } from "animejs";

// Each slogan has 3 lines
const sloganTexts: string[][] = [
  ["SMALL TEAM.", "SERIOUS OUTPUT.", "MORPO STUDIO."],
  ["DIGITAL PRODUCTS.", "BUILT RIGHT.", "SHIPPED FAST."],
  ["MORPO STUDIO", "THINK . BUILD .", "SHIP . REPEAT ."],
];

// Timing (ms)
const SCRAMBLE_DURATION = 1000;
const LINE_STAGGER = 300;
const SLOGAN_HOLD = 600; // gap between slogans on the timeline

// Colors
const COLOR_MUTED = "#9b9d9c";
const COLOR_BRIGHT = "#F9F9F9";
const COLOR_HOVER = "#ffffff";
const COLOR_HOVER2 = "#5577DD";

export function HeroSection() {
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sloganRef.current;
    if (!element) return;

    const lines = [
      element.querySelector(".slogan-line-1") as HTMLElement,
      element.querySelector(".slogan-line-2") as HTMLElement,
      element.querySelector(".slogan-line-3") as HTMLElement,
    ].filter(Boolean) as HTMLElement[];

    if (lines.length === 0) return;

    // Build a single timeline: scramble slogan 0 -> 1 -> 2, then enable hover
    const tl = createTimeline({
      defaults: { duration: SCRAMBLE_DURATION, ease: "easeInOutSine" },
    });

    let cursor = 0;

    sloganTexts.forEach((slogan) => {
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

    // After the final scramble settles, wrap words in spans for hover
    tl.call(() => {
      lines.forEach((line, i) => {
        const baseColor = i === 0 ? COLOR_MUTED : COLOR_BRIGHT;
        // Wrap each word in a span, preserving spaces
        const words = line.textContent?.split(/(\s+)/) ?? [];
        line.innerHTML = words
          .map((w) =>
            w.trim()
              ? `<span class="slogan-word" style="color:${baseColor}">${w}</span>`
              : w
          )
          .join("");
      });

      // Attach hover handlers to each word span
      const wordSpans = element.querySelectorAll<HTMLElement>(".slogan-word");
      wordSpans.forEach((word) => {
        const baseColor = word.style.color;
        word.addEventListener("mouseenter", () => {
          animate(word, {
            color: COLOR_HOVER2,
            duration: 250,
            easing: "easeOutExpo",
          });
        });
        word.addEventListener("mouseleave", () => {
          animate(word, {
            color: baseColor,
            duration: 250,
            easing: "easeOutExpo",
          });
        });
      });
    }, cursor - SLOGAN_HOLD);

    return () => {
      tl.pause();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-foreground/20"
    >
      <div
        ref={sloganRef}
        className="pointer-events-auto absolute inset-0 z-0 flex flex-col items-center justify-center px-4 text-center cursor-pointer"
        style={{
          fontFamily: "'General Sans', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.03em",
          color: "hsl(var(--foreground))",
        }}
      >
        <div
          className="slogan-line-1"
          style={{
            fontSize: "clamp(2rem, 8vw, 4rem)",
            lineHeight: 1,
            color: COLOR_MUTED,
          }}
        >
          {sloganTexts[0][0]}
        </div>
        <div
          className="slogan-line-2"
          style={{
            fontSize: "clamp(3rem, 12vw, 7rem)",
            lineHeight: 1,
            marginTop: "0.3rem",
            color: COLOR_BRIGHT,
          }}
        >
          {sloganTexts[0][1]}
        </div>
        <div
          className="slogan-line-3"
          style={{
            fontSize: "clamp(3rem, 12vw, 7rem)",
            lineHeight: 1,
            marginTop: "0.3rem",
            color: COLOR_BRIGHT,
          }}
        >
          {sloganTexts[0][2]}
        </div>
      </div>
    </section>
  );
}