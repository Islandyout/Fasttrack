// ============================================================
// FASTTRACK REGISTRY — ROUTER.JS
// Maintenance mode redirect. Runs before main.js.
// ============================================================

(function () {
  "use strict";

  // Wait for config to be available
  if (!window.FT || !window.FT.config) return;

  var cfg = window.FT.config;

  // Never redirect maintenance.html (prevent infinite loop)
  var currentPage = window.location.pathname;
  var isMaintenance =
    currentPage.indexOf("maintenance.html") !== -1;

  if (cfg.MAINTENANCE_MODE && !isMaintenance) {
    // Preserve GitHub Pages subfolder compatibility
    var base = currentPage.substring(0, currentPage.lastIndexOf("/") + 1);
    window.location.replace(base + "maintenance.html");
  }
})();
