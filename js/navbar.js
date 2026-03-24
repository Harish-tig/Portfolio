// js/navbar.js
(function () {
  function init() {
    const navbar = document.getElementById("navbar");
    const progress = document.getElementById("scroll-progress");
    const hamburger = document.getElementById("nav-hamburger");
    const navLinks = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      
      // Navbar scrolled state
      if (navbar) {
        navbar.classList.toggle("scrolled", scrollTop > 50);
      }

      // Progress bar
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) {
        progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + "%";
      }

      // Active link based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const links = document.querySelectorAll(".nav-links a");
      let current = "";
      
      sections.forEach(s => {
        const sectionTop = s.offsetTop;
        const sectionHeight = s.clientHeight;
        if (scrollTop >= sectionTop - 150) {
          current = s.id;
        }
      });
      
      links.forEach(a => {
        const href = a.getAttribute("href");
        a.classList.toggle("active", href === "#" + current);
      });
    }, { passive: true });

    // Mobile menu toggle
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
        // Prevent scroll when menu is open
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      // Close menu when link is clicked
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
