export const siteConfig = {
  name: "Morpho Studio",
  tagline: "Small team. Serious output.",
  description:
    "Mobile apps and digital products for founders — designed, built, and shipped by a small senior team.",
  url: "https://morphostudio.dev",
  email: "hello@morphostudio.dev",
  phone: "+1 604 861 2249",
  cta: "Let's Talk",
  address: ["Remote-first studio", "Kyiv / Vancouver", "Building worldwide"],
  nav: [
    { label: "ABOUT", href: "/#about" },
    { label: "PORTFOLIO", href: "/#work" },
    { label: "SERVICES", href: "/#services" },
    { label: "STORIES", href: "/#stories" },
    { label: "CONTACT", href: "/#contact" }
  ],

  hero: {
    headline:
      "Morpho Studio — a small senior team designing and building mobile apps and web products for founders.",
    slogans: [
      ["SMALL TEAM.", "SERIOUS OUTPUT.", "MORPHO STUDIO."],
      ["DIGITAL PRODUCTS.", "BUILT RIGHT.", "SHIPPED FAST."],
      ["MORPHO STUDIO", "THINK . BUILD .", "SHIP . REPEAT ."]
    ],
    proof: "For founders who need momentum, not meetings.",
    primaryAction: { label: "View work", href: "/#work" },
    secondaryAction: { label: "Let's Talk", href: "/#contact" }
  }
};

export const sectionCopy = {
  work: {
    eyebrow: "Our work",
    title: "Selected Work",
    description:
      "Product concepts and explorations that show how we think, design, and build. Shipped client case studies take these slots as they launch."
  },
  about: {
    eyebrow: "About",
    title: "Senior taste, direct hands, fewer meetings."
  },
  services: {
    eyebrow: "Services",
    title: "Built around the parts that make products real.",
    description:
      "Strategy lives inside the work: interface decisions, architecture, launch paths, and the business signal each product needs to earn."
  },
  stories: {
    eyebrow: "Stories",
    title: "Notes from the floor.",
    description:
      "Lightweight editorial slots for process, launches, and product thinking."
  },
  testimonials: {
    eyebrow: "Partners",
    title: "What it's like to work with us."
  },
  footer: {
    description:
      "Small team. Serious output. Digital products shaped with design, engineering, and business intent.",
    copyright: "(c) 2026 Morpho Studio"
  }
};

export type ProjectKind = "concept" | "team" | "client";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  industry: string;
  kind: ProjectKind;
  /**
   * For kind "team": where the work actually happened and what our role was.
   * Example: { context: "Built at Acme Corp, 2023–2024", role: "Lead mobile developer", team: "Team of 6" }
   */
  attribution?: { context: string; role?: string; team?: string };
  /** Two hues (0–360) that drive this project's generated art. */
  palette: { hue: number; hue2: number };
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  services: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "ample",
    title: "Ample",
    subtitle: "Uber for home services",
    year: "2026",
    type: "Mobile product",
    industry: "Home services marketplace",
    kind: "concept",
    palette: { hue: 212, hue2: 252 },
    summary:
      "A two-sided marketplace connecting homeowners with vetted service professionals — real-time booking, transparent pricing, and verified reviews.",
    challenge:
      "Marketplaces die in the gap between two audiences: homeowners won't book without trust, and pros won't stay without control over their schedule and earnings. Most home-services apps solve one side and quietly lose the other.",
    approach: [
      "A booking flow compressed to three screens — service, time, confirmation — with the price breakdown visible before commitment.",
      "Verified-pro onboarding with document checks and a public work history, so trust is earned by structure rather than star ratings alone.",
      "Live job tracking with arrival windows and in-app messaging, replacing the 'is anyone coming?' anxiety that kills repeat bookings.",
      "A dedicated pro-side surface for schedule, routing, and earnings — the retention half most marketplace concepts skip."
    ],
    outcome:
      "The concept closes the full marketplace loop — search, booking, the job itself, payment, and review — in one coherent system, with the two-sided architecture worked out to a level a build team could take straight into production.",
    services: ["Product strategy", "UX/UI design", "Mobile development"],
    stack: ["React Native (Expo)", "TypeScript", "Supabase", "Stripe"]
  },
  {
    slug: "opussafe",
    title: "OpusSafe",
    subtitle: "Construction safety, simplified",
    year: "2026",
    type: "SaaS platform",
    industry: "Construction & compliance",
    kind: "concept",
    palette: { hue: 36, hue2: 14 },
    summary:
      "Digital safety management for construction teams — automated reporting, incident tracking, and compliance documentation in one platform.",
    challenge:
      "Site safety still runs on paper: toolbox talks in binders, incident reports filed days late, and compliance audits that take a week of scrambling. Field workers wear gloves, work in glare, and have no patience for enterprise software.",
    approach: [
      "Offline-first forms that sync when signal returns — a hard requirement on real sites, not a nice-to-have.",
      "One-tap incident capture with photos and voice notes, designed for gloved hands and bright sunlight.",
      "Compliance documentation assembled automatically from daily activity, so an audit becomes an export instead of a crisis.",
      "A manager dashboard that surfaces leading indicators — missed checks, overdue actions — before they become incidents."
    ],
    outcome:
      "The concept demonstrates how consumer-grade interaction design changes adoption in an industry that hates software — the field flows were pressure-tested against real site constraints like connectivity, gloves, and time pressure.",
    services: ["UX/UI design", "Web development", "Mobile development"],
    stack: ["Next.js", "React Native", "PostgreSQL", "AWS S3"]
  },
  {
    slug: "an-elegant-mind",
    title: "An Elegant Mind",
    subtitle: "Mental health care, made personal",
    year: "2025",
    type: "Healthcare app",
    industry: "Digital health",
    kind: "concept",
    palette: { hue: 264, hue2: 300 },
    summary:
      "A compassionate mental health platform connecting patients with therapists — secure video sessions, mood tracking, and personalized care plans.",
    challenge:
      "Finding a therapist is a high-friction, high-stakes search made worse by bad matching and clinical-feeling software. People arrive at these products in a vulnerable state; every dark pattern and every extra form costs someone care.",
    approach: [
      "An intake flow written in plain, warm language that doubles as the matching engine — clinical rigor without clinical tone.",
      "Secure video sessions built on a privacy-first architecture, with session notes owned by the care relationship rather than the platform.",
      "Mood journaling designed as a lightweight daily loop that gives therapists longitudinal signal between sessions.",
      "Therapist-side care plans and progress views, because retention in care is a two-sided problem too."
    ],
    outcome:
      "The concept shows how far interface tone and information architecture can lower the barrier to starting care — and works out the privacy architecture that any real build in this space has to get right on day one.",
    services: ["Product strategy", "UX/UI design", "Web development"],
    stack: ["Next.js", "WebRTC", "Node.js", "PostgreSQL"]
  },
  {
    slug: "tanin",
    title: "Tanin",
    subtitle: "Nutrition, figured out for you",
    year: "2025",
    type: "Wellness product",
    industry: "Health & wellness",
    kind: "concept",
    palette: { hue: 145, hue2: 95 },
    summary:
      "AI-powered nutrition coaching that adapts to your body — meal planning, macro tracking, and recommendations that adjust to your goals.",
    challenge:
      "Nutrition apps churn because logging is a chore and plans are generic. By week three, the streak breaks, the plan no longer matches real life, and the app gets deleted — the problem is adherence, not information.",
    approach: [
      "Photo and voice logging that removes the food-database scavenger hunt from daily tracking.",
      "Adaptive targets that recalibrate weekly from actual adherence, instead of punishing users for missing a fixed plan.",
      "An AI coaching layer with a defined personality — direct, non-judgmental — and hard guardrails around medical claims.",
      "Meal plans generated from what the user actually eats and buys, not an idealized pantry."
    ],
    outcome:
      "The concept reframes the category around adherence mechanics rather than data entry, and maps where an AI layer genuinely earns its place in the loop — and where it's just decoration.",
    services: ["Product strategy", "UX/UI design", "Mobile development", "AI integration"],
    stack: ["React Native", "TypeScript", "LLM pipeline", "HealthKit"]
  },
  {
    slug: "havium",
    title: "Havium",
    subtitle: "Property investing, clear as day",
    year: "2025",
    type: "Fintech app",
    industry: "Real estate fintech",
    kind: "concept",
    palette: { hue: 190, hue2: 220 },
    summary:
      "A property investment platform with real-time market analytics, portfolio tracking, and automated due-diligence reports for informed decisions.",
    challenge:
      "Retail property investors drown in listings but starve for signal. The data exists — comps, yields, market velocity — but it's scattered across tabs and spreadsheets, and analysis paralysis wins more often than any deal does.",
    approach: [
      "A deal scorecard that condenses due diligence into one screen a non-professional can act on with confidence.",
      "Portfolio views built around cash flow and exposure rather than vanity valuations.",
      "Automated due-diligence reports assembled from market data, saving the weekend currently spent copy-pasting into spreadsheets.",
      "Alerting tuned to investor criteria, so the platform works while the user doesn't."
    ],
    outcome:
      "The concept demonstrates a full decision-support loop for property investing — from discovery to scored deal to tracked asset — with the data model designed for real market-data integrations.",
    services: ["UX/UI design", "Web development", "AI integration"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js workers"]
  },
  {
    slug: "pulsia",
    title: "Pulsia",
    subtitle: "Health monitoring application",
    year: "2024",
    type: "Wearable companion",
    industry: "Digital health",
    kind: "concept",
    palette: { hue: 355, hue2: 25 },
    summary:
      "A wearable health companion that tracks vitals, detects anomalies, and turns raw sensor data into insights worth acting on.",
    challenge:
      "Wearables generate rivers of vitals data that most owners never act on. The hard problem isn't collection — it's separating a meaningful anomaly from noise, and saying it in language that informs without alarming.",
    approach: [
      "Baseline learning per user, so 'unusual' is defined by your body rather than population averages.",
      "Anomaly cards written in plain language with explicit next steps, reviewed against a do-no-harm copy standard.",
      "A watch-first, glanceable interface where the phone app is the depth layer, not the front door.",
      "Clinician-ready exports, because the moment that matters is the one where a doctor asks 'can I see the data?'"
    ],
    outcome:
      "The concept works out the full signal chain from raw sensor stream to humane, actionable insight — the exact layer where most wearable companions lose their users.",
    services: ["UX/UI design", "Mobile development", "AI integration"],
    stack: ["Swift", "HealthKit", "Kotlin", "Node.js"]
  },
  {
    slug: "mlv",
    title: "MLV",
    subtitle: "Global investment, guided with precision",
    year: "2024",
    type: "Investment portal",
    industry: "Wealth management",
    kind: "concept",
    palette: { hue: 230, hue2: 195 },
    summary:
      "A global investment portal offering curated opportunities across markets — risk profiling, document flows, and portfolio diversification tools.",
    challenge:
      "Cross-border investors juggle jurisdictions, risk tiers, and mountains of documents across email threads and PDFs. The experience layer of private investing lags a decade behind the assets it moves.",
    approach: [
      "Curated deal rooms that present each opportunity with consistent structure — thesis, terms, risks, documents — instead of a folder of PDFs.",
      "Risk profiling that gates discovery, so investors see opportunities matched to their mandate rather than a firehose.",
      "A document vault with e-sign flows designed around how deals actually close, including the multi-party waiting states.",
      "A relationship-manager console, keeping the human advisory layer inside the product instead of leaking into email."
    ],
    outcome:
      "The concept brings consumer-grade clarity to private investment flows while respecting the compliance structure the domain demands — a template for the unglamorous-but-valuable end of fintech.",
    services: ["Product strategy", "UX/UI design", "Web development"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"]
  },
  {
    slug: "unitiq",
    title: "UnitIQ",
    subtitle: "Cash flow on every listing",
    year: "2024",
    type: "Real estate tool",
    industry: "Real estate tools",
    kind: "concept",
    palette: { hue: 165, hue2: 135 },
    summary:
      "A real estate investment calculator that analyzes cash flow, ROI, and market trends — data-backed decisions on every property listing.",
    challenge:
      "Every serious property investor maintains a spreadsheet, and every spreadsheet is slightly wrong. Evaluating a listing means twenty minutes of manual entry per property — friction that caps how many deals anyone can seriously consider.",
    approach: [
      "Paste-a-listing parsing that pre-fills the model in seconds, collapsing the per-property evaluation cost.",
      "An opinionated cash-flow model with every assumption exposed and adjustable — trust through transparency, not black boxes.",
      "Scenario sliders for rate, rent, and vacancy that make sensitivity analysis a gesture instead of a formula.",
      "Saved comps and shareable analyses, because investment decisions are made in conversations."
    ],
    outcome:
      "The concept turns a spreadsheet ritual into a sub-minute workflow, and shows how a sharply-scoped single-purpose tool can out-compete platforms by respecting one job completely.",
    services: ["UX/UI design", "Web development"],
    stack: ["Next.js", "TypeScript", "Supabase"]
  },
  {
    slug: "mwork",
    title: "MWORK",
    subtitle: "Design-build, unmistakably bold",
    year: "2024",
    type: "Brand system",
    industry: "Design-build / AEC",
    kind: "concept",
    palette: { hue: 18, hue2: 45 },
    summary:
      "A comprehensive brand system for a design-build firm — visual identity, digital presence, and materials that reflect bold craftsmanship.",
    challenge:
      "Design-build firms sell craft, but most present themselves with template websites and clip-art proposals. The gap between the quality of the physical work and the quality of the brand costs them exactly the clients they want.",
    approach: [
      "An identity system built on construction's own visual language — measurements, plans, material honesty — rather than borrowed tech-startup polish.",
      "Typographic and color infrastructure specified for every touchpoint, from site signage to proposal decks.",
      "A digital presence where the work photography leads and the interface stays out of its way.",
      "A rollout kit with templates the firm's own team can maintain without a designer on retainer."
    ],
    outcome:
      "The concept demonstrates the studio's brand range beyond product UI — a complete identity architecture where every artifact, digital or printed, is recognizably one system.",
    services: ["Brand identity", "UX/UI design", "Web development"],
    stack: ["Figma", "Next.js", "Sanity CMS"]
  }
];

export const caseStudyCopy = {
  backLabel: "All work",
  conceptBadge: "Concept",
  conceptNote:
    "This is an internal product exploration by Morpho Studio. The brief, constraints, and design and engineering thinking are our real work; the client and business specifics are illustrative until a shipped case study takes this slot.",
  contextTitle: "Context",
  sections: {
    challenge: "The challenge",
    approach: "The approach",
    outcome: "The outcome"
  },
  meta: {
    industry: "Industry",
    services: "Services",
    stack: "Stack",
    year: "Year"
  },
  nextProject: "Next project",
  cta: {
    title: "Building something in this space?",
    action: "Let's Talk",
    href: "/#contact"
  }
};

export const services = [
  {
    title: "Mobile dev",
    text: "Native and cross-platform apps built around stable architecture, fast iteration, and measurable product outcomes.",
    index: "01"
  },
  {
    title: "UI/UX",
    text: "Research-backed flows, sharp interfaces, design systems, and prototypes that make complex products feel calm.",
    index: "02"
  },
  {
    title: "Web dev",
    text: "Marketing sites, product dashboards, portals, and launch-ready platforms with performance in the bones.",
    index: "03"
  },
  {
    title: "AI integration",
    text: "Practical AI features, internal copilots, automation, and model workflows shaped around real business use.",
    index: "04"
  }
];

export const team = [
  {
    name: "Andrew",
    role: "Founder",
    bio: "Turns product ambiguity into clear decisions, sharp scopes, and work that can actually ship."
  },
  {
    name: "Kate",
    role: "Art director",
    bio: "Builds expressive visual systems with enough restraint to stay useful after launch."
  },
  {
    name: "Vlad",
    role: "Mobile developer",
    bio: "Makes mobile experiences feel quick, stable, and quietly polished in the hand."
  },
  {
    name: "Anne",
    role: "SEO / marketing",
    bio: "Connects content, search, and growth loops so good products can find their audience."
  }
];

export const studioFacts = [
  { value: "4", label: "People on the team — every one of them senior" },
  { value: "2", label: "Time zones covered, Kyiv to Vancouver" },
  { value: "0", label: "Account managers between you and the builders" },
  { value: "1", label: "Team that takes it from first call to release" }
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/**
 * Ships empty on purpose — the section renders only when real quotes exist.
 * Add entries as clients provide them:
 * { quote: "…", name: "Jane Doe", role: "CEO, Acme" }
 */
export const testimonials: Testimonial[] = [];

export const stories = [
  "Why small senior teams beat noisy delivery rooms.",
  "Designing app launches around business proof, not vibes.",
  "Where AI belongs in a product roadmap."
];

export const notFoundCopy = {
  code: "404",
  title: "This page morphed away.",
  description:
    "The link is broken, or the page has moved on to another form. Head back and keep exploring.",
  action: { label: "Back to home", href: "/" }
};

export const contactForm = {
  eyebrow: "Start a project",
  title: "Ready to build your product?",
  repeatedCta: "Let's Talk",
  description:
    "Tell us what you are making, what needs to change, or where the current product is stuck.",
  fields: {
    name: "Name",
    email: "Email",
    budget: "Budget range",
    message: "Project notes"
  },
  submit: "Send inquiry"
};
