export const siteConfig = {
  name: "Morpho Studio",
  tagline: "Small team. Serious output.",
  description:
    "Mobile apps and digital products for founders — designed, built, and shipped by a small senior team.",
  url: "https://morphostudio.dev",
  email: "andrew.hatrus@gmail.com",
  cta: "Let's Talk",
  address: ["Remote-first studio", "Kyiv / Vancouver", "Building worldwide"],
  nav: [
    { label: "PORTFOLIO", href: "/#work" },
    { label: "ABOUT", href: "/#about" },
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
      "Shipped products from our team's track record — every one of them real. Client case studies join them as they launch."
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
      "Notes on teams, launches, and AI — from the floor, not the content calendar."
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
  /**
   * Real assets under /public. When present they replace the generated art:
   * cover (~16:10) in list rows/marquee/next-card, hero (~16:9) on the case
   * page, gallery in the case-study grid, stack as a full-width Behance-style
   * flow (dimensions required to avoid layout shift).
   */
  images?: {
    cover?: string;
    hero?: string;
    /** Replaces the single hero with a side-by-side image row on the case page. */
    heroGroup?: string[];
    /** Explicit visual for the work-row expanded panel. */
    expanded?: string;
    gallery?: string[];
    /** Cell shape for the gallery grid. Defaults to square. */
    galleryAspect?: "square" | "portrait";
    stack?: { src: string; width: number; height: number }[];
  };
  /** YouTube demo — rendered as a lazy, cookie-free embed on the case page. */
  video?: { youtubeId: string; caption?: string };
  /** Overrides the kind-derived badge ("Concept" / "Shipped product"). */
  badge?: string;
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
    slug: "onetouch-reveal",
    title: "OneTouch Reveal",
    subtitle: "Diabetes management, made meaningful",
    year: "2018–2019",
    type: "Medical device companion",
    industry: "Digital health / MedTech",
    kind: "team",
    attribution: {
      context:
        "Production work at Johnson & Johnson (LifeScan) on the OneTouch Reveal® product team.",
      role: "Mobile developer — Bluetooth meter sync, health-data processing, glucose trend visualizations",
      team: "Regulated medical-software organization; every change audited and tested to a medical bar"
    },
    palette: { hue: 205, hue2: 160 },
    images: {
      cover: "/work/onetouch-reveal/cover.png",
      hero: "/work/onetouch-reveal/hero.jpg",
      gallery: [
        "/work/onetouch-reveal/gallery-1.jpg",
        "/work/onetouch-reveal/gallery-3.avif"
      ]
    },
    video: {
      youtubeId: "S4DQNTsl5p4",
      caption: "OneTouch Reveal® product overview"
    },
    summary:
      "The companion app for OneTouch® blood-glucose meters — Bluetooth sync, pattern insights, and secure sharing with care teams, used by millions of people managing diabetes.",
    challenge:
      "A glucose reading only matters if it reliably reaches the app and becomes something a patient can act on. That means Bluetooth sync that survives real-world conditions, careful handling of protected health information, and visuals that reveal patterns without overwhelming — all inside the strict quality regime of regulated medical software.",
    approach: [
      "Implemented Bluetooth synchronization with OneTouch Verio meters — pairing, transfer, and retry behavior dependable enough that patients never have to think about it.",
      "Built data processing that turns raw meter readings into clean, structured health records, ready for analysis and clinician review.",
      "Developed the glucose trend visualizations — colour-coded patterns across glucose, food, insulin, and activity that patients and doctors actually read.",
      "Worked to a medical-grade quality bar: audited changes, exhaustive testing, and documentation that passes regulatory scrutiny."
    ],
    outcome:
      "Shipped in 2019 and still in production today — the app runs as part of a secure cloud ecosystem that LifeScan reports has helped over four million people manage diabetes. Software that survives six-plus years in a regulated market is the quality bar we bring to every build.",
    services: ["Mobile development", "Bluetooth integration", "Data visualization"],
    stack: ["iOS & Android (native)", "Bluetooth LE", "Secure health-data cloud"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/onetouch-reveal-app/id651293599"
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.lifescan.reveal"
      }
    ]
  },
  {
    slug: "vivre-le-vin",
    title: "Vivre le Vin",
    subtitle: "Swiss wine, sold with editorial soul",
    year: "2025",
    type: "E-commerce design",
    industry: "Wine & hospitality",
    kind: "team",
    attribution: {
      context:
        "A shipped e-commerce experience for a premium Swiss wine business. Design led by Katerina Yanchuk, Morpho Studio's art director.",
      role: "Art direction, UX/UI, and the editorial design system across desktop and mobile"
    },
    palette: { hue: 35, hue2: 350 },
    images: {
      cover: "/work/vivre-le-vin/cover.png",
      hero: "/work/vivre-le-vin/hero.webp",
      stack: [
        { src: "/work/vivre-le-vin/vlv-02.webp", width: 1400, height: 914 },
        { src: "/work/vivre-le-vin/vlv-03.webp", width: 1400, height: 914 },
        { src: "/work/vivre-le-vin/vlv-04.webp", width: 1400, height: 914 },
        { src: "/work/vivre-le-vin/vlv-05.webp", width: 1400, height: 981 },
        { src: "/work/vivre-le-vin/vlv-06.webp", width: 1400, height: 914 },
        { src: "/work/vivre-le-vin/vlv-07.webp", width: 1400, height: 3122 },
        { src: "/work/vivre-le-vin/vlv-08.webp", width: 1400, height: 895 },
        { src: "/work/vivre-le-vin/vlv-09.webp", width: 1400, height: 1597 },
        { src: "/work/vivre-le-vin/vlv-10.webp", width: 1400, height: 1318 },
        { src: "/work/vivre-le-vin/vlv-11.webp", width: 1400, height: 981 },
        { src: "/work/vivre-le-vin/vlv-12.webp", width: 1400, height: 1470 }
      ]
    },
    summary:
      "VLV — a digital home for Swiss wine: an e-commerce catalog and invitation-only tasting club, designed with the pace and elegance of a fine print magazine.",
    challenge:
      "Fine wine is bought slowly — on atmosphere, story, and trust — nothing like the click-rush of standard e-commerce. VLV needed a catalog, a shop, and a tasting-events club that feel like leafing through a beautifully printed magazine without losing the mechanics of search, cart, and checkout.",
    approach: [
      "An editorial layout system — generous whitespace, refined serif display type, and photography-first pages that sell terroir before price.",
      "A warm cellar palette of cream, oak, and burgundy drawn from the product itself, so the interface recedes and the wine leads.",
      "Commerce patterns woven in quietly: search, wishlist, account, and cart sit inside the elegance instead of breaking it.",
      "Invitation-only dégustation evenings designed as a club — event cards, mailing-list capture, and RSVP flows that turn scarcity into a feature."
    ],
    outcome:
      "A complete, presentation-grade design system for wine commerce — desktop and mobile, homepage to checkout to tasting club — published on Behance and ready for a build team to take to production.",
    services: ["Art direction", "UX/UI design", "E-commerce design"],
    stack: ["Design system", "Desktop & mobile web", "Editorial typography"],
    links: [
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/229657927/VLV"
      }
    ]
  },
  {
    slug: "simplepractice",
    title: "SimplePractice",
    subtitle: "A private practice, in your pocket",
    year: "2023",
    type: "Practice management app",
    industry: "Digital health / SaaS",
    kind: "team",
    attribution: {
      context:
        "Production Android work at SimplePractice, 2023 — the leading practice-management platform for health and wellness professionals.",
      role: "Android development on the clinician app — the HIPAA-compliant mobile arm of the platform"
    },
    palette: { hue: 168, hue2: 210 },
    images: {
      cover: "/work/simplepractice/cover.png",
      hero: "/work/simplepractice/hero.webp",
      gallery: [
        "/work/simplepractice/sp-1.webp",
        "/work/simplepractice/sp-2.webp",
        "/work/simplepractice/sp-3.webp",
        "/work/simplepractice/sp-4.webp",
        "/work/simplepractice/sp-5.webp",
        "/work/simplepractice/sp-6.webp"
      ],
      galleryAspect: "portrait"
    },
    summary:
      "The HIPAA-compliant companion app for SimplePractice — the platform more than 250,000 health and wellness practitioners run their businesses on. Scheduling, session notes, secure messaging, documents, and payments, anywhere.",
    challenge:
      "Clinicians don't run their practices at a desk — they run them between sessions, from hallways and waiting rooms. Putting protected health information on a personal phone raises the stakes: the app has to mirror a deep cloud platform while defending every screen with medical-grade security, without ever feeling like security software.",
    approach: [
      "The full admin day, mobile: scheduling, session notes, document upload and sharing, invoicing, and payment processing in one focused clinician app.",
      "Security engineered in layers — biometric access, in-app passcode, bank-level encryption, and quick-swipe privacy protection for opening the app around other people.",
      "Client communication kept inside the HIPAA boundary with secure messaging, instead of leaking into SMS and email.",
      "Companion-app discipline: a fast, focused mobile mirror of the cloud platform, built for the in-between moments where practices actually get managed."
    ],
    outcome:
      "The clinician app ships on Android and iOS as the mobile arm of a platform trusted by more than 250,000 practitioners. Building inside a HIPAA-regulated codebase at that scale is the reliability discipline we bring to every product we take on.",
    services: ["Mobile development", "Security engineering", "HIPAA compliance"],
    stack: ["Android (Kotlin)", "Biometric auth", "Encrypted storage"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/simplepractice-for-clinicians/id738207604"
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.simplepractice.simple"
      }
    ]
  },
  {
    slug: "zuup-roam",
    title: "zuup Roam",
    subtitle: "EV charging for Australia, in one app",
    year: "2024",
    type: "eMobility app",
    industry: "EV charging / eMobility",
    kind: "client",
    badge: "Shipped product",
    attribution: {
      context:
        "Client product work for zuup — an Australian eMobility company built around the driver experience, not the charging hardware.",
      role: "Mobile development across onboarding, station discovery, charging sessions, and payments"
    },
    palette: { hue: 152, hue2: 95 },
    images: {
      cover: "/work/zuup/cover.avif",
      hero: "/work/zuup/cover.avif",
      stack: [
        { src: "/work/zuup/zuup-1.avif", width: 1920, height: 626 },
        { src: "/work/zuup/zuup-2.avif", width: 1920, height: 730 }
      ],
      gallery: ["/work/zuup/zup-3.webp", "/work/zuup/zup-4.webp"],
      galleryAspect: "portrait"
    },
    summary:
      "One app for Australian EV drivers to find, charge, and pay across multiple public charging networks — 110+ locations, 200+ stations, and no per-provider apps in the glovebox.",
    challenge:
      "Australia's public charging is run by many operators, and each one expects its own app, account, and payment method. For drivers, range anxiety is often really app anxiety. zuup's answer was to build the whole business around the driver experience — which meant one app had to handle roaming across networks: live availability, honest pricing, and payments that never interrupt a charge.",
    approach: [
      "Onboarding cut to the essentials — email, phone, name — with everything else filled in during normal use. Adding a car takes a license plate; the app pulls the rest from the Australian vehicle registry. Three profile types cover personal drivers, business users, and fleets.",
      "Station discovery built for trip planning: Google Maps search along a route, real-time availability and pricing, a Price Graph of how rates move through the day, Popular Hours drawn from actual session data, plus driver ratings and nearby facilities.",
      "Charging sessions a driver can trust from their pocket — limits by time or battery percentage, real-time push updates, and an iOS Live Activity that keeps the session on the lock screen without opening the app.",
      "Payments that disappear: Stripe confirmation moved to the start of the session, so billing completes automatically when charging ends. Invoices arrive by email, and subscriptions give frequent drivers session discounts."
    ],
    outcome:
      "zuup Roam is live across Australia — 110+ charging locations, 200+ stations, and growing as new charge point operators integrate into the network. Charging roaming is infrastructure UX: the product works best when drivers stop noticing where one operator ends and the next begins.",
    services: ["Mobile development", "UX flows", "Payments integration"],
    stack: ["iOS & Android", "Stripe billing", "Google Maps", "Live Activities"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/au/app/zuup-roam/id6751229669"
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zuup.roam"
      }
    ]
  },
  {
    slug: "mindmate",
    title: "MindMate",
    subtitle: "An AI companion, shipped before the gold rush",
    year: "2023",
    type: "AI mobile app",
    industry: "Consumer AI",
    kind: "team",
    attribution: {
      context:
        "An in-house Morpho product — designed, built, and shipped end-to-end by our team in early 2023.",
      role: "Product design, Flutter engineering, and AI integration — the full cycle from idea to app stores"
    },
    palette: { hue: 262, hue2: 190 },
    images: {
      cover: "/work/mindmate/cover.png",
      hero: "/work/mindmate/cover.png",
      gallery: [
        "/work/mindmate/mindmate-1.png",
        "/work/mindmate/mindmate-2.webp",
        "/work/mindmate/mindmate-3.webp",
        "/work/mindmate/mindmate-4.png"
      ]
    },
    summary:
      "A conversational AI companion with chat and image generation — designed, built in Flutter, and shipped in early 2023, when consumer AI apps barely existed.",
    challenge:
      "In early 2023 there was no playbook for consumer AI: the APIs were weeks old, latency and costs were wild, and nobody knew what an AI product should feel like on a phone. The real race was shipping something people could actually use while 'first' was still on the table.",
    approach: [
      "Conversational chat and image generation in one pocket companion, built on the OpenAI chat and image APIs within weeks of their release.",
      "A prompt-template library that turned a blank chat box into one-tap use cases — long before 'prompt engineering' had a name.",
      "One Flutter codebase shipping to both iOS and Android — small-team economics without sacrificing product feel.",
      "Engineered around the realities of day-one AI APIs: rate limits, unpredictable latency, and token costs handled invisibly for the user."
    ],
    outcome:
      "MindMate shipped in early 2023 — months ahead of the wave of AI companions that followed — and passed 5,000 organic installs on Google Play, where it's still live today. It remains our proof that a small team can take a brand-new technology from zero to shipped product in weeks.",
    services: ["Product design", "Flutter development", "AI integration"],
    stack: ["Flutter (iOS & Android)", "OpenAI chat + image APIs", "Prompt template system"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.brainjars.mindmate"
      }
    ]
  },
  {
    slug: "apisaero",
    title: "ApisAero",
    subtitle: "Cockpit-grade navigation for civil aviation",
    year: "2025–2026",
    type: "Aviation navigation app",
    industry: "Civil aviation",
    kind: "team",
    attribution: {
      context:
        "Shipped production aviation software — sole mobile engineer on the product.",
      role: "Solo mobile developer — architecture, mapping performance, sensors, and ADS-B connectivity, in Kotlin Multiplatform"
    },
    palette: { hue: 218, hue2: 48 },
    images: {
      cover: "/work/apisaero/cover.png",
      hero: "/work/apisaero/cover-2.jpg",
      gallery: [
        "/work/apisaero/apisaero-4.jpg",
        "/work/apisaero/apisaero-1.jpg",
        "/work/apisaero/apisaero-2.png",
        "/work/apisaero/apisaero-3.png"
      ]
    },
    summary:
      "A navigation app for civil aviation — live flight instruments, route planning, thousands of map objects, and real-time air traffic via ADS-B — with the entire mobile build owned by a single engineer in Kotlin Multiplatform.",
    challenge:
      "A pilot's device has no patience for jank: instruments must read true at speed, and a map carrying thousands of geozones, markers, and live traffic has to stay smooth through hours-long flights with the app working hard in the background. Aviation software earns trust by never stuttering.",
    approach: [
      "Live flight instruments — speed, altitude, heading, and route progress — rendered in real time from onboard sensors.",
      "Route planning built for real flights: compose, save, and load routes in seconds.",
      "A map engineered for scale: thousands of geozones and markers kept fluid through lazy loading, background processing, and tight memory management.",
      "Live air traffic via direct connection to ADS-B receivers, with weather, wind, and runway data layered onto the map."
    ],
    outcome:
      "Shipped as a production app with one engineer owning the entire mobile build — a single Kotlin Multiplatform codebase spanning instruments, high-performance mapping, and hardware connectivity. Deep, performance-critical mobile work doesn't need a big team; it needs the right one.",
    services: ["Mobile development", "Real-time systems", "Hardware integration"],
    stack: ["Kotlin Multiplatform", "ADS-B hardware link", "High-performance map rendering"]
  },
  {
    slug: "teleconsole",
    title: "TeleConsole",
    subtitle: "Your office phone system, off the desk",
    year: "2020",
    type: "Business communications app",
    industry: "Telecom / VoIP",
    kind: "team",
    attribution: {
      context:
        "Production work at Telebroad on the TeleConsole mobile apps — the pocket arm of a full office phone platform.",
      role: "Mobile developer — building app features over REST, VoIP, and WebSocket APIs"
    },
    palette: { hue: 230, hue2: 180 },
    images: {
      cover: "/work/teleconsole/cover.png",
      expanded: "/work/teleconsole/cover-expand.png",
      heroGroup: [
        "/work/teleconsole/teleconsole-2.png",
        "/work/teleconsole/teleconsole-3.png",
        "/work/teleconsole/teleconsole-4.png"
      ],
      gallery: [
        "/work/teleconsole/teleconsole-5.png",
        "/work/teleconsole/teleconsole-6.webp",
        "/work/teleconsole/teleconsole-7.webp"
      ],
      galleryAspect: "portrait"
    },
    summary:
      "The mobile arm of Telebroad's office phone system — VoIP calls, SMS, fax, and voicemail with full desk-phone controls, anywhere the workday goes.",
    challenge:
      "A phone system is the one app that isn't allowed to fail. Calls arrive over VoIP, messages ride WebSockets, and all of it has to stay reachable around the clock without draining the battery or the data plan. The desk-phone features businesses actually run on — transfer, conferencing, recording, forwarding — had to survive the move to a pocket without losing their reliability.",
    approach: [
      "Full call control on mobile: hold, transfer, conferencing, recording, Do Not Disturb, forwarding, and selectable caller ID — your number or the company's, or hidden entirely.",
      "More than calls: SMS and MMS, sending and receiving faxes, and support for multiple voicemail, fax, and SMS numbers in one place.",
      "Call quality as a feature — switch between the mobile carrier and VoIP on the fly, so the best available line wins.",
      "The engineering underneath: REST, VoIP, and WebSocket integrations tuned for mobile realities — battery, data, and connections that hold. Cloud contacts sync across devices, with company-shared directories."
    ],
    outcome:
      "TeleConsole ships on iOS and Android as the daily communication tool for businesses on Telebroad's platform. Real-time systems that people answer calls on are reliability engineering where it counts — and that discipline carries into everything we build.",
    services: ["Mobile development", "Real-time systems", "API integration"],
    stack: ["iOS & Android", "VoIP", "WebSockets", "REST"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/teleconsole/id1301393519"
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.telebroad.teleconsole"
      }
    ]
  }
];

export const caseStudyCopy = {
  backLabel: "All work",
  conceptBadge: "Concept",
  teamBadge: "Shipped product",
  linksLabel: "See it live",
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
    role: "Lead developer",
    bio: "Turns product ambiguity into clear decisions, sharp scopes, and work that can actually ship."
  },
  {
    name: "Kate",
    role: "Art director",
    bio: "Builds expressive visual systems with enough restraint to stay useful after launch."
  },
  {
    name: "Vlad",
    role: "Full-stack developer",
    bio: "Turns complex ideas into smooth, reliable products that just work."
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

export type StoryBlock = { h2?: string; p?: string; list?: string[] };

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: StoryBlock[];
};

export const storiesCopy = {
  eyebrow: "Story",
  backLabel: "All stories",
  cta: { title: "Building something?", action: "Let's Talk", href: "/#contact" }
};

export const stories: Story[] = [
  {
    slug: "headcount-is-not-momentum",
    title: "Headcount is not momentum",
    excerpt:
      "Big teams feel safe and move slowly. What we learned about speed by watching size get in its own way.",
    date: "July 2026",
    body: [
      {
        p: "We've worked inside big product organizations — the kind with real budgets, real process, and a room full of smart people for every decision. Good things get built there. Some of the best software we've ever touched came out of exactly those rooms, and we're not going to pretend otherwise."
      },
      {
        p: "But somewhere past a certain size, a strange accounting takes over. Adding people to a project starts to feel like progress in itself. Twelve people sounds twice as serious as six, and twice as serious must surely be twice as fast. Anyone who has actually lived it knows the arithmetic runs the other way."
      },
      { h2: "Where the time actually goes" },
      {
        p: "It goes to synchronization. Every person on a project carries a small tax on everyone else: another calendar to find room in, another handoff to document, another person who quite reasonably asks to be looped in before something becomes final. None of this is malicious, and at scale almost none of it is optional. Big organizations aren't slow because the people are slow — they're slow because coordination at size genuinely requires machinery, and machinery has mass."
      },
      {
        p: "A four-person team pays almost none of that tax. Decisions happen inside the same conversation where the problem was noticed. The designer was there when the developer explained the constraint, so nobody has to write the constraint up, schedule a review of it, and defend it three weeks later to someone meeting it for the first time."
      },
      {
        list: [
          "No status meetings about other status meetings.",
          "No handoff documents for people sitting in the same call.",
          "No waiting two sprints for a decision that takes one honest hour.",
          "No translating between what sales promised and what the ticket says."
        ]
      },
      { h2: "Small only works when it's senior" },
      {
        p: "Here's the catch, and it's real: a small junior team is just as slow as a big one, for different reasons. Small teams have no slack for learning on the job. Every person has to be someone whose judgment you'd trust unsupervised, because unsupervised is the whole arrangement."
      },
      {
        p: "Senior speed isn't typing faster. It's the shorter distance between seeing a problem and knowing which of the five plausible solutions will still look right in six months. The biggest schedule win available in software is the mistake you don't make, and that win compounds quietly for the entire life of the product."
      },
      { h2: "What this buys you" },
      {
        p: "The same people from the first call to the release build. Decisions in hours, not sprints. A team small enough that nobody can hide, senior enough that nobody needs to. That's not a philosophy — it's just what's left when you delete everything that only exists because a team got too big to talk to itself."
      }
    ]
  },
  {
    slug: "launch-to-learn",
    title: "Launch to learn, not to impress",
    excerpt:
      "The first release isn't your product's big moment. It's the first honest answer the market gives you.",
    date: "June 2026",
    body: [
      {
        p: "There's a way of launching an app that looks a lot like a wedding: months of preparation, one big day, everyone smiling, and an unspoken agreement not to ask hard questions. The morning after, the metrics dashboard is quiet in a way nobody planned for, and the team quietly starts calling version 1.1 'the real launch.'"
      },
      {
        p: "The launches that go somewhere treat day one differently — not as a verdict on the team, but as a question put to the market. You don't launch to be told you're great. You launch to find out what's true."
      },
      { h2: "Decide what needs to be true" },
      {
        p: "Every product rests on a short stack of assumptions. People will grant this permission. People will pay before that feature. People will come back on day seven without being bribed. Most of the stack can be wrong and you'll survive — but one or two of those assumptions are load-bearing. Name them before you ship, out loud, in writing. The first release exists to test the load-bearing ones and almost nothing else."
      },
      { h2: "Build the smallest thing that can be wrong" },
      {
        p: "MVPs have a bad reputation because most of them are just small, and small isn't the point. Falsifiable is the point. A first release should be polished exactly where trust is earned — onboarding, the first five minutes, the moment money changes hands — and unapologetically plain everywhere your test doesn't reach. Nobody churns because settings looked basic. They churn because minute one didn't convince them."
      },
      { h2: "Pick your numbers before, not after" },
      {
        p: "Decide what 'working' means before launch day: two or three numbers, written down, with honest thresholds. Retention over downloads, almost always — downloads measure your marketing, retention measures your product. If you define success after the data comes in, everything will look like success, and you'll learn nothing at the exact moment learning is cheapest."
      },
      {
        p: "A quiet launch that teaches you something real beats a loud one that flatters you. The market's first answer is rarely yes — but it's almost always useful, and useful is what version two is made of."
      }
    ]
  },
  {
    slug: "most-apps-dont-need-a-chatbot",
    title: "Most apps don't need a chatbot",
    excerpt:
      "AI belongs where it removes work, not where it performs intelligence. A short field guide to telling the difference.",
    date: "May 2026",
    body: [
      {
        p: "Every second brief we see now has the same line in it: 'and AI features.' Fair enough — the pressure is real, investors ask about it, users half-expect it. But 'add AI' is not a feature request. It's a mood. And the default translation of that mood — a chat window bolted to the corner of an app that already had a job to do — is usually the wrong one."
      },
      {
        p: "We've shipped conversational AI where conversation was the whole point of the product. That's the exception. When chat is the product, chat is right. When chat is an accessory, it's a burden wearing a glow-up."
      },
      { h2: "The test: does it remove steps?" },
      {
        p: "Good AI integration is mostly invisible. It turns a photo into a filled-in form. It drafts the message the user was about to write anyway. It files, sorts, and flags so a human looks at ten things instead of two hundred. In every case the user does less than before. A bolted-on chatbot fails this test: now the user has to compose a prompt, read an essay back, and judge whether to trust it. That's more work, not less — outsourced to your busiest resource."
      },
      { h2: "Where it earns its place" },
      {
        list: [
          "Summarizing what happened while the user was away, instead of a feed they'll never scroll through.",
          "Turning messy input — photos, voice notes, pasted text — into structured data without a form.",
          "Writing the first draft of anything people write repeatedly and reluctantly.",
          "Ranking and flagging, so attention lands where it matters."
        ]
      },
      {
        p: "Notice that none of these require the user to know AI is involved. The best compliment an AI feature can get is nobody mentioning it — things just take fewer steps than they used to."
      },
      { h2: "The cost of pretending" },
      {
        p: "Every AI feature is a promise with a meter running: latency the user feels, tokens someone pays for, and a new surface where the product can be confidently wrong. That's a fine price for removed work. It's a terrible price for a demo. One AI feature that genuinely saves people time will outlast five that impressed a boardroom."
      },
      {
        p: "So the roadmap question isn't 'where can we put AI.' It's 'what work can we make disappear.' Answer that, and the technology chooses itself."
      }
    ]
  }
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
    "Tell us what you're making, what's stuck, or what needs to exist by next quarter. A short note is enough — we'll ask the right questions.",
  promises: [
    "A reply within 24 hours — from the founder, not a sales bot.",
    "A clear next step, even if we're not the right fit.",
    "Your idea stays yours. NDA on request."
  ],
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    budget: {
      label: "Budget ballpark",
      hint: "Optional — helps us propose the right-sized approach.",
      placeholder: "Choose a range",
      options: [
        "Under $10k",
        "$10k–$25k",
        "$25k–$50k",
        "$50k+",
        "Not sure yet — help me scope it"
      ]
    },
    message: {
      label: "Project notes",
      placeholder:
        "What are you building? Where is it stuck? Where should it be in three months?"
    }
  },
  submit: "Start the conversation",
  sending: "Sending…",
  privacyNote: "We use your email only to reply. No newsletters, no sharing.",
  success: {
    title: "Got it — thanks",
    body: "Your note is in the founder's inbox. You'll hear back within 24 hours. Until then, the case studies above show how we think."
  },
  error: {
    prefix: "That didn't go through. Try again in a minute, or email us directly at"
  },
  errors: {
    name: "Tell us your name — two characters will do.",
    email: "That email doesn't look quite right.",
    message: "Give us a sentence or two to work with.",
    messageMax:
      "That's a lot — trim it to 4000 characters and we'll dig into the rest on a call.",
    invalid: "Some fields need another look.",
    rateLimited: "Too many messages in a row — give it a few minutes.",
    sendFailed: "Our mail service hiccuped. Try again in a minute."
  }
};
