// js/theme.js
(function () {
  const STORAGE_KEY = "portfolio-theme";

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return "dark"; // default
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function init() {
    applyTheme(getPreferred());
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.contains("light");
      applyTheme(isLight ? "dark" : "light");
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
