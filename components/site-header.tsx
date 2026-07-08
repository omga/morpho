"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/15 bg-background/75 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-lg font-semibold">
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-foreground/15 bg-foreground/[0.03] p-1 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold text-foreground/70 transition hover:bg-foreground hover:text-background"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden rounded-full sm:inline-flex">
            <a href="#contact">{siteConfig.cta}</a>
          </Button>
          <ThemeToggle />
          <Button
            aria-label="Toggle menu"
            title="Toggle menu"
            variant="outline"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "grid border-t border-foreground/10 transition-all md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="overflow-hidden">
          <div className="container flex flex-col py-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-foreground/10 py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
