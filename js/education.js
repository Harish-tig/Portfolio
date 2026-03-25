(function () {
  const GR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
  const CERT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`;

  function render() {
    const section = document.getElementById("education");
    if (!section) return;

    const cardsHTML = educationData.map(edu => `
      <div class="education-card reveal">
        <div class="education-icon">
          ${edu.icon === "grad" ? GR_ICON : CERT_ICON}
        </div>
        <div class="education-body">
          <div class="education-degree">${edu.degree}</div>
          <div class="education-institution">${edu.institution}</div>
          <div class="education-meta">
            <span class="education-period">${edu.period}</span>
            <span class="education-detail">${edu.detail}</span>
          </div>
        </div>
      </div>
    `).join("");

    section.innerHTML = `
      <div class="section-wrap">
        <span class="section-label">Background</span>
        <h2 class="section-heading">Education</h2>
        <div class="education-list">
          ${cardsHTML}
        </div>
      </div>
    `;

    setupReveal();
  }

  function setupReveal() {
    const items = document.querySelectorAll("#education .reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(el => obs.observe(el));
  }

  document.addEventListener("DOMContentLoaded", render);
})();