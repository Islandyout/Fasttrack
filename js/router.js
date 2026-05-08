// ============================================================
// FASTTRACK REGISTRY — ROUTER.JS
// Checks Supabase for MAINTENANCE_MODE before rendering page.
// ============================================================

(function () {
  "use strict";

  var isMaintenance = window.location.pathname.indexOf("maintenance.html") !== -1;
  var isAdmin       = window.location.pathname.indexOf("admin.html") !== -1;

  // Never redirect maintenance or admin pages
  if (isMaintenance || isAdmin) return;

  if (!window.FT || !window.FT.loadConfig) return;

  // Show nothing until config loads (prevent flash)
  document.documentElement.style.visibility = "hidden";

  window.FT.loadConfig().then(function (cfg) {
    if (cfg.MAINTENANCE_MODE) {
      var base = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
      window.location.replace(base + "maintenance.html");
    } else {
      document.documentElement.style.visibility = "visible";
    }
  }).catch(function () {
    // On error, show site anyway
    document.documentElement.style.visibility = "visible";
  });
})();
