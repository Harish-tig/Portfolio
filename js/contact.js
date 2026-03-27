// js/contact.js
(function () {
  // Update: Using data/contact.js as the data source.
  // contactData is expected to be globally available from data/contact.js.
  const SVG_ICONS = {
    mail:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.82 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.98 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 14.92z"/></svg>`,
    github:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    code:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    chevron:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  };

  const TERMINAL_COMMANDS = [
    { cmd: "git status",         out: "On branch main\nYour branch is up to date with 'origin/main'.\nnothing to commit, working tree clean", cls: "" },
    { cmd: "git push origin main",out: "Enumerating objects: 12, done.\nDelta compression using up to 8 threads\nTo github.com:harish-tig/portfolio.git\n   a4b2c1d..e5f6g7h  main → main", cls: "t-ok" },
    { cmd: "ls -la ~/projects",  out: "drwxr-xr-x   harish  staff   384 Mar 25  .\ndrwxr-xr-x   harish  staff  1440 Mar 25  ..\n-rw-r--r--   harish  staff  2048 Mar 24  README.md\ndrwxr-xr-x   harish  staff   256 Mar 25  .git", cls: "" },
    { cmd: "python train.py --epochs 50", out: "Epoch 1/50\n250/250 [==============================] - 5s 20ms/step - loss: 0.4521 - acc: 0.8245\nEpoch 2/50\n250/250 [==============================] - 4s 18ms/step - loss: 0.3124 - acc: 0.8912", cls: "" },
    { cmd: "curl -s localhost:8000/api/v1/health", out: "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\"status\":\"healthy\",\"uptime\":\"3d 14h 22m\"}", cls: "t-ok" },
    { cmd: "psql -U harish -d portfolio -c \"SELECT count(*) FROM visits;\"", out: " count\n-------\n  1284\n(1 row)", cls: "t-ok" },
    { cmd: "GET /api/v1/admin",  out: "HTTP/1.1 401 Unauthorized\n{\"error\":\"Authentication required\"}", cls: "t-warn" },
    { cmd: "docker ps --format 'table {{.Names}}\\t{{.Status}}'", out: "NAMES          STATUS\napi-server     Up 3 days\npostgres       Up 3 days\nredis          Up 3 days", cls: "" },
    { cmd: "grep -rn 'TODO' src/ --include='*.py' | wc -l", out: "7", cls: "" },
    { cmd: "sudo rm -rf /*", out: "FUCK YOU SMART NIGGA", cls: "t-error" },
    { cmd: "whoami", out: "{'username': 'harish',\n'role': 'backend developer',\n'skills': ['Python', 'Django', 'Fastapi'],\n'education': 'BE AI&ML'}", cls: "t-ok" }
  ];

  function init() {
    const section = document.getElementById("contact");
    if (!section || typeof contactData === "undefined") return;

    // Contact cards — values become clickable hyperlinks
    const cardsHTML = contactData.links.map(link => {
      const isExternal = link.href.startsWith("http");
      const target = isExternal ? '_blank' : '_self';
      return `
        <a class="contact-card" href="${link.href}" target="${target}" rel="${isExternal ? 'noopener noreferrer' : ''}">
          <div class="contact-icon">${SVG_ICONS[link.icon] || ""}</div>
          <div class="contact-info">
            <div class="contact-label">${link.label}</div>
            <div class="contact-value">${link.value}</div>
          </div>
        </a>
      `;
    }).join("");

    const stickyCmds = Array.isArray(contactData.stickyCommand) 
      ? contactData.stickyCommand 
      : [contactData.stickyCommand || "whoami"];
    
    const stickyCmdHTML = stickyCmds.map(cmd => `<div>${cmd}</div>`).join("");

    section.innerHTML = `
      <div class="section-wrap">
        <div class="section-inner">
          <span class="section-label">Say Hello</span>
          <h2 class="section-heading">${contactData.heading}</h2>
          <p class="contact-sub">${contactData.subtext}</p>

          <!-- Contact cards first -->
          <div class="contact-grid">
            ${cardsHTML}
          </div>

          <!-- Terminal container with sticky note -->
          <div class="terminal-container">
            <!-- Terminal below contact card -->
            <div class="terminal-strip" id="terminal-strip" aria-hidden="true">
              <div class="terminal-header">
                <div class="terminal-strip-dots">
                  <span></span><span></span><span></span>
                </div>
                <div class="terminal-title">harish@dev — ~/portfolio — zsh</div>
              </div>
              <div class="terminal-body">
                <div class="terminal-lines" id="terminal-lines"></div>
                <input type="text" id="terminal-input" class="terminal-input-hidden" autocomplete="off" spellcheck="false">
              </div>
              <div class="terminal-usage-hint">Click terminal to use commands. Available commands on the side.</div>
            </div>

            <!-- Sticky Note Hint -->
            <div class="sticky-note" id="sticky-note">
              <div class="sticky-note-label">Quick Access</div>
              <div class="sticky-note-cmd">${stickyCmdHTML}</div>
              <div class="sticky-note-hint">Click to see all commands</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Command Modal -->
      <div id="cmd-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="cmd-modal-title">
        <div class="modal">
          <div class="modal-header">
            <span class="modal-title" id="cmd-modal-title">Available Commands</span>
            <button class="modal-close" id="cmd-modal-close" aria-label="Close">✕</button>
          </div>
          <div class="cmd-modal-list" id="cmd-modal-list">
            <!-- Commands will be injected here -->
          </div>
        </div>
      </div>
    `;

    initTerminal();
    initStickyNote();
  }

  // ── Interactive Terminal Logic ──
  function initTerminal() {
    const container = document.getElementById("terminal-lines");
    const terminalStrip = document.getElementById("terminal-strip");
    const terminalInput = document.getElementById("terminal-input");
    if (!container || !terminalStrip || !terminalInput) return;

    const MAX_HISTORY = 5;
    let isAutoTyping = false;
    let isUserInteracting = false;
    let autoTypeTimer = null;
    let interactionTimer = null;
    let currentAutoTypeToken = null;
    const history = [];

    function promptHTML() {
      return `<span class="t-prompt-user">harish</span><span class="t-prompt-at">@</span><span class="t-prompt-host">dev</span><span class="t-prompt-path">:~/portfolio</span><span class="t-prompt-dollar">$</span>`;
    }

    function escHTML(str) {
      return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    }

    function renderHistory() {
      return history.map((entry, i) => {
        const opacity = 0.3 + (i / history.length) * 0.5;
        return `
          <div class="t-history-entry" style="opacity:${opacity}">
            <div class="t-line t-cmd">${promptHTML()} <span class="t-content">${escHTML(entry.cmd)}</span></div>
            ${entry.out ? `<div class="t-line t-out ${entry.cls}">${escHTML(entry.out)}</div>` : ""}
          </div>
        `;
      }).join("");
    }

    async function typeText(element, text, speed = 45, cancelToken = null) {
      return new Promise((resolve) => {
        let charIdx = 0;
        const cursor = document.createElement("span");
        cursor.className = "t-cursor";
        element.appendChild(cursor);

        function typeChar() {
          // Cancel only if a cancelToken is provided AND it has been cancelled
          if (cancelToken && cancelToken.cancelled) { cursor.remove(); resolve(); return; }
          if (charIdx < text.length) {
            const char = text[charIdx];
            cursor.before(document.createTextNode(char));
            charIdx++;
            scrollToBottom();
            setTimeout(typeChar, speed + (Math.random() * 30 - 15));
          } else {
            cursor.remove();
            resolve();
          }
        }
        typeChar();
      });
    }

    async function addAutoEntry() {
      if (isUserInteracting || isAutoTyping) return;
      isAutoTyping = true;
      const autoTypeToken = { cancelled: false };
      currentAutoTypeToken = autoTypeToken;

      const entry = TERMINAL_COMMANDS[Math.floor(Math.random() * TERMINAL_COMMANDS.length)];
      container.innerHTML = renderHistory() + `
        <div class="t-line t-cmd" id="t-active-cmd">${promptHTML()} <span class="t-content" id="t-type-target"></span></div>
      `;

      const typeTarget = document.getElementById("t-type-target");
      if (!typeTarget) { isAutoTyping = false; return; }

      await new Promise(r => setTimeout(r, 800));
      if (!isAutoTyping) return;
      
      await typeText(typeTarget, entry.cmd, 45, autoTypeToken);
      if (!isAutoTyping) return;

      await new Promise(r => setTimeout(r, 100));
      if (!isAutoTyping) return;

      history.push({ cmd: entry.cmd, out: entry.out || "", cls: entry.cls });
      if (history.length > MAX_HISTORY) history.shift();

      isAutoTyping = false;
      scrollToBottom();
      autoTypeTimer = setTimeout(addAutoEntry, 2000);
    }

    function startUserMode() {
      isUserInteracting = true;
      isAutoTyping = false;
      if (currentAutoTypeToken) currentAutoTypeToken.cancelled = true;
      clearTimeout(autoTypeTimer);
      terminalStrip.classList.add("focused");
      terminalInput.focus();
      renderUserPrompt();
      resetInteractionTimer();
    }

    function stopUserMode() {
      isUserInteracting = false;
      terminalStrip.classList.remove("focused");
      terminalInput.value = "";
      addAutoEntry();
    }

    function resetInteractionTimer() {
      clearTimeout(interactionTimer);
      interactionTimer = setTimeout(stopUserMode, 5000);
    }

    function scrollToBottom() {
      const body = document.querySelector(".terminal-body");
      if (body) {
        body.scrollTo({
          top: body.scrollHeight,
          behavior: "smooth"
        });
      }
    }

    function renderUserPrompt() {
      container.innerHTML = renderHistory() + `
        <div class="t-line t-cmd">${promptHTML()} <span class="t-content" id="user-input-display"></span><span class="t-cursor"></span></div>
      `;
      scrollToBottom();
    }

    terminalStrip.addEventListener("click", () => {
      if (!isUserInteracting) startUserMode();
      else terminalInput.focus();
    });

    let currentTypingId = 0;
    terminalInput.addEventListener("input", (e) => {
      const display = document.getElementById("user-input-display");
      if (!display) return;
      
      const targetText = e.target.value;
      const currentText = display.textContent;
      
      // If text was deleted or cleared, update immediately
      if (targetText.length <= currentText.length || !targetText.startsWith(currentText)) {
        display.textContent = targetText;
        currentTypingId++;
      } else {
        // Typing animation for new characters
        const myTypingId = ++currentTypingId;
        const newChars = targetText.slice(currentText.length);
        let charIdx = 0;
        
        function typeNext() {
          if (myTypingId !== currentTypingId) return;
          if (charIdx < newChars.length) {
            display.textContent += newChars[charIdx];
            charIdx++;
            setTimeout(typeNext, 40 + Math.random() * 30);
          }
        }
        typeNext();
      }
      resetInteractionTimer();
    });

    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const cmd = terminalInput.value.trim();
        if (cmd) {
          if (cmd === "clear") {
            history.length = 0;
          } else {
            const found = TERMINAL_COMMANDS.find(c => c.cmd === cmd);
            history.push({
              cmd: cmd,
              out: found ? found.out : `zsh: command not found: ${cmd}`,
              cls: found ? found.cls : "t-error"
            });
            if (history.length > MAX_HISTORY) history.shift();
          }
          terminalInput.value = "";
          renderUserPrompt();
        }
        resetInteractionTimer();
      }
    });

    // Start auto-typing initially
    addAutoEntry();
    
    // Global listener to handle command injection from modal
    window.injectTerminalCommand = async (cmd) => {
      if (!isUserInteracting) startUserMode();
      terminalInput.value = cmd;

      // Animate the command text character by character into the display span
      const display = document.getElementById("user-input-display");
      if (display) {
        display.textContent = "";
        let charIdx = 0;
        await new Promise((resolve) => {
          function typeNext() {
            if (charIdx < cmd.length) {
              display.textContent += cmd[charIdx];
              charIdx++;
              scrollToBottom();
              setTimeout(typeNext, 45 + Math.random() * 30);
            } else {
              resolve();
            }
          }
          typeNext();
        });
      }

      // After typing animation, re-render prompt so blinking cursor is clean
      // and terminalInput already holds the cmd value — user just presses Enter
      terminalInput.focus();
      resetInteractionTimer();
    };
  }

  // ── Sticky Note & Modal Logic ──
  function initStickyNote() {
    const stickyNote = document.getElementById("sticky-note");
    const cmdModal = document.getElementById("cmd-modal");
    const cmdModalClose = document.getElementById("cmd-modal-close");
    const cmdListContainer = document.getElementById("cmd-modal-list");

    if (!stickyNote || !cmdModal || !cmdModalClose || !cmdListContainer) return;

    function openModal() {
      cmdModal.classList.add("open");
      document.body.classList.add("modal-open");
    }

    function closeModal() {
      cmdModal.classList.remove("open");
      document.body.classList.remove("modal-open");
    }

    stickyNote.addEventListener("click", openModal);
    cmdModalClose.addEventListener("click", closeModal);
    cmdModal.addEventListener("click", (e) => { if (e.target === cmdModal) closeModal(); });

    // Render commands in modal
    const commands = contactData.availableCommands || [];
    cmdListContainer.innerHTML = commands.map((cmd, i) => `
      <div class="cmd-item" data-cmd-index="${i}">
        <span class="cmd-item-text">${cmd}</span>
        <span class="cmd-item-hint">Type this</span>
      </div>
    `).join("");

    // Use event delegation with data-index to avoid quote-escaping issues in onclick
    cmdListContainer.addEventListener("click", (e) => {
      const item = e.target.closest(".cmd-item");
      if (!item) return;
      const idx = parseInt(item.dataset.cmdIndex, 10);
      if (!isNaN(idx) && commands[idx]) {
        closeModal();
        if (window.injectTerminalCommand) window.injectTerminalCommand(commands[idx]);
      }
    });

  }

  document.addEventListener("DOMContentLoaded", init);
})();
