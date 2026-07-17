import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ArtProject = Pick<Project, "slug" | "title" | "palette">;

type Variant = "cover" | "screens" | "detail" | "wide";

/**
 * Deterministic generative art for a project, driven by its palette hues.
 * Stands in for real product imagery until case-study assets exist — swap by
 * rendering an <Image> instead wherever a project gains real visuals.
 */
export function ProjectArt({
  project,
  variant = "cover",
  className
}: {
  project: ArtProject;
  variant?: Variant;
  className?: string;
}) {
  const seed = hashSeed(project.slug);
  const { hue, hue2 } = project.palette;

  const c = {
    bg: `hsl(${hue} 30% 8%)`,
    card: `hsl(${hue} 24% 12%)`,
    cardLight: `hsl(${hue} 22% 15%)`,
    line: `hsl(${hue} 40% 72% / 0.16)`,
    lineSoft: `hsl(${hue} 40% 72% / 0.08)`,
    ink: `hsl(${hue} 30% 80% / 0.5)`,
    inkSoft: `hsl(${hue} 30% 80% / 0.22)`,
    accent: `hsl(${hue} 78% 60%)`,
    accent2: `hsl(${hue2} 78% 62%)`
  };

  const uid = `pa-${project.slug}-${variant}`;
  const wide = variant === "wide";
  const W = wide ? 1280 : 800;
  const H = wide ? 560 : 500;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${uid}-glow`}>
          <stop offset="0%" stopColor={c.accent} stopOpacity="0.32" />
          <stop offset="55%" stopColor={c.accent2} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c.accent2} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-bars`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={c.accent2} />
          <stop offset="100%" stopColor={c.accent} />
        </linearGradient>
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.bg} stopOpacity="0" />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0.55" />
        </linearGradient>
        <pattern
          id={`${uid}-grid`}
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 44 0 L 0 0 0 44"
            fill="none"
            stroke={c.lineSoft}
            strokeWidth="1"
          />
        </pattern>
        <filter id={`${uid}-noise`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Base */}
      <rect width={W} height={H} fill={c.bg} />
      <rect width={W} height={H} fill={`url(#${uid}-grid)`} />
      <circle
        cx={wide ? 950 + (seed % 5) * 30 : 620 + (seed % 5) * 24}
        cy={100 + (seed % 3) * 30}
        r={wide ? 340 : 250}
        fill={`url(#${uid}-glow)`}
      />

      {variant === "cover" && <Cover c={c} letter={project.title[0]} seed={seed} uid={uid} />}
      {variant === "screens" && <Screens c={c} seed={seed} />}
      {variant === "detail" && <Detail c={c} seed={seed} uid={uid} />}
      {variant === "wide" && <Wide c={c} letter={project.title[0]} seed={seed} uid={uid} />}

      {/* Finish */}
      <rect width={W} height={H} filter={`url(#${uid}-noise)`} />
      <rect width={W} height={H} fill={`url(#${uid}-fade)`} />
    </svg>
  );
}

type Colors = {
  bg: string;
  card: string;
  cardLight: string;
  line: string;
  lineSoft: string;
  ink: string;
  inkSoft: string;
  accent: string;
  accent2: string;
};

function hashSeed(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return h;
}

function GhostLetter({
  letter,
  x,
  y,
  size,
  stroke
}: {
  letter: string;
  x: number;
  y: number;
  size: number;
  stroke: string;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={650}
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      {letter}
    </text>
  );
}

/** Abstract floating UI cards + ghost monogram. */
function Cover({
  c,
  letter,
  seed,
  uid
}: {
  c: Colors;
  letter: string;
  seed: number;
  uid: string;
}) {
  const arcTilt = -20 + (seed % 5) * 10;
  return (
    <g>
      <GhostLetter letter={letter} x={520} y={430} size={430} stroke={c.inkSoft} />

      {/* Orbit arc */}
      <g transform={`rotate(${arcTilt} 620 240)`}>
        <path
          d="M 470 240 A 150 150 0 0 1 770 240"
          fill="none"
          stroke={c.accent2}
          strokeWidth="2"
          opacity="0.55"
        />
        <circle cx="470" cy="240" r="6" fill={c.accent2} />
      </g>

      {/* Main UI card */}
      <g>
        <rect x="84" y="128" width="300" height="224" rx="18" fill={c.card} stroke={c.line} />
        <circle cx="118" cy="166" r="10" fill={c.accent} />
        <rect x="140" y="159" width="120" height="13" rx="6.5" fill={c.ink} />
        <rect x="114" y="198" width="216" height="11" rx="5.5" fill={c.inkSoft} />
        <rect x="114" y="222" width="180" height="11" rx="5.5" fill={c.inkSoft} />
        <rect x="114" y="246" width="238" height="11" rx="5.5" fill={c.inkSoft} />
        <rect x="114" y="292" width="118" height="36" rx="18" fill={c.accent} />
        <rect x="244" y="292" width="86" height="36" rx="18" fill="none" stroke={c.line} />
      </g>

      {/* Overlay stat card */}
      <g>
        <rect x="340" y="270" width="228" height="148" rx="16" fill={c.cardLight} stroke={c.line} />
        <rect x="366" y="296" width="86" height="10" rx="5" fill={c.inkSoft} />
        <rect x="366" y="318" width="120" height="18" rx="6" fill={c.ink} />
        <polyline
          points="366,392 402,376 434,384 466,356 498,364 534,338"
          fill="none"
          stroke={`url(#${uid}-bars)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="534" cy="338" r="5" fill={c.accent} />
      </g>

      <circle cx="700" cy="410" r="8" fill={c.accent} opacity="0.9" />
      <circle cx="654" cy="96" r="4" fill={c.accent2} />
    </g>
  );
}

function Phone({
  x,
  y,
  rot,
  c,
  flip
}: {
  x: number;
  y: number;
  rot: number;
  c: Colors;
  flip?: boolean;
}) {
  const cx = x + 85;
  const cy = y + 180;
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <rect x={x} y={y} width="170" height="360" rx="26" fill={c.card} stroke={c.line} />
      <rect x={x + 10} y={y + 10} width="150" height="340" rx="18" fill={c.bg} />
      <rect x={x + 62} y={y + 20} width="46" height="7" rx="3.5" fill={c.inkSoft} />
      {/* Header */}
      <rect x={x + 26} y={y + 48} width="72" height="12" rx="6" fill={c.ink} />
      <circle cx={x + 132} cy={y + 54} r="9" fill={flip ? c.accent2 : c.accent} />
      {/* Content blocks */}
      <rect x={x + 26} y={y + 84} width="118" height="64" rx="10" fill={c.cardLight} />
      <rect x={x + 26} y={y + 160} width="118" height="10" rx="5" fill={c.inkSoft} />
      <rect x={x + 26} y={y + 182} width="88" height="10" rx="5" fill={c.inkSoft} />
      <rect x={x + 26} y={y + 214} width="118" height="46" rx="10" fill={c.cardLight} />
      <rect x={x + 26} y={y + 272} width="64" height="10" rx="5" fill={c.inkSoft} />
      {/* CTA */}
      <rect x={x + 26} y={y + 300} width="118" height="30" rx="15" fill={flip ? c.accent2 : c.accent} />
    </g>
  );
}

/** Three staggered app screens. */
function Screens({ c, seed }: { c: Colors; seed: number }) {
  const lift = (seed % 3) * 8;
  return (
    <g>
      <Phone x={92} y={104 + lift} rot={-5} c={c} />
      <Phone x={540} y={96 + lift} rot={5} c={c} flip />
      <Phone x={314} y={64} rot={0} c={c} />
    </g>
  );
}

/** Zoomed instrument: progress ring + bars. */
function Detail({ c, seed, uid }: { c: Colors; seed: number; uid: string }) {
  const sweep = 120 + (seed % 4) * 40;
  const barHeights = [64, 118, 88, 164, 132];
  return (
    <g>
      {/* Ring */}
      <circle cx="250" cy="234" r="142" fill="none" stroke={c.line} strokeDasharray="2 8" />
      <circle
        cx="250"
        cy="234"
        r="142"
        fill="none"
        stroke={c.accent}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${(sweep / 360) * 892} 892`}
        transform="rotate(-90 250 234)"
      />
      <circle cx="250" cy="234" r="96" fill={c.card} stroke={c.line} />
      <rect x="212" y="212" width="76" height="16" rx="8" fill={c.ink} />
      <rect x="224" y="242" width="52" height="10" rx="5" fill={c.inkSoft} />

      {/* Bars */}
      <g>
        {barHeights.map((h, i) => (
          <rect
            key={i}
            x={472 + i * 58}
            y={412 - h}
            width="34"
            height={h}
            rx="8"
            fill={i === 3 ? `url(#${uid}-bars)` : c.cardLight}
            stroke={i === 3 ? "none" : c.line}
          />
        ))}
        <line x1="460" y1="412" x2="770" y2="412" stroke={c.line} />
        <line x1="460" y1="248" x2="770" y2="248" stroke={c.lineSoft} strokeDasharray="4 6" />
      </g>

      <circle cx="640" cy="140" r="5" fill={c.accent2} />
      <circle cx="712" cy="108" r="3.5" fill={c.accent} />
    </g>
  );
}

/** Cinematic dashboard for case-study heroes. */
function Wide({
  c,
  letter,
  seed,
  uid
}: {
  c: Colors;
  letter: string;
  seed: number;
  uid: string;
}) {
  const arcTilt = -12 + (seed % 4) * 8;
  return (
    <g>
      <GhostLetter letter={letter} x={930} y={520} size={520} stroke={c.inkSoft} />

      <g transform={`rotate(${arcTilt} 1010 210)`}>
        <path
          d="M 850 210 A 160 160 0 0 1 1170 210"
          fill="none"
          stroke={c.accent2}
          strokeWidth="2"
          opacity="0.55"
        />
        <circle cx="1170" cy="210" r="6" fill={c.accent2} />
      </g>

      {/* Dashboard card */}
      <g>
        <rect x="96" y="112" width="540" height="336" rx="20" fill={c.card} stroke={c.line} />
        <circle cx="134" cy="152" r="10" fill={c.accent} />
        <rect x="158" y="145" width="140" height="14" rx="7" fill={c.ink} />
        <rect x="500" y="141" width="104" height="22" rx="11" fill="none" stroke={c.line} />

        <rect x="128" y="196" width="232" height="88" rx="12" fill={c.cardLight} />
        <rect x="148" y="216" width="72" height="10" rx="5" fill={c.inkSoft} />
        <rect x="148" y="240" width="120" height="20" rx="7" fill={c.ink} />
        <rect x="376" y="196" width="232" height="88" rx="12" fill={c.cardLight} />
        <rect x="396" y="216" width="72" height="10" rx="5" fill={c.inkSoft} />
        <rect x="396" y="240" width="96" height="20" rx="7" fill={c.ink} />

        <polyline
          points="128,412 196,388 260,398 330,362 396,374 470,336 540,346 608,312"
          fill="none"
          stroke={`url(#${uid}-bars)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="608" cy="312" r="6" fill={c.accent} />
        <line x1="128" y1="412" x2="608" y2="412" stroke={c.lineSoft} />
      </g>

      {/* Floating chip */}
      <g>
        <rect x="600" y="86" width="150" height="44" rx="22" fill={c.cardLight} stroke={c.line} />
        <circle cx="626" cy="108" r="8" fill={c.accent2} />
        <rect x="646" y="102" width="84" height="12" rx="6" fill={c.ink} />
      </g>

      <circle cx="806" cy="470" r="8" fill={c.accent} opacity="0.9" />
    </g>
  );
}
