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
              ${aboutData.stats.map(s => `
                <div class="about-stat">
                  <div class="stat-value">${s.value}</div>
                  <div class="stat-label">${s.label}</div>
                </div>
              `).join("")}
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
