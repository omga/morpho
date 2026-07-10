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
    loopWords: ["BUILD", "DESIGN", "SHIP", "ITERATE"],
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
    image: "/work/ample.svg"
  },
  {
    title: "OpusSafe",
    subtitle: "Construction safety, simplified",
    year: "2026",
    type: "SaaS platform",
    image: "/work/opussafe.svg"
  },
  {
    title: "An Elegant Mind",
    subtitle: "Mental health care, made personal",
    year: "2025",
    type: "Healthcare app",
    image: "/work/elegant-mind.svg"
  },
  {
    title: "Tanin",
    subtitle: "Nutrition, figured out for you",
    year: "2025",
    type: "Wellness product",
    image: "/work/tanin.svg"
  },
  {
    title: "Havium",
    subtitle: "Property investing, clear as day",
    year: "2025",
    type: "Fintech app",
    image: "/work/havium.svg"
  },
  {
    title: "Pulsia",
    subtitle: "Health monitoring application",
    year: "2024",
    type: "Wearable companion",
    image: "/work/pulsia.svg"
  },
  {
    title: "MLV",
    subtitle: "Global investment, guided with precision",
    year: "2024",
    type: "Investment portal",
    image: "/work/mlv.svg"
  },
  {
    title: "UnitIQ",
    subtitle: "Cash flow on every listing",
    year: "2024",
    type: "Real estate tool",
    image: "/work/unitiq.svg"
  },
  {
    title: "MWORK",
    subtitle: "Design-build, unmistakably bold",
    year: "2024",
    type: "Brand system",
    image: "/work/mwork.svg"
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