const resumeBackendData = {
  type: "backend",
  label: "Backend Developer Resume",
  contact: {
    email: "nadarharish03@gmail.com",
    github: "github.com/harish-tig",
    linkedin: "linkedin.com/in/harish-nadar-tig",
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
      title: "Flutter Developer Intern",
      org: "10x Growth",
      period: "Mar 2025 — June 2025",
      description:
        "Developed statefull and stateless web and mobile applications pages using Flutter and Dart.",
      tags: ["Flutter", "Dart", "Supabase", "Git"],
    },
    {
      title: "Backend Developer Intern",
      org: "OnlineSavaari Private Limited",
      period: "Mar 2026 — present",
      description:
        "Designed and implemented RESTful APIs for a ride-booking platform using Django REST Framework, efficient data models, and scalable architecture.",
      tags: ["Django", "Django REST Framework", "PostgreSQL"],
    },
  ],
  projects: [
  {
    title: "LocalSeva Backend",
    period: "2026",
    description:
      "Django REST Framework backend for a multi-role service marketplace connecting users with providers. Implemented role-based access control, JWT authentication, booking workflows, and review systems with optimized PostgreSQL models and Cloudinary media handling.",
    tags: ["Django REST Framework", "PostgreSQL", "JWT", "Cloudinary"],
  },
  {
    title: "Invyta Event Management API",
    period: "2025",
    description:
      "Flask-based REST API for event lifecycle management with secure JWT authentication, email OTP verification, and rate-limited endpoints. Built features like event creation, invite-based access, RSVP tracking, and personalized recommendations using MongoDB.",
    tags: ["Flask", "MongoDB", "JWT", "REST API"],
  },
  {
    title: "Rail Sahayati Backend",
    period: "2025",
    description:
      "Backend system for AI-driven railway grievance management using Django and MongoDB. Integrated MobileNetV2-based image classification for automated complaint routing, reducing resolution time by 50% with role-based workflows and REST APIs.",
    tags: ["Django", "MongoDB", "AI Integration", "REST API"],
  },
  ],
  education: [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      org: "Mumbai University",
      period: "2022 — 2026",
      cgpa: "8.5/10",
      description: "Final year student. Coursework includes Data Structures, DBMS, Operating Systems, Artificial Intelligence, and Machine Learning.",
    },
    {
      title: "HSC (12th Grade)",
      org: "Maharashtra State Board",
      period: "2020— 2022",
      // cgpa: "57%",
      description: "Completed Higher Secondary Certificate with a focus on Science stream, achieving 57% overall.",
    },
    {
      title: "SSC (10th Grade)",
      org: "Maharashtra State Board",
      period: "2019 — 2020",
      // cgpa: "89%",
      description: "Completed Secondary School Certificate with an 89% score, demonstrating strong academic performance in foundational subjects.",
    },
  ],
  certifications: [
    { title: "Python for AIML",               issuer: "SAP Edunet Foundation", year: "2024" },
    { title: "Data Science & ML Using Python", issuer: "Udemy",                year: "2026" },
    { title: "Python Advanced Course",         issuer: "Udemy",                year: "2023" },
  ],
};
