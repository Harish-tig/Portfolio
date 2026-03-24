const resumeBackendData = {
  type: "backend",
  label: "Backend Developer Resume",
  contact: {
    email: "nadarharish05gi@gmail.com",
    github: "github.com/harish-tig",
    linkedin: "linkedin.com/in/harish-tig",
    location: "Mumbai, India",
  },
  summary:
    "Final year B.E. student in AI & ML at Mumbai University (2026) with hands-on experience designing and deploying production-ready REST APIs using Django, FastAPI, and Flask. Focused on clean architecture, secure authentication, and scalable system design.",
  skills: [
    { category: "Frameworks",  items: ["Django", "Django REST Framework", "FastAPI", "Flask"] },
    { category: "Databases",   items: ["PostgreSQL", "MongoDB", "Redis", "SQL"] },
    { category: "Auth & APIs", items: ["JWT Auth", "REST API Design", "OAuth2"] },
    { category: "Languages",   items: ["Python", "JavaScript"] },
    { category: "Tools",       items: ["Git", "GitHub", "Postman", "Cloudinary", "Linux"] },
  ],
  experience: [
    {
      title: "Joint Technical Head",
      org: "Student's Council, Mumbai University",
      period: "2025 — Present",
      description:
        "Lead technical initiatives for the college student council. Architected and maintained internal web tools, coordinating cross-functional teams across design and development.",
      tags: ["Django", "REST API", "PostgreSQL"],
    },
  ],
  projects: [
    {
      title: "Campus Connect API",
      period: "2025",
      description:
        "Multi-tenant REST API serving college management features — timetables, announcements, and event registrations. Built with Django REST Framework and JWT-based auth.",
      tags: ["Django REST Framework", "PostgreSQL", "JWT", "Redis"],
    },
    {
      title: "SecureVault Backend",
      period: "2024",
      description:
        "FastAPI microservice for encrypted credential storage with role-based access control, refresh token rotation, and audit logging.",
      tags: ["FastAPI", "MongoDB", "JWT", "Python"],
    },
    {
      title: "E-Commerce API",
      period: "2024",
      description:
        "Full-featured e-commerce backend with product catalog, cart, orders, and Cloudinary-integrated media uploads. Deployed on a Linux VPS.",
      tags: ["Django", "PostgreSQL", "Cloudinary", "REST API"],
    },
  ],
  education: [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      org: "Mumbai University",
      period: "2022 — 2026",
      description: "Final year student. Coursework includes Data Structures, DBMS, Operating Systems, Computer Networks, and Machine Learning.",
    },
  ],
  certifications: [
    { title: "Python for AIML",               issuer: "SAP Edunet Foundation", year: "2024" },
    { title: "Data Science & ML Using Python", issuer: "Udemy",                year: "2026" },
    { title: "Python Advanced Course",         issuer: "Udemy",                year: "2023" },
  ],
};
