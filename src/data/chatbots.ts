interface Chatbot {
  name: string;
  description: string;
  icon: string;
  primaryColor: string;  // Ahora será un valor hexadecimal
  secondaryColor: string; // Ahora será un valor hexadecimal
}

type ChatbotsId = 'omni'| 'code' | 'legal' | 'health' | 'data' | 'creative' | 'focus' | 'ai' | 'finance' | 'academic' | 'language' | 'career'

type ChatbotsData = Partial<Record<ChatbotsId, Chatbot>>;

export const chatbotsData: ChatbotsData = {
  omni: {
    name: "Omni Assistant",
    description: "Resuelve cualquier tema, desde ciencia hasta arte, con conocimiento integral.",
    icon: "compass-3-line",
    primaryColor: "#6366f1", // indigo-500
    secondaryColor: "#9333ea", // purple-600
  },
  finance: {
    name: "Finance Guru",
    description: "Optimiza inversiones, analiza mercados y planifica tu futuro económico.",
    icon: "line-chart-line",
    primaryColor: "#60a5fa", // blue-400
    secondaryColor: "#0891b2", // cyan-600
  },
  health: {
    name: "Health Companion",
    description: "Explica condiciones médicas, sugiere hábitos saludables y analiza síntomas.",
    icon: "heart-pulse-line",
    primaryColor: "#34d399", // emerald-400
    secondaryColor: "#0d9488", // teal-600
  },
  academic: {
    name: "Academic Pro",
    description: "Resuelve problemas, explica teorías y ayuda con trabajos universitarios.",
    icon: "book-2-line",
    primaryColor: "#4ade80", // green-400
    secondaryColor: "#65a30d", // lime-600
  },
  language: {
    name: "Language Coach",
    description: "Corrige tu gramática, practica conversación y aprende idiomas interactivamente.",
    icon: "translate",
    primaryColor: "#fbbf24", // amber-400
    secondaryColor: "#f97316", // orange-500
  },
  career: {
    name: "Career Navigator",
    description: "Descubre tu vocación, mejora tu perfil profesional y domina entrevistas.",
    icon: "user-voice-line",
    primaryColor: "#a78bfa", // violet-400
    secondaryColor: "#9333ea", // purple-600
  },
  creative: {
    name: "Creative Studio",
    description: "Genera ideas innovadoras, escribe contenido impactante y desarrolla estrategias creativas.",
    icon: "magic-line",
    primaryColor: "#f472b6", // pink-400
    secondaryColor: "#e11d48", // rose-600
  },
  focus: {
    name: "Focus Master",
    description: "Optimiza tu tiempo, crea rutinas efectivas y maximiza tu rendimiento diario.",
    icon: "timer-flash-line",
    primaryColor: "#1f2937", // gray-800
    secondaryColor: "#0f172a", // slate-900
  },
  code: {
    name: "Code Expert",
    description: "Depura código, explica algoritmos y enseña lenguajes de programación.",
    icon: "code-box-line",
    primaryColor: "#38bdf8", // sky-400
    secondaryColor: "#3b82f6", // blue-500
  },
  data: {
    name: "Data Analyst",
    description: "Interpreta datasets, genera visualizaciones y encuentra patrones ocultos.",
    icon: "bar-chart-box-line",
    primaryColor: "#fb7185", // rose-400
    secondaryColor: "#ef4444", // red-500
  },
  ai: {
    name: "AI Specialist",
    description: "Explica conceptos de IA, modelos de ML y últimas tendencias tecnológicas.",
    icon: "robot-line",
    primaryColor: "#d946ef", // fuchsia-500
    secondaryColor: "#db2777", // pink-600
  },
  legal: {
    name: "Legal Pro",
    description: "Analiza contratos, explica leyes y ayuda con documentos jurídicos.",
    icon: "scales-line",
    primaryColor: "#8b5cf6", // purple-500
    secondaryColor: "#7c3aed", // indigo-600
  },
};