"use client";

import { Send } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactForm, siteConfig } from "@/lib/data";

export function ContactSection() {
  const repeatedCta = Array.from({ length: 12 }, (_, index) => index);

  return (
    <section id="contact" className="border-t border-foreground/20">
      <div className="overflow-hidden border-b border-foreground/20 py-5">
        <div className="flex w-max animate-marquee gap-6">
          {[...repeatedCta, ...repeatedCta].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-display text-5xl font-semibold sm:text-7xl"
            >
              {contactForm.repeatedCta}
            </span>
          ))}
        </div>
      </div>

      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm uppercase text-muted-foreground">
            {contactForm.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold sm:text-7xl">
            {contactForm.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {contactForm.description}
          </p>

          <div className="mt-10 grid gap-2 text-muted-foreground">
            {siteConfig.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a href={`mailto:${siteConfig.email}`} className="mt-4 text-foreground">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="text-foreground">
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="grid gap-4 rounded-md border border-foreground/20 bg-card p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder={contactForm.fields.name} />
              <Input type="email" placeholder={contactForm.fields.email} />
            </div>
            <Input placeholder={contactForm.fields.budget} />
            <Textarea placeholder={contactForm.fields.message} />
            <Button type="button" size="lg" className="rounded-full">
              {contactForm.submit}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
