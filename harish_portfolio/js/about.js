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
            <div class="apc-card">
              <div class="apc-header">
                <div class="apc-header-top">
                  <span class="apc-label">Competitions</span>
                <!--  <span class="apc-status-dot" title="Available"></span> -->
                </div>
                <p class="apc-name">Harish Nadar</p>
                <p class="apc-role">Backend · AI/ML · Mumbai</p>
              </div>
              <div class="apc-divider"></div>
              <div class="apc-items">
                ${aboutData.highlights.map(h => `
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
               <!-- <span class="apc-footer-dot"></span> -->
                <!-- <span class="apc-footer-text">Open to opportunities</span> -->
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
