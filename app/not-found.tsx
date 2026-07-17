import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { notFoundCopy } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <section className="flex min-h-screen flex-col items-center justify-center border-b border-foreground/20 px-4 pt-16 text-center">
        <Logo className="h-16 w-16 opacity-80" />
        <p
          className="mt-6 font-display font-bold leading-none text-foreground/10"
          style={{ fontSize: "clamp(6rem, 22vw, 14rem)" }}
        >
          {notFoundCopy.code}
        </p>
        <h1 className="mt-2 text-balance font-display text-4xl font-semibold sm:text-6xl">
          {notFoundCopy.title}
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          {notFoundCopy.description}
        </p>
        <Button asChild size="lg" className="mt-9 rounded-full">
          <Link href={notFoundCopy.action.href}>{notFoundCopy.action.label}</Link>
        </Button>
      </section>
      <Footer />
    </main>
  );
}
