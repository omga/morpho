"use client";

import { useEffect, useRef } from "react";

const TAIL_MS = 380; // how long the comet tail lingers
const TAIL_MAX = 36; // max stored trail points

type TrailPoint = { x: number; y: number; t: number };
type Pulse = { x: number; y: number; t: number };

/**
 * Comet cursor: a precise head that trails a fading accent tail as it moves
 * (stretching with velocity, settling to a calm dot at rest), an orbital arc
 * over interactive elements, and a soft pulse on click. It steps aside over
 * text fields so the native I-beam does its job.
 */
export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    document.documentElement.classList.add("custom-cursor");

    const rootStyle = getComputedStyle(document.documentElement);
    const accent = rootStyle.getPropertyValue("--accent").trim() || "12 84% 63%";
    const fore = rootStyle.getPropertyValue("--foreground").trim() || "42 28% 92%";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const trail: TrailPoint[] = [];
    const pulses: Pulse[] = [];
    let mx = -100;
    let my = -100;
    let headR = 3;
    let targetR = 3;
    let ringA = 0; // orbital arc opacity (interactive hover)
    let targetRingA = 0;
    let vis = 0; // overall visibility (fades over text fields / off-window)
    let targetVis = 0;
    let orbit = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      targetVis = Math.max(targetVis, 0.001); // becomes visible on first move
      const last = trail[trail.length - 1];
      if (!last || Math.hypot(mx - last.x, my - last.y) > 2) {
        trail.push({ x: mx, y: my, t: performance.now() });
        if (trail.length > TAIL_MAX) trail.shift();
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isText = !!target.closest("input, textarea, select, [contenteditable]");
      const interactive =
        !isText &&
        !!target.closest("a, button, [role='button'], label, .cursor-pointer");
      targetR = interactive ? 6.5 : 3;
      targetRingA = interactive ? 1 : 0;
      targetVis = isText ? 0 : 1;
    };

    const onDown = () => pulses.push({ x: mx, y: my, t: performance.now() });
    const onLeaveWindow = () => {
      targetVis = 0;
      trail.length = 0;
    };
    const onEnterWindow = () => {
      targetVis = 1;
    };

    const tick = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      headR += (targetR - headR) * 0.16;
      ringA += (targetRingA - ringA) * 0.14;
      vis += ((targetVis > 0 ? targetVis : 0) - vis) * 0.18;
      orbit += 0.028 + ringA * 0.02;

      // expire old tail points
      while (trail.length && now - trail[0].t > TAIL_MS) trail.shift();

      if (vis > 0.01) {
        // Tail: two passes — a wide soft glow, then a brighter core line
        if (trail.length > 1) {
          for (const pass of [
            { width: headR * 2.6, alpha: 0.10 },
            { width: headR * 0.9, alpha: 0.42 }
          ]) {
            for (let i = 1; i < trail.length; i++) {
              const p0 = trail[i - 1];
              const p1 = trail[i];
              const age = 1 - (now - p1.t) / TAIL_MS;
              if (age <= 0) continue;
              const a = age * age * pass.alpha * vis;
              ctx.strokeStyle = `hsl(${accent} / ${a})`;
              ctx.lineWidth = Math.max(0.5, pass.width * age);
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.stroke();
            }
          }
        }

        // Head: accent halo + warm core
        ctx.beginPath();
        ctx.arc(mx, my, headR * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${accent} / ${0.14 * vis})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mx, my, headR, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${fore} / ${0.95 * vis})`;
        ctx.fill();

        // Orbital arc on interactive targets
        if (ringA > 0.02) {
          const r = headR + 11;
          ctx.beginPath();
          ctx.arc(mx, my, r, orbit, orbit + Math.PI * 1.35);
          ctx.strokeStyle = `hsl(${accent} / ${0.65 * ringA * vis})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          // comet satellite on the arc's leading edge
          ctx.beginPath();
          ctx.arc(
            mx + Math.cos(orbit) * r,
            my + Math.sin(orbit) * r,
            1.8,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `hsl(${accent} / ${0.9 * ringA * vis})`;
          ctx.fill();
        }
      }

      // Click pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const age = (now - pulses[i].t) / 450;
        if (age >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(pulses[i].x, pulses[i].y, 8 + age * 26, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${accent} / ${(1 - age) * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("resize", resize);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" aria-hidden />;
}
