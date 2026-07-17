"use client";

import { MotionDiv, Reveal } from "@/components/motion";
import { sectionCopy, services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-foreground/20">
      <div className="section-shell">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-muted-foreground">
              {sectionCopy.services.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl font-semibold sm:text-7xl">
              {sectionCopy.services.title}
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground">
            {sectionCopy.services.description}
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-md border border-foreground/20 bg-foreground/20">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid gap-5 bg-background p-5 transition hover:bg-card md:grid-cols-[8rem_0.8fr_1fr] md:items-center"
            >
              <span className="font-display text-3xl text-muted-foreground">
                {service.index}
              </span>
              <h3 className="font-display text-4xl font-semibold">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{service.text}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
