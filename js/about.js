// js/about.js
// Sticky is handled purely by CSS (position: sticky; top: 110px on .about-stats-container)
// This module handles rendering and scroll-reveal for about paragraphs.
(function () {
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
            <div class="about-stats">
              <div class="about-stats-header">
                <span class="about-stats-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span class="about-stats-title">At a Glance</span>
              </div>
              <div class="about-stats-grid">
                ${aboutData.stats.map(s => `
                  <div class="about-stat">
                    <span class="stat-label">${s.label}</span>
                    <span class="stat-value">${s.value}</span>
                  </div>
                `).join("")}
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
