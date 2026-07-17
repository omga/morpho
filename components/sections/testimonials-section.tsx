"use client";

import { MotionDiv, Reveal } from "@/components/motion";
import { sectionCopy, testimonials } from "@/lib/data";

/**
 * Renders nothing until real testimonials exist in lib/data.ts —
 * the slot is wired so quotes appear here the moment they're added.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-foreground/20">
      <div className="section-shell">
        <Reveal className="mb-10">
          <p className="text-sm uppercase text-muted-foreground">
            {sectionCopy.testimonials.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold sm:text-7xl">
            {sectionCopy.testimonials.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="flex flex-col justify-between gap-8 rounded-md border border-foreground/20 bg-card p-6"
            >
              <p className="text-lg leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-display text-xl">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
