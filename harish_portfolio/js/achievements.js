// js/achievements.js  — Achievements timeline + sticky Activities card
(function () {

  const ICONS = {
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    medal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><circle cx="12" cy="15" r="7"/><path d="M12 12v3"/><path d="m12 15-1.75-2"/><path d="m12 15 1.75-2"/></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  };

  function getAchIcon(badge) {
    if (badge === "🏆") return ICONS.trophy;
    if (badge === "🎖") return ICONS.medal;
    return ICONS.award;
  }

  function getActIcon(title) {
    if (title.toLowerCase().includes("head") || title.toLowerCase().includes("lead")) return ICONS.users;
    return ICONS.briefcase;
  }

  function init() {
    const section = document.getElementById("achievements");
    if (!section || typeof experienceData === "undefined") return;

    const { achievements, activities } = experienceData;

    section.innerHTML = `
      <div class="section-wrap">
        <span class="section-label">Recognition</span>
        <h2 class="section-heading">Achievements</h2>
        <div class="ach-layout">

          <!-- Left: achievement timeline -->
          <div class="ach-timeline">
            ${achievements.map((a, i) => buildAchCard(a, i)).join("")}
          </div>

          <!-- Right: sticky activities -->
          <div class="act-sticky-wrap">
            <div class="act-card">
              <div class="act-card-header">
                <span class="act-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </span>
                <span class="act-card-title">Activities</span>
              </div>
              <div class="act-list">
                ${activities.map((a, i) => `
                  <div class="act-item" style="transition-delay:${i * 80}ms">
                    <div class="act-item-icon">${getActIcon(a.title)}</div>
                    <div class="act-item-body">
                      <div class="act-item-title">${a.title}</div>
                      <div class="act-item-org">${a.org}</div>
                      <div class="act-item-period">${a.period}</div>
                      <p class="act-item-desc">${a.description}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

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
