// js/about.js
// Sticky is handled purely by CSS (position: sticky; top: 110px on .about-stats-container)
// This module handles rendering and scroll-reveal for about paragraphs.
(function () {

  // ── Certification / Activity card data ──────────────────────────────────
  const highlights = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      title: "SIH Finalist",
      meta: "Smart India Hackathon · 2024",
      tag: "National",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
      title: "Algorithm Dev — 1st",
      meta: "VCET Hackathon · 2023",
      tag: "Winner",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: "B.E — AI & Machine Learning",
      meta: "Mumbai University · 2022–26",
      tag: "Degree",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      title: "Open-Source Contributor",
      meta: "GitHub · 2023–Present",
      tag: "Active",
    },
  ];
  // ─────────────────────────────────────────────────────────────────────────

  function init() {
    const section = document.getElementById("about");
    if (!section || typeof aboutData === "undefined") return;

    section.innerHTML = `
      <div class="section-wrap">
        <div class="section-inner">
          <div class="about-text">
            <span class="section-label">Who I am</span>
            <h2 class="section-heading">${aboutData.heading}</h2>
            ${aboutData.paragraphs.map(p => `<p class="about-para">${p}</p>`).join("")}
          </div>
          <div class="about-stats-container">
            <div class="apc-card">
              <div class="apc-header">
                <div class="apc-header-top">
                  <span class="apc-label">Activity</span>
                  <span class="apc-status-dot" title="Available"></span>
                </div>
                <p class="apc-name">Harish Nadar</p>
                <p class="apc-role">Backend · AI/ML · Mumbai</p>
              </div>
              <div class="apc-divider"></div>
              <div class="apc-items">
                ${highlights.map(h => `
                  <div class="apc-item">
                    <div class="apc-item-icon">${h.icon}</div>
                    <div class="apc-item-body">
                      <div class="apc-item-title">${h.title}</div>
                      <div class="apc-item-meta">${h.meta}</div>
                    </div>
                    <span class="apc-tag">${h.tag}</span>
                  </div>
                `).join("")}
              </div>
              <div class="apc-divider"></div>
              <div class="apc-footer">
                <span class="apc-footer-dot"></span>
                <span class="apc-footer-text">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    setupParaReveal();
  }

  function setupParaReveal() {
    const paras = document.querySelectorAll(".about-para");
    if (!paras.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    paras.forEach(p => observer.observe(p));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
