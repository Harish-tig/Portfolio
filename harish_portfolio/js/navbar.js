// js/navbar.js — Horizontal navbar
(function () {

  function getActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    return current;
  }

  function init() {
    const navbar = document.getElementById("navbar");
    const progress = document.getElementById("scroll-progress");
    const hamburger = document.getElementById("nav-hamburger");
    const navLinks = document.getElementById("nav-links");

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

  document.addEventListener("DOMContentLoaded", init);
})();

