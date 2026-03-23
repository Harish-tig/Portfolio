// js/contact.js
(function () {
  const SVG_ICONS = {
    mail:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.82 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.98 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 14.92z"/></svg>`,
    github:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    code:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  };

  // Terminal command sequence
  const TERMINAL_LINES = [
    { cmd: "$ git push origin main",         out: "→  Branch 'main' updated",         cls: "" },
    { cmd: "$ GET /api/v1/connect",           out: "← 200 OK  — Connection established", cls: "t-ok" },
    { cmd: "$ git pull --rebase",             out: "→  Already up to date.",             cls: "" },
    { cmd: "$ POST /api/v1/message",          out: "← 201 Created  — Message queued",   cls: "t-ok" },
    { cmd: "$ git fetch --all",               out: "→  Fetching origin…",               cls: "" },
    { cmd: "$ DELETE /api/v1/silence",        out: "← 204 No Content  — Done",          cls: "t-ok" },
    { cmd: "$ git commit -m 'reach out'",     out: "→  1 file changed, 0 insertions",   cls: "" },
    { cmd: "$ GET /api/v1/collaborate",       out: "← 200 OK  — Always open",           cls: "t-ok" },
  ];

  function init() {
    const section = document.getElementById("contact");
    if (!section || typeof contactData === "undefined") return;

    section.innerHTML = `
      <div class="section-wrap">
        <div class="section-inner">
          <span class="section-label">Say Hello</span>
          <h2 class="section-heading">${contactData.heading}</h2>
          <p class="contact-sub">${contactData.subtext}</p>

          <!-- Backend terminal strip -->
          <div class="terminal-strip" aria-hidden="true">
            <div class="terminal-strip-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="terminal-lines" id="terminal-lines"></div>
          </div>

          <div class="contact-grid">
            ${contactData.links.map(link => `
              <a class="contact-card" href="${link.href}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">
                <div class="contact-icon">${SVG_ICONS[link.icon] || ""}</div>
                <div class="contact-info">
                  <div class="contact-label">${link.label}</div>
                  <div class="contact-value">${link.value}</div>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </div>`;

    initTerminal();
  }

  function initTerminal() {
    const container = document.getElementById("terminal-lines");
    if (!container) return;

    let idx = 0;
    const MAX_LINES = 3;
    const lines = [];

    function addLine() {
      const entry = TERMINAL_LINES[idx % TERMINAL_LINES.length];
      idx++;

      // cmd line
      const cmdEl = document.createElement("div");
      cmdEl.className = "t-line t-cmd";
      cmdEl.textContent = entry.cmd;

      // output line
      const outEl = document.createElement("div");
      outEl.className = `t-line t-out ${entry.cls}`;
      outEl.textContent = entry.out;

      container.appendChild(cmdEl);
      container.appendChild(outEl);
      lines.push(cmdEl, outEl);

      // Trigger visible
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cmdEl.classList.add("t-visible");
          setTimeout(() => outEl.classList.add("t-visible"), 220);
        });
      });

      // Prune oldest pair when over limit
      while (lines.length > MAX_LINES * 2) {
        const old = lines.shift();
        old.classList.add("t-fading");
        setTimeout(() => old.remove(), 500);
        const old2 = lines.shift();
        old2.classList.add("t-fading");
        setTimeout(() => old2.remove(), 500);
      }
    }

    // Start cycling
    addLine();
    setInterval(addLine, 2600);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
