const contactData = {
  heading: "Get In Touch",
  subtext:
    "Open to ML/AI engineering and backend developer roles. Feel free to reach out.",
  links: [
    {
      label: "Email",
      value: "nadarharish03@gmail.com",
      href: "mailto:nadarharish03@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      value: "+91 7039369562",
      href: "tel:+917039369562",
      icon: "phone",
    },
    {
      label: "GitHub",
      value: "github.com/harishnadar",
      href: "https://github.com/harishnadar",
      icon: "github",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/harishnadar",
      href: "https://linkedin.com/in/harishnadar",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      value: "leetcode.com/harishnadar",
      href: "https://leetcode.com/harishnadar",
      icon: "code",
    },
  ],
  stickyCommand: ["whoami", "git status", "ls -la ~/projects", "clear"],
  availableCommands: [
    "whoami",
    "git status",
    "ls -la ~/projects",
    "python train.py --epochs 50",
    "curl -s localhost:8000/api/v1/health",
    "docker ps",
    "grep -rn 'TODO' src/ --include='*.py' | wc -l",
    "clear"
  ]
};
