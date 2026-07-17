"use client";

import { MotionDiv, Reveal } from "@/components/motion";
import { sectionCopy, team } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-foreground/20">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm uppercase text-muted-foreground">
            {sectionCopy.about.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold sm:text-7xl">
            {sectionCopy.about.title}
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-md border border-foreground/20 bg-foreground/20">
          {team.map((member, index) => (
            <MotionDiv
              key={member.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="bg-background p-5"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl">{member.name}</h3>
                  <p className="mt-1 text-sm uppercase text-muted-foreground">
                    {member.role}
                  </p>
                </div>
                <span className="font-display text-2xl text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
