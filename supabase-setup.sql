-- Run this in Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste → Run

CREATE TABLE IF NOT EXISTS site_config (
  id integer PRIMARY KEY DEFAULT 1,
  config jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Prevent more than one row
CREATE UNIQUE INDEX IF NOT EXISTS site_config_single_row ON site_config (id);

-- Allow public read (anon key)
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON site_config
  FOR SELECT USING (true);

CREATE POLICY "Service role write" ON site_config
  FOR ALL USING (auth.role() = 'service_role');

-- Seed with initial config (paste your full config JSON here)
INSERT INTO site_config (id, config) VALUES (1, '{
  "MAINTENANCE_MODE": false,
  "site": {
    "name": "Fasttrack Registry",
    "tagline": "Business Registration Made Simple",
    "description": "Jamaica trusted partner for fast, accurate business registration and compliance filing.",
    "url": "https://islandyout.github.io/Fasttrack/",
    "email": "fasttrackregistry@gmail.com",
    "whatsapp": "18762275562",
    "whatsappDisplay": "+1 (876) 227-5562",
    "location": "Kingston, Jamaica"
  },
  "nav": {
    "logo": "Fasttrack Registry",
    "links": [
      { "label": "Services", "href": "#services" },
      { "label": "How It Works", "href": "#how-it-works" },
      { "label": "Pricing", "href": "#pricing" },
      { "label": "FAQ", "href": "#faq" }
    ],
    "cta": { "label": "Get Started", "href": "./booking.html" }
  },
  "hero": {
    "eyebrow": "Jamaica Business Registration Specialists",
    "headline": "Register Your Business.",
    "headlineAccent": "Launch Your Dream.",
    "subheadline": "We handle your Companies Office filings, TRN, NIS, and compliance paperwork — fast, correctly, and without the stress.",
    "cta_primary": { "label": "Start Your Registration", "href": "./booking.html" },
    "cta_secondary": { "label": "See Our Services", "href": "#services" },
    "trustBadge": "Trusted by 500+ Jamaican Entrepreneurs"
  },
  "services": {
    "sectionLabel": "What We Do",
    "heading": "Everything You Need to Launch Legally",
    "subheading": "From sole traders to limited companies — we handle every step of your registration journey.",
    "items": [
      { "icon": "🏢", "title": "Company Registration", "description": "Full Companies Office of Jamaica (COJ) registration for limited liability companies.", "badge": "Most Popular" },
      { "icon": "🪙", "title": "Business Name Registration", "description": "Register your sole trader or partnership business name quickly and correctly.", "badge": null },
      { "icon": "📋", "title": "TRN & Tax Registration", "description": "Taxpayer Registration Number applications coordinated with Tax Administration Jamaica.", "badge": null },
      { "icon": "🛡️", "title": "NIS Registration", "description": "National Insurance Scheme employer and employee registration handled seamlessly.", "badge": null },
      { "icon": "📂", "title": "Annual Returns Filing", "description": "Stay compliant year after year. We prepare and file your Annual Returns before deadlines hit.", "badge": null },
      { "icon": "⚡", "title": "Rush Processing", "description": "Need it done yesterday? Our rush service prioritises your filing for the fastest possible turnaround.", "badge": "Express" }
    ]
  },
  "howItWorks": {
    "sectionLabel": "The Process",
    "heading": "Three Steps to Being Official",
    "subheading": "No confusing forms. No government office queues. Just a smooth, guided process from enquiry to certificate.",
    "steps": [
      { "number": "01", "title": "Tell Us About Your Business", "description": "Fill out our simple enquiry form or WhatsApp us directly. We will confirm your name availability and recommend the right structure." },
      { "number": "02", "title": "We Handle the Paperwork", "description": "Our team prepares every document, handles all filings, and communicates with the relevant government offices on your behalf." },
      { "number": "03", "title": "Receive Your Certificate", "description": "Get your official registration documents delivered digitally or by courier. You are now a legitimate, registered Jamaican business." }
    ]
  },
  "trust": {
    "sectionLabel": "Why Fasttrack",
    "heading": "Built for Jamaican Entrepreneurs",
    "stats": [
      { "value": "500+", "label": "Businesses Registered" },
      { "value": "5 Days", "label": "Average Turnaround" },
      { "value": "100%", "label": "Filing Accuracy Rate" },
      { "value": "3 Years", "label": "Serving Jamaica" }
    ]
  },
  "pricing": {
    "sectionLabel": "Transparent Pricing",
    "heading": "Simple, Honest Rates",
    "subheading": "No hidden fees. Government filing fees are separate and disclosed upfront.",
    "note": "* Government filing fees (COJ, TAJ, NIS) are charged at cost and listed separately in your quote.",
    "plans": [
      {
        "name": "Business Name",
        "price": "J$8,500",
        "period": "service fee",
        "description": "For sole traders and partnerships registering a business name.",
        "features": ["Name availability search", "Form preparation & filing", "Digital certificate delivery", "Registration guidance"],
        "cta": "Get Started",
        "highlighted": false,
        "badge": null
      },
      {
        "name": "Limited Company",
        "price": "J$25,000",
        "period": "service fee",
        "description": "Full incorporation package for limited liability companies.",
        "features": ["Name reservation & search", "Articles of incorporation", "COJ filing & follow-up", "TRN registration", "NIS employer setup", "Digital document pack"],
        "cta": "Get Started",
        "highlighted": true,
        "badge": "Most Popular"
      },
      {
        "name": "Compliance Pack",
        "price": "J$12,000",
        "period": "per year",
        "description": "Annual returns filing and compliance reminders for existing companies.",
        "features": ["Annual Returns preparation", "COJ filing", "Deadline reminders", "Compliance status check"],
        "cta": "Get Started",
        "highlighted": false,
        "badge": null
      }
    ]
  },
  "faq": {
    "sectionLabel": "Common Questions",
    "heading": "We Have Answers",
    "subheading": "Questions about registering your Jamaican business? Here are the ones we hear most often.",
    "items": [
      { "q": "How long does registration take?", "a": "Business name registrations typically take 3-5 business days. Limited company incorporations take 7-14 business days through the Companies Office of Jamaica." },
      { "q": "Do I need to visit any government office?", "a": "In most cases, no. We handle all filings on your behalf. Some situations may require your in-person signature, which we will flag clearly in advance." },
      { "q": "What documents do I need to provide?", "a": "Typically a valid government-issued ID and proof of address. We send you a clear checklist once you enquire." },
      { "q": "Are government fees included in your pricing?", "a": "No — government fees are charged at cost and listed separately in your quote. Our service fee covers preparation, filing, and follow-up only." },
      { "q": "Can you register a business if I am in the diaspora?", "a": "Yes. We regularly assist Jamaicans overseas who want to register businesses back home. Everything can be handled remotely." },
      { "q": "What if my business name is already taken?", "a": "We run a name availability search before filing. If your preferred name is taken, we will suggest alternatives." }
    ]
  },
  "ctaBanner": {
    "heading": "Ready to Make It Official?",
    "subheading": "Join hundreds of Jamaican entrepreneurs who have launched their businesses with Fasttrack Registry.",
    "cta": { "label": "Book a Free Consultation", "href": "./booking.html" }
  },
  "footer": {
    "tagline": "Jamaica trusted business registration partner.",
    "links": [
      { "label": "Services", "href": "#services" },
      { "label": "Pricing", "href": "#pricing" },
      { "label": "FAQ", "href": "#faq" },
      { "label": "Book Now", "href": "./booking.html" }
    ],
    "legal": "2024 Fasttrack Registry. All rights reserved. Not affiliated with the Companies Office of Jamaica."
  },
  "booking": {
    "eyebrow": "Free Consultation",
    "heading": "Let us Get Your Business Registered",
    "subheading": "Choose how you would like to reach us. We respond within 1 business day.",
    "whatsappCta": { "label": "Chat on WhatsApp", "message": "Hello Fasttrack Registry! I would like to enquire about registering my business." },
    "emailCta": { "label": "Send an Email", "subject": "Business Registration Enquiry", "body": "Hello Fasttrack Registry,\n\nI would like to enquire about registering my business.\n\nName:\nBusiness Type:\nAny questions:\n" },
    "options": [
      { "icon": "💬", "title": "WhatsApp Us", "description": "The fastest way to reach our team.", "cta": "Open WhatsApp", "type": "whatsapp" },
      { "icon": "✉️", "title": "Email Us", "description": "Send us your details and we will get back to you within 1 business day.", "cta": "Send Email", "type": "email" }
    ],
    "reassurances": ["Free initial consultation", "No commitment required", "Clear pricing upfront", "We handle everything"]
  },
  "maintenance": {
    "heading": "We will Be Back Soon",
    "subheading": "Fasttrack Registry is undergoing scheduled maintenance. We are making improvements to serve you better.",
    "eta": "Expected back online shortly.",
    "contact": "For urgent enquiries, WhatsApp us directly.",
    "whatsappCta": "Contact via WhatsApp"
  }
}')
ON CONFLICT (id) DO UPDATE SET config = EXCLUDED.config, updated_at = now();
