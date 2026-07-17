import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { contactForm, siteConfig } from "@/lib/data";

// Naive per-instance rate limit — enough to blunt bursts on a small site.
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: contactForm.errors.rateLimited },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: contactForm.errors.invalid },
      { status: 400 }
    );
  }

  // Honeypot: humans never see the "company" field. Pretend success so bots
  // don't learn they were caught.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: contactForm.errors.invalid,
        fields: Object.fromEntries(
          parsed.error.issues.map((issue) => [
            String(issue.path[0]),
            issue.message
          ])
        )
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json(
      { message: contactForm.errors.sendFailed },
      { status: 500 }
    );
  }

  const { name, email, budget, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Morpho Studio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: email,
      subject: `New inquiry — ${name}${budget ? ` (${budget})` : ""}`,
      text: [
        "New project inquiry via morphostudio.dev",
        "",
        `Name:   ${name}`,
        `Email:  ${email}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    if (error) {
      console.error("contact: resend error", error);
      return NextResponse.json(
        { message: contactForm.errors.sendFailed },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("contact: send threw", err);
    return NextResponse.json(
      { message: contactForm.errors.sendFailed },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
