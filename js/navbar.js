// js/navbar.js
// ─────────────────────────────────────────────────────────────────────────────
//  NAVBAR MODE SWITCH
//  Set USE_VERTICAL_NAV = true  → vertical sidebar only  (horizontal hidden)
//  Set USE_VERTICAL_NAV = false → horizontal navbar only (vertical not rendered)
//  The two navbars are NEVER visible simultaneously.
// ─────────────────────────────────────────────────────────────────────────────
const USE_VERTICAL_NAV = true; // toggle this to switch modes

(function () {
  // ── Shared nav items (single source of truth) ────────────────────────────
  const NAV_ITEMS = [
    { href: "#hero",         label: "Home",         icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { href: "#projects",     label: "Projects",     icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>` },
    { href: "#skills",       label: "Skills",       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { href: "#experience",   label: "Experience",   icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>` },
    { href: "#achievements", label: "Awards",       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>` },
    { href: "#about",        label: "About",        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>` },
    { href: "#education",    label: "Education",    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>` },
    { href: "#contact",      label: "Contact",      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>` },
  ];

  // ── Shared: active section tracker ───────────────────────────────────────
  function getActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    return current;
  }

  // ═════════════════════════════════════════════════════════════════════════
  //  HORIZONTAL NAVBAR (existing behaviour — untouched when USE_VERTICAL_NAV
  //  is false; completely hidden when true)
  // ═════════════════════════════════════════════════════════════════════════
  function initHorizontal() {
    const navbar    = document.getElementById("navbar");
    const progress  = document.getElementById("scroll-progress");
    const hamburger = document.getElementById("nav-hamburger");
    const navLinks  = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      if (navbar) navbar.classList.toggle("scrolled", scrollTop > 50);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + "%";

      const current = getActiveSection();
      document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }, { passive: true });

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }
  }

  // ═════════════════════════════════════════════════════════════════════════
  //  VERTICAL SIDEBAR NAVBAR
  // ═════════════════════════════════════════════════════════════════════════
  function initVertical() {
    // Build sidebar DOM
    const sidebar = document.createElement("nav");
    sidebar.id = "vnav";
    sidebar.setAttribute("role", "navigation");
    sidebar.setAttribute("aria-label", "Vertical navigation");
    sidebar.innerHTML = `
      <a class="vnav-logo" href="#hero" aria-label="Go to top">HN<span>.</span></a>
      <div class="vnav-items">
        ${NAV_ITEMS.map(item => `
          <a class="vnav-item" href="${item.href}" aria-label="${item.label}">
            <span class="vnav-icon">${item.icon}</span>
            <span class="vnav-tooltip">${item.label}</span>
          </a>
        `).join("")}
      </div>
      <div class="vnav-bottom">
        <button id="vnav-theme" class="vnav-item" aria-label="Toggle theme">
          <span class="vnav-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </span>
          <span class="vnav-tooltip">Theme</span>
        </button>
      </div>
    `;
    document.body.appendChild(sidebar);

    // Push page content right so sidebar doesn't overlap
    document.body.classList.add("vnav-active");

    // Scroll → active link + progress
    const progress = document.getElementById("scroll-progress");
    function onScroll() {
      const scrollTop  = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + "%";

      const current = getActiveSection();
      document.querySelectorAll(".vnav-item[href]").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load

    // Theme toggle mirrors the existing #theme-toggle behaviour
    const vnavThemeBtn = document.getElementById("vnav-theme");
    if (vnavThemeBtn) {
      vnavThemeBtn.addEventListener("click", () => {
        const existing = document.getElementById("theme-toggle");
        if (existing) existing.click();
      });
    }

    // Smooth scroll for sidebar links
    sidebar.querySelectorAll("a[href^='#']").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 24;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════════════
  //  ENTRY: enforce mutual exclusivity
  // ═════════════════════════════════════════════════════════════════════════
  document.addEventListener("DOMContentLoaded", () => {
    const horizontal = document.getElementById("navbar");

    if (USE_VERTICAL_NAV) {
      // Hide horizontal navbar completely
      if (horizontal) horizontal.style.display = "none";
      initVertical();
    } else {
      // Ensure vertical nav is never rendered
      initHorizontal();
    }
  });
})();
