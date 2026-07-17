import { cn } from "@/lib/utils";

/**
 * Morpho mark: a geometric morpho butterfly — two large upper wings, two
 * smaller lower wings, and a slim body — in the studio's ember-to-violet
 * gradient. Mirrored in app/icon.svg for the favicon.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7", className)} aria-hidden>
      <defs>
        <linearGradient id="morpho-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(14 88% 62%)" />
          <stop offset="100%" stopColor="hsl(262 72% 62%)" />
        </linearGradient>
      </defs>
      {/* Upper wings */}
      <path
        d="M14.6 15.5 C 12.5 6.5, 6 1.8, 3.2 4.6 C 0.6 7.2, 4.2 13.4, 14.6 15.5 Z"
        fill="url(#morpho-mark)"
      />
      <path
        d="M17.4 15.5 C 19.5 6.5, 26 1.8, 28.8 4.6 C 31.4 7.2, 27.8 13.4, 17.4 15.5 Z"
        fill="url(#morpho-mark)"
      />
      {/* Lower wings */}
      <path
        d="M14.6 17.5 C 8.5 18.6, 4.6 24, 6.9 26.6 C 9.2 29.2, 13.7 25.5, 14.6 17.5 Z"
        fill="url(#morpho-mark)"
        opacity="0.72"
      />
      <path
        d="M17.4 17.5 C 23.5 18.6, 27.4 24, 25.1 26.6 C 22.8 29.2, 18.3 25.5, 17.4 17.5 Z"
        fill="url(#morpho-mark)"
        opacity="0.72"
      />
      {/* Body */}
      <ellipse cx="16" cy="16.2" rx="1.15" ry="6.2" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
