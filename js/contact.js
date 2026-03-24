// js/contact.js
(function () {
  const SVG_ICONS = {
    mail:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.82 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.98 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 14.92z"/></svg>`,
    github:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    code:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  };

  const TERMINAL_COMMANDS = [
    { cmd: "git push origin main", out: "Enumerating objects: 12, done.\nDelta compression using up to 8 threads\nTotal 12 (delta 4), reused 0 (delta 0)\nTo github.com:harish-tig/portfolio.git\n   a4b2c1d..e5f6g7h  main -> main", cls: "t-ok" },
    { cmd: "git pull --rebase", out: "remote: Enumerating objects: 5, done.\nremote: Counting objects: 100% (5/5), done.\nremote: Total 3 (delta 2), reused 0 (delta 0)\nFrom github.com:harish-tig/portfolio\n   e5f6g7h..i8j9k0l  main -> origin/main\nSuccessfully rebased and updated refs/heads/main.", cls: "t-ok" },
    { cmd: "ls -la /home/harish/projects", out: "drwxr-xr-x  12 harish  staff   384 Mar 25 10:24 .\ndrwxr-xr-x  45 harish  staff  1440 Mar 25 09:15 ..\n-rw-r--r--   1 harish  staff  2048 Mar 24 18:30 README.md\ndrwxr-xr-x   8 harish  staff   256 Mar 25 10:20 .git", cls: "" },
    { cmd: "chmod +x deploy.sh", out: "", cls: "" },
    { cmd: "GET /api/v1/projects", out: "HTTP/1.1 200 OK\nContent-Type: application/json\nTransfer-Encoding: chunked\n\n{ \"status\": \"success\", \"data\": [ ... ] }", cls: "t-ok" },
    { cmd: "POST /api/v1/contact", out: "HTTP/1.1 201 Created\nLocation: /api/v1/messages/502\n\n{ \"message\": \"Message queued successfully\" }", cls: "t-ok" },
    { cmd: "python train_model.py", out: "Epoch 1/50\n250/250 [==============================] - 5s 20ms/step - loss: 0.4521 - accuracy: 0.8245\nEpoch 2/50\n250/250 [==============================] - 4s 18ms/step - loss: 0.3124 - accuracy: 0.8912", cls: "" },
    { cmd: "ssh-keygen -t rsa -b 4096", out: "Generating public/private rsa key pair.\nEnter file in which to save the key (/home/harish/.ssh/id_rsa): \nYour identification has been saved in /home/harish/.ssh/id_rsa.\nYour public key has been saved in /home/harish/.ssh/id_rsa.pub.", cls: "t-ok" },
    { cmd: "GET /api/v1/admin", out: "HTTP/1.1 401 Unauthorized\nWWW-Authenticate: Bearer realm=\"Access to the admin area\"\n\n{ \"error\": \"Authentication required\" }", cls: "t-warn" },
    { cmd: "psql -U harish -d portfolio", out: "psql (14.5, server 14.4)\nType \"help\" for help.\n\nportfolio=# SELECT count(*) FROM visits;\n count \n-------\n  1284\n(1 row)", cls: "t-ok" },
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

          <!-- Redesigned Terminal -->
          <div class="terminal-strip" aria-hidden="true">
            <div class="terminal-header">
              <div class="terminal-strip-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="terminal-title">bash — portfolio — 80x24</div>
            </div>
            <div class="terminal-body">
              <div class="terminal-lines" id="terminal-lines"></div>
            </div>
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

    const MAX_ENTRIES = 2;
    let isTyping = false;

    function typeText(element, text, speed = 40) {
      return new Promise((resolve) => {
        let charIdx = 0;
        const cursor = document.createElement("span");
        cursor.className = "t-cursor";
        element.appendChild(cursor);

        function typeChar() {
          if (charIdx < text.length) {
            const char = text[charIdx];
            cursor.before(char);
            charIdx++;
            // Randomize typing speed for realism
            const variance = speed + (Math.random() * 40 - 20);
            setTimeout(typeChar, Math.max(10, variance));
          } else {
            cursor.remove();
            resolve();
          }
        }
        typeChar();
      });
    }

    async function addEntry() {
      if (isTyping) return;
      isTyping = true;

      // Remove old entries if over limit
      while (container.children.length >= MAX_ENTRIES * 2) {
        container.removeChild(container.firstChild); // cmd
        container.removeChild(container.firstChild); // out
      }

      const entry = TERMINAL_COMMANDS[Math.floor(Math.random() * TERMINAL_COMMANDS.length)];
      
      const cmdLine = document.createElement("div");
      cmdLine.className = "t-line t-cmd";
      cmdLine.innerHTML = `<span class="t-prompt">➜</span> <span class="t-content"></span>`;
      container.appendChild(cmdLine);

      const contentSpan = cmdLine.querySelector(".t-content");
      
      // Initial wait
      await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
      
      // Type command
      await typeText(contentSpan, entry.cmd, 50);
      
      // Execution wait
      await new Promise(r => setTimeout(r, 300 + Math.random() * 500));
      
      // Show output
      if (entry.out) {
        const outLine = document.createElement("div");
        outLine.className = `t-line t-out ${entry.cls}`;
        outLine.textContent = entry.out;
        container.appendChild(outLine);
      }

      isTyping = false;
      
      // Schedule next entry
      setTimeout(addEntry, 3000 + Math.random() * 2000);
    }

    addEntry();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
