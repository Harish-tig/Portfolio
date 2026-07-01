// js/achievements.js  — Achievements timeline + sticky Activities card
(function () {

  const ICONS = {
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    medal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><circle cx="12" cy="15" r="7"/><path d="M12 12v3"/><path d="m12 15-1.75-2"/><path d="m12 15 1.75-2"/></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  };

  function getAchIcon(badge) {
    if (badge === "🏆") return ICONS.trophy;
    if (badge === "🎖") return ICONS.medal;
    return ICONS.award;
  }

  function init() {
    const section = document.getElementById("achievements");
    if (!section || typeof experienceData === "undefined") return;

    const { achievements } = experienceData;

    section.innerHTML = `
      <div class="section-wrap">
        <span class="section-label">Recognition</span>
        <h2 class="section-heading">Achievements</h2>
        <div class="ach-timeline">
          ${achievements.map((a, i) => buildAchCard(a, i)).join("")}
        </div>
      </div>`;

    setupReveal();
  }

  function buildAchCard(a, i) {
    return `
      <div class="ach-item ach-reveal" style="transition-delay:${i * 90}ms">
        <div class="ach-rank">${a.rank}</div>
        <div class="ach-content">
          <div class="ach-content-head">
            <div class="ach-badge-wrap">
              <span class="ach-badge-icon">${getAchIcon(a.badge)}</span>
            </div>
            <div class="ach-meta">
              <div class="ach-period">${a.period}</div>
              <div class="ach-org">${a.org}</div>
            </div>
          </div>
          <div class="ach-title">${a.title}</div>
          <p class="ach-desc">${a.description}</p>
          ${a.tags ? `<div class="ach-tags">${a.tags.map(t => `<span class="ach-tag">${t}</span>`).join("")}</div>` : ""}
        </div>
      </div>`;
  }

  function setupReveal() {
    const els = document.querySelectorAll(".ach-reveal, .act-item");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
