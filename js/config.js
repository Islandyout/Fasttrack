// ============================================================
// FASTTRACK REGISTRY — CONFIG.JS
// Supabase connection constants only.
// All site content is fetched live from Supabase.
// ============================================================

window.FT = window.FT || {};

window.FT.SUPABASE_URL  = "https://pcfbilkuxsyazlycnzjd.supabase.co";
window.FT.SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZmJpbGt1eHN5YXpseWNuempkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDEzMjgsImV4cCI6MjA5Mzc3NzMyOH0.p2Eqn4rE_Qk9UNGXDiyVnpxkeHJaw1I9S-AXOqD39nw";

window.FT.loadConfig = function () {
  return fetch(
    window.FT.SUPABASE_URL + "/rest/v1/site_config?id=eq.1&select=config",
    {
      headers: {
        "apikey": window.FT.SUPABASE_ANON,
        "Authorization": "Bearer " + window.FT.SUPABASE_ANON
      }
    }
  )
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data && data[0] && data[0].config) {
      window.FT.config = data[0].config;
      return data[0].config;
    }
    throw new Error("No config in Supabase");
  });
};
