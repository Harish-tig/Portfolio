// js/hero.js
(function () {
  var ProfileUrl = "images/picoforportfolio3.jpeg";
  const ICONS = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    chevron: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  };

  const ICONS_SM = {
    email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    loc: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  };

  const RESUME_PATHS = {
    backend: "resumes/backend/harish-nadar-backend.pdf",
    ml: "resumes/ml/harish-nadar-ml.pdf",
  };

  function render() {
    const section = document.getElementById("hero");
    if (!section || typeof heroData === "undefined") return;

    const nameParts = heroData.name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    // Build quotes HTML if enabled
    let quotesHTML = "";
    if (heroData.enableQuotes && heroData.quotes && heroData.quotes.length > 0) {
      quotesHTML = `
        <div class="hero-quotes-container" id="hero-quotes">
          ${heroData.quotes.map((q, i) => `<div class="hero-quote-item ${i === 0 ? 'active' : ''}">${q}</div>`).join("")}
        </div>
      `;
    }

    section.innerHTML = `
      <div class="hero-wrap">
        <div class="hero-left">
          <span class="hero-label">Available for opportunities</span>
          <h1 class="hero-heading">
            Hi, I am<br>
            <span style="white-space:nowrap">${firstName + " "}<em>${lastName}.</em></span>
          </h1>

          <div class="hero-role-wrap">
            <span class="hero-role-text" id="hero-typed"></span>
            <span class="hero-cursor" aria-hidden="true"></span>
          </div>

          <p class="hero-tagline">${heroData.tagline}</p>

          <div class="hero-actions">
            <button class="btn-primary" id="view-resume-btn">
              ${ICONS.eye}&nbsp;${heroData.cta.view}
            </button>
          </div>

          <div class="hero-social">
            <a href="https://github.com/harish-tig" target="_blank" rel="noopener" title="GitHub">${ICONS.github}</a>
            <a href="https://linkedin.com/in/harish-nadar-tig" target="_blank" rel="noopener" title="LinkedIn">${ICONS.linkedin}</a>
            <a href="mailto:nadarharish03@gmail.com" title="Email">${ICONS.mail}</a>
          </div>

          ${quotesHTML}
        </div>

        <div class="hero-right">
          <div class="hero-photo-wrap">
            <div class="hero-photo-frame">
              <img
                src="${ProfileUrl}"
                alt="Harish Nadar"
              />
            </div>
            <!-- Decorative corner (bottom-left) -->
            <div class="hero-photo-accent-corner" aria-hidden="true"></div>
            <!-- Status badge -->
            <div class="hero-status-badge" aria-hidden="true">
              <span class="hero-status-dot"></span>
              <span class="hero-status-text">Open to work · Mumbai</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal 1: Resume type selection -->
      <div id="resume-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
        <div class="modal" style="max-width:460px">
          <div class="modal-header">
            <span class="modal-title" id="resume-modal-title">Select Resume</span>
            <button class="modal-close" id="resume-modal-close" aria-label="Close">✕</button>
          </div>
          <div class="resume-select-body">
            <button class="resume-type-btn" data-resume="backend">
              <span class="resume-type-label">
                <span class="resume-type-title">Backend Developer</span>
                <span class="resume-type-sub">Django · FastAPI · Flask · PostgreSQL</span>
              </span>
              <span class="resume-type-arrow">${ICONS.chevron}</span>
            </button>
            <button class="resume-type-btn" data-resume="ml">
              <span class="resume-type-label">
                <span class="resume-type-title">AI / ML Engineer</span>
                <span class="resume-type-sub">TensorFlow · Keras · Scikit-learn · LSTM</span>
              </span>
              <span class="resume-type-arrow">${ICONS.chevron}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Modal 2: Resume viewer -->
      <div id="resume-view-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="resume-view-title">
        <div class="modal">
          <div class="modal-header">
            <span class="modal-title" id="resume-view-title">Resume</span>
            <div style="display:flex;gap:0.75rem;align-items:center">
              <a class="resume-view-dl-btn" id="resume-view-download" aria-label="Download PDF">
                ${ICONS.download} Download PDF
              </a>
              <button class="modal-close" id="resume-view-back" aria-label="Back" title="Back" style="font-size:0.9rem;opacity:0.7">← Back</button>
              <button class="modal-close" id="resume-view-close" aria-label="Close">✕</button>
            </div>
          </div>
          <div id="resume-doc-container" class="modal-body" style="padding:0"></div>
        </div>
      </div>
    `;

    setupModals();
    setupTyping();
    setupQuotes();
    setupScrollParallax();
    setupScrollProgress();
  }

  // ── Quote Rotator ──
  function setupQuotes() {
    const container = document.getElementById("hero-quotes");
    if (!container || !heroData.enableQuotes) return;

    const items = container.querySelectorAll(".hero-quote-item");
    if (items.length <= 1) return;

    let currentIdx = 0;
    const duration = 3000; // 3 seconds per quote

    setInterval(() => {
      const current = items[currentIdx];
      current.classList.remove("active");
      current.classList.add("exit");

      currentIdx = (currentIdx + 1) % items.length;
      const next = items[currentIdx];

      setTimeout(() => {
        current.classList.remove("exit");
        next.classList.add("active");
      }, 600); // Wait for exit animation to finish
    }, duration);
  }

  // ── Typing effect — bold, high-contrast ──
  function setupTyping() {
    const el = document.getElementById("hero-typed");
    if (!el) return;

    const roles = [
      "Backend Engineer",
      "Machine Learning Engineer",
      "API Architect",
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let paused = false;

    const SPEED_TYPE = 60;
    const SPEED_DELETE = 30;
    const PAUSE_END = 2200;
    const PAUSE_START = 350;

    function getTypingSpeed() {
      return Math.max(28, SPEED_TYPE + (Math.random() * 30 - 15));
    }

    function getDeletingSpeed() {
      return Math.max(22, SPEED_DELETE + (Math.random() * 12 - 6));
    }

    function tick() {
      if (paused) return;
      const current = roles[roleIdx];

      if (!deleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          paused = true;
          setTimeout(() => { paused = false; deleting = true; tick(); }, PAUSE_END);
          return;
        }
        setTimeout(tick, getTypingSpeed());
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          paused = true;
          setTimeout(() => { paused = false; tick(); }, PAUSE_START);
          return;
        }
        setTimeout(tick, getDeletingSpeed());
      }
    }

    setTimeout(tick, 900);
  }

  // ── Resume modal logic ──
  function setupModals() {
    const selectModal = document.getElementById("resume-modal");
    const viewModal = document.getElementById("resume-view-modal");
    const viewTitle = document.getElementById("resume-view-title");
    const docContainer = document.getElementById("resume-doc-container");
    const dlBtn = document.getElementById("resume-view-download");

    let currentType = "backend";

    function lockScroll() { document.body.classList.add("modal-open"); }
    function unlockScroll() { document.body.classList.remove("modal-open"); }

    function openSelect() { selectModal.classList.add("open"); lockScroll(); }
    function closeSelect() { selectModal.classList.remove("open"); unlockScroll(); }
    function openView(type) {
      currentType = type;
      closeSelect();
      lockScroll();
      const data = type === "backend"
        ? (typeof resumeBackendData !== "undefined" ? resumeBackendData : null)
        : (typeof resumeMLData !== "undefined" ? resumeMLData : null);

      if (!data) return;
      viewTitle.textContent = data.label;
      // Update PDF download link
      if (dlBtn) {
        dlBtn.href = RESUME_PATHS[type];
        dlBtn.setAttribute("download", `harish-nadar-${type}-resume.pdf`);
      }
      docContainer.innerHTML = buildResumeDoc(data);
      viewModal.classList.add("open");
    }
    function closeView() { viewModal.classList.remove("open"); unlockScroll(); }

    const viewResumeBtn = document.getElementById("view-resume-btn");
    if (viewResumeBtn) viewResumeBtn.addEventListener("click", openSelect);
    
    const resumeModalClose = document.getElementById("resume-modal-close");
    if (resumeModalClose) resumeModalClose.addEventListener("click", closeSelect);
    
    if (selectModal) {
      selectModal.addEventListener("click", (e) => { if (e.target === e.currentTarget) closeSelect(); });
      selectModal.querySelectorAll(".resume-type-btn").forEach(btn => {
        btn.addEventListener("click", () => openView(btn.dataset.resume));
      });
    }

    const resumeViewClose = document.getElementById("resume-view-close");
    if (resumeViewClose) resumeViewClose.addEventListener("click", closeView);
    
    const resumeViewBack = document.getElementById("resume-view-back");
    if (resumeViewBack) resumeViewBack.addEventListener("click", () => {
      closeView();
      setTimeout(openSelect, 120);
    });
    
    if (viewModal) viewModal.addEventListener("click", (e) => { if (e.target === e.currentTarget) closeView(); });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeView(); closeSelect(); }
    });
  }

  // ── Resume document builder ──
  function buildResumeDoc(d) {
    const skillsHTML = d.skills.map(s => `
      <div class="resume-skill-row">
        <span class="resume-skill-category">${s.category}</span>
        <div class="resume-skill-pills">
          ${s.items.map(i => `<span class="resume-skill-pill">${i}</span>`).join("")}
        </div>
      </div>`).join("");

    const expHTML = d.experience.map(e => `
      <div class="resume-entry">
        <div class="resume-entry-title">${e.title}</div>
        <div class="resume-entry-period">${e.period}</div>
        <div class="resume-entry-org">${e.org}</div>
        <p class="resume-entry-desc">${e.description}</p>
        ${e.tags ? `<div class="resume-entry-tags">${e.tags.map(t => `<span class="resume-entry-tag">${t}</span>`).join("")}</div>` : ""}
      </div>`).join("");

    const projHTML = d.projects.map(p => `
      <div class="resume-entry">
        <div class="resume-entry-title">${p.title}</div>
        <div class="resume-entry-period">${p.period}</div>
        <p class="resume-entry-desc">${p.description}</p>
        ${p.tags ? `<div class="resume-entry-tags">${p.tags.map(t => `<span class="resume-entry-tag">${t}</span>`).join("")}</div>` : ""}
      </div>`).join("");

    const eduHTML = d.education.map(e => `
      <div class="resume-entry">
        <div class="resume-entry-title">${e.title}</div>
        <div class="resume-entry-period">${e.period}</div>
        <div class="resume-entry-cgpa">${e.cgpa}</div>
        <div class="resume-entry-org">${e.org}</div>
        <p class="resume-entry-desc">${e.description}</p>
      </div>`).join("");

    const certHTML = d.certifications.map(c => `
      <div class="resume-cert-item">
        <span class="resume-cert-title">${c.title}</span>
        <span class="resume-cert-meta">${c.issuer} · ${c.year}</span>
      </div>`).join("");

    const name = typeof heroData !== "undefined" ? heroData.name : "Harish Nadar";

    return `
      <div class="resume-doc">
        <div class="resume-header">
          <div class="resume-name">${name}</div>
          <div class="resume-title-line">${d.label.replace(" Resume", "")}</div>
          <div class="resume-contact-row">
            <a class="resume-contact-item" href="mailto:${d.contact.email}">${ICONS_SM.email} ${d.contact.email}</a>
            <a class="resume-contact-item" href="https://github.com/${d.contact.github.split('/').pop()}" target="_blank" rel="noopener">${ICONS_SM.github} ${d.contact.github}</a>
            <a class="resume-contact-item" href="https://${d.contact.linkedin}" target="_blank" rel="noopener">${ICONS_SM.link} ${d.contact.linkedin}</a>
            <span class="resume-contact-item">${ICONS_SM.loc} ${d.contact.location}</span>
          </div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Summary</div>
          <p class="resume-summary">${d.summary}</p>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Skills</div>
          <div class="resume-skills-grid">${skillsHTML}</div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Experience</div>
          <div class="resume-entries">${expHTML}</div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Projects</div>
          <div class="resume-entries">${projHTML}</div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Education</div>
          <div class="resume-entries">${eduHTML}</div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">Certifications</div>
          <div class="resume-certs">${certHTML}</div>
        </div>
      </div>
    `;
  }

  // ── Smooth scroll parallax on photo (moves with scroll, no static behavior) ──
  function setupScrollParallax() {
    const heroSection = document.getElementById("hero");
    const heroRight = document.querySelector(".hero-right");
    if (!heroSection || !heroRight) return;

    let ticking = false;
    let mouseX = 0, mouseY = 0;
    let scrollY = 0;

    // Mouse parallax
    document.addEventListener("mousemove", (e) => {
      if (!isInViewport(heroSection)) return;
      const rect = heroSection.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      requestUpdate();
    });

    document.addEventListener("mouseleave", () => {
      mouseX = 0; mouseY = 0;
      requestUpdate();
    });

    // Scroll parallax — smooth movement as user scrolls past hero
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      requestUpdate();
    }, { passive: true });

    function requestUpdate() {
      if (!ticking) {
        requestAnimationFrame(applyTransform);
        ticking = true;
      }
    }

    function applyTransform() {
      ticking = false;
      if (!isInViewport(heroSection)) return;
      const parallaxY = scrollY * 0.12; // subtle vertical drift on scroll
      heroRight.style.transform = `translate(${mouseX}px, ${mouseY - parallaxY}px)`;
    }
  }

  // ── Scroll progress bar ──
  function setupScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : "0%";
    }, { passive: true });
  }

  function isInViewport(el) {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
