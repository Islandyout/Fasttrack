// ============================================================
// FASTTRACK REGISTRY — CONFIG.JS
// Single source of truth for all site content & settings
// ============================================================

window.FT = window.FT || {};

window.FT.config = {

  // ----------------------------------------------------------
  // MAINTENANCE MODE
  // Set to true to redirect all public pages to maintenance.html
  // ----------------------------------------------------------
  MAINTENANCE_MODE: false,

  // ----------------------------------------------------------
  // SITE META
  // ----------------------------------------------------------
  site: {
    name: "Fasttrack Registry",
    tagline: "Business Registration Made Simple",
    description: "Jamaica's trusted partner for fast, accurate business registration and compliance filing. We handle the paperwork — you build the dream.",
    url: "https://fasttrackregistry.com",
    email: "info@fasttrackregistry.com",
    whatsapp: "18761234567", // Jamaica number without + or spaces
    whatsappDisplay: "+1 (876) 123-4567",
    location: "Kingston, Jamaica",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    logo: "Fasttrack Registry",
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Get Started", href: "./booking.html" },
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    eyebrow: "Jamaica's Business Registration Specialists",
    headline: "Register Your Business.",
    headlineAccent: "Launch Your Dream.",
    subheadline: "We handle your Companies Office filings, TRN, NIS, and compliance paperwork — fast, correctly, and without the stress.",
    cta_primary: { label: "Start Your Registration", href: "./booking.html" },
    cta_secondary: { label: "See Our Services", href: "#services" },
    trustBadge: "Trusted by 500+ Jamaican Entrepreneurs",
  },

  // ----------------------------------------------------------
  // SERVICES SECTION
  // ----------------------------------------------------------
  services: {
    sectionLabel: "What We Do",
    heading: "Everything You Need to Launch Legally",
    subheading: "From sole traders to limited companies — we handle every step of your registration journey.",
    items: [
      {
        icon: "🏢",
        title: "Company Registration",
        description: "Full Companies Office of Jamaica (COJ) registration for limited liability companies. We prepare and file all documents on your behalf.",
        badge: "Most Popular",
      },
      {
        icon: "🪙",
        title: "Business Name Registration",
        description: "Register your sole trader or partnership business name quickly and correctly. Ideal for freelancers, vendors, and small operators.",
        badge: null,
      },
      {
        icon: "📋",
        title: "TRN & Tax Registration",
        description: "Taxpayer Registration Number applications coordinated with Tax Administration Jamaica (TAJ) to get your business compliant from day one.",
        badge: null,
      },
      {
        icon: "🛡️",
        title: "NIS Registration",
        description: "National Insurance Scheme employer and employee registration handled seamlessly so your team is covered from the start.",
        badge: null,
      },
      {
        icon: "📂",
        title: "Annual Returns Filing",
        description: "Stay compliant year after year. We prepare and file your Annual Returns with the Companies Office before deadlines hit.",
        badge: null,
      },
      {
        icon: "⚡",
        title: "Rush Processing",
        description: "Need it done yesterday? Our rush service prioritises your filing for the fastest possible turnaround within official timelines.",
        badge: "Express",
      },
    ],
  },

  // ----------------------------------------------------------
  // HOW IT WORKS SECTION
  // ----------------------------------------------------------
  howItWorks: {
    sectionLabel: "The Process",
    heading: "Three Steps to Being Official",
    subheading: "No confusing forms. No government office queues. Just a smooth, guided process from enquiry to certificate.",
    steps: [
      {
        number: "01",
        title: "Tell Us About Your Business",
        description: "Fill out our simple enquiry form or WhatsApp us directly. We'll confirm your name availability and recommend the right structure.",
      },
      {
        number: "02",
        title: "We Handle the Paperwork",
        description: "Our team prepares every document, handles all filings, and communicates with the relevant government offices on your behalf.",
      },
      {
        number: "03",
        title: "Receive Your Certificate",
        description: "Get your official registration documents delivered digitally or by courier. You're now a legitimate, registered Jamaican business.",
      },
    ],
  },

  // ----------------------------------------------------------
  // PRICING SECTION
  // ----------------------------------------------------------
  pricing: {
    sectionLabel: "Transparent Pricing",
    heading: "Simple, Honest Rates",
    subheading: "No hidden fees. Government filing fees are separate and disclosed upfront. Our service fee covers preparation, filing, and follow-up.",
    note: "* Government filing fees (COJ, TAJ, NIS) are charged at cost and listed separately in your quote.",
    plans: [
      {
        name: "Business Name",
        price: "J$8,500",
        period: "service fee",
        description: "For sole traders and partnerships registering a business name.",
        features: [
          "Name availability search",
          "Form preparation & filing",
          "Digital certificate delivery",
          "Registration guidance",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Limited Company",
        price: "J$25,000",
        period: "service fee",
        description: "Full incorporation package for limited liability companies.",
        features: [
          "Name reservation & search",
          "Articles of incorporation",
          "COJ filing & follow-up",
          "TRN registration",
          "NIS employer setup",
          "Digital document pack",
        ],
        cta: "Get Started",
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Compliance Pack",
        price: "J$12,000",
        period: "per year",
        description: "Annual returns filing and compliance reminders for existing companies.",
        features: [
          "Annual Returns preparation",
          "COJ filing",
          "Deadline reminders",
          "Compliance status check",
        ],
        cta: "Get Started",
        highlighted: false,
      },
    ],
  },

  // ----------------------------------------------------------
  // FAQ SECTION
  // ----------------------------------------------------------
  faq: {
    sectionLabel: "Common Questions",
    heading: "We've Got Answers",
    subheading: "Questions about registering your Jamaican business? Here are the ones we hear most often.",
    items: [
      {
        q: "How long does registration take?",
        a: "Business name registrations typically take 3–5 business days. Limited company incorporations take 7–14 business days through the Companies Office of Jamaica. Rush processing can reduce these timelines where available.",
      },
      {
        q: "Do I need to visit any government office?",
        a: "In most cases, no. We handle all filings on your behalf. Some situations may require your in-person signature, which we'll flag clearly in advance.",
      },
      {
        q: "What documents do I need to provide?",
        a: "Typically a valid government-issued ID (passport or national ID) and proof of address. For companies with multiple directors, we'll need documents for each. We send you a clear checklist once you enquire.",
      },
      {
        q: "Are government fees included in your pricing?",
        a: "No — government fees are charged at cost and listed separately in your quote so you know exactly what you're paying. Our service fee covers preparation, filing, and follow-up only.",
      },
      {
        q: "Can you register a business if I'm in the diaspora?",
        a: "Yes. We regularly assist Jamaicans overseas who want to register businesses back home. Everything can be handled remotely with scanned documents.",
      },
      {
        q: "What if my business name is already taken?",
        a: "We run a name availability search before filing. If your preferred name is taken, we'll suggest alternatives and work with you until we find one that fits.",
      },
    ],
  },

  // ----------------------------------------------------------
  // TRUST / SOCIAL PROOF
  // ----------------------------------------------------------
  trust: {
    sectionLabel: "Why Fasttrack",
    heading: "Built for Jamaican Entrepreneurs",
    stats: [
      { value: "500+", label: "Businesses Registered" },
      { value: "5 Days", label: "Average Turnaround" },
      { value: "100%", label: "Filing Accuracy Rate" },
      { value: "3 Years", label: "Serving Jamaica" },
    ],
  },

  // ----------------------------------------------------------
  // CTA BANNER
  // ----------------------------------------------------------
  ctaBanner: {
    heading: "Ready to Make It Official?",
    subheading: "Join hundreds of Jamaican entrepreneurs who've launched their businesses with Fasttrack Registry.",
    cta: { label: "Book a Free Consultation", href: "./booking.html" },
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "Jamaica's trusted business registration partner.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Book Now", href: "./booking.html" },
    ],
    legal: "© 2024 Fasttrack Registry. All rights reserved. Not affiliated with the Companies Office of Jamaica.",
  },

  // ----------------------------------------------------------
  // BOOKING PAGE
  // ----------------------------------------------------------
  booking: {
    eyebrow: "Free Consultation",
    heading: "Let's Get Your Business Registered",
    subheading: "Choose how you'd like to reach us. We respond within 1 business day.",
    whatsappCta: {
      label: "Chat on WhatsApp",
      message: "Hello Fasttrack Registry! I'd like to enquire about registering my business.",
    },
    emailCta: {
      label: "Send an Email",
      subject: "Business Registration Enquiry",
      body: "Hello Fasttrack Registry,\n\nI'd like to enquire about registering my business.\n\nName:\nBusiness Type:\nAny questions:\n",
    },
    options: [
      {
        icon: "💬",
        title: "WhatsApp Us",
        description: "The fastest way to reach our team. Send a message and we'll respond promptly.",
        cta: "Open WhatsApp",
        type: "whatsapp",
      },
      {
        icon: "✉️",
        title: "Email Us",
        description: "Prefer email? Send us your details and we'll get back to you within 1 business day.",
        cta: "Send Email",
        type: "email",
      },
    ],
    reassurances: [
      "Free initial consultation",
      "No commitment required",
      "Clear pricing upfront",
      "We handle everything",
    ],
  },

  // ----------------------------------------------------------
  // MAINTENANCE PAGE
  // ----------------------------------------------------------
  maintenance: {
    heading: "We'll Be Back Soon",
    subheading: "Fasttrack Registry is undergoing scheduled maintenance. We're making improvements to serve you better.",
    eta: "Expected back online shortly.",
    contact: "For urgent enquiries, WhatsApp us directly.",
    whatsappCta: "Contact via WhatsApp",
  },

};
