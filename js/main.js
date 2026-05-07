// ============================================================
// FASTTRACK REGISTRY — MAIN.JS
// UI logic: content injection, nav, animations, page behaviour
// ============================================================

(function () {
  "use strict";

  // ── Namespace guard ────────────────────────────────────────
  window.FT = window.FT || {};
  var cfg = window.FT.config;
  if (!cfg) return;

  // ── Helpers ────────────────────────────────────────────────
  function el(selector, root) {
    return (root || document).querySelector(selector);
  }
  function els(selector, root) {
    return (root || document).querySelectorAll(selector);
  }
  function setText(selector, value, root) {
    var node = el(selector, root);
    if (node) node.textContent = value;
  }
  function setAttr(selector, attr, value, root) {
    var node = el(selector, root);
    if (node) node.setAttribute(attr, value);
  }
  function setHTML(selector, value, root) {
    var node = el(selector, root);
    if (node) node.innerHTML = value;
  }

  // ── WhatsApp URL builder ───────────────────────────────────
  function whatsappUrl(message) {
    return (
      "https://wa.me/" +
      cfg.site.whatsapp +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  // ── Mailto URL builder ─────────────────────────────────────
  function mailtoUrl(subject, body) {
    return (
      "mailto:" +
      cfg.site.email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }

  // ============================================================
  // NAV
  // ============================================================
  function buildNav() {
    var logoEl = el("[data-nav-logo]");
    if (logoEl) logoEl.textContent = cfg.nav.logo;

    var linksContainer = el("[data-nav-links]");
    if (linksContainer) {
      var html = "";
      cfg.nav.links.forEach(function (link) {
        html +=
          '<li><a href="' + link.href + '">' + link.label + "</a></li>";
      });
      linksContainer.innerHTML = html;
    }

    var ctaEl = el("[data-nav-cta]");
    if (ctaEl) {
      ctaEl.textContent = cfg.nav.cta.label;
      ctaEl.setAttribute("href", cfg.nav.cta.href);
    }

    // Mobile hamburger toggle
    var toggle = el("[data-nav-toggle]");
    var mobileMenu = el("[data-nav-mobile]");
    if (toggle && mobileMenu) {
      toggle.addEventListener("click", function () {
        var open = mobileMenu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.classList.toggle("is-active", open);
      });

      // Close on link click
      els("a", mobileMenu).forEach(function (a) {
        a.addEventListener("click", function () {
          mobileMenu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.classList.remove("is-active");
        });
      });
    }

    // Sticky nav shadow on scroll
    var nav = el("[data-nav]");
    if (nav) {
      window.addEventListener(
        "scroll",
        function () {
          nav.classList.toggle("is-scrolled", window.scrollY > 20);
        },
        { passive: true }
      );
    }
  }

  // ============================================================
  // FOOTER
  // ============================================================
  function buildFooter() {
    var footer = cfg.footer;
    setText("[data-footer-logo]", cfg.nav.logo);
    setText("[data-footer-tagline]", footer.tagline);
    setText("[data-footer-legal]", footer.legal);
    setText("[data-footer-email]", cfg.site.email);
    setAttr("[data-footer-email-link]", "href", "mailto:" + cfg.site.email);
    setText("[data-footer-whatsapp]", cfg.site.whatsappDisplay);
    setAttr(
      "[data-footer-whatsapp-link]",
      "href",
      whatsappUrl("Hello Fasttrack Registry!")
    );

    var linksContainer = el("[data-footer-links]");
    if (linksContainer) {
      var html = "";
      footer.links.forEach(function (link) {
        html +=
          '<li><a href="' + link.href + '">' + link.label + "</a></li>";
      });
      linksContainer.innerHTML = html;
    }
  }

  // ============================================================
  // INDEX PAGE
  // ============================================================
  function buildIndex() {
    var h = cfg.hero;
    var s = cfg.services;
    var hw = cfg.howItWorks;
    var p = cfg.pricing;
    var f = cfg.faq;
    var t = cfg.trust;
    var b = cfg.ctaBanner;

    // Hero
    setText("[data-hero-eyebrow]", h.eyebrow);
    setText("[data-hero-headline]", h.headline);
    setText("[data-hero-accent]", h.headlineAccent);
    setText("[data-hero-sub]", h.subheadline);
    setText("[data-hero-trust]", h.trustBadge);
    var primaryCta = el("[data-hero-cta-primary]");
    if (primaryCta) {
      primaryCta.textContent = h.cta_primary.label;
      primaryCta.setAttribute("href", h.cta_primary.href);
    }
    var secondaryCta = el("[data-hero-cta-secondary]");
    if (secondaryCta) {
      secondaryCta.textContent = h.cta_secondary.label;
      secondaryCta.setAttribute("href", h.cta_secondary.href);
    }

    // Services
    setText("[data-services-label]", s.sectionLabel);
    setText("[data-services-heading]", s.heading);
    setText("[data-services-sub]", s.subheading);
    var servicesGrid = el("[data-services-grid]");
    if (servicesGrid) {
      servicesGrid.innerHTML = s.items
        .map(function (item) {
          return (
            '<article class="service-card' +
            (item.badge ? " service-card--featured" : "") +
            '">' +
            (item.badge
              ? '<span class="badge">' + item.badge + "</span>"
              : "") +
            '<div class="service-card__icon">' +
            item.icon +
            "</div>" +
            '<h3 class="service-card__title">' +
            item.title +
            "</h3>" +
            '<p class="service-card__desc">' +
            item.description +
            "</p>" +
            "</article>"
          );
        })
        .join("");
    }

    // How It Works
    setText("[data-how-label]", hw.sectionLabel);
    setText("[data-how-heading]", hw.heading);
    setText("[data-how-sub]", hw.subheading);
    var stepsContainer = el("[data-how-steps]");
    if (stepsContainer) {
      stepsContainer.innerHTML = hw.steps
        .map(function (step) {
          return (
            '<div class="step">' +
            '<div class="step__number">' +
            step.number +
            "</div>" +
            '<div class="step__content">' +
            '<h3 class="step__title">' +
            step.title +
            "</h3>" +
            '<p class="step__desc">' +
            step.description +
            "</p>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    // Trust stats
    setText("[data-trust-label]", t.sectionLabel);
    setText("[data-trust-heading]", t.heading);
    var statsContainer = el("[data-trust-stats]");
    if (statsContainer) {
      statsContainer.innerHTML = t.stats
        .map(function (stat) {
          return (
            '<div class="stat">' +
            '<div class="stat__value">' +
            stat.value +
            "</div>" +
            '<div class="stat__label">' +
            stat.label +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    // Pricing
    setText("[data-pricing-label]", p.sectionLabel);
    setText("[data-pricing-heading]", p.heading);
    setText("[data-pricing-sub]", p.subheading);
    setText("[data-pricing-note]", p.note);
    var pricingGrid = el("[data-pricing-grid]");
    if (pricingGrid) {
      pricingGrid.innerHTML = p.plans
        .map(function (plan) {
          var features = plan.features
            .map(function (f) {
              return '<li><span class="check">✓</span>' + f + "</li>";
            })
            .join("");
          return (
            '<div class="pricing-card' +
            (plan.highlighted ? " pricing-card--featured" : "") +
            '">' +
            (plan.badge
              ? '<span class="badge">' + plan.badge + "</span>"
              : "") +
            '<div class="pricing-card__name">' +
            plan.name +
            "</div>" +
            '<div class="pricing-card__price">' +
            plan.price +
            "</div>" +
            '<div class="pricing-card__period">' +
            plan.period +
            "</div>" +
            '<p class="pricing-card__desc">' +
            plan.description +
            "</p>" +
            '<ul class="pricing-card__features">' +
            features +
            "</ul>" +
            '<a href="./booking.html" class="btn' +
            (plan.highlighted ? " btn--primary" : " btn--outline") +
            '">' +
            plan.cta +
            "</a>" +
            "</div>"
          );
        })
        .join("");
    }

    // FAQ
    setText("[data-faq-label]", f.sectionLabel);
    setText("[data-faq-heading]", f.heading);
    setText("[data-faq-sub]", f.subheading);
    var faqContainer = el("[data-faq-items]");
    if (faqContainer) {
      faqContainer.innerHTML = f.items
        .map(function (item, i) {
          return (
            '<details class="faq-item" ' +
            (i === 0 ? "open" : "") +
            ">" +
            '<summary class="faq-item__q">' +
            item.q +
            '<span class="faq-item__icon" aria-hidden="true"></span>' +
            "</summary>" +
            '<div class="faq-item__a"><p>' +
            item.a +
            "</p></div>" +
            "</details>"
          );
        })
        .join("");
    }

    // CTA Banner
    setText("[data-cta-heading]", b.heading);
    setText("[data-cta-sub]", b.subheading);
    var ctaBtn = el("[data-cta-btn]");
    if (ctaBtn) {
      ctaBtn.textContent = b.cta.label;
      ctaBtn.setAttribute("href", b.cta.href);
    }
  }

  // ============================================================
  // BOOKING PAGE
  // ============================================================
  function buildBooking() {
    var bk = cfg.booking;
    setText("[data-booking-eyebrow]", bk.eyebrow);
    setText("[data-booking-heading]", bk.heading);
    setText("[data-booking-sub]", bk.subheading);

    // Build contact option cards
    var optionsContainer = el("[data-booking-options]");
    if (optionsContainer) {
      optionsContainer.innerHTML = bk.options
        .map(function (opt) {
          var url =
            opt.type === "whatsapp"
              ? whatsappUrl(bk.whatsappCta.message)
              : mailtoUrl(bk.emailCta.subject, bk.emailCta.body);
          var target = opt.type === "whatsapp" ? ' target="_blank" rel="noopener"' : "";
          return (
            '<div class="contact-card">' +
            '<div class="contact-card__icon">' +
            opt.icon +
            "</div>" +
            '<h3 class="contact-card__title">' +
            opt.title +
            "</h3>" +
            '<p class="contact-card__desc">' +
            opt.description +
            "</p>" +
            '<a href="' +
            url +
            '" class="btn btn--primary"' +
            target +
            ">" +
            opt.cta +
            "</a>" +
            "</div>"
          );
        })
        .join("");
    }

    // Reassurances
    var reassContainer = el("[data-booking-reassurances]");
    if (reassContainer) {
      reassContainer.innerHTML = bk.reassurances
        .map(function (r) {
          return '<li><span class="check">✓</span>' + r + "</li>";
        })
        .join("");
    }
  }

  // ============================================================
  // MAINTENANCE PAGE
  // ============================================================
  function buildMaintenance() {
    var m = cfg.maintenance;
    setText("[data-maint-heading]", m.heading);
    setText("[data-maint-sub]", m.subheading);
    setText("[data-maint-eta]", m.eta);
    setText("[data-maint-contact]", m.contact);
    var waBtn = el("[data-maint-wa]");
    if (waBtn) {
      waBtn.textContent = m.whatsappCta;
      waBtn.setAttribute(
        "href",
        whatsappUrl("Hello Fasttrack Registry! I saw your site is under maintenance.")
      );
    }
    setText("[data-maint-logo]", cfg.nav.logo);
  }

  // ============================================================
  // SCROLL ANIMATIONS
  // ============================================================
  function initScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els("[data-reveal]").forEach(function (el) {
      observer.observe(el);
    });
  }

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================
  function initSmoothScroll() {
    els('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.getElementById(a.getAttribute("href").slice(1));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ============================================================
  // ENTRY POINT
  // ============================================================
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.dataset.page;

    buildNav();
    buildFooter();

    if (page === "index") buildIndex();
    if (page === "booking") buildBooking();
    if (page === "maintenance") buildMaintenance();

    initScrollReveal();
    initSmoothScroll();
  });
})();
