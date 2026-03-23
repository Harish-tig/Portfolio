// js/experience.js  — Experience + sticky Certifications
(function () {

  function init() {
    const section = document.getElementById("experience");
    if (!section || typeof experienceData === "undefined") return;

    const { experience, education, certifications } = experienceData;

    section.innerHTML = `
      <div class="section-wrap">
        <span class="section-label">Background</span>
        <h2 class="section-heading">Experience</h2>
        <div class="exp-layout">

          <!-- Left: experience cards + education -->
          <div class="exp-main">

            ${experience.length ? `
              <div class="exp-group">
                <div class="exp-group-label">
                  <span class="exp-group-dot"></span>Work
                </div>
                ${experience.map(e => buildExpCard(e)).join("")}
              </div>
            ` : ""}

            <div class="exp-group">
              <div class="exp-group-label">
                <span class="exp-group-dot exp-group-dot--edu"></span>Education
              </div>
              ${education.map(e => buildEduCard(e)).join("")}
            </div>

          </div>

          <!-- Right: sticky certifications -->
          <div class="certs-sticky-wrap">
            <div class="certs-panel">
              <div class="certs-panel-header">
                <span class="certs-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </span>
                <span class="certs-panel-title">Certifications</span>
              </div>
              <div class="cert-list">
                ${certifications.map((c, i) => `
                  <div class="cert-card" style="transition-delay:${i * 60}ms">
                    <div class="cert-card-inner">
                      <div class="cert-card-title">${c.title}</div>
                      <div class="cert-card-meta">
                        <span class="cert-issuer">${c.issuer}</span>
                        <span class="cert-year">${c.year}</span>
                      </div>
                    </div>
                    <div class="cert-card-bar"></div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

        </div>
      </div>`;

    setupReveal();
  }

  function buildExpCard(e) {
    return `
      <div class="exp-card exp-reveal">
        <div class="exp-card-head">
          <div class="exp-card-left">
            <div class="exp-card-title">${e.title}</div>
            <div class="exp-card-org">${e.org}</div>
          </div>
          <div class="exp-card-right">
            <div class="exp-card-period">${e.period}</div>
            ${e.location ? `<div class="exp-card-location">${e.location}</div>` : ""}
          </div>
        </div>
        <p class="exp-card-desc">${e.description}</p>
        ${e.tags ? `<div class="exp-card-tags">${e.tags.map(t => `<span class="exp-tag">${t}</span>`).join("")}</div>` : ""}
      </div>`;
  }

  function buildEduCard(e) {
    return `
      <div class="exp-card exp-card--edu exp-reveal">
        <div class="exp-card-head">
          <div class="exp-card-left">
            <div class="exp-card-title">${e.title}</div>
            <div class="exp-card-org">${e.org}</div>
          </div>
          <div class="exp-card-right">
            <div class="exp-card-period">${e.period}</div>
          </div>
        </div>
        <p class="exp-card-desc">${e.description}</p>
      </div>`;
  }

  function setupReveal() {
    const els = document.querySelectorAll(".exp-reveal, .cert-card");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
