export const siteConfig = {
  name: "Morpho Studio",
  tagline: "Small team. Serious output.",
  description:
    "Mobile apps. Digital products.\nBuilt right, shipped fast.",
  email: "hello@morphostudio.dev",
  phone: "+1 604 861 2249",
  cta: "Let's Talk",
  address: ["Remote-first studio", "Kyiv / Vancouver", "Building worldwide"],
  nav: [
    { label: "ABOUT", href: "#about" },
    { label: "PORTFOLIO", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "STORIES", href: "#stories" },
    { label: "CONTACT", href: "#contact" }
  ],

  hero: {
    primaryAction: "View work",
    secondaryAction: "Let's Talk",
    kineticWords: [
      { text: "SMALL TEAM", unfilledWords: ["SMALL"] },
      { text: "SERIOUS", unfilledWords: ["SERIOUS"] },
      { text: "OUTPUT", unfilledWords: [] }
    ],
    slogan: ["SMALL TEAM", "SERIOUS OUTPUT"],
    sloganMorph: ["THINK. BUILD.", "SHIP. REPEAT."],
    loopWords: ["THINK", "BUILD", "SHIP", "REPEAT"],
    proof: "For founders who need momentum, not meetings."
  }
};

export const sectionCopy = {
  work: {
    eyebrow: "Our work",
    title: "Selected Work",
    description:
      "A compact set of product worlds, shaped as reference-ready placeholders for Morpho case studies."
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
  footer: {
    description:
      "Small team. Serious output. Digital products shaped with design, engineering, and business intent.",
    copyright: "(c) 2026 Morpho Studio"
  }
};

export const projects = [
  {
    title: "Ample",
    subtitle: "Uber for home services",
    year: "2026",
    type: "Mobile product",
    image: "/work/ample.svg",
    description:
      "A two-sided marketplace connecting homeowners with vetted service professionals. Real-time booking, transparent pricing, and verified reviews."
  },
  {
    title: "OpusSafe",
    subtitle: "Construction safety, simplified",
    year: "2026",
    type: "SaaS platform",
    image: "/work/opussafe.svg",
    description:
      "Digital safety management for construction teams. Automated reporting, incident tracking, and compliance documentation in one platform."
  },
  {
    title: "An Elegant Mind",
    subtitle: "Mental health care, made personal",
    year: "2025",
    type: "Healthcare app",
    image: "/work/elegant-mind.svg",
    description:
      "A compassionate mental health platform connecting patients with therapists. Secure video sessions, mood tracking, and personalized care plans."
  },
  {
    title: "Tanin",
    subtitle: "Nutrition, figured out for you",
    year: "2025",
    type: "Wellness product",
    image: "/work/tanin.svg",
    description:
      "AI-powered nutrition coaching that adapts to your body. Meal planning, macro tracking, and personalized recommendations based on your goals."
  },
  {
    title: "Havium",
    subtitle: "Property investing, clear as day",
    year: "2025",
    type: "Fintech app",
    image: "/work/havium.svg",
    description:
      "Property investment platform with real-time market analytics, portfolio tracking, and automated due diligence reports for informed decisions."
  },
  {
    title: "Pulsia",
    subtitle: "Health monitoring application",
    year: "2024",
    type: "Wearable companion",
    image: "/work/pulsia.svg",
    description:
      "Wearable health companion that tracks vitals, detects anomalies, and provides actionable insights. Seamless integration with medical providers."
  },
  {
    title: "MLV",
    subtitle: "Global investment, guided with precision",
    year: "2024",
    type: "Investment portal",
    image: "/work/mlv.svg",
    description:
      "Global investment portal offering curated opportunities across markets. Data-driven insights, risk assessment, and portfolio diversification tools."
  },
  {
    title: "UnitIQ",
    subtitle: "Cash flow on every listing",
    year: "2024",
    type: "Real estate tool",
    image: "/work/unitiq.svg",
    description:
      "Real estate investment calculator that analyzes cash flow, ROI, and market trends. Make data-backed decisions on every property listing."
  },
  {
    title: "MWORK",
    subtitle: "Design-build, unmistakably bold",
    year: "2024",
    type: "Brand system",
    image: "/work/mwork.svg",
    description:
      "A comprehensive brand system for a design-build firm. Visual identity, digital presence, and marketing materials that reflect bold craftsmanship."
  }
];

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

export const stories = [
  "Why small senior teams beat noisy delivery rooms.",
  "Designing app launches around business proof, not vibes.",
  "Where AI belongs in a product roadmap."
];

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