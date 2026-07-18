import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BG = "#12100f";
const INK = "#f4efe6";
const MUTED = "#a29e95";

/** The morpho butterfly mark, inline so the OG renderer needs no assets. */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <defs>
        <linearGradient id="og-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef6144" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M14.6 15.5 C 12.5 6.5, 6 1.8, 3.2 4.6 C 0.6 7.2, 4.2 13.4, 14.6 15.5 Z" fill="url(#og-mark)" />
      <path d="M17.4 15.5 C 19.5 6.5, 26 1.8, 28.8 4.6 C 31.4 7.2, 27.8 13.4, 17.4 15.5 Z" fill="url(#og-mark)" />
      <path d="M14.6 17.5 C 8.5 18.6, 4.6 24, 6.9 26.6 C 9.2 29.2, 13.7 25.5, 14.6 17.5 Z" fill="url(#og-mark)" opacity="0.72" />
      <path d="M17.4 17.5 C 23.5 18.6, 27.4 24, 25.1 26.6 C 22.8 29.2, 18.3 25.5, 17.4 17.5 Z" fill="url(#og-mark)" opacity="0.72" />
      <rect x="15.4" y="10" width="1.2" height="12.4" rx="0.6" fill={INK} opacity="0.9" />
    </svg>
  );
}

/**
 * Branded social-share card. `eyebrow` is the small kicker (studio name or
 * project type), `title` the headline, `subtitle` an optional second line.
 */
export function OgImage({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage:
            "linear-gradient(135deg, #17110f 0%, #12100f 45%, #171226 100%)",
          padding: 80,
          color: INK,
          fontFamily: "sans-serif"
        }}
      >
        {/* Soft accent glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "#ef6144",
            opacity: 0.22,
            filter: "blur(120px)"
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Mark size={64} />
          <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Morpho Studio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: MUTED
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              marginTop: 18,
              maxWidth: 1000
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: 34,
                color: MUTED,
                marginTop: 22,
                maxWidth: 940
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        <span style={{ fontSize: 24, color: MUTED }}>morphostudio.dev</span>
      </div>
    ),
    OG_SIZE
  );
}
