"use client";

import { useState } from "react";
import { AlertCircle, Check, Loader2, Send } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/contact-schema";
import { contactForm, siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-sm text-accent">
      {message}
    </p>
  );
}

export function ContactSection() {
  const repeatedCta = Array.from({ length: 12 }, (_, index) => index);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? "")
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setFieldErrors(
        Object.fromEntries(
          parsed.error.issues.map((issue) => [
            String(issue.path[0]),
            issue.message
          ])
        )
      );
      return;
    }

    setFieldErrors({});
    setServerMessage("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message);
      }
      setFirstName(parsed.data.name.split(" ")[0]);
      setStatus("success");
    } catch (err) {
      setServerMessage(
        err instanceof Error && err.message
          ? err.message
          : contactForm.errors.sendFailed
      );
      setStatus("error");
    }
  }

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

          <ul className="mt-8 grid max-w-xl gap-3">
            {contactForm.promises.map((promise) => (
              <li
                key={promise}
                className="flex items-start gap-3 leading-relaxed text-muted-foreground"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {promise}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-2 text-muted-foreground">
            {siteConfig.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a href={`mailto:${siteConfig.email}`} className="mt-4 text-foreground">
              {siteConfig.email}
            </a>
           
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex min-h-[28rem] flex-col items-start justify-center gap-5 rounded-md border border-foreground/20 bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-display text-3xl font-semibold sm:text-4xl">
                {contactForm.success.title}
                {firstName ? `, ${firstName}` : ""}.
              </h3>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                {contactForm.success.body}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid gap-5 rounded-md border border-foreground/20 bg-card p-4 sm:p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm text-muted-foreground"
                  >
                    {contactForm.fields.name.label}
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder={contactForm.fields.name.placeholder}
                    aria-invalid={!!fieldErrors.name}
                  />
                  <FieldError message={fieldErrors.name} />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm text-muted-foreground"
                  >
                    {contactForm.fields.email.label}
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={contactForm.fields.email.placeholder}
                    aria-invalid={!!fieldErrors.email}
                  />
                  <FieldError message={fieldErrors.email} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  {contactForm.fields.budget.label}{" "}
                  <span className="text-muted-foreground/70">
                    · {contactForm.fields.budget.hint}
                  </span>
                </label>
                <Select id="contact-budget" name="budget" defaultValue="">
                  <option value="">{contactForm.fields.budget.placeholder}</option>
                  {contactForm.fields.budget.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  {contactForm.fields.message.label}
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder={contactForm.fields.message.placeholder}
                  aria-invalid={!!fieldErrors.message}
                />
                <FieldError message={fieldErrors.message} />
              </div>

              {/* Honeypot — humans never see it, bots can't resist it */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {status === "error" && (
                <p
                  role="alert"
                  className="flex items-start gap-2 text-sm leading-relaxed text-accent"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {serverMessage} {contactForm.error.prefix}{" "}
                    <a href={`mailto:${siteConfig.email}`} className="underline">
                      {siteConfig.email}
                    </a>
                  </span>
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="rounded-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    {contactForm.sending}
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    {contactForm.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground/80">
                {contactForm.privacyNote}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
