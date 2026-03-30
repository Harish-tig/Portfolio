const resumeMLData = {
  type: "ml",
  label: "AI / ML Engineer Resume",
  contact: {
    email: "nadarharish03@gmail.com",
    github: "github.com/harish-tig",
    linkedin: "linkedin.com/in/harish-tig",
    location: "Mumbai, India",
  },
  summary:
    "Final year B.E. student in AI & ML at Mumbai University (2026) with end-to-end experience across the ML lifecycle — data preprocessing, model architecture, training, evaluation, and deployment. Built production-ready models across computer vision, NLP, and time series domains.",
  skills: [
    { category: "Frameworks",  items: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch (basics)"] },
    { category: "Techniques",  items: ["CNN", "LSTM", "Transfer Learning", "Time Series", "Feature Engineering"] },
    { category: "Data",        items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Preprocessing"] },
    { category: "Languages",   items: ["Python", "JavaScript"] },
    { category: "Deployment",  items: ["FastAPI", "Flask", "REST API", "Cloudinary"] },
    { category: "Tools",       items: ["Git", "GitHub", "Postman", "Linux", "Jupyter"] },
  ],
  experience: [
    {
      title: "Joint Technical Head",
      org: "Student's Council, Mumbai University",
      period: "2025 — Present",
      description:
        "Drove ML-powered feature development for internal student tools, including recommendation and scheduling automation.",
      tags: ["Python", "ML", "Data Analysis"],
    },
  ],
  projects: [
    {
      title: "Crop Disease Detection",
      period: "2025",
      description:
        "CNN-based image classification model for identifying plant diseases from leaf photographs. Achieved 94% validation accuracy using transfer learning on a ResNet backbone.",
      tags: ["TensorFlow", "Keras", "CNN", "Transfer Learning"],
    },
    {
      title: "Stock Price Predictor",
      period: "2024",
      description:
        "LSTM time series model trained on 5 years of NIFTY 50 data. Included sliding window preprocessing, early stopping, and a FastAPI inference endpoint.",
      tags: ["LSTM", "Keras", "Pandas", "FastAPI"],
    },
    {
      title: "SIH Game-Based Learning Platform",
      period: "2024",
      description:
        "Smart India Hackathon Finalist. Contributed ML components for adaptive difficulty and learner performance prediction using Scikit-learn classifiers.",
      tags: ["Scikit-learn", "Python", "Data Preprocessing"],
    },
  ],
  education: [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      org: "Mumbai University",
      period: "2022 — 2026",
      description:
        "Final year student. Core coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Data Mining, and Statistical Analysis.",
    },
  ],
  certifications: [
    { title: "Python for AIML",               issuer: "SAP Edunet Foundation", year: "2024" },
    { title: "Data Science & ML Using Python", issuer: "Udemy",                year: "2026" },
    { title: "Python Advanced Course",         issuer: "Udemy",                year: "2023" },
  ],
};
