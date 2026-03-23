// js/achievements.js  — Achievements timeline + sticky Activities card
(function () {

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <span class="act-card-title">Activities</span>
              </div>
              <div class="act-list">
                ${activities.map((a, i) => `
                  <div class="act-item" style="transition-delay:${i * 80}ms">
                    <div class="act-item-icon">${a.icon}</div>
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
              <span class="ach-badge">${a.badge}</span>
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
