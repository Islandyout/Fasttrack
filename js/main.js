// ============================================================
// FASTTRACK REGISTRY — MAIN.JS
// Waits for Supabase config, then injects all content.
// ============================================================

(function () {
  "use strict";

  window.FT = window.FT || {};

  function el(s, r)  { return (r || document).querySelector(s); }
  function els(s, r) { return (r || document).querySelectorAll(s); }
  function setText(s, v) { var n = el(s); if (n) n.textContent = v; }
  function setAttr(s, a, v) { var n = el(s); if (n) n.setAttribute(a, v); }

  function whatsappUrl(msg) {
    return "https://wa.me/" + window.FT.config.site.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  function mailtoUrl(subject, body) {
    return "mailto:" + window.FT.config.site.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  // ── Nav ───────────────────────────────────────────────────
  function buildNav() {
    var cfg = window.FT.config;
    els("[data-nav-links]").forEach(function (container) {
      container.innerHTML = cfg.nav.links.map(function (l) {
        return '<li><a href="' + l.href + '">' + l.label + "</a></li>";
      }).join("");
    });
    els("[data-nav-cta]").forEach(function (el) {
      el.textContent = cfg.nav.cta.label;
      el.setAttribute("href", cfg.nav.cta.href);
    });

    var toggle = el("[data-nav-toggle]");
    var mobile = el("[data-nav-mobile]");
    if (toggle && mobile) {
      toggle.addEventListener("click", function () {
        var open = mobile.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.classList.toggle("is-active", open);
      });
      els("a", mobile).forEach(function (a) {
        a.addEventListener("click", function () {
          mobile.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.classList.remove("is-active");
        });
      });
    }
    var nav = el("[data-nav]");
    if (nav) {
      window.addEventListener("scroll", function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 20);
      }, { passive: true });
    }
  }

  // ── Footer ────────────────────────────────────────────────
  function buildFooter() {
    var cfg = window.FT.config;
    setText("[data-footer-logo]", cfg.nav.logo);
    setText("[data-footer-tagline]", cfg.footer.tagline);
    setText("[data-footer-legal]", cfg.footer.legal);
    setText("[data-footer-email]", cfg.site.email);
    setText("[data-footer-whatsapp]", cfg.site.whatsappDisplay);
    setAttr("[data-footer-email-link]", "href", "mailto:" + cfg.site.email);
    setAttr("[data-footer-whatsapp-link]", "href", whatsappUrl("Hello Fasttrack Registry!"));
    var lc = el("[data-footer-links]");
    if (lc) {
      lc.innerHTML = cfg.footer.links.map(function (l) {
        return '<li><a href="' + l.href + '">' + l.label + "</a></li>";
      }).join("");
    }
  }

  // ── Index ─────────────────────────────────────────────────
  function buildIndex() {
    var cfg = window.FT.config;
    var h = cfg.hero, s = cfg.services, hw = cfg.howItWorks,
        p = cfg.pricing, f = cfg.faq, t = cfg.trust, b = cfg.ctaBanner;

    // Hero
    setText("[data-hero-eyebrow]", h.eyebrow);
    setText("[data-hero-headline]", h.headline);
    setText("[data-hero-accent]", h.headlineAccent);
    setText("[data-hero-sub]", h.subheadline);
    setText("[data-hero-trust]", h.trustBadge);
    var pc = el("[data-hero-cta-primary]");
    if (pc) { pc.textContent = h.cta_primary.label; pc.setAttribute("href", h.cta_primary.href); }
    var sc = el("[data-hero-cta-secondary]");
    if (sc) { sc.textContent = h.cta_secondary.label; sc.setAttribute("href", h.cta_secondary.href); }

    // Trust stats
    setText("[data-trust-label]", t.sectionLabel);
    setText("[data-trust-heading]", t.heading);
    var sg = el("[data-trust-stats]");
    if (sg) sg.innerHTML = t.stats.map(function (st) {
      return '<div class="stat"><div class="stat__value">' + st.value + '</div><div class="stat__label">' + st.label + '</div></div>';
    }).join("");

    // Services
    setText("[data-services-label]", s.sectionLabel);
    setText("[data-services-heading]", s.heading);
    setText("[data-services-sub]", s.subheading);
    var sg2 = el("[data-services-grid]");
    if (sg2) sg2.innerHTML = s.items.map(function (item) {
      return '<a href="#pricing" class="service-card' + (item.badge ? " service-card--featured" : "") + '">' +
        (item.badge ? '<span class="badge">' + item.badge + "</span>" : "") +
        '<div class="service-card__icon">' + item.icon + "</div>" +
        '<h3 class="service-card__title">' + item.title + "</h3>" +
        '<p class="service-card__desc">' + item.description + '</p><span class="service-card__cta">View Pricing →</span></a>';
    }).join("");

    // How it works
    setText("[data-how-label]", hw.sectionLabel);
    setText("[data-how-heading]", hw.heading);
    setText("[data-how-sub]", hw.subheading);
    var hc = el("[data-how-steps]");
    if (hc) hc.innerHTML = hw.steps.map(function (step) {
      return '<div class="step"><div class="step__number">' + step.number + '</div>' +
        '<div class="step__content"><h3 class="step__title">' + step.title + '</h3>' +
        '<p class="step__desc">' + step.description + '</p></div></div>';
    }).join("");

    // Pricing
    setText("[data-pricing-label]", p.sectionLabel);
    setText("[data-pricing-heading]", p.heading);
    setText("[data-pricing-sub]", p.subheading);
    setText("[data-pricing-note]", p.note);
    var pg = el("[data-pricing-grid]");
    if (pg) pg.innerHTML = p.plans.map(function (plan) {
      var feats = plan.features.map(function (f) {
        return '<li><span class="check">✓</span>' + f + "</li>";
      }).join("");
      return '<div class="pricing-card' + (plan.highlighted ? " pricing-card--featured" : "") + '">' +
        (plan.badge ? '<span class="badge">' + plan.badge + "</span>" : "") +
        '<div class="pricing-card__name">' + plan.name + "</div>" +
        '<div class="pricing-card__price">' + plan.price + "</div>" +
        '<div class="pricing-card__period">' + plan.period + "</div>" +
        '<p class="pricing-card__desc">' + plan.description + "</p>" +
        '<ul class="pricing-card__features">' + feats + "</ul>" +
        '<a href="./booking.html" class="btn ' + (plan.highlighted ? "btn--primary" : "btn--outline") + '">' + plan.cta + "</a></div>";
    }).join("");

    // FAQ
    setText("[data-faq-label]", f.sectionLabel);
    setText("[data-faq-heading]", f.heading);
    setText("[data-faq-sub]", f.subheading);
    var fc = el("[data-faq-items]");
    if (fc) fc.innerHTML = f.items.map(function (item, i) {
      return '<details class="faq-item"' + (i === 0 ? " open" : "") + ">" +
        '<summary class="faq-item__q">' + item.q + '<span class="faq-item__icon" aria-hidden="true"></span></summary>' +
        '<div class="faq-item__a"><p>' + item.a + "</p></div></details>";
    }).join("");

    // CTA Banner
    setText("[data-cta-heading]", b.heading);
    setText("[data-cta-sub]", b.subheading);
    var cb = el("[data-cta-btn]");
    if (cb) { cb.textContent = b.cta.label; cb.setAttribute("href", b.cta.href); }
  }

  // ── Booking ───────────────────────────────────────────────
  function buildBooking() {
    var cfg = window.FT.config;
    var bk = cfg.booking;
    setText("[data-booking-eyebrow]", bk.eyebrow);
    setText("[data-booking-heading]", bk.heading);
    setText("[data-booking-sub]", bk.subheading);
    var oc = el("[data-booking-options]");
    if (oc) oc.innerHTML = bk.options.map(function (opt) {
      var url = opt.type === "whatsapp"
        ? whatsappUrl(bk.whatsappCta.message)
        : mailtoUrl(bk.emailCta.subject, bk.emailCta.body);
      var target = opt.type === "whatsapp" ? ' target="_blank" rel="noopener"' : "";
      return '<div class="contact-card">' +
        '<div class="contact-card__icon">' + opt.icon + "</div>" +
        '<h3 class="contact-card__title">' + opt.title + "</h3>" +
        '<p class="contact-card__desc">' + opt.description + "</p>" +
        '<a href="' + url + '" class="btn btn--primary"' + target + ">" + opt.cta + "</a></div>";
    }).join("");
    var rc = el("[data-booking-reassurances]");
    if (rc) rc.innerHTML = bk.reassurances.map(function (r) {
      return '<li><span class="check">✓</span>' + r + "</li>";
    }).join("");
  }

  // ── Maintenance ───────────────────────────────────────────
  function buildMaintenance() {
    var cfg = window.FT.config;
    var m = cfg.maintenance;
    setText("[data-maint-heading]", m.heading);
    setText("[data-maint-sub]", m.subheading);
    setText("[data-maint-eta]", m.eta);
    setText("[data-maint-contact]", m.contact);
    var wa = el("[data-maint-wa]");
    if (wa) {
      wa.textContent = m.whatsappCta;
      wa.setAttribute("href", whatsappUrl("Hello Fasttrack Registry! I saw your site is under maintenance."));
    }
    setText("[data-maint-logo]", cfg.nav.logo);
  }

  // ── Scroll reveal ─────────────────────────────────────────
  function initScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els("[data-reveal]").forEach(function (el) { obs.observe(el); });
  }

  // ── Smooth scroll ─────────────────────────────────────────
  function initSmoothScroll() {
    els('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var t = document.getElementById(a.getAttribute("href").slice(1));
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ── Entry point ───────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.dataset.page;

    // Maintenance page loads config itself for content only
    if (page === "maintenance") {
      window.FT.loadConfig().then(function () {
        buildMaintenance();
      }).catch(function () {});
      return;
    }

    // Config already loaded by router.js for other pages
    // But wait for it in case of timing edge cases
    function init() {
      buildNav();
      buildFooter();
      if (page === "index")   buildIndex();
      if (page === "booking") buildBooking();
      initScrollReveal();
      initSmoothScroll();
    }

    if (window.FT.config) {
      init();
    } else {
      window.FT.loadConfig().then(init).catch(function () {
        document.documentElement.style.visibility = "visible";
      });
    }
  });
})();
