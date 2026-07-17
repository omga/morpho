"use client";

import { MotionDiv } from "@/components/motion";
import { studioFacts } from "@/lib/data";

export function FactsSection() {
  return (
    <section className="border-t border-foreground/20">
      <div className="container grid grid-cols-2 gap-px overflow-hidden bg-foreground/10 lg:grid-cols-4">
        {studioFacts.map((fact, index) => (
          <MotionDiv
            key={fact.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="bg-background px-5 py-10 sm:px-8"
          >
            <p className="font-display text-6xl font-semibold text-accent sm:text-7xl">
              {fact.value}
            </p>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              {fact.label}
            </p>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
