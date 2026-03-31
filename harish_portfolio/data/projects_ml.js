const mlProjects = [
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance",
    shortDesc: "CNN-LSTM model for Remaining Useful Life prediction on sensor data.",
    image: "images/rot_mot.jpg",
    tech: ["TensorFlow", "Keras", "CNN-LSTM", "Time Series", "NumPy", "Pandas"],
    github: "https://github.com/Harish-tig/Predictive-Maintenance-Dahsboard",
    demo: null,
    apidocs: null,
    date: "Jan 2026",
    details: {
      overview:
        "End-to-end predictive maintenance system using deep learning on multi-sensor industrial time-series data. Covers RUL prediction, fault classification, and degradation lifecycle modelling.",
      highlights: [
        "Designed a CNN-LSTM hybrid architecture for Remaining Useful Life (RUL) prediction, achieving MAE of 0.16 minutes.",
        "Built an ensemble fault classification model across 12 machinery fault classes with 95.18% accuracy.",
        "Modelled a 4-stage bearing degradation lifecycle: Normal → Early → Medium → Severe.",
        "Used interpolation across fault severity levels to simulate realistic run-to-failure progression.",
        "Full pipeline: multi-sensor data preprocessing → model design → evaluation → inference.",
      ],
    },
  },
  {
    id: "railsahayati-ml",
    title: "Rail Sahayati — ML Module",
    shortDesc: "MobileNetV2 image classifier for automatic grievance categorization.",
    image: "images/VB.jpg",
    tech: ["MobileNetV2", "TensorFlow", "Image Classification", "Transfer Learning"],
    github: "https://github.com/Harish-tig/Rail_Madad",
    demo: null,
    apidocs: null,
    date: "Jan 2025",
    details: {
      overview:
        "ML component of the Rail Sahayati grievance platform — a MobileNetV2-based image classifier that auto-categorizes complaint images and routes them to the right department.",
      highlights: [
        "Fine-tuned MobileNetV2 on domain-specific grievance image dataset using transfer learning.",
        "Achieved reliable multi-class classification across complaint categories.",
        "Integrated into Django REST API pipeline for real-time inference on uploaded images.",
        "Reduced human triage time by 50% per complaint through automated department assignment.",
        "Lightweight model architecture optimized for production deployment.",
      ],
    },
  },
];
