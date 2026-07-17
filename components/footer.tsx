import { Logo } from "@/components/logo";
import { sectionCopy, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-foreground/20">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2.5 font-display text-2xl">
            <Logo className="h-8 w-8" />
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {sectionCopy.footer.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {sectionCopy.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
