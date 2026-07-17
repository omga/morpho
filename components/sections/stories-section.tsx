"use client";

import { MotionDiv, Reveal } from "@/components/motion";
import { sectionCopy, stories } from "@/lib/data";

export function StoriesSection() {
  return (
    <section id="stories" className="border-t border-foreground/20">
      <div className="section-shell">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-muted-foreground">
              {sectionCopy.stories.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl font-semibold sm:text-7xl">
              {sectionCopy.stories.title}
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground">
            {sectionCopy.stories.description}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((story, index) => (
            <MotionDiv
              key={story}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="flex min-h-64 flex-col justify-between rounded-md border border-foreground/20 bg-card p-5"
            >
              <span className="text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl">{story}</h3>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
