// js/theme.js
(function () {
  const STORAGE_KEY = "portfolio-theme";

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return "dark"; // default
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function init() {
    applyTheme(getPreferred());
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const isLight = document.body.classList.contains("light");
        applyTheme(isLight ? "dark" : "light");
      });
    }
    initTechBgAnimations();
  }

  // ── Background Tech Animations ──
  function initTechBgAnimations() {

    // ╔══════════════════════════════════════════════╗
    // ║         EASY CONTROLS — EDIT HERE            ║
    // ╠══════════════════════════════════════════════╣
    const CONFIG = {
      opacityMin:      0.55,   // minimum opacity (0 = invisible, 1 = fully solid)
      opacityMax:      0.85,   // maximum opacity
      spawnInterval:   1500,   // ms between each new snippet (lower = more frequent)
      initialBatch:    8,     // how many spawn immediately on load
      visibleDuration: 3500,   // ms each snippet stays visible before fading out
      fadeTransition:  "0.4s ease", // CSS transition speed for fade in/out
    };

    // ╔══════════════════════════════════════════════╗
    // ║         WORDS — ADD / REMOVE FREELY          ║
    // ╚══════════════════════════════════════════════╝
    const TECH_SNIPPETS = [
      "git push origin main",
      "GET /api/v1/projects 200 OK",
      "POST /api/v1/auth/token",
      "chmod +x deploy.sh",
      "ls -la /var/log",
      "docker-compose up -d",
      "pip install -r requirements.txt",
      "ssh user@remote-host",
      "SELECT * FROM users;",
      "sudo rm -rf",
      "python train.py --epochs 50",
      "kubectl get pods",
      "redis-cli flushall",
      "curl -X POST localhost:8000",
      "grep -r 'TODO' .",
      "sudo systemctl restart nginx",
      "sudo rm -rf"
    ];

    const container = document.createElement("div");
    container.className = "tech-bg-animations";
    container.setAttribute("aria-hidden", "true");
    document.body.prepend(container);

    function createSnippet() {
      if (document.hidden) return;

      const snippet = document.createElement("div");
      snippet.className = "tech-bg-element";
      snippet.textContent = TECH_SNIPPETS[Math.floor(Math.random() * TECH_SNIPPETS.length)];
      snippet.style.transition = `opacity ${CONFIG.fadeTransition}, transform ${CONFIG.fadeTransition}`;

      const side = Math.random() > 0.5 ? "left" : "right";

      if (side === "left") {
        // Anchor from right edge so text grows leftward into the margin
        const fromRight = 82 + Math.random() * 10; // right: 82–92% = left margin
        snippet.style.right = `${fromRight}%`;
      } else {
        const x = 82 + Math.random() * 18;
        snippet.style.left = `${x}%`;
      }

      const y = Math.random() * 90 + 5;

      snippet.style.top = `${y}%`;
      snippet.style.opacity = "0";
      snippet.style.transform = `translateY(${Math.random() * 20 - 10}px)`;

      container.appendChild(snippet);

      setTimeout(() => {
        const opacity = CONFIG.opacityMin + Math.random() * (CONFIG.opacityMax - CONFIG.opacityMin);
        snippet.style.opacity = opacity.toString();
        snippet.style.transform = "translateY(0)";

        setTimeout(() => {
          snippet.style.opacity = "0";
          snippet.style.transform = `translateY(${Math.random() * -20}px)`;
          setTimeout(() => snippet.remove(), 600);
        }, CONFIG.visibleDuration);
      }, 100);
    }

    setInterval(createSnippet, CONFIG.spawnInterval);
    for (let i = 0; i < CONFIG.initialBatch; i++) {
      setTimeout(createSnippet, i * 250);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
