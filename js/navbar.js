// js/navbar.js
(function () {
  function init() {
    const progress = document.getElementById("scroll-progress");
    const hamburger = document.getElementById("nav-hamburger");
    const navLinks = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + "%";

      // Active link
      const sections = document.querySelectorAll("section[id]");
      const links = document.querySelectorAll(".nav-links a");
      let current = "";
      sections.forEach(s => {
        if (s.getBoundingClientRect().top <= 90) current = s.id;
      });
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    }, { passive: true });

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", open);
      });
      navLinks.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => {
          navLinks.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
        })
      );
    }
  }
  document.addEventListener("DOMContentLoaded", init);
})();
